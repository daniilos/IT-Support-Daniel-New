export type Lang = 'nl' | 'en';

const nl = {
    meta: {
        title: 'IT Support Limburg voor kleine bedrijven | Oros IT Support Limburg',
        description:
            'IT support in Zuid-Limburg voor kleine bedrijven. Computers, printers, Wi-Fi, Microsoft 365, storingen en beveiliging — snel, lokaal en zonder gedoe. Bel +31 6 3483 6118.',
    },
    topBar: {
        phone: '+31 6 3483 6118',
        email: 'info@oros.agency',
        hours: 'Ma–Vr: 9:00–18:00',
    },
    header: {
        nav: [
            { label: 'Diensten', href: '#services' },
            { label: 'Over mij', href: '#about' },
            { label: 'Waarom OIT', href: '#why-oros' },
            { label: 'Blog', href: '/blog/' },
            { label: 'Tarieven', href: '#pricing' },
            { label: 'Contact', href: '#contact' },
        ],
        cta: 'Ondersteuning aanvragen',
        menuLabel: 'Menu openen',
    },
    hero: {
        heading: 'IT support in Limburg',
        headingAccent: 'die gewoon werkt',
        subtitle:
            'Ik help kleine bedrijven in Zuid-Limburg met dagelijkse IT: computers, printers, Wi-Fi, gebruikersaccounts en storingen — ter plaatse in Kerkrade, Heerlen, Maastricht en omgeving, of op afstand.',
        valueProps: 'Snel geholpen, duidelijke uitleg, geen verrassingen op de factuur.',
        cta1: 'Ondersteuning aanvragen',
        cta2: 'Gratis kennismakingsgesprek',
    },
    trustBar: {
        items: [
            'Gevestigd in Kerkrade, actief in heel Zuid-Limburg',
            'Windows, macOS & Linux',
            'On-site én remote support',
            'Voor kleine kantoren en groeiende bedrijven',
        ],
    },
    services: {
        heading: 'Wat ik voor je kan doen',
        items: [
            {
                title: 'Werkplekondersteuning',
                description:
                    'Computers traag, crashen of niet bijgewerkt? Ik installeer, onderhoud en los problemen op bij Windows-pc\'s, Macs en laptops.',
                icon: 'monitor',
            },
            {
                title: 'Printer- en randapparatuur',
                description:
                    'Printer offline, scanner werkt niet, labelprinter hapert. Ik los het op — ook als de leverancier zegt dat het niet kan.',
                icon: 'printer',
            },
            {
                title: 'Wi-Fi en netwerk',
                description:
                    'Traag internet op de werkplek, wifi die wegvalt of een router die niet meer meewerkt. Ik configureer netwerken die stabiel blijven.',
                icon: 'wifi',
            },
            {
                title: 'Accounts en toegangsbeheer',
                description:
                    'Nieuwe medewerker, vertrekkende collega, vergeten wachtwoord of geen toegang meer tot e-mail. Ik regel het snel en correct.',
                icon: 'users',
            },
            {
                title: 'Remote en on-site hulp',
                description:
                    'Als het mis gaat, wil je snel iemand. Op afstand waar het kan, ter plaatse waar het moet — ook voor locaties buiten Kerkrade.',
                icon: 'headset',
            },
            {
                title: 'Beveiliging en back-up',
                description:
                    'Updates, back-ups, MFA en phishing-bewustwording. Niet als groot project, maar als gewone routine die werkt zonder dat je er bij na hoeft te denken.',
                icon: 'shield',
            },
            {
                title: 'ChatGPT en automatisering',
                description:
                    'Taken die je elke week handmatig doet, hoef je misschien niet meer handmatig te doen. Ik kijk wat er te automatiseren valt en help het in te richten.',
                icon: 'sparkles',
            },
        ],
    },
    about: {
        heading: 'Wie is Daniel?',
        paragraphs: [
            'Zeven jaar lang was ik de enige IT-persoon bij een medisch bedrijf met meerdere vestigingen in Nederland. Als er iets kapotging — server, netwerk, werkplek, beveiliging — loste ik het op. Er was niemand anders om op te bellen.',
            'Die periode leerde me hoe IT er in de praktijk uitziet bij kleine organisaties: geen groot team, geen eindeloos budget, maar wel mensen die erop rekenen dat alles werkt. Dat is wat ik nu voor andere kleine bedrijven in Limburg doe.',
        ],
        approach: 'Mijn aanpak:',
        approachText: 'Zorgen dat het werkt, uitleggen wat er aan de hand is, en geen gedoe over de factuur.',
        quote:
            '"Stille IT is het doel. Chaos is wat je krijgt als je stopt met investeren in IT die gewoon werkt."',
        quoteAuthor: '— Daniel Orosz',
    },
    whyOros: {
        heading: 'Waarom kiezen voor OIT IT Support Limburg?',
        reasons: [
            {
                title: 'Lokaal en bereikbaar',
                description: 'Ik woon en werk in Kerkrade. Bij een storing kan ik snel ter plaatse zijn — geen centrale planningsdienst die je doorverbindt.',
            },
            {
                title: 'Gewone taal, geen jargon',
                description:
                    'Ik leg uit wat er is misgegaan en wat ik ga doen. Geen technische verhalen waar je niets mee kunt. Gewoon duidelijk.',
            },
            {
                title: 'Oplossingen die passen bij jouw situatie',
                description:
                    'Ik adviseer wat werkt in jouw kantoor — niet de duurste optie, niet de meest complexe, maar wat het probleem daadwerkelijk oplost.',
            },
            {
                title: 'Remote of on-site, jij bepaalt',
                description: 'Veel problemen los ik op afstand op binnen een uur. Soms is ter plaatse sneller. Je hoeft dat niet zelf te beoordelen — ik doe dat.',
            },
            {
                title: 'Vertrouwd aanspreekpunt',
                description:
                    'Je belt mij, niet een helpdesknummer. Ik ken jouw omgeving, weet wat er eerder is speelde en hoef niet elke keer opnieuw uitgelegd te worden hoe het zit.',
            },
        ],
    },
    commonProblems: {
        heading: 'Waarmee ik dagelijks help',
        items: [
            'Printer die offline staat of niet afdrukt',
            'Wi-Fi traag of steeds wegvallen',
            'Nieuwe medewerker instellen',
            'Geen toegang tot e-mail of account',
            'Trage of vastlopende computer',
            'Back-up of beveiligingscheck',
            'IT-opruiming bij verhuis of reorganisatie',
            'Vragen over Microsoft 365 of Google Workspace',
        ],
    },
    comparison: {
        heading: 'Eigen IT-medewerker vs. lokale IT-support',
        inHouseTitle: 'Eigen IT-medewerker',
        orosTitle: 'Oros IT Support Limburg',
        inHouseItems: [
            'Vast salaris + sociale lasten',
            'Uitgevallen bij ziekte of vakantie',
            'Lastig te schalen voor kleine teams',
            'Vaak niet rendabel onder de 15–20 werkplekken',
        ],
        orosItems: [
            'Je betaalt alleen voor wat je gebruikt',
            'Remote + on-site, beschikbaar wanneer nodig',
            'Geen inwerkperiode, direct aan de slag',
            'Geschikt voor 2 tot 30 werkplekken',
            'Directe lijn met Daniel, geen wachtrij',
        ],
        note: 'Voor de meeste kleine bedrijven is flexibele IT-support goedkoper én betrouwbaarder dan een vaste IT-er in loondienst.',
    },
    quickScan: {
        heading: 'IT Quick Scan voor kleine bedrijven',
        intro: 'Weet je zeker dat de IT van jouw kantoor goed is geregeld?',
        checks: [
            'Computers en laptops',
            'Wi-Fi en netwerkverbinding',
            'Printers en randapparatuur',
            'Gebruikersaccounts en toegang',
            'Back-up en basisbeveiliging',
        ],
        checkIntro: 'Ik loop praktisch door:',
        result:
            'Je krijgt een helder overzicht van wat goed gaat en wat aandacht nodig heeft — in gewone taal, zonder verkoopverhaal.',
        cta: 'Quick Scan aanvragen',
    },
    faq: {
        heading: 'Veelgestelde vragen',
        items: [
            {
                question: 'In welke regio ben je actief?',
                answer: 'Ik ben gevestigd in Kerkrade en werk voor bedrijven door heel Zuid-Limburg: Heerlen, Maastricht, Sittard-Geleen, Valkenburg, Brunssum en omliggende gemeenten. Remote support doe ik door heel Nederland.',
            },
            {
                question: 'Hoe snel kun je er zijn bij een storing?',
                answer: 'Voor remote support ben ik meestal binnen een uur beschikbaar. Voor on-site hulp in de regio Kerkrade–Heerlen reken ik op dezelfde dag of de volgende ochtend, afhankelijk van de agenda.',
            },
            {
                question: 'Werk je op uurbasis of met een vast contract?',
                answer: 'Beide zijn mogelijk. Je kunt me bellen als er iets is (uurbasis), of een maandelijks supportplan afnemen als je liever vaste kosten hebt. Ik geef altijd vooraf aan wat iets gaat kosten.',
            },
            {
                question: 'Wat kost een remote sessie?',
                answer: 'Remote support start vanaf €65 per uur exclusief btw. De meeste enkelvoudige problemen los ik op in 30 tot 60 minuten. Voor de IT Quick Scan reken ik €149–€199 voor een volledig kantoor.',
            },
            {
                question: 'Werk je ook voor medische praktijken of zorginstellingen?',
                answer: 'Ja. Mijn achtergrond ligt in de medische sector — ik heb zeven jaar IT gedaan bij een tandartsbedrijf met meerdere locaties. Ik ken de eisen rondom privacy, AVG en softwarecompatibiliteit in die omgeving.',
            },
        ],
    },
    pricing: {
        heading: 'Transparante tarieven',
        items: [
            { label: 'Remote support', price: 'vanaf €65 / uur', note: 'excl. btw' },
            { label: 'On-site support Zuid-Limburg', price: 'vanaf €79 / uur', note: 'excl. btw' },
            { label: 'Voorrijkosten (lokaal)', price: 'vanaf €20–30', note: 'excl. btw' },
            { label: 'IT Quick Scan (klein kantoor)', price: '€149 – €199', note: 'excl. btw' },
            { label: 'Maandelijks starterssupportplan', price: 'vanaf €149 / maand', note: 'excl. btw' },
            { label: 'Per-gebruiker maandelijks pakket', price: 'vanaf €35–49 / gebruiker / maand', note: 'excl. btw' },
        ],
        disclaimer:
            'Alle tarieven zijn exclusief btw. Voor grotere kantoren of maatwerkprojecten maak ik graag een offerte op maat.',
    },
    contact: {
        heading: 'Neem contact op',
        subtitle:
            'IT-probleem, vraag of gewoon even kennismaken? Stuur een bericht of bel direct.',
        info: [
            { label: 'Telefoon', value: '+31 6 3483 6118', href: 'tel:+31634836118' },
            { label: 'E-mail', value: 'info@oros.agency', href: 'mailto:info@oros.agency' },
            { label: 'Locatie', value: 'Kerkrade, Zuid-Limburg' },
            { label: 'Beschikbaar', value: 'Ma–Vr, 9:00–18:00' },
        ],
        urgentNote: 'Spoedondersteuning in overleg',
        formTitle: 'Vertel me waarmee ik kan helpen',
        nameLabel: 'Naam',
        namePlaceholder: 'Je naam',
        companyLabel: 'Bedrijf',
        companyPlaceholder: 'Je bedrijfsnaam',
        phoneLabel: 'Telefoon',
        phonePlaceholder: '+31 6 ...',
        emailLabel: 'E-mail',
        emailPlaceholder: 'naam@bedrijf.nl',
        messageLabel: 'Bericht',
        messagePlaceholder: 'Beschrijf je vraag of probleem...',
        submit: 'Ondersteuning aanvragen',
        consent: 'Door op de knop te klikken, ga je akkoord met de verwerking van je persoonsgegevens.',
    },
    footer: {
        description:
            'IT support in Zuid-Limburg voor kleine bedrijven: computers, printers, Wi-Fi, Microsoft 365, beveiliging en praktische kantoor-IT.',
        location: 'Kerkrade, Zuid-Limburg',
        phone: '+31 6 3483 6118',
        email: 'info@oros.agency',
        copyright: 'Oros IT Support Limburg',
        servicesTitle: 'Diensten',
        servicesLinks: [
            'Werkplekondersteuning',
            'Printer & randapparatuur',
            'Wi-Fi & netwerk',
            'Accounts & toegang',
            'Remote & on-site hulp',
            'Beveiliging & back-up',
        ],
        linksTitle: 'Navigatie',
        navLinks: [
            { label: 'Waarom OIT', href: '#why-oros' },
            { label: 'Tarieven', href: '#pricing' },
            { label: 'Blog', href: '/blog/' },
            { label: 'Contact', href: '#contact' },
        ],
    },
};

