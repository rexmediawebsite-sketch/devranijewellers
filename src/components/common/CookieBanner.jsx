import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, ShieldCheck, X, Check } from 'lucide-react';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [savedChoice, setSavedChoice] = useState(null);

  useEffect(() => {
    // Check if consent has already been given
    const consent = localStorage.getItem('drj_cookie_consent');
    if (!consent) {
      // Delay showing slightly so page loads gracefully
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      setSavedChoice(consent);
    }

    // Listen for manual reopen requests (e.g. from Footer "Cookie Settings" link)
    const handleReopen = () => {
      setIsVisible(true);
    };
    window.addEventListener('open-cookie-banner', handleReopen);
    return () => window.removeEventListener('open-cookie-banner', handleReopen);
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('drj_cookie_consent', 'all');
    setSavedChoice('all');
    setIsVisible(false);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem('drj_cookie_consent', 'essential');
    setSavedChoice('essential');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie and Privacy Consent"
      className="fixed bottom-20 md:bottom-6 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 animate-in fade-in slide-in-from-bottom-6 duration-300"
    >
      <div className="bg-[#14213D] text-white p-5 rounded-2xl shadow-2xl border border-[#B89B72]/40 backdrop-blur-md relative overflow-hidden">
        {/* Subtle decorative gold glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#B89B72]/10 rounded-full blur-2xl pointer-events-none" />

        {/* Header with Icon and Close Button */}
        <div className="flex items-start justify-between gap-3 mb-2.5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#B89B72]/20 border border-[#B89B72]/40 flex items-center justify-center text-[#B89B72] shrink-0">
              <Cookie className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-semibold tracking-wide text-white font-cinzel">
                Your Privacy & Cookies
              </h4>
              <span className="text-[10px] uppercase tracking-wider text-gold-shine font-medium block">
                Devrani Jewellers (DRJ)
              </span>
            </div>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
            aria-label="Dismiss cookie notice"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Simple English Explanation */}
        <p className="text-xs text-slate-300 leading-relaxed font-sans mb-4">
          We use simple cookies and local storage to keep your wishlist saved, remember your language, and ensure secure browsing. We never sell your personal data or track you.
        </p>

        {/* Trust Points */}
        <div className="flex items-center gap-4 text-[11px] text-slate-300 mb-4 pb-3 border-b border-white/10">
          <span className="inline-flex items-center gap-1 text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" /> 100% Secure
          </span>
          <span className="inline-flex items-center gap-1 text-slate-300">
            <Check className="w-3 h-3 text-[#B89B72]" /> No 3rd-party ads
          </span>
          <Link
            to="/cookies"
            onClick={() => setIsVisible(false)}
            className="text-[#B89B72] hover:underline ml-auto font-medium"
          >
            Read Policy
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={handleAcceptAll}
            className="flex-1 btn-gold-action py-2 px-3 rounded-xl text-xs font-semibold text-white uppercase tracking-wider transition-all active:scale-95 text-center"
          >
            Accept All
          </button>
          <button
            onClick={handleEssentialOnly}
            className="flex-1 py-2 px-3 rounded-xl text-xs font-medium text-slate-300 bg-white/10 hover:bg-white/15 border border-white/10 transition-all text-center"
          >
            Essential Only
          </button>
        </div>
      </div>
    </div>
  );
}
