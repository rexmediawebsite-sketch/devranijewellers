import React from 'react';
import { Link } from 'react-router-dom';
import { CONFIG } from '../../config';

/**
 * Luxury Brand Identity Component for Devrani Jewellers (DRJ)
 * Features an authentic atelier emblem seal, bold imperial serif typography,
 * and a refined hallmark badge for the (DRJ) monogram.
 */
export function BrandLogo({
  variant = 'light', // 'light' (navbar) | 'dark' (footer, mobile drawer)
  size = 'md',       // 'sm' | 'md' | 'lg'
  showEmblem = true,
  showTagline = true,
  asLink = true,
  onClick,
  className = '',
}) {
  const isDark = variant === 'dark';

  // Size configurations
  const sizeStyles = {
    sm: {
      emblem: 'w-7 h-7 text-[9px]',
      title: 'text-sm sm:text-base tracking-[0.14em]',
      badge: 'text-[8px] px-1 py-0.2',
      tagline: 'text-[8px] tracking-[0.22em]',
    },
    md: {
      emblem: 'w-9 h-9 sm:w-10 sm:h-10 text-[10px] sm:text-[11px]',
      title: 'text-lg sm:text-xl lg:text-2xl tracking-[0.16em] sm:tracking-[0.18em]',
      badge: 'text-[9px] sm:text-[10px] px-1.5 py-0.5',
      tagline: 'text-[8.5px] sm:text-[9.5px] tracking-[0.28em]',
    },
    lg: {
      emblem: 'w-12 h-12 sm:w-14 sm:h-14 text-xs sm:text-sm',
      title: 'text-2xl sm:text-3xl lg:text-4xl tracking-[0.18em]',
      badge: 'text-[10px] sm:text-xs px-2 py-0.5',
      tagline: 'text-[10px] sm:text-xs tracking-[0.3em]',
    },
  }[size] || sizeStyles.md;

  const content = (
    <div className={`flex items-center gap-2.5 sm:gap-3 group select-none ${className}`}>
      {/* Royal Atelier Monogram Seal Emblem */}
      {showEmblem && (
        <div
          className={`relative ${sizeStyles.emblem} rounded-full p-[1.5px] shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-sm ${
            isDark
              ? 'bg-gradient-to-tr from-[#9A7D55] via-[#D4BE9B] to-[#FAF6F0] shadow-[#000000]/40'
              : 'bg-gradient-to-tr from-[#9A7D55] via-[#B89B72] to-[#FAF6F0] shadow-gold-glow/40'
          }`}
          aria-hidden="true"
        >
          {/* Inner ring */}
          <div
            className={`w-full h-full rounded-full flex flex-col items-center justify-center border transition-colors ${
              isDark
                ? 'bg-[#14213D] border-[#D4BE9B]/40 group-hover:border-[#D4BE9B]'
                : 'bg-gradient-to-b from-[#FFFFFF] to-[#FAF6F0] border-[#B89B72]/30 group-hover:border-[#B89B72]'
            }`}
          >
            {/* Solitaire facet dot */}
            <span
              className={`w-1 h-1 rounded-full mb-0.5 ${
                isDark ? 'bg-[#D4BE9B]' : 'bg-[#B89B72]'
              }`}
            />
            {/* Monogram letters */}
            <span
              className={`font-cinzel font-extrabold tracking-widest leading-none ${
                isDark
                  ? 'text-[#D4BE9B] group-hover:text-white'
                  : 'text-[#14213D] group-hover:text-[#9A7D55]'
              } transition-colors`}
            >
              DRJ
            </span>
          </div>
        </div>
      )}

      {/* Brand Typography Lockup */}
      <div className="flex flex-col justify-center min-w-0">
        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
          {/* Primary Brand Name in Bold Regal Roman Capitals */}
          <span
            className={`font-cinzel font-extrabold uppercase leading-tight transition-colors ${sizeStyles.title} ${
              isDark
                ? 'text-white group-hover:text-[#D4BE9B]'
                : 'text-[#14213D] group-hover:text-[#B89B72]'
            }`}
          >
            Devrani Jewellers
          </span>

          {/* Distinguished (DRJ) Brand Mark Badge */}
          <span
            className={`inline-flex items-center justify-center font-cinzel font-extrabold uppercase tracking-wider rounded border shadow-2xs transition-all ${
              sizeStyles.badge
            } ${
              isDark
                ? 'bg-[#1F2F52]/80 border-[#D4BE9B]/50 text-[#D4BE9B] group-hover:border-[#D4BE9B] group-hover:text-white'
                : 'bg-gradient-to-r from-[#FAF6F0] to-[#F5F4F2] border-[#B89B72]/45 text-[#9A7D55] group-hover:border-[#B89B72] group-hover:text-[#14213D]'
            }`}
            title="Devrani Jewellers Signature Brandmark (DRJ)"
          >
            (DRJ)
          </span>
        </div>

        {/* Sub-Brand Heritage Descriptor */}
        {showTagline && (
          <div className="flex items-center gap-1.5 mt-0.5">
            <span
              className={`font-sans font-bold uppercase transition-colors leading-none ${sizeStyles.tagline} ${
                isDark ? 'text-[#D4BE9B]' : 'text-[#B89B72]'
              }`}
            >
              Pure Gold & Silver • Sitamarhi
            </span>
          </div>
        )}
      </div>
    </div>
  );

  if (asLink) {
    return (
      <Link to="/" onClick={onClick} className="inline-block focus:outline-hidden" aria-label="Devrani Jewellers (DRJ) Home">
        {content}
      </Link>
    );
  }

  return content;
}
