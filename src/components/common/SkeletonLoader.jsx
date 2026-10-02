import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function SkeletonLoader({ onComplete }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Graceful initial content load timeout
    const timer = setTimeout(() => {
      setLoading(false);
      if (onComplete) onComplete();
    }, 750);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[10000] bg-white overflow-hidden pointer-events-none flex flex-col justify-start"
          aria-hidden="true"
        >
          {/* Top Navbar Skeleton Placeholder */}
          <div className="w-full bg-white/95 border-b border-[#E5E3DF] py-3.5 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              {/* Logo Skeleton */}
              <div className="space-y-1.5">
                <div className="h-5 sm:h-6 w-36 sm:w-44 rounded-md bg-[#E5E3DF]/70 animate-pulse" />
                <div className="h-2.5 w-24 rounded bg-[#E5E3DF]/50 animate-pulse" />
              </div>

              {/* Desktop Nav Links Skeleton */}
              <div className="hidden lg:flex items-center gap-7">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="h-3 rounded-full bg-[#E5E3DF]/60 animate-pulse"
                    style={{ width: `${60 + (i % 3) * 16}px` }}
                  />
                ))}
              </div>

              {/* Right Action Icons Skeleton */}
              <div className="flex items-center gap-3">
                <div className="h-7 w-14 rounded-full bg-[#E5E3DF]/60 animate-pulse" />
                <div className="h-8 w-8 rounded-full bg-[#E5E3DF]/60 animate-pulse" />
                <div className="hidden sm:block h-8 w-28 rounded-full bg-[#E5E3DF]/70 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Hero Section Skeleton Layout (matching Stitch 2-column Hero) */}
          <div className="flex-1 w-full bg-[#F5F4F2] pt-8 sm:pt-14 pb-12 sm:pb-20 border-b border-[#E5E3DF] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                
                {/* Left Column: Headline & Action Skeletons */}
                <div className="lg:col-span-6 space-y-6 sm:space-y-7">
                  {/* Eyebrow badge placeholder */}
                  <div className="h-7 w-60 sm:w-72 rounded-full bg-white border border-[#E5E3DF] animate-pulse" />

                  {/* Headline Bars */}
                  <div className="space-y-3">
                    <div className="h-10 sm:h-14 w-full rounded-xl bg-[#E5E3DF]/75 animate-pulse" />
                    <div className="h-10 sm:h-14 w-4/5 rounded-xl bg-[#E5E3DF]/60 animate-pulse" />
                  </div>

                  {/* Description Paragraph */}
                  <div className="space-y-2 pt-1 max-w-lg">
                    <div className="h-3.5 w-full rounded bg-[#E5E3DF]/60 animate-pulse" />
                    <div className="h-3.5 w-5/6 rounded bg-[#E5E3DF]/50 animate-pulse" />
                    <div className="h-3.5 w-3/4 rounded bg-[#E5E3DF]/40 animate-pulse" />
                  </div>

                  {/* CTA Buttons Skeleton */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
                    <div className="h-12 w-full sm:w-44 rounded-full bg-[#E5E3DF]/80 animate-pulse" />
                    <div className="h-12 w-full sm:w-56 rounded-full bg-[#E5E3DF]/70 animate-pulse" />
                  </div>

                  {/* Trust Metrics Grid */}
                  <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#E5E3DF]">
                    <div className="h-14 rounded-xl bg-white border border-[#E5E3DF]/80 animate-pulse" />
                    <div className="h-14 rounded-xl bg-white border border-[#E5E3DF]/80 animate-pulse" />
                  </div>
                </div>

                {/* Right Column: Visual Showcase Frame Skeleton */}
                <div className="lg:col-span-6 relative">
                  <div className="mx-auto max-w-lg lg:max-w-none rounded-2xl sm:rounded-3xl aspect-[3/4] bg-white border border-[#E5E3DF] shadow-md relative overflow-hidden flex flex-col justify-end p-4 sm:p-6 animate-pulse">
                    {/* Inner Shimmering Ambient Layer */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#E5E3DF]/50 via-[#F5F4F2] to-white" />

                    {/* Floating Bottom Card Skeleton */}
                    <div className="relative z-10 w-full p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/95 border border-[#E5E3DF] shadow-sm flex items-center justify-between">
                      <div className="space-y-2 flex-1 pr-3">
                        <div className="h-2.5 w-20 rounded bg-[#E5E3DF]/70" />
                        <div className="h-4 w-36 rounded bg-[#E5E3DF]/90" />
                        <div className="h-2.5 w-44 rounded bg-[#E5E3DF]/60" />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-[#E5E3DF]/80 shrink-0" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Named alias for backward compatibility
export const Preloader = SkeletonLoader;
