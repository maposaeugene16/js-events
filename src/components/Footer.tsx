"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Heart,
  ArrowUp,
  Sparkles,
} from "lucide-react";
import { COMPANY_INFO, createWhatsAppLink } from "@/lib/constants";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-amber-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-amber-400">
                <Image
                  src="/images/logo.jpg"
                  alt="JS Events Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-black text-white tracking-wide">
                  JS EVENTS
                </h3>
                <p className="text-[11px] text-amber-300 font-medium">
                  Bulawayo Decor & Catering
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Any event that needs decor and catering, you can trust JS Events — we are the best! Dedicated to delivering unforgettable memories across Bulawayo and Matabeleland.
            </p>

            <div className="pt-2">
              <a
                href={createWhatsAppLink("Salibonani JS Events!")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-md transition"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp: {COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-base text-white mb-4 border-b border-amber-500/40 pb-1 inline-block">
              Event Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-amber-300 transition">
                  • Dream Weddings & Receptions
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-300 transition">
                  • Lobola & Traditional Feasts
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-300 transition">
                  • Milestone Birthdays & Anniversaries
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-300 transition">
                  • Graduation Ceremonies & Halls
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-300 transition">
                  • Memorials & Funeral Tents
                </a>
              </li>
              <li>
                <a href="#catering" className="hover:text-amber-300 transition">
                  • Gourmet Event Catering
                </a>
              </li>
            </ul>
          </div>

          {/* Equipment Hire */}
          <div>
            <h4 className="font-serif font-bold text-base text-white mb-4 border-b border-amber-500/40 pb-1 inline-block">
              Equipment for Hire
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#equipment" className="hover:text-amber-300 transition">
                  • Sturdy Black Plastic Chairs
                </a>
              </li>
              <li>
                <a href="#equipment" className="hover:text-amber-300 transition">
                  • Luxury White Chair Bags / Covers
                </a>
              </li>
              <li>
                <a href="#equipment" className="hover:text-amber-300 transition">
                  • Bedouin Stretch Tents
                </a>
              </li>
              <li>
                <a href="#equipment" className="hover:text-amber-300 transition">
                  • Heavy-Duty Cabana Tents (6x9)
                </a>
              </li>
              <li>
                <a href="#equipment" className="hover:text-amber-300 transition">
                  • Round & Trestle Banquet Tables
                </a>
              </li>
              <li>
                <a href="#equipment" className="hover:text-amber-300 transition">
                  • Stainless Steel Chafing Dishes
                </a>
              </li>
              <li>
                <a href="#equipment" className="hover:text-amber-300 transition">
                  • Red Carpets, Fairy Lights & Draping
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Hours */}
          <div>
            <h4 className="font-serif font-bold text-base text-white mb-4 border-b border-amber-500/40 pb-1 inline-block">
              Find & Reach Us
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:underline">
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-start gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.operatingHours}</span>
              </div>
            </div>

            <div className="mt-5 p-3 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-[11px] font-bold text-amber-300 block mb-1">
                📍 Serving All Bulawayo:
              </span>
              <p className="text-[10px] text-slate-400">
                Nkulumane, Pumula, Luveve, Tshabalala, Hillside, Suburbs, Matsheumhlope & surrounding areas.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} JS Events Bulawayo. All rights reserved.</p>
          <p className="flex items-center gap-1 text-slate-400">
            Crafted with passion for Bulawayo celebrations
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
