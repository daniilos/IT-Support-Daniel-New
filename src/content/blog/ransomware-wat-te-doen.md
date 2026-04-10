---
title: "Ransomware op je kantoor: wat doe je als het mis gaat?"
description: "Een ransomware-aanval op een medische praktijk — en wat ik die dag leerde over backups. Praktisch stappenplan voor kleine bedrijven in Limburg."
pubDate: 2026-04-10
tags: ["beveiliging", "ransomware", "backup", "IT support Limburg"]
author: "Daniel Orosz"
draft: false
image: "/images/blog/ransomware-wat-te-doen.png"
imageAlt: "IT-professional werkt 's ochtends vroeg alleen op kantoor met rode waarschuwingsschermen"
---

Het was een dinsdag. Kwart voor negen. Ik zette mijn koffie neer en opende mijn laptop.

De berichten stonden er al. Medewerkers konden niet bij hun bestanden. Schermen toonden een tekst die ik niet wou zien: alle bestanden waren versleuteld. Een losgeldbedrag in bitcoin.

We zaten in een medische praktijk. Patiëntdossiers. Behandelplannen. Alles achter slot en grendel.

Ik was de enige IT-persoon. Er was niemand om op te escaleren.

**Wat ik die dag wist:** we hadden backups.
**Wat ik die dag leerde:** een backup hebben en een backup hebben die werkt, zijn twee verschillende dingen.

We kwamen er bovenop. De herstelklus nam een hele dag in beslag. Niemand verloor data. Maar het voelde niet als een overwinning — het voelde als mazzel.

---

## Wat is ransomware precies?

Ransomware is software die je bestanden versleutelt en ze pas vrijgeeft als je betaalt. De aanvallers sturen een sleutel zodra het geld binnen is — in theorie. In de praktijk krijg je die sleutel lang niet altijd.

Kleine bedrijven zijn een aantrekkelijk doelwit. Niet omdat ze veel geld hebben, maar omdat ze minder goed beveiligd zijn dan grote organisaties en toch bereid zijn te betalen om hun spullen terug te krijgen. Een tandartspraktijk zonder toegang tot patiëntdossiers staat al na één dag met de rug tegen de muur.

De meest voorkomende routes waarop ransomware binnenkomt:

- **Phishing-mail** met een bijlage of link (verreweg de meest voorkomende)
- **Zwakke wachtwoorden** op remote desktop of VPN
- **Niet-bijgewerkte software** met bekende beveiligingslekken
- **USB-sticks** van onbekende herkomst

---

## Wat deed ik die ochtend — stap voor stap

Zodra ik de berichten zag, deed ik het volgende. In deze volgorde.

**1. Netwerk isoleren**
Ik trok de netwerkkabel eruit van de eerste besmette machine. Daarna liep ik langs alle andere computers en deed hetzelfde. Doel: voorkomen dat de ransomware verder verspreidt via het lokale netwerk. Elke minuut telt hier.

**2. Controleren welke machines besmet zijn**
Niet elke computer was geraakt. Door snel langs te gaan, zag ik dat drie machines volledig versleuteld waren. Twee anderen hadden het proces nog net niet voltooid — die waren eerder te redden.

**3. Niet betalen, niet onderhandelen**
De tekst op het scherm zei dat we 72 uur hadden. Dat is psychologische druk. Ik meldde het aan de leidinggevende en gaf één advies: we gaan dit zelf oplossen via de backups. Betalen geeft geen garantie op een werkende sleutel en markeert je als betalende partij voor een volgende aanval.

**4. Backups testen — pas op dit moment**
Hier ging het bijna mis. We hadden dagelijkse backups op een externe schijf. Maar ik had die backups nooit getest onder druk. Niet met een volledige restore van het systeem. Alleen maar gekeken of de bestanden er stonden.

