---
title: "The day a staff member played Vengaboys through the office speakers"
description: "She wanted some background music. She found an open network. She connected to the Sonos. It was 09:15 and the director was with a client. VLANs went in that afternoon. On wifi segmentation, the printing question, and why even the boss called me twenty times."
pubDate: 2026-04-18
tags: ["wifi", "VLAN", "network", "office security", "IT support Limburg"]
author: "Daniel Orosz"
draft: false
image: "/images/blog/wifi-vlan-kantoor.webp"
imageAlt: "Network cabinet with cables and access point in an office environment"
---

It was a Thursday morning. My phone rang.

The director. No greeting.

"Turn. It. Off."

A staff member had connected her phone to the office wifi. That same network was linked to the Sonos speakers in the meeting room. She'd searched for something on Spotify. She'd pressed play. The director was in the middle of a client meeting.

Vengaboys. Full volume. In a meeting.

I set up VLANs that afternoon.

---

> **Short version:** an office network without segmentation is one big open field. Visitor, staff member, printer, Sonos — everything sits on the same network and can reach everything else. VLANs fix that by splitting the network: a separate segment per device type, each with its own rules. Half a day to set up. Prevents a lot of trouble. And yes, also the Vengaboys situation.

---

## One network, everything reachable

Most small offices look like this: one router, one wifi password, everything on it.

Computers, staff laptops, personal phones, visitor phones, the printer, the NAS, the smart speakers. All on the same network, all accessible to each other. That feels convenient — everyone can get to everything.

That's also the problem.

A staff member searching for a speaker in her app finds it. A visitor on your network sits on the same segment as your file server. An infected laptop from an intern can see traffic it shouldn't be seeing.

Most small businesses don't think about this. Fair enough — if it works, it works. Until one day it doesn't.

---

## Wifi VLANs in the office: how it works

VLAN stands for Virtual Local Area Network. Technically: you split one physical network into multiple logical networks that can't reach each other, unless you explicitly allow it.

For a small office that looks like this:

- **Work network** — computers, laptops, work printer, file server
- **Phone network** — staff personal devices
- **Guest network** — visitors, suppliers, anyone who just wants internet
- **Device network** — Sonos, smart thermostat, coffee machine with an app

Each network has its own rules. The guest network reaches the internet but not the printer. The device network plays music but can't touch company data. The work network has access to what it needs, and nothing more.

You don't need expensive hardware. A Mikrotik hAP or hEX (€50–80) handles this fine. If you have wired devices on different networks, you'll also need a managed switch. Unmanaged switches don't know what VLANs are.

---

## After that Thursday

I moved the Sonos to the device network. Only the director and the receptionist have a device on that network — their work phone, connected to a separate wifi name.

The director called me around twenty times in the first two weeks.

"I can't get to my Sonos."

"You need to connect to the network ending in -beheer."

"But I'm connected to the office wifi."

"That's a different network."

"But it worked yesterday."

"Yesterday you had your work phone. Now you have your personal phone."

I had that conversation maybe eight times.

He hasn't called me about unwanted music since.

---

## The printing question: can a staff member print something personal?

This is where it gets more complicated. Honestly, I don't have a perfect answer here either.

Staff sometimes want to print from their personal phone. A photo, a form, a boarding pass. Something private. That's not unreasonable. It's like free coffee at the office: a small kindness that costs almost nothing and builds goodwill.

But if the printer is on the work network, they need to switch to that network to print. Then they're on the same segment as the company files.

A few ways to handle it:

**Printer on a separate network, accessible from multiple VLANs.** The clean solution. The printer is reachable from the work network and the phone network, but not from the guest network. Requires a managed switch and a bit more configuration.

**A cheap second printer just for personal use.** Sounds excessive, but for €80 you get a basic printer on the phone network. Staff print personal documents there, the work printer stays clean. You can track paper and toner use separately. In theory, neat.

**Staff switch to the work network when they need to print.** Pragmatic, works, slightly less tidy. In most small offices the risk is manageable if everything else is properly set up.

But the reality? Reality is stubborn.

My director — smart guy, not a tech person — called me twenty times because he couldn't get to his Sonos. Because he doesn't remember which network is which. Now imagine giving those same staff members three different wifi names and telling them: pick the right one.

That doesn't work.

Good naming goes a long way. "Office-work", "Office-phones", "Office-guests" is already much clearer than four random network names. And a simple A4 sheet near the printer: which network is for what. That cuts half the support calls.

Sometimes the ideal technical solution is fine on paper but doesn't hold up in practice. Then you pick the solution people can actually use.

---

## Three questions I get asked

**Do I need an expensive router for wifi VLANs?**
No. A Mikrotik hAP or hEX handles this fine, and those cost €50–80. You need a router that supports VLANs. And if you have wired devices on different networks: a managed switch. Unmanaged switches don't know the concept.

**Isn't a guest network on the router enough?**
For home: yes. For an office with a file server, NAS or devices you don't want exposed: no. A guest network separates visitors from the rest, but doesn't segment your internal network further. Staff personal phones still sit on the same network as your business data.

**Do staff notice the difference?**
Questions come in the first week. After that, not much. I always hand over a short overview at handoff: this network is for this, that network is for that. Two A4 sheets, one near the entrance and one by the printer. Solves most of the confusion.

---

*A poorly configured network is also one of the ways ransomware spreads once it's inside. Read: [ransomware at your office — what do you do when it goes wrong](/en/blog/ransomware-wat-te-doen/).*

---

Want to know how your office network looks right now? I do a practical IT check for small businesses in Limburg — network segmentation, security, and backup included.

[Get in touch →](/en/#contact)
