"use client";

import Link from "next/link";
import { MATTERS, INVOICES, SECURE_MESSAGES } from "@/data/matters";
import { formatCurrencyNGN, formatDate } from "@/lib/utils";
import {
  Scale,
  Calendar,
  FileText,
  CreditCard,
  MessageSquare,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Clock,
  Download,
  AlertCircle,
  FileCheck2,
} from "lucide-react";

export default function PortalDashboardPage() {
  const activeMatters = MATTERS;
  const pendingInvoices = INVOICES.filter((i) => i.status === "Pending");
  const totalPendingAmount = pendingInvoices.reduce((sum, i) => sum + i.amount, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
      {/* Welcome & Overview Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 pb-6 border-b border-slate-200">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-700">
            <span>Corporate Client Workspace</span>
            <span>•</span>
            <span>Zenith Industrial Holdings Plc</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif text-navy-950 font-bold">
            Matter &amp; Compliance Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-600">
            Live overview of ongoing commercial disputes, upcoming appellate hearing dates, and regulatory filings.
          </p>
        </div>

        {/* Action Link to Filing Assistant */}
        <Link
          href="/portal/filing-assistant"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-navy-900 hover:bg-gold-600 text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors shadow-xs"
        >
          <FileCheck2 className="w-4 h-4 text-emerald-400" />
          <span>Launch Appellate Filing Assistant</span>
        </Link>
      </div>

      {/* Top 4 KPI Metrics Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white p-5 rounded-sm border border-slate-200 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-charcoal-500 text-xs">
            <span className="font-medium">Active Instructions</span>
            <Scale className="w-4 h-4 text-navy-900" />
          </div>
          <div className="text-2xl sm:text-3xl font-serif font-bold text-navy-950">
            {activeMatters.length}
          </div>
          <p className="text-[11px] text-emerald-700 font-medium flex items-center gap-1">
            <span>All lead counsel assigned</span>
          </p>
        </div>

        <div className="bg-white p-5 rounded-sm border border-slate-200 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-charcoal-500 text-xs">
            <span className="font-medium">Upcoming Hearings</span>
            <Calendar className="w-4 h-4 text-gold-600" />
          </div>
          <div className="text-2xl sm:text-3xl font-serif font-bold text-navy-950">
            2
          </div>
          <p className="text-[11px] text-amber-700 font-medium">
            Next: 18 May 2026 (FHC Lagos)
          </p>
        </div>

        <div className="bg-white p-5 rounded-sm border border-slate-200 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-charcoal-500 text-xs">
            <span className="font-medium">Pending Invoices</span>
            <CreditCard className="w-4 h-4 text-slate-700" />
          </div>
          <div className="text-xl sm:text-2xl font-serif font-bold text-navy-950 truncate">
            {formatCurrencyNGN(totalPendingAmount)}
          </div>
          <p className="text-[11px] text-charcoal-500">
            {pendingInvoices.length} outstanding fee notes
          </p>
        </div>

        <div className="bg-white p-5 rounded-sm border border-slate-200 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-charcoal-500 text-xs">
            <span className="font-medium">Secure Communications</span>
            <MessageSquare className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-2xl sm:text-3xl font-serif font-bold text-navy-950">
            1 Unread
          </div>
          <p className="text-[11px] text-gold-700 font-medium">
            From Babajide Balogun, SAN
          </p>
        </div>
      </div>

      {/* Main Grid: Left 8 Cols (Matters + Hearings), Right 4 Cols (Invoices + Messages) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (8 cols) */}
        <div className="lg:col-span-8 space-y-8">
          {/* Active Matters List */}
          <div className="bg-white rounded-sm border border-slate-200 shadow-xs overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center bg-slate-50/50">
              <div>
                <h2 className="font-serif text-lg text-navy-950 font-bold">
                  Active Legal Matters
                </h2>
                <p className="text-xs text-charcoal-500">
                  Select any matter to inspect procedural timeline, filed processes, and team.
                </p>
              </div>
              <span className="text-xs text-charcoal-500 font-mono">
                {activeMatters.length} Total Matters
              </span>
            </div>

            <div className="divide-y divide-slate-100">
              {activeMatters.map((matter) => (
                <div
                  key={matter.id}
                  className="p-6 hover:bg-slate-50 transition-colors space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono px-2 py-0.5 bg-slate-100 text-slate-700 rounded font-semibold">
                        {matter.reference}
                      </span>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded">
                        {matter.status}
                      </span>
                    </div>

                    <span className="text-xs text-charcoal-500">
                      Commenced: {formatDate(matter.commencementDate)}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-base sm:text-lg text-navy-950 font-semibold hover:text-gold-700">
                      <Link href={`/portal/matters/${matter.id}`}>
                        {matter.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-charcoal-600 line-clamp-2 mt-1">
                      {matter.description}
                    </p>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-charcoal-500 border-t border-slate-100">
                    <div className="flex items-center gap-4">
                      <span>Practice: <strong className="text-navy-900">{matter.practiceArea}</strong></span>
                      <span>Lead: <strong className="text-navy-900">{matter.leadCounsel}</strong></span>
                    </div>

                    <Link
                      href={`/portal/matters/${matter.id}`}
                      className="inline-flex items-center gap-1 text-gold-700 hover:text-navy-950 font-semibold text-xs"
                    >
                      <span>Matter Workspace &amp; Timeline</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Hearing Dates Schedule */}
          <div className="bg-white rounded-sm border border-slate-200 shadow-xs p-6 space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gold-600" />
                <h2 className="font-serif text-lg text-navy-950 font-bold">
                  Upcoming Court &amp; Tribunal Hearings
                </h2>
              </div>
              <span className="text-xs text-charcoal-500">Federal High Court / Tax Appeal Tribunal</span>
            </div>

            <div className="space-y-3">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-navy-950 text-gold-400 rounded-sm flex flex-col items-center justify-center shrink-0">
                    <span className="text-[10px] uppercase font-bold text-slate-300">MAY</span>
                    <span className="font-serif text-lg font-bold leading-none">18</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-navy-950">
                      Zenith Industrial Holdings v. Federal Inland Revenue Service
                    </h4>
                    <p className="text-xs text-charcoal-600">
                      Federal High Court, Lagos Division • Adoption of Final Written Addresses
                    </p>
                    <p className="text-[11px] text-amber-700 font-medium mt-1">
                      Statutory 30-day pre-hearing filing window satisfied.
                    </p>
                  </div>
                </div>

                <Link
                  href="/portal/filing-assistant"
                  className="px-3 py-1.5 text-xs font-semibold bg-white border border-slate-300 hover:border-navy-900 text-navy-900 rounded-sm shrink-0"
                >
                  Verify E-Filing Bundle
                </Link>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-navy-950 text-gold-400 rounded-sm flex flex-col items-center justify-center shrink-0">
                    <span className="text-[10px] uppercase font-bold text-slate-300">JUN</span>
                    <span className="font-serif text-lg font-bold leading-none">08</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-navy-950">
                      Zenith Industrial Holdings v. FIRS (Appellate Cross-Reference)
                    </h4>
                    <p className="text-xs text-charcoal-600">
                      Court of Appeal (Abuja Division) • Substantive Appeal Hearing
                    </p>
                    <p className="text-[11px] text-emerald-700 font-medium mt-1">
                      Briefs formatted and electronically indexed.
                    </p>
                  </div>
                </div>

                <Link
                  href="/portal/filing-assistant"
                  className="px-3 py-1.5 text-xs font-semibold bg-white border border-slate-300 hover:border-navy-900 text-navy-900 rounded-sm shrink-0"
                >
                  Track Appeal Status
                </Link>
              </div>
            </div>
          </div>

          {/* Recent Matter Documents */}
          <div className="bg-white rounded-sm border border-slate-200 shadow-xs p-6 space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-navy-900" />
                <h2 className="font-serif text-lg text-navy-950 font-bold">
                  Recent Process &amp; Contract Documents
                </h2>
              </div>
              <span className="text-xs text-charcoal-500">Repository</span>
            </div>

            <div className="divide-y divide-slate-100">
              {MATTERS.flatMap((m) => m.documents).slice(0, 4).map((doc) => (
                <div
                  key={doc.id}
                  className="py-3 flex items-center justify-between gap-4 text-xs"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-navy-950 truncate">{doc.title}</p>
                      <p className="text-[11px] text-charcoal-500 font-mono truncate">
                        {doc.fileName} • {doc.fileSize}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="hidden sm:inline text-[10px] uppercase font-bold px-2 py-0.5 bg-slate-100 text-slate-700 rounded">
                      {doc.category}
                    </span>
                    <button
                      onClick={() => alert(`Simulating encrypted download for: ${doc.fileName}`)}
                      className="p-1.5 text-slate-600 hover:text-navy-950 hover:bg-slate-100 rounded"
                      title="Download document copy"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (4 cols): Invoices & Secure Messages */}
        <div className="lg:col-span-4 space-y-8">
          {/* Fee Notes / Invoices */}
          <div className="bg-white rounded-sm border border-slate-200 shadow-xs p-6 space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-gold-600" />
                <h2 className="font-serif text-base text-navy-950 font-bold">
                  Fee Notes &amp; Invoices
                </h2>
              </div>
              <span className="text-xs text-charcoal-500 font-mono">NGN</span>
            </div>

            <div className="space-y-3">
              {INVOICES.map((inv) => (
                <div
                  key={inv.id}
                  className="p-3 bg-slate-50 border border-slate-200 rounded-sm space-y-1.5"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono font-semibold text-slate-700">{inv.invoiceNumber}</span>
                    <span
                      className={`text-[10px] uppercase font-bold px-2 py-0.2 rounded ${
                        inv.status === "Paid"
                          ? "bg-emerald-100 text-emerald-800"
                          : inv.status === "Overdue"
                          ? "bg-red-100 text-red-800"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {inv.status}
                    </span>
                  </div>

                  <p className="text-xs text-navy-950 font-medium truncate">
                    {inv.matterTitle}
                  </p>

                  <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-200/80">
                    <span className="font-semibold text-navy-900">
                      {formatCurrencyNGN(inv.amount)}
                    </span>
                    <span className="text-[11px] text-charcoal-500">
                      Due: {formatDate(inv.dueDate)}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 bg-ivory-100 border border-ivory-300 rounded-sm text-xs text-charcoal-600 text-center">
              All transactions backed by official firm receipt &amp; WHT credit notes.
            </div>
          </div>

          {/* Secure Messages */}
          <div className="bg-white rounded-sm border border-slate-200 shadow-xs p-6 space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-gold-600" />
                <h2 className="font-serif text-base text-navy-950 font-bold">
                  Counsel Communications
                </h2>
              </div>
              <span className="text-xs text-emerald-700 font-semibold">Encrypted</span>
            </div>

            <div className="space-y-3">
              {SECURE_MESSAGES.map((msg) => (
                <div
                  key={msg.id}
                  className={`p-3 rounded-sm border text-xs space-y-1.5 transition-colors ${
                    msg.unread
                      ? "bg-amber-50/50 border-amber-300"
                      : "bg-slate-50 border-slate-200"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-navy-900 text-gold-400 flex items-center justify-center font-bold text-[10px]">
                        {msg.avatar}
                      </div>
                      <span className="font-semibold text-navy-950">{msg.sender}</span>
                    </div>
                    <span className="text-[10px] text-charcoal-400">{msg.date}</span>
                  </div>

                  <p className="font-medium text-navy-900 text-xs">{msg.subject}</p>
                  <p className="text-[11px] text-charcoal-600 line-clamp-2">
                    {msg.preview}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
