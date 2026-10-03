import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { InstagramIcon } from '../components/common/BrandIcons';
import { SectionHeading } from '../components/common/SectionHeading';
import { CONFIG } from '../config';
import { useLanguage } from '../i18n/LanguageContext';

export function Testimonials() {
  const { t, lang } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      author: "Aditi Rao Singhania",
      city: "Mumbai",
      rating: 5,
      date: "3 weeks ago",
      text: "We ordered our entire daughter's bridal set from Devrani Jewellers. The purity of the gold, the hallmarking transparency, and their warm hospitality exceeded every expectation. An absolute family heirloom we will treasure for generations.",
      source: "Verified Family Review",
    },
    {
      id: 2,
      author: "Vikramaditya & Sanjana",
      city: "Badi Bazar",
      rating: 5,
      date: "1 month ago",
      text: "We have been purchasing gold and silver ornaments from Devrani Jewellers for family weddings. The karigari and honest weighing makes them our most trusted jeweller.",
      source: "Verified Patron",
    },
    {
      id: 3,
      author: "Meenakshi Devi",
      city: "Nearby Town",
      rating: 5,
      date: "2 months ago",
      text: "Their antique necklace and silver utensils have an unmatched finish. The staff is polite, rates are genuine, and purity is 100% hallmarked.",
      source: "Trusted Patron",
    },
  ];

  const instagramPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=600&auto=format&fit=crop",
      tag: "#DevraniJewellers",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600&auto=format&fit=crop",
      tag: "#SolitaireLove",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=600&auto=format&fit=crop",
      tag: "#KundanEarrings",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1611591475152-47754694b87e?q=80&w=600&auto=format&fit=crop",
      tag: "#GoldFiligree",
    },
  ];

  // Auto-play testimonial carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section className="py-24 bg-white text-[#14213D] border-t border-[#E5E3DF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.testimonials.eyebrow}
          title={t.testimonials.heading}
          subtitle={t.testimonials.subheading}
        />

        {/* Minimal Testimonial Slider */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="relative p-8 sm:p-14 bg-[#F5F4F2] border border-[#E5E3DF] rounded-3xl shadow-sm text-center">
            {/* 5-Star Rating Row */}
            <div className="flex items-center justify-center gap-1 text-[#B89B72] mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#B89B72]" />
              ))}
            </div>

            {/* Quote Text */}
            <p className="font-serif text-lg sm:text-2xl text-[#14213D] font-light italic leading-relaxed min-h-[100px]">
              "{reviews[currentIndex].text}"
            </p>

            {/* Author info */}
            <div className="mt-8 flex flex-col items-center">
              <div className="flex items-center gap-2">
                <span className="font-serif text-base sm:text-lg font-medium text-[#14213D]">
                  {reviews[currentIndex].author}
                </span>
                <CheckCircle className="w-4 h-4 text-emerald-600" />
              </div>
              <span className="text-xs text-[#6B7280] mt-0.5">
                {reviews[currentIndex].city} • {reviews[currentIndex].source}
              </span>
            </div>

            {/* Carousel navigation controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))}
                className="w-9 h-9 rounded-full border border-[#E5E3DF] flex items-center justify-center text-[#14213D] hover:bg-[#14213D] hover:text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex gap-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-1.5 transition-all duration-300 rounded-full ${
                      currentIndex === i ? 'w-6 bg-[#B89B72]' : 'w-2 bg-[#E5E3DF]'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setCurrentIndex((prev) => (prev + 1) % reviews.length)}
                className="w-9 h-9 rounded-full border border-[#E5E3DF] flex items-center justify-center text-[#14213D] hover:bg-[#14213D] hover:text-white transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Curated Instagram Photo Showcase Grid */}
        <div className="pt-10 border-t border-[#E5E3DF]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B89B72] font-medium font-sans">
                Community & Patrons
              </span>
              <h3 className="font-cinzel text-2xl text-[#14213D] font-medium">
                {t.testimonials.instagramTitle}
              </h3>
            </div>

            <a
              href={CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#E5E3DF] hover:border-[#B89B72] bg-white text-xs uppercase tracking-wider text-[#14213D] hover:text-[#B89B72] shadow-2xs transition-all font-medium"
            >
              <InstagramIcon className="w-4 h-4 text-[#B89B72]" />
              <span>{t.testimonials.viewInstagram}</span>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {instagramPosts.map((post) => (
              <a
                key={post.id}
                href={CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden bg-[#14213D] border border-[#E5E3DF] rounded-2xl shadow-sm hover:border-[#B89B72] transition-all"
              >
                <img
                  src={post.image}
                  alt="Devrani Jewellers Story"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 brightness-95 group-hover:brightness-105"
                />
                <div className="absolute inset-0 bg-[#14213D]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white backdrop-blur-[1px]">
                  <InstagramIcon className="w-6 h-6" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
