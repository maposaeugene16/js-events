"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  MessageCircle,
  X,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Maximize2,
  Layers,
} from "lucide-react";
import { createWhatsAppLink } from "@/lib/constants";

export type GalleryCategory =
  | "All"
  | "Lobola & Traditional"
  | "Memorials & Funerals"
  | "Weddings"
  | "Catering"
  | "Tents & Equipment";

interface GalleryItem {
  id: string;
  title: string;
  category: "Lobola & Traditional" | "Memorials & Funerals" | "Weddings" | "Catering" | "Tents & Equipment";
  image: string;
  description: string;
  tag: string;
}

const ALL_GALLERY_PHOTOS: GalleryItem[] = [
  {
    id: "photo-lobola-1",
    title: "Authentic Lobola Luncheon & VIP Red Carpet",
    category: "Lobola & Traditional",
    image: "/images/lobola-luncheon-setup.jpg",
    tag: "Real Bulawayo Lobola",
    description:
      "Complete Lobola luncheon ceremony featuring white marquee tent, VIP red carpet walkway, gold stanchions with red velvet ropes, and personalized welcome banner.",
  },
  {
    id: "photo-funeral-1",
    title: "Dignified Memorial & Funeral Vigil Draping",
    category: "Memorials & Funerals",
    image: "/images/funeral.jpg",
    tag: "Memorial Vigil Setup",
    description:
      "Comforting, solemn memorial vigil setup with flowing white fabric draping, warm ambient fairy lights, floral urns, candle pedestals, and velvet stanchions.",
  },
  {
    id: "photo-traditional-1",
    title: "Traditional Roora Decor & Table Styling",
    category: "Lobola & Traditional",
    image: "/images/traditional.jpg",
    tag: "Signature Roora Decor",
    description:
      "Signature JS Events traditional roora banquet table styling with rustic earthen tones, pampas grass centerpieces, woven wall baskets, and royal gold chairs.",
  },
  {
    id: "photo-funeral-2",
    title: "Peaceful Funeral Vigil Setup with Floral Tribute",
    category: "Memorials & Funerals",
    image: "/images/funeral2.jpg",
    tag: "Heartfelt Tribute",
    description:
      "Compassionate, dignified funeral vigil staging featuring illuminated draping, floral lettering tribute, and respectful ambiance for grieving families.",
  },
  {
    id: "photo-lobola-2",
    title: "Traditional Roora Catering Team in Cultural Attire",
    category: "Lobola & Traditional",
    image: "/images/traditional-catering-crew.jpg",
    tag: "Traditional Catering",
    description:
      "JS Events professional waitstaff dressed in authentic African traditional Shweshwe attire, serving steaming hot meals directly from stainless chafing dishes.",
  },
  {
    id: "photo-conf-1",
    title: "Corporate Conference Backdrop & VIP Stanchions",
    category: "Tents & Equipment",
    image: "/images/corporate-conference-backdrop.jpg",
    tag: "Corporate & Stage",
    description:
      "Executive stage photo backdrop, floral pedestals, PA sound integration, and gold VIP stanchions for corporate summits and conferences in Bulawayo.",
  },
  {
    id: "photo-wedding-1",
    title: "Gold & White Luxury Wedding Reception",
    category: "Weddings",
    image: "/images/wedding-gold-decor.jpg",
    tag: "Luxury Wedding",
    description:
      "Opulent gold floral centerpieces, crystal candelabras, fairy lights, and draped white chair bags creating a royal fairytale aesthetic.",
  },
  {
    id: "photo-wedding-2",
    title: "Grand Outdoor Banquet Layout",
    category: "Weddings",
    image: "/images/wedding-outdoor-banquet.png",
    tag: "Outdoor Garden Banquet",
    description:
      "Scenic outdoor garden layout with round banquet tables, immaculate white linens, and shade canopy setup for over 300 wedding guests.",
  },
  {
    id: "photo-lobola-3",
    title: "Bedouin Stretch Tent for Cultural Ceremonies",
    category: "Lobola & Traditional",
    image: "/images/lobola-stretch-tent.png",
    tag: "Cultural Stretch Tent",
    description:
      "Dynamic freeform stretch tent setup creating a prestigious and culturally grounded space for traditional family ceremonies and roora celebrations.",
  },
  {
    id: "photo-catering-1",
    title: "Hot Buffet Served in Stainless Chafing Dishes",
    category: "Catering",
    tag: "Chafing Dish Buffet",
    image: "/images/catering-buffet-chefs.png",
    description:
      "Executive chefs serving steaming hot meats, savory gravies, and traditional specialties in mirror-finish stainless steel chafing dishes.",
  },
  {
    id: "photo-catering-2",
    title: "Fresh Gourmet Salad Spread",
    category: "Catering",
    tag: "Farm-Fresh Salads",
    image: "/images/catering-fresh-salads.png",
    description:
      "Crisp Greek salad, beetroot, coleslaw, and colorful Mediterranean side dishes freshly prepared on event day with premium dressings.",
  },
  {
    id: "photo-catering-3",
    title: "Outdoor Catering & White Chair Bag Arrangement",
    category: "Catering",
    tag: "Banquet Dining",
    image: "/images/catering-outdoor-service.png",
    description:
      "Attentive catering crew managing guest dining with covered banquet chairs, linen tables, and continuous food replenishment.",
  },
  {
    id: "photo-catering-4",
    title: "JS Events Culinary & Service Crew",
    category: "Catering",
    tag: "Professional Staff",
    image: "/images/catering-team-action.jpg",
    description:
      "Uniformed, highly trained catering staff ensuring swift, courteous, and hygienic food service for every attendee.",
  },
  {
    id: "photo-party-1",
    title: "Luxury Birthday Marquee with Ambient Lighting",
    category: "Tents & Equipment",
    tag: "Milestone Celebration",
    image: "/images/birthday-marquee-luxury.png",
    description:
      "Draped canopy marquee with fairy lights, golden arches, and lounge seating for an exclusive evening milestone celebration.",
  },
  {
    id: "photo-tent-1",
    title: "6m x 9m Heavy-Duty Cabana Tent",
    category: "Tents & Equipment",
    tag: "Weatherproof Shelter",
    image: "/images/cabana-tent-6x9.png",
    description:
      "Clean, heavy-duty pitched cabana marquee offering robust shelter, elegant clean white walls, and versatile outdoor protection.",
  },
  {
    id: "photo-grad-1",
    title: "Prestigious Hall Graduation Ceremony",
    category: "Tents & Equipment",
    tag: "Academic Honors",
    image: "/images/graduation-speech-hall.jpg",
    description:
      "Formal academic stage styling, podium backdrop, and tiered seating for graduates, lecturers, and proud families.",
  },
];

