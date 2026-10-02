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

      {/* Floating Button with WhatsApp #25D366 styling */}
      <button
        onClick={handleClick}
        aria-label="Direct WhatsApp Concierge"
        className="relative group w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.55)] hover:bg-[#20bd5a] hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 border border-white/40"
      >
        {/* Soft pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none" />
        <span className="absolute -inset-1 rounded-full border border-[#25D366]/60 opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none" />
        
        <WhatsAppIcon className="w-7 h-7 relative z-10 text-white" />
      </button>
    </div>
  );
}
