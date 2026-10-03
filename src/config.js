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
      mapUrl: "https://maps.app.goo.gl/9b3mSjSSaxLzwm688",
    }
  ],
  
  // Official Google Maps Embed for Devrani Jewellers (DRJ)
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3568.1723145452294!2d85.482006!3d26.5938809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ecf110659e6e5d%3A0x8349e01d9753e40b!2sDevrani%20Jewellers%20(DRJ)!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",

  // Real Showroom Gallery Photos (Extracted from devrani-jewellers.in.at.center)
  shopGallery: [
    {
      id: 1,
      image: "/extracted/showroom/showroom-1.avif",
      title: "Main Storefront & Golden 3D Signboard",
      titleHi: "मुख्य शोरूम प्रवेश द्वार एवं 3D स्वर्ण बोर्ड",
      desc: "Illuminated 3D golden signage with official BIS Hallmark logo at Sona Patti Road.",
      descHi: "सोना पट्टी रोड, बड़ी बाज़ार पर स्थित जगमगाता हुआ 3D स्वर्ण बोर्ड व हॉलमार्क प्रतीक।",
      badge: "Main Facade",
      badgeHi: "मुख्य प्रवेश द्वार",
    },
    {
      id: 2,
      image: "/extracted/showroom/showroom-2.avif",
      title: "Showroom Interior & Jewellery Counter",
      titleHi: "शोरूम आंतरिक दृश्य एवं जेवर काउंटर",
      desc: "Warm welcoming entrance showcasing certified BIS hallmark jewellery and consultation counters.",
      descHi: "ग्राहकों के लिए समर्पित स्वच्छ, आधुनिक एवं आरामदायक हॉलमार्क जेवर काउंटर।",
      badge: "Interior Counter",
      badgeHi: "शोरूम आंतरिक दृश्य",
    },
    {
      id: 3,
      image: "/extracted/showroom/showroom-3.avif",
      title: "Festive Garland Welcome at Sona Patti Road",
      titleHi: "त्यौहारी स्वागत एवं आधिकारिक प्रतिष्ठान",
      desc: "Traditional marigold garland welcome and official Devrani Jewellers firm banner.",
      descHi: "देवरानी ज्वेलर्स (फर्म: देवरानी ट्रेडर्स) - बड़ी बाजार, जानकी स्थान, सीतामढ़ी।",
      badge: "Festive Welcome",
      badgeHi: "आधिकारिक स्वागत",
    },
    {
      id: 4,
      image: "/extracted/showroom/showroom-4.avif",
      title: "Night Storefront Illumination",
      titleHi: "सोना पट्टी रोड का रात्रि दृश्य",
      desc: "Spot our brightly lit showroom easily while arriving from Badi Bazar or Janki Mandir.",
      descHi: "आलू गद्दी या जानकी मंदिर की तरफ से आते समय आसानी से पहचानी जाने वाली दुकान।",
      badge: "Night View",
      badgeHi: "बाज़ार से दृश्य",
    },
    {
      id: 5,
      image: "/extracted/showroom/showroom-5.avif",
      title: "Gold & Diamond Ornaments Showcase",
      titleHi: "स्वर्ण व हीरा आभूषण शोकेस",
      desc: "Carefully curated display cases presenting certified pure 22K and 18K jewellery sets.",
      descHi: "शुद्धता और पारदर्शिता के साथ प्रदर्शित मनमोहक सोने व चांदी के जेवर।",
      badge: "Jewellery Showcase",
      badgeHi: "जेवर शोकेस",
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
    text: "Devrani Jewellers • 100% Hallmarked Pure Gold & Silver Ornaments at Sona Patti Road, Badi Bazar, Sitamarhi.",
    code: "DEVRANI2026",
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
