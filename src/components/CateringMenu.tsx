"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  UtensilsCrossed,
  CheckCircle,
  MessageCircle,
  Flame,
  Award,
  Users,
  Sparkles,
} from "lucide-react";
import { CATERING_PACKAGES, createWhatsAppLink } from "@/lib/constants";

export default function CateringMenu() {
  const [selectedPkgIndex, setSelectedPkgIndex] = useState(0);
  const activePkg = CATERING_PACKAGES[selectedPkgIndex];

  return (
    <section id="catering" className="py-20 sm:py-28 bg-[#F4EDE4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-200/80 text-amber-950 border border-amber-300 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <UtensilsCrossed className="w-3.5 h-3.5 text-amber-800" />
            Culinary Excellence
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-slate-900 tracking-tight">
            Exquisite Catering That Delights Every Guest
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
            From authentic Zimbabwean traditional feasts (Sadza rezviyo, roadrunner chicken & beef stew) to lavish 3-course wedding buffets. Kept steaming hot in our stainless chafing dishes and served with warm Bulawayo hospitality.
          </p>
        </div>

        {/* Visual Showcase Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="relative h-64 rounded-2xl overflow-hidden shadow-md group">
            <Image
              src="/images/catering-buffet-chefs.png"
              alt="Professional chefs serving hot catering buffet Bulawayo"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Professional Catering
                </span>
                <h4 className="text-white font-serif text-lg font-bold">Hot Chafing Dish Buffets</h4>
              </div>
            </div>
          </div>

          <div className="relative h-64 rounded-2xl overflow-hidden shadow-md group">
            <Image
              src="/images/catering-fresh-salads.png"
              alt="Fresh vibrant gourmet salads JS Events"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Farm-Fresh Ingredients
                </span>
                <h4 className="text-white font-serif text-lg font-bold">Crisp Gourmet Salads & Sides</h4>
              </div>
            </div>
          </div>

          <div className="relative h-64 rounded-2xl overflow-hidden shadow-md group">
            <Image
              src="/images/catering-outdoor-service.png"
              alt="Outdoor event catering service in Bulawayo"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Trained Waitstaff
                </span>
                <h4 className="text-white font-serif text-lg font-bold">Seamless Outdoor & Hall Dining</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Menu Package Showcase */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-amber-200/60 shadow-xl">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Package Selector Tabs */}
            <div className="w-full lg:w-1/3 space-y-3">
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-600" />
                Featured Menu Styles
              </h3>

              {CATERING_PACKAGES.map((pkg, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPkgIndex(idx)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-200 border ${
                    selectedPkgIndex === idx
                      ? "bg-slate-900 text-white border-amber-400 shadow-lg"
                      : "bg-[#FAF8F5] text-slate-700 hover:bg-slate-100 border-slate-200"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm sm:text-base font-serif">
                      {pkg.name}
                    </span>
                    {selectedPkgIndex === idx && (
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                    )}
                  </div>
                  <div className={`text-xs mt-1 ${selectedPkgIndex === idx ? "text-amber-200" : "text-slate-500"}`}>
                    {pkg.bestFor}
                  </div>
                </button>
              ))}

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 mt-6">
                <h5 className="font-bold text-xs text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  Custom Menus Available
                </h5>
                <p className="text-xs text-amber-800/90 mt-1.5 leading-relaxed">
                  Have specific dietary needs (Halal, vegetarian, braai spit roast)? We create custom culinary experiences tailored to your budget and guest count.
                </p>
              </div>
            </div>

            {/* Selected Package Details */}
            <div className="w-full lg:w-2/3 bg-[#FAF8F5] rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-200">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                      Ideal For: {activePkg.bestFor}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                      {activePkg.name}
                    </h3>
                  </div>
                  <div className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1.5 rounded-full">
                    Includes Stainless Chafing Dishes
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                    Sample Courses & Dishes:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {activePkg.dishes.map((dish, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200/70 shadow-sm"
                      >
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-medium text-slate-800">
                          {dish}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-white border border-amber-300/50 flex items-center gap-3">
                  <Award className="w-5 h-5 text-amber-600 shrink-0" />
                  <p className="text-xs sm:text-sm text-slate-700 font-medium">
                    <strong className="text-slate-900">JS Events Quality Standard: </strong>
                    {activePkg.highlight}
                  </p>
                </div>
              </div>

              {/* WhatsApp Inquiry for this Menu */}
              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-500">
                  Contact JS Events directly for per-plate or group catering rates.
                </div>
                <a
                  href={createWhatsAppLink(
                    `Hello JS Events! I am interested in your catering services for "${activePkg.name}". Could you share price per plate and menu variations?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl shadow-md text-sm transition transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Request Menu & Prices on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
