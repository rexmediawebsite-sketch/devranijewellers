import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/common/SectionHeading';
import { useLanguage } from '../i18n/LanguageContext';
import { ShieldCheck, Gem, RefreshCw, Sparkles } from 'lucide-react';
import { LuxuryDiamondIcon } from '../components/common/BrandIcons';

export function WhyChooseUs() {
  const { t } = useLanguage();

  const icons = [
    ShieldCheck,
    Gem,
    RefreshCw,
    Sparkles,
  ];

  return (
    <section className="py-24 bg-[#F5F4F2] text-[#14213D] border-t border-[#E5E3DF] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-black/[0.02] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow={t.whyChooseUs.eyebrow}
          title={t.whyChooseUs.heading}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {t.whyChooseUs.features.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="p-8 rounded-2xl bg-white border border-[#E5E3DF] hover:border-[#B89B72]/60 shadow-sm hover:shadow-md hover:-translate-y-1.5 transition-all duration-500 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#F5F4F2] border border-[#E5E3DF] p-1 shadow-sm group-hover:border-[#B89B72] transition-all duration-300 mb-6">
                    <div className="w-full h-full rounded-[14px] bg-white flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#B89B72] group-hover:scale-110 transition-all duration-300" strokeWidth={1.4} />
                    </div>
                  </div>
                  <h3 className="font-cinzel text-lg sm:text-xl font-medium text-[#14213D] mb-2.5 tracking-wide group-hover:text-[#B89B72] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed font-sans font-light">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E5E3DF] flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#B89B72] font-sans font-semibold">
                    Standard 0{index + 1}
                  </span>
                  <LuxuryDiamondIcon className="w-3 h-3 text-[#B89B72]/50 group-hover:text-[#B89B72] transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
