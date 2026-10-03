import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Heart, Eye } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useModals } from '../context/ModalContext';
import { useWishlist } from '../context/WishlistContext';
import { openWhatsApp } from '../utils/whatsapp';
import { useLanguage } from '../i18n/LanguageContext';

export function BestDesignsShowcase() {
  const { openQuickView } = useModals();
  const { isInWishlist, toggleProductWishlist } = useWishlist();
  const { lang } = useLanguage();

  const stageRef = useRef(null);
  const cardRefs = useRef([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showHandPrompt, setShowHandPrompt] = useState(true);

  // Curated boutique mix for the 3D rotating showcase (Earrings, Necklaces, Mangalsutra, Bangles, Pendants, Rings)
  const curatedShowcaseItems = [
    PRODUCTS.find((p) => p.id === 'aur-03') || PRODUCTS[1], // Royal Gold Jhumkas (Earrings)
    PRODUCTS.find((p) => p.id === 'aur-01') || PRODUCTS[0], // Royal Polki Choker (Necklace)
    PRODUCTS.find((p) => p.id === 'aur-14') || PRODUCTS[5], // Vedic Mangalsutra (Mangalsutra)
    PRODUCTS.find((p) => p.id === 'aur-04') || PRODUCTS[2], // Empress Heritage Kangan (Bangles)
    PRODUCTS.find((p) => p.id === 'aur-22') || PRODUCTS[9], // Auspicious Peacock Pendant (Pendants)
    PRODUCTS.find((p) => p.id === 'aur-09') || PRODUCTS[7], // Classic Drop Danglers (Earrings)
    PRODUCTS.find((p) => p.id === 'aur-02') || PRODUCTS[4], // Solitaire Ring (Rings)
    PRODUCTS.find((p) => p.id === 'aur-06') || PRODUCTS[8], // Laser-Cut Gold Kada (Bangles)
    PRODUCTS.find((p) => p.id === 'aur-05') || PRODUCTS[6], // Traditional Rani Haar (Bridal / Necklace)
    PRODUCTS.find((p) => p.id === 'aur-20') || PRODUCTS[12], // Chandbali Earrings (Earrings)
  ].filter(Boolean);

  const showcaseList = [...curatedShowcaseItems, ...curatedShowcaseItems];

  const totalCards = showcaseList.length;
  const cardWidth = 280;
  const cardGap = 16;
  const stride = cardWidth + cardGap;
  const singleLoopWidth = (totalCards / 2) * stride;

  // Real-time animation physics (zero React re-render overhead for silky 60fps)
  const scrollPos = useRef(0);
  const dragStartX = useRef(0);
  const dragStartScroll = useRef(0);
  const velocity = useRef(0);
  const lastDragTime = useRef(0);
  const lastDragX = useRef(0);

  // Direct GPU Transform Updates (Imperative RAF loop for perfect 60fps / 120fps)
  useEffect(() => {
    let animationFrameId;

    const render3DCylinder = () => {
      // Auto-drift when not dragging and not hovering
      if (!isDragging && !isHovered) {
        scrollPos.current -= 0.85;

        // Apply slight inertia deceleration if released with drag velocity
        if (Math.abs(velocity.current) > 0.1) {
          scrollPos.current += velocity.current;
          velocity.current *= 0.95; // Damping
        }
      }

      // Infinite loop wrap
      if (Math.abs(scrollPos.current) >= singleLoopWidth) {
        scrollPos.current += singleLoopWidth;
      } else if (scrollPos.current > 0) {
        scrollPos.current -= singleLoopWidth;
      }

      const stageWidth = stageRef.current ? stageRef.current.offsetWidth : window.innerWidth;
      const centerX = stageWidth / 2;

      // Update 3D transforms directly on each card DOM node
      cardRefs.current.forEach((el, index) => {
        if (!el) return;

        // Calculate card X relative to center
        const cardCenterX = index * stride + scrollPos.current + cardWidth / 2;
        const distFromCenter = cardCenterX - centerX;
        const normalized = distFromCenter / (stageWidth * 0.46);

        // Hide cards out of bounds
        if (Math.abs(normalized) > 2.3) {
          el.style.opacity = '0';
          el.style.pointerEvents = 'none';
          return;
        }

        // --- TRUE 3D CYLINDRICAL CURVE MATHEMATICS ---
        // 1. rotateY: Left cards turn right inward (+deg), right cards turn left inward (-deg)
        const rotateY = -34 * normalized;
        // 2. translateZ: Flanks recede deeply into z-space creating the dramatic concave cylinder
        const translateZ = -Math.pow(Math.abs(normalized), 1.65) * 140;
        // 3. translateY: Parabolic curve lifting both left & right edges upwards (exact curve from photo)
        const translateY = Math.pow(normalized, 2) * 44;
        // 4. scale: Center card is prominent; flanks subtly scale into perspective
        const scale = Math.max(0.82, 1 - Math.abs(normalized) * 0.05);
        // 5. opacity fade at extreme edges
        const opacity = Math.max(0, 1 - Math.pow(Math.abs(normalized) / 2.1, 4));

        el.style.opacity = opacity.toFixed(3);
        el.style.pointerEvents = opacity > 0.3 ? 'auto' : 'none';
        el.style.transform = `translate3d(${cardCenterX - cardWidth / 2}px, calc(-50% + ${translateY.toFixed(2)}px), ${translateZ.toFixed(2)}px) rotateY(${rotateY.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
      });

      animationFrameId = requestAnimationFrame(render3DCylinder);
    };

    animationFrameId = requestAnimationFrame(render3DCylinder);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isDragging, isHovered, singleLoopWidth, stride, totalCards]);

  // Mouse & Touch Drag Handlers with vertical scroll passthrough
  const touchStartY = useRef(0);
  const touchStartX = useRef(0);
  const isTouchScrolling = useRef(null); // 'horizontal' | 'vertical' | null

  const handleStartDrag = (clientX) => {
    setIsDragging(true);
    setShowHandPrompt(false);
    velocity.current = 0;
    dragStartX.current = clientX;
    dragStartScroll.current = scrollPos.current;
    lastDragX.current = clientX;
    lastDragTime.current = performance.now();
  };

  const handleTouchStart = (e) => {
    if (!e.touches[0]) return;
    const clientX = e.touches[0].clientX;
    const clientY = e.touches[0].clientY;
    touchStartX.current = clientX;
    touchStartY.current = clientY;
    isTouchScrolling.current = null;
    handleStartDrag(clientX);
  };

  const handleMoveDrag = useCallback((clientX) => {
    if (!isDragging) return;
    const deltaX = clientX - dragStartX.current;
    scrollPos.current = dragStartScroll.current + deltaX;

    const now = performance.now();
    const dt = now - lastDragTime.current;
    if (dt > 10) {
      velocity.current = (clientX - lastDragX.current) * 0.4;
      lastDragX.current = clientX;
      lastDragTime.current = now;
    }
  }, [isDragging]);

  const handleTouchMove = useCallback((e) => {
    if (!e.touches[0] || !isDragging) return;
    const clientX = e.touches[0].clientX;
    const clientY = e.touches[0].clientY;

    if (isTouchScrolling.current === null) {
      const dx = Math.abs(clientX - touchStartX.current);
      const dy = Math.abs(clientY - touchStartY.current);
      if (dx > 8 || dy > 8) {
        if (dy > dx) {
          isTouchScrolling.current = 'vertical';
          setIsDragging(false);
          return;
        } else {
          isTouchScrolling.current = 'horizontal';
        }
      }
    }

    if (isTouchScrolling.current === 'horizontal') {
      handleMoveDrag(clientX);
    }
  }, [isDragging, handleMoveDrag]);

  const handleEndDrag = () => {
    setIsDragging(false);
    isTouchScrolling.current = null;
  };

  useEffect(() => {
    const onMouseMove = (e) => handleMoveDrag(e.clientX);
    const onMouseUp = () => handleEndDrag();
    const onTouchMove = (e) => handleTouchMove(e);
    const onTouchEnd = () => handleEndDrag();

    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove, { passive: true });
      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('touchmove', onTouchMove, { passive: true });
      window.addEventListener('touchend', onTouchEnd);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [isDragging, handleMoveDrag, handleTouchMove]);

  return (
    <section className="py-16 sm:py-24 bg-white text-[#14213D] overflow-hidden relative select-none">
      {/* Centered Minimal Bold Typography matching reference photo */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-8 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full mb-3 text-[10px] sm:text-[11px] uppercase tracking-[0.24em] font-sans font-semibold border border-[#E5E3DF] bg-[#F5F4F2] text-[#B89B72] shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B89B72] shrink-0" />
          <span>{lang === 'hi' ? 'विशेष संग्रह' : 'Curated Atelier'}</span>
        </div>
        <h2 className="font-cinzel text-2xl sm:text-4xl md:text-5xl text-[#14213D] font-medium tracking-tight leading-[1.1]">
          {lang === 'hi' ? 'बेस्पोक ज्वेलरी एटलियर' : 'Bespoke Jewellery Studio'}
        </h2>
        <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-[#6B7280] max-w-lg mx-auto font-serif italic font-light">
          {lang === 'hi'
            ? 'शाही गरिमा से परिपूर्ण वो आभूषण जो पहले कभी नहीं गढ़े गए।'
            : 'The jewellery you deserve has never been crafted before.'}
        </p>
      </div>

      {/* 3D Cylindrical Curved Perspective Stage */}
      <div
        ref={stageRef}
        className="relative w-full overflow-hidden py-10 sm:py-16 cursor-grab active:cursor-grabbing"
        style={{
          perspective: '900px',
          perspectiveOrigin: '50% 48%',
          touchAction: 'pan-y',
        }}
        onMouseDown={(e) => handleStartDrag(e.clientX)}
        onTouchStart={handleTouchStart}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Soft Left & Right Ambient Fade */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-30 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-30 pointer-events-none" />

        {/* 3D Track Container */}
        <div
          className="relative h-[440px] sm:h-[480px] w-full"
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {showcaseList.map((item, index) => {
            const saved = isInWishlist(item.id);

            return (
              <div
                key={`${item.id}-${index}`}
                ref={(el) => (cardRefs.current[index] = el)}
                onClick={() => {
                  if (!isDragging && Math.abs(velocity.current) < 1) {
                    openQuickView(item);
                  }
                }}
                className="absolute top-1/2 left-0 group cursor-pointer"
                style={{
                  width: `${cardWidth}px`,
                  height: '420px',
                  transformOrigin: '50% 50%',
                  transformStyle: 'preserve-3d',
                  willChange: 'transform, opacity',
                }}
              >
                {/* Clean, Rounded Card with smooth shadow matching photo */}
                <div className="w-full h-full relative overflow-hidden rounded-2xl bg-[#14213D] shadow-[0_20px_45px_rgba(0,0,0,0.18)] border border-[#E5E3DF]/30 transition-all duration-500 group-hover:border-[#B89B72]/80 group-hover:shadow-[0_25px_60px_rgba(20,33,61,0.25)]">
                  {/* Clean uninterrupted photograph by default */}
                  <img
                    src={item.image}
                    alt={item.name}
                    draggable={false}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out pointer-events-none brightness-100"
                  />

                  {/* HOVER / TOUCH OVERLAY: Accessible on mobile touch & desktop hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14213D]/95 via-[#14213D]/40 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-4 sm:p-5 pointer-events-auto sm:pointer-events-none sm:group-hover:pointer-events-auto backdrop-blur-[1px] sm:backdrop-blur-[2px]">
                    {/* Top Row: Purity Badge & Wishlist Heart */}
                    <div className="flex items-center justify-between transform sm:-translate-y-2 sm:group-hover:translate-y-0 transition-transform duration-300">
                      <span className="bg-[#14213D]/90 backdrop-blur-sm text-[#B89B72] text-[9px] uppercase tracking-widest px-2.5 py-1 border border-[#E5E3DF]/30 font-medium rounded-full shadow-xs">
                        {item.purity}
                      </span>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleProductWishlist(item);
                        }}
                        className="w-8 h-8 rounded-full bg-white text-[#14213D] hover:text-[#B89B72] flex items-center justify-center border border-[#E5E3DF] shadow-md transition-all hover:scale-110 active:scale-95"
                        aria-label="Save to Wishlist"
                      >
                        <Heart className={`w-4 h-4 ${saved ? 'fill-[#B89B72] text-[#B89B72]' : 'text-[#14213D]'}`} />
                      </button>
                    </div>

                    {/* Bottom Row: Name, Category, Price & WhatsApp Action */}
                    <div className="transform sm:translate-y-3 sm:group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4BE9B] font-semibold font-sans block mb-1">
                        {item.categoryName}
                      </span>
                      <h3 className="font-serif text-base sm:text-lg text-white font-medium line-clamp-1 group-hover:text-[#D4BE9B] transition-colors leading-snug">
                        {item.name}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-[#FAF6F0] font-semibold tabular-nums mt-0.5 tracking-wide">
                        {item.priceDisplay}
                      </p>

                      <div className="mt-2.5 sm:mt-3 flex items-center gap-2 pt-2 border-t border-white/20">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openWhatsApp({ product: item });
                          }}
                          className="btn-gold-action flex-1 py-2 rounded-full text-white text-[10px] sm:text-[11px] uppercase tracking-[0.16em] font-semibold flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95"
                        >
                          <MessageCircle className="w-3.5 h-3.5 fill-white text-white" />
                          <span>Enquire</span>
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openQuickView(item);
                          }}
                          className="px-3 py-2 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#14213D] text-[10px] sm:text-[11px] uppercase transition-colors"
                          title="View Details"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* White Hand Drag Icon prompt matching user reference image */}
        <AnimatePresence>
          {showHandPrompt && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none"
            >
              <motion.div
                animate={{
                  x: [-18, 18, -18],
                  rotate: [-6, 6, -6],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.2,
                  ease: 'easeInOut',
                }}
                className="flex flex-col items-center"
              >
                {/* Pristine White Hand Cursor with drop shadow */}
                <div className="w-14 h-14 bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.25)] border border-[#E5E3DF] flex items-center justify-center text-[#14213D]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8 text-[#14213D]"
                  >
                    <path d="M10 2a2 2 0 0 1 2 2v7.5l.5-.5a2 2 0 0 1 2.8 0l.5.5a2 2 0 0 1 2.8 0l1.4 1.4A4 4 0 0 1 21 16v2a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6v-3a4 4 0 0 1 1.2-2.8l2.6-2.6A2 2 0 0 1 9.6 9L10 9.4V4a2 2 0 0 1 2-2z" />
                  </svg>
                </div>
                <span className="mt-2 text-[10px] font-sans uppercase tracking-widest text-[#14213D] bg-white px-3 py-1 shadow-md border border-[#E5E3DF] font-medium rounded-full">
                  Drag to rotate
                </span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Subtle guide text */}
      <div className="mt-4 text-center">
        <p className="text-[11px] uppercase tracking-widest text-[#6B7280] font-sans">
          ← Drag or swipe horizontally to curve & rotate →
        </p>
      </div>
    </section>
  );
}
