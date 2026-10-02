import React, { useState } from 'react';
import { PageBanner } from '../components/common/PageBanner';
import { FAQSection } from '../sections/FAQSection';
import { openWhatsApp } from '../utils/whatsapp';
import { Ruler, MessageCircle, HelpCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function CareGuidePage() {
  const { lang } = useLanguage();

  const [activeTab, setActiveTab] = useState('ring');
  const [unit, setUnit] = useState('mm');
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(null);

  const ringSizes = [
    { indian: 8, us: 4.5, circMm: 48.0, diaMm: 15.3 },
    { indian: 10, us: 5.25, circMm: 50.0, diaMm: 15.9 },
    { indian: 12, us: 6.0, circMm: 52.0, diaMm: 16.5 },
    { indian: 14, us: 7.0, circMm: 54.0, diaMm: 17.2 },
    { indian: 16, us: 7.75, circMm: 56.0, diaMm: 17.8 },
    { indian: 18, us: 8.5, circMm: 58.0, diaMm: 18.5 },
    { indian: 20, us: 9.25, circMm: 60.0, diaMm: 19.1 },
    { indian: 22, us: 10.0, circMm: 62.0, diaMm: 19.8 },
    { indian: 24, us: 10.75, circMm: 64.0, diaMm: 20.4 },
  ];

  const bangleSizes = [
    { size: '2-2', diaInches: '2.125"', diaMm: '54.0 mm', wristCirc: '6.7 inches' },
    { size: '2-4', diaInches: '2.250"', diaMm: '57.2 mm', wristCirc: '7.1 inches' },
    { size: '2-6', diaInches: '2.375"', diaMm: '60.3 mm', wristCirc: '7.5 inches' },
    { size: '2-8', diaInches: '2.500"', diaMm: '63.5 mm', wristCirc: '7.8 inches' },
    { size: '2-10', diaInches: '2.625"', diaMm: '66.7 mm', wristCirc: '8.2 inches' },
  ];

  const handleCalculate = (e) => {
    e.preventDefault();
    const val = parseFloat(inputValue);
    if (!val || val <= 0) return;

    let circMm = unit === 'inches' ? val * 25.4 : val;

    let closest = ringSizes[0];
    let minDiff = Math.abs(ringSizes[0].circMm - circMm);

    for (let i = 1; i < ringSizes.length; i++) {
      const diff = Math.abs(ringSizes[i].circMm - circMm);
      if (diff < minDiff) {
        minDiff = diff;
        closest = ringSizes[i];
      }
    }
    setResult(closest);
  };

  return (
    <div>
      <PageBanner
        eyebrow="CLIENT CONCIERGE"
        title={lang === 'hi' ? 'आभूषण माप, देखभाल एवं अक्सर पूछे जाने वाले प्रश्न' : 'Sizing, Care & Client Services'}
        subtitle={lang === 'hi'
          ? 'सटीक अंगूठी साइज़, कंगन माप और शुद्धता संबंधी समस्त जानकारी।'
          : 'Interactive calculators, lifetime hallmarking assurances, and heirloom preservation tips.'}
        breadcrumbCurrent="Care & FAQ"
      />

      {/* Embedded Full Sizing Studio */}
      <section className="py-20 bg-[#F5F4F2] text-[#14213D] border-b border-[#E5E3DF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest font-sans font-semibold text-[#B89B72] block mb-2">
              Interactive Sizing Studio
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#14213D]">
              Find Your Perfect Fit
            </h2>
          </div>

          <div className="bg-white border border-[#E5E3DF] shadow-sm rounded-2xl p-6 sm:p-10">
            {/* Tab switch */}
            <div className="flex border-b border-[#E5E3DF] mb-8">
              <button
                onClick={() => setActiveTab('ring')}
                className={`pb-3 px-6 font-serif text-lg border-b-2 transition-all ${
                  activeTab === 'ring'
                    ? 'border-[#14213D] text-[#14213D] font-semibold'
                    : 'border-transparent text-[#6B7280] hover:text-[#14213D]'
                }`}
              >
                Ring Size Calculator
              </button>
              <button
                onClick={() => setActiveTab('bangle')}
                className={`pb-3 px-6 font-serif text-lg border-b-2 transition-all ${
                  activeTab === 'bangle'
                    ? 'border-[#14213D] text-[#14213D] font-semibold'
                    : 'border-transparent text-[#6B7280] hover:text-[#14213D]'
                }`}
              >
                Indian Bangle Chart
              </button>
            </div>

            {activeTab === 'ring' ? (
              <div className="space-y-6">
                <form onSubmit={handleCalculate} className="space-y-4">
                  <label className="block text-xs uppercase tracking-wider text-[#6B7280] font-medium">
                    Enter finger circumference:
                  </label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="number"
                      step="0.1"
                      required
                      placeholder={unit === 'mm' ? 'e.g. 54.0' : 'e.g. 2.12'}
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      className="flex-1 bg-white border border-[#E5E3DF] rounded-lg px-4 py-2.5 text-sm text-[#14213D] focus:outline-none focus:border-[#B89B72]"
                    />
                    <select
                      value={unit}
                      onChange={(e) => setUnit(e.target.value)}
                      className="bg-white border border-[#E5E3DF] rounded-lg px-4 py-2.5 text-sm text-[#14213D] focus:outline-none"
                    >
                      <option value="mm">Millimeters (mm)</option>
                      <option value="inches">Inches</option>
                    </select>
                    <button
                      type="submit"
                      className="px-8 py-2.5 bg-[#14213D] hover:bg-[#1a2d54] text-white text-xs uppercase tracking-widest transition-colors font-semibold rounded-lg shadow-sm"
                    >
                      Calculate
                    </button>
                  </div>
                </form>

                {result && (
                  <div className="p-5 bg-white border-l-4 border-[#B89B72] border-y border-r border-[#E5E3DF] rounded-r-lg shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#B89B72] font-semibold block">
                        Estimated Gauge Size
                      </span>
                      <p className="font-serif text-2xl text-[#14213D]">
                        Indian Ring Size: <strong>{result.indian}</strong>
                      </p>
                    </div>
                    <div className="text-xs text-[#6B7280]">
                      <span>US Equiv: Size {result.us}</span> | 
                      <span> Internal Dia: {result.diaMm} mm</span>
                    </div>
                  </div>
                )}

                <div className="overflow-x-auto border border-[#E5E3DF] rounded-lg">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#F5F4F2] text-[#14213D] uppercase tracking-wider border-b border-[#E5E3DF]">
                      <tr>
                        <th className="p-3">Indian Size</th>
                        <th className="p-3">US / Canada</th>
                        <th className="p-3">Circumference (mm)</th>
                        <th className="p-3">Internal Dia (mm)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5E3DF] bg-white">
                      {ringSizes.map((row) => (
                        <tr key={row.indian} className="hover:bg-[#F5F4F2]/50">
                          <td className="p-3 font-medium text-[#14213D]">{row.indian}</td>
                          <td className="p-3 text-[#6B7280]">{row.us}</td>
                          <td className="p-3 text-[#6B7280]">{row.circMm} mm</td>
                          <td className="p-3 text-[#6B7280]">{row.diaMm} mm</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="p-4 bg-[#F5F4F2] border border-[#E5E3DF] rounded-xl flex gap-3 items-start">
                  <HelpCircle className="w-5 h-5 text-[#B89B72] flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-[#6B7280] leading-relaxed">
                    Indian bangle sizes (e.g. 2-4, 2-6) describe inside diameter in inches and 16ths of an inch. A size 2-4 means 2 inches and 4/16 inch = 2.25 inches.
                  </p>
                </div>

                <div className="overflow-x-auto border border-[#E5E3DF] rounded-lg">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#F5F4F2] text-[#14213D] uppercase tracking-wider border-b border-[#E5E3DF]">
                      <tr>
                        <th className="p-3">Bangle Size</th>
                        <th className="p-3">Inside Diameter</th>
                        <th className="p-3">Inside Dia (mm)</th>
                        <th className="p-3">Recommended Wrist Size</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5E3DF] bg-white">
                      {bangleSizes.map((b) => (
                        <tr key={b.size} className="hover:bg-[#F5F4F2]/50">
                          <td className="p-3 font-medium text-[#14213D]">{b.size}</td>
                          <td className="p-3 text-[#6B7280]">{b.diaInches}</td>
                          <td className="p-3 text-[#6B7280]">{b.diaMm}</td>
                          <td className="p-3 text-[#6B7280]">{b.wristCirc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Accordion FAQ & Care Guide */}
      <FAQSection />
    </div>
  );
}
