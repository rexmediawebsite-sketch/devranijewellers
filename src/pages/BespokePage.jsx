import React from 'react';
import { PageBanner } from '../components/common/PageBanner';
import { CustomDesign } from '../sections/CustomDesign';
import { MessageCircle, Compass, PenTool, Gem, ShieldCheck, ArrowRight } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';
import { useLanguage } from '../i18n/LanguageContext';

export function BespokePage() {
  const { lang } = useLanguage();

  const steps = [
    {
      num: "01",
      icon: Compass,
      title: "Initial Vision & Consultation",
      titleHi: "विचार एवं परामर्श",
      desc: "Share reference sketches, Pinterest boards, or family heirloom memories with our master design consultants.",
      descHi: "अपने विचार, प्रेरणा चित्र या पारिवारिक आभूषण की फोटो हमारे डिज़ाइनर के साथ साझा करें।"
    },
    {
      num: "02",
      icon: PenTool,
      title: "3D CAD & Wax Prototype",
      titleHi: "3D डिज़ाइन एवं मोम मॉडल",
      desc: "Within 48 hours, receive high-resolution 3D digital renders from every angle. We refine dimensions until you are completely captivated.",
      descHi: "48 घंटे में 3D मॉडल देखें और अपनी पसंद अनुसार हर विवरण को अंतिम रूप दें।"
    },
    {
      num: "03",
      icon: Gem,
      title: "Hand-Setting by Karigars",
      titleHi: "हस्तनिर्मित गढ़ाई",
      desc: "Our senior goldsmiths hand-sculpt the 22K/18K gold matrix and set hand-selected conflict-free diamonds or Syndicate Polki.",
      descHi: "अनुभवी स्वर्णकार शुद्ध सोने में हीरों व रत्नों की बारीक गढ़ाई करते हैं।"
    },
    {
      num: "04",
      icon: ShieldCheck,
      title: "Hallmarking & Delivery",
      titleHi: "हॉलमार्किंग व डिलीवरी",
      desc: "Every creation is laser hallmarked by BIS authorities and delivered in an armoured insured vault box to your door.",
      descHi: "बीआईएस 916 हॉलमार्क प्रमाण पत्र के साथ सुरक्षित बीमित डिलीवरी।"
    },
  ];

  return (
    <div>
      <PageBanner
        eyebrow="BESPOKE HEIRLOOM ATELIER"
        title={lang === 'hi' ? 'अपनी पसंद का आभूषण बनवाएं' : 'Design Your Custom Masterpiece'}
        subtitle={lang === 'hi'
          ? 'आपके सपनों के आभूषण को शुद्ध सोने और प्रमाणित हीरों में साकार करने की कला।'
          : 'From initial sketch to certified heirloom. Collaborate directly with our master jewellers.'}
        breadcrumbCurrent="Bespoke Design"
      />

      {/* 4-Step Bespoke Journey */}
      <section className="py-20 bg-[#F5F4F2] text-[#14213D] border-b border-[#E5E3DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest font-sans font-semibold text-[#B89B72] block mb-2">
              The Journey of Creation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#14213D]">
              How Your Custom Jewel Comes to Life
            </h2>
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="w-12 h-[1px] bg-[#E5E3DF]" />
              <span className="w-1.5 h-1.5 rotate-45 border border-[#B89B72]" />
              <span className="w-12 h-[1px] bg-[#E5E3DF]" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={i}
                  className="p-6 bg-white border border-[#E5E3DF] shadow-sm relative group hover:border-[#B89B72] transition-colors rounded-2xl"
                >
                  <span className="font-serif text-3xl text-[#B89B72]/60 block mb-3 font-light">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#B89B72]/15 text-[#B89B72] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-cinzel text-lg font-medium text-[#14213D] mb-2">
                    {lang === 'hi' ? step.titleHi : step.title}
                  </h3>
                  <p className="text-xs text-[#6B7280] leading-relaxed font-sans">
                    {lang === 'hi' ? step.descHi : step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Consultation Form */}
      <CustomDesign />

      {/* Direct WhatsApp Concierge Prompt */}
      <section className="py-16 bg-[#F5F4F2] text-[#14213D] text-center border-t border-[#E5E3DF]">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="font-cinzel text-2xl sm:text-3xl text-[#14213D]">
            Already Have Sketches or Photos?
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-[#6B7280] max-w-xl mx-auto">
            You don't even need to fill the form—send photos directly to our Master Jeweller on WhatsApp for an immediate quotation and design feasibility study.
          </p>
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => openWhatsApp({ customText: 'Hello Aurelia Master Jeweller, I have a photo of a custom design I would like to recreate. May I share the photo here?' })}
              className="px-8 py-3.5 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white text-xs uppercase tracking-widest font-semibold shadow-md transition-all flex items-center gap-2 rounded-full"
            >
              <MessageCircle className="w-4 h-4 fill-current text-white" />
              <span>Share Photos on WhatsApp Direct</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
