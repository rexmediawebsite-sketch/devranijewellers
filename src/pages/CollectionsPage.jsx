import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { PageBanner } from '../components/common/PageBanner';
import { FeaturedProducts } from '../sections/FeaturedProducts';
import { OccasionGuide } from '../sections/OccasionGuide';
import { openWhatsApp } from '../utils/whatsapp';
import { useLanguage } from '../i18n/LanguageContext';
import { LuxuryDiamondIcon } from '../components/common/BrandIcons';

export function CollectionsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { lang } = useLanguage();

  const activeCategory = searchParams.get('category') || 'all';
  const activeOccasion = searchParams.get('occasion') || 'all';
  const activeBudget = searchParams.get('budget') || 'all';
  const activePersona = searchParams.get('persona') || 'all';

  const handleCategoryChange = (catId) => {
    const newParams = new URLSearchParams(searchParams);
    if (catId === 'all') {
      newParams.delete('category');
    } else {
      newParams.set('category', catId);
    }
    setSearchParams(newParams);
  };

  const handleOccasionChange = (occId) => {
    const newParams = new URLSearchParams(searchParams);
    if (occId === 'all') {
      newParams.delete('occasion');
    } else {
      newParams.set('occasion', occId);
    }
    setSearchParams(newParams);
  };

  const handleBudgetChange = (budgetId) => {
    const newParams = new URLSearchParams(searchParams);
    if (budgetId === 'all') {
      newParams.delete('budget');
    } else {
      newParams.set('budget', budgetId);
    }
    setSearchParams(newParams);
  };

  const handleResetFilters = (type) => {
    const newParams = new URLSearchParams(searchParams);
    if (type === 'all') {
      setSearchParams({});
    } else if (type === 'category') {
      newParams.delete('category');
      setSearchParams(newParams);
    } else if (type === 'occasion') {
      newParams.delete('occasion');
      setSearchParams(newParams);
    } else if (type === 'budget') {
      newParams.delete('budget');
      setSearchParams(newParams);
    }
  };

  return (
    <div>
      <PageBanner
        eyebrow="HAUTE JOAILLERIE"
        title={lang === 'hi' ? 'सम्पूर्ण आभूषण संग्रह' : 'The Aurelia Masterpiece Catalogue'}
        subtitle={lang === 'hi'
          ? 'शुद्ध 22K/24K बीआईएस 916 हॉलमार्क सोना, सिंडिकेट पोलकी और प्रमाणित सॉलिटेयर।'
          : 'Discover certified bridal ensembles, handcrafted polki chokers, solitaires, and heirloom filigree cuffs.'}
        breadcrumbCurrent="Collections"
      />

      {/* Occasion & Budget Guide Filter Bar */}
      <OccasionGuide
        activeOccasion={activeOccasion}
        onSelectOccasion={handleOccasionChange}
        activeBudget={activeBudget}
        onSelectBudget={handleBudgetChange}
      />

      {/* Full Catalog with Search, Sorting, Filter Chips & WhatsApp */}
      <FeaturedProducts
        activeCategory={activeCategory}
        onSelectCategory={handleCategoryChange}
        activeOccasion={activeOccasion}
        activeBudget={activeBudget}
        activePersona={activePersona}
        onResetFilters={handleResetFilters}
      />

      {/* Bespoke Custom Creation Prompt */}
      <section className="py-16 bg-[#F5F4F2] text-[#14213D] text-center border-t border-[#E5E3DF]">
        <div className="max-w-3xl mx-auto px-4">
          <LuxuryDiamondIcon className="w-8 h-8 text-[#B89B72] mx-auto mb-3" />
          <h3 className="font-cinzel text-2xl sm:text-3xl text-[#14213D]">
            Seeking a Specific Diamond Cut or Custom Weight?
          </h3>
          <p className="mt-3 text-xs sm:text-sm text-[#6B7280] max-w-xl mx-auto">
            Our atelier crafts custom bespoke jewels tailored to your exact finger measurement, diamond carat weight, and aesthetic vision.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/bespoke"
              className="px-8 py-3.5 bg-[#14213D] hover:bg-[#1a2d54] text-white text-xs uppercase tracking-widest font-semibold rounded-full shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all inline-flex items-center gap-2"
            >
              <span>Design Your Custom Piece</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
            <button
              onClick={() => openWhatsApp({ customText: 'Hello Aurelia Concierge, I browsed your collections catalogue and would like to ask about custom piece customization.' })}
              className="px-8 py-3.5 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white text-xs uppercase tracking-widest font-semibold flex items-center gap-2 rounded-full shadow-md hover:scale-[1.02] transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current text-white" />
              <span>Ask Jeweller on WhatsApp</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
