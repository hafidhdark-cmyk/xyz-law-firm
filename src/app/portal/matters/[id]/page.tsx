import { notFound } from "next/navigation";
import Link from "next/link";
import { MATTERS } from "@/data/matters";
import { formatDate, formatCurrencyNGN } from "@/lib/utils";
import {
  ArrowLeft,
  Calendar,
  FileText,
  Clock,
  CheckCircle2,
  Circle,
  Building2,
  Scale,
  Download,
  AlertCircle,
  FileCheck2,
} from "lucide-react";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function MatterDetailPage({ params }: Props) {
  const { id } = await params;
  const matter = MATTERS.find((m) => m.id === id);

  if (!matter) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
      {/* Back button & Breadcrumb */}
      <div className="flex items-center gap-3 text-xs text-charcoal-500">
        <Link
          href="/portal"
          className="inline-flex items-center gap-1.5 text-gold-700 hover:text-navy-950 font-semibold"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Matter Dashboard</span>
        </Link>
        <span>/</span>
        <span className="font-mono">{matter.reference}</span>
      </div>

      {/* Matter Header Banner */}
      <div className="bg-white rounded-sm border border-slate-200 p-6 sm:p-8 space-y-4 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold px-2 py-0.5 bg-slate-100 text-slate-800 rounded">
                {matter.reference}
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded">
                {matter.status}
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-blue-100 text-blue-800 rounded">
                {matter.matterType}
              </span>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
              {matter.title}
            </h1>
            <p className="text-xs text-charcoal-500">
              Client: <strong>{matter.client}</strong> • Lead Counsel: <strong>{matter.leadCounsel}</strong>
            </p>
          </div>

          <Link
            href="/portal/filing-assistant"
            className="inline-flex items-center gap-2 px-4 py-2 bg-navy-900 text-white text-xs uppercase tracking-wider font-semibold hover:bg-gold-600 rounded-sm transition-colors shrink-0"
          >
            <FileCheck2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Appellate Filing Assistant</span>
          </Link>
        </div>

        <p className="text-sm text-charcoal-700 pt-2 border-t border-slate-100 leading-relaxed">
          {matter.description}
        </p>

        {/* Matter Metadata Grid */}
        <div className="pt-4 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          <div>
            <span className="text-charcoal-400 block text-[10px] uppercase font-semibold">Jurisdiction / Forum</span>
            <span className="font-medium text-navy-950">{matter.courtOrTribunal || "Direct Commercial Counsel"}</span>
          </div>
          <div>
            <span className="text-charcoal-400 block text-[10px] uppercase font-semibold">Commencement Date</span>
            <span className="font-medium text-navy-950">{formatDate(matter.commencementDate)}</span>
          </div>
          <div>
            <span className="text-charcoal-400 block text-[10px] uppercase font-semibold">Next Scheduled Action</span>
            <span className="font-medium text-gold-700">
              {matter.nextStepDate ? formatDate(matter.nextStepDate) : "Awaiting Registry Notice"}
            </span>
          </div>
          <div>
            <span className="text-charcoal-400 block text-[10px] uppercase font-semibold">Total Retainer Invoiced</span>
            <span className="font-medium text-navy-950">{formatCurrencyNGN(matter.financials.billed)}</span>
          </div>
        </div>
      </div>

      {/* Two Column Layout: Timeline (7 cols) + Documents (5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Timeline of Events (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-sm border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gold-600" />
              <h2 className="font-serif text-lg text-navy-950 font-bold">
                Procedural &amp; Event Timeline
              </h2>
            </div>
            <span className="text-xs text-charcoal-500">
              {matter.timeline.length} Milestones Recorded
            </span>
          </div>

          <div className="relative pl-6 space-y-8 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200">
            {matter.timeline.map((event) => (
              <div key={event.id} className="relative group">
                {/* Node icon */}
                <div
                  className={`absolute -left-6 top-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center bg-white ${
                    event.status === "completed"
                      ? "border-emerald-600 text-emerald-600"
                      : event.status === "current"
                      ? "border-amber-600 text-amber-600 animate-pulse"
                      : "border-slate-300 text-slate-300"
                  }`}
                >
                  {event.status === "completed" ? (
                    <CheckCircle2 className="w-3.5 h-3.5 fill-emerald-600 text-white" />
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-current" />
                  )}
                </div>

                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold text-navy-950">
                      {event.title}
                    </span>
                    <span className="text-[10px] font-mono text-charcoal-400">
                      • {formatDate(event.date)}
                    </span>
                  </div>

                  <p className="text-xs text-charcoal-600 leading-relaxed">
                    {event.description}
                  </p>

                  <p className="text-[11px] text-charcoal-400 font-medium pt-0.5">
                    Lead Actor: {event.actor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Document Repository (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-sm border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-gold-600" />
              <h2 className="font-serif text-lg text-navy-950 font-bold">
                Matter Documents
              </h2>
            </div>
            <span className="text-xs text-charcoal-500">
              {matter.documents.length} Files
            </span>
          </div>

          <div className="space-y-3">
            {matter.documents.map((doc) => (
              <div
                key={doc.id}
                className="p-4 bg-slate-50 border border-slate-200 rounded-sm space-y-2 hover:border-gold-500/50 transition-colors"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-navy-900 shrink-0" />
                    <span className="text-xs font-semibold text-navy-950 line-clamp-1">
                      {doc.title}
                    </span>
                  </div>
                  <span
                    className={`text-[9px] uppercase font-bold px-2 py-0.2 rounded shrink-0 ${
                      doc.status === "Filed"
                        ? "bg-emerald-100 text-emerald-800"
                        : doc.status === "Under Review"
                        ? "bg-amber-100 text-amber-800"
                        : "bg-slate-200 text-slate-800"
                    }`}
                  >
                    {doc.status}
                  </span>
                </div>

                <div className="text-[11px] font-mono text-charcoal-500 truncate">
                  {doc.fileName}
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-200/60 text-xs">
                  <span className="text-[11px] text-charcoal-400">
                    {doc.fileSize} • Uploaded {formatDate(doc.uploadedAt)}
                  </span>
                  <button
                    onClick={() => {
                      alert(`Initiating simulated download for ${doc.fileName}`);
                    }}
                    className="inline-flex items-center gap-1 text-gold-700 hover:text-navy-950 font-semibold text-xs"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Quick upload simulated alert */}
          <div className="p-3 bg-ivory-100 border border-ivory-300 rounded-sm text-xs text-charcoal-600 text-center">
            To submit responsive processes or supporting evidence, use the Appellate Filing Assistant or contact lead counsel directly.
          </div>
        </div>
      </div>
    </div>
  );
}
