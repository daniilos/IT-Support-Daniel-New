---
title: "Ransomware op je kantoor: wat doe je als het mis gaat?"
description: "Ik zat in Kiev toen het telefoontje kwam. Een noodvlucht naar Nederland, een nacht in logbestanden, en twee weken wachten. Dit is wat er gebeurde — en wat ik die zeven jaar daarna nooit meer hoefde te doen."
pubDate: 2026-04-10
tags: ["beveiliging", "ransomware", "backup", "IT support Limburg"]
author: "Daniel Orosz"
draft: false
image: "/images/blog/ransomware-wat-te-doen.webp"
imageAlt: "IT-professional werkt 's ochtends vroeg alleen op kantoor met rode waarschuwingsschermen"
---

Ik zat in het kantoor in Kiev. Gewone werkdag.

Telefoon. Medewerkers uit Nederland - stemmen die omhooggaan: bestanden openen niet, schermen zien er vreemd uit, "het is hier echt erg". Ik ga snel op afstand binnen. Zie de console. Bestandsnamen die één voor één veranderen.

Op dat moment begreep ik alles.

Ik bel het Nederlandse kantoor: zet de computers uit. Meteen. Stop alles.

Vijf minuten later belt de directeur: je hebt een spoedvlucht.

---

> **Kort:** ransomware versleutelt je bestanden en eist betaling. Voor kleine bedrijven is dat vaak een keuze tussen betalen of alles kwijtraken. Bij een tandartspraktijk waar ik werkte speelde dit twee keer. Drie jaar voor mijn komst weigerden ze te betalen - en verloren drie jaar aan röntgenfoto's en patiëntdossiers voorgoed. In mijn eerste maanden vloog ik vanuit Kiev naar Nederland, zat een nacht in logbestanden, en wachtten we twee weken op een beslissing. We betaalden €1.500. We kregen alles terug. In dit artikel leg ik uit wat ik deed - en hoe ik zorgde dat het zeven jaar lang niet meer hoefde.

---

## Wat is ransomware precies?

Ransomware is software die je bestanden versleutelt en ze pas vrijgeeft als je betaalt. De aanvallers sturen een decryptiesleutel zodra het geld binnen is - in theorie. In de praktijk krijg je die sleutel lang niet altijd.

Kleine bedrijven zijn een geliefd doelwit. Niet omdat ze veel geld hebben, maar omdat ze minder goed beveiligd zijn dan grote organisaties en toch bereid zijn te betalen om hun data terug te krijgen. Een tandartspraktijk zonder toegang tot patiëntdossiers staat al na één dag met de rug tegen de muur.

Hoe ransomware binnenkomt:

- Phishing-mail met een bijlage of link - verreweg het meest voorkomend
- Zwakke wachtwoorden op remote desktop of VPN
- Software die al maanden niet bijgewerkt is
- USB-sticks van onbekende herkomst

---

## Drie jaar voor mijn komst

Wat ik die eerste week hoorde: dit was niet de eerste keer.

Drie jaar voor mijn komst was dezelfde praktijk al eens getroffen. Ze hadden besloten niet te betalen. Het gevolg: drie jaar aan röntgenfoto's en patiëntdocumentatie was voorgoed weg. Geen herstel mogelijk. Toen ik daar begon, was die lege periode in het archief er nog steeds.

De vorige IT-beheerder had daarna niets gebouwd. Geen backups, geen betere beveiliging. Ze gingen gewoon verder.

---

## De noodvlucht

Koffer gepakt en naar het vliegveld.

De hoofdserver stond bij de directeur thuis. Dat was mijn eerste stop, rechtstreeks vanaf het vliegveld. Ik kom binnen - vijf machines besmet. Ik ga ze een voor een af: kijk hoe ver het virus is gekomen, wat versleuteld is, wat nog intact.

Ik zit tot diep in de nacht in logbestanden. Op een van de schermen staat het losgeldbericht. Betaaleis in bitcoin, aftellende timer.

De directeur staat erbij. Kijkt mee. In de uren dat ik bezig ben lijkt zijn haar grijzer geworden.

Ik kom op van een machine en zeg het: de bestanden zijn niet te redden. Niet zonder de sleutel.

---

## Twee weken wachten

De directeur nam niet meteen een beslissing. €1.500 is geld. Misschien was er een andere weg.