Het herstel werkte, maar het duurde langer dan verwacht. We moesten het besturingssysteem opnieuw installeren op twee machines, software opnieuw inrichten, instellingen terugzetten. Dat zijn stappen die je niet snel kunt doen als je ze nooit hebt geoefend.

**5. Incident documenteren**
Ik schreef op wat er was gebeurd, welke machines getroffen waren, wanneer, wat ik had gedaan en hoe lang het herstel had geduurd. Dat document heb ik daarna bij elk herstelgesprek gebruikt.

---

## Wat ik diezelfde avond heb aangepast

Nadat alles weer draaide, heb ik één ding direct veranderd: ik bouwde een maandelijkse hersteltest in.

Niet een controle of de backupbestanden aanwezig zijn. Een échte test: een machine isoleren, het besturingssysteem opnieuw installeren, de backup terugzetten en meten hoe lang het duurt voordat alles weer werkt.

Dat kost een zaterdagmiddag per kwartaal. Maar na die eerste ransomware-aanval wist ik precies: hersteltijd is anderhalve uur. Welke stap het langst duurt. Welke instellingen handmatig terug moeten.

Die kennis is meer waard dan de backup zelf.

---

## Wat je vandaag nog kunt doen

Je hoeft geen groot IT-budget te hebben om je basis op orde te brengen. Dit zijn de vier dingen die het grootste verschil maken voor kleine bedrijven:

**Regel 1: Backups op een aparte locatie**
Een backup op dezelfde computer of hetzelfde netwerk als de besmette machines is ook versleuteld. Gebruik een externe schijf die je na het kopiëren loskoppelt, of een clouddienst als Microsoft OneDrive of Backblaze. Liefst allebei.

**Regel 2: Test je backup minstens één keer per jaar**
Zet een machine opnieuw op en herstel de backup volledig. Meet hoe lang het duurt. Schrijf het op. Als je dat nooit hebt gedaan, weet je niet of het werkt.

**Regel 3: Houd software up-to-date**
Windows-updates, Office-updates, antivirussoftware. Verreweg de meeste aanvallen maken gebruik van bekende lekken waarvoor al maanden een oplossing beschikbaar is. Updates zijn geen luxe.

**Regel 4: Leer medewerkers phishing herkennen**
Eén klik op de verkeerde bijlage is genoeg. Laat medewerkers weten hoe een phishing-mail eruitziet: urgente taal, onbekende afzender, bijlage die je niet verwacht. Een kort gesprek van tien minuten kan een aanval voorkomen.

---

## Veelgestelde vragen over ransomware

**Moet ik losgeld betalen?**
Nee. Betalen geeft geen garantie dat je bestanden worden vrijgegeven. Bovendien meld je jezelf als betalende partij, wat de kans op een volgende aanval vergroot. Herstel altijd via backups — ook als dat langer duurt.

**Hoe weet ik of mijn backup goed werkt?**
Alleen door hem daadwerkelijk te testen. Controleer niet alleen of de bestanden aanwezig zijn, maar herstel een volledige machine en meet de tijd. Als je dat nooit hebt gedaan, weet je het niet.

**Wat als ik geen backups heb?**
Dan zijn er geen goede opties. Je kunt professionele dataherstelbedrijven inschakelen, maar dat is kostbaar en niet altijd succesvol. Voorkomen is hier letterlijk goedkoper dan genezen.

**Hoe groot is de kans dat mijn kleine bedrijf wordt aangevallen?**
Groter dan je denkt. Kleine bedrijven zijn doelwit juist omdat ze minder beveiligd zijn. Ransomware-aanvallen op het MKB zijn de afgelopen jaren sterk toegenomen. Het is geen kwestie van of, maar van wanneer — en hoe goed je dan voorbereid bent.

---

Wil je weten hoe jouw kantoor er nu voor staat? Ik doe een praktische IT-check voor kleine bedrijven in Limburg — inclusief een blik op backups, updates en beveiliging.

[Neem contact op →](/#contact)
