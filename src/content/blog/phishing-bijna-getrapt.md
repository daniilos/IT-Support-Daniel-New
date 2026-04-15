---
title: "Ik trapte bijna in een phishing-mail. En ik werk al jaren in IT."
description: "Een nep Hetzner-mail met mijn echte domeinnaam en perfect nagemaakt logo. Ik stond op het punt te betalen. Hoe phishing in 2026 eruitziet en hoe je het herkent."
pubDate: 2026-04-15
tags: ["phishing herkennen", "nep e-mail herkennen", "phishing e-mail MKB", "cyberbeveiliging MKB", "IT support Limburg"]
author: "Daniel Orosz"
draft: false
image: "/images/blog/phishing-bijna-getrapt.webp"
imageAlt: "Phishing e-mail nagemaakt van een hostingprovider op een laptopscherm"
---

Vandaag opende ik mijn inbox en zag een e-mail van "Hetzner", de hostingprovider waar mijn server voor Oros Agency op staat.

Hij lag in de spammap.

Dat had al genoeg moeten zijn. Als een leverancier die je al jaren gebruikt plotseling in spam belandt, is er iets mis. Maar ik dacht: *waarom zou een echte Hetzner-mail in spam belanden? Laat me even kijken.*

Wat ik zag zag er foutloos uit. Het exacte Hetzner-logo. De juiste kleuren. Dezelfde layout als de echte website. De mail vertelde me dat mijn domein **oros.agency** was opgeschort wegens een mislukte automatische verlenging. Er was een betaalknop. Urgente toon.

Één seconde echte paniek. *Mijn server gaat eraf. Ik moet nu betalen.*

Maar ik klikte niet.

---

> **De twee dingen die me redden:** de mail lag in spam, wat al een signaal was. En mijn gewoonte om nooit via een link in een e-mail in te loggen of te betalen, maar altijd de website zelf te openen. Beide samen maakten dat ik even pauzeerde.

---

## Het eerste signaal: spam

Spamfilters zijn niet perfect, maar ze zijn ook niet dom. Als een mail van een bekende leverancier ineens in spam belandt, is dat geen toeval. Spamfilters zien patronen die jij niet ziet: afzenderdomeinen, IP-reputatie, e-mailheaders.

Die spam-melding was het eerste teken. Ik had de mail op dat moment kunnen sluiten.

Maar ik keek toch. En wat ik zag was overtuigend genoeg om even te twijfelen.

---

## Wat me pas echt redde

Ik wist dat mijn account saldo had. De serverkosten zijn klein. Ik heb dit specifiek zo ingericht zodat ik er nooit aan hoef te denken. Hoe kon de betaling dan mislukken?

In plaats van op de betaalknop te klikken, opende ik Hetzner rechtstreeks in een nieuw tabblad. Ingelogd. Alles actief. Alle betalingen up-to-date.

Dat was het. De mail was nep.

Daarna bekeek ik het afzenderadres: **no-reply@support-hetzner.com**

Niet hetzner.com. *Support-hetzner.com.* Een volledig ander domein, geregistreerd door iemand anders. Op een telefoon zie je dat bijna nooit. De naam die getoond wordt is "Hetzner Support". Het volledige adres is verborgen totdat je erop tikt.

---

## Waarom deze phishing gevaarlijk was

Dit was geen willekeurige massa-mailing. Ze wisten iets over mij.

De mail bevatte mijn echte domeinnaam (**oros.agency**) in de tabel met "opgeschorte diensten". Niet een generieke placeholder, maar mijn specifieke domein. Ze stuurden naar mijn zakelijke inbox. En ze kozen het juiste moment: een hosting-mail die je bang maakt voor downtime.

Wat de aanval werkte:

- Het Hetzner-logo en de opmaak waren pixel-perfect gekopieerd
- Mijn werkelijke domeinnaam stond erin
- De "opschorting"-framing creëert directe angst
- De urgente toon duwt je naar handelen, niet nadenken

Vijf seconden pauze voor de betaalknop. Dat was alles wat het verschil maakte.

---

## Hoe je een phishing-mail herkent

### Lag de mail in spam? Neem dat serieus
Als een leverancier die je al jaren mailt plotseling in spam belandt, is er reden voor argwaan. Dat hoeft niet altijd phishing te zijn, maar het is een signaal. Sluit de mail, open de website zelf, en controleer of er echt iets mis is.

