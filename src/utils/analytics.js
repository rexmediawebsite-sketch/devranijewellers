import { CONFIG } from '../config';

/**
 * Dispatches an analytics event for WhatsApp interactions and user actions.
 * Integrates cleanly with Google Analytics (GA4 gtag) or Meta Pixel (fbq) if configured in config.js.
 */
export function trackEvent(eventName, params = {}) {
  // Console logging for verification
  if (import.meta.env.DEV) {
    console.log(`[Aurelia Analytics] ${eventName}:`, params);
  }

  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag && CONFIG.analytics?.googleAnalyticsId) {
    window.gtag('event', eventName, params);
  }

  // Meta Pixel
  if (typeof window !== 'undefined' && window.fbq && CONFIG.analytics?.metaPixelId) {
    window.fbq('trackCustom', eventName, params);
  }
}
