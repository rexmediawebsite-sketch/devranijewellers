import React from 'react';

export function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

export function FacebookIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );
}

// Authentic Haute Joaillerie Brilliant-Cut Solitaire Diamond Icon (replaces cheap AI sparkles)
export function LuxuryDiamondIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Crown Table & Facets */}
      <polygon points="6,9 12,3 18,9 12,21" />
      <line x1="6" y1="9" x2="18" y2="9" />
      <line x1="9" y1="9" x2="12" y2="21" />
      <line x1="15" y1="9" x2="12" y2="21" />
      <line x1="12" y1="3" x2="9" y2="9" />
      <line x1="12" y1="3" x2="15" y2="9" />
    </svg>
  );
}

// 8-Pointed Fine Jewellery Royal Étoile Starburst (Haute Joaillerie Atelier Hallmark)
export function LuxuryStarGlint({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      {/* 4 Primary Slender Diamond Rays + 4 Subtle Secondary Points */}
      <path d="M12 1L13.5 8.5L21 10L13.5 11.5L12 19L10.5 11.5L3 10L10.5 8.5L12 1Z" />
      <path d="M12 5.5L13 9.5L17 10L13 10.5L12 14.5L11 10.5L7 10L11 9.5L12 5.5Z" opacity="0.6" />
    </svg>
  );
}

// Crisp official WhatsApp icon
export function WhatsAppIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.1-.477-.15-.678.15-.2.301-.778.98-.954 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.501-1.786-1.677-2.087-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.301-.502.1-.2.05-.376-.025-.527-.075-.15-.678-1.631-.929-2.235-.245-.588-.494-.509-.678-.518-.176-.009-.377-.01-.578-.01-.2 0-.527.075-.803.376s-1.054 1.03-1.054 2.511c0 1.481 1.079 2.91 1.229 3.111.15.201 2.124 3.243 5.145 4.549.719.311 1.28.497 1.717.636.722.23 1.378.198 1.898.12.58-.088 1.78-.727 2.03-1.43.25-.704.25-1.307.175-1.432-.075-.125-.276-.201-.577-.351zM12.04 2C6.54 2 2.08 6.46 2.08 11.96c0 1.98.58 3.82 1.58 5.37L2 22l4.82-1.57c1.5 1 3.29 1.57 5.22 1.57 5.5 0 9.96-4.46 9.96-9.96 0-5.5-4.46-10.04-9.96-10.04z" />
    </svg>
  );
}