Ik controleerde eerst [nomoreransom.org](https://www.nomoreransom.org/nl/index.html) - een gratis platform van de Politie en Europol met decryptietools voor honderden ransomwarevarianten. Voor deze variant was er niets beschikbaar.

Terwijl het management afwoog, groef ik door de rest van het systeem. En hoe dieper ik groef, hoe grauer mijn eigen haar werd.

Geen firewall. Geen antivirussoftware. Geen backups. Helemaal niets. Het netwerk stond open. De vorige beheerder had het zo achtergelaten - en niemand had het ooit aangekaart.

Die twee weken gebruikte ik om alles uit te tekenen wat er had moeten staan: backuparchitectuur, antivirusplan, firewallregels. Klaar om in te voeren zodra we groen licht hadden.

---

## De beslissing en de commandoregel

Na twee weken zei de directeur: we betalen.

De rekening was simpel: €1.500 of vier jaar patiëntdata kwijtraken. En we wisten allebei wat er drie jaar eerder was gebeurd toen ze nee zeiden.

We maakten de betaling over. Kregen het script.

Dat draaiden we op een geïsoleerde machine. De commandoregel startte. Bestandsnaam voor bestandsnaam begon te verschijnen - de bestanden werden één voor één ontsleuteld. Het duurde uren. Niemand sprak veel.

Alles came terug.

---

## Wat ik in de twee weken daarna bouwde

Terwijl de data werd hersteld, bouwde ik parallel wat er al zeven jaar had moeten staan.

Antivirussoftware op elke machine. Een firewall met fatsoenlijke regels. Dagelijkse backups naar externe opslag die na het kopiëren losgekoppeld wordt van het netwerk. En een hersteltest elk kwartaal: machine van nul opzetten, backup terugzetten, tijd meten, opschrijven.

Twee weken na dat telefoontje uit Kiev stond het netwerk er anders bij.

Zeven jaar later is er geen enkele aanval geweest. De backups hebben het nooit laten afweten. Niet omdat het geluk was - maar omdat ik elke keer controleerde, elke kleine opening dichtsloot, en altijd een stap verder ging dan strikt noodzakelijk. Saaie routine. Maar precies die routine zorgt dat je nooit meer 's nachts in iemands woonkamer zit en kijkt hoe een directeur grijs wordt.

Weet u wat diezelfde directeur zei toen ik uiteindelijk vertrok? "Er is hier eigenlijk niet zo veel IT-werk. Je bent niet echt onmisbaar."

Dat is de ironie van dit vak. Als alles in brand staat en je vliegt met spoed vanuit een ander land: geweldig werk, biertje verdiend. Maar als je zeven jaar lang zorgt dat er helemaal niets in brand vliegt - dan ben je blijkbaar een dagjesmensch.

Stille IT is het doel. Alleen begrijpt niet iedereen wat dat kost.

---

## Wat je vandaag nog kunt doen

Je hoeft geen groot IT-budget te hebben om je basis op orde te brengen.

**Backups op een aparte locatie.** Een backup op hetzelfde netwerk als de besmette machines is ook versleuteld. Gebruik een externe schijf die je na het kopiëren loskoppelt, of een clouddienst als Microsoft OneDrive of Backblaze. Liefst allebei.

**Test je backup minstens één keer per jaar.** Zet een machine opnieuw op en herstel de backup volledig. Meet hoe lang het duurt. Schrijf het op. Als je dat nooit hebt gedaan, weet je niet of het werkt.

**Houd software up-to-date.** Verreweg de meeste aanvallen maken gebruik van bekende lekken waarvoor al maanden een oplossing beschikbaar is. Windows-updates, antivirussoftware - geen luxe.

**Leer medewerkers phishing herkennen.** Eén klik op de verkeerde bijlage is genoeg. Urgente taal, onbekende afzender, bijlage die je niet verwacht - een gesprek van tien minuten kan een aanval voorkomen.

---

## Drie vragen die ik vaak krijg

**Moet ik losgeld betalen?**
Controleer eerst [nomoreransom.org](https://www.nomoreransom.org/nl/index.html) - voor veel varianten is er een gratis decryptietool. Als die er niet is en de data is onmisbaar: soms is betalen de minst slechte optie. Ik heb het gedaan. Maar het is een gok - de sleutel werkt niet altijd, en betalen maakt je een bekende betalende partij. De enige echte oplossing is zorgen dat je nooit voor die keuze staat.

**Hoe weet ik of mijn backup goed werkt?**
Alleen door hem te testen. Niet controleren of bestanden aanwezig zijn - een volledige machine herstellen en de tijd meten. Als je dat nooit hebt gedaan, weet je het niet.

**Wat als ik geen backups heb?**
Dan zijn de opties slecht. Professionele dataherstelbedrijven zijn kostbaar en niet altijd succesvol. Beter nu beginnen dan na de aanval.

---

*Ransomware komt vaak binnen via zwakke wachtwoorden of phishing. Lees ook: [waarom een Post-it in de la beter is dan op het scherm](/blog/wachtwoord-postit-lade/) — over wachtwoordbeveiliging in de praktijk van een klein kantoor.*

---

Wil je weten hoe jouw kantoor er nu voor staat? Ik doe een praktische [IT-check voor kleine bedrijven](/blog/) in Limburg - inclusief backups, updates en beveiliging.

[Neem contact op →](/#contact)
