import React from 'react';
import { MapPin, Clock, Phone, Navigation, MessageCircle, Calendar } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { CONFIG } from '../config';
import { openWhatsApp } from '../utils/whatsapp';
import { useModals } from '../context/ModalContext';
import { useLanguage } from '../i18n/LanguageContext';

export function StoreVisit() {
  const { openBookVisit } = useModals();
  const { t, lang } = useLanguage();

  return (
    <section id="visit-us" className="py-24 bg-[#F5F4F2] text-[#14213D] border-y border-[#E5E3DF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.visit.eyebrow}
          title={t.visit.heading}
          subtitle={t.visit.subheading}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Flagship Information Cards */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            {CONFIG.locations.map((loc, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 bg-white border border-[#E5E3DF] shadow-sm relative group hover:border-[#B89B72] transition-colors rounded-2xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase tracking-widest text-[#B89B72] font-semibold bg-[#B89B72]/10 px-3 py-1 rounded-full">
                    {idx === 0 ? 'Primary Flagship' : 'Heritage Atelier'}
                  </span>
                  <MapPin className="w-5 h-5 text-[#B89B72]" />
                </div>

                <h3 className="font-serif text-2xl text-[#14213D] font-normal">
                  {loc.city}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                  {loc.address}
                </p>

                <div className="mt-4 pt-4 border-t border-[#E5E3DF] space-y-2 text-xs text-[#6B7280]">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#B89B72]" />
                    <span>{loc.hours}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#B89B72]" />
                    <a href={`tel:${loc.phone}`} className="hover:text-[#14213D] transition-colors">
                      {loc.phone}
                    </a>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#E5E3DF] hover:border-[#14213D] bg-white text-xs uppercase tracking-wider text-[#14213D] transition-colors rounded-full font-medium"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#B89B72]" />
                    <span>{t.visit.getDirections}</span>
                  </a>

                  <button
                    onClick={() => openWhatsApp({ customText: `Hello Aurelia, I would like to visit your ${loc.city} showroom. Could you provide parking or valet guidance?` })}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white text-xs uppercase tracking-wider font-semibold shadow-sm transition-all rounded-full"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current text-white" />
                    <span>WhatsApp Showroom</span>
                  </button>
                </div>
              </div>
            ))}

            {/* Book Appointment Highlight */}
            <div className="p-6 bg-[#14213D] text-[#F5F4F2] border border-[#E5E3DF]/20 shadow-xl rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-serif text-xl text-white">
                  {lang === 'hi' ? 'वीआईपी प्राइवेट विज़िट' : 'Private VIP Salon Appointment'}
                </h4>
                <p className="text-xs text-[#F5F4F2]/75 mt-1">
                  {lang === 'hi' ? 'बिना प्रतीक्षा किए समर्पित आभूषण विशेषज्ञ से मिलें।' : 'Zero waiting time, curated jewel vaults & complimentary styling.'}
                </p>
              </div>

              <button
                onClick={openBookVisit}
                className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-[#F5F4F2] text-[#14213D] font-sans text-xs uppercase tracking-widest font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all rounded-full shadow-md whitespace-nowrap flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#14213D]" />
                <span>{t.visit.bookVisitBtn}</span>
              </button>
            </div>
          </div>

          {/* Right: Google Maps Embed Iframe */}
          <div className="lg:col-span-6 min-h-[400px] bg-white border border-[#E5E3DF] shadow-sm rounded-2xl overflow-hidden relative">
            <iframe
              title="Aurelia Fine Jewellery Showroom Map"
              src={CONFIG.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '450px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter saturate-[0.85] contrast-[1.05]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