### Open de website zelf, nooit via de link
Dit is de gewoonte die het meeste beschermt. Type het adres zelf in of gebruik je bladwijzer. Als er echt iets mis is, zie je dat na inloggen. Als de website niets meldt, is de mail vals. Simpel.

### Bekijk het volledige e-mailadres, niet alleen de naam
De naam die getoond wordt kan zijn wat de aanvaller wil. Het e-mailadres is moeilijker te vervalsen. Klik of tik op de naam om het volledige adres te zien. Een echte Hetzner-mail komt van een @hetzner.com-adres, niet van @support-hetzner.com.

### Controleer de urgentie
Urgentie in een mail is een techniek, geen noodzaak. Legitieme bedrijven geven je altijd tijd om te reageren. "Betaal nu of je domein verdwijnt" is een rood vlaggetje.

### Op mobiel: extra opletten
Op een telefoon is alles kleiner en compacter. Aanvallers weten dat. Neem even de tijd om op de afzendernaam te tikken voor je reageert.

---

## Dit overkomt ook mensen die het beter zouden moeten weten

Ik werk al meer dan tien jaar in IT. Ik weet hoe phishing werkt. Ik herken de patronen.

Toch stond ik één klik van het betaalformulier.

Niet omdat ik onoplettend was. Maar omdat de mail iets raakte wat echt voor mij geldt: mijn server, mijn domein, een kostprijs die laag genoeg is om bij automatische betaling niet op te letten.

De menselijke factor is geen zwakte. Het is gewoon de realiteit. Aanvallers weten dat ook.

Een vaste gewoonte helpt meer dan perfecte aandacht op elk moment. Nooit via een link, altijd rechtstreeks naar de site. Dat gaat automatisch als je het een paar keer gedaan hebt.

---

## Wat ik sindsdien heb gedaan

Na dit incident heb ik in mijn Hetzner-account gekeken of twee-factor-authenticatie aanstond. Dat stond het, maar ik had het al een tijdje niet gecontroleerd.

Ik heb ook even nagekeken of mijn andere domeinen die ik niet actief gebruik nergens als "verlopen" geregistreerd staan. Dat soort domeinen zijn aantrekkelijk voor aanvallers: ze weten dat je ze vergeten bent en minder kritisch kijkt.

En ik heb het domein support-hetzner.com opgezocht in WHOIS. Geregistreerd vier dagen eerder. Rusland. Daarvoor had ik geen technische kennis nodig, gewoon WHOIS opzoeken en kijken wanneer het geregistreerd is en door wie.

---

## Drie vragen die ik veel hoor

**Zijn phishing-mails tegenwoordig echt zo overtuigend?**
Ja. Logo's en huisstijlen zijn gratis kopieerbaar. AI maakt het schrijven van foutloze tekst triviaal. En gerichte aanvallen waarbij ze jouw naam, domein of bedrijf kennen zijn makkelijker dan ooit door datalekken en openbare registers. De "spelfouten"-test werkt niet meer.

**Wat als ik al op de link heb geklikt maar niets heb ingevuld?**
Alleen klikken is meestal niet voldoende voor directe schade. Maar sommige phishing-pagina's proberen bij het laden al kwetsbaarheden in browsers te misbruiken. Verander voor de zekerheid het wachtwoord van het account waar de mail over ging, controleer of er recente inlogpogingen zijn, en scan je systeem.

**Hoe voorkom ik dit bij mijn medewerkers?**
Eén korte uitleg werkt beter dan een beleidsdocument. Laat zien hoe een phishing-mail eruitziet aan de hand van een echt voorbeeld. Zeg wat de gewoonte is: altijd rechtstreeks naar de site, nooit via een link. Herhaal dat periodiek. Technische maatregelen zoals e-mailfilters en MFA helpen ook, maar de gewoonte is de eerste verdedigingslinie.

---

Wil je weten hoe jouw kantoor er op dit moment voor staat qua beveiliging — niet theoretisch, maar concreet voor jouw situatie? Ik doe een praktische IT-check voor kleine bedrijven in Limburg.

[Neem contact op →](/#contact)
