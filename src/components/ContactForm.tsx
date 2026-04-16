import { useEffect, useRef, useState } from 'react';
import { translations, type Lang } from '../i18n/translations';
import { ObfuscatedLink, ObfuscatedText } from './ObfuscatedContact';

// Base64-encoded contact details — never appear as plain text in static HTML
const PHONE_HREF  = 'dGVsOiszMTYzNDgzNjExOA==';
const PHONE_LABEL = 'KzMxIDYgMzQ4MyA2MTE4';
const EMAIL_HREF  = 'bWFpbHRvOmRhbmllbEBpY3Qtc3VwcG9ydC1saW1idXJnLm5s';
const EMAIL_LABEL = 'ZGFuaWVsQGljdC1zdXBwb3J0LWxpbWJ1cmcubmw=';
const LOCATION    = 'S2Vya3JhZGUsIFp1aWQtTGltYnVyZw=='; // "Kerkrade, Zuid-Limburg"

// Minimum milliseconds a real human takes to fill in the form
const MIN_FILL_TIME_MS = 3000;

// Very basic URL pattern — messages containing bare URLs are likely spam
const URL_PATTERN = /https?:\/\/|www\.\S+\.\S{2,}/i;

export default function ContactForm({ lang = 'nl' }: { lang?: Lang }) {
    const t = translations[lang].contact;
    const loadTimeRef = useRef<number>(0);
    const [submitState, setSubmitState] = useState<'idle' | 'blocked' | 'ok'>('idle');

    useEffect(() => {
        loadTimeRef.current = Date.now();
    }, []);

    function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);

        // 1. Honeypot — hidden field must be empty
        if (data.get('_hp') || data.get('_honeypot')) {
            setSubmitState('blocked');
            return;
        }

        // 2. Time gate — reject submissions faster than MIN_FILL_TIME_MS
        if (Date.now() - loadTimeRef.current < MIN_FILL_TIME_MS) {
            setSubmitState('blocked');
            return;
        }

        // 3. URL in message body — likely spam
        const message = (data.get('message') as string) ?? '';
        if (URL_PATTERN.test(message)) {
            setSubmitState('blocked');
            return;
        }

        // Passed all checks
        setSubmitState('ok');
        // Real form submission would be wired here (e.g. fetch to an endpoint)
    }

    // Obfuscated info cards: only Phone and Email use ObfuscatedLink;
    // Location and Available are plain text (not sensitive).
    const infoCards = [
        {
            label: t.info[0].label,
            node: (
                <ObfuscatedLink
                    encoded={PHONE_HREF}
                    label={PHONE_LABEL}
                    className="text-base font-semibold text-card-foreground no-underline"
                />
            ),
        },
        {
            label: t.info[1].label,
            node: (
                <ObfuscatedLink
                    encoded={EMAIL_HREF}
                    label={EMAIL_LABEL}
                    className="text-base font-semibold text-card-foreground no-underline"
                />
            ),
        },
        {
            label: t.info[2].label,
            node: (
                <ObfuscatedText
                    encoded={LOCATION}
                    className="text-base font-semibold text-card-foreground"
                />
            ),
        },
        {
            label: t.info[3].label,
            node: (
                <span className="text-base font-semibold text-card-foreground">
                    {t.info[3].value}
                </span>
            ),
        },
    ];

    return (
        <section id="contact" className="section-padding bg-section-alt">
            <div className="container-main">
                <div className="mb-12 text-center">
                    <h2 className="mb-4">{t.heading}</h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        {t.subtitle}
                    </p>
                </div>

                <div className="mx-auto max-w-5xl">
                    <div className="grid gap-8 lg:grid-cols-5">
                        <div className="flex flex-col gap-4 lg:col-span-2">
                            {infoCards.map((card) => (
                                <div
                                    key={card.label}
                                    className="rounded-xl border border-border bg-white px-5 py-4"
                                >
                                    <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                                        {card.label}
                                    </div>
                                    {card.node}
                                </div>
                            ))}
                            <p className="mt-1 text-sm text-muted-foreground italic">{t.urgentNote}</p>
                        </div>

                        {submitState === 'ok' ? (
                            <div className="flex items-center justify-center rounded-2xl border border-border bg-white p-6 shadow-sm lg:col-span-3">
                                <p className="text-center text-lg font-semibold text-primary">
                                    {lang === 'en'
                                        ? 'Message received! I\'ll get back to you shortly.'
                                        : 'Bericht ontvangen! Ik neem snel contact met je op.'}
                                </p>
                            </div>
                        ) : (
                            <form
                                className="flex flex-col gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm lg:col-span-3"
                                id="contact-form"
                                aria-label={lang === 'en' ? 'Contact form' : 'Contactformulier'}
                                onSubmit={handleSubmit}
                            >
                                <p className="mb-2 text-lg font-semibold text-primary">{t.formTitle}</p>

                                {/* Primary honeypot — must stay empty */}
                                <input
                                    type="text"
                                    name="_honeypot"
                                    style={{ display: 'none' }}
                                    tabIndex={-1}
                                    autoComplete="off"
                                    aria-hidden="true"
                                />
                                {/* Secondary trap — positioned off-screen via CSS */}
                                <input
                                    type="text"
                                    name="_hp"
                                    className="absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden opacity-0"
                                    tabIndex={-1}
                                    autoComplete="off"
                                    aria-hidden="true"
                                />

                                <input type="hidden" name="_form_name" value={lang === 'en' ? 'Contact form' : 'Contactformulier'} />
                                <input type="hidden" name="_page_url" value="" />

                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-card-foreground">
                                            {t.nameLabel}
                                        </label>
                                        <input id="name" name="name" type="text" autoComplete="name" placeholder={t.namePlaceholder} className="form-input" />
                                    </div>
                                    <div>
                                        <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-card-foreground">
                                            {t.companyLabel}
                                        </label>
                                        <input id="company" name="company" type="text" autoComplete="organization" placeholder={t.companyPlaceholder} className="form-input" />
                                    </div>
                                </div>

                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-card-foreground">
                                            {t.phoneLabel}
                                        </label>
                                        <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder={t.phonePlaceholder} className="form-input" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-card-foreground">
                                            {t.emailLabel}
                                        </label>
                                        <input id="email" name="email" type="email" inputMode="email" autoComplete="email" placeholder={t.emailPlaceholder} className="form-input" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-card-foreground">
                                        {t.messageLabel}
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        placeholder={t.messagePlaceholder}
                                        className="form-input resize-none"
                                    ></textarea>
                                </div>

                                {submitState === 'blocked' && (
                                    <p className="text-sm text-red-600" role="alert">
                                        {lang === 'en'
                                            ? 'Submission blocked. Please try again.'
                                            : 'Verzending geblokkeerd. Probeer het opnieuw.'}
                                    </p>
                                )}

                                <button type="submit" className="btn-primary w-full py-3 text-base">
                                    {t.submit}
                                </button>
                                <p className="text-center text-xs text-muted-foreground">
                                    {t.consent}
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
