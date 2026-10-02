// Aurelia Fine Jewellery - Global Configuration File
// Edit your shop information, WhatsApp contact, hours, and daily metal rates here.

export const CONFIG = {
  shopName: "Aurelia Fine Jewellery",
  shortName: "Aurelia Jewels",
  tagline: "Timeless Heritage, Crafted with Passion & Purity",
  taglineHi: "सनातन विरासत, निष्ठा और शुद्धता के साथ गढ़ी गई",
  
  // WhatsApp direct number (country code + number, NO plus or spaces)
  whatsappNumber: "919876543210",
  
  phoneDisplay: "+91 22 2380 4455",
  phoneCall: "+912223804455",
  mobileCall: "+919876543210",
  email: "concierge@aureliajewels.com",
  
  instagramUrl: "https://instagram.com/aureliafinejewels",
  facebookUrl: "https://facebook.com/aureliafinejewels",
  pinterestUrl: "https://pinterest.com/aureliafinejewels",
  
  // Showrooms & Locations
  locations: [
    {
      city: "Mumbai Flagship",
      address: "14 Heritage Opera House, M.G. Road, South Mumbai 400004",
      hours: "Mon - Sat: 10:30 AM – 8:30 PM | Sun: 11:00 AM – 6:00 PM",
      phone: "+91 22 2380 4455",
      mapUrl: "https://maps.google.com/?q=Royal+Opera+House+Mumbai",
    },
    {
      city: "Jaipur Atelier",
      address: "Plot 88, Johari Bazaar, Near City Palace, Jaipur 302003",
      hours: "Mon - Sat: 11:00 AM – 8:00 PM | Sun: By Appointment",
      phone: "+91 141 257 8899",
      mapUrl: "https://maps.google.com/?q=Johari+Bazaar+Jaipur",
    }
  ],
  
  // Google Maps Embed Iframe URL (Safe embed for South Mumbai luxury district)
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1d3773.7483863459815!2d72.81615217596045!3d18.95356975549045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce12690d565b%3A0xe54ef92953e5c9fe!2sRoyal%20Opera%20House%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",

  // Live Daily Metal Rate Strip (Updated dynamically)
  rates: {
    gold24k: "₹7,650 / gm",
    gold22k: "₹7,015 / gm",
    gold18k: "₹5,740 / gm",
    silver999: "₹92.50 / gm",
    lastUpdated: "Updated Today, 10:00 AM IST",
  },

  // Announcement Bar Announcement
  announcement: {
    badge: "FESTIVE HEIRLOOM PRIVILEGE",
    text: "Complimentary 24K Gold Coin & Zero Making Charges on select Solitaire sets this week.",
    code: "ROYAL2026",
  },

  // Store Visit Slots
  storeVisitSlots: [
    "11:00 AM - 12:30 PM",
    "01:00 PM - 02:30 PM",
    "03:00 PM - 04:30 PM",
    "05:00 PM - 06:30 PM",
    "07:00 PM - 08:30 PM"
  ],

  // Heritage Stats
  stats: [
    { value: 48, suffix: "+", label: "Years of Heritage", labelHi: "वर्षों की पारंपरिक विरासत" },
    { value: 100, suffix: "%", label: "BIS 916 Hallmarked", labelHi: "हॉलमार्क शुद्धता" },
    { value: 45000, suffix: "+", label: "Connoisseurs Served", labelHi: "संतुष्ट ग्राहक" },
    { value: 8500, suffix: "+", label: "Bespoke Masterpieces", labelHi: "विशिष्ट कृतियाँ" }
  ],

  // Optional Analytics (GA4 / Meta Pixel ID)
  analytics: {
    googleAnalyticsId: "", // e.g. "G-XXXXXXXXXX"
    metaPixelId: "",       // e.g. "1234567890"
  },
};
