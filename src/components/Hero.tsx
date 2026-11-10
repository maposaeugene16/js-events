"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, Calendar, MapPin, CheckCircle2, Sparkles, ArrowRight, Flame } from "lucide-react";
import { COMPANY_INFO, createWhatsAppLink } from "@/lib/constants";

export default function Hero() {
  const quickCategories = [
    { label: "Weddings", icon: "💍" },
    { label: "Lobola / Cultural", icon: "🎊" },
    { label: "Birthday Bashes", icon: "🎂" },
    { label: "Graduations", icon: "🎓" },
    { label: "Memorials", icon: "🕊️" },
    { label: "Tents & Equipment Hire", icon: "🎪" },
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0A0A0A] text-white">
      {/* Background Image with Dark Vignette & Logo Orange Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/wedding-outdoor-banquet.png"
          alt="JS Events Bulawayo - We Make It Happen"
          fill
          priority
          className="object-cover object-center opacity-25 transform scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#F16738]/20 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center flex flex-col items-center">
        {/* Top Official Motto Badge */}
        <div className="inline-flex items-center gap-2 bg-[#F16738]/15 border border-[#F16738]/50 px-4 py-1.5 rounded-full mb-6 backdrop-blur-md shadow-brand">
          <Flame className="w-4 h-4 text-[#F16738] fill-[#F16738] animate-pulse" />
          <span className="text-xs sm:text-sm font-black tracking-widest text-[#FF8257] uppercase">
            JS Events • We Make It Happen
          </span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#F16738]"></span>
          <span className="hidden sm:inline text-xs text-slate-300 font-medium">Nkulumane 12, Bulawayo</span>
        </div>

        {/* Main Heading with Brand Gradient */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight leading-[1.15] max-w-4xl">
          Whatever Your Dream Celebration,{" "}
          <span className="brand-gradient-text block sm:inline">We Make It Happen</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-base sm:text-xl text-slate-300 max-w-2xl sm:max-w-3xl leading-relaxed">
          Bulawayo's leading specialists for <strong className="text-white font-semibold">Weddings</strong>, authentic{" "}
          <strong className="text-white font-semibold">Lobola ceremonies</strong>, milestone birthdays, graduations, and dignified{" "}
          <strong className="text-white font-semibold">Memorials</strong>. Flawless decor, gourmet catering, and premium equipment hire —{" "}
          <span className="text-[#FF8257] font-semibold italic">trust JS Events, we are the best!</span>
        </p>

        {/* Location & Service Notice */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-slate-400">
          <span className="flex items-center gap-1.5 bg-[#141414] px-3.5 py-1.5 rounded-full border border-slate-800">
            <MapPin className="w-3.5 h-3.5 text-[#F16738]" />
            Mavondo Rd, Nkulumane 12, Bulawayo
          </span>
          <span className="flex items-center gap-1.5 bg-[#141414] px-3.5 py-1.5 rounded-full border border-slate-800">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            Stretch Tents, Cabana Tents & Chair Hire
          </span>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href={createWhatsAppLink("Salibonani JS Events! I'm planning an event in Bulawayo and need your 'We Make It Happen' decor and catering service.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-emerald-500/40 text-base sm:text-lg transition-all duration-200 transform hover:-translate-y-1"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Chat on WhatsApp (+263 775 126 513)</span>
          </a>

          <a
            href="#quote"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#F16738] to-[#DC5424] hover:from-[#FF8257] hover:to-[#F16738] text-white font-bold px-8 py-4 rounded-full shadow-brand hover:shadow-brand-lg text-base sm:text-lg transition-all duration-200 transform hover:-translate-y-1"
          >
            <Calendar className="w-5 h-5" />
            <span>Instant Quote Calculator</span>
          </a>

          <a
            href="#equipment"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#171717] hover:bg-[#222222] text-slate-200 hover:text-white font-semibold px-6 py-4 rounded-full border border-slate-800 hover:border-[#F16738]/50 text-sm sm:text-base transition-all duration-200"
          >
            <span>Hire Equipment</span>
            <ArrowRight className="w-4 h-4 text-[#F16738]" />
          </a>
        </div>

        {/* Quick event pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 max-w-3xl">
          {quickCategories.map((cat, idx) => (
            <a
              key={idx}
              href="#services"
              className="bg-white/5 hover:bg-[#F16738]/15 border border-white/10 hover:border-[#F16738]/40 px-3.5 py-1.5 rounded-full text-xs sm:text-sm text-slate-300 hover:text-[#FF8257] transition-colors flex items-center gap-1.5"
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </a>
          ))}
        </div>

        {/* Trust Metric Counter Bar */}
        <div className="mt-14 w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-slate-800/80">
          <div className="p-4 rounded-xl bg-[#121212] border border-slate-800/80 backdrop-blur">
            <div className="text-2xl sm:text-3xl font-black text-[#F16738] font-serif">500+</div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">Events Made Memorable</div>
          </div>
          <div className="p-4 rounded-xl bg-[#121212] border border-slate-800/80 backdrop-blur">
            <div className="text-2xl sm:text-3xl font-black text-white font-serif">100%</div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">On-Time Setup Guarantee</div>
          </div>
          <div className="p-4 rounded-xl bg-[#121212] border border-slate-800/80 backdrop-blur">
            <div className="text-2xl sm:text-3xl font-black text-[#F16738] font-serif">1,000+</div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">Chairs, Tents & Chafers</div>
          </div>
          <div className="p-4 rounded-xl bg-[#121212] border border-slate-800/80 backdrop-blur">
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-serif">5 ★★★★★</div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">Bulawayo Trusted Team</div>
          </div>
        </div>
      </div>
    </section>
  );
}
