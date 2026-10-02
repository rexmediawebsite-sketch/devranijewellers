import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send, Image as ImageIcon } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { openWhatsApp } from '../utils/whatsapp';
import { trackEvent } from '../utils/analytics';
import { useLanguage } from '../i18n/LanguageContext';

export function CustomDesign() {
  const { t, lang } = useLanguage();

  const [form, setForm] = useState({
    name: '',
    phone: '',
    occasion: '',
    metal: '22K Yellow Gold (BIS 916)',
    budget: '',
    notes: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    trackEvent('custom_design_submission', {
      metal: form.metal,
      budget: form.budget,
      occasion: form.occasion,
    });
    openWhatsApp({ customDesign: form });
  };

  return (
    <section id="custom-design" className="py-24 bg-[#14213D] text-[#F5F4F2] relative overflow-hidden">
      {/* Decorative ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B89B72]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow={t.custom.eyebrow}
          title={t.custom.heading}
          subtitle={t.custom.subheading}
          dark={true}
        />

        <div className="bg-[#0C1527]/90 backdrop-blur-md border border-[#E5E3DF]/25 p-6 sm:p-12 rounded-3xl shadow-2xl relative">
          {/* Subtle champagne corner ornaments */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#B89B72] pointer-events-none rounded-tl-3xl" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#B89B72] pointer-events-none rounded-tr-3xl" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#B89B72] pointer-events-none rounded-bl-3xl" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#B89B72] pointer-events-none rounded-br-3xl" />

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#B89B72] mb-2 font-medium">
                  {t.custom.form.name} *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Maharani Gayatri Devi"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-[#14213D] border border-[#E5E3DF]/30 rounded-xl px-4 py-3 text-sm text-[#F5F4F2] focus:outline-none focus:border-[#B89B72] focus:ring-1 focus:ring-[#B89B72]/30 transition-all placeholder:text-[#F5F4F2]/30 shadow-xs"
                />
              </div>

              {/* WhatsApp Contact */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#B89B72] mb-2 font-medium">
                  {t.custom.form.phone} *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-[#14213D] border border-[#E5E3DF]/30 rounded-xl px-4 py-3 text-sm text-[#F5F4F2] focus:outline-none focus:border-[#B89B72] focus:ring-1 focus:ring-[#B89B72]/30 transition-all placeholder:text-[#F5F4F2]/30 shadow-xs"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Occasion */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#B89B72] mb-2 font-medium">
                  {t.custom.form.occasion}
                </label>
                <input
                  type="text"
                  placeholder={t.custom.form.occasionPlaceholder}
                  value={form.occasion}
                  onChange={(e) => setForm({ ...form, occasion: e.target.value })}
                  className="w-full bg-[#14213D] border border-[#E5E3DF]/30 rounded-xl px-4 py-3 text-sm text-[#F5F4F2] focus:outline-none focus:border-[#B89B72] focus:ring-1 focus:ring-[#B89B72]/30 transition-all placeholder:text-[#F5F4F2]/30 shadow-xs"
                />
              </div>

              {/* Metal / Gemstone */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#B89B72] mb-2 font-medium">
                  {t.custom.form.metal}
                </label>
                <select
                  value={form.metal}
                  onChange={(e) => setForm({ ...form, metal: e.target.value })}
                  className="w-full bg-[#14213D] border border-[#E5E3DF]/30 rounded-xl px-4 py-3 text-sm text-[#F5F4F2] focus:outline-none focus:border-[#B89B72] focus:ring-1 focus:ring-[#B89B72]/30 transition-all cursor-pointer shadow-xs"
                >
                  {t.custom.form.metalOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#14213D] text-[#F5F4F2]">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Estimated Budget */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#B89B72] mb-2 font-medium">
                  {t.custom.form.budget}
                </label>
                <input
                  type="text"
                  placeholder={t.custom.form.budgetPlaceholder}
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                  className="w-full bg-[#14213D] border border-[#E5E3DF]/30 rounded-xl px-4 py-3 text-sm text-[#F5F4F2] focus:outline-none focus:border-[#B89B72] focus:ring-1 focus:ring-[#B89B72]/30 transition-all placeholder:text-[#F5F4F2]/30 shadow-xs"
                />
              </div>
            </div>

            {/* Description / Notes */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#B89B72] mb-2 font-medium">
                {t.custom.form.notes}
              </label>
              <textarea
                rows={3}
                placeholder={t.custom.form.notesPlaceholder}
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                className="w-full bg-[#14213D] border border-[#E5E3DF]/30 rounded-xl px-4 py-3 text-sm text-[#F5F4F2] focus:outline-none focus:border-[#B89B72] focus:ring-1 focus:ring-[#B89B72]/30 transition-all placeholder:text-[#F5F4F2]/30 shadow-xs"
              />
            </div>

            {/* Photo Tip Banner */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#14213D]/60 border border-[#E5E3DF]/20 text-xs text-[#F5F4F2]/80 shadow-xs">
              <ImageIcon className="w-5 h-5 text-[#B89B72] flex-shrink-0 mt-0.5" />
              <span>{t.custom.form.photoTip}</span>
            </div>

            {/* Submit Button */}
            <div className="pt-2 text-center">
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-sans text-xs uppercase tracking-[0.2em] font-semibold shadow-md hover:scale-[1.02] transition-all inline-flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-4 h-4 fill-current text-white" />
                <span>{t.custom.form.submitBtn}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
