# XYZ Law Firm – Commercial & Appellate Legal Practice Platform

A design and capability showcase website for a fictional top-tier Nigerian commercial law firm, built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

Developed to pitch bespoke practice software, client portals, and automated appellate e-filing tools to leading Nigerian law firms and corporate legal departments.

---

## Quick Start

### 1. Requirements
* Node.js 18+ (tested on Node v24.16.0)
* npm 9+

### 2. Installation & Running
```bash
# Install dependencies
npm install

# Start the local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

To produce a production build:
```bash
npm run build
npm run start
```

---

## Design System & Architecture

* **Primary Palette**:
  * Navy Primary: `#0B1F3A`
  * Deep Midnight Surface: `#071526`
  * Warm Ivory Background: `#FAF8F3`
  * Muted Brass / Gold Accent: `#B08D57`
  * Charcoal Body Text: `#1F2937`
* **Typography**: Playfair Display (editorial serif) for authoritative headings; Inter for clean, accessible data tables and body copy.
* **Ethics & Placeholder Integrity**:
  * No real law firm names, logos, or stock photographs of real people.
  * Initials-based abstract avatars with metallic gradients.
  * Neutral placeholder directory text: *"Recognised by leading directories (sample)"*. No fake Chambers or Legal 500 awards.
  * Verified NDPA compliance badge explicitly tagged as a demonstration prototype.

---

## Pages & Feature Map

### Public Website
1. **Home (`/`)**:
   * Hero section with confident commercial positioning tagline.
   * 7 Practice area cards with capabilities summary.
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

### Extra 1: Client Portal (`/portal`)
* **Mock Login (`/portal/login`)**: Any email and password grants entry with quick one-click preview.
* **Matter Dashboard (`/portal`)**:
  * Top disclaimer banner: *"Demo portal with sample data"*.
  * 4 core KPI summary metrics.
  * Active matters table with links to individual matter workspaces.
  * Upcoming court and tribunal hearings calendar.
  * Recent file repository with simulated encrypted download triggers.
  * Fee notes / invoice ledger (Paid vs. Pending).
  * Secure counsel communication messages panel.
* **Matter Detail Workspace (`/portal/matters/[id]`)**:
  * Procedural timeline milestones with completed/current status indicators.
  * Document repository categorized by Court Process, Regulatory Notice, and Agreements.

### Extra 2: Appellate Filing Assistant (`/portal/filing-assistant`)
Tailored to demonstrate compliance under Nigeria's appellate electronic filing rules:
1. **Matter Filing Tracker**:
   * Table of appeals (Supreme Court, Court of Appeal Lagos, Abuja, Federal High Court).
   * Live countdown to the mandatory 30-day pre-hearing upload deadline.
   * Status badges: **Ready** (emerald), **At risk** (amber, within 7 days), and **Overdue** (red).
   * Urgency sort toggle (Closest deadline first vs. furthest).
2. **File Name Generator**:
   * Inputs for Appeal Number, Description of Process, and Filing Party.
   * Automatic 3-digit Document Reference Number (`001`, `002`, `003` with increment/reset buttons).
   * Automatic sanitization replacing all slashes (`/`) with underscores (`_`).
   * Configurable separator toggle: plain hyphen (`-`) or en-dash (`–`).
   * Example: `SC/CV/2649/2026` + "Appellant's Brief" + "Appellant" + `002` becomes:
     `SC_CV_2649_2026-Appellant's Brief-Appellant-002`
   * One-click clipboard copy button with visual confirmation.
3. **Pre-Upload Compliance Checklist**:
   * 5 mandatory registry vetting items (OCR Searchable PDF, Hyperlinked TOC, Naming Protocol, Sworn Declaration, Hard Copies Bundled).
   * Interactive checkboxes with real-time percentage progress bar.
4. **Deadline & Reminder Schedule Calculator**:
   * Hearing date selector calculating exact 30-day electronic upload cutoff.
   * Multi-milestone timetable (T-45 Drafting, T-30 Mandatory Upload, T-14 Service Proof, T-7 Hard Copies).
5. **Cost Tracker**:
   * Monitors statutory late-filing exposure at ₦10,000 per day of default.
   * Displays cumulative late fees avoided through proactive compliance.
   * Explicit notice: *"Demo tool. Does not connect to any court portal."*

---

## What is Real vs. Mock

| Component / Layer | Status | Notes |
| :--- | :--- | :--- |
| **User Interface & Layouts** | **Real** | Production-quality responsive Next.js 15 App Router components, styled with Tailwind CSS. |
| **Client-Side Interactions** | **Real** | Filterable grids, live name search, date calculations, file naming generator, copy-to-clipboard, form validation, and checklist progress tracking. |
| **Law Firm Identity & Personnel** | **Mock** | "XYZ Law Firm", all lawyer names, credentials, email addresses, and phone numbers are completely fictional. |
| **Directory Rankings / Awards** | **Mock** | Neutral placeholder text only (e.g. *"Recognised by leading directories (sample)"*). No false claims of Chambers or Legal 500 rankings. |
| **Database & Backend** | **Mock** | All matter records, appeals, invoices, and articles are stored as strongly typed static structures in `src/data/`. |
| **Court Portal Integration** | **Mock** | Simulated tool demonstrating workflow automation; does not communicate with any external judicial API. |

---

## License
Created for pitch and demonstration purposes.
