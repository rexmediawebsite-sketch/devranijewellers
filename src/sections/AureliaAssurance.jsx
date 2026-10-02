import React from 'react';
import { motion } from 'framer-motion';
import { CONFIG } from '../config';
import { TrendingUp, Award, HeartHandshake, ShieldCheck } from 'lucide-react';

export function AureliaAssurance() {
  return (
    <section className="py-20 sm:py-24 bg-white border-t border-[#E5E3DF] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-black/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Column: Heading & Tagline with Motion Reveal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left shrink-0 max-w-lg"
          >
            <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.28em] text-[#B89B72] block mb-2">
              The Aurelia Standard
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-normal text-[#14213D] tracking-tight">
              <span>Aurelia </span>
              <span className="text-[#B89B72] font-cinzel font-medium">Assurance</span>
            </h2>
            <p className="mt-3 font-serif text-lg sm:text-xl text-[#6B7280] font-light italic">
              Crafted by experts, cherished by you
            </p>

            {/* Live Gold Benchmark Micro-Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="mt-7 inline-flex flex-wrap items-center gap-2 sm:gap-2.5 px-4 py-2.5 sm:px-5 sm:py-3 bg-[#F5F4F2] border border-[#E5E3DF] rounded-2xl sm:rounded-full text-xs text-[#14213D] shadow-sm hover:border-[#B89B72] transition-all duration-300 max-w-full"
            >
              <div className="flex items-center gap-2 text-[#B89B72] font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <TrendingUp className="w-3.5 h-3.5 text-[#B89B72]" />
                <span className="uppercase tracking-[0.18em] text-[10px] font-sans font-semibold">Live Benchmark:</span>
              </div>
              <span className="font-sans text-[#14213D]/90">24K: <strong className="font-semibold text-[#14213D]">{CONFIG.rates.gold24k}</strong></span>
              <span className="text-[#6B7280]/40">•</span>
              <span className="font-sans text-[#14213D]/90">22K: <strong className="font-semibold text-[#14213D]">{CONFIG.rates.gold22k}</strong></span>
              <span className="text-[#6B7280]/40">•</span>
              <span className="font-sans text-[#14213D]/90">Silver: <strong className="font-semibold text-[#14213D]">{CONFIG.rates.silver999}</strong></span>
            </motion.div>
          </motion.div>

          {/* Right Column: 3 Assurance Badges */}
          <div className="grid grid-cols-3 gap-3 sm:gap-10 lg:gap-12 w-full max-w-2xl justify-items-center">
            
            {/* 1. Quality Craftsmanship */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -6 }}
              className="flex flex-col items-center text-center group cursor-default"
            >
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-[#F5F4F2] border border-[#E5E3DF] p-1 shadow-sm group-hover:border-[#B89B72] transition-all duration-300 flex items-center justify-center">
                <div className="w-full h-full rounded-[14px] bg-white flex items-center justify-center">
                  <Award className="w-7 h-7 sm:w-9 sm:h-9 text-[#B89B72] group-hover:scale-110 transition-transform duration-300" strokeWidth={1.35} />
                </div>
              </div>
              <h3 className="mt-3 sm:mt-4 font-cinzel text-[11px] sm:text-sm font-semibold tracking-[0.1em] sm:tracking-[0.14em] uppercase text-[#14213D] group-hover:text-[#B89B72] transition-colors leading-tight">
                Quality<br />Craftsmanship
              </h3>
            </motion.div>

            {/* 2. Ethically Sourced */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -6 }}
              className="flex flex-col items-center text-center group cursor-default"
            >
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-[#F5F4F2] border border-[#E5E3DF] p-1 shadow-sm group-hover:border-[#B89B72] transition-all duration-300 flex items-center justify-center">
                <div className="w-full h-full rounded-[14px] bg-white flex items-center justify-center">
                  <HeartHandshake className="w-7 h-7 sm:w-9 sm:h-9 text-[#B89B72] group-hover:scale-110 transition-transform duration-300" strokeWidth={1.35} />
                </div>
              </div>
              <h3 className="mt-3 sm:mt-4 font-cinzel text-[11px] sm:text-sm font-semibold tracking-[0.1em] sm:tracking-[0.14em] uppercase text-[#14213D] group-hover:text-[#B89B72] transition-colors leading-tight">
                Ethically<br />Sourced
              </h3>
            </motion.div>

            {/* 3. 100% Transparency */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -6 }}
              className="flex flex-col items-center text-center group cursor-default"
            >
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-[#F5F4F2] border border-[#E5E3DF] p-1 shadow-sm group-hover:border-[#B89B72] transition-all duration-300 flex items-center justify-center">
                <div className="w-full h-full rounded-[14px] bg-white flex items-center justify-center">
                  <ShieldCheck className="w-7 h-7 sm:w-9 sm:h-9 text-[#B89B72] group-hover:scale-110 transition-transform duration-300" strokeWidth={1.35} />
                </div>
              </div>
              <h3 className="mt-3 sm:mt-4 font-cinzel text-[11px] sm:text-sm font-semibold tracking-[0.1em] sm:tracking-[0.14em] uppercase text-[#14213D] group-hover:text-[#B89B72] transition-colors leading-tight">
                100%<br />Transparency
              </h3>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
