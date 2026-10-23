"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OFFICES } from "@/data/offices";
import { Building2, Phone, Mail, Clock, ShieldCheck, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    email: "",
    phone: "",
    practiceArea: "Corporate & Commercial",
    preferredOffice: "Lagos",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = "Please provide your full legal or corporate name.";
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = "Please provide a valid corporate email address.";
    }
    if (!formData.phone.trim()) {
      errs.phone = "A direct contact phone number is required.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      errs.message = "Please include a brief overview of the legal inquiry (minimum 15 characters).";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <>
      <Header />
      <main className="flex-1 bg-ivory-200 overflow-x-hidden">
        {/* Banner */}
        <section className="bg-navy-950 text-white py-14 sm:py-20 border-b border-navy-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-3 sm:space-y-4">
              <span className="text-gold-400 text-xs uppercase tracking-widest font-semibold">
                Offices &amp; Engagement
              </span>
              <h1 className="text-3xl sm:text-5xl font-serif text-white font-normal">
                Contact Counsel
              </h1>
              <p className="text-sm sm:text-base text-ivory-300 leading-relaxed font-light">
                Direct engagement with our practice partners across our Lagos, Abuja, and Port Harcourt offices. All preliminary inquiries are handled with strict professional confidentiality.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
            {/* Left 5 Cols: Office Directory */}
            <div className="lg:col-span-5 space-y-6 sm:space-y-8">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-700">
                  Direct Locations
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-navy-950 font-normal">
                  Our Offices
                </h2>
                <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                  Available for confidential physical consultations by prior appointment.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {OFFICES.map((office) => (
                  <div
                    key={office.id}
                    className="bg-white p-5 sm:p-6 rounded-sm border border-ivory-400 space-y-3 shadow-xs hover:border-gold-500/50 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif text-lg sm:text-xl text-navy-950 font-semibold">
                        {office.city} Office
                      </h3>
                      {office.isHeadquarters && (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-navy-950 text-gold-300 rounded-sm">
                          Headquarters
                        </span>
                      )}
                    </div>

                    <div className="space-y-2 text-xs text-charcoal-700 pt-1 font-light">
                      <div className="flex items-start gap-2">
                        <Building2 className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-navy-950">{office.address}</p>
                          <p className="text-charcoal-500">{office.postalCode}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                        <a
                          href={`tel:${office.phone.replace(/[^0-9+]/g, "")}`}
                          className="hover:text-gold-700 font-medium underline sm:no-underline"
                        >
                          {office.phone}
                        </a>
                      </div>

                      <div className="flex items-center gap-2">
                        <Mail className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                        <a href={`mailto:${office.email}`} className="hover:text-gold-700">
                          {office.email}
                        </a>
                      </div>

                      <div className="flex items-center gap-2 text-charcoal-500">
                        <Clock className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                        <span>{office.workingHours}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Security reassurance */}
              <div className="p-4 bg-white border border-emerald-500/30 rounded-sm flex items-center gap-3 text-xs text-charcoal-700">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <p className="font-light">
                  Inquiries are protected under advocate-client privilege guidelines and the Nigeria Data Protection Act 2023.
                </p>
              </div>
            </div>

            {/* Right 7 Cols: Contact Form */}
            <div className="lg:col-span-7 bg-white rounded-sm border border-ivory-400 p-6 sm:p-12 shadow-sm">
              <div className="space-y-2 mb-6 sm:mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-700">
                  Confidential Inquiry
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-navy-950 font-normal">
                  Instruct or Consult the Firm
                </h2>
                <p className="text-xs text-charcoal-500 font-light">
                  Please provide preliminary particulars. Our practice clerk will respond within one business day.
                </p>
              </div>

              {submitted ? (
                <div className="py-8 sm:py-12 text-center space-y-4 bg-emerald-50/60 border border-emerald-200 rounded-sm p-6 sm:p-8">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h3 className="font-serif text-xl sm:text-2xl text-navy-950 font-bold">
                    Inquiry Transmitted Successfully
                  </h3>
                  <p className="text-xs text-charcoal-600 max-w-md mx-auto leading-relaxed font-light">
                    Thank you, <strong>{formData.fullName}</strong>. Your instruction summary regarding <strong>{formData.practiceArea}</strong> has been routed to our practice managing partner.
                  </p>
                  <p className="text-[11px] text-charcoal-400 italic">
                    (Front-end validation demonstrated successfully. No backend transmission occurred.)
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        organization: "",
                        email: "",
                        phone: "",
                        practiceArea: "Corporate & Commercial",
                        preferredOffice: "Lagos",
                        message: "",
                      });
                    }}
                    className="mt-4 px-6 py-3 text-xs font-semibold bg-navy-950 text-white rounded-sm hover:bg-navy-900"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {/* Full Name */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-navy-950">
                        Full Name / Principal <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Dr. Babatunde Williams"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full px-3.5 py-3 sm:py-2 text-base sm:text-xs bg-ivory-100 border rounded-sm focus:border-navy-900 focus:bg-white text-charcoal-900 ${
                          errors.fullName ? "border-red-500" : "border-ivory-400"
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-600 flex items-center gap-1 mt-0.5">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Organization */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-navy-950">
                        Corporate Entity / Organisation
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Sterling Zenith Holdings Plc"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full px-3.5 py-3 sm:py-2 text-base sm:text-xs bg-ivory-100 border border-ivory-400 rounded-sm focus:border-navy-900 focus:bg-white text-charcoal-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {/* Email */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-navy-950">
                        Corporate Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. b.williams@zenithcorp.ng"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-3.5 py-3 sm:py-2 text-base sm:text-xs bg-ivory-100 border rounded-sm focus:border-navy-900 focus:bg-white text-charcoal-900 ${
                          errors.email ? "border-red-500" : "border-ivory-400"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-600 flex items-center gap-1 mt-0.5">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-navy-950">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +234 803 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-3.5 py-3 sm:py-2 text-base sm:text-xs bg-ivory-100 border rounded-sm focus:border-navy-900 focus:bg-white text-charcoal-900 ${
                          errors.phone ? "border-red-500" : "border-ivory-400"
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-600 flex items-center gap-1 mt-0.5">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {/* Practice Area */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-navy-950">
                        Subject Practice Area
                      </label>
                      <select
                        value={formData.practiceArea}
                        onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                        className="w-full px-3 py-3 sm:py-2 text-base sm:text-xs bg-ivory-100 border border-ivory-400 rounded-sm focus:border-navy-900 text-charcoal-900 font-medium"
                      >
                        <option value="Corporate & Commercial">Corporate &amp; Commercial</option>
                        <option value="Banking & Finance">Banking &amp; Finance</option>
                        <option value="Dispute Resolution">Dispute Resolution</option>
                        <option value="Energy & Infrastructure">Energy &amp; Infrastructure</option>
                        <option value="Technology & IP">Technology &amp; IP</option>
                        <option value="Data Protection & Compliance">Data Protection &amp; Compliance</option>
                        <option value="Real Estate">Real Estate</option>
                      </select>
                    </div>

                    {/* Preferred Office */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-navy-950">
                        Preferred Office Liaison
                      </label>
                      <select
                        value={formData.preferredOffice}
                        onChange={(e) => setFormData({ ...formData, preferredOffice: e.target.value })}
                        className="w-full px-3 py-3 sm:py-2 text-base sm:text-xs bg-ivory-100 border border-ivory-400 rounded-sm focus:border-navy-900 text-charcoal-900 font-medium"
                      >
                        <option value="Lagos">Lagos Office (Ikoyi)</option>
                        <option value="Abuja">Abuja Office (Maitama)</option>
                        <option value="Port Harcourt">Port Harcourt Office (GRA Phase II)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-navy-950">
                      Summary of Instruction / Matter Particulars <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please outline the nature of your transaction, tribunal dispute, or regulatory issue..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-3.5 py-3 sm:py-2 text-base sm:text-xs bg-ivory-100 border rounded-sm focus:border-navy-900 focus:bg-white text-charcoal-900 ${
                        errors.message ? "border-red-500" : "border-ivory-400"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-600 flex items-center gap-1 mt-0.5">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button - Mobile Full Width */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full sm:w-auto px-8 py-4 sm:py-3.5 text-xs uppercase tracking-wider font-semibold bg-navy-950 text-white hover:bg-gold-500 hover:text-navy-950 transition-colors rounded-sm shadow-sm disabled:opacity-70 text-center"
                    >
                      {submitting ? "Processing Inquiry..." : "Transmit Confidential Instruction"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
