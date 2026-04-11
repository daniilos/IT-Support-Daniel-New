---
title: "Ik adviseerde medewerkers hun wachtwoord in de la te leggen. Serieus."
description: "Zeven monitors met wachtwoorden op een Post-it. Een kant-en-klaar plan voor een wachtwoordmanager dat er nooit van kwam. En een New file.txt die ik zelf jarenlang versleuteld in een archief bewaarde. Over hoe beveiliging er in de praktijk echt uitziet."
pubDate: 2026-04-24
tags: ["wachtwoordbeveiliging", "IT beveiliging", "wachtwoordmanager", "IT support Limburg"]
author: "Daniel Orosz"
draft: false
image: "/images/blog/wachtwoord-postit-lade.webp"
imageAlt: "Post-it met wachtwoord op een kantoormonitor in een kleine praktijk"
---

Eerste week op de nieuwe plek. Receptie. Op de monitor - een Post-it. Op de Post-it - een wachtwoord.

Ik liep alle ruimtes door.

Receptie, behandelkamers, het achterste kantoor. Zeven monitors. Op elke monitor - een Post-it. Op elke Post-it - een wachtwoord.

Ik had een strenge mail kunnen sturen. Een beveiligingsbeleid kunnen opstellen. Een vergadering kunnen plannen.

Dat deed ik niet. In plaats daarvan zei ik iedereen hetzelfde: haal de Post-it van het scherm en leg hem in de bureaulade.

---

> **Kort:** een Post-it op de monitor en een Post-it in de la zijn niet hetzelfde. De eerste is zichtbaar voor iedereen die even binnenloopt. De tweede vereist fysieke toegang tot jouw specifieke bureau. Allebei ver van ideaal. Maar in de praktijk van een klein bedrijf is ideaal een plan voor volgend jaar. En tot die tijd: de la is beter dan het scherm, en allebei beter dan een bestand passwords.txt op het bureaublad. Daarover gaat dit.

---

## Waarom de bureaulade geen grap is

Het klassieke beveiligingsadvies: schrijf wachtwoorden nooit op. Punt.

Goed advies. Onrealistisch.

Mensen zullen altijd een manier vinden om wachtwoorden niet uit hun hoofd te hoeven onthouden. Dat is geen luiheid - dat zijn mensen. Receptiemedewerkers in een tandartspraktijk werken met vijf verschillende systemen. Dental-software, röntgen-ПО, de kassa, e-mail, het verzekeraarsportaal. Elk met eigen wachtwoordeisen. Sommige verplichten een wisseling elke 90 dagen.

De vraag is niet of je ze opschrijft. De vraag is waar.

Een Post-it op de monitor is zichtbaar voor de bezorger, de patiënt in de wachtrij, de nieuwe medewerker op de eerste dag, de schoonmaker 's avonds. Voor iedereen die langsloopt.

Een Post-it in de bureaulade vereist: fysiek langskomen, de juiste la van de juiste bureau openen, in het juiste gebouw, tijdens werktijden. Dat is al een heel ander toegangsniveau.

Niet ideaal. Maar beter.

En een bestand `wachtwoorden.txt` op het bureaublad is een verhaal apart. Dat is op afstand toegankelijk - voor iedereen die via TeamViewer is ingelogd of de machine heeft besmet met malware. Een fysiek papiertje in een la is in dat opzicht letterlijk veiliger.

---

## Eerlijk gezegd: ik deed het zelf ook

Ik moet iets bekennen.

In mijn eerste jaren had ik zelf een bestand `New file.txt` met wachtwoorden. Later begon ik het te versleutelen - ik zette het in een archief met een wachtwoord, zodat je het niet zomaar kon openen. Eerst uitpakken, dan pas lezen.

Dat was mijn eigen tijdelijke oplossing, zolang de echte oplossing - een wachtwoordmanager voor de hele organisatie - nog in de plannen stond.

Niet ideaal. Maar beter dan een gewoon tekstbestand op het bureaublad.

