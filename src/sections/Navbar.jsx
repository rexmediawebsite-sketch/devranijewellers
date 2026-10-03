import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, MessageCircle, Menu, X, Globe } from 'lucide-react';
import { CONFIG } from '../config';
import { openWhatsApp } from '../utils/whatsapp';
import { useWishlist } from '../context/WishlistContext';
import { useLanguage } from '../i18n/LanguageContext';

export function Navbar() {
  const location = useLocation();
  const { count, openWishlist } = useWishlist();
  const { lang, toggleLang, t } = useLanguage();

  const isHomePage = location.pathname === '/';
  const [isScrolled, setIsScrolled] = useState(!isHomePage);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Close menu on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // On home page, transparent over hero; on other pages, always solid ivory
      if (isHomePage) {
        setIsScrolled(currentScrollY > 40);
      } else {
        setIsScrolled(true);
      }

      // Hide navbar on scroll down, show on scroll up
      if (currentScrollY > lastScrollY.current && currentScrollY > 150) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    if (!isHomePage) {
      setIsScrolled(true);
    } else {
      setIsScrolled(window.scrollY > 40);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const navLinks = [
    { label: t.nav.home, to: '/' },
    { label: t.nav.collections, to: '/collections' },
    { label: t.nav.craftsmanship, to: '/heritage' },
    { label: t.nav.visitUs, to: '/visit' },
    { label: lang === 'hi' ? 'साइज़ व देखभाल' : 'Care & FAQ', to: '/care-guide' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } bg-white/95 backdrop-blur-md shadow-xs border-b border-[#E5E3DF] py-3.5`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Brand Logo */}
          <Link
            to="/"
            className="flex flex-col group"
          >
            <span className="font-cinzel text-xl sm:text-2xl tracking-[0.16em] uppercase transition-colors font-medium text-[#14213D] group-hover:text-[#B89B72]">
              {CONFIG.shopName}
            </span>
            <span className="text-[9px] uppercase tracking-[0.26em] font-sans font-semibold text-gold-shine mt-0.5">
              Pure Gold & Silver
            </span>
          </Link>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-xs uppercase tracking-[0.18em] transition-all font-sans relative py-1 hover:text-[#B89B72] ${
                    isActive
                      ? 'text-[#14213D] font-bold'
                      : 'text-[#14213D]/80 font-medium'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.label}</span>
                    <span
                      className={`absolute bottom-0 left-0 h-[1.5px] bg-[#B89B72] transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 hover:w-full'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right: Actions (Language toggle, Wishlist, WhatsApp button) */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs border border-[#E5E3DF] bg-[#F5F4F2] text-[#14213D] hover:border-[#B89B72] hover:text-[#B89B72] rounded-full transition-all"
              title="Toggle English / Hindi"
            >
              <Globe className="w-3.5 h-3.5 text-[#B89B72]" />
              <span className="font-semibold text-[11px] tracking-wider">{lang === 'en' ? 'हिन्दी' : 'EN'}</span>
            </button>

            {/* Wishlist Button with Badge */}
            <button
              onClick={openWishlist}
              className="relative p-2 rounded-full text-[#14213D] hover:text-[#B89B72] hover:bg-[#F5F4F2] transition-all"
              aria-label="View Wishlist"
            >
              <Heart className="w-5 h-5" />
              {count > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-[#B89B72] text-white text-[9px] font-bold flex items-center justify-center shadow-xs">
                  {count}
                </span>
              )}
            </button>

            {/* WhatsApp CTA Button */}
            <button
              onClick={() => openWhatsApp()}
              className="btn-gold-action hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white active:scale-95 transition-all text-xs uppercase tracking-[0.16em] font-semibold shadow-md"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white text-white" />
              <span>{t.nav.enquireWhatsapp}</span>
            </button>

            {/* Mobile Hamburger Trigger (3 lines) */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-[#14213D] hover:text-[#B89B72] transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Navigation Drawer mounted outside header via Portal */}
      {isMounted && createPortal(
        <AnimatePresence>
          {mobileMenuOpen && (
            <div className="fixed inset-0 z-[9999] overflow-hidden">
              {/* Dimmed backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={() => setMobileMenuOpen(false)}
                className="fixed inset-0 bg-black/70 backdrop-blur-sm"
              />

              {/* Drawer Sheet */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 28, stiffness: 280 }}
                className="fixed top-0 right-0 bottom-0 w-full max-w-sm sm:max-w-md bg-[#14213D] text-[#F5F4F2] flex flex-col justify-between p-6 sm:p-8 shadow-2xl overflow-y-auto safe-area-pb"
              >
                {/* Drawer Header */}
                <div className="flex items-center justify-between border-b border-[#E5E3DF]/20 pb-5">
                  <div>
                    <span className="font-cinzel text-xl sm:text-2xl tracking-[0.18em] text-white block uppercase">
                      {CONFIG.shopName}
                    </span>
                    <span className="text-[10px] text-[#B89B72] uppercase tracking-widest font-sans">
                      Pure Gold & Silver
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-10 h-10 rounded-full border border-[#E5E3DF]/30 flex items-center justify-center text-white hover:text-[#B89B72] hover:border-[#B89B72] transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="py-8 space-y-5 flex flex-col">
                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.to}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * idx }}
                    >
                      <NavLink
                        to={link.to}
                        onClick={() => setMobileMenuOpen(false)}
                        className={({ isActive }) =>
                          `font-cinzel text-xl sm:text-2xl transition-colors tracking-wide block py-1.5 ${
                            isActive
                              ? 'text-[#B89B72] font-semibold translate-x-2'
                              : 'text-[#F5F4F2]/85 hover:text-[#B89B72] hover:translate-x-1'
                          }`
                        }
                      >
                        {link.label}
                      </NavLink>
                    </motion.div>
                  ))}
                </div>

                {/* Drawer Bottom Actions */}
                <div className="pt-6 border-t border-[#E5E3DF]/20 space-y-4">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      openWhatsApp();
                    }}
                    className="btn-gold-action w-full py-3.5 text-white flex items-center justify-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold rounded-full active:scale-98 transition-all shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-white" />
                    <span>{t.nav.enquireWhatsapp}</span>
                  </button>

                  <div className="flex items-center justify-between text-xs text-[#F5F4F2]/60 pt-2 border-t border-[#E5E3DF]/10">
                    <span>{lang === 'hi' ? 'भाषा बदलें:' : 'Select Language:'}</span>
                    <button
                      onClick={toggleLang}
                      className="px-3 py-1 bg-white/10 text-white border border-[#E5E3DF]/30 hover:border-[#B89B72] transition-colors rounded-sm"
                    >
                      {lang === 'en' ? 'हिन्दी में देखें' : 'Switch to English'}
                    </button>
                  </div>

                  <div className="text-[11px] text-[#F5F4F2]/60 text-center pt-2 font-sans">
                    Sona Patti Road, Badi Bazar • {CONFIG.phonePrimary}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
