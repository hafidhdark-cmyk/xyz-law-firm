export interface PracticeArea {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  keyCapabilities: string[];
  sampleMatters: string[];
  leadPartner: string;
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "corp-comm",
    slug: "corporate-commercial",
    title: "Corporate & Commercial",
    shortDescription: "Strategic counsel on complex cross-border M&A, joint ventures, corporate reorganisations, and governance for market leaders.",
    overview: "Our Corporate & Commercial practice counsels blue-chip conglomerates, multinational entrants, and institutional investors navigating Nigeria's dynamic regulatory terrain. We deliver end-to-end guidance from entity structuring and regulatory compliance through to high-value divestments.",
    keyCapabilities: [
      "Mergers, Acquisitions & Takeovers",
      "Corporate Governance & Board Advisory",
      "Joint Ventures & Strategic Alliances",
      "Commercial Contracts & Supply Chain Structuring",
      "Foreign Direct Investment & NIPC Approvals"
    ],
    sampleMatters: [
      "Advised a pan-African FMCG group on a multi-jurisdictional reorganisation spanning 4 West African subsidiaries.",
      "Structured a landmark joint venture between an indigenous logistics company and a global port operator."
    ],
    leadPartner: "Oluwaseun Adeyemi, SAN"
  },
  {
    id: "bank-fin",
    slug: "banking-finance",
    title: "Banking & Finance",
    shortDescription: "Advising domestic and international lenders, DFIs, and corporate borrowers on syndicated loans, project finance, and debt restructuring.",
    overview: "We advise top-tier commercial banks, development finance institutions (DFIs), and leading corporate borrowers on complex debt facilities, asset-backed securitisations, derivatives, and regulatory compliance under Central Bank of Nigeria (CBN) directives.",
    keyCapabilities: [
      "Syndicated Lending & Structured Debt",
      "Project & Infrastructure Finance",
      "Debt Restructuring & Workouts",
      "Derivatives & FX Regulation Advisory",
      "Capital Markets & Debt Issuances"
    ],
    sampleMatters: [
      "Acted as transaction counsel on a US$180M syndicated receivables-backed term facility for an industrial manufacturer.",
      "Advised an international DFI on local currency credit enhancement mechanisms for clean energy projects."
    ],
    leadPartner: "Chidinma Nwosu, Partner"
  },
  {
    id: "disp-res",
    slug: "dispute-resolution",
    title: "Dispute Resolution",
    shortDescription: "High-stakes commercial litigation, appellate advocacy before the Supreme Court, and domestic and international arbitration.",
    overview: "Our litigators and arbitration specialists defend complex commercial positions across the State High Courts, Federal High Court, Court of Appeal, and Supreme Court of Nigeria. We are celebrated for pragmatic risk mitigation and persuasive courtroom advocacy.",
    keyCapabilities: [
      "Appellate Advocacy & Constitutional Litigation",
      "Commercial & Shareholder Disputes",
      "Domestic & International Arbitration (ICC, LCIA, NICArb)",
      "Tax & Regulatory Disputes",
      "Asset Tracing, Freezing & Enforcement"
    ],
    sampleMatters: [
      "Successfully defended an international telecommunications operator in an appellate dispute over interconnect settlement tariffs.",
      "Represented a sovereign contractor in LCIA arbitration involving breach of construction concession terms."
    ],
    leadPartner: "Babajide Balogun, SAN"
  },
  {
    id: "energy-infra",
    slug: "energy-infrastructure",
    title: "Energy & Infrastructure",
    shortDescription: "Navigating PIA transitions, upstream divestments, midstream gas commercialisation, renewables, and public concessions.",
    overview: "Positioned at the heart of Nigeria's natural resources and infrastructure evolution, we guide international oil companies, indigenous producers, IPP developers, and concessionaires under the Petroleum Industry Act (PIA) and Electricity Act 2023.",
    keyCapabilities: [
      "Upstream & Deepwater Asset Acquisitions",
      "Gas Sales & Transportation Agreements (GSPA/GTA)",
      "Renewable Energy & Off-grid Power Structuring",
      "Public-Private Partnerships (PPP) & Infrastructure Concessions",
      "NUPRC & NMDPRA Regulatory Licensing"
    ],
    sampleMatters: [
      "Structured the project agreements and tariff structuring for a 50MW off-grid solar industrial cluster in Ogun State.",
      "Advised an indigenous exploration syndicate on compliance and host community trust establishment under the PIA."
    ],
    leadPartner: "Kelechi Okafor, Partner"
  },
  {
    id: "tech-ip",
    slug: "technology-ip",
    title: "Technology & IP",
    shortDescription: "Protecting intangible assets, securing fintech licenses, and guiding venture funding and tech commercialisation.",
    overview: "XYZ Law Firm represents Africa's most ambitious tech scaleups and multinational technology giants. We blend deep technical fluency with practical legal strategy to navigate licensing, data rights, and disruptive software business models.",
    keyCapabilities: [
      "Fintech Licensing (Payment Solutions, Microfinance, PSP)",
      "Patent, Trademark & Copyright Portfolio Strategy",
      "Venture Capital Financings & Cross-border Flips",
      "Software Licensing & Tech Vendor Contracts",
      "AI Governance & Digital Asset Regulatory Scoping"
    ],
    sampleMatters: [
      "Assisted a leading cross-border payment gateway in obtaining Payment Terminal Service Provider (PTSP) licensing.",
      "Designed regional trademark and proprietary software licensing frameworks for an enterprise SaaS vendor."
    ],
    leadPartner: "Amina Bello, Partner"
  },
  {
    id: "data-compliance",
    slug: "data-protection-compliance",
    title: "Data Protection & Compliance",
    shortDescription: "Holistic Nigeria Data Protection Act (NDPA) audits, cross-border transfer compliance, and anti-corruption advisory.",
    overview: "As a certified Data Protection Compliance Organisation (DPCO) compliant practice, we help corporations embed robust privacy frameworks, respond to breach incidents, conduct Data Protection Impact Assessments (DPIAs), and comply with NDPC audits.",
    keyCapabilities: [
      "Nigeria Data Protection Act (NDPA) Audits & Filings",
      "Cross-Border Data Transfer Risk Assessments",
      "Data Breach Incident Response & Regulator Liaison",
      "Anti-Money Laundering (AML) & Corporate Anti-Bribery Compliance",
      "Privacy by Design Software Product Reviews"
    ],
    sampleMatters: [
      "Conducted statutory annual NDPA audits and compliance remediation for a top-5 commercial banking group.",
      "Managed incident disclosure and mitigation strategy following a major logistics platform data vulnerability."
    ],
    leadPartner: "Chidinma Nwosu, Partner"
  },
  {
    id: "real-estate",
    slug: "real-estate",
    title: "Real Estate",
    shortDescription: "Comprehensive advisory on commercial real estate acquisitions, title perfection, land use zoning, and major construction projects.",
    overview: "We advise institutional property funds, private equity developers, and industrial operators on acquisition, leasing, perfection of Governor's Consent, construction contracts (FIDIC), and REIT investment structures across Nigeria's major urban centers.",
    keyCapabilities: [
      "Commercial Land Acquisitions & Title Perfection",
      "Governor's Consent & Land Registry Processing",
      "FIDIC & Turnkey Construction Contracting",
      "Commercial Leasing & Mixed-Use Developments",
      "Real Estate Investment Trusts (REITs) Advisory"
    ],
    sampleMatters: [
      "Advised an international pension fund on the acquisition and long-term leaseback of prime commercial towers in Victoria Island.",
      "Structured joint venture development documentation for a 200-hectare master-planned eco-district in Lekki."
    ],
    leadPartner: "Ifeanyi Eze, Senior Associate"
  }
];
