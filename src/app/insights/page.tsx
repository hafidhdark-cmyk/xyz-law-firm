"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { INSIGHTS_ARTICLES } from "@/data/insights";
import { Clock, ChevronRight, BookOpen, User, Calendar } from "lucide-react";
import { formatDate } from "@/lib/utils";

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Litigation & Practice Directions",
    "Data & Tech",
    "Energy Transition",
    "Corporate Advisory",
  ];

  const filteredArticles =
    selectedCategory === "All"
      ? INSIGHTS_ARTICLES
      : INSIGHTS_ARTICLES.filter((a) => a.category === selectedCategory);

  return (
    <>
      <Header />
      <main className="flex-1 bg-ivory-200">
        {/* Banner */}
        <section className="bg-navy-950 text-white py-20 border-b border-navy-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <span className="text-gold-400 text-xs uppercase tracking-widest font-semibold flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Knowledge &amp; Briefings</span>
              </span>
              <h1 className="text-4xl sm:text-5xl font-serif text-white">
                Legal Insights
              </h1>
              <p className="text-base sm:text-lg text-ivory-300 leading-relaxed font-light">
                Authoritative commentary on the Nigeria Data Protection Act, appellate court electronic filing practice directions, Petroleum Industry Act, and corporate governance.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter Tabs */}
        <section className="bg-white border-b border-ivory-400 sticky top-20 z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto">
            <div className="flex gap-2 py-4 min-w-max">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs font-semibold rounded-sm transition-all ${
                    selectedCategory === cat
                      ? "bg-navy-900 text-white shadow-xs"
                      : "bg-ivory-100 text-charcoal-700 hover:bg-ivory-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Article Grid */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.slug}
                className="bg-white rounded-sm border border-ivory-400 p-8 flex flex-col justify-between hover:border-gold-500/60 hover:shadow-lg transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-charcoal-500">
                    <span className="px-2.5 py-1 bg-ivory-100 border border-ivory-300 text-gold-700 font-semibold rounded-sm">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-charcoal-400" />
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl text-navy-950 font-medium hover:text-gold-600 transition-colors leading-snug">
                    <Link href={`/insights/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-charcoal-600 leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-ivory-300 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-charcoal-600">
                    <User className="w-3.5 h-3.5 text-gold-600" />
                    <div>
                      <p className="font-semibold text-navy-950">{article.author.name}</p>
                      <p className="text-[11px] text-charcoal-400">{formatDate(article.publishedAt)}</p>
                    </div>
                  </div>

                  <Link
                    href={`/insights/${article.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-gold-700 hover:text-navy-950 group"
                  >
                    <span>Read Article</span>
                    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
