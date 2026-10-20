import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PRACTICE_AREAS } from "@/data/practices";
import { Scale, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

export default function PracticeAreasPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-ivory-200">
        {/* Banner */}
        <section className="bg-navy-950 text-white py-20 border-b border-navy-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 text-gold-400 text-xs uppercase tracking-widest font-semibold">
                <Scale className="w-3.5 h-3.5" />
                <span>Expertise &amp; Capabilities</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-serif text-white">
                Practice Areas
              </h1>
              <p className="text-base sm:text-lg text-ivory-300 leading-relaxed font-light">
                Our practice encompasses 7 core commercial disciplines tailored to the complexities of Nigerian law, regional West African investment treaties, and international dispute forums.
              </p>
            </div>
          </div>
        </section>

        {/* Practice Areas List */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {PRACTICE_AREAS.map((practice, index) => (
            <div
              key={practice.id}
              id={practice.slug}
              className="bg-white rounded-sm border border-ivory-400 p-8 sm:p-12 scroll-mt-28 shadow-sm hover:border-gold-500/50 transition-all"
            >
              <div className="flex flex-col lg:flex-row gap-10 justify-between items-start">
                {/* Left: Title & Overview */}
                <div className="space-y-4 max-w-2xl">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-gold-600 bg-gold-50 border border-gold-200 px-2.5 py-0.5 rounded-sm">
                      0{index + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-serif text-navy-950 font-normal">
                      {practice.title}
                    </h2>
                  </div>

                  <p className="text-base text-charcoal-700 font-medium leading-relaxed">
                    {practice.shortDescription}
                  </p>

                  <p className="text-sm text-charcoal-600 leading-relaxed">
                    {practice.overview}
                  </p>

                  {/* Sample representative matters */}
                  <div className="pt-4 border-t border-ivory-300 space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900">
                      Representative Matters (Sample)
                    </h4>
                    <ul className="space-y-2">
                      {practice.sampleMatters.map((matter, idx) => (
                        <li key={idx} className="text-xs text-charcoal-600 flex items-start gap-2">
                          <span className="text-gold-600 mt-0.5">•</span>
                          <span>{matter}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: Key Capabilities & Lead Partner Card */}
                <div className="w-full lg:w-80 shrink-0 space-y-6 bg-ivory-100 p-6 rounded-sm border border-ivory-300">
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gold-700">
                      Key Capabilities
                    </h4>
                    <ul className="space-y-2">
                      {practice.keyCapabilities.map((cap, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-charcoal-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-ivory-300 space-y-1 text-xs">
                    <span className="text-charcoal-500 uppercase tracking-wider text-[10px] font-semibold">
                      Practice Group Leader
                    </span>
                    <p className="font-semibold text-navy-950">{practice.leadPartner}</p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1 text-gold-700 hover:text-navy-950 font-semibold pt-2"
                    >
                      <span>Inquire regarding this practice</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
