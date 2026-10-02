import React, { createContext, useContext, useState, useEffect } from 'react';
import { whatsappLink, openWhatsApp } from '../utils/whatsapp';
import { trackEvent } from '../utils/analytics';

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('aurelia_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.warn('Failed to load wishlist from localStorage:', e);
      return [];
    }
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('aurelia_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.warn('Failed to save wishlist to localStorage:', e);
    }
  }, [wishlist]);

  const addToWishlist = (product) => {
    setWishlist((prev) => {
      if (prev.some((p) => p.id === product.id)) return prev;
      trackEvent('add_to_wishlist', { id: product.id, name: product.name });
      return [...prev, product];
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prev) => prev.filter((p) => p.id !== productId));
  };

  const toggleProductWishlist = (product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const isInWishlist = (productId) => {
    return wishlist.some((p) => p.id === productId);
  };

  const clearWishlist = () => {
    setWishlist([]);
  };

  const sendWishlistOnWhatsApp = () => {
    if (wishlist.length === 0) return;
    trackEvent('whatsapp_wishlist_enquiry', { count: wishlist.length });
    openWhatsApp({ wishlist });
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        count: wishlist.length,
        isOpen,
        openWishlist: () => setIsOpen(true),
        closeWishlist: () => setIsOpen(false),
        toggleWishlistDrawer: () => setIsOpen((prev) => !prev),
        addToWishlist,
        removeFromWishlist,
        toggleProductWishlist,
        isInWishlist,
        clearWishlist,
        sendWishlistOnWhatsApp,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within WishlistProvider');
  }
  return context;
}
