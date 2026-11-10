"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Send,
  Navigation,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { COMPANY_INFO, createWhatsAppLink } from "@/lib/constants";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [eventType, setEventType] = useState("Wedding");
  const [userMsg, setUserMsg] = useState("");

  const handleQuickSend = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `Salibonani JS Events!\n\n`;
    if (name) text += `My Name: ${name}\n`;
    text += `Event Type: ${eventType}\n`;
    if (userMsg) text += `Message: ${userMsg}\n`;
    text += `\nPlease get back to me with details. Thank you!`;
    window.open(createWhatsAppLink(text), "_blank");
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 border border-emerald-300 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
            Let's Talk Events
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-slate-900 tracking-tight">
            Contact JS Events Today
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Have a date in mind or need equipment hire? We are based at Mavondo Rd, Nkulumane 12, Bulawayo. Reach us directly on WhatsApp or give us a phone call anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* WhatsApp Card */}
            <a
              href={createWhatsAppLink("Salibonani JS Events! I am contacting you from your website.")}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-2xl bg-emerald-50 border border-emerald-200 hover:border-emerald-400 hover:shadow-lg transition-all duration-200 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-600 text-white rounded-xl shadow-md group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                      Official WhatsApp
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  </div>
                  <h4 className="text-xl font-black text-slate-900 mt-0.5">
                    {COMPANY_INFO.phoneDisplay}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Instant chats, photos of setups, quote breakdowns & bookings.
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 mt-2.5 group-hover:underline">
                    Tap to open WhatsApp chat &rarr;
                  </span>
                </div>
              </div>
            </a>

            {/* Direct Phone Call Card */}
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="block p-6 rounded-2xl bg-[#FAF8F5] border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all duration-200 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-900 text-amber-400 rounded-xl group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Direct Phone Call
                  </span>
                  <h4 className="text-xl font-black text-slate-900 mt-0.5">
                    {COMPANY_INFO.phoneDisplay}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Speak directly with our event manager for urgent requests or consultations.
                  </p>
                </div>
              </div>
            </a>

            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-500 text-slate-950 rounded-xl">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Location & Warehouse
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 mt-0.5">
                    {COMPANY_INFO.address}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Conveniently located in Nkulumane 12. Equipment pickup or direct on-site delivery available.
                  </p>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 flex items-center gap-4">
              <Clock className="w-6 h-6 text-amber-400 shrink-0" />
              <div>
                <h5 className="font-bold text-sm text-amber-300">Working Hours</h5>
                <p className="text-xs text-slate-300 mt-0.5">
                  {COMPANY_INFO.operatingHours}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Interactive Direct Message Form & Service Coverage */}
          <div className="lg:col-span-7 bg-[#FAF8F5] border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm">
            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2">
              Send a Quick Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Fill in this short form and it will prepare a pre-filled WhatsApp message directly to our team.
            </p>

            <form onSubmit={handleQuickSend} className="space-y-4">
              <div>
                <label htmlFor="contactFullNameInput" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <input
                  id="contactFullNameInput"
                  aria-label="Full Name"
                  type="text"
                  placeholder="e.g. Tendai Moyo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label htmlFor="contactEventCategorySelect" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Event Category
                </label>
                <select
                  id="contactEventCategorySelect"
                  aria-label="Event Category"
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="Wedding Decor & Catering">Wedding Decor & Catering</option>
                  <option value="Lobola / Traditional Setup">Lobola / Traditional Setup</option>
                  <option value="Equipment Hire (Tents, Chairs, Tables, Chafers)">Equipment Hire Only</option>
                  <option value="Birthday / Milestone Celebration">Birthday / Milestone Celebration</option>
                  <option value="Graduation Ceremony">Graduation Ceremony</option>
                  <option value="Memorial / Funeral Support">Memorial / Funeral Support</option>
                  <option value="Corporate / Church Conference">Corporate / Church Conference</option>
                  <option value="Other Custom Event">Other Custom Event</option>
                </select>
              </div>

              <div>
                <label htmlFor="contactBriefMessageTextarea" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Brief Message / Questions
                </label>
                <textarea
                  id="contactBriefMessageTextarea"
                  aria-label="Brief Message or Questions"
                  rows={3}
                  placeholder="Tell us what you need, estimated guest count, or date..."
                  value={userMsg}
                  onChange={(e) => setUserMsg(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-6 rounded-xl shadow-md text-sm transition transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Open in WhatsApp & Send Message</span>
              </button>
            </form>

            {/* Bulawayo Service Coverage Pills */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Navigation className="w-3.5 h-3.5 text-amber-600" />
                Delivery & Rigging Across Bulawayo:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {COMPANY_INFO.serviceAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="bg-white border border-slate-200 text-slate-700 text-[11px] font-medium px-2.5 py-1 rounded-md"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
