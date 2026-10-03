import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, MessageCircle, Heart } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { openWhatsApp } from '../utils/whatsapp';
import { useLanguage } from '../i18n/LanguageContext';

export function Collections({ onSelectCategory }) {
  const { t, lang } = useLanguage();

  const stageRef = useRef(null);
  const cardRefs = useRef([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showHandPrompt, setShowHandPrompt] = useState(true);

  // Curated collections list featuring the emerald solitaire piece and top categories
  const collectionList = [
    {
      id: 'necklaces',
      title: t.collections.cards.necklaces.title,
      desc: t.collections.cards.necklaces.desc,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=900&auto=format&fit=crop',
      tag: '22K Gold & Polki',
    },
    {
      id: 'rings',
      title: t.collections.cards.rings.title,
      desc: t.collections.cards.rings.desc,
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=900&auto=format&fit=crop',
      tag: 'Certified Solitaires',
    },
    {
      id: 'earrings',
      title: t.collections.cards.earrings.title,
      desc: t.collections.cards.earrings.desc,
      image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=900&auto=format&fit=crop',
      tag: 'Kundan & Jhumkas',
    },
    {
      id: 'bangles',
      title: t.collections.cards.bangles.title,
      desc: t.collections.cards.bangles.desc,
      image: 'https://images.unsplash.com/photo-1611591475152-47754694b87e?q=80&w=900&auto=format&fit=crop',
      tag: 'Filigree & Tennis Cuffs',
    },
    {
      id: 'bridal',
      title: t.collections.cards.bridal.title,
      desc: t.collections.cards.bridal.desc,
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=900&auto=format&fit=crop',
      tag: 'Royal Heritage Ensembles',
    },
    {
      id: 'pendants',
      title: lang === 'hi' ? 'राजसी पेंडेंट व लॉकेट' : 'Emerald & Solitaire Pendants',
      desc: lang === 'hi' ? 'प्राकृतिक पन्ना एवं शुद्ध सोने में जड़े पेंडेंट' : 'Columbian emeralds and octagonal cuts in 18K/22K gold settings',
      image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=900&auto=format&fit=crop',
      tag: 'Heirloom Emeralds',
    },
  ];

  // Tripled list for infinite looping
  const items = [...collectionList, ...collectionList, ...collectionList];

  const totalCards = items.length;
  const cardWidth = 285;
  const cardGap = 16;
  const stride = cardWidth + cardGap;
  const singleLoopWidth = collectionList.length * stride;

  // Real-time animation physics (zero React re-render overhead for silky 60fps)
  const scrollPos = useRef(0);
  const dragStartX = useRef(0);
  const dragStartScroll = useRef(0);
  const velocity = useRef(0);
  const lastDragTime = useRef(0);
  const lastDragX = useRef(0);

  // Direct GPU Transform Updates (Imperative RAF loop)
  useEffect(() => {
    let animationFrameId;

    const render3DCylinder = () => {
      // Auto-drift when not dragging and not hovering
      if (!isDragging && !isHovered) {
        scrollPos.current -= 0.85;

        // Apply inertia if released with drag velocity
        if (Math.abs(velocity.current) > 0.1) {
          scrollPos.current += velocity.current;
          velocity.current *= 0.95;
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

        // --- 3D CYLINDRICAL CURVE MATHEMATICS ---
        // 1. rotateY: Left cards turn right inward (+deg), right cards turn left inward (-deg)
        const rotateY = -34 * normalized;
        // 2. translateZ: Flanks recede deeply into z-space creating the dramatic concave cylinder
        const translateZ = -Math.pow(Math.abs(normalized), 1.65) * 140;
        // 3. translateY: Parabolic curve lifting both left & right edges upwards (exact curve from reference photo)
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

  // Drag Handlers (Mouse & Touch)
  const handleStartDrag = (clientX) => {
    setIsDragging(true);
    setShowHandPrompt(false);
    velocity.current = 0;
    dragStartX.current = clientX;
    dragStartScroll.current = scrollPos.current;
    lastDragX.current = clientX;
    lastDragTime.current = performance.now();
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

  const handleEndDrag = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const onMouseMove = (e) => handleMoveDrag(e.clientX);
    const onMouseUp = () => handleEndDrag();
    const onTouchMove = (e) => {
      if (e.touches[0]) handleMoveDrag(e.touches[0].clientX);
    };
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
  }, [isDragging, handleMoveDrag]);

  const handleCardClick = (catId) => {
    if (onSelectCategory) {
      onSelectCategory(catId);
    }
  };

  return (
    <section id="collections" className="py-24 bg-white text-charcoal overflow-hidden relative select-none">
      {/* Section Heading matching screenshot */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.collections.eyebrow}
          title={t.collections.heading}
          subtitle={t.collections.subheading}
        />
      </div>

      {/* 3D Cylindrical Curved Stage */}
      <div
        ref={stageRef}
        className="relative w-full overflow-hidden py-16 cursor-grab active:cursor-grabbing"
        style={{
          perspective: '900px',
          perspectiveOrigin: '50% 48%',
        }}
        onMouseDown={(e) => handleStartDrag(e.clientX)}
        onTouchStart={(e) => e.touches[0] && handleStartDrag(e.touches[0].clientX)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Soft Left & Right Ambient Vignette */}
        <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-30 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-30 pointer-events-none" />

        {/* 3D Track Container */}
        <div
          className="relative h-[440px] sm:h-[480px] w-full"
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {items.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              ref={(el) => (cardRefs.current[index] = el)}
              onClick={() => {
                if (!isDragging && Math.abs(velocity.current) < 1) {
                  handleCardClick(item.id);
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
              {/* Rounded Card: PURE PHOTO by default (NO badges or text until hover) */}
              <div className="w-full h-full relative overflow-hidden rounded-2xl bg-[#14213D] shadow-[0_20px_45px_rgba(0,0,0,0.18)] border border-[#E5E3DF]/20 transition-all duration-500 group-hover:border-[#B89B72] group-hover:shadow-[0_25px_60px_rgba(184,155,114,0.3)]">
                {/* Clean uninterrupted photograph */}
                <img
                  src={item.image}
                  alt={item.title}
                  draggable={false}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out pointer-events-none brightness-100"
                />

                {/* HOVER OVERLAY: Details appear ONLY when placing cursor on the photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#14213D]/95 via-[#14213D]/40 to-[#14213D]/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-5 pointer-events-none group-hover:pointer-events-auto backdrop-blur-[2px]">
                  {/* Top: Tag Badge & Action Arrow */}
                  <div className="flex items-center justify-between transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="bg-[#14213D]/90 backdrop-blur-sm text-white text-[9px] uppercase tracking-widest px-3 py-1 border border-white/20 font-medium rounded-full shadow-xs">
                      {item.tag}
                    </span>

                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white group-hover:bg-[#B89B72] group-hover:text-[#14213D] transition-all">
                      <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Bottom: Collection Title, Description & Action Buttons */}
                  <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-serif text-2xl text-white font-normal group-hover:text-[#B89B72] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-[#F5F4F2]/80 line-clamp-2 leading-relaxed font-sans font-light">
                      {item.desc}
                    </p>

                    <div className="mt-4 flex items-center gap-2 pt-2 border-t border-white/20">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCardClick(item.id);
                        }}
                        className="flex-1 py-2 rounded-full bg-white hover:bg-[#F5F4F2] text-[#14213D] text-[11px] uppercase tracking-widest font-semibold transition-all shadow-sm"
                      >
                        Explore Pieces →
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openWhatsApp({ customText: `Hello Devrani Jewellers, I am interested in viewing pieces from the ${item.title} collection.` });
                        }}
                        className="btn-gold-action p-2 rounded-full text-white active:scale-95 transition-all shadow-md"
                        title="Enquire on WhatsApp"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-white text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* White Hand Drag Icon */}
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
                {/* Pristine White Hand Glove Cursor */}
                <div className="w-14 h-14 bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.25)] border border-[#E5E3DF] flex items-center justify-center text-[#14213D]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8 text-[#14213D]"
                  >
                    <path d="M10 2a2 2 0 0 1 2 2v7.5l.5-.5a2 2 0 0 1 2.8 0l.5.5a2 2 0 0 1 2.8 0l1.4 1.4A4 4 0 0 1 21 16v2a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6v-3a4 4 0 0 1 1.2-2.8l2.6-2.6A2 2 0 0 1 9.6 9L10 9.4V4a2 2 0 0 1 2-2z" />
                  </svg>
                </div>
                <span className="mt-2 text-[10px] font-sans uppercase tracking-widest text-[#14213D] bg-white/95 px-3.5 py-1 shadow-md border border-[#E5E3DF] font-medium rounded-full">
                  Drag to curve & explore
                </span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Interactive Drag Hint */}
      <div className="mt-4 text-center">
        <p className="text-[11px] uppercase tracking-widest text-[#6B7280] font-sans">
          ← Smooth 3D Cylindrical Horizon • Drag or swipe to explore all collections →
        </p>
      </div>
    </section>
  );
}
