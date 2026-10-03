import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { Hero } from '../sections/Hero';
import { BrandMarquee } from '../sections/BrandMarquee';
import { BestDesignsShowcase } from '../sections/BestDesignsShowcase';
import { FindYourMatch } from '../sections/FindYourMatch';
import { AureliaWorld } from '../sections/AureliaWorld';
import { CuratedForYou } from '../sections/CuratedForYou';
import { AureliaAssurance } from '../sections/AureliaAssurance';
import { WhyChooseUs } from '../sections/WhyChooseUs';
import { Testimonials } from '../sections/Testimonials';
import { ShopGallery } from '../components/common/ShopGallery';
import { openWhatsApp } from '../utils/whatsapp';
import { useLanguage } from '../i18n/LanguageContext';

export function HomePage() {
  const { t, lang } = useLanguage();

  return (
    <div>
      {/* Cinematic Hero */}
      <Hero />

      {/* Infinite Trust Strip with Live Gold Prices */}
      <BrandMarquee />

      {/* 3D Panoramic Curved Best Designs Carousel */}
      <BestDesignsShowcase />

      {/* Find Your Perfect Match - Shop by Categories (Tanishq Inspired) */}
      <FindYourMatch />

      {/* Aurelia World - Companion for Every Occasion (Tanishq Inspired) */}
      <AureliaWorld />

      {/* Curated For You - Shop By Gender (Tanishq Inspired) */}
      <CuratedForYou />

      {/* Aurelia Assurance - Crafted by experts, cherished by you (Tanishq Inspired) */}
      <AureliaAssurance />

      {/* The Aurelia Promise */}
      <WhyChooseUs />

      {/* Testimonials */}
      <Testimonials />

      {/* Real Showroom Photo Gallery - Devrani Jewellers (DRJ) */}
      <ShopGallery />

      {/* Store Visit Prompt Bar */}
      <section className="py-16 bg-[#F5F4F2] border-t border-[#E5E3DF] text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs uppercase tracking-[0.24em] text-[#B89B72] font-semibold font-sans">
            Showroom Experience
          </span>
          <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl text-[#14213D] mt-2 uppercase tracking-[0.06em] leading-snug">
            Visit Devrani Jewellers (DRJ) at Sona Patti Road, Badi Bazar
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#6B7280] max-w-xl mx-auto leading-relaxed font-sans">
            Located near Aloo Gaddi & Janki Mandir. Experience pure 22K/24K gold, fine silver ornaments, transparent pricing, and personalized service.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/visit"
              className="px-8 py-3.5 bg-[#14213D] hover:bg-[#1a2d54] text-white text-xs uppercase tracking-[0.18em] font-semibold transition-colors rounded-full shadow-sm"
            >
              View Showroom Location & Hours
            </Link>
            <button
              onClick={() => openWhatsApp({ customText: 'Hello Devrani Jewellers, I would like to enquire about visiting your showroom at Sona Patti Road.' })}
              className="btn-gold-action px-8 py-3.5 active:scale-95 text-white text-xs uppercase tracking-[0.18em] font-semibold transition-all shadow-md flex items-center gap-2 rounded-full"
            >
              <MessageCircle className="w-4 h-4 fill-white text-white" />
              <span>Connect on WhatsApp</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
