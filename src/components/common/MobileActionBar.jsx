import React from 'react';
import { Phone, MessageCircle, Navigation, Heart, Search } from 'lucide-react';
import { CONFIG } from '../../config';
import { openWhatsApp } from '../../utils/whatsapp';
import { useWishlist } from '../../context/WishlistContext';
import { useLanguage } from '../../i18n/LanguageContext';
import { useModals } from '../../context/ModalContext';

export function MobileActionBar() {
  const { count, openWishlist } = useWishlist();
  const { lang } = useLanguage();
  const { openSearch } = useModals();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#14213D]/95 backdrop-blur-md border-t border-[#E5E3DF]/20 px-1 py-1 flex items-center justify-around shadow-2xl safe-area-pb">
      {/* Search */}
      <button
        onClick={openSearch}
        className="flex-1 flex flex-col items-center justify-center text-slate-300 hover:text-white active:scale-95 transition-all py-1 px-0.5 text-center"
        aria-label="Search jewellery"
      >
        <Search className="w-4 h-4 xs:w-5 xs:h-5 text-[#B89B72]" />
        <span className="text-[9px] xs:text-[10px] tracking-wider uppercase mt-1 font-sans">
          {lang === 'hi' ? 'सर्च' : 'Search'}
        </span>
      </button>

      {/* Direct Call */}
      <a
        href={`tel:${CONFIG.phoneCall}`}
        className="flex-1 flex flex-col items-center justify-center text-slate-300 hover:text-white active:scale-95 transition-all py-1 px-0.5 text-center"
        aria-label="Call store"
      >
        <Phone className="w-4 h-4 xs:w-5 xs:h-5 text-[#B89B72]" />
        <span className="text-[9px] xs:text-[10px] tracking-wider uppercase mt-1 font-sans">
          {lang === 'hi' ? 'कॉल' : 'Call'}
        </span>
      </a>

      {/* WhatsApp - Standout Center Action */}
      <button
        onClick={() => openWhatsApp()}
        className="flex-1 flex flex-col items-center justify-center text-white active:scale-95 transition-all py-0.5 px-0.5 text-center group"
        aria-label="Chat on WhatsApp"
      >
        <div className="w-10 h-10 -mt-3.5 rounded-full bg-gradient-to-tr from-[#9A7D55] via-[#B89B72] to-[#D4BE9B] flex items-center justify-center shadow-lg border-2 border-[#14213D] group-hover:scale-105 transition-transform">
          <MessageCircle className="w-5 h-5 text-[#14213D] fill-[#14213D]" />
        </div>
        <span className="text-[9px] xs:text-[10px] tracking-wider uppercase mt-0.5 font-sans font-semibold text-[#D4BE9B]">
          {lang === 'hi' ? 'व्हाट्सएप' : 'WhatsApp'}
        </span>
      </button>

      {/* Directions */}
      <a
        href={CONFIG.locations[0].mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center text-slate-300 hover:text-white active:scale-95 transition-all py-1 px-0.5 text-center"
        aria-label="Store directions"
      >
        <Navigation className="w-4 h-4 xs:w-5 xs:h-5 text-[#B89B72]" />
        <span className="text-[9px] xs:text-[10px] tracking-wider uppercase mt-1 font-sans truncate max-w-full">
          {lang === 'hi' ? 'मैप' : 'Map'}
        </span>
      </a>

      {/* Wishlist */}
      <button
        onClick={openWishlist}
        className="flex-1 flex flex-col items-center justify-center text-slate-300 hover:text-white active:scale-95 transition-all py-1 px-0.5 relative text-center"
        aria-label="View wishlist"
      >
        <div className="relative">
          <Heart className="w-4 h-4 xs:w-5 xs:h-5 text-[#B89B72]" />
          {count > 0 && (
            <span className="absolute -top-1.5 -right-2 bg-[#B89B72] text-white text-[8px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center shadow-xs">
              {count}
            </span>
          )}
        </div>
        <span className="text-[9px] xs:text-[10px] tracking-wider uppercase mt-1 font-sans">
          {lang === 'hi' ? 'पसंदीदा' : 'Saved'}
        </span>
      </button>
    </div>
  );
}
