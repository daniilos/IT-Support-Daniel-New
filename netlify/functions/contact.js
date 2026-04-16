/**
 * Netlify Edge/Serverless Function — POST /api/contact
 *
 * Spam defence layers (self-hosted, no external services):
 *  1. Method guard
 *  2. Dual honeypot check (_honeypot + website)
 *  3. Time-gate: reject if _t missing OR submitted < 4 s after load OR > 1 h old
 *  4. URL pattern filter in message body
 *  5. Message length validation (10–2000 chars)
 *  6. Required field validation
 *  7. In-memory rate limit per IP (3 submissions per 10 min)
 *     Note: resets on function cold-start; for persistent rate-limiting use KV/Redis.
 */

// In-memory rate limit store — key: IP, value: { count, windowStart }
const ipStore = new Map();
const RATE_WINDOW_MS   = 10 * 60 * 1000; // 10 minutes
const RATE_MAX_HITS    = 3;
const MIN_FILL_MS      = 4000;            // 4 seconds
const MAX_FORM_AGE_MS  = 60 * 60 * 1000; // 1 hour

// Very simple URL detector — rejects messages that look like link spam
const URL_RE = /https?:\/\/|www\.\S+\.\S{2,}/i;

function isRateLimited(ip) {
  const now = Date.now();
  const entry = ipStore.get(ip);

  if (!entry || now - entry.windowStart > RATE_WINDOW_MS) {
    ipStore.set(ip, { count: 1, windowStart: now });
    return false;
  }

  if (entry.count >= RATE_MAX_HITS) return true;

  entry.count++;
  return false;
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export default async (req) => {
  // 1. Method guard
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID   = process.env.TELEGRAM_CHAT_ID;
  const SITE_URL  = process.env.SITE_URL || "https://oros-it.nl";

  let body;
  try {
    body = await req.json();
  } catch {
    return json({ error: "Ongeldig verzoek" }, 400);
  }

  // 2. Dual honeypot
  if (body._honeypot || body.website) {
    // Return fake success — don't hint that the submission was blocked
    return json({ success: true });
  }

  // 3. Time-gate
  const ts = Number(body._t);
  const now = Date.now();
  if (!ts || now - ts < MIN_FILL_MS || now - ts > MAX_FORM_AGE_MS) {
    return json({ error: "Verzoek verlopen of ongeldig. Ververs de pagina en probeer opnieuw." }, 400);
  }

  // 4. URL filter
  const message = String(body.message ?? "").trim();
  if (URL_RE.test(message)) {
    return json({ error: "Berichten met links worden niet geaccepteerd." }, 400);
  }

  // 5. Message length
  if (message.length < 10 || message.length > 2000) {
    return json({ error: "Bericht moet tussen 10 en 2000 tekens zijn." }, 400);
  }

  // 6. Required fields
  const { name, email } = body;
  if (!name || !email || !message) {
    return json({ error: "Verplichte velden ontbreken" }, 400);
  }

  // Basic email sanity check (no full RFC — just catch obvious garbage)
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return json({ error: "Ongeldig e-mailadres" }, 400);
  }

  // 7. Rate limiting per IP
  const ip = req.headers?.get?.("x-forwarded-for")?.split(",")[0]?.trim()
          || req.headers?.["x-forwarded-for"]?.split(",")[0]?.trim()
          || "unknown";

  if (isRateLimited(ip)) {
    return json({ error: "Te veel verzoeken. Probeer het over 10 minuten opnieuw." }, 429);
  }

  // Build and send Telegram notification
  const datetime = new Intl.DateTimeFormat("nl-NL", {
    timeZone: "Europe/Amsterdam",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date());

  const formName = body._form_name || "Contactformulier";
  const pageUrl  = body._page_url  || SITE_URL;
  const company  = body.company    || "—";
  const phone    = body.phone      || "—";

  const text = [
    `🖥️ *NIEUWE AANVRAAG — IT Support*`,
    ``,
    `📋 *Formulier:* ${formName}`,
    `🌐 *Website:* ${SITE_URL}`,
    `📄 *Pagina:* ${pageUrl}`,
    ``,
    `👤 *Naam:* ${name}`,
    `🏢 *Bedrijf:* ${company}`,
    `📧 *E-mail:* ${email}`,
    `📞 *Telefoon:* ${phone}`,
    ``,
    `💬 *Bericht:*`,
    message,
    ``,
    `🕐 ${datetime} (Amsterdam)`,
  ].join("\n");

  if (!BOT_TOKEN || !CHAT_ID) {
    console.error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID");
    return json({ success: true, _note: "Telegram not configured" });
  }

  try {
    const tgRes = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: "Markdown" }),
      }
    );

    if (!tgRes.ok) {
      const errText = await tgRes.text();
      console.error("Telegram API error:", errText);
      throw new Error("Telegram send failed");
    }

    return json({ success: true });
  } catch (err) {
    console.error("Contact function error:", err);
    return json({ error: "Serverfout, probeer opnieuw" }, 500);
  }
};

export const config = { path: "/api/contact" };
