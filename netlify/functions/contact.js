export default async (req) => {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;
  const SITE_URL = process.env.SITE_URL || "https://oros-it.nl";

  try {
    const body = await req.json();

    if (body._honeypot) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    const { name, email, message } = body;
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Verplichte velden ontbreken" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const datetime = new Intl.DateTimeFormat("nl-NL", {
      timeZone: "Europe/Amsterdam",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date());

    const formName = body._form_name || "Contactformulier";
    const pageUrl = body._page_url || SITE_URL;
    const company = body.company || "—";
    const phone = body.phone || "—";

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
      return new Response(
        JSON.stringify({ success: true, _note: "Telegram not configured" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    const tgRes = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
          parse_mode: "Markdown",
        }),
      }
    );

    if (!tgRes.ok) {
      const errText = await tgRes.text();
      console.error("Telegram API error:", errText);
      throw new Error("Telegram send failed");
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Contact function error:", err);
    return new Response(
      JSON.stringify({ error: "Serverfout, probeer opnieuw" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

export const config = { path: "/api/contact" };
