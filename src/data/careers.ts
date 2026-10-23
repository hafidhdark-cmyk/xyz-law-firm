export interface JobRole {
  id: string;
  title: string;
  department: string;
  location: "Lagos (Ikoyi)" | "Abuja (Maitama)" | "Port Harcourt (GRA)";
  type: "Full-Time" | "Permanent";
  experience: string;
  summary: string;
  responsibilities: string[];
  qualifications: string[];
}

export const CAREER_ROLES: JobRole[] = [
  {
    id: "snr-assoc-energy",
    title: "Senior Associate – Energy & Project Finance",
    department: "Energy & Infrastructure",
    location: "Lagos (Ikoyi)",
    type: "Full-Time",
    experience: "6 - 8 Years PQE",
    summary: "Lead transactional advisory on renewable energy ventures, gas commercialisation projects, and PIA compliance mandates.",
    responsibilities: [
      "Draft and negotiate project agreements including PPAs, EPC contracts, and concession instruments.",
      "Manage regulatory interfacing with NUPRC, NMDPRA, and state electricity commissions.",
      "Supervise and mentor junior associates on cross-border due diligence workflows."
    ],
    qualifications: [
      "LL.B (minimum Second Class Upper) and B.L from Nigerian Law School.",
      "Proven track record in infrastructure or structured energy transactions.",
      "Master's degree (LL.M) in Energy or Commercial Law is an asset."
    ]
  },
  {
    id: "assoc-fintech-ip",
    title: "Associate – Technology, Fintech & IP",
    department: "Technology & IP",
    location: "Abuja (Maitama)",
    type: "Full-Time",
    experience: "3 - 5 Years PQE",
    summary: "Work with fintech founders, regional payment aggregators, and technology multinationals on licensing, IP protection, and privacy audits.",
    responsibilities: [
      "Prepare CBN and SEC license applications for fintech and capital market operators.",
      "Conduct trademark clearance searches and draft commercial software licensing contracts.",
      "Assist clients in formulating NDPA-compliant data governance policies."
    ],
    qualifications: [
      "Qualified to practice in Nigeria with minimum 3 years active technology law experience.",
      "Demonstrated familiarity with payment regulatory circulars and IP filings.",
      "Strong commercial writing and client management acumen."
    ]
  },
  {
    id: "practice-ops-specialist",
    title: "Practice Operations & Legal Tech Specialist",
    department: "Operations & Digital Transformation",
    location: "Lagos (Ikoyi)",
    type: "Full-Time",
    experience: "4 - 7 Years",
    summary: "Drive legal tech adoption, automated matter operations, knowledge management frameworks, and practice workflows.",
    responsibilities: [
      "Administer digital matter workspaces and manage client reporting tools.",
      "Train practice groups on modern legal tech standards and automated compliance protocols.",
      "Liaise with external tech vendors and firm partners to streamline knowledge management."
    ],
    qualifications: [
      "Degree in Law, Information Management, or related field.",
      "Experience deploying practice management or enterprise legal workflow tools.",
      "Meticulous attention to detail and proficiency in operational reporting."
    ]
  }
];
