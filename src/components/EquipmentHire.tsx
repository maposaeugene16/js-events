"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MessageCircle,
  Plus,
  Minus,
  CheckCircle,
  ShoppingBag,
  Send,
  Flame,
} from "lucide-react";
import { EQUIPMENT_HIRE_ITEMS, COMPANY_INFO, createWhatsAppLink } from "@/lib/constants";

export default function EquipmentHire() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [cart, setCart] = useState<{ [itemId: string]: number }>({});

  const categories = ["All", "Tents", "Chairs", "Linens & Covers", "Tables", "Catering Equipment", "Tableware"];

  const filteredItems =
    selectedCategory === "All"
      ? EQUIPMENT_HIRE_ITEMS
      : EQUIPMENT_HIRE_ITEMS.filter((item) => item.category === selectedCategory);

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      if (next === 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: next };
    });
  };

  const totalItemsCount = Object.values(cart).reduce((a, b) => a + b, 0);

  const generateCartWhatsAppMessage = () => {
    let msg = `Salibonani JS Events! I saw your 'We Make It Happen' website and would like to hire equipment in Bulawayo:\n\n`;
    Object.entries(cart).forEach(([id, qty]) => {
      const item = EQUIPMENT_HIRE_ITEMS.find((it) => it.id === id);
      if (item && qty > 0) {
        msg += `• ${item.name} - Qty: ${qty}\n`;
      }
    });
    msg += `\nPlease let me know availability and pricing for delivery in Bulawayo. Thank you!`;
    return createWhatsAppLink(msg);
  };

  return (
    <section id="equipment" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#F16738]/10 text-[#DC5424] border border-[#F16738]/30 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Flame className="w-3.5 h-3.5 text-[#F16738] fill-[#F16738]" />
            Equipment Hire & Rental • We Make It Happen
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#0A0A0A] tracking-tight">
            Premium Party & Event Equipment for Hire
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            From heavy-duty <strong className="text-slate-900">black plastic chairs</strong> and elegant{" "}
            <strong className="text-slate-900">white chair bags</strong> to modern{" "}
            <strong className="text-slate-900">stretch tents</strong>,{" "}
            <strong className="text-slate-900">cabana tents</strong>, banquet tables, and{" "}
            <strong className="text-slate-900">stainless chafing dishes</strong>. All delivered clean, sanitized, and ready for your celebration.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-[#F16738] text-white shadow-brand font-bold"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Equipment Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => {
            const quantity = cart[item.id] || 0;
            return (
              <div
                key={item.id}
                className="bg-[#FAF7F5] rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#F16738]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                    <Image
                      src={item.image}
                      alt={`${item.name} Hire Bulawayo`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <span className="absolute top-3 left-3 bg-[#0A0A0A]/85 backdrop-blur text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-white/10">
                      {item.category}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-4 sm:p-5">
                    <h3 className="font-serif font-bold text-lg text-[#0A0A0A] leading-snug mb-2">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="space-y-1.5 mb-4">
                      {item.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-700">
                          <CheckCircle className="w-3.5 h-3.5 text-[#F16738] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-4 pt-0 border-t border-slate-200/60 mt-auto">
                  <div className="flex items-center justify-between gap-2 pt-3">
                    {/* Quantity Selector */}
                    <div className="flex items-center border border-slate-300 rounded-lg bg-white overflow-hidden shadow-sm">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="px-2.5 py-1.5 hover:bg-slate-100 text-slate-600 transition"
                        title="Decrease"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-2.5 py-1 text-xs font-bold text-slate-800 min-w-[28px] text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="px-2.5 py-1.5 hover:bg-slate-100 text-slate-600 transition"
                        title="Increase"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5 text-[#F16738]" />
                      </button>
                    </div>

                    {/* Direct Item WhatsApp Button */}
                    <a
                      href={createWhatsAppLink(
                        `Salibonani JS Events! I saw your 'We Make It Happen' hire list and want to book ${item.name} in Bulawayo.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs bg-[#0A0A0A] hover:bg-[#F16738] text-white font-semibold px-3 py-2 rounded-lg transition shadow-sm"
                      title="Hire via WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Hire</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating Cart Banner when items are selected */}
        {totalItemsCount > 0 && (
          <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-40 w-11/12 max-w-2xl bg-[#0A0A0A] text-white p-4 rounded-2xl shadow-2xl border-2 border-[#F16738] flex flex-col sm:flex-row items-center justify-between gap-4 animate-in slide-in-from-bottom-5">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-[#F16738] rounded-xl text-white font-black shadow-brand">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-[#FF8257]">
                  {totalItemsCount} Equipment Item(s) Selected
                </div>
                <div className="text-xs text-slate-300">
                  Ready to send quotation list directly to JS Events WhatsApp
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href={generateCartWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm shadow-md transition"
              >
                <Send className="w-4 h-4" />
                <span>Request List on WhatsApp</span>
              </a>
              <button
                onClick={() => setCart({})}
                className="text-xs text-slate-400 hover:text-white px-2 py-1"
              >
                Clear
              </button>
            </div>
          </div>
        )}

        {/* Equipment Guarantee Banner */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 p-8 rounded-3xl bg-[#0C0C0C] text-white border border-[#F16738]/30">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#F16738]/20 text-[#FF8257] flex items-center justify-center shrink-0 font-bold text-lg border border-[#F16738]/40">
              ✨
            </div>
            <div>
              <h4 className="font-bold text-base text-[#FF8257]">Spotless Clean Guarantee</h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Every single black chair, white chair bag, table, and chafing dish is thoroughly washed, sanitized, and inspected before delivery.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-bold text-lg border border-emerald-500/30">
              🚚
            </div>
            <div>
              <h4 className="font-bold text-base text-emerald-300">Fast Delivery & Rigging</h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                We deliver to Nkulumane, Bulawayo suburbs, and surrounding Matabeleland areas. Our crew pitches tents and arranges seating securely.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#F16738]/20 text-[#FF8257] flex items-center justify-center shrink-0 font-bold text-lg border border-[#F16738]/40">
              💬
            </div>
            <div>
              <h4 className="font-bold text-base text-[#FF8257]">Instant WhatsApp Booking</h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Need urgent extra chairs or a last minute cabana tent? Reach our team directly on WhatsApp for immediate response.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
