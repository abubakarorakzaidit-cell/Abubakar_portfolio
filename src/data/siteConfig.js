// ============================================================
// SITE CONFIG
// Central place to update personal info, contact details and
// social links. Update this file instead of hunting through
// components.
// ============================================================

const whatsappNumber = "923365002942"; // international format, no + or leading 0

export const siteConfig = {
  name: "Abubakar",
  title: "Full-Stack Web Developer + Digital Marketing Expert",
  email: "abubakarorakzaidit@gmail.com",
  location: "College Town, Kohat, Khyber Pakhtunkhwa, Pakistan",
  whatsappDisplay: "0336 5002942",
  whatsappNumber,
  whatsappBaseUrl: `https://wa.me/${whatsappNumber}`,
  social: {
    // TODO: Replace with your real Facebook page/profile URL
    facebook: "https://facebook.com/",
    // TODO: Replace with your real LinkedIn profile URL
    linkedin: "https://linkedin.com/",
    whatsapp: `https://wa.me/${whatsappNumber}`,
  },
  cvPath: "/assets/cv/Abubakar-CV.pdf",
};

// Builds a wa.me link with a pre-filled, URL-encoded message
export function buildWhatsAppLink(message) {
  const encoded = encodeURIComponent(message);
  return `${siteConfig.whatsappBaseUrl}?text=${encoded}`;
}
