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

  // Fine-tuned typography sizing (proportional and balanced)
  const sizeStyles = {
    sm: {
      name: 'text-sm sm:text-base tracking-[0.06em]',
      drj: 'text-xs sm:text-sm tracking-[0.05em] ml-1.5',
      tagline: 'text-[8px] sm:text-[8.5px] tracking-[0.18em]',
    },
    md: {
      name: 'text-base sm:text-lg lg:text-xl tracking-[0.06em] sm:tracking-[0.08em]',
      drj: 'text-xs sm:text-sm lg:text-base tracking-[0.06em] ml-1.5 sm:ml-2',
      tagline: 'text-[8.5px] sm:text-[9.5px] tracking-[0.2em]',
    },
    lg: {
      name: 'text-xl sm:text-2xl lg:text-3xl tracking-[0.08em]',
      drj: 'text-base sm:text-xl tracking-[0.06em] ml-2',
      tagline: 'text-[9.5px] sm:text-xs tracking-[0.22em]',
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
