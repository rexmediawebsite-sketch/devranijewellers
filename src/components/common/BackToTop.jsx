import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="hidden md:flex fixed bottom-8 left-8 z-40 w-11 h-11 items-center justify-center rounded-full bg-white border border-[#E5E3DF] text-[#14213D] shadow-md hover:bg-[#14213D] hover:text-white hover:border-[#14213D] transition-all duration-300"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
}
