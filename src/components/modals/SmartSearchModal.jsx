import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  X, 
  Sparkles, 
  ArrowRight, 
  MessageCircle, 
  Eye, 
  ShieldCheck, 
  MapPin, 
  Clock, 
  Phone 
} from 'lucide-react';
import { useModals } from '../../context/ModalContext';
import { PRODUCTS, CATEGORIES } from '../../data/products';
import { CONFIG } from '../../config';
import { openWhatsApp } from '../../utils/whatsapp';

export function SmartSearchModal() {
  const { isSearchOpen, closeSearch, openQuickView } = useModals();
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  // Keyword and synonym expansion map for AI-style semantic matching
  const synonymMap = {
    haar: ['necklace', 'choker', 'necklaces'],
    anguthi: ['ring', 'rings'],
    chokar: ['choker', 'necklace'],
    jhumka: ['earring', 'earrings'],
    jhumki: ['earring', 'earrings'],
    chuda: ['bangle', 'bangles', 'kada'],
    chudi: ['bangle', 'bangles'],
    kangan: ['bangle', 'bangles', 'kada'],
    dulhan: ['bridal', 'wedding'],
    shadi: ['wedding', 'bridal'],
    sona: ['gold', '22k', '24k'],
    chandi: ['silver', '925'],
    payal: ['silver', 'anklet'],
    sikka: ['coin', 'bullion', '24k'],
    huid: ['hallmark', 'bis', 'security'],
    purity: ['hallmark', 'bis', 'karat'],
  };

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    // Expand search query with synonyms
    const queryTokens = q.split(/\s+/).filter(Boolean);
    const expandedTokens = [...queryTokens];
    queryTokens.forEach((token) => {
      if (synonymMap[token]) {
        expandedTokens.push(...synonymMap[token]);
      }
    });

    return PRODUCTS.filter((item) => {
      const targetStr = `${item.name} ${item.category} ${item.categoryName || ''} ${item.purity} ${item.metal} ${item.weight || ''} ${item.description || ''} ${item.occasion || ''}`.toLowerCase();
      
      return expandedTokens.some((token) => targetStr.includes(token));
    }).slice(0, 8);
  }, [query]);

  if (!isSearchOpen) return null;

  const quickPicks = [
    { label: '👑 Bridal Chokers', query: 'bridal choker' },
    { label: '💍 22K Gold Rings', query: 'gold ring' },
    { label: '📿 Mangalsutra', query: 'mangalsutra' },
    { label: '🪷 925 Silver', query: 'silver' },
    { label: '🪙 24K Gold Coins', query: 'coin' },
    { label: '🛡️ BIS Hallmark', query: 'hallmark' },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 md:p-12 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeSearch}
          className="fixed inset-0 bg-[#14213D]/75 backdrop-blur-md"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -20 }}
          transition={{ duration: 0.2 }}
          className="relative bg-white border border-[#E5E3DF] shadow-2xl rounded-3xl w-full max-w-2xl overflow-hidden z-10 my-4"
        >
          {/* Search Header Bar */}
          <div className="p-4 sm:p-5 border-b border-[#E5E3DF] flex items-center gap-3 bg-[#FAF7F2]">
            <div className="w-9 h-9 rounded-xl bg-[#14213D] text-[#B89B72] flex items-center justify-center shrink-0">
              <Search className="w-4 h-4" />
            </div>

            <div className="flex-1 relative">
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search jewellery, 22K gold, bridal sets, silver, BIS hallmark..."
                className="w-full bg-transparent border-none text-[#14213D] text-sm sm:text-base focus:outline-none placeholder:text-slate-400 font-sans"
              />
            </div>

            {query ? (
              <button
                onClick={() => setQuery('')}
                className="p-1 rounded-full text-slate-400 hover:text-[#14213D] transition-colors"
                title="Clear query"
              >
                <X className="w-4 h-4" />
              </button>
            ) : (
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#E5E3DF]/50 text-[10px] text-slate-500 font-mono">
                ESC to close
              </span>
            )}

            <button
              onClick={closeSearch}
              className="p-2 rounded-xl text-slate-500 hover:text-[#14213D] hover:bg-black/5 transition-all"
              aria-label="Close search"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Suggestions when Query is Empty */}
          {!query && (
            <div className="p-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-[#B89B72]" />
                  <span className="text-xs uppercase tracking-widest font-semibold text-[#14213D]">
                    Popular Smart Searches
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {quickPicks.map((pick) => (
                    <button
                      key={pick.label}
                      onClick={() => setQuery(pick.query)}
                      className="px-3 py-1.5 rounded-full bg-[#FAF7F2] hover:bg-[#14213D] hover:text-white border border-[#E5E3DF] text-xs font-medium text-[#14213D] transition-all flex items-center gap-1.5 active:scale-95"
                    >
                      <span>{pick.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Store Quick Info Micro-Card */}
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E5E3DF] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-cinzel font-semibold text-[#14213D] uppercase tracking-wider">
                    {CONFIG.shopName}
                  </span>
                  <span className="text-[10px] text-gold-shine font-semibold uppercase tracking-wider">
                    Showroom In Sitamarhi
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 pt-1">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#B89B72] shrink-0" />
                    <span className="truncate">Sona Patti Road, Badi Bazar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#B89B72] shrink-0" />
                    <span>10:00 AM – 8:00 PM (7 Days)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#B89B72] shrink-0" />
                    <span>100% BIS Hallmarked (HUID)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#B89B72] shrink-0" />
                    <span>{CONFIG.phonePrimary}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Search Results List */}
          {query && (
            <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                <span>Found {searchResults.length} matching jewellery pieces</span>
                <span className="text-[11px] text-[#B89B72] font-medium">100% BIS Hallmarked</span>
              </div>

              {searchResults.length > 0 ? (
                searchResults.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 sm:p-4 rounded-2xl border border-[#E5E3DF] hover:border-[#B89B72] bg-white hover:bg-[#FAF7F2]/60 transition-all flex items-center justify-between gap-3 sm:gap-4 group"
                  >
                    {/* Thumbnail Image */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-[#E5E3DF]/60">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-[#B89B72] bg-[#B89B72]/10 px-2 py-0.5 rounded-full">
                          {item.purity || '22K Gold'}
                        </span>
                        {item.weight && (
                          <span className="text-[10px] text-slate-500 font-mono">
                            {item.weight}
                          </span>
                        )}
                      </div>
                      <h4 className="font-cinzel text-sm sm:text-base font-semibold text-[#14213D] truncate group-hover:text-[#B89B72] transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                        {item.description}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => {
                          closeSearch();
                          openQuickView(item);
                        }}
                        className="p-2 sm:px-3 sm:py-2 rounded-xl bg-white border border-[#E5E3DF] hover:border-[#14213D] text-[#14213D] text-xs font-medium inline-flex items-center gap-1.5 transition-all"
                        title="View details"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#B89B72]" />
                        <span className="hidden sm:inline">Details</span>
                      </button>

                      <button
                        onClick={() => {
                          closeSearch();
                          openWhatsApp({ product: item });
                        }}
                        className="btn-gold-action p-2 sm:px-3 sm:py-2 rounded-xl text-white text-xs font-semibold inline-flex items-center gap-1.5 shadow-sm active:scale-95 transition-all"
                        title="Enquire on WhatsApp"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-white" />
                        <span className="hidden sm:inline">Inquire</span>
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#FAF7F2] text-slate-400 mx-auto flex items-center justify-center">
                    <Search className="w-6 h-6" />
                  </div>
                  <h4 className="font-cinzel text-base font-semibold text-[#14213D]">
                    No exact match found for "{query}"
                  </h4>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    We create custom gold and silver jewellery on order. Contact our showroom directly with a photo or design!
                  </p>
                  <button
                    onClick={() => {
                      closeSearch();
                      openWhatsApp(`Namaste Devrani Jewellers, I am looking for jewellery related to: ${query}`);
                    }}
                    className="btn-gold-action inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white uppercase tracking-wider shadow-md mt-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Ask Concierge on WhatsApp</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Modal Footer */}
          <div className="px-6 py-3 bg-[#FAF7F2] border-t border-[#E5E3DF] flex items-center justify-between text-[11px] text-slate-500">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>100% Verified BIS Hallmark Jewellery</span>
            </span>
            <span className="font-mono text-[10px] hidden sm:inline text-slate-400">
              Press <strong>Ctrl + K</strong> to search anytime
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
