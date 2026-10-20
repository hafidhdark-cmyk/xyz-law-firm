import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { INSIGHTS_ARTICLES } from "@/data/insights";
import { formatDate } from "@/lib/utils";
import { ArrowLeft, Clock, Calendar, User, Share2, Scale, BookOpen } from "lucide-react";

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
      <main className="flex-1 bg-ivory-200">
        {/* Article Header */}
        <section className="bg-navy-950 text-white py-16 sm:py-24 border-b border-navy-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-gold-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Insights</span>
            </Link>

            <div className="flex flex-wrap items-center gap-4 text-xs text-ivory-400">
              <span className="px-3 py-1 bg-navy-900 border border-gold-500/30 text-gold-300 font-semibold rounded-sm">
                {article.category}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-gold-400" />
                {formatDate(article.publishedAt)}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-gold-400" />
                {article.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white leading-tight">
              {article.title}
            </h1>

            <div className="pt-4 border-t border-navy-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-sm bg-navy-900 border border-gold-500/40 flex items-center justify-center text-gold-400 font-semibold text-xs">
                  {article.author.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{article.author.name}</p>
                  <p className="text-xs text-ivory-400">{article.author.role}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <article className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-sm border border-ivory-400 p-8 sm:p-14 space-y-8 shadow-sm">
            {/* Executive Summary Lead */}
            <div className="p-6 bg-ivory-100 border-l-4 border-gold-500 rounded-sm">
              <h3 className="text-xs uppercase font-bold text-navy-950 tracking-wider mb-2">
                Executive Takeaway
              </h3>
              <p className="text-charcoal-700 italic text-base leading-relaxed">
                {article.summary}
              </p>
            </div>

            {/* Paragraphs */}
            <div className="space-y-6 text-charcoal-800 text-base sm:text-lg leading-relaxed font-normal">
              {article.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Disclaimer box */}
            <div className="pt-8 border-t border-ivory-300 text-xs text-charcoal-500 space-y-2">
              <p className="font-semibold text-navy-900">
                Notice &amp; Disclaimer
              </p>
              <p>
                This briefing is provided for informational and educational purposes only and does not constitute formal legal advice. Readers should seek qualified legal counsel tailored to their specific commercial context.
              </p>
            </div>

            {/* Back CTA */}
            <div className="pt-6 flex justify-between items-center">
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 text-xs font-semibold text-navy-900 hover:text-gold-600"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Knowledge Index</span>
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 text-xs font-semibold bg-navy-900 text-white rounded-sm hover:bg-navy-800"
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
