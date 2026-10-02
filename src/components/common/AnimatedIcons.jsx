import React from 'react';
import { motion } from 'framer-motion';

// Flaticon-Style Animated Diamond Gem Icon
export function AnimatedDiamondIcon({ className = "w-12 h-12" }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Outer subtle rotating halo */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border border-gold/30 border-dashed pointer-events-none"
      />

      <svg className="w-full h-full drop-shadow-sm" viewBox="0 0 64 64" fill="none">
        <defs>
          <linearGradient id="diamondGradMain" x1="16" y1="14" x2="48" y2="52" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFF2D1" />
            <stop offset="0.45" stopColor="#D4AF37" />
            <stop offset="1" stopColor="#9C771D" />
          </linearGradient>
          <linearGradient id="facetHighlight" x1="32" y1="14" x2="32" y2="52" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="1" stopColor="#FFE49E" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Diamond Base Polygon */}
        <polygon
          points="16,24 32,14 48,24 32,52"
          fill="url(#diamondGradMain)"
          stroke="#8E6E32"
          strokeWidth="1.2"
        />

        {/* Diamond Facets */}
        <line x1="16" y1="24" x2="48" y2="24" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.85" />
        <line x1="32" y1="14" x2="32" y2="52" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.8" />
        <line x1="24" y1="24" x2="32" y2="52" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.7" />
        <line x1="40" y1="24" x2="32" y2="52" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.7" />
        <line x1="32" y1="14" x2="24" y2="24" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.7" />
        <line x1="32" y1="14" x2="40" y2="24" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.7" />

        {/* Animated Twinkle Star 1 (Top Left) */}
        <motion.path
          d="M16 14L17.5 19L22.5 20.5L17.5 22L16 27L14.5 22L9.5 20.5L14.5 19Z"
          fill="#FFF9E6"
          stroke="#D4AF37"
          strokeWidth="0.5"
          animate={{
            scale: [0.6, 1.25, 0.6],
            opacity: [0.3, 1, 0.3],
            rotate: [0, 45, 0],
          }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Animated Twinkle Star 2 (Bottom Right) */}
        <motion.path
          d="M48 38L49 41.5L52.5 42.5L49 43.5L48 47L47 43.5L43.5 42.5L47 41.5Z"
          fill="#FFF9E6"
          stroke="#D4AF37"
          strokeWidth="0.5"
          animate={{
            scale: [1.2, 0.6, 1.2],
            opacity: [1, 0.4, 1],
            rotate: [0, -45, 0],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        />
      </svg>
    </div>
  );
}

// Flaticon-Style Animated Goldsmith Hammer / Craftsmanship Icon
export function AnimatedCraftsmanshipIcon({ className = "w-12 h-12" }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg className="w-full h-full drop-shadow-sm" viewBox="0 0 64 64" fill="none">
        <defs>
          <linearGradient id="hammerHeadGrad" x1="16" y1="16" x2="44" y2="28" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDEAB4" />
            <stop offset="0.5" stopColor="#D4AF37" />
            <stop offset="1" stopColor="#9C771D" />
          </linearGradient>
          <linearGradient id="handleGrad" x1="28" y1="28" x2="36" y2="52" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E2BD60" />
            <stop offset="1" stopColor="#8A6718" />
          </linearGradient>
        </defs>

        {/* Anvil Base Platform */}
        <path
          d="M14 48H50C50 48 46 42 42 42H22C18 42 14 48 14 48Z"
          fill="#524330"
          opacity="0.25"
        />

        {/* Hammer Group with Animated Tapping Motion */}
        <motion.g
          animate={{
            rotate: [0, -16, 6, 0],
            originX: "44px",
            originY: "48px",
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut",
          }}
        >
          {/* Wooden / Gold Handle */}
          <rect x="29" y="26" width="6" height="24" rx="2" fill="url(#handleGrad)" stroke="#7A5818" strokeWidth="1" />
          {/* Metal Hammer Head */}
          <rect x="18" y="16" width="28" height="12" rx="3" fill="url(#hammerHeadGrad)" stroke="#7A5818" strokeWidth="1.2" />
          <circle cx="16" cy="22" r="3" fill="#FFF2CE" />
          <circle cx="48" cy="22" r="2.5" fill="#FFE294" />
        </motion.g>

        {/* Spark Burst on Hammer Impact */}
        <motion.circle
          cx="20"
          cy="42"
          r="2.5"
          fill="#FFD255"
          animate={{
            scale: [0, 1.8, 0],
            opacity: [0, 1, 0],
            x: [-2, -8, -12],
            y: [0, -4, -6],
          }}
          transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2.8 }}
        />
        <motion.circle
          cx="44"
          cy="42"
          r="2"
          fill="#FFE8A3"
          animate={{
            scale: [0, 1.6, 0],
            opacity: [0, 1, 0],
            x: [2, 7, 10],
            y: [0, -5, -8],
          }}
          transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2.8, delay: 0.05 }}
        />
      </svg>
    </div>
  );
}

