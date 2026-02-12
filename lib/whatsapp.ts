/**
 * WhatsApp Integration Utilities
 * Simple wa.me link generation without API
 */

interface WhatsAppLinkOptions {
  phone?: string;
  service?: string;
  location?: string;
  message?: string;
  customerName?: string;
  rooms?: number;
}

/**
 * Generate a WhatsApp link with a pre-filled message
 */
export function generateWhatsAppLink(options: WhatsAppLinkOptions = {}): string {
  const {
    phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+16049021805',
    service,
    location,
    message,
    customerName,
    rooms,
  } = options;

  // Clean the phone number (remove non-digits except +)
  const cleanPhone = phone.replace(/[^\d+]/g, '');

  // Build the message
  let text = message || "Hi! I'm interested in your carpet cleaning services.";

  if (service) {
    text += `\n\nService: ${service}`;
  }

  if (location) {
    text += `\nLocation: ${location}`;
  }

  if (rooms) {
    text += `\nNumber of Rooms: ${rooms}`;
  }

  if (customerName) {
    text += `\n\nMy name is ${customerName}.`;
  }

  text += '\n\nPlease provide me with more information and pricing.';

  // Encode the message for URL
  const encodedText = encodeURIComponent(text);

  // Return the wa.me link
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}

/**
 * Generate a WhatsApp link for a quote request
 */
export function generateQuoteWhatsAppLink(data: {
  name: string;
  email?: string;
  phone?: string;
  service?: string;
  location?: string;
  propertyType?: string;
  rooms?: number;
  additionalServices?: string[];
  specialRequirements?: string;
  preferredDate?: string;
}): string {
  const {
    name,
    email,
    phone: customerPhone,
    service,
    location,
    propertyType,
    rooms,
    additionalServices,
    specialRequirements,
    preferredDate,
  } = data;

  let message = `Hello! I'd like to request a quote for carpet cleaning.\n\n`;
  message += `Name: ${name}\n`;

  if (email) {
    message += `Email: ${email}\n`;
  }

  if (customerPhone) {
    message += `Phone: ${customerPhone}\n`;
  }

  message += `\n--- Service Details ---\n`;

  if (service) {
    message += `Service: ${service}\n`;
  }

  if (location) {
    message += `Location: ${location}\n`;
  }

  if (propertyType) {
    message += `Property Type: ${propertyType}\n`;
  }

  if (rooms) {
    message += `Number of Rooms: ${rooms}\n`;
  }

  if (additionalServices && additionalServices.length > 0) {
    message += `Additional Services: ${additionalServices.join(', ')}\n`;
  }

  if (specialRequirements) {
    message += `Special Requirements: ${specialRequirements}\n`;
  }

  if (preferredDate) {
    message += `Preferred Date: ${preferredDate}\n`;
  }

  message += `\nPlease provide me with a quote. Thank you!`;

  return generateWhatsAppLink({ message });
}

/**
 * Generate a WhatsApp link for a simple contact message
 */
export function generateContactWhatsAppLink(data: {
  name: string;
  phone?: string;
  email?: string;
  message: string;
}): string {
  const { name, phone: customerPhone, email, message: customerMessage } = data;

  let message = `Hello! I have a question about your services.\n\n`;
  message += `Name: ${name}\n`;

  if (customerPhone) {
    message += `Phone: ${customerPhone}\n`;
  }

  if (email) {
    message += `Email: ${email}\n`;
  }

  message += `\nMessage:\n${customerMessage}`;

  return generateWhatsAppLink({ message });
}

/**
 * Generate a WhatsApp link for a specific service page
 */
export function generateServiceWhatsAppLink(
  serviceName: string,
  location?: string
): string {
  return generateWhatsAppLink({
    service: serviceName,
    location,
    message: `Hi! I'm interested in ${serviceName}.`,
  });
}

/**
 * Generate a WhatsApp link for a specific location page
 */
export function generateLocationWhatsAppLink(
  city: string,
  service?: string
): string {
  return generateWhatsAppLink({
    location: city,
    service,
    message: `Hi! I'm looking for carpet cleaning services in ${city}.`,
  });
}

/**
 * Format a phone number for display
 */
export function formatPhoneForDisplay(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');

  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }

  if (cleaned.length === 11 && cleaned.startsWith('1')) {
    return `+1 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7)}`;
  }

  return phone;
}

/**
 * Format a phone number for tel: links
 */
export function formatPhoneForLink(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');

  if (cleaned.length === 10) {
    return `+1${cleaned}`;
  }

  if (cleaned.startsWith('1')) {
    return `+${cleaned}`;
  }

  return `+${cleaned}`;
}
