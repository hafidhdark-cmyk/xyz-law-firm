"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { INITIAL_APPEALS, CourtAppealFiling, FILING_CHECKLIST_TEMPLATE } from "@/data/filings";
import { formatCurrencyNGN, formatDate } from "@/lib/utils";
import {
  FileCheck2,
  Calendar,
  Clock,
  Copy,
  Check,
  AlertTriangle,
  AlertCircle,
  CheckCircle2,
  DollarSign,
  ArrowRight,
  Sparkles,
  Settings2,
  RefreshCw,
  Info,
  Scale,
  ShieldCheck,
} from "lucide-react";

export default function FilingAssistantPage() {
  // Current anchor date for Nigerian Court calendar demo: 2026-03-20
  const BASE_DATE = new Date("2026-03-20T00:00:00Z");

  // -------------------------------------------------------------
  // a) MATTER FILING TRACKER STATE
  // -------------------------------------------------------------
  const [appeals, setAppeals] = useState<CourtAppealFiling[]>(INITIAL_APPEALS);
  const [sortOrder, setSortOrder] = useState<"urgent-first" | "urgent-last">("urgent-first");

  // Calculate upload deadline (30 days before hearing date) & days remaining
  const trackedAppeals = useMemo(() => {
    return appeals.map((appeal) => {
      const hearing = new Date(`${appeal.hearingDate}T00:00:00Z`);
      const uploadDeadline = new Date(hearing.getTime() - 30 * 24 * 60 * 60 * 1000);
      const diffMs = uploadDeadline.getTime() - BASE_DATE.getTime();
      const daysRemaining = Math.ceil(diffMs / (24 * 60 * 60 * 1000));

      let status: "Ready" | "At risk" | "Overdue";
      if (daysRemaining > 7) {
        status = "Ready";
      } else if (daysRemaining >= 0) {
        status = "At risk";
      } else {
        status = "Overdue";
      }

      // Late fee if overdue: ₦10,000 per day of default
      const daysOverdue = daysRemaining < 0 ? Math.abs(daysRemaining) : 0;
      const lateFee = daysOverdue * 10000;

      return {
        ...appeal,
        hearingDateObj: hearing,
        uploadDeadline,
        daysRemaining,
        daysOverdue,
        lateFee,
        status,
      };
    }).sort((a, b) => {
      if (sortOrder === "urgent-first") {
        return a.daysRemaining - b.daysRemaining;
      }
      return b.daysRemaining - a.daysRemaining;
    });
  }, [appeals, sortOrder]);

  // -------------------------------------------------------------
  // b) FILE NAME GENERATOR STATE
  // -------------------------------------------------------------
  const [genAppealNumber, setGenAppealNumber] = useState("SC/CV/2649/2026");
  const [genDescription, setGenDescription] = useState("Appellant's Brief");
  const [genParty, setGenParty] = useState("Appellant");
  const [docRefNumber, setDocRefNumber] = useState(2); // starts at 001, demo set to 002
  const [useEnDash, setUseEnDash] = useState(false);
  const [copied, setCopied] = useState(false);

  // Sanitise appeal number: replace "/" with "_"
  const sanitizedAppealNum = genAppealNumber.trim().replace(/\//g, "_");
  const formattedRef = String(docRefNumber).padStart(3, "0");
  const separator = useEnDash ? "–" : "-";
  const generatedFileName = `${sanitizedAppealNum}${separator}${genDescription.trim()}${separator}${genParty.trim()}${separator}${formattedRef}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedFileName);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // -------------------------------------------------------------
  // c) PRE-UPLOAD CHECKLIST STATE
  // -------------------------------------------------------------
  const [checklist, setChecklist] = useState<Record<string, boolean>>({
    ocr_pdf: true,
    hyperlinked_toc: true,
    naming_protocol: true,
    sworn_declaration: false,
    hard_copies: false,
  });

  const toggleChecklist = (id: string) => {
    setChecklist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = Object.values(checklist).filter(Boolean).length;
  const checklistPercentage = Math.round((completedCount / FILING_CHECKLIST_TEMPLATE.length) * 100);

  // -------------------------------------------------------------
  // d) DEADLINE CALCULATOR STATE
  // -------------------------------------------------------------
  const [calcHearingDate, setCalcHearingDate] = useState("2026-05-18");

  const calcDeadlineInfo = useMemo(() => {
    if (!calcHearingDate) return null;
    const hearing = new Date(`${calcHearingDate}T00:00:00Z`);
    const deadline = new Date(hearing.getTime() - 30 * 24 * 60 * 60 * 1000);
    const diffMs = deadline.getTime() - BASE_DATE.getTime();
    const daysLeft = Math.ceil(diffMs / (24 * 60 * 60 * 1000));

    // Reminders schedule
    const t45 = new Date(hearing.getTime() - 45 * 24 * 60 * 60 * 1000);
    const t30 = deadline;
    const t14 = new Date(hearing.getTime() - 14 * 24 * 60 * 60 * 1000);
    const t7 = new Date(hearing.getTime() - 7 * 24 * 60 * 60 * 1000);

    return {
      hearing,
      deadline,
      daysLeft,
      schedule: [
        { label: "T-45 Days (Drafting & Record Review)", date: t45, note: "Settle brief arguments & compile authority citations" },
        { label: "T-30 Days (Mandatory E-Upload Cutoff)", date: t30, note: "Strict deadline to upload OCR PDF to court portal", critical: true },
        { label: "T-14 Days (Registry Proof of Service)", date: t14, note: "Confirm e-transmission certificate delivered to adversaries" },
        { label: "T-7 Days (Hard Copy Bundles Deposit)", date: t7, note: "Lodge stamped hard copies at appellate registry" },
      ],
    };
  }, [calcHearingDate]);

  // -------------------------------------------------------------
  // e) COST TRACKER SUMMARY
  // -------------------------------------------------------------
  const totalOverdueFees = trackedAppeals.reduce((sum, a) => sum + a.lateFee, 0);
  const potentialFeesAvoided = trackedAppeals
    .filter((a) => a.status === "Ready")
    .length * 300000; // Estimated 30-day default penalty avoided per compliant appeal

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-10">
      {/* Tool Header & Demo Notice */}
      <div className="bg-navy-950 text-white rounded-sm p-6 sm:p-8 border border-gold-500/30 relative overflow-hidden space-y-4">
        <div className="absolute right-0 top-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative z-10">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Nigerian Practice Directions 2026 Engine</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Appellate Electronic Filing Assistant
            </h1>
            <p className="text-xs sm:text-sm text-ivory-300 max-w-2xl">
              Automated compliance tooling for Nigerian appellate registries (Supreme Court, Court of Appeal, and Federal High Court) ensuring zero process rejections and default penalty mitigation.
            </p>
          </div>

          <div className="p-3 bg-navy-900 border border-gold-400/40 rounded text-right shrink-0">
            <p className="text-[10px] text-ivory-400 uppercase tracking-widest font-semibold">Active Court Session</p>
            <p className="text-xs font-mono font-bold text-gold-300">2025/2026 Legal Term</p>
            <p className="text-[10px] text-emerald-400 font-medium">30-Day Upload Window Enforced</p>
          </div>
        </div>

        {/* Explicit Required Notice */}
        <div className="p-3 bg-amber-500/20 border border-amber-500/40 rounded-sm text-xs text-amber-200 flex items-center gap-2">
          <Info className="w-4 h-4 text-amber-300 shrink-0" />
          <span>
            <strong>Demo Tool Notice:</strong> This interactive software capability showcase operates with simulated mock data and does not connect to any official court portal or government API.
          </span>
        </div>
      </div>

      {/* ========================================================= */}
      {/* a) MATTER FILING TRACKER & e) COST TRACKER CARDS */}
      {/* ========================================================= */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="font-serif text-xl sm:text-2xl text-navy-950 font-bold flex items-center gap-2">
              <Scale className="w-5 h-5 text-gold-600" />
              <span>Matter Filing Tracker</span>
            </h2>
            <p className="text-xs text-charcoal-500">
              Monitors the mandatory 30-day pre-hearing electronic upload window for appellate briefs.
            </p>
          </div>

          {/* Sort Controls */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-charcoal-500 font-medium">Sort by Urgency:</span>
            <button
              onClick={() => setSortOrder(sortOrder === "urgent-first" ? "urgent-last" : "urgent-first")}
              className="px-3 py-1.5 bg-white border border-slate-300 rounded-sm font-semibold text-navy-900 hover:border-navy-900 transition-colors flex items-center gap-1.5"
            >
              <RefreshCw className="w-3 h-3 text-gold-600" />
              <span>{sortOrder === "urgent-first" ? "Most Urgent (Closest Deadline)" : "Furthest Deadline"}</span>
            </button>
          </div>
        </div>

        {/* e) Cost Tracker Cards Top Ribbon */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-sm border border-slate-200 shadow-xs flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-charcoal-500">
                Statutory Default Rate
              </span>
              <p className="font-serif text-xl font-bold text-navy-950">
                ₦10,000 / day
              </p>
              <p className="text-[10px] text-charcoal-400">Fixed penalty per day of filing default</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-700">
              <DollarSign className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-emerald-50/60 p-5 rounded-sm border border-emerald-200 shadow-xs flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-800">
                Late Penalties Avoided
              </span>
              <p className="font-serif text-xl font-bold text-emerald-950">
                {formatCurrencyNGN(potentialFeesAvoided)}
              </p>
              <p className="text-[10px] text-emerald-700">
                Across {trackedAppeals.filter((a) => a.status === "Ready").length} on-schedule filings
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-red-50/60 p-5 rounded-sm border border-red-200 shadow-xs flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-red-800">
                Current Exposure Incurred
              </span>
              <p className="font-serif text-xl font-bold text-red-950">
                {formatCurrencyNGN(totalOverdueFees)}
              </p>
              <p className="text-[10px] text-red-700">
                {totalOverdueFees > 0 ? "Requires urgent application for extension of time" : "Zero defaults currently"}
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-red-100 text-red-800 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Tracker Table */}
        <div className="bg-white rounded-sm border border-slate-200 shadow-xs overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-navy-950 font-serif border-b border-slate-200 text-xs">
              <tr>
                <th className="py-3 px-4 font-bold">Appeal Number &amp; Suit</th>
                <th className="py-3 px-4 font-bold">Court / Division</th>
                <th className="py-3 px-4 font-bold">Hearing Date</th>
                <th className="py-3 px-4 font-bold">30-Day Upload Cutoff</th>
                <th className="py-3 px-4 font-bold">Days Remaining</th>
                <th className="py-3 px-4 font-bold">Status Badge</th>
                <th className="py-3 px-4 font-bold text-right">Potential Fee</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {trackedAppeals.map((appeal) => (
                <tr
                  key={appeal.id}
                  className={`hover:bg-slate-50/80 transition-colors ${
                    appeal.status === "Overdue"
                      ? "bg-red-50/20"
                      : appeal.status === "At risk"
                      ? "bg-amber-50/20"
                      : ""
                  }`}
                >
                  <td className="py-3.5 px-4 space-y-0.5">
                    <p className="font-mono font-bold text-navy-900">{appeal.appealNumber}</p>
                    <p className="text-charcoal-600 line-clamp-1 max-w-xs">{appeal.suitTitle}</p>
                    <span className="text-[10px] text-charcoal-400 font-medium">
                      Party: {appeal.partyRepresented} • Counsel: {appeal.assignedCounsel}
                    </span>
                  </td>

                  <td className="py-3.5 px-4 text-charcoal-700">
                    <p className="font-medium text-navy-950">{appeal.court}</p>
                    <span className="text-[11px] text-charcoal-500">{appeal.hearingType}</span>
                  </td>

                  <td className="py-3.5 px-4 font-medium text-navy-950">
                    {formatDate(appeal.hearingDate)}
                  </td>

                  <td className="py-3.5 px-4">
                    <span className="font-mono font-medium text-charcoal-800">
                      {formatDate(appeal.uploadDeadline.toISOString().split("T")[0])}
                    </span>
                  </td>

                  <td className="py-3.5 px-4">
                    {appeal.daysRemaining > 0 ? (
                      <span className="font-bold text-navy-950">
                        {appeal.daysRemaining} days left
                      </span>
                    ) : appeal.daysRemaining === 0 ? (
                      <span className="font-bold text-amber-700">Due today!</span>
                    ) : (
                      <span className="font-bold text-red-600">
                        {Math.abs(appeal.daysRemaining)} days overdue
                      </span>
                    )}
                  </td>

                  <td className="py-3.5 px-4">
                    {appeal.status === "Ready" && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        Ready
                      </span>
                    )}
                    {appeal.status === "At risk" && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-amber-100 text-amber-800 text-[11px] font-bold animate-pulse">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                        At risk
                      </span>
                    )}
                    {appeal.status === "Overdue" && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-red-100 text-red-800 text-[11px] font-bold">
                        <AlertCircle className="w-3.5 h-3.5 text-red-600" />
                        Overdue
                      </span>
                    )}
                  </td>

                  <td className="py-3.5 px-4 text-right">
                    {appeal.lateFee > 0 ? (
                      <span className="font-bold text-red-600">
                        {formatCurrencyNGN(appeal.lateFee)}
                      </span>
                    ) : (
                      <span className="text-emerald-700 font-medium">₦0 (Compliant)</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2-COLUMN SECTION: b) FILE NAME GENERATOR & c) CHECKLIST */}
      {/* ========================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* b) File Name Generator (6 cols) */}
        <div className="lg:col-span-6 bg-white rounded-sm border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="space-y-1 pb-3 border-b border-slate-200">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-700">
              Nomenclature Standardiser
            </span>
            <h3 className="font-serif text-xl text-navy-950 font-bold">
              Appellate File Name Generator
            </h3>
            <p className="text-xs text-charcoal-500">
              Converts process metadata into official registry format. Replaces slashes (&quot;/&quot;) with underscores (&quot;_&quot;) and sequences reference numbers.
            </p>
          </div>

          <div className="space-y-4">
            {/* Appeal Number */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-navy-950">
                Appeal Number
              </label>
              <input
                type="text"
                value={genAppealNumber}
                onChange={(e) => setGenAppealNumber(e.target.value)}
                placeholder="e.g. SC/CV/2649/2026 or CA/L/412/2026"
                className="w-full px-3 py-2 text-xs font-mono bg-slate-50 border border-slate-300 rounded-sm focus:border-navy-900 focus:bg-white text-navy-950"
              />
              <p className="text-[10px] text-charcoal-400">
                Sanitised format: <strong>{sanitizedAppealNum || "(empty)"}</strong>
              </p>
            </div>

            {/* Description of Process */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-navy-950">
                Description of Process
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={genDescription}
                  onChange={(e) => setGenDescription(e.target.value)}
                  placeholder="e.g. Appellant's Brief or Record of Appeal"
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-sm focus:border-navy-900 focus:bg-white text-navy-950"
                />
                <select
                  onChange={(e) => {
                    if (e.target.value) setGenDescription(e.target.value);
                  }}
                  className="px-2 py-2 text-xs bg-slate-50 border border-slate-300 rounded-sm text-charcoal-700"
                >
                  <option value="">Quick Presets</option>
                  <option value="Appellant's Brief">Appellant&apos;s Brief</option>
                  <option value="Respondent's Brief">Respondent&apos;s Brief</option>
                  <option value="Reply Brief">Reply Brief</option>
                  <option value="Record of Appeal">Record of Appeal</option>
                  <option value="Notice of Appeal">Notice of Appeal</option>
                  <option value="List of Authorities">List of Authorities</option>
                </select>
              </div>
            </div>

            {/* Filing Party */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-navy-950">
                Filing Party
              </label>
              <select
                value={genParty}
                onChange={(e) => setGenParty(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-sm focus:border-navy-900 text-navy-950"
              >
                <option value="Appellant">Appellant</option>
                <option value="Respondent">Respondent</option>
                <option value="Cross-Appellant">Cross-Appellant</option>
                <option value="Interested Party">Interested Party</option>
              </select>
            </div>

            {/* Auto Reference Number & Separator Toggle */}
            <div className="grid grid-cols-2 gap-4 p-3 bg-slate-50 border border-slate-200 rounded-sm">
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-charcoal-700 block">
                  Document Reference
                </label>
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-navy-950 text-sm">
                    {formattedRef}
                  </span>
                  <button
                    onClick={() => setDocRefNumber((prev) => prev + 1)}
                    className="px-2 py-1 text-[10px] uppercase font-bold bg-navy-900 text-white rounded hover:bg-gold-600"
                    title="Increment for subsequent document filed in this appeal"
                  >
                    + Next ({(docRefNumber + 1).toString().padStart(3, "0")})
                  </button>
                  <button
                    onClick={() => setDocRefNumber(1)}
                    className="text-[10px] text-charcoal-500 hover:text-navy-900 underline"
                  >
                    Reset (001)
                  </button>
                </div>
              </div>

              {/* Separator toggle */}
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-charcoal-700 block">
                  Separator Style
                </label>
                <button
                  type="button"
                  onClick={() => setUseEnDash(!useEnDash)}
                  className="px-3 py-1 text-xs border rounded-sm font-mono flex items-center gap-2 bg-white text-navy-900 border-slate-300"
                >
                  <span>{useEnDash ? "Long Dash (–)" : "Plain Hyphen (-)"}</span>
                  <span className="text-[10px] text-gold-700 font-sans uppercase font-bold">Toggle</span>
                </button>
              </div>
            </div>

            {/* Generated Output Display */}
            <div className="space-y-2 pt-2">
              <label className="text-xs font-bold uppercase tracking-wider text-navy-950">
                Official Generated File Name
              </label>
              <div className="p-3 bg-navy-950 text-gold-300 font-mono text-xs rounded-sm break-all border border-navy-800 flex items-center justify-between gap-3">
                <span>{generatedFileName}</span>
                <button
                  onClick={copyToClipboard}
                  className="shrink-0 p-1.5 bg-navy-800 hover:bg-gold-600 hover:text-navy-950 text-gold-400 rounded transition-colors"
                  title="Copy formatted file name"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && (
                <p className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Copied to clipboard for registry upload.</span>
                </p>
              )}
            </div>
          </div>
        </div>

        {/* c) Pre-upload Checklist (6 cols) */}
        <div className="lg:col-span-6 bg-white rounded-sm border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="space-y-1 pb-3 border-b border-slate-200">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-700">
              Registry Vetting Audit
            </span>
            <h3 className="font-serif text-xl text-navy-950 font-bold">
              Pre-Upload Compliance Checklist
            </h3>
            <p className="text-xs text-charcoal-500">
              Interactive 5-point audit mandated under the electronic appellate practice directions.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-navy-950">
                Vetting Progress ({completedCount} of {FILING_CHECKLIST_TEMPLATE.length})
              </span>
              <span
                className={`font-mono font-bold ${
                  checklistPercentage === 100 ? "text-emerald-700" : "text-gold-700"
                }`}
              >
                {checklistPercentage}%
              </span>
            </div>
            <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-300 rounded-full ${
                  checklistPercentage === 100 ? "bg-emerald-600" : "bg-gold-500"
                }`}
                style={{ width: `${checklistPercentage}%` }}
              />
            </div>
          </div>

          {/* Checklist Items */}
          <div className="space-y-3">
            {FILING_CHECKLIST_TEMPLATE.map((item) => {
              const isChecked = !!checklist[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => toggleChecklist(item.id)}
                  className={`p-3 rounded-sm border transition-all cursor-pointer flex items-start gap-3 select-none ${
                    isChecked
                      ? "bg-emerald-50/40 border-emerald-300"
                      : "bg-slate-50 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => {}} // handled by parent div onClick
                    className="mt-0.5 rounded text-navy-900 focus:ring-gold-500"
                  />
                  <div className="space-y-0.5">
                    <p
                      className={`text-xs font-semibold ${
                        isChecked ? "text-navy-950" : "text-charcoal-800"
                      }`}
                    >
                      {item.label}
                    </p>
                    <p className="text-[11px] text-charcoal-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Completion verdict */}
          <div
            className={`p-3 rounded-sm text-xs flex items-center gap-2 ${
              checklistPercentage === 100
                ? "bg-emerald-100 text-emerald-900 border border-emerald-300"
                : "bg-amber-50 text-amber-900 border border-amber-200"
            }`}
          >
            {checklistPercentage === 100 ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Bundle is 100% compliant and ready for electronic registry upload.</span>
              </>
            ) : (
              <>
                <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
                <span>
                  Complete remaining {FILING_CHECKLIST_TEMPLATE.length - completedCount} item(s) to guarantee zero registry rejection.
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* d) DEADLINE CALCULATOR & SCHEDULE */}
      {/* ========================================================= */}
      <div className="bg-white rounded-sm border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-3 border-b border-slate-200">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-700">
              Statutory Countdown Engine
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-navy-950 font-bold">
              30-Day Upload Deadline &amp; Hearing Milestone Calculator
            </h3>
            <p className="text-xs text-charcoal-500">
              Select any prospective court hearing date to instantly calculate the mandatory 30-day pre-hearing electronic upload cutoff and reminder timetable.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <label className="text-xs font-bold text-navy-950">Hearing Date:</label>
            <input
              type="date"
              value={calcHearingDate}
              onChange={(e) => setCalcHearingDate(e.target.value)}
              className="px-3 py-1.5 text-xs font-mono bg-slate-50 border border-slate-300 rounded-sm focus:border-navy-900 text-navy-950"
            />
          </div>
        </div>

        {calcDeadlineInfo && (
          <div className="space-y-6">
            {/* Highlighted 30-Day Deadline Result Box */}
            <div className="p-6 bg-navy-950 text-white rounded-sm border border-gold-500/40 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-gold-400">
                  Scheduled Hearing Date
                </span>
                <p className="font-serif text-xl font-bold text-white">
                  {formatDate(calcDeadlineInfo.hearing.toISOString().split("T")[0])}
                </p>
                <p className="text-[11px] text-ivory-400">Fixed tribunal date</p>
              </div>

              <div className="space-y-1 border-y md:border-y-0 md:border-x border-navy-800 py-3 md:py-0 md:px-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400">
                  Mandatory 30-Day Cutoff
                </span>
                <p className="font-serif text-xl font-bold text-emerald-300">
                  {formatDate(calcDeadlineInfo.deadline.toISOString().split("T")[0])}
                </p>
                <p className="text-[11px] text-ivory-400">All electronic bundles must be stamped</p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400">
                  Statutory Window Status
                </span>
                <p className="font-serif text-xl font-bold text-white">
                  {calcDeadlineInfo.daysLeft > 0
                    ? `${calcDeadlineInfo.daysLeft} Days to Deadline`
                    : `${Math.abs(calcDeadlineInfo.daysLeft)} Days Overdue`}
                </p>
                <p className="text-[11px] text-ivory-400">
                  {calcDeadlineInfo.daysLeft > 7
                    ? "Sufficient preparation buffer"
                    : "Immediate filing expedited required"}
                </p>
              </div>
            </div>

            {/* Reminder Timetable Schedule */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-navy-950">
                Recommended Practice Direction Milestones
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {calcDeadlineInfo.schedule.map((step, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-sm border space-y-1.5 ${
                      step.critical
                        ? "bg-amber-50/70 border-amber-300"
                        : "bg-slate-50 border-slate-200"
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-navy-950">{step.label}</span>
                      {step.critical && (
                        <span className="text-[9px] uppercase font-bold px-1.5 py-0.2 bg-amber-500 text-white rounded">
                          Mandatory
                        </span>
                      )}
                    </div>
                    <p className="font-mono text-xs font-semibold text-gold-700">
                      {formatDate(step.date.toISOString().split("T")[0])}
                    </p>
                    <p className="text-[11px] text-charcoal-600 leading-relaxed">
                      {step.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
