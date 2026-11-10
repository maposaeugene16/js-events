"use client";

import React, { useState } from "react";
import {
  Calculator,
  MessageCircle,
  Calendar,
  Users,
  MapPin,
  CheckSquare,
  Square,
  Sparkles,
  Send,
  HelpCircle,
} from "lucide-react";
import { COMPANY_INFO, createWhatsAppLink } from "@/lib/constants";

export default function QuoteCalculator() {
  const [eventType, setEventType] = useState("Wedding");
  const [guestCount, setGuestCount] = useState(100);
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [notes, setNotes] = useState("");

  const [selectedItems, setSelectedItems] = useState<{ [key: string]: boolean }>({
    "Full Decor & Stage Setup": true,
    "Full Gourmet Catering (Chafing Dishes included)": true,
    "Stretch Tent / Cabana Tent": true,
    "Black Plastic Chairs": true,
    "White Chair Bags / Covers": true,
    "Banquet Tables": true,
    "Stainless Steel Chafing Dishes Hire Only": false,
    "Red Carpet / Aisle Runner": false,
  });

  const toggleItem = (name: string) => {
    setSelectedItems((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const eventTypes = [
    "Wedding",
    "Lobola / Traditional Ceremony",
    "Birthday / Milestone Party",
    "Memorial / Funeral",
    "Graduation Ceremony",
    "Corporate / Conference",
    "Equipment Hire Only",
  ];

  const bulawayoSuburbs = [
    "Nkulumane",
    "Pumula",
    "Luveve",
    "Tshabalala",
    "Entumbane",
    "Cowdray Park",
    "Emganwini",
    "Hillside",
    "Suburbs",
    "Matsheumhlope",
    "Burnside",
    "Khumalo",
    "Newton West",
    "Other Bulawayo Area",
  ];

  const buildQuoteMessage = () => {
    const chosenServices = Object.entries(selectedItems)
      .filter(([_, checked]) => checked)
      .map(([name]) => `  • ${name}`)
      .join("\n");

    let message = `Salibonani JS Events! I would like to request an official quote from your website:\n\n`;
    if (customerName) message += `👤 *Client Name:* ${customerName}\n`;
    if (customerPhone) message += `📞 *Phone:* ${customerPhone}\n`;
    message += `🎉 *Event Type:* ${eventType}\n`;
    message += `👥 *Estimated Guests:* ${guestCount}\n`;
    if (eventDate) message += `📅 *Date of Event:* ${eventDate}\n`;
    if (eventLocation) message += `📍 *Location / Suburb:* ${eventLocation}\n`;
    message += `\n📋 *Services & Equipment Required:*\n${chosenServices || "  • Custom request"}\n`;
    if (notes) message += `\n📝 *Additional Notes:* ${notes}\n`;
    message += `\nPlease let me know your availability and full quote breakdown. Siyabonga / Tinotenda!`;

    return message;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = buildQuoteMessage();
    window.open(createWhatsAppLink(msg), "_blank");
  };

  return (
    <section id="quote" className="py-20 sm:py-28 bg-slate-950 text-white relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-amber-500/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-400/40 text-amber-300 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-amber-400" />
            Fast & Free Event Quotation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight">
            Plan Your Event with <span className="gold-gradient-text">JS Events</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Select your event details, guest count, and required equipment. Click one button to send your exact requirements straight to our WhatsApp team for an instant customized quote!
          </p>
        </div>

        {/* Quotation Form Container */}
        <div className="max-w-4xl mx-auto bg-slate-900/90 border border-amber-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur">
          <form onSubmit={handleWhatsAppSubmit} className="space-y-8">
            {/* 1. Event Type & Guest Count */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center text-xs font-black">
                  1
                </span>
                Event Type & Guest Capacity
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 mb-6">
                {eventTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setEventType(type)}
                    className={`p-3 rounded-xl text-xs sm:text-sm font-semibold transition border text-left ${
                      eventType === type
                        ? "bg-amber-500 text-slate-950 border-amber-400 shadow-md font-bold"
                        : "bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-500"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              {/* Guests Slider */}
              <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="guestCountInput" className="text-xs sm:text-sm font-medium text-slate-300 flex items-center gap-2">
                    <Users className="w-4 h-4 text-amber-400" />
                    Estimated Guest Attendance:
                  </label>
                  <span className="text-base sm:text-lg font-bold text-amber-400">
                    {guestCount} Guests
                  </span>
                </div>
                <input
                  id="guestCountInput"
                  aria-label="Estimated Guest Attendance"
                  type="range"
                  min="20"
                  max="1000"
                  step="10"
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-700 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>20 (Intimate)</span>
                  <span>100 (Standard)</span>
                  <span>300 (Large)</span>
                  <span>500+ (Grand Banquet)</span>
                </div>
              </div>
            </div>

            {/* 2. Equipment & Services Checklist */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center text-xs font-black">
                  2
                </span>
                Select Services & Equipment Needed
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.keys(selectedItems).map((name) => {
                  const isChecked = selectedItems[name];
                  return (
                    <div
                      key={name}
                      onClick={() => toggleItem(name)}
                      className={`p-3.5 rounded-xl border cursor-pointer transition flex items-center gap-3 ${
                        isChecked
                          ? "bg-emerald-950/40 border-emerald-500/70 text-white"
                          : "bg-slate-800/50 border-slate-700 text-slate-400 hover:border-slate-600"
                      }`}
                    >
                      {isChecked ? (
                        <CheckSquare className="w-5 h-5 text-emerald-400 shrink-0" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-500 shrink-0" />
                      )}
                      <span className="text-xs sm:text-sm font-medium">{name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. Event Logistics & Contact Info */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center text-xs font-black">
                  3
                </span>
                Event Date & Location in Bulawayo
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="quoteDateInput" className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    Target Event Date
                  </label>
                  <input
                    id="quoteDateInput"
                    aria-label="Target Event Date"
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label htmlFor="quoteSuburbSelect" className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    Location / Suburb in Bulawayo
                  </label>
                  <select
                    id="quoteSuburbSelect"
                    aria-label="Location or Suburb in Bulawayo"
                    value={eventLocation}
                    onChange={(e) => setEventLocation(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="">Select Suburb / Area...</option>
                    {bulawayoSuburbs.map((sub) => (
                      <option key={sub} value={sub}>
                        {sub}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="quoteNameInput" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="quoteNameInput"
                    aria-label="Your Name"
                    type="text"
                    placeholder="e.g. Sipho Sibanda"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label htmlFor="quotePhoneInput" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Phone / WhatsApp Number
                  </label>
                  <input
                    id="quotePhoneInput"
                    aria-label="Your Phone or WhatsApp Number"
                    type="text"
                    placeholder="e.g. 077 123 4567"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="quoteSpecialRequestsTextarea" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Special Requests / Specific Menu Ideas
                </label>
                <textarea
                  id="quoteSpecialRequestsTextarea"
                  aria-label="Special Requests or Specific Menu Ideas"
                  rows={2}
                  placeholder="e.g., We need roadrunner chicken, 200 black chairs with white chair bags, and a 6x9 cabana tent..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400 text-center sm:text-left">
                Direct connection to JS Events official WhatsApp:{" "}
                <strong className="text-emerald-400">{COMPANY_INFO.phoneDisplay}</strong>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-emerald-500/40 text-base transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Send Quote Request on WhatsApp</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
