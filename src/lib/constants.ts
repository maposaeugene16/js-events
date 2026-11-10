export const COMPANY_INFO = {
  name: "JS Events",
  tagline: "Premier Decor, Catering & Event Equipment Hire in Bulawayo",
  address: "Mavondo Rd, Nkulumane 12, Bulawayo, Zimbabwe",
  phoneDisplay: "+263 775 126 513",
  phoneRaw: "263775126513",
  whatsappUrl: "https://wa.me/263775126513",
  operatingHours: "Monday - Sunday: 7:00 AM - 8:00 PM (24/7 Event Support)",
  serviceAreas: ["Bulawayo", "Nkulumane", "Pumula", "Luveve", "Tshabalala", "Hillside", "Suburbs", "Matabeleland South & North"],
};

export function createWhatsAppLink(message: string): string {
  return `${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(message.trim())}`;
}

export const EVENT_SERVICES = [
  {
    id: "weddings",
    title: "Dream Weddings",
    shortDesc: "Complete bridal party decor, grand arches, fairy lights, VIP stage, table centerpieces, and five-star catering.",
    fullDesc: "From romantic garden vows to grand indoor celebrations, JS Events transforms your special day into a fairy tale. We handle everything: bridal couple stage styling, guest tables with premium linens, aisle runners, ambient mood lighting, and unforgettable wedding feast catering.",
    image: "/images/wedding-gold-decor.jpg",
    badge: "Most Popular",
    highlights: ["Bridal stage & backdrop", "Gold & floral centerpieces", "Full course wedding banquets", "Red/White aisle runners"],
  },
  {
    id: "lobola",
    title: "Lobola / Traditional Ceremonies",
    shortDesc: "Vibrant traditional setups, stretch tents, comfortable seating, and rich traditional culinary feasts.",
    fullDesc: "Honor family traditions with dignity and prestige. We provide stretch tents, earthen tones or bright traditional decor accents, plush seating for elders and guests, plus mouthwatering traditional Zimbabwean feasts (sadza rezviyo/white, roadrunner chicken, beef stew, fresh greens & salads).",
    image: "/images/lobola-stretch-tent.png",
    badge: "Cultural Specialist",
    highlights: ["Spacious stretch tents", "Elder & VIP seating arrangements", "Traditional Zimbabwean gourmet dishes", "Warm cultural aesthetic"],
  },
  {
    id: "catering",
    title: "Gourmet Event Catering",
    shortDesc: "Delicious hot buffets, braai/spit roasts, plated service, fresh salads, and desserts served steaming hot in stainless chafing dishes.",
    fullDesc: "Good food is the soul of every event. Our experienced culinary team prepares appetizing menus featuring Zimbabwean favorites, braai meats, savory roasts, colorful salads, and decadent desserts, kept fresh and steaming in professional chafing dishes.",
    image: "/images/catering-buffet-chefs.png",
    badge: "Chef Quality",
    highlights: ["Chafing dishes included", "Customizable menus", "Trained professional servers", "Hygiene certified standards"],
  },
  {
    id: "birthdays",
    title: "Birthday & Milestone Parties",
    shortDesc: "Exciting themed decor, balloon garlands, cake stands, marquee lighting, cocktail or sit-down setups.",
    fullDesc: "Celebrate your 1st, 21st, 50th or any milestone in style! We deliver creative themes, luxury cabana or stretch tents, ambient lighting, cocktail stations, and delightful party snacks or full dinners.",
    image: "/images/birthday-marquee-luxury.png",
    badge: "Celebrations",
    highlights: ["Custom balloon arches & backdrops", "Cocktail & banquet setups", "Party platters & dessert tables", "Sound & tent integration"],
  },
  {
    id: "graduations",
    title: "Graduations & Academic Honors",
    shortDesc: "Prestigious hall and backyard setups to salute educational milestones with elegance.",
    fullDesc: "Reward years of hard work with an impressive graduation party. We arrange formal stage podiums, guest seating, photo booths, and celebration meals for your family, friends, and colleagues.",
    image: "/images/graduation-speech-hall.jpg",
    badge: "Milestone",
    highlights: ["Photo wall / stage decor", "Academic color matching", "Family feast catering", "Full equipment hire"],
  },
  {
    id: "memorials",
    title: "Memorials & Funerals",
    shortDesc: "Compassionate, prompt, and dignified setups to give your loved ones the utmost respect and ease family stress.",
    fullDesc: "In times of grief, JS Events stands with your family in Bulawayo and surrounding areas. We respond swiftly with tents, clean chairs, tables, and warm, respectful catering so you can focus on honoring your loved one without logistical worry.",
    image: "/images/conference-setup.jpg",
    badge: "Dignified Care",
    highlights: ["Prompt same-day delivery", "Shaded tents & chair bags", "Comforting hot meals & tea stations", "Respectful, discreet team"],
  },
];

