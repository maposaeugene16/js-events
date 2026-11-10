"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, MessageCircle, Sparkles, ArrowUpRight, Flame } from "lucide-react";
import { EVENT_SERVICES, createWhatsAppLink } from "@/lib/constants";

export default function Services() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredServices =
    activeTab === "all"
      ? EVENT_SERVICES
      : EVENT_SERVICES.filter((s) => s.id === activeTab);

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#FAF7F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#F16738]/10 text-[#DC5424] border border-[#F16738]/30 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Flame className="w-3.5 h-3.5 text-[#F16738] fill-[#F16738]" />
            Exceptional Event Services • We Make It Happen
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#0A0A0A] tracking-tight">
            Crafting Unrivaled Experiences for Every Milestone
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Whether you are planning an extravagant wedding, a sacred lobola ceremony, a joyous graduation,
            or honoring a loved one at a memorial — our decor stylists and catering chefs ensure flawless execution.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeTab === "all"
                ? "bg-[#0A0A0A] text-white shadow-md"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            All Services
          </button>
          {EVENT_SERVICES.map((serv) => (
            <button
              key={serv.id}
              onClick={() => setActiveTab(serv.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === serv.id
                  ? "bg-[#F16738] text-white shadow-brand font-bold"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {serv.title}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#F16738]/60 transition-all duration-300 flex flex-col"
            >
              {/* Image Banner */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                <Image
                  src={service.image}
                  alt={`${service.title} Decor and Catering Bulawayo`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/30 to-transparent" />
                <span className="absolute top-4 right-4 bg-[#F16738] text-white text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-brand">
                  {service.badge}
                </span>
                <h3 className="absolute bottom-4 left-4 right-4 font-serif text-2xl font-bold text-white leading-snug drop-shadow-md">
                  {service.title}
                </h3>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    {service.fullDesc}
                  </p>

                  <div className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Package Inclusions:
                    </p>
                    {service.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                        <Check className="w-4 h-4 text-[#F16738] shrink-0 font-bold" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* WhatsApp Inquire CTA */}
                <div className="pt-4 border-t border-slate-100">
                  <a
                    href={createWhatsAppLink(
                      `Hello JS Events! I am inquiring about your ${service.title} services. As your theme says 'We Make It Happen', could you please share packages and availability?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#0A0A0A] hover:bg-[#F16738] text-white font-semibold py-3 px-4 rounded-xl text-xs sm:text-sm transition-colors duration-200 group-hover:bg-[#F16738] shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Inquire on WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4 ml-0.5 opacity-70 group-hover:opacity-100" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Trust Message */}
        <div className="mt-16 bg-gradient-to-r from-[#0C0C0C] via-[#1A1A1A] to-[#0C0C0C] rounded-3xl p-8 sm:p-10 text-white border border-[#F16738]/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-[#FF8257] uppercase tracking-wider block mb-1">
              Your Vision, Our Expertise
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-black text-white">
              Planning a Custom Celebration? <span className="text-[#F16738]">We Make It Happen!</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
              From intimate family dinners and baby showers to large corporate banquets and church conventions in Bulawayo — no event is too small or too grand.
            </p>
          </div>
          <a
            href={createWhatsAppLink("Salibonani JS Events! I have a unique event idea and I know you make it happen. Can we discuss?")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-gradient-to-r from-[#F16738] to-[#DC5424] hover:from-[#FF8257] hover:to-[#F16738] text-white font-bold px-7 py-3.5 rounded-full shadow-brand hover:shadow-brand-lg transition transform hover:-translate-y-0.5 flex items-center gap-2 text-sm sm:text-base"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Tell Us About Your Event</span>
          </a>
        </div>
      </div>
    </section>
  );
}
