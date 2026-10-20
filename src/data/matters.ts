export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  actor: string;
  status: "completed" | "current" | "upcoming";
}

export interface MatterDocument {
  id: string;
  title: string;
  category: "Court Process" | "Draft Agreement" | "Regulatory Notice" | "Opinion";
  fileName: string;
  fileSize: string;
  uploadedAt: string;
  status: "Final" | "Under Review" | "Filed";
}

export interface Matter {
  id: string;
  reference: string;
  title: string;
  client: string;
  practiceArea: string;
  leadCounsel: string;
  status: "Active" | "Hearing Scheduled" | "Under Review" | "Closed";
  courtOrTribunal?: string;
  matterType: "Litigation" | "Transaction" | "Regulatory";
  description: string;
  commencementDate: string;
  nextStepDate?: string;
  nextStepDescription?: string;
  financials: {
    billed: number;
    paid: number;
    pending: number;
  };
  timeline: TimelineEvent[];
  documents: MatterDocument[];
}

export const MATTERS: Matter[] = [
  {
    id: "mat-2026-001",
    reference: "MAT/DISP/2026/042",
    title: "Zenith Industrial Holdings v. Federal Inland Revenue Service",
    client: "Zenith Industrial Holdings Plc",
    practiceArea: "Dispute Resolution",
    leadCounsel: "Babajide Balogun, SAN",
    status: "Hearing Scheduled",
    courtOrTribunal: "Tax Appeal Tribunal / Federal High Court, Lagos Division",
    matterType: "Litigation",
    description: "Appeal challenging back-duty tax assessments on pioneer status incentive deductions and foreign exchange currency adjustments.",
    commencementDate: "2025-08-14",
    nextStepDate: "2026-05-18",
    nextStepDescription: "Adoption of Final Written Addresses before the presiding Judge.",
    financials: {
      billed: 18500000,
      paid: 14000000,
      pending: 4500000
    },
    timeline: [
      {
        id: "t1",
        date: "2025-08-14",
        title: "Notice of Appeal Filed",
        description: "Originating Notice of Appeal and Statement of Facts entered at Registry.",
        actor: "Babajide Balogun, SAN",
        status: "completed"
      },
      {
        id: "t2",
        date: "2025-11-20",
        title: "FIRS Reply Process Received",
        description: "Respondent served counter-affidavit and objection on jurisdictional grounds.",
        actor: "FIRS Legal Counsel",
        status: "completed"
      },
      {
        id: "t3",
        date: "2026-02-10",
        title: "Appellant's Reply on Points of Law",
        description: "E-filed bundle transmitted in accordance with new practice guidelines.",
        actor: "Zainab Umar (Senior Associate)",
        status: "completed"
      },
      {
        id: "t4",
        date: "2026-05-18",
        title: "Hearing & Adoption of Addresses",
        description: "Substantive hearing and formal adoption of composite arguments.",
        actor: "Federal High Court",
        status: "upcoming"
      }
    ],
    documents: [
      {
        id: "doc-1",
        title: "Appellant's Written Address on Point of Law",
        category: "Court Process",
        fileName: "FHC_L_CS_2025_912-Written_Address-Appellant-003.pdf",
        fileSize: "2.8 MB",
        uploadedAt: "2026-02-10",
        status: "Filed"
      },
      {
        id: "doc-2",
        title: "Certified Pioneer Incentive Exemption Certificate",
        category: "Regulatory Notice",
        fileName: "Exemption_Certificate_NIPC_2024.pdf",
        fileSize: "1.2 MB",
        uploadedAt: "2025-08-15",
        status: "Final"
      },
      {
        id: "doc-3",
        title: "Joint Tax Audit Reconciliation Report",
        category: "Opinion",
        fileName: "Reconciliation_Working_Paper_2025.pdf",
        fileSize: "4.5 MB",
        uploadedAt: "2025-09-02",
        status: "Final"
      }
    ]
  },
  {
    id: "mat-2026-002",
    reference: "MAT/COMM/2026/018",
    title: "Apex Logistics Pan-African Terminal Joint Venture Structuring",
    client: "Apex Logistics Global Ltd",
    practiceArea: "Corporate & Commercial",
    leadCounsel: "Oluwaseun Adeyemi, SAN",
    status: "Active",
    courtOrTribunal: "Non-contentious / NIPC & Nigerian Ports Authority",
    matterType: "Transaction",
    description: "Joint venture documentation, concession alignment, and NIPC pioneer status advisory for deep sea terminal expansion.",
    commencementDate: "2025-10-02",
    nextStepDate: "2026-04-30",
    nextStepDescription: "Execution of amended Shareholders Agreement and regulatory notifications.",
    financials: {
      billed: 32000000,
      paid: 32000000,
      pending: 0
    },
    timeline: [
      {
        id: "t1",
        date: "2025-10-02",
        title: "Mandate Inception & Term Sheet",
        description: "Execution of engagement letter and initial joint venture term sheet.",
        actor: "Oluwaseun Adeyemi, SAN",
        status: "completed"
      },
      {
        id: "t2",
        date: "2026-01-18",
        title: "Regulatory Due Diligence Complete",
        description: "Delivery of multi-agency regulatory clearance report.",
        actor: "Ifeanyi Eze (Senior Associate)",
        status: "completed"
      },
      {
        id: "t3",
        date: "2026-04-30",
        title: "Final Closing & Execution",
        description: "Final execution session with international maritime partners.",
        actor: "Apex Board & Counsel",
        status: "upcoming"
      }
    ],
    documents: [
      {
        id: "doc-4",
        title: "Draft Joint Venture & Shareholders Agreement (Rev 4)",
        category: "Draft Agreement",
        fileName: "Apex_JV_Agreement_Draft_v4.pdf",
        fileSize: "3.4 MB",
        uploadedAt: "2026-03-05",
        status: "Under Review"
      },
      {
        id: "doc-5",
        title: "NIPC Business Permit & Foreign Quota Clearance",
        category: "Regulatory Notice",
        fileName: "NIPC_Permit_Certificate_2026.pdf",
        fileSize: "980 KB",
        uploadedAt: "2026-01-22",
        status: "Final"
      }
    ]
  },
  {
    id: "mat-2026-003",
    reference: "MAT/TECH/2026/089",
    title: "KorePay Financial Services – NDPA Compliance Audit & FinTech Licensing",
    client: "KorePay Technologies Inc.",
    practiceArea: "Data Protection & Compliance",
    leadCounsel: "Chidinma Nwosu",
    status: "Under Review",
    courtOrTribunal: "Nigeria Data Protection Commission (NDPC) / CBN",
    matterType: "Regulatory",
    description: "Annual statutory NDPA audit filing, cross-border data transfer impact assessment, and payment processing licensing renewal.",
    commencementDate: "2026-01-15",
    nextStepDate: "2026-04-15",
    nextStepDescription: "Submission of Annual NDPA Compliance Return to the NDPC.",
    financials: {
      billed: 12500000,
      paid: 8000000,
      pending: 4500000
    },
    timeline: [
      {
        id: "t1",
        date: "2026-01-15",
        title: "Audit Kickoff & DPIA Scoping",
        description: "Initial data mapping questionnaire and cloud server telemetry audit.",
        actor: "Amina Bello (Partner)",
        status: "completed"
      },
      {
        id: "t2",
        date: "2026-03-01",
        title: "Remediation Report Issued",
        description: "Identified gaps in third-party API contracts and user consent notices.",
        actor: "Femi Adeniran (Associate)",
        status: "completed"
      },
      {
        id: "t3",
        date: "2026-04-15",
        title: "Statutory DPCO Audit Filing",
        description: "Final filing of audit declaration before the NDPC registrar.",
        actor: "Chidinma Nwosu (Managing Partner)",
        status: "current"
      }
    ],
    documents: [
      {
        id: "doc-6",
        title: "NDPA Annual Audit Summary Report 2026",
        category: "Opinion",
        fileName: "KorePay_NDPA_Audit_Report_2026.pdf",
        fileSize: "5.1 MB",
        uploadedAt: "2026-03-10",
        status: "Under Review"
      },
      {
        id: "doc-7",
        title: "Revised Terms of Service & Privacy Policy",
        category: "Draft Agreement",
        fileName: "KorePay_Privacy_Policy_v2.4.pdf",
        fileSize: "840 KB",
        uploadedAt: "2026-03-02",
        status: "Final"
      }
    ]
  }
];