export const EQUIPMENT_HIRE_ITEMS = [
  {
    id: "stretch-tents",
    name: "Luxury Stretch Tents (Freeform Bedouin)",
    category: "Tents",
    description: "Versatile, waterproof, contemporary stretch tents suitable for any terrain. Creates an enchanting, modern look with mood lighting.",
    image: "/images/lobola-stretch-tent.png",
    features: ["Heavy duty waterproof fabric", "Customizable heights and anchor points", "Ideal for Weddings & Lobola"],
    hireUnits: "per day / per weekend",
  },
  {
    id: "cabana-tents",
    name: "Cabana Tents (6m x 9m & custom)",
    category: "Tents",
    description: "Clean, elegant cabana marquees offering superior shade, rain protection, and a neat square profile for celebrations and dinners.",
    image: "/images/cabana-tent-6x9.png",
    features: ["Sturdy frame construction", "Side walls optional", "Perfect for backyard & garden events"],
    hireUnits: "per setup",
  },
  {
    id: "black-plastic-chairs",
    name: "Sturdy Black Plastic Chairs",
    category: "Chairs",
    description: "High quality, spotless, stackable black plastic chairs available in small to large quantities for any size crowd.",
    image: "/images/catering-outdoor-service.png",
    features: ["Cleaned & sanitized before dispatch", "Durable heavy-duty plastic", "Bulk availability (up to 1,000+)"],
    hireUnits: "per chair",
  },
  {
    id: "white-chair-bags",
    name: "White Chair Bags / Covers",
    category: "Linens & Covers",
    description: "Fitted luxury white chair covers/bags that immediately transform standard plastic chairs into high-end banquet seating.",
    image: "/images/wedding-gold-decor.jpg",
    features: ["Crisply laundered & pressed", "Fitted for standard event chairs", "Optional colored tiebacks/sashes"],
    hireUnits: "per cover",
  },
  {
    id: "banquet-tables",
    name: "Round & Rectangular Banquet Tables",
    category: "Tables",
    description: "Sturdy round tables (seats 8-10) and rectangular trestle tables for head tables, buffet lines, and guest seating.",
    image: "/images/wedding-outdoor-banquet.png",
    features: ["Includes clean tablecloths upon request", "Solid wood/steel reinforced", "Easy group seating arrangement"],
    hireUnits: "per table",
  },
  {
    id: "chafing-dishes",
    name: "Stainless Steel Chafing Dishes",
    category: "Catering Equipment",
    description: "Commercial-grade roll-top and standard chafing dishes with water pans, food inserts, burners, and serving spoons.",
    image: "/images/catering-buffet-chefs.png",
    features: ["Keep foods piping hot for hours", "Sleek mirror-finish stainless steel", "Single & double pan options"],
    hireUnits: "per unit",
  },
  {
    id: "cutlery-crockery",
    name: "Banquet Crockery, Cutlery & Glassware",
    category: "Tableware",
    description: "Porcelain dinner plates, side plates, dessert bowls, stainless steel knives, forks, soup spoons, and wine/tumbler glasses.",
    image: "/images/catering-fresh-salads.png",
    features: ["Spotless, chip-free dinnerware", "Available in full matching sets", "Washing service options available"],
    hireUnits: "per setting / per dozen",
  },
  {
    id: "decor-accessories",
    name: "Red Carpets, Backdrops & Lighting",
    category: "Decor Accessories",
    description: "Red carpet runners, white aisle runners, luxury fairy/string lights, stage arches, draping, and flower stands.",
    image: "/images/birthday-marquee-luxury.png",
    features: ["Creates VIP photo moments", "Golden and floral decorative accents", "Custom stage draping"],
    hireUnits: "per set",
  },
];

