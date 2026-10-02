import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionHeading } from '../components/common/SectionHeading';
import { useLanguage } from '../i18n/LanguageContext';
import { useReducedMotion } from '../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export function Lookbook() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const lookbookItems = [
    {
      id: 1,
      title: "The Royal Rajputana Bridal",
      season: "Haute Heirlooms 2026",
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200&auto=format&fit=crop",
      caption: "Layered Polki chokers in 22K gold, accented with hand-carved emerald leaves.",
    },
    {
      id: 2,
      title: "Midnight Solitaire Romance",
      season: "Celestial Solitaires",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop",
      caption: "Triple-row micro-pavé band showcasing a 3-carat certified cushion brilliant.",
    },
    {
      id: 3,
      title: "Chettinad Temple Nakshi",
      season: "Sacred Heritage",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop",
      caption: "Deep relief hand-embossed motifs celebrating classical Dravidian temple architecture.",
    },
    {
      id: 4,
      title: "Zambian Emerald Radiance",
      season: "Vivid Flora",
      image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1200&auto=format&fit=crop",
      caption: "Crescent chandbalis draped with luminous South Sea pearls and uncut jadau stones.",
    },
  ];

  useEffect(() => {
    // Only apply GSAP horizontal scroll pin on desktop screens and when reduced motion is off
    if (prefersReducedMotion || window.innerWidth < 1024) return;

    const section = sectionRef.current;
    const container = containerRef.current;
    if (!section || !container) return;

    const totalWidth = container.scrollWidth - window.innerWidth + 120;

    const tween = gsap.to(container, {
      x: -totalWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${totalWidth}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      tween.scrollTrigger && tween.scrollTrigger.kill();
      tween.kill();
    };
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-24 bg-[#14213D] text-[#F5F4F2] border-t border-[#E5E3DF]/20 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <SectionHeading
          eyebrow={t.lookbook.eyebrow}
          title={t.lookbook.heading}
          subtitle={t.lookbook.subheading}
          dark={true}
        />
      </div>

      {/* Horizontal Carousel Track */}
      <div
        ref={containerRef}
        className="flex gap-8 px-4 sm:px-8 lg:px-16 overflow-x-auto lg:overflow-visible pb-6 lg:pb-0 scrollbar-none"
      >
        {lookbookItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[300px] sm:w-[420px] lg:w-[500px] bg-[#0C1527] border border-[#E5E3DF]/25 shadow-2xl group overflow-hidden rounded-2xl"
          >
            <div className="aspect-4/5 w-full overflow-hidden relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14213D] via-transparent to-transparent opacity-80" />
            </div>

            <div className="p-6">
              <span className="text-[10px] uppercase tracking-widest text-[#B89B72] font-semibold block">
                {item.season}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-white mt-1">
                {item.title}
              </h3>
              <p className="mt-2 text-xs text-[#F5F4F2]/75 line-clamp-2 leading-relaxed font-sans">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
