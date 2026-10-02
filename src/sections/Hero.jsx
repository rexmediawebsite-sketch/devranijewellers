import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ShieldCheck, ArrowUpRight, Star } from 'lucide-react';
import { CONFIG } from '../config';
import { openWhatsApp } from '../utils/whatsapp';
import { useLanguage } from '../i18n/LanguageContext';

export function Hero() {
  const { t, lang } = useLanguage();

  const handleScrollDown = () => {
    const target = document.querySelector('#collections') || document.querySelector('#featured');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="w-full relative overflow-hidden bg-[#F5F4F2] pt-28 pb-16 sm:pt-36 sm:pb-20 lg:py-24 border-b border-[#E5E3DF]"
    >
      {/* Subtle ambient light gradient in the background */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-white/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#B89B72]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Editorial Narrative Column */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            {/* Trust Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-white border border-[#E5E3DF] text-[#B89B72] font-sans text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest font-semibold shadow-xs max-w-full"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#B89B72] shrink-0" />
              <span className="truncate sm:overflow-visible">BIS Hallmarked • 100% Ethically Sourced • Est. 1978</span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-serif text-3xl sm:text-5xl lg:text-[52px] lg:leading-[1.12] text-[#14213D] tracking-tight"
              >
                <span>Timeless Heirlooms, </span>
                <span className="italic font-light block sm:inline text-[#B89B72]">
                  Reimagined for Modern Grace.
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-sm sm:text-lg text-[#6B7280] max-w-xl font-normal leading-relaxed font-sans"
              >
                {lang === 'hi'
                  ? 'शाही 22K व 24K सोने, बिना तराशे राजसी पोल्की हीरों और शुद्ध सर्टिफाइड सॉलिटेयर से सुसज्जित - पीढ़ियों तक संजोने के लिए।'
                  : 'Masterfully crafted 22K and 24K gold, untreated royal uncut polki diamonds, and certified solitaires made to cherish across generations with unyielding provenance.'}
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1"
            >
              <button
                onClick={handleScrollDown}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#14213D] hover:bg-[#1f2f52] text-white font-sans text-xs uppercase tracking-widest font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all text-center justify-center"
              >
                {t.hero?.exploreBtn || 'Explore Collections'}
              </button>

              <button
                onClick={() => openWhatsApp({ customText: 'Hello Aurelia Stylist, I would like to explore your bridal and fine jewellery creations.' })}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-sans text-xs uppercase tracking-widest font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all text-center"
              >
                <MessageCircle className="w-4 h-4 fill-current text-white shrink-0" />
                <span>Chat with Stylist on WhatsApp</span>
              </button>
            </motion.div>

            {/* Micro-Trust Metrics Grid */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#E5E3DF]"
            >
              <div className="flex items-center gap-3 p-2 rounded-xl transition-all duration-300 hover:translate-x-1">
                <span className="w-9 h-9 rounded-full bg-[#B89B72]/15 flex items-center justify-center text-[#B89B72] font-semibold text-sm">
                  ★
                </span>
                <div>
                  <p className="font-sans text-sm font-semibold text-[#14213D]">4.9 / 5.0 Rating</p>
                  <p className="font-sans text-xs text-[#6B7280]">Over 4,200+ patrons nationwide</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2 rounded-xl transition-all duration-300 hover:translate-x-1">
                <div className="w-9 h-9 rounded-full bg-[#14213D]/10 flex items-center justify-center text-[#14213D]">
                  <ShieldCheck className="w-5 h-5 text-[#14213D]" />
                </div>
                <div>
                  <p className="font-sans text-sm font-semibold text-[#14213D]">Insured Pan-India</p>
                  <p className="font-sans text-xs text-[#6B7280]">Complimentary express transit</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Showcase Column */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group relative mx-auto max-w-lg lg:max-w-none rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-xl border border-[#E5E3DF] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl"
            >
              {/* High-res Archival Bridal Model from Stitch */}
              <img
                src="/stitch/stitch_image_3.png"
                alt="Haute couture Indian bridal model adorned in 22K Kundan choker and polki earrings"
                onError={(e) => {
                  e.currentTarget.src = "https://lh3.googleusercontent.com/aida/AEtjO1VbtbOlg-EiQ1x56rX_gi9Su6pZDj1cqBZ57oLcmQl9cbf2eNF1EjLPiWxJm-2HLX7eN7-lrlb2Rg_y4VcRB-VLRyM8_IN0g38hUhBYswt5CNTe22GWg742NlB1da8fT5Uk6lb9toLHA1spAd_3ncnFKeehDmCK0WqxJ60E6Mrn2f4wxc6rxdA07YD-ys_YdKMS3XDkf1J3_L0XoiR_tcw4ISFmMx0_fyiNma6rKq7ScR4eQ7wr61D4uMY";
                }}
                className="w-full h-auto object-cover aspect-[3/4] transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Bottom Gradient Shade for Overlay Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#14213D]/75 via-transparent to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-95" />

              {/* Floating Pill Badge matching Stitch Showcase */}
              <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-[#E5E3DF] flex items-center justify-between transition-all duration-300 group-hover:bg-white">
                <div className="space-y-0.5 min-w-0 pr-2">
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#B89B72] font-semibold font-sans block truncate">
                    Archival Edition
                  </span>
                  <h3 className="font-serif text-base sm:text-xl text-[#14213D] font-medium leading-snug truncate">
                    Royal Kundan Choker
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#6B7280] font-sans truncate">
                    22K Yellow Gold (91.6% BIS) • Polki
                  </p>
                </div>

                <button
                  onClick={() => openWhatsApp({ customText: 'Hello Aurelia Concierge, I would like to enquire about the Archival Royal Kundan Choker featured on the homepage.' })}
                  className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#14213D] text-white flex items-center justify-center hover:bg-[#B89B72] transition-all duration-300 hover:scale-110 active:scale-95 shadow-sm shrink-0 ml-2"
                  title="Enquire on WhatsApp"
                  aria-label="Enquire on WhatsApp"
                >
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
