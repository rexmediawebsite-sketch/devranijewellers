import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from '../components/common/BrandIcons';
import { CONFIG } from '../config';
import { openWhatsApp } from '../utils/whatsapp';
import { useLanguage } from '../i18n/LanguageContext';

export function Footer() {
  const { t, lang } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: t.nav.home, to: '/' },
    { label: t.nav.collections, to: '/collections' },
    { label: t.nav.craftsmanship, to: '/heritage' },
    { label: t.nav.visitUs, to: '/visit' },
    { label: lang === 'hi' ? 'साइज़ व देखभाल' : 'Care & FAQ', to: '/care-guide' },
  ];

  return (
    <footer className="relative bg-[#14213D] text-[#F5F4F2] pt-20 pb-16 overflow-hidden border-t border-[#E5E3DF]/20">
      {/* Large Decorative Faded Shop Name Background Watermark */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none select-none overflow-hidden w-full text-center">
        <span className="font-serif text-[13vw] font-bold text-white/[0.025] uppercase tracking-widest leading-none whitespace-nowrap">
          {CONFIG.shopName}
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#E5E3DF]/20">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block">
              <h3 className="font-cinzel text-2xl sm:text-3xl text-white tracking-[0.16em] uppercase font-medium hover:text-[#B89B72] transition-colors">
                {CONFIG.shopName}
              </h3>
            </Link>
            <p className="text-xs uppercase tracking-[0.22em] text-gold-shine font-semibold font-sans">
              Purity & Trust • BIS Hallmarked
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light font-sans max-w-sm">
              {t.footer.tagline}
            </p>

            <div className="pt-2">
              <button
                onClick={() => openWhatsApp()}
                className="btn-gold-action inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-white active:scale-95 text-xs uppercase tracking-[0.18em] font-semibold shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white text-white" />
                <span>{t.nav.enquireWhatsapp}</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#B89B72] font-semibold font-sans">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="hover:text-white transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Security Policies */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#B89B72] font-semibold font-sans">
              Trust & Policies
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link to="/security" className="hover:text-white transition-colors inline-block py-0.5">
                  Security & Purity Guarantee
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors inline-block py-0.5">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors inline-block py-0.5">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-white transition-colors inline-block py-0.5">
                  Return & Exchange Policy
                </Link>
              </li>
              <li>
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('open-cookie-banner'))}
                  className="hover:text-white transition-colors inline-block py-0.5 text-slate-300 text-left"
                >
                  Cookie Settings & Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Concierge */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#B89B72] font-semibold font-sans">
              {t.footer.stayConnected}
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#B89B72] flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <a href={`tel:${CONFIG.phoneCall}`} className="block hover:text-white transition-colors font-medium">
                    {CONFIG.phonePrimary} (Call / WhatsApp)
                  </a>
                  <a href={`tel:${CONFIG.phoneSecondaryCall}`} className="block hover:text-white transition-colors text-slate-400">
                    {CONFIG.phoneSecondary}
                  </a>
                </div>
              </div>
              <div className="pt-1 text-slate-300">
                <p className="text-[#B89B72] font-medium text-[11px] uppercase tracking-wider">Showroom Address:</p>
                <p className="mt-0.5 text-xs leading-relaxed text-slate-300">
                  {CONFIG.locations[0].address}
                </p>
                <p className="mt-1 text-[11px] text-slate-400">
                  Hours: {CONFIG.locations[0].hours}
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#E5E3DF]/30 flex items-center justify-center text-white hover:text-[#B89B72] hover:border-[#B89B72] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={CONFIG.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#E5E3DF]/30 flex items-center justify-center text-white hover:text-[#B89B72] hover:border-[#B89B72] transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Security & Purity Trust Badges Bar */}
        <div className="py-6 border-b border-[#E5E3DF]/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
            <span className="text-[11px] font-semibold text-white uppercase tracking-wider block">🛡️ BIS 916 Hallmarked</span>
            <span className="text-[10px] text-slate-400 block">Unique 6-Digit HUID on every jewel</span>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
            <span className="text-[11px] font-semibold text-white uppercase tracking-wider block">🔒 256-Bit SSL Secured</span>
            <span className="text-[10px] text-slate-400 block">Encrypted & private customer data</span>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
            <span className="text-[11px] font-semibold text-white uppercase tracking-wider block">⚖️ Precision Digital Scales</span>
            <span className="text-[10px] text-slate-400 block">100% net gold weight transparency</span>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
            <span className="text-[11px] font-semibold text-white uppercase tracking-wider block">🏛️ Sitamarhi Showroom</span>
            <span className="text-[10px] text-slate-400 block">Visit our verified physical store</span>
          </div>
        </div>

        {/* Bottom Copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-center sm:text-left">
            <p>{t.footer.copyright}</p>
            <span className="hidden sm:inline text-slate-600">•</span>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/returns" className="hover:text-white transition-colors">Returns</Link>
            <Link to="/security" className="hover:text-white transition-colors">Security</Link>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[11px] text-[#B89B72]">
              Crafted with Love for Fine Jewels
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-white transition-colors text-slate-300"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#B89B72]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
