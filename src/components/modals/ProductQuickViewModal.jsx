import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, MessageCircle, Share2, Check, ShieldCheck } from 'lucide-react';
import { LuxuryDiamondIcon } from '../common/BrandIcons';
import { useModals } from '../../context/ModalContext';
import { useWishlist } from '../../context/WishlistContext';
import { useLanguage } from '../../i18n/LanguageContext';
import { PRODUCTS } from '../../data/products';
import { openWhatsApp } from '../../utils/whatsapp';
import { trackEvent } from '../../utils/analytics';

export function ProductQuickViewModal() {
  const { selectedProduct, closeQuickView, openQuickView } = useModals();
  const { isInWishlist, toggleProductWishlist } = useWishlist();
  const { t, lang } = useLanguage();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    setActiveImageIndex(0);
    setIsZoomed(false);
  }, [selectedProduct]);

  if (!selectedProduct) return null;

  const isSaved = isInWishlist(selectedProduct.id);
  const gallery = selectedProduct.gallery && selectedProduct.gallery.length > 0
    ? selectedProduct.gallery
    : [selectedProduct.image];

  const similarPieces = PRODUCTS.filter(
    (p) => p.category === selectedProduct.category && p.id !== selectedProduct.id
  ).slice(0, 3);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPos({ x, y });
  };

  const handleShare = async () => {
    trackEvent('share_product', { id: selectedProduct.id, name: selectedProduct.name });
    const shareData = {
      title: `${selectedProduct.name} | Aurelia Fine Jewellery`,
      text: selectedProduct.description,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // Fallback to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    } catch {
      // Ignored
    }
  };

  const handleEnquire = () => {
    trackEvent('product_whatsapp_enquire', { id: selectedProduct.id, name: selectedProduct.name });
    openWhatsApp({ product: selectedProduct });
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeQuickView}
          className="fixed inset-0 bg-[#14213D]/70 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative bg-white w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl shadow-2xl border border-[#E5E3DF] z-10"
        >
          {/* Close Button */}
          <button
            onClick={closeQuickView}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#F5F4F2] text-[#14213D] flex items-center justify-center hover:bg-[#14213D] hover:text-white transition-colors border border-[#E5E3DF]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Gallery Section */}
            <div className="p-6 bg-[#F5F4F2] border-b md:border-b-0 md:border-r border-[#E5E3DF] flex flex-col">
              {/* Main Image with Zoom */}
              <div
                className="relative aspect-4/5 w-full bg-white overflow-hidden cursor-crosshair border border-[#E5E3DF] rounded-xl"
                onMouseEnter={() => setIsZoomed(true)}
                onMouseLeave={() => setIsZoomed(false)}
                onMouseMove={handleMouseMove}
              >
                <img
                  src={gallery[activeImageIndex]}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover transition-transform duration-200"
                  style={{
                    transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                    transform: isZoomed ? 'scale(2.0)' : 'scale(1)',
                  }}
                />
                
                {/* Visual badge */}
                <div className="absolute top-3 left-3 bg-[#14213D]/90 text-white text-[10px] tracking-widest uppercase px-2.5 py-1 border border-white/20 rounded-md">
                  {selectedProduct.purity}
                </div>

                <div className="absolute bottom-3 right-3 bg-[#14213D]/70 backdrop-blur-sm text-white text-[10px] tracking-wider uppercase px-2 py-0.5 rounded pointer-events-none">
                  Hover to Zoom
                </div>
              </div>

              {/* Thumbnails */}
              {gallery.length > 1 && (
                <div className="flex gap-2 mt-4 overflow-x-auto pb-1">
                  {gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-16 h-20 flex-shrink-0 border transition-all rounded-lg overflow-hidden ${
                        activeImageIndex === idx
                          ? 'border-[#14213D] ring-2 ring-[#14213D]/20 shadow-sm'
                          : 'border-[#E5E3DF] opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details Section */}
            <div className="p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs tracking-widest uppercase text-[#B89B72] font-semibold mb-1">
                  <span>{selectedProduct.categoryName}</span>
                  <span className="text-[#6B7280]">Code: {selectedProduct.id}</span>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl font-normal text-[#14213D] leading-tight">
                  {selectedProduct.name}
                </h3>

                <p className="mt-2 text-[#14213D] font-serif text-xl font-semibold tracking-wide">
                  {selectedProduct.priceDisplay}
                </p>

                <p className="mt-4 text-[#6B7280] text-sm leading-relaxed">
                  {selectedProduct.description}
                </p>

                {/* Specifications Grid */}
                <div className="mt-6 border-t border-b border-[#E5E3DF] py-4 grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-[#6B7280] block uppercase tracking-wider text-[10px]">Metal & Purity</span>
                    <span className="font-medium text-[#14213D]">{selectedProduct.purity}</span>
                  </div>
                  <div>
                    <span className="text-[#6B7280] block uppercase tracking-wider text-[10px]">Net Gold / Gem Weight</span>
                    <span className="font-medium text-[#14213D]">{selectedProduct.weight}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-[#6B7280] block uppercase tracking-wider text-[10px]">Dimensions / Sizing</span>
                    <span className="font-medium text-[#14213D]">{selectedProduct.dimensions || 'Customizable to preference'}</span>
                  </div>
                </div>

                {/* Assurance Badges */}
                <div className="mt-4 flex items-center gap-4 text-[11px] text-[#14213D]">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#B89B72]" />
                    <span>BIS 916 Hallmarked</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <LuxuryDiamondIcon className="w-4 h-4 text-[#B89B72]" />
                    <span>Lifetime Buyback</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-3">
                <button
                  onClick={handleEnquire}
                  className="w-full py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:scale-95 flex items-center justify-center gap-2.5 font-sans text-xs tracking-widest uppercase font-semibold text-white shadow-md hover:shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current text-white" />
                  <span>Enquire Price on WhatsApp</span>
                </button>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => toggleProductWishlist(selectedProduct)}
                    className={`py-2.5 px-4 rounded-full border text-xs tracking-wider uppercase font-semibold flex items-center justify-center gap-2 transition-all ${
                      isSaved
                        ? 'border-[#B89B72] bg-[#B89B72]/10 text-[#B89B72]'
                        : 'border-[#E5E3DF] hover:border-[#14213D] text-[#14213D]'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${isSaved ? 'fill-[#B89B72] text-[#B89B72]' : ''}`} />
                    <span>{isSaved ? 'In Wishlist' : 'Add to Wishlist'}</span>
                  </button>

                  <button
                    onClick={handleShare}
                    className="py-2.5 px-4 rounded-full border border-[#E5E3DF] hover:border-[#14213D] text-xs tracking-wider uppercase font-semibold text-[#14213D] flex items-center justify-center gap-2 transition-all"
                  >
                    {isCopied ? <Check className="w-4 h-4 text-green-600" /> : <Share2 className="w-4 h-4" />}
                    <span>{isCopied ? 'Link Copied!' : 'Share Creation'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Similar Pieces Carousel Row */}
          {similarPieces.length > 0 && (
            <div className="p-6 md:p-8 border-t border-[#E5E3DF] bg-[#F5F4F2]/50">
              <h4 className="font-serif text-lg text-[#14213D] mb-4">
                {t.modal?.similarTitle || 'Complementary Creations You May Admire'}
              </h4>
              <div className="grid grid-cols-3 gap-3 md:gap-4">
                {similarPieces.map((piece) => (
                  <div
                    key={piece.id}
                    onClick={() => openQuickView(piece)}
                    className="cursor-pointer group flex flex-col"
                  >
                    <div className="aspect-4/5 overflow-hidden bg-white border border-[#E5E3DF] rounded-xl">
                      <img
                        src={piece.image}
                        alt={piece.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <p className="mt-2 text-xs font-serif text-[#14213D] group-hover:text-[#B89B72] transition-colors line-clamp-1">
                      {piece.name}
                    </p>
                    <span className="text-[10px] text-[#6B7280] uppercase">{piece.purity}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
