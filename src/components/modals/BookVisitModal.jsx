import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, MapPin, MessageCircle, User, Phone } from 'lucide-react';
import { useModals } from '../../context/ModalContext';
import { CONFIG } from '../../config';
import { openWhatsApp } from '../../utils/whatsapp';
import { trackEvent } from '../../utils/analytics';
import { useLanguage } from '../../i18n/LanguageContext';

export function BookVisitModal() {
  const { isBookVisitOpen, closeBookVisit } = useModals();
  const { lang } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    showroom: CONFIG.locations[0].city,
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0], // tomorrow default
    slot: CONFIG.storeVisitSlots[0],
    guestCount: '2',
  });

  if (!isBookVisitOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    trackEvent('store_visit_booking', {
      showroom: formData.showroom,
      slot: formData.slot,
      date: formData.date,
    });
    openWhatsApp({ storeVisit: formData });
    closeBookVisit();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeBookVisit}
          className="fixed inset-0 bg-[#14213D]/70 backdrop-blur-sm"
        />

        {/* Dialog Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative bg-white border border-[#E5E3DF] shadow-2xl rounded-2xl w-full max-w-lg max-h-[92vh] overflow-y-auto p-5 sm:p-8 z-10"
        >
          {/* Close */}
          <button
            onClick={closeBookVisit}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#F5F4F2] text-[#14213D] flex items-center justify-center hover:bg-[#14213D] hover:text-white transition-colors border border-[#E5E3DF]"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-1">
            <Calendar className="w-4 h-4 text-[#B89B72]" />
            <span className="text-[10px] uppercase tracking-widest text-[#B89B72] font-semibold">
              Private Salon Experience
            </span>
          </div>

          <h3 className="font-serif text-2xl md:text-3xl text-[#14213D]">
            {lang === 'hi' ? 'शोरूम मुलाकात बुक करें' : 'Reserve a Private Salon Viewing'}
          </h3>

          <p className="mt-2 text-xs text-[#6B7280] leading-relaxed">
            {lang === 'hi'
              ? 'हमारे विशेषज्ञों के साथ व्यक्तिगत मुलाकात तय करें। हम आपके लिए चुनिंदा आभूषण और चाय की व्यवस्था रखेंगे।'
              : 'Immerse yourself in our private viewing salon with a dedicated master jeweller, tailored previews, and authentic hospitality.'}
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {/* Showroom Selector */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#6B7280] mb-1.5 font-medium">
                Select Atelier / Showroom
              </label>
              <div className="grid grid-cols-2 gap-2">
                {CONFIG.locations.map((loc) => (
                  <button
                    type="button"
                    key={loc.city}
                    onClick={() => setFormData({ ...formData, showroom: loc.city })}
                    className={`py-2 px-3 text-xs border text-left flex items-center gap-2 transition-all rounded-lg ${
                      formData.showroom === loc.city
                        ? 'border-[#14213D] bg-[#14213D] font-medium text-white shadow-xs'
                        : 'border-[#E5E3DF] hover:border-[#14213D] text-[#14213D] bg-white'
                    }`}
                  >
                    <MapPin className={`w-3.5 h-3.5 flex-shrink-0 ${formData.showroom === loc.city ? 'text-white' : 'text-[#B89B72]'}`} />
                    <span className="line-clamp-1">{loc.city}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#6B7280] mb-1 font-medium">
                  Your Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#6B7280] absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Radhika Merchant"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 bg-white border border-[#E5E3DF] rounded-lg text-xs text-[#14213D] focus:outline-none focus:border-[#B89B72]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#6B7280] mb-1 font-medium">
                  WhatsApp Contact
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#6B7280] absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 bg-white border border-[#E5E3DF] rounded-lg text-xs text-[#14213D] focus:outline-none focus:border-[#B89B72]"
                  />
                </div>
              </div>
            </div>

            {/* Date */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#6B7280] mb-1 font-medium">
                Preferred Visit Date
              </label>
              <input
                type="date"
                required
                min={new Date().toISOString().split('T')[0]}
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-3 py-2 bg-white border border-[#E5E3DF] rounded-lg text-xs text-[#14213D] focus:outline-none focus:border-[#B89B72]"
              />
            </div>

            {/* Time Slot Chips */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#6B7280] mb-1.5 font-medium">
                Select Time Slot
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {CONFIG.storeVisitSlots.map((slot) => (
                  <button
                    type="button"
                    key={slot}
                    onClick={() => setFormData({ ...formData, slot })}
                    className={`py-1.5 px-2 text-[11px] border text-center transition-all rounded-lg ${
                      formData.slot === slot
                        ? 'border-[#14213D] bg-[#14213D] text-white font-medium shadow-xs'
                        : 'border-[#E5E3DF] bg-white hover:border-[#14213D] text-[#14213D]'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit */}
            <div className="pt-3">
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:scale-95 flex items-center justify-center gap-2 font-sans text-xs tracking-widest uppercase font-semibold text-white shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current text-white" />
                <span>Confirm & Send on WhatsApp</span>
              </button>
              <p className="text-[10px] text-[#6B7280] text-center mt-2">
                Opens directly in WhatsApp with your reserved appointment details.
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
