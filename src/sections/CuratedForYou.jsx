import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const GENDER_ITEMS = [
  {
    id: 'women',
    title: 'Women Jewellery',
    subtitle: 'Heirloom Necklaces, Chandbalis & Bridal Sets',
    image: '/showcase/women.jpg',
    link: '/collections?persona=women',
  },
  {
    id: 'men',
    title: 'Men Jewellery',
    subtitle: '22K Gold Chains, Royal Kadas & Solitaire Rings',
    image: '/showcase/men.jpg',
    link: '/collections?persona=men',
  },
  {
    id: 'kids',
    title: 'Kids Jewellery',
    subtitle: 'Delicate Nazariyas, Baby Charms & First Gold',
    image: '/showcase/kids.jpg',
    link: '/collections?persona=kids',
  },
];

export function CuratedForYou() {
  return (
    <section className="py-20 sm:py-24 bg-[#F5F4F2] border-t border-[#E5E3DF] relative overflow-hidden">
      {/* Background subtle aura */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-black/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Fade-Up */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.28em] text-[#B89B72] block mb-2">
            Personalized Elegance
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-normal text-[#14213D] tracking-tight">
            Curated For You
          </h2>
          <p className="mt-2.5 font-serif text-lg sm:text-xl text-[#6B7280] font-light italic">
            Shop By Gender
          </p>
        </motion.div>

        {/* 3 Portrait Cards with Staggered Fade-Up */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {GENDER_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8 }}
              className="flex flex-col"
            >
              <Link
                to={item.link}
                className="group flex flex-col items-center cursor-pointer text-center focus:outline-none w-full"
              >
                {/* Image Frame */}
                <div className="w-full aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-sm border border-[#E5E3DF] group-hover:shadow-md group-hover:border-[#B89B72]/60 transition-all duration-500 relative">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top sm:object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Subtle bottom vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14213D]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Diagonal shimmer sweep line on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                  {/* Explore pill with rotation on hover */}
                  <motion.div
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/95 backdrop-blur-xs text-[#14213D] border border-[#E5E3DF] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm"
                    whileHover={{ scale: 1.15, rotate: 45 }}
                  >
                    <ArrowUpRight className="w-4 h-4 text-[#B89B72]" />
                  </motion.div>
                </div>

                {/* Title Below */}
                <h3 className="mt-5 font-cinzel text-lg sm:text-xl font-medium text-[#14213D] group-hover:text-[#B89B72] transition-colors duration-300 tracking-wide">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-[#6B7280] font-sans font-light tracking-wide max-w-xs">
                  {item.subtitle}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
