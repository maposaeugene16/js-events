"use client";

import React, { useState } from "react";
import { MessageCircle, X, Send, Phone, Clock, MapPin, CheckCheck, Flame } from "lucide-react";
import { COMPANY_INFO, createWhatsAppLink } from "@/lib/constants";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState("");

  const quickOptions = [
    {
      label: "💍 Wedding Decor & Catering",
      msg: "Hello JS Events! I saw your 'We Make It Happen' website and would love to get a quote for wedding decor and catering.",
    },
    {
      label: "🎉 Lobola / Traditional Ceremony",
      msg: "Hello JS Events! I need decor, stretch tent, and traditional catering for an upcoming Lobola ceremony.",
    },
    {
      label: "🎪 Equipment Hire (Tents, Chairs, Chafers)",
      msg: "Hello JS Events! I want to inquire about hiring equipment (stretch tents, chairs, chair bags, tables, chafing dishes).",
    },
    {
      label: "🎓 Graduation / Birthday Celebration",
      msg: "Hello JS Events! I would like a quote for a graduation/birthday party setup.",
    },
  ];

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customMsg.trim()) return;
    const link = createWhatsAppLink(customMsg);
    window.open(link, "_blank");
    setCustomMsg("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded Chat Box */}
      {isOpen && (
        <div className="mb-4 w-[360px] max-w-[calc(100vw-2rem)] rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-5">
          {/* Header with JS Events Flame Orange & Jet Black Branding */}
          <div className="bg-gradient-to-r from-[#0C0C0C] via-[#1A1A1A] to-[#DC5424] p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-11 h-11 rounded-full bg-[#F16738] flex items-center justify-center font-bold text-lg text-white border-2 border-white/80 shadow-md">
                    JS
                  </div>
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full"></span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-base leading-tight">JS Events</h4>
                    <span className="text-[10px] bg-[#F16738] text-white px-1.5 py-0.2 rounded font-black uppercase">
                      Official
                    </span>
                  </div>
                  <p className="text-[11px] text-[#FF8257] font-bold tracking-wider">
                    We Make It Happen
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white rounded-full p-1 hover:bg-white/10 transition-colors"
                aria-label="Close WhatsApp chat popup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-2 text-xs text-slate-200 flex items-center gap-2 pt-2 border-t border-white/10">
              <MapPin className="w-3.5 h-3.5 text-[#F16738] shrink-0" />
              <span>Mavondo Rd, Nkulumane 12, Bulawayo</span>
            </div>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-[#ECE5DD] max-h-[380px] overflow-y-auto space-y-3">
            {/* Business Welcome Bubble */}
            <div className="bg-white rounded-2xl rounded-tl-sm p-3 shadow-sm text-sm text-slate-800 max-w-[90%] border border-slate-100">
              <p className="font-semibold text-[#DC5424] mb-1 flex items-center justify-between">
                <span className="flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-[#F16738] fill-[#F16738]" />
                  JS Events Team
                </span>
                <span className="text-[10px] text-slate-400 font-normal">Now</span>
              </p>
              <p className="leading-relaxed text-xs sm:text-sm">
                Salibonani! Welcome to JS Events. Our motto is: <strong className="text-[#DC5424]">&ldquo;We Make It Happen&rdquo;</strong>. Any event that needs decor and catering, trust us — we are the best in Bulawayo!
              </p>
              <p className="mt-1.5 text-xs text-slate-600">
                How can we assist you today? Tap an option below or type your inquiry:
              </p>
              <div className="flex justify-end items-center gap-1 text-[10px] text-slate-400 mt-1">
                <span>Free Quote & Advice</span>
                <CheckCheck className="w-3.5 h-3.5 text-emerald-600" />
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="space-y-2 pt-1">
              <p className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider px-1">
                Quick Inquiries:
              </p>
              {quickOptions.map((opt, idx) => (
                <a
                  key={idx}
                  href={createWhatsAppLink(opt.msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-left text-xs bg-white hover:bg-[#FFF4EF] hover:border-[#F16738] text-slate-800 hover:text-[#DC5424] font-medium py-2 px-3 rounded-xl border border-slate-200 shadow-sm transition-all duration-150"
                >
                  {opt.label}
                </a>
              ))}
            </div>
          </div>

          {/* Custom Message Footer */}
          <div className="p-3 bg-white border-t border-slate-200">
            <form onSubmit={handleSendCustom} className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Type your event request..."
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                className="flex-1 text-xs sm:text-sm bg-slate-100 border border-slate-300 rounded-full px-3.5 py-2 focus:outline-none focus:ring-2 focus:ring-[#F16738] text-slate-800"
              />
              <button
                type="submit"
                disabled={!customMsg.trim()}
                className="p-2 bg-[#F16738] hover:bg-[#DC5424] disabled:opacity-40 text-white rounded-full transition shadow-md"
                title="Send message on WhatsApp"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-100">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center gap-1 text-[#DC5424] hover:underline font-bold"
              >
                <Phone className="w-3 h-3 text-[#F16738]" />
                Call: {COMPANY_INFO.phoneDisplay}
              </a>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#F16738]" /> 7am - 8pm Daily
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <div className="flex items-center gap-3">
        {!isOpen && (
          <div className="hidden sm:flex items-center bg-[#0C0C0C]/95 text-white px-3.5 py-1.5 rounded-full shadow-2xl border border-[#F16738]/50 text-xs font-bold animate-bounce duration-1000">
            <span className="w-2 h-2 rounded-full bg-[#F16738] mr-2 animate-ping"></span>
            <span>We Make It Happen • Chat on WhatsApp</span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative p-4 rounded-full text-white shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center ${
            isOpen
              ? "bg-[#0A0A0A] hover:bg-[#181818] rotate-90"
              : "bg-emerald-500 hover:bg-emerald-600 whatsapp-pulse"
          }`}
          aria-label="Open WhatsApp chat"
        >
          {isOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <>
              <MessageCircle className="w-7 h-7 fill-white text-emerald-500" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F16738] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-[#F16738] text-[9px] font-bold text-white items-center justify-center shadow-brand">
                  1
                </span>
              </span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
