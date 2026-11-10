import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jsevents-bulawayo.com"),
  title: "JS Events | Premier Decor, Catering & Equipment Hire in Bulawayo",
  description:
    "JS Events in Mavondo Rd, Nkulumane 12, Bulawayo delivers the finest decor and catering for weddings, lobola, birthdays, graduations, and memorials. Hire stretch tents, cabanas, black plastic chairs, white chair bags, tables, chafing dishes, and more. Call / WhatsApp +263 775 126 513.",
  keywords: [
    "JS Events Bulawayo",
    "Events decor Bulawayo",
    "Catering services Bulawayo",
    "Nkulumane 12 events hire",
    "Mavondo Rd Bulawayo",
    "Stretch tent hire Bulawayo",
    "Cabana tent hire",
    "Lobola decor Bulawayo",
    "Wedding catering Bulawayo",
    "Black plastic chairs hire",
    "White chair bags hire",
    "Chafing dish hire Zimbabwe",
  ],
  authors: [{ name: "JS Events" }],
  openGraph: {
    title: "JS Events | Premier Decor, Catering & Equipment Hire in Bulawayo",
    description:
      "Any event that needs decor and catering, trust JS Events — the best in Bulawayo! Weddings, Lobola, Birthdays, Graduations, Memorials, and complete equipment hire.",
    url: "https://jsevents-bulawayo.com",
    siteName: "JS Events Bulawayo",
    images: [
      {
        url: "/images/wedding-gold-decor.jpg",
        width: 1200,
        height: 630,
        alt: "JS Events Luxury Decor and Catering Bulawayo",
      },
    ],
    locale: "en_ZW",
    type: "website",
  },
  icons: {
    icon: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-[#FAF8F5] text-slate-900 selection:bg-amber-200 selection:text-amber-900`}>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
