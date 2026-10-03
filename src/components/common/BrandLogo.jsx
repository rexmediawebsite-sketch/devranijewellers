import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Clean, Professional & Aesthetic Brand Typography for Devrani Jewellers (DRJ)
 * Pure, high-jewelry typography lockup with zero clunky logos or awkward boxes.
 */
export function BrandLogo({
  variant = 'light', // 'light' (navbar) | 'dark' (footer, mobile drawer)
  size = 'md',       // 'sm' | 'md' | 'lg'
  showTagline = true,
  asLink = true,
  onClick,
  className = '',
}) {
  const isDark = variant === 'dark';

  // Fine-tuned typography sizing (no awkward line wraps)
  const sizeStyles = {
    sm: {
      name: 'text-base sm:text-lg tracking-[0.12em]',
      drj: 'text-xs sm:text-sm tracking-[0.1em] ml-1.5',
      tagline: 'text-[8px] sm:text-[9px] tracking-[0.22em]',
    },
    md: {
      name: 'text-lg sm:text-2xl lg:text-[25px] tracking-[0.14em]',
      drj: 'text-sm sm:text-lg lg:text-xl tracking-[0.12em] ml-1.5 sm:ml-2',
      tagline: 'text-[9px] sm:text-[10px] tracking-[0.26em]',
    },
    lg: {
      name: 'text-2xl sm:text-3xl lg:text-4xl tracking-[0.16em]',
      drj: 'text-lg sm:text-2xl tracking-[0.14em] ml-2 sm:ml-2.5',
      tagline: 'text-[10px] sm:text-xs tracking-[0.28em]',
    },
  }[size] || sizeStyles.md;

  const content = (
    <div className={`flex flex-col group select-none ${className}`}>
      {/* Brand Name & (DRJ) on a single seamless luxury baseline */}
      <div className="flex items-baseline whitespace-nowrap leading-tight">
        <span
          className={`font-cinzel font-bold uppercase transition-colors duration-200 ${sizeStyles.name} ${
            isDark
              ? 'text-white group-hover:text-[#D4BE9B]'
              : 'text-[#14213D] group-hover:text-[#B89B72]'
          }`}
        >
          Devrani Jewellers
        </span>
        <span
          className={`font-cinzel font-bold transition-colors duration-200 ${sizeStyles.drj} ${
            isDark
              ? 'text-[#D4BE9B] group-hover:text-white'
              : 'text-[#B89B72] group-hover:text-[#9A7D55]'
          }`}
        >
          (DRJ)
        </span>
      </div>

      {/* Aesthetic High-Jewellery Subtitle */}
      {showTagline && (
        <span
          className={`font-sans font-semibold uppercase mt-0.5 whitespace-nowrap transition-colors duration-200 ${sizeStyles.tagline} ${
            isDark ? 'text-[#D4BE9B]' : 'text-[#B89B72]'
          }`}
        >
          Pure Gold & Silver • Sitamarhi
        </span>
      )}
    </div>
  );

  if (asLink) {
    return (
      <Link
        to="/"
        onClick={onClick}
        className="inline-block focus:outline-hidden"
        aria-label="Devrani Jewellers (DRJ) - Return to homepage"
      >
        {content}
      </Link>
    );
  }

  return content;
}