export interface Invoice {
  id: string;
  invoiceNumber: string;
  matterId: string;
  matterTitle: string;
  amount: number;
  issueDate: string;
  dueDate: string;
  status: "Paid" | "Pending" | "Overdue";
}

export const INVOICES: Invoice[] = [
  {
    id: "inv-001",
    invoiceNumber: "INV-2026-081",
    matterId: "mat-2026-001",
    matterTitle: "Zenith Industrial Holdings v. FIRS",
    amount: 4500000,
    issueDate: "2026-02-15",
    dueDate: "2026-04-15",
    status: "Pending"
  },
  {
    id: "inv-002",
    invoiceNumber: "INV-2026-064",
    matterId: "mat-2026-002",
    matterTitle: "Apex Logistics Pan-African Terminal Joint Venture",
    amount: 16000000,
    issueDate: "2026-01-10",
    dueDate: "2026-02-10",
    status: "Paid"
  },
  {
    id: "inv-003",
    invoiceNumber: "INV-2026-092",
    matterId: "mat-2026-003",
    matterTitle: "KorePay Technologies – NDPA Audit Filing",
    amount: 4500000,
    issueDate: "2026-03-01",
    dueDate: "2026-03-31",
    status: "Pending"
  },
  {
    id: "inv-004",
    invoiceNumber: "INV-2025-341",
    matterId: "mat-2026-001",
    matterTitle: "Zenith Industrial Holdings v. FIRS (Initial Retainer)",
    amount: 14000000,
    issueDate: "2025-08-20",
    dueDate: "2025-09-20",
    status: "Paid"
  }
];

export interface SecureMessage {
  id: string;
  sender: string;
  role: string;
  avatar: string;
  date: string;
  subject: string;
  preview: string;
  unread: boolean;
}

export const SECURE_MESSAGES: SecureMessage[] = [
  {
    id: "msg-1",
    sender: "Babajide Balogun, SAN",
    role: "Lead Partner",
    avatar: "BB",
    date: "Today, 11:20 AM",
    subject: "Final Review: Tax Appeal Reply Process Bundle",
    preview: "Please review the updated schedule of adjustments before our team uploads to the electronic registry portal this afternoon.",
    unread: true
  },
  {
    id: "msg-2",
    sender: "Chidinma Nwosu",
    role: "Managing Partner",
    avatar: "CN",
    date: "Yesterday, 4:45 PM",
    subject: "Executive Summary: Q1 Legal Operations Audit",
    preview: "Attached is the concise risk register covering your compliance audit and regulatory notifications.",
    unread: false
  },
  {
    id: "msg-3",
    sender: "Ifeanyi Eze",
    role: "Senior Associate",
    avatar: "IE",
    date: "18 Mar 2026",
    subject: "Governor's Consent Stamping Update - Lagos Land Bureau",
    preview: "We have received confirmation from the Alausa registry that the file has moved to final valuation.",
    unread: false
  }
];
