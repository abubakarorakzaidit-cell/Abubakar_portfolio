import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { siteConfig } from "../data/siteConfig";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent background scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-200 ${
        isScrolled
          ? "border-slate-100 bg-white/90 backdrop-blur-sm"
          : "border-transparent bg-white"
      }`}
    >
      <nav className="section flex h-16 items-center justify-between sm:h-20">
        <a
          href="#home"
          className="font-display text-xl font-bold text-ink sm:text-2xl"
        >
          {siteConfig.name}
          <span className="text-brand-500">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted transition-colors duration-200 hover:text-brand-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn-primary hidden md:inline-flex">
          Let&apos;s Talk
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-ink md:hidden"
        >
          {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-slate-100 bg-white transition-[max-height] duration-300 ease-in-out md:hidden ${
          isOpen ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <ul className="section flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-medium text-ink transition-colors duration-200 hover:bg-brand-50 hover:text-brand-600"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="btn-primary w-full"
            >
              Let&apos;s Talk
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
