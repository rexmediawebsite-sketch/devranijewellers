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
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#14213D]/95 backdrop-blur-md border-t border-[#E5E3DF]/20 px-2 py-2 flex items-center justify-around shadow-2xl safe-area-pb">
      {/* Search */}
      <button
        onClick={openSearch}
        className="flex flex-col items-center justify-center text-slate-300 hover:text-white transition-colors py-1 px-1.5 text-center"
      >
        <Search className="w-5 h-5 text-[#B89B72]" />
        <span className="text-[10px] tracking-wider uppercase mt-1 font-sans">
          {lang === 'hi' ? 'सर्च' : 'Search'}
        </span>
      </button>

      {/* Direct Call */}
      <a
        href={`tel:${CONFIG.phoneCall}`}
        className="flex flex-col items-center justify-center text-slate-300 hover:text-white transition-colors py-1 px-1.5 text-center"
      >
        <Phone className="w-5 h-5 text-[#B89B72]" />
        <span className="text-[10px] tracking-wider uppercase mt-1 font-sans">
          {lang === 'hi' ? 'कॉल करें' : 'Call'}
        </span>
      </a>

      {/* WhatsApp */}
      <button
        onClick={() => openWhatsApp()}
        className="flex flex-col items-center justify-center text-slate-300 hover:text-white transition-colors py-1 px-1.5 text-center"
      >
        <MessageCircle className="w-5 h-5 text-[#B89B72] fill-[#B89B72]/20" />
        <span className="text-[10px] tracking-wider uppercase mt-1 font-sans">
          {lang === 'hi' ? 'व्हाट्सएप' : 'WhatsApp'}
        </span>
      </button>

      {/* Directions */}
      <a
        href={CONFIG.locations[0].mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center text-slate-300 hover:text-white transition-colors py-1 px-2 text-center"
      >
        <Navigation className="w-5 h-5 text-[#B89B72]" />
        <span className="text-[10px] tracking-wider uppercase mt-1 font-sans">
          {lang === 'hi' ? 'दिशा-निर्देश' : 'Directions'}
        </span>
      </a>

      {/* Wishlist */}
      <button
        onClick={openWishlist}
        className="flex flex-col items-center justify-center text-slate-300 hover:text-white transition-colors py-1 px-2 relative text-center"
      >
        <div className="relative">
          <Heart className="w-5 h-5 text-[#B89B72]" />
          {count > 0 && (
            <span className="absolute -top-1.5 -right-2 bg-[#B89B72] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
              {count}
            </span>
          )}
        </div>
        <span className="text-[10px] tracking-wider uppercase mt-1 font-sans">
          {lang === 'hi' ? 'पसंदीदा' : 'Wishlist'}
        </span>
      </button>
    </div>
  );
}
