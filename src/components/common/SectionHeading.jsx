import React from 'react';

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  dark = false,
  className = '',
}) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full mb-3 text-[10px] sm:text-[11px] uppercase tracking-[0.24em] font-sans font-semibold border transition-all ${
          dark 
            ? 'border-[#E5E3DF]/30 bg-white/10 text-[#D4BE9B] shadow-sm' 
            : 'border-[#E5E3DF] bg-[#F5F4F2] text-[#B89B72] shadow-2xs'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#B89B72] shrink-0" />
          <span>{eyebrow}</span>
        </div>
      )}
      
      {title && (
        <h2 className={`font-cinzel text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight ${
          dark ? 'text-white' : 'text-[#14213D]'
        } leading-tight`}>
          {title}
        </h2>
      )}

      {subtitle && (
        <p className={`mt-3 text-sm sm:text-base max-w-2xl font-serif font-light leading-relaxed italic ${
          centered ? 'mx-auto' : ''
        } ${dark ? 'text-white/75' : 'text-[#6B7280]'}`}>
          {subtitle}
        </p>
      )}

      {/* Refined decorative hairline divider */}
      <div className={`mt-5 flex items-center gap-2.5 ${centered ? 'justify-center' : 'justify-start'}`}>
        <span className="w-10 sm:w-14 h-[1px] bg-[#E5E3DF]" />
        <span className="w-1.5 h-1.5 rotate-45 border border-[#B89B72] bg-[#B89B72]/20" />
        <span className="w-10 sm:w-14 h-[1px] bg-[#E5E3DF]" />
      </div>
    </div>
  );
}
