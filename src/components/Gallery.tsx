"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MessageCircle, ZoomIn, X, Sparkles, Filter } from "lucide-react";
import { createWhatsAppLink } from "@/lib/constants";

interface GalleryItem {
  id: string;
  title: string;
  category: "Weddings" | "Lobola" | "Catering" | "Tents & Equipment" | "Parties & Graduations";
  image: string;
  description: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Gold & White Luxury Wedding Reception",
    category: "Weddings",
    image: "/images/wedding-gold-decor.jpg",
    description: "Opulent gold floral centerpieces, crystal candelabras, and draped white chair covers creating an unforgettable fairytale aesthetic.",
  },
  {
    id: "g2",
    title: "Grand Outdoor Banquet Layout",
    category: "Weddings",
    image: "/images/wedding-outdoor-banquet.png",
    description: "Scenic garden layout with round banquet tables, immaculate white linen, and shade canopy setup for over 300 wedding guests.",
  },
  {
    id: "g3",
    title: "Bedouin Stretch Tent for Lobola Ceremony",
    category: "Lobola",
    image: "/images/lobola-stretch-tent.png",
    description: "Dynamic freeform stretch tent setup creating a prestigious and culturally grounded space for traditional family ceremonies.",
  },
  {
    id: "g4",
    title: "Hot Buffet Served in Stainless Chafing Dishes",
    category: "Catering",
    image: "/images/catering-buffet-chefs.png",
    description: "Executive chefs serving steaming hot meats, savory gravies, and traditional specialties in mirror-finish chafers.",
  },
  {
    id: "g5",
    title: "Fresh Gourmet Salad Spread",
    category: "Catering",
    image: "/images/catering-fresh-salads.png",
    description: "Crisp Greek salad, beetroot, coleslaw, and colorful Mediterranean side dishes freshly made on event day.",
  },
  {
    id: "g6",
    title: "Outdoor Catering & White Chair Bag Arrangement",
    category: "Catering",
    image: "/images/catering-outdoor-service.png",
    description: "Our attentive team overseeing outdoor guest dining with comfortable chairs, covers, and continuous buffet replenishing.",
  },
  {
    id: "g7",
    title: "JS Events Culinary & Service Crew",
    category: "Catering",
    image: "/images/catering-team-action.jpg",
    description: "Uniformed, highly trained catering staff ensuring swift and courteous hospitality for every guest.",
  },
  {
    id: "g8",
    title: "Luxury Birthday Marquee with Ambient Lighting",
    category: "Parties & Graduations",
    image: "/images/birthday-marquee-luxury.png",
    description: "Draped canopy with fairy lights, golden arches, and lounge seating for an exclusive evening milestone celebration.",
  },
  {
    id: "g9",
    title: "6m x 9m Heavy-Duty Cabana Tent",
    category: "Tents & Equipment",
    image: "/images/cabana-tent-6x9.png",
    description: "Pitched cabana marquee offering robust shelter, elegant clean white walls, and versatile outdoor protection.",
  },
  {
    id: "g10",
    title: "Prestigious Hall Graduation Ceremony",
    category: "Parties & Graduations",
    image: "/images/graduation-speech-hall.jpg",
    description: "Formal academic stage styling, podium backdrop, and tiered seating for graduates, lecturers, and proud families.",
  },
  {
    id: "g11",
    title: "Executive Conference & Memorial Assembly",
    category: "Tents & Equipment",
    image: "/images/conference-setup.jpg",
    description: "Organized seating with high-capacity black plastic chairs and clean aisles for memorial assemblies and conferences.",
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = [
    "All",
    "Weddings",
    "Lobola",
    "Catering",
    "Tents & Equipment",
    "Parties & Graduations",
  ];

  const filteredItems =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-300 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            Our Real Work in Bulawayo
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-slate-900 tracking-tight">
            Event Showcase & Gallery
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Take a look at real setups crafted by JS Events. See our stretch tents, cabana marquees, wedding decor, chair bags, and appetizing catering in action.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-slate-900 text-white shadow-md"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative h-80 rounded-2xl overflow-hidden bg-slate-900 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <Image
                src={item.image}
                alt={`${item.title} - JS Events Bulawayo`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="bg-slate-900/80 backdrop-blur text-amber-300 border border-amber-400/30 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {item.category}
                </span>
                <span className="p-2 rounded-full bg-white/20 backdrop-blur text-white group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                  <ZoomIn className="w-4 h-4" />
                </span>
              </div>

              {/* Title & Desc */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-serif text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2 mt-1">
                  {item.description}
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-amber-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Click to view details & book</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="bg-slate-900 border border-amber-500/40 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative animate-in zoom-in-95"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/80 text-white hover:bg-amber-500 hover:text-slate-950 transition"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image */}
              <div className="relative h-80 sm:h-96 w-full">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 text-white">
                <div className="inline-block bg-amber-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                  {selectedImage.category}
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-black text-amber-300">
                  {selectedImage.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
                  {selectedImage.description}
                </p>

                <div className="mt-6 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-400">
                    Want this exact look or catering setup for your event in Bulawayo?
                  </div>
                  <a
                    href={createWhatsAppLink(
                      `Salibonani JS Events! I saw your showcase of "${selectedImage.title}" on your website and would love to book this style for my event.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl shadow-lg text-sm transition transform hover:-translate-y-0.5"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Inquire About This Look on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
