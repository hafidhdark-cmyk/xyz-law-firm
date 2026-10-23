import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { INSIGHTS_ARTICLES } from "@/data/insights";
import { formatDate } from "@/lib/utils";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = INSIGHTS_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="flex-1 bg-ivory-200 overflow-x-hidden">
        {/* Article Header */}
        <section className="bg-navy-950 text-white py-12 sm:py-24 border-b border-navy-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-6">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-gold-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Insights</span>
            </Link>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-ivory-400">
              <span className="px-2.5 py-1 bg-navy-900 border border-gold-500/30 text-gold-300 font-semibold rounded-sm text-[11px] sm:text-xs">
                {article.category}
              </span>
              <span className="flex items-center gap-1.5 text-[11px] sm:text-xs">
                <Calendar className="w-3.5 h-3.5 text-gold-400" />
                {formatDate(article.publishedAt)}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-[11px] sm:text-xs font-mono">
                <Clock className="w-3.5 h-3.5 text-gold-400" />
                {article.readTime}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-white leading-tight font-normal">
              {article.title}
            </h1>

            <div className="pt-4 border-t border-navy-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-sm bg-navy-900 border border-gold-500/40 flex items-center justify-center text-gold-400 font-semibold text-xs shrink-0">
                  {article.author.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-white">{article.author.name}</p>
                  <p className="text-[10px] sm:text-xs text-ivory-400 font-light">{article.author.role}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <article className="py-10 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-sm border border-ivory-400 p-6 sm:p-14 space-y-6 sm:space-y-8 shadow-sm">
            {/* Executive Summary Lead */}
            <div className="p-5 sm:p-6 bg-ivory-100 border-l-4 border-gold-500 rounded-sm">
              <h3 className="text-xs uppercase font-bold text-navy-950 tracking-wider mb-2">
                Executive Takeaway
              </h3>
              <p className="text-charcoal-700 italic text-sm sm:text-base leading-relaxed">
                {article.summary}
              </p>
            </div>

            {/* Paragraphs */}
            <div className="space-y-5 sm:space-y-6 text-charcoal-800 text-sm sm:text-lg leading-relaxed font-light">
              {article.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Disclaimer box */}
            <div className="pt-6 sm:pt-8 border-t border-ivory-300 text-xs text-charcoal-500 space-y-1.5 font-light">
              <p className="font-semibold text-navy-950 text-xs">
                Notice &amp; Disclaimer
              </p>
              <p className="text-[11px] sm:text-xs">
                This briefing is provided for informational and educational purposes only and does not constitute formal legal advice. Readers should seek qualified legal counsel tailored to their specific commercial context.
              </p>
            </div>

            {/* Back CTA */}
            <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3">
              <Link
                href="/insights"
                className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-navy-950 hover:text-gold-700 py-2 sm:py-0"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Knowledge Index</span>
              </Link>
              <Link
                href="/contact"
                className="px-5 py-3 sm:py-2.5 text-xs font-semibold bg-navy-950 text-white rounded-sm hover:bg-gold-600 text-center"
              >
                Discuss with Practice Lead
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
