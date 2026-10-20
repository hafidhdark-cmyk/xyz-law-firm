export interface CourtAppealFiling {
  id: string;
  appealNumber: string;
  court: "Supreme Court of Nigeria" | "Court of Appeal (Lagos Division)" | "Court of Appeal (Abuja Division)" | "Federal High Court";
  suitTitle: string;
  partyRepresented: "Appellant" | "Respondent" | "Cross-Appellant" | "Interested Party";
  hearingDate: string; // YYYY-MM-DD
  hearingType: "Substantive Appeal Hearing" | "Motion on Notice" | "Adoption of Briefs" | "Judgment";
  processesRequired: string[];
  documentsCount: number;
  assignedCounsel: string;
}

export const INITIAL_APPEALS: CourtAppealFiling[] = [
  {
    id: "ap-001",
    appealNumber: "SC/CV/2649/2026",
    court: "Supreme Court of Nigeria",
    suitTitle: "Oasis Continental Gas Ltd v. Transmission Company of Nig. & Ors",
    partyRepresented: "Appellant",
    hearingDate: "2026-05-12",
    hearingType: "Adoption of Briefs",
    processesRequired: ["Record of Appeal", "Appellant's Brief of Argument", "Sworn Affidavit of Compliance"],
    documentsCount: 4,
    assignedCounsel: "Babajide Balogun, SAN"
  },
  {
    id: "ap-002",
    appealNumber: "CA/L/EP/412/2026",
    court: "Court of Appeal (Lagos Division)",
    suitTitle: "First Maritime Freight Systems v. Nigerian Shippers Council",
    partyRepresented: "Respondent",
    hearingDate: "2026-04-28",
    hearingType: "Motion on Notice",
    processesRequired: ["Respondent's Notice", "Respondent's Brief of Argument", "List of Authorities"],
    documentsCount: 3,
    assignedCounsel: "Zainab Umar"
  },
  {
    id: "ap-003",
    appealNumber: "CA/ABJ/CV/108/2026",
    court: "Court of Appeal (Abuja Division)",
    suitTitle: "Zenith Industrial Holdings v. Federal Inland Revenue Service",
    partyRepresented: "Appellant",
    hearingDate: "2026-06-08",
    hearingType: "Substantive Appeal Hearing",
    processesRequired: ["Appellant's Reply Brief", "Supplemental Bundle of Authorities"],
    documentsCount: 2,
    assignedCounsel: "Babajide Balogun, SAN"
  },
  {
    id: "ap-004",
    appealNumber: "SC/CR/89/2026",
    court: "Supreme Court of Nigeria",
    suitTitle: "Federal Republic of Nigeria v. Standard Merchant Bankers Ltd",
    partyRepresented: "Respondent",
    hearingDate: "2026-04-18",
    hearingType: "Adoption of Briefs",
    processesRequired: ["Respondent's Reply on Competency", "Electronic Bundle Index"],
    documentsCount: 2,
    assignedCounsel: "Oluwaseun Adeyemi, SAN"
  },
  {
    id: "ap-005",
    appealNumber: "CA/L/CV/889/2025",
    court: "Court of Appeal (Lagos Division)",
    suitTitle: "Primecrest Estates Ltd v. Lekki Peninsula Development Authority",
    partyRepresented: "Appellant",
    hearingDate: "2026-04-05",
    hearingType: "Substantive Appeal Hearing",
    processesRequired: ["Appellant's Brief", "List of Authorities", "Sworn Declaration of Transmission"],
    documentsCount: 3,
    assignedCounsel: "Ifeanyi Eze"
  }
];

export interface ChecklistItem {
  id: string;
  label: string;
  description: string;
  mandatory: boolean;
}

export const FILING_CHECKLIST_TEMPLATE: ChecklistItem[] = [
  {
    id: "ocr_pdf",
    label: "Searchable (OCR) Text PDF",
    description: "PDF contains fully selectable text layer with searchable citations and no un-indexed scanned image pages.",
    mandatory: true
  },
  {
    id: "hyperlinked_toc",
    label: "Hyperlinked Table of Contents",
    description: "All section headers, authorities, exhibits, and record page references jump directly to target anchors.",
    mandatory: true
  },
  {
    id: "naming_protocol",
    label: "Standardised Electronic File Name",
    description: "Nomenclature strictly adheres to AppealNumber-Description-Party-Reference format with no illegal symbols.",
    mandatory: true
  },
  {
    id: "sworn_declaration",
    label: "Sworn Declaration Prepared",
    description: "Counsel affidavit verifying that electronic files correspond verbatim with physical records.",
    mandatory: true
  },
  {
    id: "hard_copies",
    label: "Physical Hard Copies Due / Bundled",
    description: "Required sets of bound hard copies stamped and ready for simultaneous physical registry deposit.",
    mandatory: true
  }
];
