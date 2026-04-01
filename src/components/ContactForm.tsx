import { translations, type Lang } from '../i18n/translations';

export default function ContactForm({ lang = 'nl' }: { lang?: Lang }) {
    const t = translations[lang].contact;
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
                            {t.info.map((item) => {
                                const inner = (
                                    <div className="rounded-xl border border-border bg-white px-5 py-4">
                                        <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{item.label}</div>
                                        <div className="text-base font-semibold text-card-foreground">{item.value}</div>
                                    </div>
                                );
                                if ('href' in item && item.href) {
                                    return (
                                        <a key={item.label} href={item.href} className="no-underline transition-shadow hover:shadow-md rounded-xl">
                                            {inner}
                                        </a>
                                    );
                                }
                                return <div key={item.label}>{inner}</div>;
                            })}
                            <p className="mt-1 text-sm text-muted-foreground italic">{t.urgentNote}</p>
                        </div>

                        <form
                            className="flex flex-col gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm lg:col-span-3"
                            id="contact-form"
                            aria-label={lang === 'en' ? 'Contact form' : 'Contactformulier'}
                        >
                            <p className="mb-2 text-lg font-semibold text-primary">{t.formTitle}</p>

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
        </section>
    );
}
