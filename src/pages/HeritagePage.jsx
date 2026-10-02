import React from 'react';
import { PageBanner } from '../components/common/PageBanner';
import { Craftsmanship } from '../sections/Craftsmanship';
import { WhyChooseUs } from '../sections/WhyChooseUs';
import { Lookbook } from '../sections/Lookbook';
import { openWhatsApp } from '../utils/whatsapp';
import { MessageCircle, ShieldCheck, Gem, Award } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function HeritagePage() {
  const { lang } = useLanguage();

  return (
    <div>
      <PageBanner
        eyebrow="ANCESTRAL ROOTS • EST. 1978"
        title={lang === 'hi' ? 'पाँच दशकों की अटूट निष्ठा और कारीगरी' : 'Five Decades of Revered Heritage'}
        subtitle={lang === 'hi'
          ? 'जयपुर के जौहरी बाज़ार से लेकर दक्षिण मुंबई के ओपेरा हाउस तक की हमारी यात्रा।'
          : 'Preserving the sacred traditions of Rajasthani Jadau, Syndicate Polki, and master Bengal wire-filigree.'}
        breadcrumbCurrent="Our Heritage"
      />

      {/* Craftsmanship Narrative & Counters */}
      <Craftsmanship />

      {/* The 4 Aurelia Standards */}
      <WhyChooseUs />

      {/* Editorial Lookbook */}
      <Lookbook />

      {/* Hallmark & Diamond Lab Standards Guarantee Bar */}
      <section className="py-20 bg-[#F5F4F2] text-[#14213D] border-t border-[#E5E3DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 bg-white border border-[#E5E3DF] shadow-sm rounded-3xl text-center">
            <ShieldCheck className="w-12 h-12 text-[#B89B72] mx-auto mb-4" />
            <h3 className="font-cinzel text-2xl sm:text-3xl text-[#14213D]">
              Every Diamond Certified • Every Ounce Laser-Hallmarked
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-[#6B7280] max-w-2xl mx-auto leading-relaxed font-sans">
              We operate on absolute transparency. All solitaire diamonds above 0.30 ct are accompanied by international GIA or IGI certificates verifying colour, clarity, and cut proportions. Every gram of 22K/18K gold carries the government BIS hallmark with unique Karatmeter traceability.
            </p>
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => openWhatsApp({ customText: 'Hello Aurelia Atelier, I would like to know more about your diamond certification and gold hallmarking guarantees.' })}
                className="px-8 py-3.5 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white text-xs uppercase tracking-widest font-semibold shadow-md transition-all flex items-center gap-2 rounded-full"
              >
                <MessageCircle className="w-4 h-4 fill-current text-white" />
                <span>Enquire with Senior Gemmologist</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
