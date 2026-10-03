import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { LuxuryDiamondIcon } from '../components/common/BrandIcons';

const OCCASION_ITEMS = [
  {
    id: 'wedding',
    badge: 'GRAND BRIDAL',
    title: 'Wedding',
    subtitle: 'Royal Polki, Temple Sets & Heirloom Kundan',
    image: '/showcase/wedding.jpg',
    link: '/collections?occasion=wedding',
    gradient: 'from-[#14213D]/90 via-[#14213D]/35 to-transparent',
  },
  {
    id: 'diamond',
    badge: 'SOLITAIRE COLLECTION',
    title: 'Diamond',
    subtitle: 'Brilliant Solitaires, Tennis Bands & Modern Chokers',
    image: '/showcase/diamond.jpg',
    link: '/collections?category=rings',
    gradient: 'from-[#14213D]/90 via-[#14213D]/35 to-transparent',
  },
];

export function AureliaWorld() {
  return (
    <section className="py-20 sm:py-24 bg-white border-t border-[#E5E3DF] relative overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute -top-20 right-10 w-96 h-96 bg-black/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Fade In */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.28em] text-[#B89B72] block mb-2">
            Signature Ensembles
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-normal text-[#14213D] tracking-tight">
            Devrani Jewellers Collections
          </h2>
          <p className="mt-2.5 font-serif text-lg sm:text-xl text-[#6B7280] font-light italic">
            A companion for every occasion
          </p>
        </motion.div>

        {/* 2 Wide Feature Cards with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {OCCASION_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 45, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.8,
                delay: index * 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8 }}
              className="flex"
            >
              <Link
                to={item.link}
                className="group block relative w-full rounded-2xl sm:rounded-3xl overflow-hidden aspect-[16/11] sm:aspect-[16/10] bg-[#14213D]/5 shadow-md hover:shadow-2xl transition-all duration-500 border border-[#E5E3DF] hover:border-[#B89B72]/70"
              >
                {/* Image with Ken Burns Hover */}
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top sm:object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Gradient Shade on Bottom */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${item.gradient} transition-opacity duration-300 pointer-events-none`}
                />

                {/* Floating Top Badge */}
                <motion.div
                  className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-[#E5E3DF]/30 text-[10px] sm:text-[11px] font-sans font-medium text-white tracking-[0.2em] uppercase shadow-sm">
                    <LuxuryDiamondIcon className="w-3.5 h-3.5 text-[#B89B72] shrink-0" />
                    <span>{item.badge}</span>
                  </span>
                </motion.div>

                {/* Text on Bottom Center */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 flex flex-col items-center justify-end text-center z-10">
                  <h3 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-wide drop-shadow-md group-hover:translate-y-[-2px] transition-transform duration-300">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-200 font-sans tracking-wide max-w-sm hidden sm:block">
                    {item.subtitle}
                  </p>
                  
                  <span className="mt-4 px-6 py-2.5 rounded-full bg-white/20 hover:bg-white/35 backdrop-blur-md border border-white/40 text-[11px] font-sans uppercase tracking-[0.2em] font-semibold text-white flex items-center gap-2 group-hover:bg-[#14213D] group-hover:border-[#14213D] group-hover:text-white transition-all duration-300 shadow-sm">
                    <span>Explore Masterpieces</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