Dat is precies de kern van beveiliging in een echt klein bedrijf: niet het perfecte systeem, maar een systeem dat beter is dan het vorige. Stap voor stap.

---

## Er was een plan. Het management wilde niet luisteren.

Ik was niet van plan eeuwig bij die tijdelijke oplossing te blijven.

Er lag een kant-en-klaar plan voor de invoering van een wachtwoordmanager. Concreet product, begroting, fasering. Ik was het aan het afstemmen - eerst uitleggen waarom het nodig was, dan de kosten berekenen, dan wachten op een moment in de begroting.

De reactie van het management was in de trant van: "Wij willen gewoon dat je klikt en dat het inlogt. Zonder wachtwoorden."

Ze bedoelden SSO of automatisch inloggen - wat in principe mogelijk en zelfs correct is bij de juiste inrichting. Maar niet in de context waarin het gezegd werd. Ze wilden gewoon dat medewerkers nooit meer aan wachtwoorden hoefden te denken. Geen beleid, geen regels, geen managers.

Daarna had ik steeds minder tijd voor IT überhaupt. Voor het management was het belangrijker dat ik een medewerker aan de receptie verving. Of interne documenten afhandelde. Of inkopen deed. Echte IT-taken - updates, beveiliging, documentatie - schoven steeds verder naar achteren.

De wachtwoordmanager bleef in de map Plannen.

---

## Wat in de praktijk van een klein bedrijf echt werkt

Ideale wachtwoordbeveiliging ziet er zo uit: een wachtwoordmanager voor elke medewerker, SSO waar mogelijk, Windows Hello of andere biometrie, verplichte wisseling bij vertrek van personeel.

De realiteit van een klein bedrijf ziet er anders uit: het budget gaat naar iets anders, de IT-verantwoordelijke besteedt de helft van zijn tijd aan niet-technische taken, en elke verandering vereist het overtuigen van mensen voor wie het nu prima werkt.

Vandaar: de pragmatische minimumvariant die je echt kunt invoeren.

**Post-its in de la, niet op het scherm.** Dat kost niets en is één gesprekje. Het verwijdert het meest zichtbare risico - de toevallige blik van een buitenstaander.

**Geen wachtwoordbestanden op het bureaublad.** `wachtwoorden.txt`, een Excel, een notitie in Kladblok - dat is slechter dan een Post-it omdat het op afstand toegankelijk is. Verbied het en leg uit waarom.

**Bij vertrek: wachtwoorden dezelfde dag wisselen.** Niet volgende week. Die dag. Dit is het enige wat echt een harde regel moet zijn.

**Als er ook maar een klein budget is: Bitwarden.** De gratis versie werkt voor een klein team. Niet de ideale bedrijfs-SSO - maar het is een echte stap vooruit ten opzichte van Post-its. In te voeren op één dag.

---

## Drie vragen die ik vaak krijg

**Is een wachtwoordmanager niet te ingewikkeld voor niet-technische medewerkers?**
Bitwarden en 1Password zijn specifiek gemaakt voor mensen die niet aan IT denken. Een extensie in de browser, één knop. Het moeilijkste is uitleggen waarom het nodig is - niet aanleren hoe het werkt.

**Wat als een medewerker vertrekt en alle wachtwoorden kent?**
Dit is precies het sterkste argument voor een wachtwoordmanager: met een gedeelde kluis reset je de toegang op één plek. Zonder wachtwoordmanager weet je nooit precies tot wat iemand toegang had.

**Moet je na een ransomware-aanval alle wachtwoorden wisselen?**
Ja, en meteen. Als een aanvaller in het netwerk zat, ga er dan van uit dat alles wat op schermen stond en in bestanden lag zichtbaar was. Wachtwoorden wisselen is het eerste wat je doet na een incident - vóór hervatting van de normale werkzaamheden.

---

Wil je weten waar de echte kwetsbaarheden zitten in jouw kantoor - niet de theoretische, maar die er voor jouw specifieke situatie toe doen? Ik doe een praktische IT-check voor kleine bedrijven in Limburg.

[Neem contact op →](/#contact)
