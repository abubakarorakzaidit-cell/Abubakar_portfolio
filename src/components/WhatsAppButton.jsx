import { FaWhatsapp } from "react-icons/fa";
import { buildWhatsAppLink } from "../data/siteConfig";

/**
 * Reusable WhatsApp button.
 *
 * Props:
 * - message: string sent as the pre-filled WhatsApp message
 * - label: visible button text
 * - variant: "solid" | "outline"
 * - className: extra classes
 * - iconOnly: renders a round icon-only button (used for the floating button)
 */
export default function WhatsAppButton({
  message = "Hi Abubakar, I'd like to get in touch.",
  label = "Chat on WhatsApp",
  variant = "outline",
  className = "",
  iconOnly = false,
}) {
  const href = buildWhatsAppLink(message);

  if (iconOnly) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Abubakar on WhatsApp"
        className={`flex h-14 w-14 items-center justify-center rounded-full bg-brand-500 text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-brand-600 ${className}`}
      >
        <FaWhatsapp className="h-7 w-7" aria-hidden="true" />
      </a>
    );
  }

  const styles =
    variant === "solid"
      ? "btn-primary bg-[#25D366] hover:bg-[#1fb958]"
      : "btn-whatsapp";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles} ${className}`}
    >
      <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
      {label}
    </a>
  );
}
