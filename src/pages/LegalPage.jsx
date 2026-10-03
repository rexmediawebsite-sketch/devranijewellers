import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  FileText, 
  Lock, 
  RefreshCw, 
  Cookie, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  Building2, 
  Award,
  AlertCircle
} from 'lucide-react';
import { CONFIG } from '../config';
import { openWhatsApp } from '../utils/whatsapp';

export function LegalPage({ initialTab = 'terms' }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryTab = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState(queryTab || initialTab);

  useEffect(() => {
    if (queryTab) {
      setActiveTab(queryTab);
    } else if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [queryTab, initialTab]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setSearchParams({ tab: tabId });
    window.scrollTo({ top: 180, behavior: 'smooth' });
  };

  const tabs = [
    { id: 'security', label: 'Security & Purity', icon: ShieldCheck },
    { id: 'terms', label: 'Terms & Conditions', icon: FileText },
    { id: 'privacy', label: 'Privacy Policy', icon: Lock },
    { id: 'returns', label: 'Return & Exchange', icon: RefreshCw },
    { id: 'cookies', label: 'Cookie Policy', icon: Cookie },
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen text-[#14213D] pt-24 pb-20">
      {/* Hero Header */}
      <section className="bg-[#14213D] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-[#B89B72]/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#B89B72]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-gold-shine font-semibold">
            Trust, Security & Transparency
          </span>
          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-normal tracking-wide">
            Customer Policies & Security
          </h1>
          <p className="text-slate-300 text-sm sm:text-base font-light max-w-2xl mx-auto">
            At {CONFIG.shopName}, your trust, privacy, and peace of mind are our highest priority. Everything is written in plain, simple English with zero hidden conditions.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        {/* Navigation Tabs Bar */}
        <div className="bg-white rounded-2xl shadow-lg border border-[#E5E3DF] p-2 flex items-center gap-1 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap transition-all flex-1 justify-center ${
                  isActive
                    ? 'bg-[#14213D] text-white shadow-md'
                    : 'text-[#6B7280] hover:text-[#14213D] hover:bg-[#FAF7F2]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#B89B72]' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Box */}
        <div className="mt-8 bg-white rounded-3xl shadow-sm border border-[#E5E3DF] p-6 sm:p-10 lg:p-12">
          
          {/* TAB 1: SECURITY & PURITY GUARANTEE */}
          {activeTab === 'security' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="border-b border-[#E5E3DF] pb-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#B89B72]">
                  100% Certified Assurance
                </span>
                <h2 className="text-2xl sm:text-3xl font-cinzel font-normal text-[#14213D] mt-1">
                  Security & Purity Guarantee
                </h2>
                <p className="text-sm text-slate-600 mt-2">
                  How we protect your purchases, verify purity, and guarantee authentic gold and silver.
                </p>
              </div>

              {/* 4 Pillars of Security */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E5E3DF] space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#14213D] text-[#B89B72] flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="font-cinzel text-lg font-semibold text-[#14213D]">
                    1. BIS Hallmark & 6-Digit HUID
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Every piece of gold jewellery sold at {CONFIG.shopName} carries the official government <strong>BIS Hallmark</strong> and a unique <strong>6-digit HUID code</strong>. You can verify the purity and weight yourself using the official <em>BIS Care App</em> on your smartphone.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E5E3DF] space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#14213D] text-[#B89B72] flex items-center justify-center">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h3 className="font-cinzel text-lg font-semibold text-[#14213D]">
                    2. 256-Bit SSL Digital Security
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Our website is protected with industry-standard <strong>256-bit SSL encryption</strong> (HTTPS). Your inquiries, booking visits, and wishlist details are transmitted through safe, encrypted connections that no unauthorized party can read.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E5E3DF] space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#14213D] text-[#B89B72] flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-cinzel text-lg font-semibold text-[#14213D]">
                    3. Safe Showroom & Locker Facility
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Our physical showroom at Sona Patti Road, Badi Bazar is protected 24/7 with high-definition CCTV surveillance, secure vault lockers, and trained security personnel. Your physical visit and private viewings are 100% safe and private.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E5E3DF] space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#14213D] text-[#B89B72] flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h3 className="font-cinzel text-lg font-semibold text-[#14213D]">
                    4. 100% Weight Transparency
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Every ornament is weighed in front of you on state-calibrated digital precision scales. Your bill clearly mentions: Gross Weight, Net Gold Weight, Stone Weight (if any), Purity (24K / 22K / 18K), and exact Making Charges.
                  </p>
                </div>
              </div>

              {/* How to verify in 3 steps */}
              <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200">
                <h4 className="font-cinzel font-semibold text-amber-900 text-base mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-amber-700" />
                  How to verify your jewellery's BIS Hallmark:
                </h4>
                <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-amber-950 leading-relaxed">
                  <li>Download the government <strong>BIS Care App</strong> (available for Android and iPhone).</li>
                  <li>Go to <em>"Verify HUID"</em> and enter the 6-character laser code engraved on your jewellery.</li>
                  <li>The app will confirm: Jeweller Name, Hallmark Center, and Purity (e.g. 22K 916).</li>
                </ol>
              </div>
            </div>
          )}

          {/* TAB 2: TERMS & CONDITIONS */}
          {activeTab === 'terms' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="border-b border-[#E5E3DF] pb-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#B89B72]">
                  Plain & Honest
                </span>
                <h2 className="text-2xl sm:text-3xl font-cinzel font-normal text-[#14213D] mt-1">
                  Terms & Conditions
                </h2>
                <p className="text-sm text-slate-600 mt-2">
                  Last updated: October 2026. Clear rules to protect both our customers and our family business.
                </p>
              </div>

              <div className="space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <div>
                  <h3 className="font-cinzel font-semibold text-[#14213D] text-base mb-2">
                    1. Daily Live Bullion Rates
                  </h3>
                  <p>
                    Gold and silver prices fluctuate based on international and Indian bullion markets. The final billing rate for any purchase or custom order is the exact prevailing shop rate on the date and time of billing or advance confirmation.
                  </p>
                </div>

                <div>
                  <h3 className="font-cinzel font-semibold text-[#14213D] text-base mb-2">
                    2. Genuine Invoicing & Taxes
                  </h3>
                  <p>
                    All sales from {CONFIG.shopName} are accompanied by an official tax invoice specifying gross weight, net gold weight, purity karat, stone weight, and applicable GST. Please keep your physical or digital invoice safe for all future buybacks and exchanges.
                  </p>
                </div>

                <div>
                  <h3 className="font-cinzel font-semibold text-[#14213D] text-base mb-2">
                    3. Custom & Bridal Orders
                  </h3>
                  <p>
                    For custom-crafted bridal pieces, a minimum advance deposit is required to lock in the gold rate and begin handcrafted goldsmith work. Any adjustments in final piece weight will be calculated and settled on the day of delivery.
                  </p>
                </div>

                <div>
                  <h3 className="font-cinzel font-semibold text-[#14213D] text-base mb-2">
                    4. In-Store Pickup & Security
                  </h3>
                  <p>
                    For high-value purchases ordered or booked in advance, jewellery must be collected in person at our showroom located at Sona Patti Road, Badi Bazar, Sitamarhi. Please bring a valid government ID (Aadhaar or PAN) for verification and billing compliance.
                  </p>
                </div>

                <div>
                  <h3 className="font-cinzel font-semibold text-[#14213D] text-base mb-2">
                    5. Online Showcase & Availability
                  </h3>
                  <p>
                    Our website displays authentic photos of curated designs available in our showroom. Because real gold designs are unique in weight, small differences of ±0.1 to 0.5 grams may occur between individual pieces.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PRIVACY POLICY */}
          {activeTab === 'privacy' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="border-b border-[#E5E3DF] pb-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#B89B72]">
                  Your Privacy is Sacred
                </span>
                <h2 className="text-2xl sm:text-3xl font-cinzel font-normal text-[#14213D] mt-1">
                  Privacy Policy
                </h2>
                <p className="text-sm text-slate-600 mt-2">
                  We treat your personal information with the same honesty and care as our fine gold.
                </p>
              </div>

              <div className="space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 font-medium">
                  <strong>Simple Promise:</strong> We never sell, rent, trade, or share your phone number, name, or purchase details with any marketing company, telemarketer, or third party. Ever.
                </div>

                <div>
                  <h3 className="font-cinzel font-semibold text-[#14213D] text-base mb-2">
                    1. Information We Collect
                  </h3>
                  <p>
                    When you use our website or visit our showroom, we only collect details you voluntarily share with us:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-slate-600">
                    <li>Your name and contact phone / WhatsApp number when booking a visit or making an inquiry.</li>
                    <li>Wishlist items you choose to save on your browser for your personal convenience.</li>
                    <li>Billing address and PAN / Aadhaar details required strictly by Indian government tax regulations for high-value jewellery invoices.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-cinzel font-semibold text-[#14213D] text-base mb-2">
                    2. How We Use Your Information
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-slate-600">
                    <li>To confirm your showroom appointment or jewelry inquiry.</li>
                    <li>To send photos and video previews of requested jewellery designs directly over WhatsApp.</li>
                    <li>To generate official GST purchase invoices and maintain statutory records.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-cinzel font-semibold text-[#14213D] text-base mb-2">
                    3. No Unsolicited Spam
                  </h3>
                  <p>
                    We do not send automated robotic spam calls or bulk promotional text messages. Any message from Devrani Jewellers comes directly from our showroom staff regarding your ongoing order or inquiry.
                  </p>
                </div>

                <div>
                  <h3 className="font-cinzel font-semibold text-[#14213D] text-base mb-2">
                    4. Data Security & Storage
                  </h3>
                  <p>
                    Your browser wishlist and preferences are stored locally on your own device. In-store billing records are stored in secure, offline, password-protected systems accessible only by authorized staff.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: RETURN, EXCHANGE & BUYBACK POLICY */}
          {activeTab === 'returns' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="border-b border-[#E5E3DF] pb-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#B89B72]">
                  Lifetime Value
                </span>
                <h2 className="text-2xl sm:text-3xl font-cinzel font-normal text-[#14213D] mt-1">
                  Return, Exchange & Buyback Policy
                </h2>
                <p className="text-sm text-slate-600 mt-2">
                  Clear, honest exchange and buyback terms for gold and silver ornaments.
                </p>
              </div>

              <div className="space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {/* 3 Main Policies */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E5E3DF] space-y-2">
                    <span className="text-xs font-semibold text-[#B89B72] uppercase tracking-wider block">Policy 1</span>
                    <h4 className="font-cinzel font-semibold text-[#14213D] text-base">7-Day Free Exchange</h4>
                    <p className="text-xs text-slate-600">
                      If you wish to change size or select a different design, you can exchange unworn jewellery within <strong>7 days</strong> with original invoice and tag.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E5E3DF] space-y-2">
                    <span className="text-xs font-semibold text-[#B89B72] uppercase tracking-wider block">Policy 2</span>
                    <h4 className="font-cinzel font-semibold text-[#14213D] text-base">Lifetime Gold Exchange</h4>
                    <p className="text-xs text-slate-600">
                      Exchange your old gold jewellery anytime for brand-new designs. You get <strong>100% gold value</strong> at the live market rate on the day of exchange.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E5E3DF] space-y-2">
                    <span className="text-xs font-semibold text-[#B89B72] uppercase tracking-wider block">Policy 3</span>
                    <h4 className="font-cinzel font-semibold text-[#14213D] text-base">Transparent Buyback</h4>
                    <p className="text-xs text-slate-600">
                      Instant buyback on jewellery purchased from us with payment made securely via bank transfer or cheque at prevailing live gold market rates.
                    </p>
                  </div>
                </div>

                <div className="pt-2 space-y-4">
                  <h3 className="font-cinzel font-semibold text-[#14213D] text-base">
                    Important Exchange Requirements:
                  </h3>
                  <ul className="list-disc list-inside space-y-1.5 text-slate-600">
                    <li>The jewellery must be unaltered, undamaged, and accompanied by the original bill.</li>
                    <li>Making charges and government GST are non-refundable upon cash return, as they represent craftsmanship work and paid taxes.</li>
                    <li>Customized, name-engraved, or personalized pieces cannot be returned for cash, but qualify for standard lifetime gold melt value exchange.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: COOKIE POLICY */}
          {activeTab === 'cookies' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="border-b border-[#E5E3DF] pb-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#B89B72]">
                  Website Preferences
                </span>
                <h2 className="text-2xl sm:text-3xl font-cinzel font-normal text-[#14213D] mt-1">
                  Cookie & Storage Policy
                </h2>
                <p className="text-sm text-slate-600 mt-2">
                  What cookies are, why we use them, and how you stay in full control.
                </p>
              </div>

              <div className="space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <div>
                  <h3 className="font-cinzel font-semibold text-[#14213D] text-base mb-2">
                    1. What is a Cookie?
                  </h3>
                  <p>
                    A cookie or local storage item is a tiny piece of text stored safely inside your own web browser. It helps websites remember your choices so you do not have to reset them on every page refresh.
                  </p>
                </div>

                <div>
                  <h3 className="font-cinzel font-semibold text-[#14213D] text-base mb-2">
                    2. Cookies We Use:
                  </h3>
                  <div className="space-y-3 mt-3">
                    <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E5E3DF]">
                      <div className="flex items-center justify-between">
                        <strong className="text-xs font-semibold text-[#14213D]">Essential Preferences (Strictly Necessary)</strong>
                        <span className="text-[10px] bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded-full">Always Active</span>
                      </div>
                      <p className="text-xs text-slate-600 mt-1">
                        Remembers your selected language (English / Hindi), your cookie choice, and your saved Wishlist items so your saved jewellery does not disappear.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E5E3DF]">
                      <div className="flex items-center justify-between">
                        <strong className="text-xs font-semibold text-[#14213D]">Anonymous Performance & Analytics</strong>
                        <span className="text-[10px] bg-slate-200 text-slate-700 font-semibold px-2 py-0.5 rounded-full">Optional</span>
                      </div>
                      <p className="text-xs text-slate-600 mt-1">
                        Anonymous page load counters to help us fix slow loading images and improve showroom visit booking speed. No personal information is ever recorded.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-cinzel font-semibold text-[#14213D] text-base mb-2">
                    3. How to Manage or Reset Your Choice
                  </h3>
                  <p className="mb-3">
                    You can clear your stored cookies and preferences anytime right here:
                  </p>
                  <button
                    onClick={() => {
                      localStorage.removeItem('drj_cookie_consent');
                      window.dispatchEvent(new CustomEvent('open-cookie-banner'));
                    }}
                    className="btn-gold-action px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-white active:scale-95 transition-all inline-flex items-center gap-2"
                  >
                    <Cookie className="w-4 h-4" />
                    <span>Reopen Cookie Settings Banner</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Help & Contact Bar */}
          <div className="mt-12 pt-8 border-t border-[#E5E3DF] flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#FAF7F2] -mx-6 -mb-6 sm:-mx-10 sm:-mb-10 lg:-mx-12 lg:-mb-12 p-6 sm:p-8 rounded-b-3xl">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-cinzel text-base font-semibold text-[#14213D]">
                Have a question about our policies?
              </h4>
              <p className="text-xs text-slate-500">
                Talk directly with our showroom team in Sitamarhi. We are here to help 7 days a week.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => openWhatsApp('Namaste Devrani Jewellers, I have a question regarding your store policies and jewellery purchase.')}
                className="btn-gold-action px-5 py-2.5 rounded-full text-white text-xs uppercase tracking-wider font-semibold inline-flex items-center gap-2 shadow-md active:scale-95 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </button>
              <a
                href={`tel:${CONFIG.phoneCall}`}
                className="px-4 py-2.5 rounded-full bg-white border border-[#E5E3DF] hover:border-[#14213D] text-xs font-semibold text-[#14213D] inline-flex items-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4 text-[#B89B72]" />
                <span>Call Store</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
