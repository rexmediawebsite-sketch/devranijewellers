import React from 'react';
import { TrendingUp } from 'lucide-react';
import { CONFIG } from '../config';
import { LuxuryDiamondIcon } from '../components/common/BrandIcons';

export function BrandMarquee() {
  const rateItems = [
    `LIVE 24K GOLD: ${CONFIG.rates.gold24k}`,
    `LIVE 22K GOLD: ${CONFIG.rates.gold22k}`,
    `LIVE 18K GOLD: ${CONFIG.rates.gold18k}`,
    `LIVE SILVER 999: ${CONFIG.rates.silver999}`,
    `DAILY BULLION BENCHMARK (${CONFIG.rates.lastUpdated.toUpperCase()})`,
  ];

  return (
    <div className="relative py-3.5 bg-[#14213D] border-y border-[#E5E3DF]/25 overflow-hidden text-[#F5F4F2] select-none">
      {/* Infinite marquee ticker */}
      <div className="flex w-max animate-marquee space-x-8 items-center">
        {rateItems.concat(rateItems, rateItems).map((text, index) => (
          <div key={index} className="flex items-center space-x-6 flex-shrink-0">
            <span className="font-serif text-xs md:text-sm tracking-[0.22em] text-[#F5F4F2] font-medium uppercase flex items-center gap-2">
              <TrendingUp className="w-3.5 h-3.5 text-[#B89B72] inline" />
              <span>{text}</span>
            </span>
            <LuxuryDiamondIcon className="w-3 h-3 text-[#B89B72]/60" />
          </div>
        ))}
      </div>
    </div>
  );
}
