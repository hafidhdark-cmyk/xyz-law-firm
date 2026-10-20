export interface Lawyer {
  id: string;
  name: string;
  initials: string;
  role: "Senior Partner" | "Managing Partner" | "Partner" | "Senior Associate" | "Associate";
  practiceAreas: string[];
  office: "Lagos" | "Abuja" | "Port Harcourt";
  email: string;
  admissionYear: number;
  bio: string;
  education: string[];
}

export const LAWYERS: Lawyer[] = [
  {
    id: "oluwaseun-adeyemi",
    name: "Oluwaseun Adeyemi, SAN",
    initials: "OA",
    role: "Senior Partner",
    practiceAreas: ["Corporate & Commercial", "Banking & Finance"],
    office: "Lagos",
    email: "o.adeyemi@xyzlawfirm-demo.ng",
    admissionYear: 1996,
    bio: "Senior Advocate of Nigeria with three decades of experience leading complex corporate reorganisations, inbound foreign investments, and cross-border commercial transactions.",
    education: [
      "LL.B (Hons), University of Lagos",
      "B.L, Nigerian Law School",
      "LL.M (Corporate Law), London School of Economics"
    ]
  },
  {
    id: "chidinma-nwosu",
    name: "Chidinma Nwosu",
    initials: "CN",
    role: "Managing Partner",
    practiceAreas: ["Banking & Finance", "Data Protection & Compliance"],
    office: "Lagos",
    email: "c.nwosu@xyzlawfirm-demo.ng",
    admissionYear: 2004,
    bio: "Specialises in syndicated project finance, debt capital markets, and data privacy governance. Leads the firm's strategic growth and digital transformation initiatives.",
    education: [
      "LL.B, University of Nigeria, Nsukka",
      "B.L, Nigerian Law School",
      "LL.M (Banking & Finance), King's College London"
    ]
  },
  {
    id: "babajide-balogun",
    name: "Babajide Balogun, SAN",
    initials: "BB",
    role: "Partner",
    practiceAreas: ["Dispute Resolution"],
    office: "Abuja",
    email: "b.balogun@xyzlawfirm-demo.ng",
    admissionYear: 2001,
    bio: "Accomplished litigator and arbitrator with regular appearances before the Supreme Court and Court of Appeal in landmark constitutional and commercial proceedings.",
    education: [
      "LL.B, Obafemi Awolowo University",
      "B.L, Nigerian Law School",
      "Fellow, Chartered Institute of Arbitrators (FCIArb)"
    ]
  },
  {
    id: "kelechi-okafor",
    name: "Kelechi Okafor",
    initials: "KO",
    role: "Partner",
    practiceAreas: ["Energy & Infrastructure"],
    office: "Port Harcourt",
    email: "k.okafor@xyzlawfirm-demo.ng",
    admissionYear: 2007,
    bio: "Advises upstream exploration syndicates, downstream gas distributors, and off-grid renewable operators on PIA compliance and project development.",
    education: [
      "LL.B, University of Ibadan",
      "B.L, Nigerian Law School",
      "MSc (Energy Law & Policy), University of Dundee"
    ]
  },
  {
    id: "amina-bello",
    name: "Amina Bello",
    initials: "AB",
    role: "Partner",
    practiceAreas: ["Technology & IP", "Data Protection & Compliance"],
    office: "Abuja",
    email: "a.bello@xyzlawfirm-demo.ng",
    admissionYear: 2011,
    bio: "Recognised practitioner in fintech licensing, intellectual property portfolio protection, and technology regulatory frameworks across West Africa.",
    education: [
      "LL.B, Ahmadu Bello University, Zaria",
      "B.L, Nigerian Law School",
      "LL.M (Information Technology Law), University of Edinburgh"
    ]
  },
  {
    id: "ifeanyi-eze",
    name: "Ifeanyi Eze",
    initials: "IE",
    role: "Senior Associate",
    practiceAreas: ["Real Estate", "Corporate & Commercial"],
    office: "Lagos",
    email: "i.eze@xyzlawfirm-demo.ng",
    admissionYear: 2015,
    bio: "Focuses on commercial real estate acquisitions, title investigations, land registry perfection, and turnkey construction contracting.",
    education: [
      "LL.B, University of Benin",
      "B.L, Nigerian Law School"
    ]
  },
  {
    id: "zainab-umar",
    name: "Zainab Umar",
    initials: "ZU",
    role: "Senior Associate",
    practiceAreas: ["Dispute Resolution", "Energy & Infrastructure"],
    office: "Abuja",
    email: "z.umar@xyzlawfirm-demo.ng",
    admissionYear: 2016,
    bio: "Commercial litigation specialist with extensive experience in commercial debt recovery, oilfield arbitration, and regulatory enforcement.",
    education: [
      "LL.B, Bayero University, Kano",
      "B.L, Nigerian Law School",
      "LL.M, Queen Mary University of London"
    ]
  },
  {
    id: "femi-adeniran",
    name: "Femi Adeniran",
    initials: "FA",
    role: "Associate",
    practiceAreas: ["Technology & IP", "Corporate & Commercial"],
    office: "Lagos",
    email: "f.adeniran@xyzlawfirm-demo.ng",
    admissionYear: 2019,
    bio: "Advises high-growth startups on venture financings, brand protection, software commercialisation, and general corporate advisory.",
    education: [
      "LL.B, University of Lagos",
      "B.L, Nigerian Law School"
    ]
  },
  {
    id: "tarila-briggs",
    name: "Tarila Briggs",
    initials: "TB",
    role: "Associate",
    practiceAreas: ["Energy & Infrastructure", "Dispute Resolution"],
    office: "Port Harcourt",
    email: "t.briggs@xyzlawfirm-demo.ng",
    admissionYear: 2021,
    bio: "Supports the energy practice on host community development trust documentation, environmental disputes, and maritime logistics contracts.",
    education: [
      "LL.B, Rivers State University",
      "B.L, Nigerian Law School"
    ]
  }
];
