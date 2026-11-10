"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, Calendar, MapPin, Award, CheckCircle2, Sparkles, PhoneCall, ArrowRight } from "lucide-react";
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
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
      {/* Background Image with Dark Vignette & Amber Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/wedding-outdoor-banquet.png"
          alt="JS Events Bulawayo Outdoor Banquet and Decor"
          fill
          priority
          className="object-cover object-center opacity-30 transform scale-105 animate-pulse duration-10000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/15 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center flex flex-col items-center">
        {/* Top Badges */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 via-amber-400/10 to-transparent border border-amber-400/40 px-4 py-1.5 rounded-full mb-6 backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-amber-300">
            Bulawayo's Trusted Event Decor & Catering Specialists
          </span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-amber-400"></span>
          <span className="hidden sm:inline text-xs text-slate-300">Nkulumane 12</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight leading-[1.15] max-w-4xl">
          Turn Your Celebrations Into{" "}
          <span className="gold-gradient-text block sm:inline">Unforgettable Elegance</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-base sm:text-xl text-slate-300 max-w-2xl sm:max-w-3xl leading-relaxed">
          From breathtaking <strong className="text-amber-300 font-semibold">Weddings</strong> and authentic{" "}
          <strong className="text-amber-300 font-semibold">Lobola ceremonies</strong> to dignified{" "}
          <strong className="text-amber-300 font-semibold">Memorials</strong>, birthdays, and graduations. Any event that needs decor and catering,{" "}
          <span className="italic text-amber-200">trust JS Events — we are the best!</span>
        </p>

        {/* Location & Contact Notice */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-slate-400">
          <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1 rounded-full border border-slate-700">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            Mavondo Rd, Nkulumane 12, Bulawayo
          </span>
          <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1 rounded-full border border-slate-700">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            Equipment Hire Available 7 Days a Week
          </span>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href={createWhatsAppLink("Salibonani JS Events! I would like to get a quote for my upcoming event.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-emerald-500/40 text-base sm:text-lg transition-all duration-200 transform hover:-translate-y-1"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Chat on WhatsApp (+263 775 126 513)</span>
          </a>

          <a
            href="#quote"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-8 py-4 rounded-full shadow-gold hover:shadow-gold-lg text-base sm:text-lg transition-all duration-200 transform hover:-translate-y-1"
          >
            <Calendar className="w-5 h-5" />
            <span>Instant Quote Calculator</span>
          </a>

          <a
            href="#equipment"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold px-6 py-4 rounded-full border border-slate-700 hover:border-amber-400/50 text-sm sm:text-base transition-all duration-200"
          >
            <span>Hire Equipment</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Quick event pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 max-w-3xl">
          {quickCategories.map((cat, idx) => (
            <a
              key={idx}
              href="#services"
              className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/40 px-3.5 py-1.5 rounded-full text-xs sm:text-sm text-slate-300 hover:text-amber-300 transition-colors flex items-center gap-1.5"
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </a>
          ))}
        </div>

        {/* Trust Metric Counter Bar */}
        <div className="mt-14 w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-slate-800/80">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur">
            <div className="text-2xl sm:text-3xl font-black text-amber-400 font-serif">500+</div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">Events Catered & Styled</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur">
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-serif">100%</div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">On-Time Setup Guarantee</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur">
            <div className="text-2xl sm:text-3xl font-black text-amber-400 font-serif">1,000+</div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">Chairs, Tents & Chafers</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur">
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-serif">5 ★★★★★</div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">Bulawayo Trusted Team</div>
          </div>
        </div>
      </div>
    </section>
  );
}
