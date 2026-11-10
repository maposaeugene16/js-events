"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  MapPin,
  Calendar,
  Sparkles,
} from "lucide-react";
import { COMPANY_INFO, createWhatsAppLink } from "@/lib/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Equipment Hire", href: "#equipment" },
    { name: "Catering Menus", href: "#catering" },
    { name: "Event Gallery", href: "#gallery" },
    { name: "Get a Quote", href: "#quote" },
    { name: "Why Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top Banner Bar */}
      <div className="bg-[#0A0A0A] text-slate-200 text-xs py-2 px-4 border-b border-[#F16738]/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1 text-[#F16738] font-bold">
              <MapPin className="w-3.5 h-3.5" />
              {COMPANY_INFO.address}
            </span>
            <span className="hidden md:inline text-slate-600">•</span>
            <span className="bg-[#F16738]/20 text-[#FF8257] px-2 py-0.5 rounded-full font-bold text-[10px] uppercase tracking-wider border border-[#F16738]/40">
              We Make It Happen
            </span>
            <span className="hidden lg:inline text-slate-300 text-[11px]">
              Any event that needs decor & catering, trust JS Events!
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="hover:text-[#FF8257] flex items-center gap-1 transition text-[11px] font-medium"
            >
              <Phone className="w-3 h-3 text-[#F16738]" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>
            <span className="text-slate-700">|</span>
            <a
              href={createWhatsAppLink("Hello JS Events! I saw your 'We Make It Happen' website and would like to inquire about your decor and catering.")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-bold text-[11px] transition"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0C0C0C]/95 backdrop-blur-md shadow-2xl py-3 border-b border-[#F16738]/40"
            : "bg-[#0A0A0A]/90 backdrop-blur-sm py-4 border-b border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-[#F16738] shadow-brand group-hover:scale-105 transition-transform duration-300 bg-white">
              <Image
                src="/images/logo.jpg"
                alt="JS Events Logo - We Make It Happen"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-xl sm:text-2xl font-black tracking-wide text-white group-hover:text-[#F16738] transition-colors">
                  JS EVENTS
                </span>
                <span className="bg-gradient-to-r from-[#F16738] to-[#DC5424] text-white font-black text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                  Bulawayo
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] font-bold text-[#FF8257] tracking-wider uppercase flex items-center gap-1">
                <span>We Make It Happen</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-300 font-normal normal-case">Decor & Catering</span>
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-200 hover:text-[#FF8257] px-3 py-2 rounded-lg transition-colors hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={createWhatsAppLink("Salibonani JS Events! I am looking for decor and catering services in Bulawayo.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-full shadow-lg hover:shadow-emerald-500/30 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <a
              href="#quote"
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#F16738] to-[#DC5424] hover:from-[#FF8257] hover:to-[#F16738] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full shadow-brand hover:shadow-brand-lg transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Instant Quote</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={createWhatsAppLink("Salibonani JS Events!")}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-emerald-600 text-white rounded-full sm:hidden"
              aria-label="WhatsApp JS Events"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-white rounded-lg hover:bg-white/10"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#F16738]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0C0C0C] border-b border-[#F16738]/30 px-4 pt-3 pb-6 animate-in slide-in-from-top-3">
            <div className="mb-3 px-3 py-2 rounded-xl bg-[#F16738]/10 border border-[#F16738]/30 flex items-center justify-between">
              <span className="text-xs font-bold text-[#FF8257] uppercase tracking-wider">
                Our Theme:
              </span>
              <span className="text-xs font-black text-white italic">
                &ldquo;We Make It Happen&rdquo;
              </span>
            </div>

            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-medium text-slate-200 hover:text-[#F16738] px-3 py-2.5 rounded-lg hover:bg-white/5 transition"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800 space-y-2.5">
              <a
                href={createWhatsAppLink("Salibonani JS Events! I would like to get a quote.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 rounded-xl shadow-md text-sm"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp (+263 775 126 513)</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 bg-[#1A1A1A] hover:bg-[#252525] text-[#FF8257] font-semibold py-2.5 rounded-xl text-sm border border-[#F16738]/30"
              >
                <Phone className="w-4 h-4" />
                <span>Call {COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
