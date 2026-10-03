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
      name: 'text-base sm:text-lg tracking-[0.1em]',
      tagline: 'text-[8px] sm:text-[8.5px] tracking-[0.2em]',
    },
    md: {
      name: 'text-lg sm:text-xl lg:text-2xl tracking-[0.12em]',
      tagline: 'text-[8.5px] sm:text-[9.5px] tracking-[0.22em]',
    },
    lg: {
      name: 'text-2xl sm:text-3xl lg:text-4xl tracking-[0.14em]',
      tagline: 'text-[10px] sm:text-xs tracking-[0.26em]',
    },
  }[size] || sizeStyles.md;

  const content = (
    <div className={`flex flex-col group select-none ${className}`}>
      {/* Brand Name */}
      <span
        className={`font-cinzel font-bold uppercase whitespace-nowrap leading-tight transition-colors duration-200 ${sizeStyles.name} ${isDark
            ? 'text-white group-hover:text-[#D4BE9B]'
            : 'text-[#14213D] group-hover:text-[#B89B72]'
          }`}
      >
        Devrani Jewellers
      </span>

      {/* Aesthetic High-Jewellery Subtitle */}
      {showTagline && (
        <span
          className={`font-sans font-semibold uppercase mt-0.5 whitespace-nowrap transition-colors duration-200 ${sizeStyles.tagline} ${isDark ? 'text-[#D4BE9B]' : 'text-[#B89B72]'
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
