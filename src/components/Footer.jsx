import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "../data/siteConfig";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="section grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-xl font-bold text-ink">
            {siteConfig.name}
            <span className="text-brand-500">.</span>
          </p>
          <p className="mt-3 text-sm text-muted">{siteConfig.title}</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink">Quick Links</p>
          <ul className="mt-4 space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted transition-colors duration-200 hover:text-brand-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink">Contact</p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-4 block text-sm text-muted transition-colors duration-200 hover:text-brand-600"
          >
            {siteConfig.email}
          </a>
          <p className="mt-2 text-sm text-muted">{siteConfig.location}</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink">Follow</p>
          <div className="mt-4 flex items-center gap-3">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abubakar on Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-muted transition-colors duration-200 hover:border-brand-300 hover:text-brand-600"
            >
              <FaFacebookF className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abubakar on LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-muted transition-colors duration-200 hover:border-brand-300 hover:text-brand-600"
            >
              <FaLinkedinIn className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Abubakar on WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-muted transition-colors duration-200 hover:border-brand-300 hover:text-brand-600"
            >
              <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-100 py-6">
        <p className="section text-center text-xs text-muted">
          © {year} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
