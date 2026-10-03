import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Gem } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { CONFIG } from '../config';
import { useLanguage } from '../i18n/LanguageContext';

export function Craftsmanship() {
  const { t, lang } = useLanguage();

  return (
    <section id="craftsmanship" className="py-24 bg-[#F5F4F2] text-[#14213D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.craftsmanship.eyebrow}
          title={t.craftsmanship.heading}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Sticky Framed Visual with Clean Border */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative p-3 bg-white border border-[#E5E3DF] rounded-2xl shadow-sm">
              <div className="aspect-4/5 w-full overflow-hidden bg-[#14213D] relative rounded-xl">
                <img
                  src="/shop/store-entrance-drj.jpg"
                  alt="Devrani Jewellers (DRJ) Showroom Entrance"
                  className="w-full h-full object-cover filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14213D]/85 via-[#14213D]/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-[#B89B72] font-semibold block">
                    Devrani Jewellers • Sona Patti Road
                  </span>
                  <p className="font-serif text-lg font-light mt-1">
                    "हॉलमार्क जेवर उपलब्ध है — शुद्धता और विश्वास की अटूट परंपरा।"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Narrative & Animated Stats */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-5 text-sm sm:text-base text-[#6B7280] leading-relaxed font-light">
              <p className="font-serif text-2xl sm:text-3xl text-[#14213D] font-normal leading-snug">
                {t.craftsmanship.lead}
              </p>
              <p>{t.craftsmanship.p1}</p>
              <p>{t.craftsmanship.p2}</p>
            </div>

            {/* Purity Guarantee Badge */}
            <div className="p-6 bg-white border border-[#E5E3DF] rounded-2xl flex items-start gap-4 shadow-sm hover:border-[#B89B72] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#B89B72]/15 flex items-center justify-center flex-shrink-0 text-[#B89B72]">
                <ShieldCheck className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-serif text-lg text-[#14213D] font-medium">
                  100% Karatmeter Purity Assurance
                </h4>
                <p className="text-xs text-[#6B7280] mt-1 leading-relaxed font-sans">
                  Complimentary spectrometer testing on all gold brought to our counters. We honor transparent melt values with zero deductions on certified hallmarked ornaments.
                </p>
              </div>
            </div>

            {/* Animated Counters / Milestone Stats */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-[#E5E3DF]">
              {CONFIG.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="text-center sm:text-left"
                >
                  <div className="font-cinzel text-3xl sm:text-4xl lg:text-5xl text-[#14213D] font-normal">
                    {stat.value.toLocaleString()}
                    <span className="text-[#B89B72] text-2xl sm:text-3xl font-medium">{stat.suffix}</span>
                  </div>
                  <span className="mt-1 block text-xs uppercase tracking-wider text-[#6B7280] font-sans font-medium">
                    {lang === 'hi' ? stat.labelHi : stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
