# Portfolio — Project Contents Guide

A complete map of everything inside the **Harshit Kumar Sinha** portfolio project.

## Overview

A high-performance personal brand web app for **Harshit Kumar Sinha** — Business Intelligence, AI Automation, and Data Analytics Specialist. Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **Apache ECharts**, **cmdk**, and the **Vercel AI SDK**.

---

## Directory Structure

```
Portfolio/
├── README.md                    # Project overview, setup, deploy guide
├── package.json                 # Dependencies & scripts
├── package-lock.json            # Lockfile (dependency tree)
├── next.config.ts               # Next.js config
├── tsconfig.json                # TypeScript config
├── tailwind.config.ts           # Tailwind theme (colors, fonts)
├── postcss.config.mjs           # PostCSS config
├── next-env.d.ts                # Next.js type declarations
├── .gitignore                   # Ignored files
├── .next/                       # Next.js build output
├── .vercel/                     # Vercel deployment config
├── node_modules/                # Installed packages
└── src/
    ├── app/
    │   ├── layout.tsx           # Root layout: navbar, footer, AI drawer, metadata
    │   ├── page.tsx             # Home page assembling all sections
    │   ├── globals.css          # Global styles & glassmorphism utilities
    │   └── api/chat/route.ts    # Vercel AI SDK edge endpoint (resume AI assistant)
    ├── components/
    │   ├── ai/
    │   │   └── resume-assistant.tsx   # AI chat drawer (ask about resume)
    │   ├── analytics/
    │   │   └── live-echart-widget.tsx # ECharts telemetry line chart
    │   ├── navigation/
    │   │   ├── navbar.tsx             # Fixed nav with Cmd+K + Ask AI button
    │   │   ├── footer.tsx             # Footer with socials
    │   │   └── command-palette.tsx    # Cmd+K global search palette
    │   ├── sections/
    │   │   ├── hero.tsx               # Landing hero with metrics
    │   │   ├── about.tsx              # "Core Philosophy" pillar cards
    │   │   ├── project-showcase.tsx   # Project cards + detailed modal
    │   │   ├── live-dashboards.tsx    # Telemetry stats + live chart
    │   │   ├── skills-graph.tsx       # Skill proficiency bars
    │   │   ├── experience-timeline.tsx# Career & education timeline
    │   │   └── contact.tsx            # Contact channels + inquiry form
    │   ├── ui/
    │   │   ├── card.tsx               # Glass card component
    │   │   ├── badge.tsx              # Badge variants (default/emerald/purple/outline)
    │   │   └── button.tsx             # Button variants & sizes
    │   └── providers.tsx              # next-themes ThemeProvider wrapper
    ├── lib/
    │   ├── data.ts                    # ALL content: personal info, projects, experience, skills
    │   └── utils.ts                   # cn() class-merge helper
    └── types/
        └── portfolio.ts               # Project, ExperienceItem, SkillNode interfaces
```

---

## What Each Section of the Site Shows

| Section | File | Content |
|---|---|---|
| Hero | `sections/hero.tsx` | Name, headline, availability pill, CTA buttons, metric bar (94.2% GAN authenticity, 3+ trading strategies, MySQL, Python) |
| About | `sections/about.tsx` | 4 pillars: SQL Warehousing, AI/GANs, DEI BI Research, BBA Education |
| Projects | `sections/project-showcase.tsx` | 2 featured case studies with architecture diagrams, tech stacks, metrics, clickable detailed modals |
| Analytics | `sections/live-dashboards.tsx` + `analytics/live-echart-widget.tsx` | Live ECharts line graph (GAN inferences + MySQL queries) and telemetry stat cards |
| Skills | `sections/skills-graph.tsx` | Proficiency bars for Python, MySQL, GANs, Excel, ML, Storytelling |
| Experience | `sections/experience-timeline.tsx` | Timeline: NGO internship + BBA education |
| Contact | `sections/contact.tsx` | Email/phone/location channels + inquiry form |

---

## Key Content in `src/lib/data.ts`

### Personal Info
- **Name:** Harshit Kumar Sinha
- **Title:** Business Intelligence 
- **Location:** Navi Mumbai, India
- **Email:** apkaharshit2006@gmail.com
- **Phone:** +91 9993241666
- **Education:** BBA (Business Analytics), ITM Skills University, 2025–2026

### Projects
1. **Neural Handwriting Copying & Generation System** (AI/ML) — GAN pipeline converting digital input to human handwriting. 94.2% authenticity, <120ms synthesis. [GitHub](https://github.com/harshit-sinha/handwriting-gan-engine)
2. **Algorithmic Trading Strategy System** (Data Analytics) — Python backtesting & signal generation engine. [GitHub](https://github.com/apkaharshit2006-hue/Trading-Algorythm) *(placeholder details — refine once the repo is public)*

Every project card now shows a **GitHub** link directly (and in the detail modal).

### Experience
1. **NGO Intern — Data & Content Research** at Drazyashakti / Dryzyashakti Trust (2024–Present)
2. **BBA (Business Analytics)** at ITM Skills University (2025–2026)

### Skills
Python (90%), MySQL (88%), GANs (82%), Excel (92%), ML Foundations (80%), Executive Storytelling (85%)

---

## Tech Stack

- **Framework:** Next.js 15 (App Router) + React 19
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3 + `tailwind-merge`
- **Animations:** Framer Motion
- **Charts:** Apache ECharts
- **Command Menu:** cmdk (⌘K)
- **AI Assistant:** Vercel AI SDK + OpenAI (`gpt-4o-mini`) via `/api/chat`
- **Icons:** Lucide React

---

## How to Run

```bash
npm install
npm run dev        # local: http://localhost:3000
npm run build      # production build
npm run start      # serve production build
```

Requires `.env.local` (copy from `.env.example`):
```
GROQ_API_KEY=your_groq_api_key_here
NEXT_PUBLIC_SITE_URL=https://harshitsinha.dev
```
