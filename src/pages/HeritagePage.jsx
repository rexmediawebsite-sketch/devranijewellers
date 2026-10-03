import React from 'react';
import { PageBanner } from '../components/common/PageBanner';
import { Craftsmanship } from '../sections/Craftsmanship';
import { WhyChooseUs } from '../sections/WhyChooseUs';
import { Lookbook } from '../sections/Lookbook';
import { openWhatsApp } from '../utils/whatsapp';
import { MessageCircle, ShieldCheck, Gem, Award } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function HeritagePage() {
  const { lang } = useLanguage();

  return (
    <div>
      <PageBanner
        eyebrow="ANCESTRAL ROOTS • TRUST & PURITY"
        title={lang === 'hi' ? 'पीढ़ियों का अटूट विश्वास और शुद्धता' : 'Generations of Revered Heritage & Trust'}
        subtitle={lang === 'hi'
          ? 'सोना पट्टी रोड, बड़ी बाज़ार (जानकी मंदिर के निकट) स्थित हमारे प्रतिष्ठान पर शुद्धता की पूर्ण गारंटी।'
          : 'Preserving authentic gold artistry, traditional bridal sets, and timeless pure silver ornaments.'}
        breadcrumbCurrent="Our Heritage"
      />

      {/* Craftsmanship Narrative & Counters */}
      <Craftsmanship />

      {/* The 4 DRJ Standards */}
      <WhyChooseUs />

      {/* Editorial Lookbook */}
      <Lookbook />

      {/* Hallmark Guarantee Bar */}
      <section className="py-20 bg-[#F5F4F2] text-[#14213D] border-t border-[#E5E3DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 bg-white border border-[#E5E3DF] shadow-sm rounded-3xl text-center">
            <ShieldCheck className="w-12 h-12 text-[#B89B72] mx-auto mb-4" />
            <h3 className="font-cinzel text-2xl sm:text-3xl text-[#14213D] uppercase tracking-[0.06em]">
              100% BIS Hallmarked • Transparent Purity Guarantee
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-[#6B7280] max-w-2xl mx-auto leading-relaxed font-sans">
              We operate on absolute transparency and trust. Every gram of 22K gold carries the official government BIS hallmark. We offer genuine market rates, accurate electronic weighing, and honest trade-in terms for all patrons.
            </p>
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => openWhatsApp({ customText: 'Hello Devrani Jewellers, I would like to know more about gold hallmarking and your jewellery collections.' })}
                className="btn-gold-action px-8 py-3.5 active:scale-95 text-white text-xs uppercase tracking-[0.18em] font-semibold shadow-md transition-all flex items-center gap-2 rounded-full"
              >
                <MessageCircle className="w-4 h-4 fill-white text-white" />
                <span>Enquire on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
