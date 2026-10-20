export interface InsightArticle {
  slug: string;
  title: string;
  category: "Regulatory Alert" | "Corporate Advisory" | "Energy Transition" | "Litigation & Practice Directions" | "Data & Tech";
  readTime: string;
  publishedAt: string;
  author: {
    name: string;
    role: string;
  };
  summary: string;
  content: string[];
}

export const INSIGHTS_ARTICLES: InsightArticle[] = [
  {
    slug: "nigerian-appellate-e-filing-practice-directions-compliance",
    title: "Navigating the New Appellate E-Filing Practice Directions: Practical Compliance for In-House Counsel",
    category: "Litigation & Practice Directions",
    readTime: "6 min read",
    publishedAt: "2026-03-12",
    author: {
      name: "Babajide Balogun, SAN",
      role: "Partner, Dispute Resolution"
    },
    summary: "An overview of electronic record transmission, mandatory 30-day upload windows, and the strict naming protocol required across appellate registries in Nigeria.",
    content: [
      "The introduction of modern electronic filing guidelines across Nigerian appellate jurisdictions has fundamentally reshaped litigation workflows. Counsel and corporate legal departments must now comply with strict technical specifications, ranging from mandatory OCR text recognition to standardized file nomenclature.",
      "Crucially, the 30-day pre-hearing upload deadline places significant procedural responsibility on the appellant. Failure to lodge electronic bundles within the designated window triggers statutory default penalties under prevailing registry rules, typically escalating at ₦10,000 per day of default.",
      "To prevent process rejections at registry vetting counters, legal teams should implement automated compliance checklists verifying hyperlinked tables of contents, standardized party reference numbers, and sworn electronic affidavits before filing."
    ]
  },
  {
    slug: "ndpa-compliance-audit-obligations-for-financial-institutions",
    title: "NDPA Statutory Compliance: Essential Audit Obligations for Financial Institutions",
    category: "Data & Tech",
    readTime: "5 min read",
    publishedAt: "2026-02-28",
    author: {
      name: "Chidinma Nwosu",
      role: "Managing Partner"
    },
    summary: "Practical guidance for commercial banks, payment gateways, and asset managers conducting their annual Nigeria Data Protection Act (NDPA) privacy audits.",
    content: [
      "The Nigeria Data Protection Commission (NDPC) has heightened enforcement scrutiny regarding cross-border financial data flows and the designation of Data Protection Compliance Organisations (DPCOs).",
      "Financial institutions handling high volumes of sensitive consumer transactions must substantiate their legal basis for automated processing and maintain verifiable Data Protection Impact Assessments (DPIAs) for new fintech integrations.",
      "Our practice recommends an annual review of third-party processor agreements to ensure strict contractual indemnity against data breach disclosures."
    ]
  },
  {
    slug: "electricity-act-state-power-markets-regulatory-shifts",
    title: "Devolved Power Markets: Legal Considerations for Independent Power Producers",
    category: "Energy Transition",
    readTime: "7 min read",
    publishedAt: "2026-01-20",
    author: {
      name: "Kelechi Okafor",
      role: "Partner, Energy & Infrastructure"
    },
    summary: "How state-level electricity regulatory commissions (SERCs) are establishing sub-national power markets following constitutional devolution.",
    content: [
      "The ongoing transition from the central Nigerian Electricity Regulatory Commission (NERC) regime toward state electricity markets presents both unprecedented opportunity and regulatory duality for private developers.",
      "Pioneer projects must scrutinize grid interconnection codes, state licensing protocols, and the sanctity of existing off-grid power purchase agreements (PPAs).",
      "Developers structuring embedded generation clusters must ensure clear demarcation between state distribution concessions and legacy transmission rights."
    ]
  },
  {
    slug: "cama-2020-beneficial-ownership-transparency",
    title: "Persons with Significant Control: Beneficial Ownership Reporting Under CAMA 2020",
    category: "Corporate Advisory",
    readTime: "4 min read",
    publishedAt: "2025-11-14",
    author: {
      name: "Oluwaseun Adeyemi, SAN",
      role: "Senior Partner, Corporate & Commercial"
    },
    summary: "Complying with the Corporate Affairs Commission (CAC) electronic register of Persons with Significant Control (PSC) to maintain corporate good standing.",
    content: [
      "Transparency requirements mandated under the Companies and Allied Matters Act (CAMA 2020) and subsequent CAC guidelines require Nigerian companies to actively identify individuals exercising ultimate effective control.",
      "Failure to disclose or timely update the PSC register carries statutory administrative fines and risks freeze orders on corporate registry operations.",
      "Multinational groups operating multi-tiered holding structures in Nigeria are advised to conduct regular shareholder register reconciliations."
    ]
  }
];
