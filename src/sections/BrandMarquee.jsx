import React from 'react';
import { TrendingUp } from 'lucide-react';
import { CONFIG } from '../config';
import { LuxuryDiamondIcon } from '../components/common/BrandIcons';

export function BrandMarquee() {
  const rateItems = [
    { label: 'LIVE 24K GOLD', value: CONFIG.rates.gold24k },
    { label: 'LIVE 22K GOLD', value: CONFIG.rates.gold22k },
    { label: 'LIVE 18K GOLD', value: CONFIG.rates.gold18k },
    { label: 'LIVE SILVER 999', value: CONFIG.rates.silver999 },
    { label: 'BULLION BENCHMARK', value: `TODAY • ${CONFIG.rates.lastUpdated.toUpperCase()}` },
  ];

  return (
    <div className="relative py-3 bg-[#14213D] border-y border-[#E5E3DF]/20 overflow-hidden text-[#F5F4F2] select-none shadow-inner">
      {/* Infinite marquee ticker */}
      <div className="flex w-max animate-marquee space-x-10 items-center">
        {rateItems.concat(rateItems, rateItems).map((item, index) => (
          <div key={index} className="flex items-center space-x-6 flex-shrink-0">
            <span className="font-sans text-[11px] sm:text-xs tracking-[0.14em] uppercase font-semibold flex items-center gap-2">
              <TrendingUp className="w-3.5 h-3.5 text-[#B89B72] shrink-0" />
              <span className="text-white/75">{item.label}:</span>
              <span className="text-[#D4BE9B] font-bold tabular-nums">{item.value}</span>
            </span>
            <LuxuryDiamondIcon className="w-2.5 h-2.5 text-[#B89B72]/60" />
          </div>
        ))}
      </div>
    </div>
  );
}
