import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/common/SectionHeading';
import { OCCASIONS, BUDGET_TIERS } from '../data/products';
import { useLanguage } from '../i18n/LanguageContext';
import { Crown, Sparkles, Gem, Gift } from 'lucide-react';

export function OccasionGuide({
  activeOccasion,
  onSelectOccasion,
  activeBudget,
  onSelectBudget,
}) {
  const { t, lang } = useLanguage();

  const occasionCards = [
    {
      id: 'wedding',
      name: lang === 'hi' ? 'विवाह व दुल्हन' : 'Royal Wedding & Bridal',
      desc: lang === 'hi' ? 'शाही दुल्हन और परिवार के लिए विशेष आभूषण' : 'Grand Polki sets, heavy chokers & heirloom haars',
      icon: Crown,
      image: '/showcase/wedding.jpg',
    },
    {
      id: 'festive',
      name: lang === 'hi' ? 'त्यौहार व उत्सव' : 'Festive Celebrations',
      desc: lang === 'hi' ? 'दिवाली और पावन अवसरों के लिए स्वर्ण आभूषण' : 'Lustrous Kundan chandbalis, temple jewellery & kadas',
      icon: Sparkles,
      image: '/showcase/earrings.jpg',
    },
    {
      id: 'everyday',
      name: lang === 'hi' ? 'दैनिक वैभव' : 'Everyday Fine Luxury',
      desc: lang === 'hi' ? 'प्रतिदिन की शोभा बढ़ाने वाले सूक्ष्म आभूषण' : 'Minimal diamond studs, tennis bracelets & delicate bands',
      icon: Gem,
      image: '/showcase/pendants.jpg',
    },
    {
      id: 'gifting',
      name: lang === 'hi' ? 'उपहार व वर्षगाँठ' : 'Anniversary & Gifting',
      desc: lang === 'hi' ? 'प्रियजनों के लिए अविस्मरणीय उपहार' : 'Eternity rings, diamond pendants & certified solitaires',
      icon: Gift,
      image: '/showcase/finger-rings.jpg',
    },
  ];

  const handleOccasionClick = (occId) => {
    onSelectOccasion(activeOccasion === occId ? 'all' : occId);
    const target = document.querySelector('#featured');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBudgetClick = (budgetId) => {
    onSelectBudget(activeBudget === budgetId ? 'all' : budgetId);
    const target = document.querySelector('#featured');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-[#F5F4F2] text-[#14213D] border-y border-[#E5E3DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.occasion.eyebrow}
          title={t.occasion.heading}
          subtitle={t.occasion.subheading}
        />

        {/* Quick Occasion Navigation Bar */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {occasionCards.map((card) => {
            const Icon = card.icon;
            const isSelected = activeOccasion === card.id;

            return (
              <button
                key={`btn-${card.id}`}
                onClick={() => handleOccasionClick(card.id)}
                className={`flex items-center gap-2.5 px-4 py-2 rounded-full border transition-all duration-300 text-xs font-sans tracking-wider uppercase ${
                  isSelected
                    ? 'bg-[#14213D] text-white font-semibold shadow-md scale-105 border-[#14213D]'
                    : 'bg-white text-[#14213D] border-[#E5E3DF] hover:border-[#B89B72] hover:shadow-xs'
                }`}
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${isSelected ? 'bg-white/20 text-white' : 'bg-[#F5F4F2] text-[#B89B72]'}`}>
                  <Icon className="w-3.5 h-3.5" strokeWidth={1.75} />
                </div>
                <span>{card.name}</span>
              </button>
            );
          })}
        </div>

        {/* Occasion Showcase Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {occasionCards.map((card) => {
            const Icon = card.icon;
            const isSelected = activeOccasion === card.id;

            return (
              <motion.div
                key={card.id}
                whileHover={{ y: -6 }}
                onClick={() => handleOccasionClick(card.id)}
                className={`relative overflow-hidden cursor-pointer group border rounded-2xl transition-all duration-400 shadow-sm ${
                  isSelected
                    ? 'border-[#B89B72] ring-2 ring-[#B89B72]/50 shadow-md'
                    : 'border-[#E5E3DF] hover:border-[#B89B72] hover:shadow-xl'
                }`}
              >
                <div className="aspect-4/5 w-full overflow-hidden relative">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14213D] via-[#14213D]/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
                </div>

                <div className="absolute inset-0 p-5 flex flex-col justify-between text-white">
                  {/* Clean Luxury Emblem */}
                  <div className="w-12 h-12 rounded-2xl bg-[#14213D]/85 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg group-hover:scale-105 group-hover:border-[#B89B72] transition-all duration-300 shrink-0">
                    <Icon className="w-6 h-6 text-[#B89B72] group-hover:text-white transition-colors" strokeWidth={1.5} />
                  </div>

                  <div>
                    <h4 className="font-serif text-lg sm:text-xl font-medium text-white group-hover:text-[#B89B72] transition-colors tracking-wide">
                      {card.name}
                    </h4>
                    <p className="text-[11px] text-[#F5F4F2]/80 mt-1 line-clamp-2 font-sans font-light leading-relaxed">
                      {card.desc}
                    </p>
                    <span className="inline-block mt-3 text-[10px] uppercase tracking-widest text-[#B89B72] font-semibold underline underline-offset-4 font-sans">
                      {isSelected ? (lang === 'hi' ? 'चयनित (हटाएं)' : 'Active Filter (Clear)') : (lang === 'hi' ? 'आभूषण देखें →' : 'View Selection →')}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Investment / Budget Filter Strip */}
        <div className="mt-12 p-6 bg-white border border-[#E5E3DF] shadow-sm rounded-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-semibold text-[#B89B72] block">
                {lang === 'hi' ? 'मूल्य अनुसार चयन' : 'Price Transparency'}
              </span>
              <h4 className="font-serif text-base text-[#14213D] font-medium">
                {t.occasion.budgetTitle}
              </h4>
            </div>

            <div className="flex flex-wrap gap-2">
              {BUDGET_TIERS.map((tier) => {
                const isSelected = activeBudget === tier.id;
                return (
                  <button
                    key={tier.id}
                    onClick={() => handleBudgetClick(tier.id)}
                    className={`px-4 py-2 text-xs font-sans rounded-full transition-all duration-200 uppercase tracking-wider ${
                      isSelected
                        ? 'bg-[#14213D] text-white font-semibold shadow-sm scale-105'
                        : 'bg-[#F5F4F2] text-[#14213D] border border-[#E5E3DF] hover:border-[#B89B72]'
                    }`}
                  >
                    {lang === 'hi' ? tier.labelHi : tier.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
