import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Navigation, Phone, MessageCircle, Eye, X, ZoomIn } from 'lucide-react';
import { CONFIG } from '../../config';
import { openWhatsApp } from '../../utils/whatsapp';
import { useLanguage } from '../../i18n/LanguageContext';

export function ShopGallery() {
  const { lang } = useLanguage();
  const [activePhoto, setActivePhoto] = useState(null);

  return (
    <section className="py-20 sm:py-24 bg-white border-t border-[#E5E3DF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B89B72]/10 border border-[#B89B72]/30 text-[#B89B72] text-[11px] font-sans font-semibold uppercase tracking-[0.25em] mb-3"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'दुकान की वास्तविक झलक' : 'Showroom Glimpse • Sona Patti Road'}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-cinzel text-2xl sm:text-3xl lg:text-4xl text-[#14213D] font-semibold tracking-[0.08em] uppercase leading-[1.2]"
          >
            {lang === 'hi' ? 'देवरानी ज्वेलर्स शोरूम' : 'Inside Devrani Jewellers'}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-3 text-xs sm:text-sm text-[#6B7280] leading-relaxed font-sans max-w-2xl mx-auto"
          >
            {lang === 'hi'
              ? 'आलू गद्दी व जानकी स्थान (सीतामढ़ी) के निकट स्थित हमारा जगमगाता प्रतिष्ठान। शुद्ध हॉलमार्क जेवर व आत्मीय सेवा के लिए आपका स्वागत है।'
              : 'Spot our 3D illuminated golden signage and BIS Hallmark emblem easily on Sona Patti Road, near Aloo Gaddi and Janki Mandir, Sitamarhi.'}
          </motion.p>
        </div>

        {/* 5 Shop Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6">
          {CONFIG.shopGallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col bg-[#F5F4F2] border border-[#E5E3DF] hover:border-[#B89B72] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image Frame with Aspect Ratio */}
              <div
                onClick={() => setActivePhoto(item)}
                className="relative aspect-[3/4] w-full overflow-hidden bg-[#14213D] cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={lang === 'hi' ? item.titleHi : item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Subtle Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Floating Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] uppercase font-sans tracking-widest font-medium">
                    {lang === 'hi' ? item.badgeHi : item.badge}
                  </span>
                </div>

                {/* Hover Click to Enlarge Overlay Indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-11 h-11 rounded-full bg-white/90 text-[#14213D] shadow-lg flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-5 h-5 text-[#B89B72]" />
                  </div>
                </div>

                {/* Bottom Overlay Title on image */}
                <div className="absolute bottom-3 left-3 right-3 text-white pointer-events-none">
                  <p className="font-serif text-sm font-medium leading-snug drop-shadow-md">
                    {lang === 'hi' ? item.titleHi : item.title}
                  </p>
                </div>
              </div>

              {/* Card Footer Content */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  {lang === 'hi' ? item.descHi : item.desc}
                </p>

                <button
                  type="button"
                  onClick={() => setActivePhoto(item)}
                  className="mt-3 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold text-[#B89B72] hover:text-[#14213D] transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{lang === 'hi' ? 'बड़ी फोटो देखें' : 'View High-Res Photo'}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Directions & Contact Call-to-action Strip */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 p-6 sm:p-8 bg-[#14213D] text-[#F5F4F2] rounded-3xl border border-[#E5E3DF]/20 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1.5 text-center lg:text-left">
            <span className="text-[10px] uppercase tracking-widest text-[#B89B72] font-semibold font-sans block">
              {lang === 'hi' ? 'आसानी से पहुँचें' : 'Easy Landmark Guide'}
            </span>
            <h3 className="font-cinzel text-xl sm:text-2xl text-white">
              {lang === 'hi'
                ? 'सोना पट्टी रोड, बड़ी बाजार (जानकी मंदिर / आलू गद्दी के निकट)'
                : 'Sona Patti Road, Near Aloo Gaddi & Janki Mandir'}
            </h3>
            <p className="text-xs text-[#F5F4F2]/75 max-w-xl font-sans">
              {lang === 'hi'
                ? 'सीतामढ़ी, बिहार 843302 • प्रतिदिन खुला: सुबह 10:00 बजे से रात 8:00 बजे तक'
                : 'Sitamarhi, Bihar 843302 • Open 7 Days: 10:00 AM – 8:00 PM'}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={CONFIG.locations[0].mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-[#14213D] hover:bg-[#F5F4F2] text-xs uppercase tracking-wider font-semibold shadow-md transition-all active:scale-95"
            >
              <Navigation className="w-3.5 h-3.5 text-[#B89B72]" />
              <span>{lang === 'hi' ? 'गूगल मैप नेविगेशन' : 'Open Google Directions'}</span>
            </a>

            <a
              href={`tel:${CONFIG.phoneCall}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/30 hover:border-white text-white text-xs uppercase tracking-wider font-semibold transition-all active:scale-95"
            >
              <Phone className="w-3.5 h-3.5 text-[#B89B72]" />
              <span>{CONFIG.phonePrimary}</span>
            </a>

            <button
              onClick={() => openWhatsApp({ customText: 'Hello Devrani Jewellers, I am on the way to your showroom on Sona Patti Road, Badi Bazar.' })}
              className="btn-gold-action inline-flex items-center gap-2 px-5 py-3 rounded-full text-white text-xs uppercase tracking-[0.16em] font-semibold shadow-md transition-all active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white text-white" />
              <span>{lang === 'hi' ? 'व्हाट्सएप लोकेशन' : 'WhatsApp Guide'}</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Lightbox / Fullscreen Modal */}
      <AnimatePresence>
        {activePhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePhoto(null)}
              className="fixed inset-0"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative z-10 max-w-2xl w-full bg-[#14213D] border border-white/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors border border-white/20"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[75vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={activePhoto.image}
                  alt={lang === 'hi' ? activePhoto.titleHi : activePhoto.title}
                  className="w-full h-auto max-h-[75vh] object-contain"
                />
              </div>

              <div className="p-6 bg-[#14213D] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#B89B72] font-semibold block mb-1">
                    {lang === 'hi' ? activePhoto.badgeHi : activePhoto.badge} • Devrani Jewellers (DRJ)
                  </span>
                  <h4 className="font-cinzel text-lg text-white font-medium">
                    {lang === 'hi' ? activePhoto.titleHi : activePhoto.title}
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 max-w-md">
                    {lang === 'hi' ? activePhoto.descHi : activePhoto.desc}
                  </p>
                </div>

                <a
                  href={CONFIG.locations[0].mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 px-4 py-2 bg-[#B89B72] hover:bg-[#a68962] text-white text-xs uppercase tracking-wider font-semibold rounded-full flex items-center gap-1.5 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
