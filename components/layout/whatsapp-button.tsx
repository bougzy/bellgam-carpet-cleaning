'use client';

import { generateWhatsAppLink } from '@/lib/whatsapp';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const whatsappLink = generateWhatsAppLink({
    message: "Hi! I'd like to get a free quote for carpet cleaning.",
  });

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn no-print"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
