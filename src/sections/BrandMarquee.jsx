import React from 'react';
import { TrendingUp } from 'lucide-react';
import { CONFIG } from '../config';
import { LuxuryDiamondIcon } from '../components/common/BrandIcons';
import { useLanguage } from '../i18n/LanguageContext';

export function BrandMarquee() {
  const { lang } = useLanguage();

  const isHi = lang === 'hi';

  const rateItems = [
    { label: isHi ? 'लाइव 24K सोना' : 'LIVE 24K GOLD', value: CONFIG.rates.gold24k },
    { label: isHi ? 'लाइव 22K सोना (हॉलमार्क)' : 'LIVE 22K GOLD', value: CONFIG.rates.gold22k },
    { label: isHi ? 'लाइव 18K सोना' : 'LIVE 18K GOLD', value: CONFIG.rates.gold18k },
    { label: isHi ? 'लाइव शुद्ध चांदी 999' : 'LIVE SILVER 999', value: CONFIG.rates.silver999 },
    { label: isHi ? 'आज का मानक भाव' : 'BULLION BENCHMARK', value: isHi ? `आज का भाव • ${CONFIG.rates.lastUpdated}` : `TODAY • ${CONFIG.rates.lastUpdated.toUpperCase()}` },
  ];

  return (
    <div className="relative py-2.5 sm:py-3 bg-[#14213D] border-y border-[#E5E3DF]/20 overflow-hidden text-[#F5F4F2] select-none shadow-inner">
      {/* Infinite marquee ticker with GPU acceleration */}
      <div className="flex w-max animate-marquee space-x-8 sm:space-x-10 items-center will-change-transform">
        {rateItems.concat(rateItems, rateItems).map((item, index) => (
          <div key={index} className="flex items-center space-x-4 sm:space-x-6 flex-shrink-0">
            <span className="font-sans text-[11px] sm:text-xs tracking-[0.12em] sm:tracking-[0.14em] uppercase font-semibold flex items-center gap-1.5 sm:gap-2">
              <TrendingUp className="w-3.5 h-3.5 text-[#B89B72] shrink-0" />
              <span className="text-white/80">{item.label}:</span>
              <span className="text-gold-shine font-bold tabular-nums">{item.value}</span>
            </span>
            <LuxuryDiamondIcon className="w-2.5 h-2.5 text-[#B89B72]/60" />
          </div>
        ))}
      </div>
    </div>
  );
}