const CATEGORIES: GalleryCategory[] = [
  "All",
  "Lobola & Traditional",
  "Memorials & Funerals",
  "Weddings",
  "Catering",
  "Tents & Equipment",
];

const SLIDE_DURATION_MS = 3800; // 3.8 seconds per slide

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const touchStartXRef = useRef<number | null>(null);
  const thumbnailStripRef = useRef<HTMLDivElement>(null);

  // Active photos based on category
  const activePhotos =
    selectedCategory === "All"
      ? ALL_GALLERY_PHOTOS
      : ALL_GALLERY_PHOTOS.filter((p) => p.category === selectedCategory);

  // Switch category
  const handleCategoryChange = (cat: GalleryCategory) => {
    setSelectedCategory(cat);
    setCurrentIndex(0);
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % activePhotos.length);
  }, [activePhotos.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + activePhotos.length) % activePhotos.length);
  }, [activePhotos.length]);

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx);
  };

  // Continuous auto-slideshow (runs reliably without hover interruption)
  useEffect(() => {
    if (!isPlaying || lightboxOpen) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activePhotos.length);
    }, SLIDE_DURATION_MS);

    return () => clearInterval(timer);
  }, [isPlaying, lightboxOpen, activePhotos.length]);

  // Keep active thumbnail visible in scroll
  useEffect(() => {
    if (thumbnailStripRef.current) {
      const activeThumb = thumbnailStripRef.current.children[currentIndex] as HTMLElement;
      if (activeThumb) {
        activeThumb.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === " " && !lightboxOpen) {
        e.preventDefault();
        setIsPlaying((p) => !p);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, lightboxOpen]);

  // Mobile swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    touchStartXRef.current = null;
  };

  const currentPhoto = activePhotos[currentIndex] || activePhotos[0];

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <style>{`
        @keyframes slideProgressAnim {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-progress-bar {
          animation: slideProgressAnim ${SLIDE_DURATION_MS}ms linear forwards;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            Live Photo Showcase • Bulawayo
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-slate-900 tracking-tight">
            Event Gallery & Slideshow
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            All our real event setups shown one photo at a time. Watch them smoothly fade into each other every few seconds, or use the controls below to browse at your own pace.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-10">
          {CATEGORIES.map((cat) => {
            const count =
              cat === "All"
                ? ALL_GALLERY_PHOTOS.length
                : ALL_GALLERY_PHOTOS.filter((p) => p.category === cat).length;
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? "bg-slate-900 text-white shadow-lg ring-2 ring-amber-400"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[11px] px-2 py-0.2 rounded-full font-bold ${
                    isActive ? "bg-amber-400 text-slate-950" : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ============================================================== */}
        {/* MAIN SLIDESHOW THEATER (CROSSFADING ONE PHOTO AT A TIME)       */}
        {/* ============================================================== */}
        <div
          className="relative w-full max-w-5xl mx-auto bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border border-amber-500/30"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Animated Auto-Slide Progress Bar */}
          <div className="absolute top-0 left-0 right-0 z-30 h-1.5 bg-white/10 overflow-hidden">
            {isPlaying && (
              <div
                key={`${selectedCategory}-${currentIndex}`}
                className="h-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 origin-left animate-progress-bar"
              />
            )}
          </div>

          {/* Slideshow Display Stage */}
          <div className="relative h-[380px] sm:h-[480px] md:h-[560px] lg:h-[620px] w-full">
            {activePhotos.map((photo, index) => {
              const isActive = index === currentIndex;
              return (
                <div
                  key={photo.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    isActive
                      ? "opacity-100 z-10 pointer-events-auto"
                      : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  {/* Ambient Blurred Background Glow */}
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={photo.image}
                      alt=""
                      className="w-full h-full object-cover blur-2xl opacity-35 scale-110"
                    />
                    <div className="absolute inset-0 bg-slate-950/60" />
                  </div>

                  {/* Main Crisp Foreground Image (object-contain ensures zero cut-offs) */}
                  <div className="relative w-full h-full flex items-center justify-center p-3 sm:p-6 md:p-8">
                    <div className="relative w-full h-full max-w-4xl max-h-[92%] flex items-center justify-center">
                      <img
                        src={photo.image}
                        alt={`${photo.title} - JS Events Bulawayo`}
                        className={`max-w-full max-h-full object-contain rounded-xl drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] cursor-pointer transition-transform duration-700 ${
                          isActive ? "scale-100" : "scale-95"
                        }`}
                        onClick={() => setLightboxOpen(true)}
                      />
                    </div>
                  </div>

                  {/* Top Overlay Badges */}
                  <div className="absolute top-5 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 flex items-center justify-between pointer-events-none z-20">
                    <span className="inline-flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-md text-amber-300 border border-amber-400/40 text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      {photo.category}
                    </span>

                    <button
                      onClick={() => setLightboxOpen(true)}
                      className="inline-flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-md hover:bg-amber-500 text-white hover:text-slate-950 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-white/20 transition-all pointer-events-auto shadow-lg"
                      title="Enlarge photo fullscreen"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Fullscreen</span>
                    </button>
                  </div>
                </div>
              );
            })}

            {/* Previous Arrow Button */}
            <button
              onClick={prevSlide}
              className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3.5 rounded-full bg-slate-950/70 hover:bg-amber-500 text-white hover:text-slate-950 backdrop-blur-md border border-white/20 transition-all shadow-xl hover:scale-110 active:scale-95"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Next Arrow Button */}
            <button
              onClick={nextSlide}
              className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3.5 rounded-full bg-slate-950/70 hover:bg-amber-500 text-white hover:text-slate-950 backdrop-blur-md border border-white/20 transition-all shadow-xl hover:scale-110 active:scale-95"
              aria-label="Next photo"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Bottom Slide Indicator Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 shadow-lg">
              {activePhotos.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => goToSlide(dotIdx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === dotIdx
                      ? "w-6 bg-amber-400"
                      : "w-2 bg-white/40 hover:bg-white/80"
                  }`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* ============================================================== */}
          {/* CAPTION & INTERACTIVE DETAILS BAR (BELOW MAIN PHOTO)          */}
          {/* ============================================================== */}
          <div className="bg-slate-900 border-t border-slate-800 p-5 sm:p-7 text-white">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-amber-500 text-slate-950 text-[10px] sm:text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                    {currentPhoto.tag}
                  </span>
                  <span className="text-xs text-amber-300 font-semibold">
                    Photo {currentIndex + 1} of {activePhotos.length}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {isPlaying ? "• Auto-sliding" : "• Paused"}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-black text-white leading-tight">
                  {currentPhoto.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {currentPhoto.description}
                </p>
              </div>

              {/* Action Buttons: WhatsApp Inquire & Play/Pause */}
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 hover:text-white border border-slate-700 transition"
                  title={isPlaying ? "Pause slideshow" : "Play slideshow"}
                  aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>

                <a
                  href={createWhatsAppLink(
                    `Salibonani JS Events! I am viewing "${currentPhoto.title}" in your gallery slideshow and would like a quote to book this setup for my event.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-3 rounded-xl shadow-lg hover:shadow-emerald-500/40 text-xs sm:text-sm transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book This Setup on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* QUICK THUMBNAIL SELECTOR STRIP                                 */}
        {/* ============================================================== */}
        <div className="max-w-5xl mx-auto mt-6">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2 px-1">
            <span className="flex items-center gap-1.5 font-semibold text-slate-700">
              <Layers className="w-3.5 h-3.5 text-amber-600" />
              Click any thumbnail to fade to it ({activePhotos.length} photos):
            </span>
            <span className="text-xs text-slate-500">
              {isPlaying ? "Fading every 3.8s" : "Slideshow paused"}
            </span>
          </div>

          <div
            ref={thumbnailStripRef}
            className="flex items-center gap-2.5 overflow-x-auto pb-3 pt-1 scrollbar-thin scrollbar-thumb-amber-300 scrollbar-track-slate-100"
          >
            {activePhotos.map((photo, thumbIdx) => {
              const isActive = thumbIdx === currentIndex;
              return (
                <button
                  key={photo.id}
                  onClick={() => goToSlide(thumbIdx)}
                  className={`relative shrink-0 h-16 w-24 sm:h-20 sm:w-28 rounded-xl overflow-hidden transition-all duration-300 border-2 ${
                    isActive
                      ? "border-amber-500 scale-105 shadow-md shadow-amber-500/30 ring-2 ring-amber-400"
                      : "border-slate-300 opacity-60 hover:opacity-100 hover:border-slate-400"
                  }`}
                  aria-label={`View photo ${thumbIdx + 1}: ${photo.title}`}
                >
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-950/20" />
                  <span className="absolute top-1 left-1 bg-slate-950/80 text-[10px] text-white font-bold px-1.5 py-0.2 rounded">
                    {thumbIdx + 1}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ============================================================== */}
        {/* FULLSCREEN LIGHTBOX MODAL                                      */}
        {/* ============================================================== */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
            onClick={() => setLightboxOpen(false)}
          >
            <div
              className="bg-slate-900 border border-amber-500/40 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-200 flex flex-col max-h-[92vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-950/80 text-white hover:bg-amber-500 hover:text-slate-950 transition shadow-lg"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev / Next within Lightbox */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-950/80 text-white hover:bg-amber-500 hover:text-slate-950 transition shadow-lg"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-950/80 text-white hover:bg-amber-500 hover:text-slate-950 transition shadow-lg"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* High-Res Image View */}
              <div className="relative flex-1 min-h-[350px] sm:min-h-[480px] w-full bg-black flex items-center justify-center p-4">
                <img
                  src={currentPhoto.image}
                  alt={currentPhoto.title}
                  className="max-w-full max-h-[65vh] object-contain"
                />
              </div>

              {/* Lightbox Footer */}
              <div className="p-5 sm:p-7 text-white bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="inline-block bg-amber-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-1.5">
                    {currentPhoto.category}
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-black text-amber-300">
                    {currentPhoto.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                    {currentPhoto.description}
                  </p>
                </div>

                <a
                  href={createWhatsAppLink(
                    `Salibonani JS Events! I saw "${currentPhoto.title}" in your fullscreen gallery and would love to book this style.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-3 rounded-xl shadow-lg text-xs sm:text-sm transition transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
