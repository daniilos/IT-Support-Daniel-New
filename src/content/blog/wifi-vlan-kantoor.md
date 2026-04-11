---
title: "De dag dat een medewerker Vengaboys aanzette via de kantoorluidsprekers"
description: "Ze wilde muziek. Ze vond een open wifi. Ze koppelde haar telefoon aan de Sonos. Het was 09:15 en de directeur zat met een klant. Diezelfde middag lagen er VLANs. Over wifi-segmentatie, de printvraag, en waarom zelfs de baas twintig keer belde."
pubDate: 2026-04-18
tags: ["wifi", "VLAN", "netwerk", "kantoor beveiliging", "IT support Limburg"]
author: "Daniel Orosz"
draft: false
image: "/images/blog/wifi-vlan-kantoor.webp"
imageAlt: "Netwerkkast met meerdere kabels en accesspoint in een kantooromgeving"
---

Het was een donderdagochtend. Mijn telefoon ging.

De directeur. Geen begroeting.

"Zet. Die. Muziek. Uit."

Een medewerker had haar telefoon verbonden met het kantoor-wifi. Dat netwerk hing ook aan de Sonos-luidsprekers in de vergaderruimte. Ze had iets opgezocht in Spotify. Ze had op play gedrukt. De directeur zat op dat moment met een klant.

Vengaboys. Op vol volume. In een vergadering.

Ik heb die middag VLANs ingericht.

---

> **Kort:** een kantoornetwerk zonder segmentatie is één groot open veld. Bezoeker, medewerker, printer, Sonos — alles zit op hetzelfde netwerk en kan bij alles. VLANs lossen dat op door het netwerk op te splitsen: apart netwerk per apparaattype, elk met eigen regels. Kost een dagdeel. Voorkomt een hoop gedoe. En ja, ook de Vengaboys-situatie.

---

## Eén netwerk, alles bereikbaar

De standaardsituatie in de meeste kleine kantoren is dit: één router, één wifi-wachtwoord, alles erop.

Computers, laptops van medewerkers, privételefoons, telefoons van bezoekers, de printer, de NAS, de slimme luidsprekers. Alles op dezelfde snel toegankelijke netwerk. En dat lijkt makkelijk — iedereen kan overal bij.

Maar dat is ook precies het probleem.

Een medewerker die een luidspreker zoekt in haar app, vindt die ook. Een bezoeker die op jouw netwerk zit, zit op hetzelfde segment als je bestandsserver. Een besmette laptop van een stagiair kan verkeer zien dat hij niet hoort te zien.

De meeste kleine bedrijven denken hier niet over na. Logisch — als het werkt, werkt het. Tot het een keer niet werkt.

---

## Wifi-VLANs op kantoor: hoe het werkt

VLAN staat voor Virtual Local Area Network. Technisch gezien splits je één fysiek netwerk op in meerdere logische netwerken die elkaar niet kunnen bereiken, tenzij je dat zelf instelt.

Vertaald naar een klein kantoor:

- **Werknetwerk** — computers, laptops, werkprinter, bestandsserver
- **Telefoonnetwerk** — privételefoons van medewerkers
- **Gastennetwerk** — bezoekers, leveranciers, iedereen die even wifi wil
- **Apparatennetwerk** — Sonos, slimme thermostaat, koffiemachine met app

Elk netwerk heeft eigen regels. Het gastennetwerk komt op internet maar ziet de printer niet. Het apparatennetwerk speelt muziek maar heeft geen toegang tot bedrijfsdata. Het werknetwerk heeft toegang tot wat het nodig heeft, en verder niks.

Je hebt geen dure hardware nodig om dit in te richten. Een Mikrotik hAP of hEX (€50–80) kan dit prima. Heb je meerdere bedrade apparaten op verschillende netwerken? Dan heb je ook een managed switch nodig. Een unmanaged switch kent geen VLANs.

---

## Na die donderdag

Ik heb de Sonos op het apparatennetwerk gezet. Alleen de directeur en de receptioniste kunnen er bij — via een aparte wifi-naam, alleen vanaf hun zakelijke telefoon.

De eerste twee weken belde de directeur me zo'n twintig keer.

"Ik kan niet bij mijn Sonos."

"Je moet verbinden met het netwerk dat eindigt op -beheer."

"Maar ik ben toch verbonden met kantoor-wifi?"

