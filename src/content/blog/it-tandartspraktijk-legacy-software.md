---
title: "Waarom ik in 2024 opzettelijk Windows XP draaide in een tandartspraktijk"
description: "Een IT-bedrijf rolde Windows 11 uit zonder te checken of het röntgensoftware zou breken. Drie dagen later begonnen de problemen. In een andere vestiging draaiden we ondertussen bewust XP. Dit is hoe IT er in de tandartspraktijk echt uitziet."
pubDate: 2026-03-21
tags: ["IT tandartspraktijk", "legacy software", "Windows 11", "medische IT"]
author: "Daniel Orosz"
draft: false
image: "/images/blog/it-tandartspraktijk-legacy-software.webp"
imageAlt: "Verouderde computer met Windows XP-interface naast moderne tandheelkundige röntgenapparatuur in een behandelkamer"
---

Een extern IT-bedrijf rolde Windows 11 uit op onze klinieken.

Zonder te controleren of de röntgensoftware ermee overweg kon.

Drie dagen later begonnen de fouten. Niet meteen - drie dagen later. Tegen die tijd was de update al uitgerold naar twee vestigingen.

Ze hadden ons van tevoren nog iets meegegeven. "Misschien moet u ook de andere partij bellen - de firma die jullie röntgensoftware installeert." Gewoon gezegd. Niet georganiseerd, niet gecoördineerd, en zeker niet gewacht tot dat gesprek had plaatsgevonden. Ze rolden de update uit en vertrokken.

Die andere partij - de röntgenspecialisten - belden we inderdaad. Alleen pas nadat alles stukging.

De maanden daarna waren een aaneenschakeling van tijdelijke oplossingen, ondersteuningstickets en gesprekken tussen twee partijen die allebei naar de ander wezen. Alles vanwege een wijziging van twintig minuten die te voorkomen was geweest met één afgestemde testdag - en één telefoontje vóór de uitrol in plaats van erna.

En terwijl dat speelde, draaide in een andere vestiging van ons netwerk een computer op Windows XP.

Bewust. Gedocumenteerd. Door mij.

---

> **Kort:** tandheelkundige software is een wereld apart. Oude Windows-versies, hardware uit 2005, programma's die bij elke update kunnen breken. Wie komt met "best practices" zonder te weten wat er op de machines staat, maakt meer kapot dan hij oplost. Zeven jaar in deze omgeving leerde me één ding boven alles: begrijp eerst wat er breekt als je iets verandert - dan pas verander je het.

---

## Waarom tandheelkundige software anders is

In een gewoon kantoor werk je bij: nieuwe Windows-versie beschikbaar, uitrollen, klaar. De browser werkt automatisch bij. Niemand denkt er lang bij na.

In een tandartspraktijk werkt dat anders.

Dental-programma's zijn vaak al jaren oud. Sommige zijn gebouwd in de vroege jaren 2000 en sindsdien stapsgewijs uitgebreid - maar traag, en alleen onder druk van gebruikers. Nieuwe Windows-versies worden door die leveranciers soms maanden na release getest, soms helemaal niet.

Het resultaat: je werkt je besturingssysteem bij en ontdekt een paar dagen later dat iRYS - het programma voor het bekijken van röntgenbeelden - crasht bij het openen. Of dat de solofotos instabiel worden. Of dat de röntgensoftware foutmeldingen geeft die er eerder niet waren.

Precies dat gebeurde na Windows 11. iRYS begon te crashen. Solofotos werkten niet meer consistent. De röntgensystemen gooiden fouten.

Het externe IT-bedrijf wist niet eens dat iRYS bestond. Ze hadden de update technisch correct uitgevoerd. Ze wisten alleen niet wat er op de machines stond.

---

## De XP die er met opzet stond

In één van onze vestigingen stond een computer op Windows XP. In 2023.

Ik wist het. De directeur wist het. Het was gedocumenteerd.

De röntgenapparatuur op die locatie was oud - en alleen compatibel met XP. De keuze was eenvoudig: besturingssysteem updaten en het apparaat werkt niet meer, of het apparaat vervangen voor een bedrag met vijf cijfers dat nergens in de begroting stond.

