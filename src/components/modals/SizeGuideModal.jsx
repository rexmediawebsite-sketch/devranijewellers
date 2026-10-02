import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Ruler, HelpCircle } from 'lucide-react';
import { useModals } from '../../context/ModalContext';
import { useLanguage } from '../../i18n/LanguageContext';

export function SizeGuideModal() {
  const { isSizeGuideOpen, closeSizeGuide } = useModals();
  const { t, lang } = useLanguage();

  const [activeTab, setActiveTab] = useState('ring'); // 'ring' | 'bangle'
  const [unit, setUnit] = useState('mm'); // 'mm' | 'inches'
  const [inputValue, setInputValue] = useState('');
  const [calculationResult, setCalculationResult] = useState(null);

  if (!isSizeGuideOpen) return null;

  // Indian Ring Size mapping table (circumference mm to Indian size & US size)
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

    let circMm = val;
    if (unit === 'inches') {
      circMm = val * 25.4;
    }

    // Find closest ring size
    let closest = ringSizes[0];
    let minDiff = Math.abs(ringSizes[0].circMm - circMm);

    for (let i = 1; i < ringSizes.length; i++) {
      const diff = Math.abs(ringSizes[i].circMm - circMm);
      if (diff < minDiff) {
        minDiff = diff;
        closest = ringSizes[i];
      }
    }

    setCalculationResult(closest);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeSizeGuide}
          className="fixed inset-0 bg-[#14213D]/70 backdrop-blur-sm"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative bg-white border border-[#E5E3DF] shadow-2xl rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 md:p-8 z-10"
        >
          {/* Close */}
          <button
            onClick={closeSizeGuide}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#F5F4F2] text-[#14213D] flex items-center justify-center hover:bg-[#14213D] hover:text-white transition-colors border border-[#E5E3DF]"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2.5 mb-2">
            <Ruler className="w-5 h-5 text-[#B89B72]" />
            <span className="text-xs uppercase tracking-widest text-[#B89B72] font-semibold">
              Precision Measurements
            </span>
          </div>

          <h3 className="font-serif text-2xl md:text-3xl text-[#14213D]">
            {t.sizeGuide?.title || 'Fine Jewellery Sizing Guide'}
          </h3>

          {/* Tab buttons */}
          <div className="flex border-b border-[#E5E3DF] mt-6">
            <button
              onClick={() => setActiveTab('ring')}
              className={`pb-3 px-4 font-serif text-sm md:text-base border-b-2 transition-all ${
                activeTab === 'ring'
                  ? 'border-[#14213D] text-[#14213D] font-semibold'
                  : 'border-transparent text-[#6B7280] hover:text-[#14213D]'
              }`}
            >
              {t.sizeGuide?.ringTab || 'Ring Size Calculator'}
            </button>
            <button
              onClick={() => setActiveTab('bangle')}
              className={`pb-3 px-4 font-serif text-sm md:text-base border-b-2 transition-all ${
                activeTab === 'bangle'
                  ? 'border-[#14213D] text-[#14213D] font-semibold'
                  : 'border-transparent text-[#6B7280] hover:text-[#14213D]'
              }`}
            >
              {t.sizeGuide?.bangleTab || 'Bangle Size Chart'}
            </button>
          </div>

          {/* Ring Calculator Tab */}
          {activeTab === 'ring' && (
            <div className="mt-6 space-y-6">
              {/* Interactive Calculator Form */}
              <div className="p-5 bg-[#F5F4F2] border border-[#E5E3DF] rounded-xl">
                <h4 className="font-serif text-base text-[#14213D] mb-1">
                  Interactive Circumference Calculator
                </h4>
                <p className="text-xs text-[#6B7280] mb-4">
                  Wrap a strip of paper snugly around the base of your finger, mark the overlap, and measure the flat length.
                </p>

                <form onSubmit={handleCalculate} className="space-y-4">
                  <div className="flex gap-2">
                    <input
                      type="number"
                      step="0.1"
                      required
                      placeholder={unit === 'mm' ? 'e.g. 54.0' : 'e.g. 2.12'}
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      className="flex-1 bg-white border border-[#E5E3DF] rounded-lg px-3 py-2 text-sm text-[#14213D] focus:outline-none focus:border-[#B89B72]"
                    />

                    <select
                      value={unit}
                      onChange={(e) => setUnit(e.target.value)}
                      className="bg-white border border-[#E5E3DF] rounded-lg px-3 py-2 text-sm text-[#14213D] focus:outline-none"
                    >
                      <option value="mm">Millimeters (mm)</option>
                      <option value="inches">Inches (in)</option>
                    </select>

                    <button
                      type="submit"
                      className="px-5 py-2 bg-[#14213D] hover:bg-[#1a2d54] text-white text-xs uppercase tracking-wider font-semibold rounded-lg transition-colors"
                    >
                      Calculate
                    </button>
                  </div>
                </form>

                {calculationResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-white border-l-4 border-[#B89B72] border-y border-r border-[#E5E3DF] rounded-r-lg shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-2"
                  >
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#B89B72] font-semibold block">
                        Calculated Estimate
                      </span>
                      <p className="font-serif text-xl text-[#14213D]">
                        Indian Gauge Size: <strong>{calculationResult.indian}</strong>
                      </p>
                    </div>
                    <div className="text-xs text-[#6B7280]">
                      <span>US Equiv: Size {calculationResult.us}</span> | 
                      <span> Internal Dia: {calculationResult.diaMm} mm</span>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Reference Table */}
              <div>
                <h4 className="font-serif text-sm text-[#14213D] uppercase tracking-wider mb-2">
                  Standard Indian & US Ring Size Chart
                </h4>
                <div className="overflow-x-auto border border-[#E5E3DF] rounded-lg">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#F5F4F2] text-[#14213D] uppercase tracking-wider border-b border-[#E5E3DF]">
                      <tr>
                        <th className="p-2.5">Indian Size</th>
                        <th className="p-2.5">US / Canada</th>
                        <th className="p-2.5">Circumference (mm)</th>
                        <th className="p-2.5">Diameter (mm)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5E3DF] bg-white">
                      {ringSizes.map((row) => (
                        <tr key={row.indian} className="hover:bg-[#F5F4F2]/50">
                          <td className="p-2.5 font-medium text-[#14213D]">{row.indian}</td>
                          <td className="p-2.5 text-[#6B7280]">{row.us}</td>
                          <td className="p-2.5 text-[#6B7280]">{row.circMm} mm</td>
                          <td className="p-2.5 text-[#6B7280]">{row.diaMm} mm</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Bangle Chart Tab */}
          {activeTab === 'bangle' && (
            <div className="mt-6 space-y-6">
              <div className="p-4 bg-[#F5F4F2] border border-[#E5E3DF] rounded-xl flex gap-3 items-start">
                <HelpCircle className="w-5 h-5 text-[#B89B72] flex-shrink-0 mt-0.5" />
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  Indian bangle sizes are designated as <strong>2-2, 2-4, 2-6, 2-8</strong>, representing internal diameters (e.g. 2-4 means 2 inches and 4 sixteenths of an inch = 2.25 inches).
                </p>
              </div>

              <div className="overflow-x-auto border border-[#E5E3DF] rounded-lg">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#F5F4F2] text-[#14213D] uppercase tracking-wider border-b border-[#E5E3DF]">
                    <tr>
                      <th className="p-3">Bangle Size</th>
                      <th className="p-3">Inside Diameter</th>
                      <th className="p-3">Inside Dia (mm)</th>
                      <th className="p-3">Approx. Wrist Fit</th>
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

          <div className="mt-6 pt-4 border-t border-[#E5E3DF] text-center">
            <p className="text-xs text-[#6B7280]">
              Unsure about your exact fit? Visit our showroom or request a complimentary physical ring gauge on WhatsApp.
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
