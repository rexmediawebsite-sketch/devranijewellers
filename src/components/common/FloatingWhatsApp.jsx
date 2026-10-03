import React, { useState } from 'react';
import { X } from 'lucide-react';
import { openWhatsApp } from '../../utils/whatsapp';
import { trackEvent } from '../../utils/analytics';
import { useLanguage } from '../../i18n/LanguageContext';
import { WhatsAppIcon } from './BrandIcons';

export function FloatingWhatsApp() {
  const { lang } = useLanguage();
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    trackEvent('floating_whatsapp_click', { placement: 'floating_fab' });
    openWhatsApp();
  };

  return (
    <div className="fixed bottom-20 md:bottom-8 right-5 md:right-8 z-50 flex items-center gap-3">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#14213D] text-white text-xs px-3.5 py-2 rounded-full shadow-lg border border-[#E5E3DF]/25 animate-fade-in">
          <span>{lang === 'hi' ? 'व्हाट्सएप पर बात करें' : 'Chat with Master Jeweller'}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Close tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Button - Royal Navy & Champagne Gold Haute Joaillerie Seal */}
      <button
        onClick={handleClick}
        aria-label="Direct WhatsApp Concierge"
        className="relative group w-14 h-14 rounded-full bg-gradient-to-br from-[#14213D] via-[#1A294A] to-[#0C1527] text-white flex items-center justify-center shadow-[0_8px_30px_rgba(20,33,61,0.35)] hover:shadow-[0_12px_40px_rgba(184,155,114,0.45)] hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#B89B72] focus:ring-offset-2 border-2 border-[#B89B72] hover:border-[#D4BE9B]"
      >
        {/* Soft champagne gold pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#B89B72] opacity-25 animate-ping pointer-events-none" />
        <span className="absolute -inset-1 rounded-full border border-[#B89B72]/50 opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none" />
        
        <WhatsAppIcon className="w-7 h-7 relative z-10 text-[#B89B72] group-hover:text-white group-hover:scale-110 transition-all duration-300" />
      </button>
    </div>
  );
}