// Flaticon-Style Animated Heart / Ethically Sourced Icon
export function AnimatedHeartEthicalIcon({ className = "w-12 h-12" }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Expanding Pulse Ring */}
      <motion.div
        animate={{
          scale: [0.85, 1.35, 0.85],
          opacity: [0.4, 0, 0.4],
        }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full border border-gold/40 pointer-events-none"
      />

      <motion.div
        animate={{
          scale: [1, 1.08, 1, 1.05, 1],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-full h-full"
      >
        <svg className="w-full h-full drop-shadow-sm" viewBox="0 0 64 64" fill="none">
          <defs>
            <linearGradient id="heartGrad" x1="14" y1="16" x2="50" y2="52" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFF2D1" />
              <stop offset="0.45" stopColor="#D4AF37" />
              <stop offset="1" stopColor="#9C771D" />
            </linearGradient>
          </defs>

          {/* Heart Shape */}
          <path
            d="M32 50S14 38 14 24.5a11 11 0 0118-8.2 11 11 0 0118 8.2C50 38 32 50 32 50z"
            fill="url(#heartGrad)"
            stroke="#8E6E32"
            strokeWidth="1.2"
          />

          {/* Golden Hallmark Monogram Ribbon Inside */}
          <path
            d="M29 23v10h8"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="39" cy="21" r="2" fill="#FFFFFF" />

          {/* Tiny Golden Olive Leaf for Ethical Sourcing */}
          <motion.path
            d="M20 18C20 18 24 16 26 20C26 20 22 22 20 18Z"
            fill="#FFF5D6"
            stroke="#8E6E32"
            strokeWidth="0.8"
            animate={{ rotate: [-4, 6, -4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>
    </div>
  );
}

// Flaticon-Style Animated Chat Message Bubble (WhatsApp Concierge)
export function AnimatedChatBubbleIcon({ className = "w-7 h-7" }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg className="w-full h-full drop-shadow-sm" viewBox="0 0 36 36" fill="none">
        <path
          d="M18 4C10.268 4 4 9.82 4 17C4 19.82 5.14 22.42 7.08 24.52L5 32L12.86 29.84C14.44 30.58 16.18 31 18 31C25.732 31 32 25.18 32 17C32 9.82 25.732 4 18 4Z"
          fill="currentColor"
        />
        
        {/* 3 Animated Typing Indicator Dots inside the bubble */}
        <motion.circle
          cx="12"
          cy="17"
          r="1.75"
          fill="#1E1A17"
          animate={{ y: [0, -3.5, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: 0, ease: "easeInOut" }}
        />
        <motion.circle
          cx="18"
          cy="17"
          r="1.75"
          fill="#1E1A17"
          animate={{ y: [0, -3.5, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: 0.2, ease: "easeInOut" }}
        />
        <motion.circle
          cx="24"
          cy="17"
          r="1.75"
          fill="#1E1A17"
          animate={{ y: [0, -3.5, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: 0.4, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}

// Flaticon-Style Animated Royal Bridal Crown Icon
export function AnimatedCrownIcon({ className = "w-7 h-7" }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <motion.svg
        animate={{ y: [0, -2.5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="w-full h-full drop-shadow-[0_2px_8px_rgba(212,175,55,0.3)]"
        viewBox="0 0 36 36"
        fill="none"
      >
        <defs>
          <linearGradient id="crownGoldNew" x1="4" y1="6" x2="32" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFF9EA" />
            <stop offset="0.3" stopColor="#F5DE9B" />
            <stop offset="0.65" stopColor="#D4AF37" />
            <stop offset="1" stopColor="#8A6416" />
          </linearGradient>
          <linearGradient id="gemRuby" x1="16" y1="18" x2="20" y2="24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E63956" />
            <stop offset="1" stopColor="#8B1E2F" />
          </linearGradient>
        </defs>

        {/* Crown Arches & Body */}
        <path
          d="M5 25L8 11L14 18L18 8L22 18L28 11L31 25H5Z"
          fill="url(#crownGoldNew)"
          stroke="#755512"
          strokeWidth="1.1"
          strokeLinejoin="round"
        />

        {/* Embellished Base Band */}
        <rect x="5" y="25" width="26" height="3.5" rx="1.5" fill="#FFEBB0" stroke="#755512" strokeWidth="0.8" />

        {/* Royal Pearls on Crown Spikes */}
        <circle cx="8" cy="11" r="2" fill="#FFFFFF" stroke="#8A6416" strokeWidth="0.8" />
        <circle cx="18" cy="8" r="2.4" fill="#FFFFFF" stroke="#8A6416" strokeWidth="0.8" />
        <circle cx="28" cy="11" r="2" fill="#FFFFFF" stroke="#8A6416" strokeWidth="0.8" />

        {/* Inlaid Royal Gems */}
        <circle cx="18" cy="19.5" r="2.2" fill="url(#gemRuby)" stroke="#FFEBB0" strokeWidth="0.6" />
        <circle cx="11.5" cy="22" r="1.4" fill="#157F5A" stroke="#FFEBB0" strokeWidth="0.5" />
        <circle cx="24.5" cy="22" r="1.4" fill="#157F5A" stroke="#FFEBB0" strokeWidth="0.5" />

        {/* Twinkling Star Glint atop Crown */}
        <motion.path
          d="M18 2L19 5L22 6L19 7L18 10L17 7L14 6L17 5Z"
          fill="#FFF9EA"
          stroke="#D4AF37"
          strokeWidth="0.4"
          animate={{
            scale: [0.6, 1.3, 0.6],
            opacity: [0.4, 1, 0.4],
            rotate: [0, 90, 180],
          }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.svg>
    </div>
  );
}

// Flaticon-Style Animated Festive Diya / Sacred Light Icon
export function AnimatedDiyaSparkleIcon({ className = "w-7 h-7" }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg className="w-full h-full drop-shadow-[0_2px_8px_rgba(212,175,55,0.3)]" viewBox="0 0 36 36" fill="none">
        <defs>
          <linearGradient id="diyaGoldNew" x1="6" y1="18" x2="30" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFF9EA" />
            <stop offset="0.3" stopColor="#F5DE9B" />
            <stop offset="0.7" stopColor="#D4AF37" />
            <stop offset="1" stopColor="#8A6416" />
          </linearGradient>
          <linearGradient id="flameGrad" x1="18" y1="5" x2="18" y2="21" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFF8E7" />
            <stop offset="0.3" stopColor="#FFC837" />
            <stop offset="1" stopColor="#E65100" />
          </linearGradient>
        </defs>

        {/* Diya Base Pedestal */}
        <path d="M14 30H22L24 32H12L14 30Z" fill="#8A6416" />

        {/* Diya Sculpted Bowl */}
        <path
          d="M6 21C6 27.5 11.5 30 18 30C24.5 30 30 27.5 30 21C30 19.8 28.5 19.5 27 19.5H9C7.5 19.5 6 19.8 6 21Z"
          fill="url(#diyaGoldNew)"
          stroke="#755512"
          strokeWidth="1"
        />

        {/* Beaded Repoussé Rim */}
        <circle cx="10" cy="20.5" r="1.1" fill="#FFEBB0" />
        <circle cx="14" cy="20.5" r="1.1" fill="#FFEBB0" />
        <circle cx="18" cy="20.5" r="1.1" fill="#FFEBB0" />
        <circle cx="22" cy="20.5" r="1.1" fill="#FFEBB0" />
        <circle cx="26" cy="20.5" r="1.1" fill="#FFEBB0" />

        {/* Dancing Festive Flame */}
        <motion.path
          d="M18 5C18 5 12 12.5 12 17C12 20 14.5 21 18 21C21.5 21 24 20 24 17C24 12.5 18 5 18 5Z"
          fill="url(#flameGrad)"
          stroke="#F5DE9B"
          strokeWidth="0.6"
          animate={{
            scaleY: [1, 1.18, 0.94, 1.12, 1],
            scaleX: [1, 0.9, 1.08, 0.92, 1],
            rotate: [0, 5, -5, 3, 0],
            originX: "18px",
            originY: "21px",
          }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Inner Golden Core Flame */}
        <motion.ellipse
          cx="18"
          cy="16.5"
          rx="2.2"
          ry="3.2"
          fill="#FFFDF4"
          animate={{ scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />

        {/* Rising Sparkle Star */}
        <motion.path
          d="M26 8L27 10.5L29.5 11.5L27 12.5L26 15L25 12.5L22.5 11.5L25 10.5Z"
          fill="#FFF9EA"
          stroke="#D4AF37"
          strokeWidth="0.4"
          animate={{
            scale: [0.4, 1.1, 0.4],
            opacity: [0.2, 1, 0.2],
            y: [0, -4, 0],
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}

// Flaticon-Style Animated Everyday Solitaire Diamond Icon (Replaces Clock)
export function AnimatedEverydaySolitaireIcon({ className = "w-7 h-7" }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <motion.svg
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        className="w-full h-full drop-shadow-[0_2px_8px_rgba(212,175,55,0.3)]"
        viewBox="0 0 36 36"
        fill="none"
      >
        <defs>
          <linearGradient id="solitaireGoldNew" x1="8" y1="12" x2="28" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFF9EA" />
            <stop offset="0.3" stopColor="#F5DE9B" />
            <stop offset="0.7" stopColor="#D4AF37" />
            <stop offset="1" stopColor="#8A6416" />
          </linearGradient>
          <linearGradient id="diamondFacetGlow" x1="12" y1="8" x2="24" y2="24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" />
            <stop offset="0.6" stopColor="#E3F4FD" />
            <stop offset="1" stopColor="#C9E6F9" />
          </linearGradient>
        </defs>

        {/* Ring Band Ringlet Base */}
        <ellipse cx="18" cy="27" rx="10" ry="4" stroke="url(#solitaireGoldNew)" strokeWidth="2.2" fill="none" />

        {/* Solitaire 4-Prong Crown Basket */}
        <path d="M12 25L14 16H22L24 25" stroke="#8A6416" strokeWidth="1.2" />

        {/* Multi-Faceted Brilliant Solitaire Diamond */}
        <polygon
          points="13,16 23,16 26,11 18,7 10,11"
          fill="url(#diamondFacetGlow)"
          stroke="#7EA5BF"
          strokeWidth="0.8"
        />
        {/* Solitaire Facet Lines */}
        <line x1="10" y1="11" x2="26" y2="11" stroke="#FFFFFF" strokeWidth="1" />
        <line x1="18" y1="7" x2="18" y2="16" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.9" />
        <line x1="18" y1="7" x2="14" y2="11" stroke="#FFFFFF" strokeWidth="0.7" />
        <line x1="18" y1="7" x2="22" y2="11" stroke="#FFFFFF" strokeWidth="0.7" />
        <line x1="14" y1="11" x2="13" y2="16" stroke="#A7C6DC" strokeWidth="0.7" />
        <line x1="22" y1="11" x2="23" y2="16" stroke="#A7C6DC" strokeWidth="0.7" />
        <line x1="18" y1="11" x2="18" y2="16" stroke="#FFFFFF" strokeWidth="0.8" />

        {/* Rotating Solitaire Sparkle 1 */}
        <motion.path
          d="M10 8L11 10.5L13.5 11.5L11 12.5L10 15L9 12.5L6.5 11.5L9 10.5Z"
          fill="#FFF9EA"
          stroke="#D4AF37"
          strokeWidth="0.4"
          animate={{
            scale: [0.5, 1.25, 0.5],
            opacity: [0.3, 1, 0.3],
            rotate: [0, 90, 180],
          }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Rotating Solitaire Sparkle 2 */}
        <motion.path
          d="M26 15L27 17.5L29.5 18.5L27 19.5L26 22L25 19.5L22.5 18.5L25 17.5Z"
          fill="#FFF9EA"
          stroke="#D4AF37"
          strokeWidth="0.4"
          animate={{
            scale: [1.2, 0.5, 1.2],
            opacity: [1, 0.3, 1],
            rotate: [180, 90, 0],
          }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        />
      </motion.svg>
    </div>
  );
}

// Flaticon-Style Animated Luxury Gift Box Icon
export function AnimatedGiftBoxIcon({ className = "w-7 h-7" }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg className="w-full h-full drop-shadow-[0_2px_8px_rgba(212,175,55,0.3)]" viewBox="0 0 36 36" fill="none">
        <defs>
          <linearGradient id="giftGoldNew" x1="6" y1="14" x2="30" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFF9EA" />
            <stop offset="0.3" stopColor="#F5DE9B" />
            <stop offset="0.7" stopColor="#D4AF37" />
            <stop offset="1" stopColor="#8A6416" />
          </linearGradient>
          <linearGradient id="rubyRibbon" x1="16" y1="8" x2="20" y2="31" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D4324D" />
            <stop offset="0.5" stopColor="#A8283D" />
            <stop offset="1" stopColor="#691220" />
          </linearGradient>
        </defs>

        {/* Gift Box Body */}
        <rect
          x="7"
          y="17"
          width="22"
          height="14"
          rx="2"
          fill="url(#giftGoldNew)"
          stroke="#755512"
          strokeWidth="1"
        />

        {/* Ribbon Vertical Band */}
        <rect x="16.5" y="17" width="3.2" height="14" fill="url(#rubyRibbon)" />

        {/* Box Lid with Interactive Floating Lift Animation */}
        <motion.g
          animate={{
            y: [0, -2.8, 0],
          }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect
            x="5.5"
            y="13"
            width="25"
            height="4.5"
            rx="1.5"
            fill="#FFFDF7"
            stroke="#755512"
            strokeWidth="0.9"
          />
          <rect x="16.5" y="13" width="3.2" height="4.5" fill="url(#rubyRibbon)" />

          {/* Ribbon Bow on Lid */}
          <path
            d="M13.5 9.5C11 7 12 5 14.5 7C16.5 8.5 18 12 18 13C18 12 19.5 8.5 21.5 7C24 5 25 7 22.5 9.5C20.5 11.5 18 13 18 13C18 13 15.5 11.5 13.5 9.5Z"
            fill="url(#rubyRibbon)"
            stroke="#691220"
            strokeWidth="0.5"
          />
          {/* Bow Knot */}
          <circle cx="18" cy="12.5" r="1.5" fill="#FFEBB0" stroke="#8A6416" strokeWidth="0.5" />
        </motion.g>

        {/* Floating Sparkle Confetti */}
        <motion.circle
          cx="28"
          cy="9"
          r="1.2"
          fill="#D4AF37"
          animate={{
            scale: [0.6, 1.3, 0.6],
            opacity: [0.3, 1, 0.3],
            y: [0, -2, 0],
          }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="8"
          cy="10"
          r="1"
          fill="#FFF9EA"
          animate={{
            scale: [1, 0.4, 1],
            opacity: [1, 0.2, 1],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        />
      </svg>
    </div>
  );
}

// Flaticon-Style Animated BIS Hallmark / Guarantee Shield Icon
export function AnimatedShieldCertIcon({ className = "w-7 h-7" }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <motion.svg
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="w-full h-full drop-shadow-[0_2px_8px_rgba(212,175,55,0.3)]"
        viewBox="0 0 36 36"
        fill="none"
      >
        <defs>
          <linearGradient id="shieldGoldNew" x1="6" y1="4" x2="30" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFF9EA" />
            <stop offset="0.3" stopColor="#F5DE9B" />
            <stop offset="0.7" stopColor="#D4AF37" />
            <stop offset="1" stopColor="#8A6416" />
          </linearGradient>
        </defs>
        {/* Shield Body */}
        <path
          d="M18 4L6 8V18C6 25.5 11.2 31.8 18 33C24.8 31.8 30 25.5 30 18V8L18 4Z"
          fill="url(#shieldGoldNew)"
          stroke="#755512"
          strokeWidth="1.1"
        />
        {/* Inner Shield Bevel */}
        <path
          d="M18 6.5L8.5 9.8V17.8C8.5 23.8 12.6 29 18 30.2C23.4 29 27.5 23.8 27.5 17.8V9.8L18 6.5Z"
          fill="#1C1814"
          opacity="0.88"
        />
        {/* Gold Checkmark */}
        <motion.path
          d="M13 18L16.5 21.5L23 15"
          stroke="#F5DE9B"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ pathLength: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.svg>
    </div>
  );
}

// Flaticon-Style Animated Lifetime Exchange / Value Icon
export function AnimatedLifetimeValueIcon({ className = "w-7 h-7" }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg className="w-full h-full drop-shadow-[0_2px_8px_rgba(212,175,55,0.3)]" viewBox="0 0 36 36" fill="none">
        <defs>
          <linearGradient id="coinGold" x1="11" y1="11" x2="25" y2="25" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFF9EA" />
            <stop offset="0.3" stopColor="#F5DE9B" />
            <stop offset="0.7" stopColor="#D4AF37" />
            <stop offset="1" stopColor="#8A6416" />
          </linearGradient>
        </defs>
        {/* Orbiting Rotating Arrows */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{ originX: "18px", originY: "18px" }}
        >
          <path
            d="M18 5C24.5 5 29.8 10 30 16.5M30 16.5L33 13.5M30 16.5L27 13.5"
            stroke="#D4AF37"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 31C11.5 31 6.2 26 6 19.5M6 19.5L3 22.5M6 19.5L9 22.5"
            stroke="#D4AF37"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>
        {/* Central 24K Coin */}
        <circle cx="18" cy="18" r="7" fill="url(#coinGold)" stroke="#755512" strokeWidth="1" />
        <circle cx="18" cy="18" r="5" stroke="#755512" strokeWidth="0.6" strokeDasharray="1.5 1.5" />
        <text x="18" y="21" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#755512" fontFamily="serif">₹</text>
      </svg>
    </div>
  );
}

// Flaticon-Style Animated Atelier Compass / Craftsmanship Loupe Icon
export function AnimatedAtelierCompassIcon({ className = "w-7 h-7" }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg className="w-full h-full drop-shadow-[0_2px_8px_rgba(212,175,55,0.3)]" viewBox="0 0 36 36" fill="none">
        <defs>
          <linearGradient id="loupeGold" x1="8" y1="8" x2="28" y2="28" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFF9EA" />
            <stop offset="0.3" stopColor="#F5DE9B" />
            <stop offset="0.7" stopColor="#D4AF37" />
            <stop offset="1" stopColor="#8A6416" />
          </linearGradient>
        </defs>
        {/* Loupe Lens Rim */}
        <circle cx="16" cy="16" r="9" stroke="url(#loupeGold)" strokeWidth="2.2" fill="#1C1814" fillOpacity="0.8" />
        {/* Loupe Handle */}
        <line x1="22.5" y1="22.5" x2="31" y2="31" stroke="url(#loupeGold)" strokeWidth="3" strokeLinecap="round" />
        {/* Central Sparkling Solitaire inside Loupe */}
        <motion.path
          d="M16 11L18 13.5L20.5 14L18 16.5L16 19L14 16.5L11.5 14L14 13.5Z"
          fill="#FFF9EA"
          stroke="#D4AF37"
          strokeWidth="0.5"
          animate={{ scale: [0.85, 1.15, 0.85], rotate: [0, 45, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}

