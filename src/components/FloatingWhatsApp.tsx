"use client";

import React, { useState } from "react";
import { MessageCircle, X, Send, Phone, Clock, MapPin, CheckCheck } from "lucide-react";
import { COMPANY_INFO, createWhatsAppLink } from "@/lib/constants";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState("");

  const quickOptions = [
    {
      label: "💍 Wedding Decor & Catering",
      msg: "Hello JS Events! I am planning a wedding and would love to get a quote for decor and catering.",
    },
    {
      label: "🎉 Lobola / Traditional Ceremony",
      msg: "Hello JS Events! I need decor, stretch tent, and traditional catering for an upcoming Lobola ceremony.",
    },
    {
      label: "🎪 Equipment Hire (Tents, Chairs, Chafers)",
      msg: "Hello JS Events! I want to inquire about hiring equipment (tents, chairs, chair bags, tables, chafing dishes).",
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
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-slate-900 p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur flex items-center justify-center font-bold text-lg text-amber-300 border border-amber-300/40">
                    JS
                  </div>
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full"></span>
                </div>
                <div>
                  <h4 className="font-bold text-base leading-tight">JS Events Official</h4>
                  <p className="text-xs text-emerald-100 flex items-center gap-1">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></span>
                    Online | Typically replies instantly
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
            <div className="mt-2 text-xs text-emerald-100/90 flex items-center gap-2 pt-2 border-t border-emerald-500/40">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>Mavondo Rd, Nkulumane 12, Bulawayo</span>
            </div>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-[#ECE5DD] max-h-[380px] overflow-y-auto space-y-3">
            {/* Business Welcome Bubble */}
            <div className="bg-white rounded-2xl rounded-tl-sm p-3 shadow-sm text-sm text-slate-800 max-w-[88%] border border-slate-100">
              <p className="font-semibold text-emerald-800 mb-1 flex items-center justify-between">
                <span>JS Events Team</span>
                <span className="text-[10px] text-slate-400 font-normal">Now</span>
              </p>
              <p className="leading-relaxed">
                Salibonani! Welcome to JS Events. Any event that needs decor and catering, you can trust us — we are the best in Bulawayo!
              </p>
              <p className="mt-1.5 text-xs text-slate-600">
                How can we assist you today? Tap an option below or type your custom request:
              </p>
              <div className="flex justify-end items-center gap-1 text-[10px] text-slate-400 mt-1">
                <span>100% Free Consultation</span>
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
                  className="block w-full text-left text-xs bg-white hover:bg-amber-50 hover:border-amber-400 text-slate-800 hover:text-amber-900 font-medium py-2 px-3 rounded-xl border border-slate-200 shadow-sm transition-all duration-150"
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
                placeholder="Type your event message..."
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                className="flex-1 text-xs sm:text-sm bg-slate-100 border border-slate-300 rounded-full px-3.5 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-800"
              />
              <button
                type="submit"
                disabled={!customMsg.trim()}
                className="p-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-white rounded-full transition shadow-md"
                title="Send message on WhatsApp"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-100">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center gap-1 text-emerald-700 hover:underline font-semibold"
              >
                <Phone className="w-3 h-3" />
                Call: {COMPANY_INFO.phoneDisplay}
              </a>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" /> 7am - 8pm Daily
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <div className="flex items-center gap-3">
        {!isOpen && (
          <div className="hidden sm:flex items-center bg-white/95 backdrop-blur px-3 py-1.5 rounded-full shadow-lg border border-emerald-200 text-xs font-semibold text-emerald-900 animate-bounce duration-1000">
            <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-ping"></span>
            Chat with JS Events on WhatsApp
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative p-4 rounded-full text-white shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center ${
            isOpen
              ? "bg-slate-800 hover:bg-slate-900 rotate-90"
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
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500 text-[9px] font-bold text-white items-center justify-center">
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
