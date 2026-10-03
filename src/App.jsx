import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import { WishlistProvider } from './context/WishlistContext';
import { ModalProvider } from './context/ModalContext';
import { useLenis } from './hooks/useLenis';

// Common Interactive Components
import { SkeletonLoader } from './components/common/SkeletonLoader';
import { CustomCursor } from './components/common/CustomCursor';
import { ScrollProgress } from './components/common/ScrollProgress';
import { ScrollToTop } from './components/common/ScrollToTop';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { MobileActionBar } from './components/common/MobileActionBar';
import { BackToTop } from './components/common/BackToTop';
import { CookieBanner } from './components/common/CookieBanner';

// Modals & Drawers
import { ProductQuickViewModal } from './components/modals/ProductQuickViewModal';
import { WishlistDrawer } from './components/modals/WishlistDrawer';
import { SizeGuideModal } from './components/modals/SizeGuideModal';
import { BookVisitModal } from './components/modals/BookVisitModal';
import { SmartSearchModal } from './components/modals/SmartSearchModal';

// Shared Layout Header & Footer
import { Navbar } from './sections/Navbar';
import { Footer } from './sections/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { CollectionsPage } from './pages/CollectionsPage';
import { HeritagePage } from './pages/HeritagePage';
import { VisitPage } from './pages/VisitPage';
import { CareGuidePage } from './pages/CareGuidePage';
import { LegalPage } from './pages/LegalPage';

function AppLayout() {
  // Smooth scroll sync
  useLenis(true);

  return (
    <div className="relative min-h-screen bg-white text-[#14213D] font-sans selection:bg-[#B89B72] selection:text-white pb-16 md:pb-0 flex flex-col justify-between">
      {/* Scroll restoration */}
      <ScrollToTop />

      {/* Porcelain Luxury Skeleton Loader */}
      <SkeletonLoader />

      {/* Custom Fluid Desktop Cursor */}
      <CustomCursor />

      {/* Top Reading Progress Bar */}
      <ScrollProgress />

      {/* Sticky Global Navigation */}
      <Navbar />

      {/* Multi-Page Route Outlet */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/heritage" element={<HeritagePage />} />
          <Route path="/bespoke" element={<Navigate to="/collections" replace />} />
          <Route path="/visit" element={<VisitPage />} />
          <Route path="/care-guide" element={<CareGuidePage />} />
          
          {/* Legal, Security & Policies */}
          <Route path="/legal" element={<LegalPage />} />
          <Route path="/terms" element={<LegalPage initialTab="terms" />} />
          <Route path="/terms-and-conditions" element={<LegalPage initialTab="terms" />} />
          <Route path="/privacy" element={<LegalPage initialTab="privacy" />} />
          <Route path="/privacy-policy" element={<LegalPage initialTab="privacy" />} />
          <Route path="/security" element={<LegalPage initialTab="security" />} />
          <Route path="/returns" element={<LegalPage initialTab="returns" />} />
          <Route path="/cookies" element={<LegalPage initialTab="cookies" />} />

          {/* Fallback to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Global Luxury Footer */}
      <Footer />

      {/* Global Actions & Banners */}
      <FloatingWhatsApp />
      <MobileActionBar />
      <BackToTop />
      <CookieBanner />

      {/* Global Modals & Drawers */}
      <ProductQuickViewModal />
      <WishlistDrawer />
      <SizeGuideModal />
      <BookVisitModal />
      <SmartSearchModal />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <WishlistProvider>
          <ModalProvider>
            <AppLayout />
          </ModalProvider>
        </WishlistProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}
