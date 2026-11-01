// Devrani Jewellers (DRJ) - Global Configuration File
// Shop information, WhatsApp contact, hours, address, and live rates.

export const CONFIG = {
  shopName: "Devrani Jewellers (DRJ)",
  shortName: "Devrani Jewellers",
  brandCode: "DRJ",
  firmName: "Devrani Traders (देवरानी ट्रेडर्स)",
  tagline: "Purity, Trust & Timeless Craftsmanship",
  taglineHi: "शुद्धता, विश्वास और पीढ़ियों की अटूट परंपरा",
  
  // WhatsApp direct number (country code + number, NO plus or spaces)
  whatsappNumber: "919835075841",
  
  // Primary and secondary contact numbers
  phoneDisplay: "+91 98350 75841 / +91 92048 58261",
  phoneCall: "+919835075841",
  phonePrimary: "+91 98350 75841",
  phoneSecondary: "+91 92048 58261",
  phoneSecondaryCall: "+919204858261",
  mobileCall: "+919835075841",
  email: "contact@devranijewellers.com",
  
  instagramUrl: "https://instagram.com/",
  facebookUrl: "https://facebook.com/",
  pinterestUrl: "https://pinterest.com/",
  
  // Showroom & Location Details (Noida, Uttar Pradesh)
  locations: [
    {
      city: "Sector 18, Noida",
      name: "Devrani Jewellers (DRJ)",
      address: "Main Market, Sector 18 (Near Metro Station), Noida, Uttar Pradesh 201301",
      addressHi: "मुख्य बाज़ार, सेक्टर 18 (मेट्रो स्टेशन के निकट), नोएडा, उत्तर प्रदेश 201301",
      landmark: "Near Sector 18 Metro Station / Wave Silver Tower",
      hours: "Mon - Sun: 10:00 AM – 8:00 PM (All 7 Days Open)",
      hoursHi: "प्रतिदिन (सोम - रवि): सुबह 10:00 AM से रात 8:00 PM",
      phone: "+91 98350 75841",
      phoneSecondary: "+91 92048 58261",
      mapUrl: "https://maps.google.com/?q=Sector+18+Noida+Uttar+Pradesh+201301",
    }
  ],
  
  // Official Google Maps Embed for Devrani Jewellers (DRJ)
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14016.757049434863!2d77.3209549!3d28.5702213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce44e80a9461b%3A0x6b2d137b0d0c3eb1!2sSector%2018%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",

  // Real Showroom Gallery Photos (Added by User)
  shopGallery: [
    {
      id: 1,
      image: "/shop/storefront-night.jpg",
      title: "Main Storefront & Golden 3D Signboard",
      titleHi: "मुख्य शोरूम प्रवेश द्वार एवं 3D स्वर्ण बोर्ड",
      desc: "Illuminated 3D golden signage with official BIS Hallmark logo at Sector 18, Noida.",
      descHi: "सेक्टर 18, नोएडा स्थित मुख्य बाज़ार पर जगमगाता हुआ 3D स्वर्ण बोर्ड व हॉलमार्क प्रतीक।",
      badge: "Main Facade",
      badgeHi: "मुख्य प्रवेश द्वार",
    },
    {
      id: 2,
      image: "/shop/store-entrance-drj.jpg",
      title: "Golden DRJ Emblem & Hallmark Counter",
      titleHi: "स्वर्ण DRJ प्रतीक एवं हॉलमार्क काउंटर",
      desc: "Warm welcoming entrance showcasing certified BIS hallmark jewellery and consultation counters.",
      descHi: "ग्राहकों के लिए समर्पित स्वच्छ, आधुनिक एवं आरामदायक हॉलमार्क जेवर काउंटर।",
      badge: "Interior & Emblem",
      badgeHi: "शोरूम आंतरिक दृश्य",
    },
    {
      id: 3,
      image: "/shop/store-banner-pillar.jpg",
      title: "Festive Welcome at Sector 18 Showroom, Noida",
      titleHi: "सेक्टर 18, नोएडा स्थित भव्य प्रतिष्ठान",
      desc: "Traditional marigold garland welcome and official Devrani Jewellers showroom.",
      descHi: "देवरानी ज्वेलर्स (फर्म: देवरानी ट्रेडर्स) - मुख्य बाजार, सेक्टर 18, नोएडा।",
      badge: "Official Banner",
      badgeHi: "आधिकारिक बैनर",
    },
    {
      id: 4,
      image: "/shop/store-facade.jpg",
      title: "Night View at Sector 18 Market",
      titleHi: "सेक्टर 18 बाज़ार का रात्रि दृश्य",
      desc: "Spot our brightly lit showroom easily while arriving from Sector 18 Metro Station.",
      descHi: "सेक्टर 18 मेट्रो स्टेशन की तरफ से आते समय आसानी से पहचानी जाने वाली दुकान।",
      badge: "Street View",
      badgeHi: "बाज़ार से दृश्य",
    },
  ],

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
    badge: "PURITY & TRUST",
    text: "Devrani Jewellers (DRJ) • 100% Hallmarked Pure Gold & Silver Ornaments at Sector 18, Noida.",
    code: "DRJ2026",
  },

  // Store Visit Slots (10 AM to 8 PM)
  storeVisitSlots: [
    "10:30 AM - 12:00 PM",
    "12:00 PM - 01:30 PM",
    "02:00 PM - 03:30 PM",
    "04:00 PM - 05:30 PM",
    "06:00 PM - 07:30 PM"
  ],

  // Heritage & Trust Stats (Honoring 'Founded year - Yaad nahi')
  stats: [
    { value: 100, suffix: "%", label: "Pure Gold & Silver", labelHi: "शुद्ध सोना व चांदी" },
    { value: 100, suffix: "%", label: "BIS Hallmarked Purity", labelHi: "हॉलमार्क गारंटी" },
    { value: 15000, suffix: "+", label: "Happy Families Served", labelHi: "संतुष्ट परिवार" },
    { value: 5000, suffix: "+", label: "Traditional & Modern Designs", labelHi: "पारंपरिक व आधुनिक डिज़ाइन" }
  ],

  // Optional Analytics (GA4 / Meta Pixel ID)
  analytics: {
    googleAnalyticsId: "",
    metaPixelId: "",
  },
};