Was XP een beveiligingsrisico? Ja, dat wisten we. Daarom was die machine volledig van het netwerk geïsoleerd. Beperkte toegang. Het risico was beoordeeld en bewust geaccepteerd.

Dit is geen nalatigheid. Dit is een afweging: dit is het risico, dit zijn de kosten van het alternatief, en dit doen we om het risico te beheersen binnen de bestaande beperkingen.

Het bedrijf dat Windows 11 uitrolde kende de best practice. Ze wisten alleen niet wat er concreet op die machines draaide.

Dat is het verschil.

---

## De fysieke omgeving die niemand meeneemt

Er is nog iets wat je alleen begrijpt als je echt in een kliniek hebt gewerkt.

Ik besloot ooit computers te ontdoen van stof - in de behandelkamer zelf. Vroeg in de ochtend, nog geen patiënten, perslucht, kap eraf.

De stofwolk was indrukwekkend.

De assistent die op dat moment binnenkwam, maakte een geluid dat geen woord was. Het was een "pfff." Op de net gesteriliseerde behandelstoel.

Ze had gelijk.

Sindsdien heb ik nooit meer stof geblazen in een behandelruimte. Machines uitkoppelen, naar de opslagruimte brengen, daar doen. Twintig minuten extra die het waard zijn.

Een kleinigheid. Maar dit soort kleinigheden is precies waar IT-mensen zonder ervaring in deze omgeving de mist ingaan.

---

## Wat dit in de praktijk betekent

Als je IT doet voor een tandartspraktijk - of iemand inhuurt voor dat werk - zijn er een paar dingen die echt tellen.

**Controleer softwarecompatibiliteit vóór elke OS-update.** Schrijf de leverancier aan. Vraag om een compatibiliteitsmatrix. Is die er niet, test dan op één geïsoleerde machine en wacht minimaal een week met volledig gebruik. Drie dagen is de absolute ondergrens.

**Begrijp de afhankelijkheidsketen van oudere hardware.** Röntgensystemen, TWAIN-scanners, USB-controllers voor instrumenten - dit alles kan gebonden zijn aan een specifieke driver of OS-versie. Verander er één schakel in zonder het geheel te begrijpen en je hebt een probleem.

**Documenteer bewuste risico's.** Een geïsoleerde XP-machine met gedocumenteerd risico is beheersbare situatie. Een machine die niemand kent en nooit bijgewerkt wordt, is dat niet. Het verschil zit in bewustzijn en opvolging.

**Zorg dat betrokken partijen met elkaar praten vóórdat er iets verandert.** IT-generalist en röntgenspecialist die pas contact hebben als het al misgegaan is, kost maanden. Een uur afstemmen vooraf kost een uur.

---

## Drie vragen die ik vaak krijg

**Kan je in 2024 echt nog Windows XP draaien?**
Als de machine volledig van het netwerk is geïsoleerd, de toegang beperkt is en het risico gedocumenteerd en bewust geaccepteerd, dan is het een afgewogen compromis. Niet ideaal, maar reëel. Het alternatief was een investering die er gewoon niet was. Het gevaarlijke is niet de XP zelf - het is doen alsof die machine er niet is.

**Hoe controleer je compatibiliteit voor een OS-update in een tandartspraktijk?**
Neem contact op met de leverancier van je dental-software met een concrete vraag: "Is Windows 11 versie X.X ondersteund?" Geen garantie? Dan test je op één machine, geïsoleerd van de rest, en wacht je minimaal een week met normaal gebruik voor je verder uitrolt.

**Wat doe je als een IT-bedrijf al schade heeft aangericht door een update?**
Eerst kijken of een rollback mogelijk is. Zo niet: bel de leverancier van de dental-software - niet Microsoft. Zij kennen dit scenario. Ze hebben het vaker gezien en weten meestal een weg terug.

---

*Verouderde systemen en geen updates — dat is ook een van de manieren waarop ransomware binnenkomt. Lees: [ransomware op je kantoor — wat doe je als het misgaat](/blog/ransomware-wat-te-doen/).*

---

Heb jij een tandartspraktijk of medische praktijk en weet je niet zeker of je IT goed is ingericht? Ik heb zeven jaar precies dit gedaan - en ik weet waar de problemen zich verstopt houden.

[Neem contact op →](/#contact)
