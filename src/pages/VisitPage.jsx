import React from 'react';
import { PageBanner } from '../components/common/PageBanner';
import { StoreVisit } from '../sections/StoreVisit';
import { ShopGallery } from '../components/common/ShopGallery';
import { useModals } from '../context/ModalContext';
import { openWhatsApp } from '../utils/whatsapp';
import { Calendar, MessageCircle, MapPin, Coffee, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function VisitPage() {
  const { openBookVisit } = useModals();
  const { lang } = useLanguage();

  const perks = [
    {
      icon: Coffee,
      title: "Warm Hospitality",
      titleHi: "आत्मीय आतिथ्य",
      desc: "Traditional warm hospitality and personalized jewellery consultations at our Sona Patti Road, Badi Bazar showroom.",
    },
    {
      icon: Calendar,
      title: "Personalized Consultation",
      titleHi: "व्यक्तिगत सेवा",
      desc: "Dedicated attention to help you choose the perfect bridal set, daily gold wear, or silver gift.",
    },
    {
      icon: ShieldCheck,
      title: "Live Karatmeter & Hallmark",
      titleHi: "हॉलमार्क एवं शुद्धता जांच",
      desc: "100% BIS hallmarked jewellery and accurate electronic weighing for complete peace of mind.",
    },
  ];

  return (
    <div>
      <PageBanner
        eyebrow="SHOWROOM VISIT"
        title={lang === 'hi' ? 'हमारे शोरूम पधारें' : 'Visit Devrani Jewellers in Person'}
        subtitle={lang === 'hi'
          ? 'सोना पट्टी रोड, बड़ी बाज़ार (आलू गद्दी व जानकी मंदिर के निकट) स्थित हमारे शोरूम में आपका सादर अभिनन्दन है।'
          : 'Located at Sona Patti Road, Near Aloo Gaddi, Badi Bazar (Near Janki Mandir). Open Mon - Sun: 10:00 AM – 8:00 PM.'}
        breadcrumbCurrent="Visit Us"
      />

      {/* Salon Experience Perks */}
      <section className="py-16 bg-[#F5F4F2] text-[#14213D] border-b border-[#E5E3DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {perks.map((perk, i) => {
              const Icon = perk.icon;
              return (
                <div key={i} className="p-6 bg-white border border-[#E5E3DF] shadow-sm rounded-2xl flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#B89B72]/10 text-[#B89B72] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-normal text-[#14213D]">
                      {lang === 'hi' ? perk.titleHi : perk.title}
                    </h3>
                    <p className="text-xs text-[#6B7280] mt-1 leading-relaxed">
                      {perk.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Real Showroom Photo Gallery */}
      <ShopGallery />

      {/* Flagship Showroom Details & Interactive Map */}
      <StoreVisit />
    </div>
  );
}
