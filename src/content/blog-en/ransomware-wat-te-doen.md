---
title: "Ransomware at your office: what to do when it hits"
description: "A ransomware attack on a medical practice — and what I learned that day about backups. A practical step-by-step guide for small businesses in Limburg."
pubDate: 2026-04-10
tags: ["security", "ransomware", "backup", "IT support Limburg"]
author: "Daniel Orosz"
draft: false
image: "/images/blog/ransomware-wat-te-doen.png"
imageAlt: "IT professional working alone in an office at dawn with red warning screens"
---

It was a Tuesday. Quarter to nine. I set down my coffee and opened my laptop.

The messages were already there. Staff couldn't access their files. Screens showed text I didn't want to see: all files encrypted. A ransom amount in bitcoin.

We were in a medical practice. Patient records. Treatment plans. Everything locked.

I was the only IT person. There was no one to escalate to.

**What I knew that day:** we had backups.
**What I learned that day:** having a backup and having a backup that works are two different things.

We got through it. The recovery took a full day. Nobody lost data. But it didn't feel like a win — it felt like luck.

---

## What is ransomware exactly?

Ransomware is software that encrypts your files and only releases them once you pay. The attackers send a decryption key once the money arrives — in theory. In practice, you don't always get that key.

Small businesses are an attractive target. Not because they have a lot of money, but because they're less well-secured than large organisations and still willing to pay to get their data back. A dental practice without access to patient records hits a wall after just one day.

The most common entry points for ransomware:

- **Phishing email** with an attachment or link (by far the most common)
- **Weak passwords** on remote desktop or VPN
- **Unpatched software** with known vulnerabilities
- **USB drives** of unknown origin

---

## What I did that morning — step by step

As soon as I saw the messages, I did the following. In this order.

**1. Isolate the network**
I pulled the network cable out of the first infected machine. Then I walked to each other computer and did the same. Goal: prevent the ransomware from spreading further across the local network. Every minute counts here.

**2. Identify which machines were affected**
Not every computer was hit. By quickly checking each one, I saw that three machines were fully encrypted. Two others hadn't completed the process yet — those were still recoverable.

**3. Don't pay, don't negotiate**
The on-screen message said we had 72 hours. That's psychological pressure. I reported it to management and gave one recommendation: we fix this ourselves through the backups. Paying provides no guarantee of a working key and marks you as a paying target for a future attack.

**4. Test the backups — at this point**
This is where it almost went wrong. We had daily backups on an external drive. But I had never tested those backups under pressure. Never done a full system restore. Only checked whether the files were present.

The recovery worked, but it took longer than expected. We had to reinstall the operating system on two machines, reinstall software, reconfigure settings. Those are steps you can't do quickly if you've never practised them.

**5. Document the incident**
I wrote down what had happened, which machines were affected, when, what I had done and how long the recovery took. I used that document in every recovery conversation afterwards.

---

## What I changed that same evening

Once everything was running again, I changed one thing immediately: I built in a monthly restore test.

Not a check to see whether the backup files are present. An actual test: isolate a machine, reinstall the operating system, restore the backup and measure how long it takes until everything works again.

That costs one Saturday afternoon per quarter. But after that first ransomware attack, I knew exactly: recovery time is an hour and a half. Which step takes longest. Which settings have to be reconfigured manually.

That knowledge is worth more than the backup itself.

---

## What you can do today

You don't need a large IT budget to get the basics right. These are the four things that make the biggest difference for small businesses:

**Rule 1: Backups in a separate location**
A backup on the same computer or the same network as the infected machines is also encrypted. Use an external drive that you disconnect after copying, or a cloud service like Microsoft OneDrive or Backblaze. Ideally both.

**Rule 2: Test your backup at least once a year**
Set up a machine from scratch and restore the backup completely. Measure how long it takes. Write it down. If you've never done this, you don't know whether it works.

**Rule 3: Keep software up to date**
Windows updates, Office updates, antivirus software. The vast majority of attacks exploit known vulnerabilities for which a fix has been available for months. Updates are not optional.

**Rule 4: Teach employees to recognise phishing**
One click on the wrong attachment is enough. Let employees know what a phishing email looks like: urgent language, unknown sender, an attachment you weren't expecting. A ten-minute conversation can prevent an attack.

---

## Frequently asked questions about ransomware

**Should I pay the ransom?**
No. Paying gives no guarantee your files will be released. You also identify yourself as a paying target, which increases the chance of a follow-up attack. Always recover through backups — even if that takes longer.

**How do I know my backup actually works?**
Only by testing it for real. Don't just check whether the files are present — restore a complete machine and time it. If you've never done this, you don't know.

**What if I have no backups?**
Then there are no good options. You can engage professional data recovery companies, but that's expensive and not always successful. Prevention is literally cheaper than cure here.

**How likely is it that my small business gets attacked?**
More likely than you think. Small businesses are targeted precisely because they're less secure. Ransomware attacks on SMEs have increased sharply in recent years. It's not a question of whether, but of when — and how prepared you are when it happens.

---

Want to know how your office stands right now? I do a practical IT check for small businesses in Limburg — including a look at backups, updates and security.

[Get in touch →](/en/#contact)
