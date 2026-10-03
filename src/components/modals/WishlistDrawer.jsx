import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, MessageCircle, ArrowRight, Heart } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';
import { useModals } from '../../context/ModalContext';
import { useLanguage } from '../../i18n/LanguageContext';

export function WishlistDrawer() {
  const { wishlist, isOpen, closeWishlist, removeFromWishlist, clearWishlist, sendWishlistOnWhatsApp } = useWishlist();
  const { openQuickView } = useModals();
  const { t, lang } = useLanguage();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeWishlist}
            className="absolute inset-0 bg-[#14213D]/70 backdrop-blur-sm transition-opacity"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="w-screen max-w-md bg-white border-l border-[#E5E3DF] shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="p-6 border-b border-[#E5E3DF] flex items-center justify-between bg-[#F5F4F2]">
                <div className="flex items-center gap-2.5">
                  <Heart className="w-5 h-5 text-[#B89B72] fill-[#B89B72]/20" />
                  <h3 className="font-serif text-xl text-[#14213D]">
                    {t.wishlistDrawer.title} ({wishlist.length})
                  </h3>
                </div>
                <button
                  onClick={closeWishlist}
                  className="w-9 h-9 rounded-full text-[#6B7280] hover:text-[#14213D] hover:bg-white flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {wishlist.length === 0 ? (
                  <div className="text-center py-16 px-4">
                    <Heart className="w-12 h-12 text-[#B89B72]/30 mx-auto stroke-[1.5] mb-4" />
                    <p className="font-serif text-lg text-[#14213D]">{t.wishlistDrawer.empty}</p>
                    <p className="text-xs text-[#6B7280] mt-2 max-w-xs mx-auto leading-relaxed">
                      {t.wishlistDrawer.emptyTip}
                    </p>
                  </div>
                ) : (
                  wishlist.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 p-3 bg-white border border-[#E5E3DF] rounded-xl shadow-xs relative group hover:border-[#B89B72] transition-colors"
                    >
                      {/* Product Thumbnail */}
                      <div
                        onClick={() => {
                          closeWishlist();
                          openQuickView(item);
                        }}
                        className="w-20 h-24 aspect-4/5 bg-[#F5F4F2] rounded-lg overflow-hidden cursor-pointer flex-shrink-0"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-[#B89B72] font-semibold block">
                            {item.categoryName || item.category}
                          </span>
                          <h4
                            onClick={() => {
                              closeWishlist();
                              openQuickView(item);
                            }}
                            className="font-serif text-sm font-normal text-[#14213D] hover:text-[#B89B72] transition-colors cursor-pointer line-clamp-1"
                          >
                            {item.name}
                          </h4>
                          <span className="text-[11px] text-[#6B7280] block mt-0.5">
                            {item.purity}
                          </span>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-[#E5E3DF]">
                          <span className="text-xs font-serif text-[#14213D] font-semibold">
                            {item.priceDisplay}
                          </span>
                          <button
                            onClick={() => removeFromWishlist(item.id)}
                            className="text-[#6B7280] hover:text-red-700 p-1 transition-colors"
                            title="Remove from wishlist"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Footer Actions */}
              {wishlist.length > 0 && (
                <div className="p-6 border-t border-[#E5E3DF] bg-[#F5F4F2] space-y-3">
                  <button
                    onClick={sendWishlistOnWhatsApp}
                    className="btn-gold-action w-full py-3.5 px-6 rounded-full active:scale-95 text-white flex items-center justify-center gap-2 font-sans text-xs tracking-[0.18em] uppercase font-semibold shadow-md transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-white" />
                    <span>{t.wishlistDrawer.sendWhatsapp}</span>
                  </button>

                  <div className="flex items-center justify-between text-xs text-[#6B7280] pt-1">
                    <button
                      onClick={clearWishlist}
                      className="hover:text-red-700 transition-colors underline"
                    >
                      {t.wishlistDrawer.clear}
                    </button>
                    <button
                      onClick={closeWishlist}
                      className="hover:text-[#14213D] transition-colors flex items-center gap-1 font-medium"
                    >
                      <span>Continue Browsing</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
