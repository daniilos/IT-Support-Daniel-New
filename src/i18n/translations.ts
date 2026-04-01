export type Lang = 'nl' | 'en';

const nl = {
    meta: {
        title: 'IT-support voor kleine bedrijven in Zuid-Limburg | Oros IT Support',
        description:
            'Oros IT Support — lokale IT-ondersteuning voor kleine bedrijven in Kerkrade en Zuid-Limburg. Computers, printers, Wi-Fi, gebruikersaccounts en basisbeveiliging.',
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
            { label: 'Waarom Oros', href: '#why-oros' },
            { label: 'Tarieven', href: '#pricing' },
            { label: 'Contact', href: '#contact' },
        ],
        cta: 'Ondersteuning aanvragen',
        menuLabel: 'Menu openen',
    },
    hero: {
        heading: 'Lokale IT-support',
        headingAccent: 'voor jouw bedrijf',
        subtitle:
            'Ik help kleine bedrijven in Zuid-Limburg met dagelijkse IT: computers, printers, Wi-Fi, gebruikersaccounts, storingen en basisbeveiliging — zowel ter plaatse als op afstand.',
        valueProps: 'Snel, praktisch en begrijpelijk. Geen onnodige complexiteit. Gewoon betrouwbare IT-support die jouw kantoor draaiende houdt.',
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
        heading: 'IT-supportdiensten voor kleine bedrijven',
        items: [
            {
                title: 'Werkplekondersteuning',
                description:
                    'Installatie, onderhoud, updates, probleemoplossing en optimalisatie van Windows-pc\'s, Macs en kantoorlaptops.',
                icon: 'monitor',
            },
            {
                title: 'Printer- en randapparatuur',
                description:
                    'Instellen en oplossen van problemen met printers, scanners, labelprinters en andere kantoorapparatuur.',
                icon: 'printer',
            },
            {
                title: 'Wi-Fi en netwerkhulp',
                description:
                    'Kantoor-Wi-Fi instellen, router- en access point-configuratie, netwerkstoringen oplossen en verbindingsverbeteringen doorvoeren.',
                icon: 'wifi',
            },
            {
                title: 'Gebruikersaccounts en toegangsbeheer',
                description:
                    'E-mailinstellingen, Microsoft 365 / Google Workspace basis, wachtwoordherstel, toegangsbeheer, ondersteuning bij in- en uitdienst van medewerkers.',
                icon: 'users',
            },
            {
                title: 'Remote en on-site IT-hulp',
                description:
                    'Snelle hulp als er iets stopt met werken — op afstand waar mogelijk, ter plaatse waar nodig.',
                icon: 'headset',
            },
            {
                title: 'Basisbeveiliging en back-upcheck',
                description:
                    'Praktische verbeteringen voor veiliger dagelijks werken: updates, back-ups, MFA, phishing-bewustwording en basisapparaathygiëne.',
                icon: 'shield',
            },
            {
                title: 'ChatGPT & werkstroomautomatisering',
                description:
                    'Gebruik je al ChatGPT, maar doe je nog veel taken handmatig? Ik help je eenvoudige manieren te vinden om tijd te besparen en herhalend werk te verminderen.',
                icon: 'sparkles',
            },
        ],
    },
    about: {
        heading: 'Over Daniel Oros',
        paragraphs: [
            'Ik ben al sinds mijn tienerjaren gefascineerd door IT en heb jarenlang gewerkt met computers, netwerken, kantoorapparatuur en digitale systemen in echte werkomgevingen.',
            'Ik help kleine bedrijven om praktische IT-problemen op te lossen — zonder verwarrend vakjargon. Van trage computers en printerproblemen tot Wi-Fi-storingen, gebruikersaccounts, apparaatinstallatie en dagelijkse kantoorondersteuning.',
        ],
        approach: 'Mijn aanpak is eenvoudig:',
        approachText: 'IT stabiel, begrijpelijk en minder stressvol maken voor jouw bedrijf.',
        quote:
            '"Goede IT-support gaat niet alleen over het oplossen van problemen. Het gaat over het verminderen van chaos, het besparen van tijd en het geven van vertrouwen dat dingen gewoon werken."',
        quoteAuthor: '— Daniel Oros',
    },
    whyOros: {
        heading: 'Waarom kiezen voor Oros IT Support?',
        reasons: [
            {
                title: 'Lokaal en beschikbaar',
                description: 'Gevestigd in Kerkrade, met snelle ondersteuning voor bedrijven in heel Zuid-Limburg.',
            },
            {
                title: 'Duidelijke communicatie',
                description:
                    'Ik leg technische problemen uit in gewone taal, zodat je altijd begrijpt wat er aan de hand is en waarom.',
            },
            {
                title: 'Praktische probleemoplossing',
                description:
                    'Ik richt me op oplossingen die werken in echte kantooromgevingen — geen onnodig ingewikkeld advies.',
            },
            {
                title: 'Flexibel supportmodel',
                description: 'Op afstand waar mogelijk, ter plaatse waar nodig.',
            },
            {
                title: 'MKB-mindset',
                description:
                    'Ik begrijp dat kleine bedrijven betrouwbare ondersteuning nodig hebben: voorspelbare kosten en iemand die écht verantwoordelijkheid neemt.',
            },
        ],
    },
    commonProblems: {
        heading: 'Problemen waarbij ik dagelijks help',
        items: [
            'Printer doet het niet',
            'Wi-Fi is instabiel of traag',
            'Nieuwe medewerker instellen',
            'Geen toegang tot e-mail of account',
            'Trage pc of laptop',
            'Back-up of basisbeveiligingscheck',
            'IT-opruiming en optimalisatie van het kantoor',
            'Vragen over Microsoft 365 of Google Workspace',
        ],
    },
    comparison: {
        heading: 'Eigen IT-medewerker vs. flexibele lokale IT-support',
        inHouseTitle: 'Eigen IT-medewerker',
        orosTitle: 'Oros IT Support',
        inHouseItems: [
            'Vast salaris + sociale lasten',
            'Eén persoon, beperkt bij ziekte/vakantie',
            'Moeilijk schaalbaar voor kleine teams',
            'Niet altijd rendabel voor kleine kantoren',
        ],
        orosItems: [
            'Alleen betalen voor wat je nodig hebt',
            'Remote + on-site, flexibel inzetbaar',
            'Praktische focus op kantoor-IT',
            'Ideaal voor 2–30 werkplekken',
            'Direct contact met Daniel',
        ],
        note: 'Voor veel kleine bedrijven is uitbestede IT-support flexibeler dan een eigen IT-medewerker in dienst nemen.',
    },
    quickScan: {
        heading: 'IT Quick Scan voor kleine bedrijven',
        intro: 'Weet jij zeker dat de IT van jouw kantoor goed is geregeld?',
        checks: [
            'Computers en laptops',
            'Wi-Fi en netwerkverbinding',
            'Printers en randapparatuur',
            'Gebruikersaccounts en toegangsbeheer',
            'Back-up en basisbeveiliging',
        ],
        checkIntro: 'Ik bekijk praktisch:',
        result:
            'Resultaat: een helder overzicht van wat goed gaat en wat aandacht verdient — in gewone taal, zonder onnodige complexiteit.',
        cta: 'Quick Scan aanvragen',
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
            'Alle prijzen zijn exclusief btw. Voor maatwerkprojecten en grotere kantoren maak ik graag een offerte.',
    },
    contact: {
        heading: 'Neem contact op',
        subtitle:
            'Op zoek naar lokale IT-support in Zuid-Limburg? Stuur een bericht en vertel me wat voor hulp je nodig hebt.',
        info: [
            { label: 'Telefoon', value: '+31 6 3483 6118', href: 'tel:+31634836118' },
            { label: 'E-mail', value: 'info@oros.agency', href: 'mailto:info@oros.agency' },
            { label: 'Locatie', value: 'Kerkrade, Zuid-Limburg, The Netherlands' },
            { label: 'Ondersteuningsuren', value: 'Ma–Vr, 9:00–18:00' },
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
        sending: 'Verzenden...',
        successMessage: 'Bedankt! We nemen zo snel mogelijk contact met je op.',
        errorMessage: 'Er is iets misgegaan. Probeer het opnieuw.',
        connectionError: 'Verbindingsfout. Controleer je internetverbinding en probeer opnieuw.',
        consent: 'Door op de knop te klikken, ga je akkoord met de verwerking van je persoonsgegevens.',
    },
    footer: {
        description:
            'Lokale IT-support voor kleine bedrijven in Zuid-Limburg: computers, printers, Wi-Fi, gebruikersaccounts, storingen en praktische kantoor-IT.',
        location: 'Kerkrade, Zuid-Limburg, The Netherlands',
        phone: '+31 6 3483 6118',
        email: 'info@oros.agency',
        copyright: 'Oros IT Support',
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
            { label: 'Waarom Oros', href: '#why-oros' },
            { label: 'Vergelijking', href: '#comparison' },
            { label: 'Tarieven', href: '#pricing' },
            { label: 'Contact', href: '#contact' },
        ],
    },
};

