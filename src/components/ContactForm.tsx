import { translations, type Lang } from '../i18n/translations';
import { ObfuscatedLink, ObfuscatedText } from './ObfuscatedContact';

// Base64-encoded contact details — never appear as plain text in static HTML
const PHONE_HREF  = 'dGVsOiszMTYzNDgzNjExOA==';
const PHONE_LABEL = 'KzMxIDYgMzQ4MyA2MTE4';
const EMAIL_HREF  = 'bWFpbHRvOmRhbmllbEBpY3Qtc3VwcG9ydC1saW1idXJnLm5s';
const EMAIL_LABEL = 'ZGFuaWVsQGljdC1zdXBwb3J0LWxpbWJ1cmcubmw=';
const LOCATION    = 'S2Vya3JhZGUsIFp1aWQtTGltYnVyZw=='; // "Kerkrade, Zuid-Limburg"

export default function ContactForm({ lang = 'nl' }: { lang?: Lang }) {
    const t = translations[lang].contact;

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

                        <form
                            className="flex flex-col gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm lg:col-span-3"
                            id="contact-form"
                            aria-label={lang === 'en' ? 'Contact form' : 'Contactformulier'}
                        >
                            <p className="mb-2 text-lg font-semibold text-primary">{t.formTitle}</p>

                            {/* Primary honeypot — CSS hidden, must stay empty */}
                            <div
                                style={{ position: 'absolute', left: '-9999px', opacity: 0 }}
                                aria-hidden="true"
                            >
                                <input
                                    type="text"
                                    name="_honeypot"
                                    tabIndex={-1}
                                    autoComplete="off"
                                />
                            </div>
                            {/* Secondary trap field — different name, same concept */}
                            <input
                                type="text"
                                name="website"
                                className="absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden opacity-0"
                                tabIndex={-1}
                                autoComplete="off"
                                aria-hidden="true"
                            />

                            <input type="hidden" name="_form_name" value={lang === 'en' ? 'Contact form' : 'Contactformulier'} />
                            <input type="hidden" name="_page_url" value="" />
                            {/* Timestamp set by inline script — used for time-gate on server */}
                            <input type="hidden" name="_t" id="contact-form-t" />

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

                            <button type="submit" className="btn-primary w-full py-3 text-base">
                                {t.submit}
                            </button>
                            <p className="text-center text-xs text-muted-foreground">
                                {t.consent}
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            {/* Set load-time timestamp for server-side time-gate */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `(function(){var f=document.getElementById('contact-form-t');if(f)f.value=Date.now();})();`,
                }}
            />
        </section>
    );
}
