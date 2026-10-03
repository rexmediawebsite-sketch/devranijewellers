import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Heart, MessageCircle, Eye, ArrowUpDown, Filter, X } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { useModals } from '../context/ModalContext';
import { useWishlist } from '../context/WishlistContext';
import { useLanguage } from '../i18n/LanguageContext';
import { openWhatsApp } from '../utils/whatsapp';
import { trackEvent } from '../utils/analytics';
import { LuxuryDiamondIcon } from '../components/common/BrandIcons';

export function FeaturedProducts({
  activeCategory,
  onSelectCategory,
  activeOccasion,
  activeBudget,
  activePersona = 'all',
  onResetFilters,
}) {
  const { openQuickView } = useModals();
  const { isInWishlist, toggleProductWishlist } = useWishlist();
  const { t, lang } = useLanguage();

  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedMetal, setSelectedMetal] = useState('all');

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category filter
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }
      // Persona filter
      if (activePersona !== 'all' && item.persona && item.persona !== activePersona) {
        return false;
      }
      // Occasion filter
      if (activeOccasion !== 'all' && item.occasion !== activeOccasion) {
        return false;
      }
      // Budget tier filter
      if (activeBudget !== 'all' && item.approxPriceTier !== activeBudget) {
        return false;
      }
      // Metal filter
      if (selectedMetal !== 'all' && item.metal.toLowerCase() !== selectedMetal.toLowerCase()) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(query);
        const matchDesc = item.description.toLowerCase().includes(query);
        const matchCat = (item.categoryName || '').toLowerCase().includes(query);
        const matchPurity = (item.purity || '').toLowerCase().includes(query);
        if (!matchName && !matchDesc && !matchCat && !matchPurity) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      if (sortBy === 'weightAsc') {
        const wA = parseFloat(a.weight) || 0;
        const wB = parseFloat(b.weight) || 0;
        return wA - wB;
      }
      if (sortBy === 'weightDesc') {
        const wA = parseFloat(a.weight) || 0;
        const wB = parseFloat(b.weight) || 0;
        return wB - wA;
      }
      // Default: featured first
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [activeCategory, activeOccasion, activeBudget, selectedMetal, searchQuery, sortBy]);

  const hasActiveFilters =
    activeCategory !== 'all' ||
    activeOccasion !== 'all' ||
    activeBudget !== 'all' ||
    selectedMetal !== 'all' ||
    searchQuery.trim().length > 0;

  const handleWhatsAppEnquire = (e, product) => {
    e.stopPropagation();
    trackEvent('product_card_whatsapp_click', { id: product.id, name: product.name });
    openWhatsApp({ product });
  };

  const handleWishlistToggle = (e, product) => {
    e.stopPropagation();
    toggleProductWishlist(product);
  };

  return (
    <section id="featured" className="py-24 bg-[#FFFFFF] text-[#14213D] relative border-t border-[#E5E3DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.featured.eyebrow}
          title={t.featured.heading}
          subtitle={t.featured.subheading}
        />

        {/* Filter & Search Bar */}
        <div className="mb-10 space-y-5">
          {/* Top Control Bar: Search + Sort + Metal filter */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Instant Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#6B7280] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={t.featured.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 rounded-full bg-[#F5F4F2] border border-[#E5E3DF] text-xs sm:text-sm text-[#14213D] focus:outline-none focus:border-[#B89B72] focus:ring-2 focus:ring-[#B89B72]/20 transition-all placeholder:text-[#6B7280]/60 shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-[#14213D]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort Dropdown & Metal Filter */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Metal selector */}
              <div className="flex items-center gap-1.5 text-xs text-[#14213D] bg-[#F5F4F2] border border-[#E5E3DF] rounded-full px-3.5 py-2 shadow-xs">
                <span className="text-[#6B7280] text-[11px] uppercase tracking-wider">Metal:</span>
                <select
                  value={selectedMetal}
                  onChange={(e) => setSelectedMetal(e.target.value)}
                  className="bg-transparent focus:outline-none font-medium text-xs cursor-pointer text-[#14213D]"
                >
                  <option value="all">All Metals</option>
                  <option value="gold">Gold (22K)</option>
                  <option value="diamond">Diamonds</option>
                  <option value="polki">Polki / Jadau</option>
                  <option value="silver">Silver</option>
                </select>
              </div>

              {/* Sort by dropdown */}
              <div className="flex items-center gap-1.5 text-xs text-[#14213D] bg-[#F5F4F2] border border-[#E5E3DF] rounded-full px-3.5 py-2 shadow-xs">
                <ArrowUpDown className="w-3.5 h-3.5 text-[#B89B72]" />
                <span className="text-[#6B7280] text-[11px] uppercase tracking-wider">{t.featured.sortBy}:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent focus:outline-none font-medium text-xs cursor-pointer text-[#14213D]"
                >
                  <option value="featured">{t.featured.sortOptions.featured}</option>
                  <option value="newest">{t.featured.sortOptions.newest}</option>
                  <option value="weightAsc">{t.featured.sortOptions.weightAsc}</option>
                  <option value="weightDesc">{t.featured.sortOptions.weightDesc}</option>
                </select>
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`px-5 py-2 rounded-full text-xs font-sans uppercase tracking-[0.14em] whitespace-nowrap transition-all border ${
                    isActive
                      ? 'bg-[#14213D] text-white border-[#14213D] font-semibold shadow-sm'
                      : 'bg-white hover:border-[#B89B72] border-[#E5E3DF] text-[#14213D]'
                  }`}
                >
                  {lang === 'hi' ? cat.nameHi : cat.name}
                </button>
              );
            })}
          </div>

          {/* Active Filter Chips and Reset */}
          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <span className="text-[#6B7280] font-medium">Active:</span>
              {activeCategory !== 'all' && (
                <span className="inline-flex items-center gap-1.5 bg-[#B89B72]/10 border border-[#B89B72]/40 px-3 py-1 rounded-full text-[#14213D] font-medium shadow-xs">
                  Category: {activeCategory}
                  <button onClick={() => onSelectCategory('all')} className="hover:text-[#14213D] text-[#6B7280]"><X className="w-3 h-3" /></button>
                </span>
              )}
              {activeOccasion !== 'all' && (
                <span className="inline-flex items-center gap-1.5 bg-[#B89B72]/10 border border-[#B89B72]/40 px-3 py-1 rounded-full text-[#14213D] font-medium shadow-xs">
                  Occasion: {activeOccasion}
                  <button onClick={() => onResetFilters('occasion')} className="hover:text-[#14213D] text-[#6B7280]"><X className="w-3 h-3" /></button>
                </span>
              )}
              {activeBudget !== 'all' && (
                <span className="inline-flex items-center gap-1.5 bg-[#B89B72]/10 border border-[#B89B72]/40 px-3 py-1 rounded-full text-[#14213D] font-medium shadow-xs">
                  Budget: {activeBudget}
                  <button onClick={() => onResetFilters('budget')} className="hover:text-[#14213D] text-[#6B7280]"><X className="w-3 h-3" /></button>
                </span>
              )}
              {selectedMetal !== 'all' && (
                <span className="inline-flex items-center gap-1.5 bg-[#B89B72]/10 border border-[#B89B72]/40 px-3 py-1 rounded-full text-[#14213D] font-medium shadow-xs">
                  Metal: {selectedMetal}
                  <button onClick={() => setSelectedMetal('all')} className="hover:text-[#14213D] text-[#6B7280]"><X className="w-3 h-3" /></button>
                </span>
              )}
              <button
                onClick={() => {
                  onResetFilters('all');
                  setSelectedMetal('all');
                  setSearchQuery('');
                }}
                className="text-xs text-[#14213D]/80 underline underline-offset-2 hover:text-red-700 ml-2 font-medium"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* Product Grid with Animated Reflow */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredProducts.map((product) => {
              const saved = isInWishlist(product.id);

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={product.id}
                  onClick={() => openQuickView(product)}
                  className="group bg-white rounded-2xl border border-[#E5E3DF] hover:border-[#B89B72] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden"
                >
                  {/* Top Image Container with Skeleton Placeholder */}
                  <div className="relative aspect-4/5 w-full overflow-hidden bg-[#F5F4F2]">
                    <div className="absolute inset-0 bg-[#E5E3DF]/40 animate-pulse pointer-events-none" />
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out relative z-0"
                    />

                    {/* Quick View Button overlay on hover */}
                    <div className="absolute inset-0 bg-[#14213D]/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                      <span className="px-4 py-2 rounded-full bg-[#14213D]/90 text-white text-xs uppercase tracking-widest font-sans flex items-center gap-1.5 shadow-md border border-white/20">
                        <Eye className="w-3.5 h-3.5 text-[#B89B72]" />
                        <span>{t.featured.quickView}</span>
                      </span>
                    </div>

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5 pointer-events-none">
                      {product.isNew && (
                        <span className="bg-[#14213D]/90 backdrop-blur-sm text-white text-[9px] uppercase tracking-widest px-2.5 py-0.5 rounded-full font-sans font-medium border border-white/20 shadow-xs">
                          New Atelier
                        </span>
                      )}
                      <span className="bg-white/95 backdrop-blur-sm text-[#14213D] text-[9px] uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-[#E5E3DF] font-medium shadow-xs">
                        {product.purity}
                      </span>
                    </div>

                    {/* Wishlist Heart Button */}
                    <button
                      onClick={(e) => handleWishlistToggle(e, product)}
                      aria-label="Toggle Wishlist"
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/95 backdrop-blur-sm text-[#14213D] hover:text-[#B89B72] flex items-center justify-center shadow-sm border border-[#E5E3DF] hover:border-[#B89B72] transition-all hover:scale-110 active:scale-95 z-10"
                    >
                      <Heart className={`w-4 h-4 ${saved ? 'fill-[#B89B72] text-[#B89B72]' : 'text-[#14213D]'}`} />
                    </button>
                  </div>

                  {/* Card Body */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-[#B89B72] font-semibold mb-1">
                        <span>{product.categoryName || product.category}</span>
                        {product.weight && <span className="text-[#6B7280] font-sans font-medium tracking-normal">{product.weight}</span>}
                      </div>

                      <h3 className="font-serif text-lg font-medium text-[#14213D] group-hover:text-[#B89B72] transition-colors line-clamp-1 leading-snug">
                        {product.name}
                      </h3>

                      <p className="mt-1 text-xs text-[#6B7280] font-sans line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Price & Direct WhatsApp CTA */}
                    <div className="mt-4 pt-3 border-t border-[#E5E3DF] flex items-center justify-between gap-2">
                      <span className="font-sans text-sm sm:text-base font-bold text-[#14213D] tabular-nums tracking-tight">
                        {product.priceDisplay}
                      </span>

                      <button
                        onClick={(e) => handleWhatsAppEnquire(e, product)}
                        className="btn-gold-action px-4 py-2 rounded-full text-white text-[11px] uppercase tracking-[0.14em] font-semibold flex items-center gap-1.5 transition-all shadow-sm active:scale-95"
                        title="Enquire on WhatsApp"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-white text-white" />
                        <span>Enquire</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty State Prompt */}
        {filteredProducts.length === 0 && (
          <div className="py-20 text-center bg-white border border-[#E5E3DF] p-8 shadow-sm rounded-2xl">
            <LuxuryDiamondIcon className="w-10 h-10 text-[#B89B72]/50 mx-auto mb-3" />
            <h3 className="font-cinzel text-xl sm:text-2xl text-[#14213D] mb-2 uppercase tracking-[0.06em]">
              {t.featured.emptyHeading}
            </h3>
            <p className="text-xs sm:text-sm text-[#6B7280] max-w-md mx-auto mb-6">
              {t.featured.emptySubheading}
            </p>
            <button
              onClick={() => openWhatsApp({ customText: `Hello Devrani Jewellers, I searched for "${searchQuery}" in your showcase. Could you help me with design availability?` })}
              className="btn-gold-action inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-xs uppercase tracking-[0.18em] font-semibold shadow-md transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white text-white" />
              <span>{t.featured.emptyCta}</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
