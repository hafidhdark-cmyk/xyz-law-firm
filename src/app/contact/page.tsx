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
      <main className="flex-1 bg-ivory-200">
        {/* Banner */}
        <section className="bg-navy-950 text-white py-20 border-b border-navy-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <span className="text-gold-400 text-xs uppercase tracking-widest font-semibold">
                Offices &amp; Engagement
              </span>
              <h1 className="text-4xl sm:text-5xl font-serif text-white">
                Contact Counsel
              </h1>
              <p className="text-base sm:text-lg text-ivory-300 leading-relaxed font-light">
                Direct engagement with our practice partners across our Lagos, Abuja, and Port Harcourt offices. All preliminary inquiries are handled with strict professional confidentiality.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 5 Cols: Office Directory */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-700">
                  Direct Locations
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-navy-950 font-normal">
                  Our Offices
                </h2>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  Available for confidential physical consultations by prior appointment.
                </p>
              </div>

              <div className="space-y-6">
                {OFFICES.map((office) => (
                  <div
                    key={office.id}
                    className="bg-white p-6 rounded-sm border border-ivory-400 space-y-3 shadow-xs hover:border-gold-500/50 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif text-xl text-navy-950 font-semibold">
                        {office.city} Office
                      </h3>
                      {office.isHeadquarters && (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-navy-900 text-gold-300 rounded-sm">
                          Headquarters
                        </span>
                      )}
                    </div>

                    <div className="space-y-2 text-xs text-charcoal-700 pt-1">
                      <div className="flex items-start gap-2">
                        <Building2 className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-navy-950">{office.address}</p>
                          <p className="text-charcoal-500">{office.postalCode}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                        <span>{office.phone}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Mail className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                        <span>{office.email}</span>
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
                <p>
                  Inquiries are protected under advocate-client privilege guidelines and the Nigeria Data Protection Act 2023.
                </p>
              </div>
            </div>

            {/* Right 7 Cols: Contact Form */}
            <div className="lg:col-span-7 bg-white rounded-sm border border-ivory-400 p-8 sm:p-12 shadow-sm">
              <div className="space-y-2 mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-700">
                  Confidential Inquiry
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-navy-950 font-normal">
                  Instruct or Consult the Firm
                </h2>
                <p className="text-xs text-charcoal-500">
                  Please provide preliminary particulars. Our practice clerk will respond within one business day.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 bg-emerald-50/60 border border-emerald-200 rounded-sm p-8">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h3 className="font-serif text-2xl text-navy-950 font-bold">
                    Inquiry Transmitted Successfully
                  </h3>
                  <p className="text-xs text-charcoal-600 max-w-md mx-auto leading-relaxed">
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
                    className="mt-4 px-6 py-2.5 text-xs font-semibold bg-navy-900 text-white rounded-sm hover:bg-navy-800"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                        className={`w-full px-3 py-2 text-xs bg-ivory-100 border rounded-sm focus:border-navy-900 focus:bg-white text-charcoal-900 ${
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
                        className="w-full px-3 py-2 text-xs bg-ivory-100 border border-ivory-400 rounded-sm focus:border-navy-900 focus:bg-white text-charcoal-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                        className={`w-full px-3 py-2 text-xs bg-ivory-100 border rounded-sm focus:border-navy-900 focus:bg-white text-charcoal-900 ${
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
                        className={`w-full px-3 py-2 text-xs bg-ivory-100 border rounded-sm focus:border-navy-900 focus:bg-white text-charcoal-900 ${
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Practice Area */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-navy-950">
                        Subject Practice Area
                      </label>
                      <select
                        value={formData.practiceArea}
                        onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                        className="w-full px-3 py-2 text-xs bg-ivory-100 border border-ivory-400 rounded-sm focus:border-navy-900 text-charcoal-900"
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
                        className="w-full px-3 py-2 text-xs bg-ivory-100 border border-ivory-400 rounded-sm focus:border-navy-900 text-charcoal-900"
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
                      className={`w-full px-3 py-2 text-xs bg-ivory-100 border rounded-sm focus:border-navy-900 focus:bg-white text-charcoal-900 ${
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

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full sm:w-auto px-8 py-3.5 text-xs uppercase tracking-wider font-semibold bg-navy-900 text-white hover:bg-gold-600 transition-colors rounded-sm shadow-sm disabled:opacity-70"
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
