import React from 'react';
import { PageBanner } from '../components/common/PageBanner';
import { StoreVisit } from '../sections/StoreVisit';
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
      title: "Royal Hospitality",
      titleHi: "शाही आतिथ्य",
      desc: "Traditional Indian hospitality with gourmet beverages and private vault viewings in South Mumbai and Jaipur.",
    },
    {
      icon: Calendar,
      title: "Zero Waiting Time",
      titleHi: "बिना प्रतीक्षा",
      desc: "Reserved VIP viewing salons dedicated solely to you and your family.",
    },
    {
      icon: ShieldCheck,
      title: "Live Karatmeter Testing",
      titleHi: "लाइव कैरेटमीटर जांच",
      desc: "Bring your old jewellery for complimentary on-the-spot purity testing and trade-in appraisals.",
    },
  ];

  return (
    <div>
      <PageBanner
        eyebrow="FLAGSHIP ATELIERS"
        title={lang === 'hi' ? 'हमारे शोरूम पधारें' : 'Experience Our Salons in Person'}
        subtitle={lang === 'hi'
          ? 'दक्षिण मुंबई और जयपुर स्थित हमारे शोरूम में आपका सादर अभिनन्दन है।'
          : 'Step into a world of pure gold and rare gemstones. Private viewing salons curated for families and brides.'}
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

      {/* Flagship Showrooms & Interactive Map */}
      <StoreVisit />
    </div>
  );
}
