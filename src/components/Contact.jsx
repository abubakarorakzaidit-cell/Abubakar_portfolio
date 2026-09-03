import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlineCheckCircle,
  HiOutlineExclamationCircle,
} from "react-icons/hi";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "../data/siteConfig";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error(
        "EmailJS is not configured. Add your credentials to a .env file (see .env.example)."
      );
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        { publicKey: PUBLIC_KEY }
      );
      setStatus("success");
      setForm(initialForm);
    } catch (error) {
      console.error("EmailJS send failed:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section section-py">
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">Contact</span>
        <h2 className="section-heading mt-4">Let&apos;s work together</h2>
        <p className="mt-4 text-base text-muted sm:text-lg">
          Have a project in mind or need help with your marketing? Send a
          message and I&apos;ll get back to you soon.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-5 lg:gap-12">
        {/* Contact info */}
        <div className="space-y-4 lg:col-span-2">
          <div className="card flex items-start gap-4 p-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-500">
              <HiOutlineMail className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">Email</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-muted hover:text-brand-600"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>

          <div className="card flex items-start gap-4 p-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-500">
              <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">WhatsApp</p>
              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-brand-600"
              >
                {siteConfig.whatsappDisplay}
              </a>
            </div>
          </div>

          <div className="card flex items-start gap-4 p-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-500">
              <HiOutlineLocationMarker className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">Location</p>
              <p className="text-sm text-muted">{siteConfig.location}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
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

        {/* Form */}
        <form onSubmit={handleSubmit} className="card space-y-5 p-6 lg:col-span-3 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-ink outline-none transition-colors duration-200 focus:border-brand-400"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-ink outline-none transition-colors duration-200 focus:border-brand-400"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-ink">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              value={form.subject}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-ink outline-none transition-colors duration-200 focus:border-brand-400"
              placeholder="What's this about?"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={form.message}
              onChange={handleChange}
              className="w-full resize-none rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-ink outline-none transition-colors duration-200 focus:border-brand-400"
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p
              role="status"
              className="flex items-center gap-2 rounded-lg bg-green-50 px-4 py-3 text-sm font-medium text-green-700"
            >
              <HiOutlineCheckCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
              Your message was sent successfully. I&apos;ll reply soon!
            </p>
          )}

          {status === "error" && (
            <p
              role="alert"
              className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
            >
              <HiOutlineExclamationCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
              Something went wrong sending your message. Please try again or
              email me directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