const en: typeof nl = {
    meta: {
        title: 'IT Support Limburg for Small Businesses | Oros IT Support Limburg',
        description:
            'IT support in Zuid-Limburg for small businesses. Computers, printers, Wi-Fi, Microsoft 365, repairs and security — fast, local and straightforward. Call +31 6 3483 6118.',
    },
    topBar: {
        phone: '+31 6 3483 6118',
        email: 'info@oros.agency',
        hours: 'Mon–Fri: 9:00 AM–6:00 PM',
    },
    header: {
        nav: [
            { label: 'Services', href: '#services' },
            { label: 'About', href: '#about' },
            { label: 'Why OIT', href: '#why-oros' },
            { label: 'Blog', href: '/en/blog/' },
            { label: 'Pricing', href: '#pricing' },
            { label: 'Contact', href: '#contact' },
        ],
        cta: 'Request Support',
        menuLabel: 'Open menu',
    },
    hero: {
        heading: 'IT support in Limburg',
        headingAccent: 'that just works',
        subtitle:
            'I help small businesses in Zuid-Limburg with day-to-day IT: computers, printers, Wi-Fi, user accounts and outages — on-site in Kerkrade, Heerlen, Maastricht and surrounding areas, or remotely.',
        valueProps: 'Fast response, plain language, no surprises on the invoice.',
        cta1: 'Request Support',
        cta2: 'Free Intro Call',
    },
    trustBar: {
        items: [
            'Based in Kerkrade, active across Zuid-Limburg',
            'Windows, macOS & Linux',
            'On-site & remote support',
            'For small offices and growing businesses',
        ],
    },
    services: {
        heading: 'What I can do for you',
        items: [
            {
                title: 'Workstation Support',
                description:
                    'Computers slow, crashing or out of date? I install, maintain and fix issues on Windows PCs, Macs and laptops.',
                icon: 'monitor',
            },
            {
                title: 'Printer & Peripheral Support',
                description:
                    'Printer offline, scanner not responding, label printer acting up. I fix it — even when the vendor says it can\'t be done.',
                icon: 'printer',
            },
            {
                title: 'Wi-Fi & Network',
                description:
                    'Slow internet at the desk, dropping Wi-Fi or a router that stopped cooperating. I set up networks that stay stable.',
                icon: 'wifi',
            },
            {
                title: 'Accounts & Access',
                description:
                    'New employee, departing colleague, forgotten password or locked out of email. I sort it quickly and correctly.',
                icon: 'users',
            },
            {
                title: 'Remote & On-site Help',
                description:
                    'When things break, you want someone fast. Remotely where possible, on-site where needed — including locations outside Kerkrade.',
                icon: 'headset',
            },
            {
                title: 'Security & Backup',
                description:
                    'Updates, backups, MFA and phishing awareness. Not as a big project — just solid routine that runs without you having to think about it.',
                icon: 'shield',
            },
            {
                title: 'ChatGPT & Automation',
                description:
                    'Tasks you do manually every week might not need to be manual anymore. I look at what can be automated and help you set it up.',
                icon: 'sparkles',
            },
        ],
    },
    about: {
        heading: 'Who is Daniel?',
        paragraphs: [
            'For seven years I was the only IT person at a medical company with multiple locations across the Netherlands. When something broke — server, network, workstation, security — I fixed it. There was no one else to call.',
            'That period taught me what IT actually looks like in small organisations: no big team, no endless budget, but people who depend on everything working. That\'s what I now do for other small businesses in Limburg.',
        ],
        approach: 'My approach:',
        approachText: 'Make sure it works, explain what\'s going on, and no surprises on the bill.',
        quote:
            '"Quiet IT is the goal. Chaos is what you get when you stop investing in IT that simply works."',
        quoteAuthor: '— Daniel Orosz',
    },
    whyOros: {
        heading: 'Why choose OIT IT Support Limburg?',
        reasons: [
            {
                title: 'Local and reachable',
                description: 'I live and work in Kerkrade. When there\'s an outage I can be on-site fast — no central planning desk putting you on hold.',
            },
            {
                title: 'Plain language, no jargon',
                description:
                    'I explain what went wrong and what I\'m going to do about it. No technical stories that leave you none the wiser.',
            },
            {
                title: 'Solutions that fit your situation',
                description:
                    'I advise what works for your office — not the most expensive option, not the most complex, but what actually solves the problem.',
            },
            {
                title: 'Remote or on-site, you decide',
                description: 'Most problems I fix remotely within the hour. Sometimes on-site is faster. You don\'t need to figure that out — I do.',
            },
            {
                title: 'One point of contact',
                description:
                    'You call me, not a helpdesk number. I know your setup, remember what happened before, and don\'t need everything re-explained every time.',
            },
        ],
    },
    commonProblems: {
        heading: 'What I help with every day',
        items: [
            'Printer offline or not printing',
            'Wi-Fi slow or keeps dropping',
            'Setting up a new employee',
            'Can\'t access email or an account',
            'Slow or freezing computer',
            'Backup or basic security check',
            'IT cleanup during a move or reorganisation',
            'Questions about Microsoft 365 or Google Workspace',
        ],
    },
    comparison: {
        heading: 'In-house IT employee vs. local IT support',
        inHouseTitle: 'In-house IT employee',
        orosTitle: 'Oros IT Support Limburg',
        inHouseItems: [
            'Fixed salary + social charges',
            'Out when sick or on holiday',
            'Hard to scale for small teams',
            'Often not cost-effective under 15–20 workstations',
        ],
        orosItems: [
            'You only pay for what you use',
            'Remote + on-site, available when needed',
            'No onboarding period, straight to work',
            'Works for 2 to 30 workstations',
            'Direct line to Daniel, no queue',
        ],
        note: 'For most small businesses, flexible IT support is cheaper and more reliable than hiring a full-time IT employee.',
    },
    quickScan: {
        heading: 'IT Quick Scan for small businesses',
        intro: 'Are you sure your office IT is properly set up?',
        checks: [
            'Computers and laptops',
            'Wi-Fi and network connectivity',
            'Printers and peripherals',
            'User accounts and access',
            'Backup and basic security',
        ],
        checkIntro: 'I practically review:',
        result:
            'You get a clear overview of what\'s working well and what needs attention — in plain language, no sales pitch.',
        cta: 'Request Quick Scan',
    },
    faq: {
        heading: 'Frequently asked questions',
        items: [
            {
                question: 'Which area do you cover?',
                answer: 'I\'m based in Kerkrade and work with businesses across Zuid-Limburg: Heerlen, Maastricht, Sittard-Geleen, Valkenburg, Brunssum and surrounding municipalities. Remote support I provide across the Netherlands.',
            },
            {
                question: 'How quickly can you be on-site for an outage?',
                answer: 'For remote support I\'m usually available within the hour. For on-site visits in the Kerkrade–Heerlen area I typically come the same day or next morning, depending on the schedule.',
            },
            {
                question: 'Do you work hourly or on a fixed contract?',
                answer: 'Both are possible. You can call me when something comes up (hourly), or take a monthly support plan if you prefer predictable costs. I always confirm the price upfront.',
            },
            {
                question: 'What does a remote session cost?',
                answer: 'Remote support starts from €65 per hour excluding VAT. Most single issues are resolved in 30 to 60 minutes. The IT Quick Scan for a full small office costs €149–€199.',
            },
            {
                question: 'Do you work with medical practices or care organisations?',
                answer: 'Yes. My background is in the medical sector — I spent seven years doing IT at a dental company with multiple locations. I know the requirements around privacy, GDPR and software compatibility in that environment.',
            },
        ],
    },
    pricing: {
        heading: 'Transparent pricing',
        items: [
            { label: 'Remote support', price: 'from €65 / hour', note: 'excl. VAT' },
            { label: 'On-site support Zuid-Limburg', price: 'from €79 / hour', note: 'excl. VAT' },
            { label: 'Travel costs (local)', price: 'from €20–30', note: 'excl. VAT' },
            { label: 'IT Quick Scan (small office)', price: '€149 – €199', note: 'excl. VAT' },
            { label: 'Monthly starter support plan', price: 'from €149 / month', note: 'excl. VAT' },
            { label: 'Per-user monthly package', price: 'from €35–49 / user / month', note: 'excl. VAT' },
        ],
        disclaimer:
            'All prices are excluding VAT. For larger offices or custom projects I\'m happy to put together a tailored quote.',
    },
    contact: {
        heading: 'Get in touch',
        subtitle:
            'IT problem, a question, or just want to talk? Send a message or call directly.',
        info: [
            { label: 'Phone', value: '+31 6 3483 6118', href: 'tel:+31634836118' },
            { label: 'Email', value: 'info@oros.agency', href: 'mailto:info@oros.agency' },
            { label: 'Location', value: 'Kerkrade, Zuid-Limburg' },
            { label: 'Available', value: 'Mon–Fri, 9:00 AM–6:00 PM' },
        ],
        urgentNote: 'Urgent support by arrangement',
        formTitle: 'Tell me how I can help',
        nameLabel: 'Name',
        namePlaceholder: 'Your name',
        companyLabel: 'Company',
        companyPlaceholder: 'Your company name',
        phoneLabel: 'Phone',
        phonePlaceholder: '+31 6 ...',
        emailLabel: 'Email',
        emailPlaceholder: 'name@company.nl',
        messageLabel: 'Message',
        messagePlaceholder: 'Describe your question or issue...',
        submit: 'Request Support',
        consent: 'By clicking the button, you agree to the processing of your personal data.',
    },
    footer: {
        description:
            'IT support in Zuid-Limburg for small businesses: computers, printers, Wi-Fi, Microsoft 365, security and practical office IT.',
        location: 'Kerkrade, Zuid-Limburg',
        phone: '+31 6 3483 6118',
        email: 'info@oros.agency',
        copyright: 'Oros IT Support Limburg',
        servicesTitle: 'Services',
        servicesLinks: [
            'Workstation support',
            'Printer & peripherals',
            'Wi-Fi & network',
            'Accounts & access',
            'Remote & on-site help',
            'Security & backup',
        ],
        linksTitle: 'Navigation',
        navLinks: [
            { label: 'Why OIT', href: '#why-oros' },
            { label: 'Pricing', href: '#pricing' },
            { label: 'Blog', href: '/en/blog/' },
            { label: 'Contact', href: '#contact' },
        ],
    },
};

export const translations = { nl, en } as const;
export type Translations = typeof nl;
