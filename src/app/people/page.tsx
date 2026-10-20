"use client";

import { useState, useMemo } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LAWYERS, Lawyer } from "@/data/people";
import { InitialsAvatar } from "@/components/ui/InitialsAvatar";
import { Search, Filter, Mail, GraduationCap, MapPin, X } from "lucide-react";

export default function PeoplePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState<string>("All");
  const [selectedPractice, setSelectedPractice] = useState<string>("All");
  const [activeLawyerModal, setActiveLawyerModal] = useState<Lawyer | null>(null);

  // Extract unique roles and practices
  const roles = ["All", "Senior Partner", "Managing Partner", "Partner", "Senior Associate", "Associate"];
  const practiceOptions = [
    "All",
    "Corporate & Commercial",
    "Banking & Finance",
    "Dispute Resolution",
    "Energy & Infrastructure",
    "Technology & IP",
    "Data Protection & Compliance",
    "Real Estate",
  ];

  const filteredLawyers = useMemo(() => {
    return LAWYERS.filter((lawyer) => {
      const matchesSearch =
        lawyer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lawyer.bio.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesRole = selectedRole === "All" || lawyer.role === selectedRole;

      const matchesPractice =
        selectedPractice === "All" ||
        lawyer.practiceAreas.includes(selectedPractice);

      return matchesSearch && matchesRole && matchesPractice;
    });
  }, [searchQuery, selectedRole, selectedPractice]);

  return (
    <>
      <Header />
      <main className="flex-1 bg-ivory-200">
        {/* Banner */}
        <section className="bg-navy-950 text-white py-20 border-b border-navy-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <span className="text-gold-400 text-xs uppercase tracking-widest font-semibold">
                Partners &amp; Associates
              </span>
              <h1 className="text-4xl sm:text-5xl font-serif text-white">
                Our People
              </h1>
              <p className="text-base sm:text-lg text-ivory-300 leading-relaxed font-light">
                Distinguished legal practitioners combining profound courtroom advocacy, cross-border transactional leadership, and strategic regulatory counsel.
              </p>
              <p className="text-xs text-gold-400/80 italic">
                * Note: All profiles, names, and credentials shown are illustrative placeholders for demonstration purposes.
              </p>
            </div>
          </div>
        </section>

        {/* Filters and Search Bar */}
        <section className="py-8 bg-white border-b border-ivory-400 sticky top-20 z-30 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
              {/* Search input */}
              <div className="relative w-full lg:w-96">
                <Search className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search counsel by name or background..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-sm bg-ivory-100 border border-ivory-400 rounded-sm focus:border-navy-900 focus:bg-white text-charcoal-900 transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal-400 hover:text-charcoal-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Dropdown Filters */}
              <div className="flex flex-wrap sm:flex-nowrap gap-3 w-full lg:w-auto items-center">
                <div className="flex items-center gap-2 text-xs font-semibold text-charcoal-600">
                  <Filter className="w-3.5 h-3.5 text-gold-600" />
                  <span>Filter by:</span>
                </div>

                {/* Role select */}
                <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="px-3 py-2 text-xs bg-ivory-100 border border-ivory-400 rounded-sm text-charcoal-800 focus:border-navy-900"
                >
                  <option disabled value="">Filter by Role</option>
                  {roles.map((r) => (
                    <option key={r} value={r}>
                      {r === "All" ? "All Roles" : r}
                    </option>
                  ))}
                </select>

                {/* Practice area select */}
                <select
                  value={selectedPractice}
                  onChange={(e) => setSelectedPractice(e.target.value)}
                  className="px-3 py-2 text-xs bg-ivory-100 border border-ivory-400 rounded-sm text-charcoal-800 focus:border-navy-900 max-w-xs"
                >
                  <option disabled value="">Filter by Practice</option>
                  {practiceOptions.map((p) => (
                    <option key={p} value={p}>
                      {p === "All" ? "All Practice Areas" : p}
                    </option>
                  ))}
                </select>

                {(selectedRole !== "All" || selectedPractice !== "All" || searchQuery) && (
                  <button
                    onClick={() => {
                      setSelectedRole("All");
                      setSelectedPractice("All");
                      setSearchQuery("");
                    }}
                    className="text-xs text-gold-700 hover:text-navy-900 underline font-medium"
                  >
                    Reset filters
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Lawyers Grid */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex justify-between items-center text-xs text-charcoal-500">
            <span>Showing {filteredLawyers.length} of {LAWYERS.length} practitioners</span>
            <span>Recognised by leading directories (sample)</span>
          </div>

          {filteredLawyers.length === 0 ? (
            <div className="bg-white rounded-sm border border-ivory-400 p-12 text-center space-y-3">
              <p className="font-serif text-xl text-navy-950">No practitioners match your criteria.</p>
              <p className="text-xs text-charcoal-500">Try adjusting your search query or clearing your filter selections.</p>
              <button
                onClick={() => {
                  setSelectedRole("All");
                  setSelectedPractice("All");
                  setSearchQuery("");
                }}
                className="mt-2 px-4 py-2 text-xs font-semibold bg-navy-900 text-white rounded-sm"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLawyers.map((lawyer) => (
                <div
                  key={lawyer.id}
                  onClick={() => setActiveLawyerModal(lawyer)}
                  className="bg-white rounded-sm border border-ivory-400 p-6 flex flex-col justify-between hover:border-gold-500/70 hover:shadow-lg transition-all duration-200 cursor-pointer group"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <InitialsAvatar
                        initials={lawyer.initials}
                        name={lawyer.name}
                        size="lg"
                      />
                      <span className="text-[11px] font-semibold tracking-wide uppercase px-2 py-0.5 bg-ivory-100 border border-ivory-300 text-gold-700 rounded-sm">
                        {lawyer.role}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-serif text-lg text-navy-950 font-medium group-hover:text-gold-600 transition-colors">
                        {lawyer.name}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-charcoal-500">
                        <MapPin className="w-3 h-3 text-gold-600" />
                        <span>{lawyer.office} Office</span>
                        <span>•</span>
                        <span>Adm. {lawyer.admissionYear}</span>
                      </div>
                    </div>

                    <p className="text-xs text-charcoal-600 line-clamp-2 leading-relaxed">
                      {lawyer.bio}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {lawyer.practiceAreas.map((p) => (
                        <span
                          key={p}
                          className="text-[10px] px-2 py-0.5 bg-ivory-100 text-navy-900 rounded-xs border border-ivory-300"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-6 border-t border-ivory-300 flex items-center justify-between text-xs text-gold-700 font-semibold">
                    <span>View Profile &amp; Credentials</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Lawyer Bio Modal */}
        {activeLawyerModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-xs">
            <div className="bg-white rounded-sm border border-gold-500/40 max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative">
              <button
                onClick={() => setActiveLawyerModal(null)}
                className="absolute right-4 top-4 p-2 text-charcoal-400 hover:text-navy-950"
                aria-label="Close profile modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-start gap-4">
                <InitialsAvatar
                  initials={activeLawyerModal.initials}
                  name={activeLawyerModal.name}
                  size="xl"
                />
                <div className="space-y-1">
                  <span className="text-xs uppercase font-bold text-gold-600 tracking-wider">
                    {activeLawyerModal.role}
                  </span>
                  <h3 className="font-serif text-2xl text-navy-950 font-bold">
                    {activeLawyerModal.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-charcoal-500">
                    <MapPin className="w-3.5 h-3.5 text-gold-600" />
                    <span>{activeLawyerModal.office} Division</span>
                    <span>•</span>
                    <span>Nigerian Bar: {activeLawyerModal.admissionYear}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900">
                  Biography
                </h4>
                <p className="text-sm text-charcoal-600 leading-relaxed">
                  {activeLawyerModal.bio}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-gold-600" />
                  <span>Education &amp; Admissions</span>
                </h4>
                <ul className="space-y-1 text-xs text-charcoal-700">
                  {activeLawyerModal.education.map((edu, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                      <span>{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-ivory-300 flex items-center justify-between">
                <a
                  href={`mailto:${activeLawyerModal.email}`}
                  className="flex items-center gap-1.5 text-xs font-medium text-navy-900 hover:text-gold-600"
                >
                  <Mail className="w-4 h-4 text-gold-600" />
                  <span>{activeLawyerModal.email}</span>
                </a>
                <button
                  onClick={() => setActiveLawyerModal(null)}
                  className="px-4 py-2 text-xs font-semibold bg-navy-900 text-white rounded-sm hover:bg-navy-800"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
