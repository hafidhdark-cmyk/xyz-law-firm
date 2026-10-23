# XYZ Law Firm – Commercial & Appellate Legal Practice Platform

A premier design and capability showcase website for a fictional top-tier Nigerian commercial law firm, built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## Design System & Architecture

* **Primary Palette**:
  * Navy Primary: `#0B1F3A`
  * Deep Obsidian Surface: `#050E1A`
  * Warm Ivory Background: `#FAF8F3`
  * Muted Brass / Gold Accent: `#B08D57` (hover: `#9A7846`)
  * Charcoal Body Text: `#1F2937`
* **Typography**: Playfair Display (editorial serif) for authoritative headings; Inter for clean, accessible UI and body copy.
* **Ethics & Placeholder Integrity**:
  * No real law firm names, logos, or stock photographs of real people.
  * Initials-based abstract avatars with metallic gradients.
  * Neutral placeholder directory text: *"Recognised by leading directories (sample)"*. No fake Chambers or Legal 500 awards.
  * Verified NDPA compliance badge explicitly tagged as a demonstration prototype.

---

## Pages & Structure

1. **Home (`/`)**:
   * Hero section with confident commercial positioning tagline.
   * 7 Practice area cards with capabilities summary.
   * "Why XYZ Law Firm" institutional credibility pillars.
   * "Latest Insights" curated preview.
   * Multi-city office presence (Lagos, Abuja, Port Harcourt).
   * Calm, premium call-to-action for confidential counsel consultations.
2. **Practice Areas (`/practice-areas`)**:
   * Comprehensive breakdowns of 7 core disciplines:
     * Corporate & Commercial
     * Banking & Finance
     * Dispute Resolution
     * Energy & Infrastructure
     * Technology & IP
     * Data Protection & Compliance
     * Real Estate
   * Sub-specialties, representative mock matters, and practice leader contacts.
3. **Our People (`/people`)**:
   * Filterable grid by practice discipline and position (Senior Partner, Managing Partner, Partner, Senior Associate, Associate).
   * Live search by name and bio keywords.
   * Initials-based avatars with detail modal view.
4. **Insights (`/insights` & `/insights/[slug]`)**:
   * Categorized legal commentaries (NDPA, Electricity Act, CAMA 2020, Appellate Practice Directions).
   * Filter tabs, estimated read times, and editorial article layout.
5. **Careers (`/careers`)**:
   * Firm culture statement and mentorship pillars.
   * 3 open positions with expandable job specs and interactive mock application feedback.
6. **Contact (`/contact`)**:
   * Office address cards for Ikoyi (Lagos), Maitama (Abuja), and GRA Phase II (Port Harcourt).
   * Interactive contact form with comprehensive front-end validation and error messaging.
7. **Footer**:
   * Privacy policy, cookie preferences, legal disclaimer.
   * Styled "NDPA Compliant DPCO Framework" badge marked as **Demo Verified**.

---

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Or build and run production server
npm run build
npm run start
```

---

## What is Real vs. Mock

| Component / Layer | Status | Notes |
| :--- | :--- | :--- |
| **User Interface & Layouts** | **Real** | Production-quality responsive Next.js 15 App Router components, styled with Tailwind CSS. |
| **Client-Side Interactions** | **Real** | Filterable grids, live name search, copy interactions, and form validation. |
| **Law Firm Identity & Personnel** | **Mock** | "XYZ Law Firm", all lawyer names, credentials, email addresses, and phone numbers are completely fictional. |
| **Directory Rankings / Awards** | **Mock** | Neutral placeholder text only (e.g. *"Recognised by leading directories (sample)"*). No false claims of Chambers or Legal 500 rankings. |

---

## License
Created for demonstration and client pitch purposes.
