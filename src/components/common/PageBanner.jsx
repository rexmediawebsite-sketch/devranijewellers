import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { CONFIG } from '../../config';

export function PageBanner({
  eyebrow,
  title,
  subtitle,
  breadcrumbCurrent,
}) {
  return (
    <div className="relative pt-28 pb-14 sm:pt-36 sm:pb-18 bg-gradient-to-b from-[#F5F4F2] via-[#FAF9F8] to-[#FFFFFF] text-[#14213D] overflow-hidden border-b border-[#E5E3DF]">
      {/* Subtle warm ambient glow in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[320px] bg-[#B89B72]/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-10 w-80 h-80 bg-white/70 rounded-full blur-3xl pointer-events-none" />

      {/* Large Decorative Faded Shop Name Watermark */}
      <div className="absolute inset-x-0 bottom-1 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-cinzel text-[13vw] font-bold text-[#14213D]/[0.02] uppercase tracking-[0.25em] leading-none whitespace-nowrap">
          {CONFIG.shopName}
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Breadcrumb pill */}
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#6B7280] mb-4 font-sans bg-white/80 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-[#E5E3DF] shadow-2xs"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="hover:text-[#B89B72] transition-colors font-medium">Home</Link>
          <ChevronRight className="w-3 h-3 text-[#B89B72]" />
          <span className="text-[#14213D] font-semibold">{breadcrumbCurrent}</span>
        </motion.nav>

        {/* Eyebrow Badge */}
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="block mb-3"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[10px] sm:text-[11px] uppercase tracking-[0.24em] font-sans font-semibold border border-[#E5E3DF] bg-white text-[#B89B72] shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B89B72] shrink-0" />
              <span>{eyebrow}</span>
            </div>
          </motion.div>
        )}

        {/* Stately Title */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.14 }}
          className="font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-normal text-[#14213D] tracking-tight leading-[1.18]"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="mt-3.5 text-xs sm:text-sm md:text-base text-[#6B7280] max-w-2xl mx-auto font-sans font-normal leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Refined decorative hairline divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-6 flex items-center justify-center gap-2.5"
        >
          <span className="w-10 sm:w-14 h-[1px] bg-[#E5E3DF]" />
          <span className="w-1.5 h-1.5 rotate-45 border border-[#B89B72] bg-[#B89B72]/20" />
          <span className="w-10 sm:w-14 h-[1px] bg-[#E5E3DF]" />
        </motion.div>
      </div>
    </div>
  );
}
