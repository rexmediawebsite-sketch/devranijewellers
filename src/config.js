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
  
  // Showroom & Location Details (Sitamarhi, Bihar)
  locations: [
    {
      city: "Badi Bazar, Sitamarhi",
      name: "Devrani Jewellers (DRJ)",
      address: "Sona Patti Road, Near Aloo Gaddi, Badi Bazar (Near Janki Mandir), Sitamarhi, Bihar 843302",
      addressHi: "सोना पट्टी रोड, आलू गद्दी के निकट, बड़ी बाजार (जानकी स्थान), सीतामढ़ी, बिहार 843302",
      landmark: "Near Aloo Gaddi / Janki Mandir (जानकी स्थान)",
      hours: "Mon - Sun: 10:00 AM – 8:00 PM (All 7 Days Open)",
      hoursHi: "प्रतिदिन (सोम - रवि): सुबह 10:00 AM से रात 8:00 PM",
      phone: "+91 98350 75841",
      phoneSecondary: "+91 92048 58261",
      mapUrl: "https://maps.google.com/?q=Devrani+Jewellers+Sona+patti+Road+Near+aloo+gaddi+badi+bazar+Janki+mandir+Sitamarhi",
    }
  ],
  
  // Google Maps Embed Iframe URL for Sona Patti Road, Near Aloo Gaddi, Badi Bazar, Janki Mandir, Sitamarhi
  mapEmbedUrl: "https://maps.google.com/maps?q=Sona%20Patti%20Road%20Near%20Aloo%20Gaddi%20Badi%20Bazar%20Janki%20Mandir%20Sitamarhi&t=&z=16&ie=UTF8&iwloc=&output=embed",

  // Real Showroom Gallery Photos (Added by User)
  shopGallery: [
    {
      id: 1,
      image: "/shop/storefront-night.jpg",
      title: "Main Storefront & Golden 3D Signboard",
      titleHi: "मुख्य शोरूम प्रवेश द्वार एवं 3D स्वर्ण बोर्ड",
      desc: "Illuminated 3D golden signage with official BIS Hallmark logo at Sona Patti Road.",
      descHi: "सोना पट्टी रोड, बड़ी बाज़ार पर स्थित जगमगाता हुआ 3D स्वर्ण बोर्ड व हॉलमार्क प्रतीक।",
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
      title: "Festive Welcome at Janki Sthan, Sitamarhi",
      titleHi: "जानकी स्थान, सीतामढ़ी स्थित प्रतिष्ठान",
      desc: "Traditional marigold garland welcome and official Devrani Jewellers firm banner.",
      descHi: "देवरानी ज्वेलर्स (फर्म: देवरानी ट्रेडर्स) - बड़ी बाजार, जानकी स्थान, सीतामढ़ी।",
      badge: "Official Banner",
      badgeHi: "आधिकारिक बैनर",
    },
    {
      id: 4,
      image: "/shop/store-facade.jpg",
      title: "Night View on Sona Patti Road",
      titleHi: "सोना पट्टी रोड का रात्रि दृश्य",
      desc: "Spot our brightly lit showroom easily while arriving from Badi Bazar or Janki Mandir.",
      descHi: "आलू गद्दी या जानकी मंदिर की तरफ से आते समय आसानी से पहचानी जाने वाली दुकान।",
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
    text: "Devrani Jewellers (DRJ) • 100% Hallmarked Pure Gold & Silver Ornaments at Sona Patti Road, Badi Bazar, Sitamarhi.",
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
