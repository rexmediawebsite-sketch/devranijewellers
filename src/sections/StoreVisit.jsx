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
                    {lang === 'hi' ? 'मुख्य प्रतिष्ठान' : 'Main Showroom'}
                  </span>
                  <MapPin className="w-5 h-5 text-[#B89B72]" />
                </div>

                <h3 className="font-serif text-2xl text-[#14213D] font-normal">
                  {loc.name || CONFIG.shopName}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-[#14213D]/90 font-medium leading-relaxed">
                  {loc.address}
                </p>

                {loc.landmark && (
                  <p className="mt-1 text-xs text-[#B89B72] font-medium">
                    📍 {loc.landmark}
                  </p>
                )}

                {/* Real Showroom Photo Preview */}
                <div className="mt-4 mb-2 relative aspect-[16/9] rounded-xl overflow-hidden border border-[#E5E3DF] shadow-xs">
                  <img
                    src="/shop/storefront-night.jpg"
                    alt="Devrani Jewellers Storefront on Sona Patti Road"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2.5 left-2.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] text-white font-sans uppercase tracking-wider font-semibold border border-white/20">
                    {lang === 'hi' ? 'वास्तविक शोरूम • सोना पट्टी रोड' : 'Original Storefront • Sona Patti Road'}
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-[#E5E3DF] space-y-2.5 text-xs text-[#6B7280]">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#B89B72] shrink-0" />
                    <span className="font-medium text-[#14213D]">{loc.hours}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#B89B72] shrink-0" />
                      <a href={`tel:${loc.phone}`} className="hover:text-[#14213D] font-semibold text-[#14213D] transition-colors">
                        {loc.phone}
                      </a>
                    </div>
                    {loc.phoneSecondary && (
                      <div className="flex items-center gap-1.5 text-slate-500">
                        <span>•</span>
                        <a href={`tel:${loc.phoneSecondary}`} className="hover:text-[#14213D] font-semibold text-[#14213D] transition-colors">
                          {loc.phoneSecondary}
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 border border-[#E5E3DF] hover:border-[#14213D] bg-white text-xs uppercase tracking-wider text-[#14213D] transition-colors rounded-full font-medium shadow-xs"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#B89B72]" />
                    <span>{t.visit.getDirections}</span>
                  </a>

                  <button
                    onClick={() => openWhatsApp({ customText: `Hello Devrani Jewellers, I would like to visit your showroom on Sona Patti Road, Badi Bazar. Could you guide me?` })}
                    className="btn-gold-action inline-flex items-center gap-1.5 px-5 py-2.5 active:scale-95 text-white text-xs uppercase tracking-[0.16em] font-semibold shadow-sm transition-all rounded-full"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white text-white" />
                    <span>WhatsApp Showroom</span>
                  </button>
                  
                  <a
                    href={`tel:${CONFIG.phoneCall}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#14213D] hover:bg-[#1f2f52] active:scale-95 text-white text-xs uppercase tracking-wider font-semibold shadow-sm transition-all rounded-full"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#B89B72]" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            ))}

            {/* Book Appointment Highlight */}
            <div className="p-6 bg-[#14213D] text-[#F5F4F2] border border-[#E5E3DF]/20 shadow-xl rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-serif text-xl text-white">
                  {lang === 'hi' ? 'विशेष मुलाकात एवं सेवा' : 'Dedicated In-Store Consultation'}
                </h4>
                <p className="text-xs text-[#F5F4F2]/75 mt-1">
                  {lang === 'hi' ? 'बिना प्रतीक्षा किए शुद्धता जांच और मनपसंद आभूषण चयन।' : 'Zero waiting time, custom design discussions & genuine bullion rates.'}
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
          <div className="lg:col-span-6 min-h-[440px] bg-white border border-[#E5E3DF] shadow-md rounded-2xl overflow-hidden relative flex flex-col">
            <div className="py-2.5 px-4 bg-[#14213D] text-white flex items-center justify-between text-xs border-b border-[#E5E3DF]/20">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#B89B72]" />
                <span className="font-medium font-sans">Devrani Jewellers (DRJ) • Sitamarhi</span>
              </div>
              <a
                href={CONFIG.locations[0].mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B89B72] hover:bg-[#D4BE9B] text-[#14213D] font-semibold text-[11px] transition-all"
              >
                <span>Open Google Maps</span>
                <Navigation className="w-3 h-3" />
              </a>
            </div>
            <iframe
              title="Devrani Jewellers (DRJ) Official Google Map"
              src={CONFIG.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '440px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full flex-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
