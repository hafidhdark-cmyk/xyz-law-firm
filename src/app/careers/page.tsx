"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CAREER_ROLES, JobRole } from "@/data/careers";
import { Briefcase, MapPin, Clock, Award, CheckCircle2, ChevronRight, X } from "lucide-react";

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<JobRole | null>(null);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  return (
    <>
      <Header />
      <main className="flex-1 bg-ivory-200 overflow-x-hidden">
        {/* Banner */}
        <section className="bg-navy-950 text-white py-14 sm:py-20 border-b border-navy-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-3 sm:space-y-4">
              <span className="text-gold-400 text-xs uppercase tracking-widest font-semibold">
                Join XYZ Law Firm
              </span>
              <h1 className="text-3xl sm:text-5xl font-serif text-white font-normal">
                Careers &amp; Professional Growth
              </h1>
              <p className="text-sm sm:text-base text-ivory-300 leading-relaxed font-light">
                We cultivate an intellectually rigorous, collaborative culture where exceptional lawyers and legal operations professionals build defining commercial careers.
              </p>
            </div>
          </div>
        </section>

        {/* Culture & Pillars Section */}
        <section className="py-14 sm:py-20 bg-white border-b border-ivory-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2.5 sm:space-y-3">
              <span className="text-gold-600 text-xs uppercase tracking-widest font-semibold">
                Our Firm Culture
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif text-navy-950 font-normal">
                Intellectual Rigour. Uncompromising Integrity.
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">
                We believe top-tier commercial counsel is forged at the intersection of deep doctrinal mastery, practical business empathy, and modern digital workflow execution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-ivory-100 p-6 sm:p-8 rounded-sm border border-ivory-300 space-y-3 sm:space-y-4">
                <div className="w-10 h-10 rounded-sm bg-navy-950 text-gold-400 flex items-center justify-center font-serif text-lg font-bold">
                  01
                </div>
                <h3 className="font-serif text-lg sm:text-xl text-navy-950 font-normal">
                  Mentorship by Senior Counsel
                </h3>
                <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                  Associates work directly beside Senior Advocates of Nigeria (SAN) and experienced practice heads on high-profile dispute advocacy and landmark project finance.
                </p>
              </div>

              <div className="bg-ivory-100 p-6 sm:p-8 rounded-sm border border-ivory-300 space-y-3 sm:space-y-4">
                <div className="w-10 h-10 rounded-sm bg-navy-950 text-gold-400 flex items-center justify-center font-serif text-lg font-bold">
                  02
                </div>
                <h3 className="font-serif text-lg sm:text-xl text-navy-950 font-normal">
                  Legal Tech &amp; Workflow Mastery
                </h3>
                <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                  We invest heavily in practice management technology, digital research tools, and continuing professional development accredited by the NBA-ICLE.
                </p>
              </div>

              <div className="bg-ivory-100 p-6 sm:p-8 rounded-sm border border-ivory-300 space-y-3 sm:space-y-4">
                <div className="w-10 h-10 rounded-sm bg-navy-950 text-gold-400 flex items-center justify-center font-serif text-lg font-bold">
                  03
                </div>
                <h3 className="font-serif text-lg sm:text-xl text-navy-950 font-normal">
                  Merit-Driven Advancement
                </h3>
                <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                  Clear, transparent partnership tracks evaluated on client impact, technical precision, business development acumen, and ethical leadership.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Mock Open Roles */}
        <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl space-y-2 sm:space-y-3 mb-8 sm:mb-12">
            <span className="text-gold-600 text-xs uppercase tracking-widest font-semibold">
              Current Opportunities
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif text-navy-950 font-normal">
              Open Positions
            </h2>
            <p className="text-xs text-charcoal-600 font-light">
              Select any role to view detailed specifications and submit a mock application.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {CAREER_ROLES.map((role) => (
              <div
                key={role.id}
                className="bg-white rounded-sm border border-ivory-400 p-6 sm:p-8 hover:border-gold-500/70 hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6"
              >
                <div className="space-y-2.5 sm:space-y-3 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-charcoal-500">
                    <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-ivory-100 border border-ivory-300 text-gold-700 font-semibold rounded-sm text-[11px] sm:text-xs">
                      {role.department}
                    </span>
                    <span className="flex items-center gap-1 font-medium text-[11px] sm:text-xs">
                      <MapPin className="w-3.5 h-3.5 text-gold-600" />
                      {role.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-mono text-[10px] sm:text-xs">
                      <Clock className="w-3.5 h-3.5 text-gold-600" />
                      {role.experience}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-navy-950 font-normal">
                    {role.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">
                    {role.summary}
                  </p>
                </div>

                <div className="shrink-0 flex items-center pt-2 md:pt-0">
                  <button
                    onClick={() => {
                      setSelectedRole(role);
                      setApplicationSubmitted(false);
                    }}
                    className="w-full md:w-auto px-6 py-3.5 sm:py-3 text-xs font-semibold uppercase tracking-wider bg-navy-950 text-white hover:bg-gold-600 active:bg-gold-700 transition-colors rounded-sm flex items-center justify-center gap-2"
                  >
                    <span>View Role &amp; Apply</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Role Modal - Mobile drawer design */}
        {selectedRole && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-navy-950/70 backdrop-blur-xs">
            <div className="bg-white rounded-t-lg sm:rounded-sm border border-gold-500/50 max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedRole(null)}
                className="w-10 h-10 flex items-center justify-center absolute right-3 top-3 text-charcoal-400 hover:text-navy-950 hover:bg-ivory-100 rounded-sm"
                aria-label="Close role modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1 pr-8">
                <span className="text-[11px] font-bold uppercase text-gold-600 tracking-wider">
                  {selectedRole.department} • {selectedRole.location}
                </span>
                <h3 className="font-serif text-xl sm:text-3xl text-navy-950 font-bold">
                  {selectedRole.title}
                </h3>
                <p className="text-xs text-charcoal-500 font-mono">
                  Experience: {selectedRole.experience} | Status: {selectedRole.type}
                </p>
              </div>

              {applicationSubmitted ? (
                <div className="p-6 sm:p-8 bg-emerald-50 border border-emerald-300 rounded-sm text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-serif text-lg sm:text-xl text-emerald-950 font-bold">
                    Mock Application Received
                  </h4>
                  <p className="text-xs text-emerald-800 leading-relaxed max-w-md mx-auto font-light">
                    This is an interactive demonstration. In production, this submission is routed directly to the firm&apos;s talent management committee.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedRole(null);
                      setApplicationSubmitted(false);
                    }}
                    className="mt-4 w-full sm:w-auto px-6 py-2.5 text-xs font-semibold bg-navy-950 text-white rounded-sm"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <>
                  <div className="space-y-2 text-xs sm:text-sm text-charcoal-700">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-navy-950">
                      Primary Responsibilities
                    </h4>
                    <ul className="space-y-1.5 font-light">
                      {selectedRole.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs">
                          <span className="text-gold-600 mt-0.5">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm text-charcoal-700">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-navy-950">
                      Required Qualifications
                    </h4>
                    <ul className="space-y-1.5 font-light">
                      {selectedRole.qualifications.map((qual, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs">
                          <span className="text-gold-600 mt-0.5">•</span>
                          <span>{qual}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-ivory-300 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <span className="text-[11px] text-charcoal-400 italic text-center sm:text-left">
                      * Sample opening for evaluation
                    </span>
                    <button
                      onClick={() => setApplicationSubmitted(true)}
                      className="w-full sm:w-auto px-6 py-3.5 sm:py-2.5 text-xs font-semibold uppercase tracking-wider bg-gold-500 text-navy-950 hover:bg-gold-400 active:bg-gold-600 rounded-sm text-center"
                    >
                      Submit Mock Application
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