"Dat is een ander netwerk."

"Maar gisteren werkte het wel."

"Gisteren had je je zakelijke telefoon. Nu je privételefoon."

Dat gesprek heb ik een stuk of acht keer gevoerd.

Over ongewenste muziek belde hij me daarna nul keer meer.

---

## De printvraag: mag een medewerker persoonlijk printen?

Hier wordt het ingewikkelder. En eerlijker gezegd heb ik hier ook geen perfect antwoord op.

Medewerkers willen soms iets printen vanaf hun privételefoon. Een foto, een formulier, een vliegticket. Iets persoonlijks. En dat is niet gek. Het is hetzelfde als gratis koffie op kantoor: een kleine vriendelijkheid die weinig kost en goodwill oplevert.

Maar als de printer op het werknetwerk hangt, moeten ze overschakelen naar dat netwerk om te kunnen printen. Dan zitten ze op hetzelfde segment als de bedrijfsbestanden.

Er zijn een paar manieren om dat op te lossen:

**Printer op een apart netwerk, bereikbaar vanuit meerdere VLANs.** De nette oplossing. De printer is bereikbaar vanuit het werknetwerk én het telefoonnetwerk, maar niet vanuit het gastennetwerk. Vereist een managed switch en iets meer configuratie.

**Een goedkope printer alleen voor persoonlijk gebruik.** Klinkt overdreven, maar voor €80 heb je een basisprinter die je op het telefoonnetwerk hangt. Medewerkers printen er persoonlijke documenten op, de werkprinter blijft schoon. Je kunt het papier- en tonerverbruik apart bijhouden. In theorie netjes.

**Medewerkers mogen overschakelen naar het werknetwerk voor printen.** Pragmatisch, werkt, iets minder netjes. In de meeste kleine bedrijven is het risico beheersbaar als je de rest goed hebt ingericht.

Maar de praktijk? De praktijk is weerbarstig.

Mijn directeur — slim mens, geen techneut — belde twintig keer omdat hij niet meer bij zijn Sonos kon. Omdat hij niet onthoudt welk netwerk waarvoor is. Nu stel je voor dat diezelfde medewerkers drie verschillende wifi-namen krijgen en de opdracht: kies de juiste.

Dat werkt niet.

Goede namen kiezen helpt al veel. "Kantoor-werk", "Kantoor-telefoon", "Kantoor-gasten" is al een stuk duidelijker dan vier willekeurige netwerken. En een kort A4'tje bij de printer: welk netwerk is waarvoor. Dat scheelt de helft van de telefoontjes.

Soms is de ideale oplossing technisch prima maar praktisch onhaalbaar. Dan kies je de oplossing die mensen begrijpen en gebruiken.

---

## Drie vragen die ik vaak krijg

**Heb ik een dure router nodig voor wifi-VLANs?**
Nee. Een Mikrotik hAP of hEX doet dit prima, en die kosten €50–80. Wat je nodig hebt is een router die VLANs ondersteunt. En als je meerdere bedrade apparaten hebt op verschillende netwerken: een managed switch. Unmanaged switches kennen het concept niet.

**Is een gastennetwerk op de router niet genoeg?**
Voor thuis: ja. Voor een kantoor met een bestandsserver, NAS of apparaten die je niet wil blootstellen: nee. Een gastennetwerk scheidt bezoekers van de rest, maar segmenteert je interne netwerk verder niet. Medewerkers en hun privételefoons zitten dan nog steeds op hetzelfde netwerk als je bedrijfsdata.

**Merken medewerkers veel van de overstap?**
De eerste week komen er vragen. Daarna nauwelijks meer. Ik geef altijd een kort overzichtje mee bij de oplevering: dit netwerk is waarvoor, dat netwerk is waarvoor. Twee A4'tjes, één bij de ingang en één bij de printer. Dat lost de meeste verwarring op.

---

*Een slecht ingesteld netwerk is ook één van de manieren waarop ransomware zich verspreidt als het eenmaal binnen is. Lees: [ransomware op je kantoor — wat doe je als het misgaat](/blog/ransomware-wat-te-doen/).*

---

Wil je weten hoe jouw kantoornetwerk er nu voor staat? Ik doe een praktische IT-check voor kleine bedrijven in Limburg — inclusief netwerksegmentatie, beveiliging en back-up.

[Neem contact op →](/#contact)
