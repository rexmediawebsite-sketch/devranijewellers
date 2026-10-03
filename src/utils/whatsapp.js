import { CONFIG } from '../config';

/**
 * Generates an encoded WhatsApp direct link with tailored luxury concierge messages.
 * 
 * @param {Object} [options]
 * @param {Object} [options.product] - Specific product details
 * @param {Array} [options.wishlist] - Array of wishlist products
 * @param {Object} [options.customDesign] - Custom design request form details
 * @param {Object} [options.storeVisit] - Appointment booking details
 * @param {string} [options.customText] - Freeform text message
 * @returns {string} Fully encoded https://wa.me/ URL
 */
export function whatsappLink(options = {}) {
  const { product, wishlist, customDesign, storeVisit, customText } = options;
  const number = CONFIG.whatsappNumber;
  const shop = CONFIG.shopName;

  let message = `Hello ${shop}, I would like to know more about your jewellery collection.`;

  // 1. Single Product Enquiry
  if (product) {
    message = `Hello ${shop},\n\nI am interested in acquiring *${product.name}* (${product.categoryName || product.category}).\n\n• Code: ${product.id}\n• Purity: ${product.purity || 'N/A'}\n• Weight: ${product.weight || 'N/A'}\n\nCould you please share the current price, availability, and video preview? Thank you.`;
  }
  // 2. Wishlist Consolidated Enquiry
  else if (wishlist && wishlist.length > 0) {
    const itemList = wishlist
      .map((item, index) => `${index + 1}. *${item.name}* (${item.categoryName || item.category}) [ID: ${item.id}]`)
      .join('\n');
    message = `Hello ${shop},\n\nI have curated my personal wishlist from your online showcase:\n\n${itemList}\n\nCould you please share price details and arrange an appointment / video consultation for these pieces?`;
  }
  // 3. Custom Design Consultation
  else if (customDesign) {
    const { name, phone, occasion, metal, budget, notes } = customDesign;
    message = `Hello ${shop} Concierge,\n\nI would like to request a *Bespoke Custom Jewellery Consultation*.\n\n• Client Name: ${name || 'Patron'}\n• Contact: ${phone || 'Not provided'}\n• Occasion: ${occasion || 'Special Celebration'}\n• Metal / Gemstone: ${metal || '22K Gold / Diamond'}\n• Target Budget: ${budget || 'Flexible'}\n• Custom Request / Ideas: ${notes || 'Looking for a custom heirloom piece.'}\n\n(I will be sharing my design reference sketches/photos here in this chat).`;
  }
  // 4. Store Visit VIP Appointment
  else if (storeVisit) {
    const { name, phone, date, slot, showroom, guestCount } = storeVisit;
    message = `Hello ${shop},\n\nI would like to reserve a *Store Visit / Appointment*.\n\n• Name: ${name}\n• Phone: ${phone}\n• Preferred Showroom: ${showroom || 'Badi Bazar Showroom'}\n• Date: ${date}\n• Time Slot: ${slot}\n• Number of Guests: ${guestCount || 1}\n\nPlease confirm availability for my visit. Thank you!`;
  }
  // 5. Custom text override
  else if (customText) {
    message = customText;
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/**
 * Opens WhatsApp link in a secure new tab and logs analytics
 */
export function openWhatsApp(options = {}) {
  const url = whatsappLink(options);
  if (typeof window !== 'undefined') {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