export const CATERING_PACKAGES = [
  {
    name: "The Traditional Royal Feast",
    bestFor: "Lobola, Cultural Celebrations & Family Gatherings",
    dishes: [
      "Sadza Rezviyo (Finger millet) & White Sadza",
      "Tender Beef Stew / Braised Oxtail",
      "Traditional Roadrunner Chicken in rich gravy",
      "Creamed Spinach / Covo with peanut butter (Muriwo une Dovi)",
      "Chakalaka & Beetroot Salad",
      "Fresh Fruit Platters",
    ],
    highlight: "Authentic African flavors with royal presentation",
  },
  {
    name: "Grand Wedding Banquet",
    bestFor: "Weddings & High-End Receptions",
    dishes: [
      "Roast Beef with pepper demi-glace / Rosemary Lamb",
      "Golden Baked Chicken Portions",
      "Savory Yellow Rice with raisins & herb baby potatoes",
      "Creamy Greek salad, Potato salad & Coleslaw",
      "Steamed seasonal vegetables with herb butter",
      "Decadent Malva pudding with custard & Black Forest cakes",
    ],
    highlight: "Served hot in stainless chafing dishes with full waiter service",
  },
  {
    name: "Corporate & Milestone Celebration Buffet",
    bestFor: "Graduations, Birthdays & Corporate Conferences",
    dishes: [
      "Mixed Grill (Boerewors, BBQ Chicken skewers, Minute steaks)",
      "Fragrant basmati rice & potato wedges",
      "Three gourmet fresh salads with dressings",
      "Freshly baked cocktail rolls & garlic bread",
      "Fruit salad skewers & assorted mini dessert pastries",
    ],
    highlight: "Flexible catering tailored to delegates and guests",
  },
];

export const TESTIMONIALS = [
  {
    quote: "JS Events made our wedding in Bulawayo an absolute dream! The white chair bags and gold decor looked like a fairy tale. The food was hot, delicious, and abundant. Mavondo Rd is blessed to have you!",
    author: "Mr & Mrs Sibanda",
    event: "Wedding Celebration (Bulawayo)",
    rating: 5,
  },
  {
    quote: "We hired their stretch tent, black plastic chairs, and chafing dishes for my sister's Lobola ceremony in Nkulumane. Everything was delivered on time and spotless. Their customer service on WhatsApp was so fast!",
    author: "Themba Moyo",
    event: "Lobola Ceremony (Nkulumane 12)",
    rating: 5,
  },
  {
    quote: "During a difficult time when we lost our father, JS Events took care of all the funeral tent, chair, and catering logistics with such dignity and compassion. We didn't have to stress about food or shade.",
    author: "Nomsa Dube",
    event: "Memorial Service (Bulawayo)",
    rating: 5,
  },
  {
    quote: "For my daughter's graduation party, JS Events provided the cabana tents, tables, and amazing catering. All our guests complimented the delicious roadrunner chicken and fresh salads. The best in Bulawayo!",
    author: "Sipho & Lindiwe Khumalo",
    event: "Graduation Party",
    rating: 5,
  },
];
