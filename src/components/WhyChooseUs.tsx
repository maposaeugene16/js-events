"use client";

import React from "react";
import {
  ShieldCheck,
  Star,
  Clock,
  HeartHandshake,
  Award,
  MapPin,
  CheckCircle2,
  Quote,
  Flame,
} from "lucide-react";
import { TESTIMONIALS, COMPANY_INFO } from "@/lib/constants";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Award className="w-6 h-6 text-[#F16738]" />,
      title: "Bulawayo's Premier Quality",
      description:
        "Any event that needs decor and catering, you can trust JS Events — we are the best! As our theme says, We Make It Happen with passion, elegance, and culinary mastery.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#F16738]" />,
      title: "One-Stop Complete Convenience",
      description:
        "Never juggle three different vendors again. We supply the stretch tents, chairs, chair bags, tables, chafing dishes, stage styling, and full-course catering all in one seamless package.",
    },
    {
      icon: <Clock className="w-6 h-6 text-[#F16738]" />,
      title: "100% Punctual Setup Guarantee",
      description:
        "Timing is everything on your big day. Our experienced rigging and catering crew arrives early, sets up meticulously, and ensures everything is spotless before your first guest arrives.",
    },
    {
      icon: <Flame className="w-6 h-6 text-[#F16738]" />,
      title: "Spotless & Sanitized Equipment",
      description:
        "Every single black plastic chair is thoroughly washed, white chair bags are crisply laundered, and all stainless steel chafing dishes and cutlery are sterilized to food-grade standards.",
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#F16738]" />,
      title: "Local Heart in Nkulumane 12",
      description:
        "Conveniently headquartered on Mavondo Rd, Nkulumane 12, Bulawayo. We provide prompt delivery, setup, and collection across all suburbs and greater Matabeleland.",
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-[#F16738]" />,
      title: "Dignified Care For All Occasions",
      description:
        "Whether it is the joyous celebration of a wedding, the traditional honor of a lobola ceremony, or the solemn respect of a funeral or memorial — we serve your family with warmth and empathy.",
    },
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-[#FAF7F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F16738]/10 text-[#DC5424] border border-[#F16738]/30 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Flame className="w-3.5 h-3.5 text-[#F16738] fill-[#F16738]" />
            The JS Events Promise • We Make It Happen
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#0A0A0A] tracking-tight">
            Why Bulawayo Trusts JS Events
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Planning an event shouldn't be stressful. We combine creative passion, immaculate equipment maintenance, and authentic hospitality so you can relax and celebrate.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#F16738]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FFF4EF] flex items-center justify-center mb-5 border border-[#F16738]/20">
                  {r.icon}
                </div>
                <h3 className="font-serif font-bold text-xl text-[#0A0A0A] mb-2">
                  {r.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {r.description}
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#DC5424]">
                <CheckCircle2 className="w-4 h-4 text-[#F16738]" />
                <span>Verified JS Events Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Client Reviews & Testimonials */}
        <div className="bg-gradient-to-br from-[#0C0C0C] via-[#141414] to-[#0C0C0C] rounded-3xl p-8 sm:p-12 text-white border border-[#F16738]/30 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#FF8257] font-bold text-xs uppercase tracking-wider">
              Real Stories From Bulawayo Families
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-black mt-2 text-white">
              Loved by Our Clients
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((test, index) => (
              <div
                key={index}
                className="bg-[#181818]/80 border border-slate-800 rounded-2xl p-6 relative flex flex-col justify-between backdrop-blur hover:border-[#F16738]/40 transition"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#F16738] mb-3">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F16738]" />
                    ))}
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed italic mb-6">
                    &ldquo;{test.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <h5 className="font-bold text-white text-sm">{test.author}</h5>
                    <p className="text-xs text-[#FF8257]">{test.event}</p>
                  </div>
                  <Quote className="w-8 h-8 text-slate-700" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