const en: typeof nl = {
    meta: {
        title: 'IT Support for Small Businesses in Zuid-Limburg | Oros IT Support',
        description:
            'Oros IT Support — local IT support for small businesses in Kerkrade and Zuid-Limburg. Computers, printers, Wi-Fi, user accounts, and basic cybersecurity.',
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
            { label: 'Why Oros', href: '#why-oros' },
            { label: 'Pricing', href: '#pricing' },
            { label: 'Contact', href: '#contact' },
        ],
        cta: 'Request Support',
        menuLabel: 'Open menu',
    },
    hero: {
        heading: 'Local IT Support',
        headingAccent: 'for Your Business',
        subtitle:
            'I help small businesses in Zuid-Limburg with day-to-day IT: computers, printers, Wi-Fi, user accounts, troubleshooting, and basic cybersecurity — on-site and remotely.',
        valueProps: 'Fast, practical, and easy to understand. No unnecessary complexity. Just reliable IT support that keeps your office running.',
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
        heading: 'IT support services for small businesses',
        items: [
            {
                title: 'Workstation Support',
                description:
                    'Installation, maintenance, updates, troubleshooting, and optimization of Windows PCs, Macs, and office laptops.',
                icon: 'monitor',
            },
            {
                title: 'Printer & Peripheral Support',
                description:
                    'Setup and troubleshooting for printers, scanners, label printers, and other office equipment.',
                icon: 'printer',
            },
            {
                title: 'Wi-Fi & Network Help',
                description:
                    'Office Wi-Fi setup, router and access point configuration, resolving network issues, and connectivity improvements.',
                icon: 'wifi',
            },
            {
                title: 'User Accounts & Access Management',
                description:
                    'Email setup, Microsoft 365 / Google Workspace basics, password resets, access control, and onboarding/offboarding support.',
                icon: 'users',
            },
            {
                title: 'Remote & On-site IT Help',
                description:
                    'Quick help when something stops working — remotely where possible, on-site where needed.',
                icon: 'headset',
            },
            {
                title: 'Basic Security & Backup Check',
                description:
                    'Practical improvements for safer daily work: updates, backups, MFA, phishing awareness, and basic device hygiene.',
                icon: 'shield',
            },
            {
                title: 'ChatGPT & Workflow Automation',
                description:
                    'Already using ChatGPT but still doing many tasks manually? I help you find simple ways to save time and reduce repetitive work.',
                icon: 'sparkles',
            },
        ],
    },
    about: {
        heading: 'About Daniel Oros',
        paragraphs: [
            'I\'ve been fascinated by IT since my teenage years and have spent years working with computers, networks, office equipment, and digital systems in real work environments.',
            'I help small businesses solve practical IT problems — without confusing jargon. From slow computers and printer issues to Wi-Fi outages, user accounts, device setup, and everyday office support.',
        ],
        approach: 'My approach is simple:',
        approachText: 'Make IT stable, understandable, and less stressful for your business.',
        quote:
            '"Good IT support isn\'t just about fixing problems. It\'s about reducing chaos, saving time, and giving you confidence that things simply work."',
        quoteAuthor: '— Daniel Oros',
    },
    whyOros: {
        heading: 'Why choose Oros IT Support?',
        reasons: [
            {
                title: 'Local and available',
                description: 'Based in Kerkrade, with fast support for businesses across Zuid-Limburg.',
            },
            {
                title: 'Clear communication',
                description:
                    'I explain technical issues in plain language, so you always understand what\'s going on and why.',
            },
            {
                title: 'Practical problem-solving',
                description:
                    'I focus on solutions that work in real office environments — no unnecessarily complicated advice.',
            },
            {
                title: 'Flexible support model',
                description: 'Remote where possible, on-site where needed.',
            },
            {
                title: 'SMB mindset',
                description:
                    'I understand that small businesses need reliable support: predictable costs and someone who truly takes responsibility.',
            },
        ],
    },
    commonProblems: {
        heading: 'Problems I help with every day',
        items: [
            'Printer not working',
            'Wi-Fi is unstable or slow',
            'Setting up a new employee',
            'Can\'t access email or an account',
            'Slow PC or laptop',
            'Backup or basic security check',
            'Office IT cleanup and optimization',
            'Questions about Microsoft 365 or Google Workspace',
        ],
    },
    comparison: {
        heading: 'In-house IT employee vs. flexible local IT support',
        inHouseTitle: 'In-house IT employee',
        orosTitle: 'Oros IT Support',
        inHouseItems: [
            'Fixed salary + social charges',
            'One person, limited during illness/holiday',
            'Hard to scale for small teams',
            'Not always cost-effective for small offices',
        ],
        orosItems: [
            'Only pay for what you need',
            'Remote + on-site, flexibly available',
            'Practical focus on office IT',
            'Ideal for 2–30 workstations',
            'Direct contact with Daniel',
        ],
        note: 'For many small businesses, outsourced IT support is more flexible than hiring a dedicated in-house IT employee.',
    },
    quickScan: {
        heading: 'IT Quick Scan for small businesses',
        intro: 'Are you sure your office IT is properly set up?',
        checks: [
            'Computers and laptops',
            'Wi-Fi and network connectivity',
            'Printers and peripherals',
            'User accounts and access control',
            'Backup and basic security',
        ],
        checkIntro: 'I practically review:',
        result:
            'Result: a clear overview of what\'s working well and what needs attention — in plain language, without unnecessary complexity.',
        cta: 'Request Quick Scan',
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
            'All prices are excluding VAT. For custom projects and larger offices, I\'m happy to provide a quote.',
    },
    contact: {
        heading: 'Get in Touch',
        subtitle:
            'Looking for local IT support in Zuid-Limburg? Send a message and tell me what kind of help you need.',
        info: [
            { label: 'Phone', value: '+31 6 3483 6118', href: 'tel:+31634836118' },
            { label: 'Email', value: 'info@oros.agency', href: 'mailto:info@oros.agency' },
            { label: 'Location', value: 'Kerkrade, Zuid-Limburg, The Netherlands' },
            { label: 'Support hours', value: 'Mon–Fri, 9:00 AM–6:00 PM' },
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
        sending: 'Sending...',
        successMessage: 'Thank you! We will get back to you as soon as possible.',
        errorMessage: 'Something went wrong. Please try again.',
        connectionError: 'Connection error. Check your internet connection and try again.',
        consent: 'By clicking the button, you agree to the processing of your personal data.',
    },
    footer: {
        description:
            'Local IT support for small businesses in Zuid-Limburg: computers, printers, Wi-Fi, user accounts, troubleshooting, and practical office IT.',
        location: 'Kerkrade, Zuid-Limburg, The Netherlands',
        phone: '+31 6 3483 6118',
        email: 'info@oros.agency',
        copyright: 'Oros IT Support',
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
            { label: 'Why Oros', href: '#why-oros' },
            { label: 'Comparison', href: '#comparison' },
            { label: 'Pricing', href: '#pricing' },
            { label: 'Contact', href: '#contact' },
        ],
    },
};

export const translations = { nl, en } as const;
export type Translations = typeof nl;
