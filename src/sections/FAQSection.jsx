import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Ruler, Shield, HeartHandshake } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { useModals } from '../context/ModalContext';
import { useLanguage } from '../i18n/LanguageContext';

export function FAQSection() {
  const { openSizeGuide } = useModals();
  const { t, lang } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Are all gold ornaments 100% BIS Hallmarked?",
      qHi: "क्या सभी सोने के आभूषण 100% बीआईएस हॉलमार्क हैं?",
      a: "Yes. Every single piece crafted at Devrani Jewellers (DRJ) carries the laser-inscribed Bureau of Indian Standards (BIS 916) hallmark, Karat purity mark, and genuine jeweller identification stamp. We provide physical hallmarking authentication cards and authentic invoices with every purchase.",
      aHi: "हाँ। देवरानी ज्वैलर्स (DRJ) का प्रत्येक आभूषण लेज़र बीआईएस 916 हॉलमार्क, शुद्धता चिह्न और सरकारी मानकों के साथ आता है। हम हर खरीद के साथ पक्का बिल और प्रमाण पत्र प्रदान करते हैं।"
    },
    {
      q: "What is your lifetime exchange and buyback policy?",
      qHi: "आपकी आजीवन एक्सचेंज और बायबैक नीति क्या है?",
      a: "We offer transparent 100% exchange value on gold weight based on current prevailing bullion market rates at any time. Diamonds and precious gemstones are exchanged at 90% prevailing market value. No hidden handling or deduction charges.",
      aHi: "हम दैनिक बाज़ार भाव पर सोने के वज़न पर 100% एक्सचेंज मूल्य प्रदान करते हैं। हीरों और रत्नों पर 90% बायबैक मूल्य मिलता है।"
    },
    {
      q: "How does the bespoke custom design process work?",
      qHi: "कस्टम आभूषण निर्माण की प्रक्रिया कैसे काम करती है?",
      a: "Simply share your inspiration photo, Pinterest link, or napkin sketch via our custom design form or WhatsApp. Our master designers will provide a 3D CAD render within 48 hours. Once approved, the piece is cast and hand-set within 10 to 14 business days.",
      aHi: "आप अपनी पसंद की फोटो या विचार व्हाट्सएप पर साझा कर सकते हैं। हमारे डिज़ाइनर 48 घंटे में 3D डिज़ाइन प्रदान करेंगे और स्वीकृति के 10-14 दिनों में आभूषण तैयार कर दिया जाएगा।"
    },
    {
      q: "How are making charges computed?",
      qHi: "मेकिंग चार्जेस (घड़ाई शुल्क) कैसे तय होते हैं?",
      a: "Our making charges start from a modest 7% for classic machine-cast chains up to 14-18% for intricate hand-sculpted temple Nakshi or uncut Syndicate Polki sets, reflecting authentic artisanal labor with zero hidden markups.",
      aHi: "हमारे मेकिंग चार्जेस साधारण आभूषणों के लिए 7% से शुरू होकर बारीक हस्तनिर्मित पोलकी व मंदिर आभूषणों के लिए 14-18% तक होते हैं।"
    },
    {
      q: "Do you ship jewellery securely across India and internationally?",
      qHi: "क्या आप भारत और विदेशों में सुरक्षित डिलीवरी करते हैं?",
      a: "Yes. All shipments are 100% insured from our vault door to your doorstep using specialized armoured carriers (Malca-Amit & BVC Logistics). Delivery includes tamper-evident security sealing and OTP verification upon handover.",
      aHi: "हाँ। सभी पार्सल 100% बीमित होते हैं और विशेष सुरक्षा कूरियर द्वारा ओटीपी सत्यापन के बाद ही सौंपे जाते हैं।"
    },
  ];

  return (
    <section className="py-24 bg-[#F5F4F2] text-[#14213D] relative border-t border-[#E5E3DF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.faq.eyebrow}
          title={t.faq.heading}
        />

        {/* Ring & Bangle Size Guide Callout */}
        <div className="mb-12 p-6 bg-white border border-[#E5E3DF] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-[#B89B72]/15 flex items-center justify-center text-[#B89B72] flex-shrink-0">
              <Ruler className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-lg text-[#14213D]">
                {lang === 'hi' ? 'अंगूठी व कंगन का सटीक साइज़ जानना चाहते हैं?' : 'Need Help Finding Your Exact Ring or Bangle Size?'}
              </h4>
              <p className="text-xs text-[#6B7280] mt-0.5">
                {lang === 'hi' ? 'हमारे इंटरएक्टिव साइज़ कैलकुलेटर का उपयोग करें।' : 'Use our precision millimeter-to-gauge calculator and Indian bangle chart.'}
              </p>
            </div>
          </div>

          <button
            onClick={openSizeGuide}
            className="w-full sm:w-auto px-6 py-2.5 bg-[#14213D] hover:bg-[#1a2d54] text-white text-xs uppercase tracking-wider font-semibold rounded-full shadow-sm transition-colors whitespace-nowrap"
          >
            {lang === 'hi' ? 'साइज़ कैलकुलेटर खोलें' : 'Open Size Calculator'}
          </button>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-[#E5E3DF] bg-white rounded-xl shadow-xs transition-colors overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-[#F5F4F2]/50 transition-colors"
                >
                  <span className="font-serif text-lg text-[#14213D] font-normal">
                    {lang === 'hi' ? faq.qHi : faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full border border-[#E5E3DF] flex items-center justify-center text-[#14213D] transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180 bg-[#14213D] text-white border-[#14213D]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#6B7280] leading-relaxed border-t border-[#E5E3DF] font-sans font-light">
                        {lang === 'hi' ? faq.aHi : faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Heirloom Jewellery Care Guide Section */}
        <div className="mt-20 pt-12 border-t border-[#E5E3DF]">
          <h3 className="font-serif text-2xl md:text-3xl text-center text-[#14213D] mb-8">
            {t.faq.careHeading}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.faq.careTips.map((tip, idx) => (
              <div
                key={idx}
                className="p-5 bg-white border border-[#E5E3DF] rounded-xl shadow-xs"
              >
                <span className="text-[#B89B72] font-serif text-xl block mb-2 font-medium">
                  0{idx + 1}.
                </span>
                <h4 className="font-serif text-base text-[#14213D] font-medium mb-1">
                  {tip.title}
                </h4>
                <p className="text-xs text-[#6B7280] leading-relaxed font-sans">
                  {tip.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
