---
title: "A Semester of Sysadmin Adventures"
description: "Field notes from running my own servers for six months."
pubDate: 2026-07-03
tags: ["sysadmin", "servers", "experiment"]
---

For six months I refused to use managed hosting and ran everything myself: a
vps, a firewall, a container, and a very patient DNS setup. It broke repeatedly,
which was the point. These are the lessons that survived.

## Logs are the real interface

The moment I started reading logs *instead of* guessing, the server stopped
feeling mystical. `journalctl` became a conversation. Most of my emergencies
were not emergencies — they were clues I had been ignoring.

## Backups I actually tested

I used to "have a backup." One careful restore drill later, I found out what I
actually had: a prayer. Now the rule is that a backup only exists if I've
recovered from it at least once, on a clean machine, this quarter.

## The boring success

By month five, the infrastructure was boring — and that was the win. A server
that does its job silently lets you think about everything else. Borrowing
someone else's platform is fine, but running the small boring stack yourself
teaches you what "boring" really costs, and why it's worth it.