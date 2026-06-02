import { contact } from "./site-content";

export function buildWhatsAppUrl(message) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
