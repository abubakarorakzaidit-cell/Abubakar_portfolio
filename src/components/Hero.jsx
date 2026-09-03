import { HiArrowRight } from "react-icons/hi";
import WhatsAppButton from "./WhatsAppButton";
import { siteConfig } from "../data/siteConfig";

export default function Hero() {
  return (
    <section id="home" className="section section-py">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left column */}
        <div className="animate-fadeUp text-center lg:text-left">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            Available for Freelance Work
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-ink sm:text-5xl lg:text-6xl">
            Hi, I&apos;m {siteConfig.name}
          </h1>

          <p className="mt-3 text-lg font-semibold text-brand-600 sm:text-xl">
            {siteConfig.title}
          </p>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg lg:mx-0">
            I build modern, responsive web applications and help businesses
            grow with data-driven digital marketing campaigns.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a href="#projects" className="btn-primary w-full sm:w-auto">
              View My Projects
              <HiArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#contact" className="btn-secondary w-full sm:w-auto">
              Contact Me
            </a>
            <WhatsAppButton
              message="Hi Abubakar, I found your portfolio and would like to discuss a project."
              label="Chat on WhatsApp"
              className="w-full sm:w-auto"
            />
          </div>
        </div>

        {/* Right column */}
        <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <div className="absolute -inset-4 -z-10 rounded-xl2 bg-brand-50 sm:-inset-6" />
          <img
            src="/assets/images/profile_pic.jpeg"
            alt="Portrait of Abubakar, Full-Stack Web Developer and Digital Marketing Expert"
            width="800"
            height="900"
            className="aspect-[4/5] w-full rounded-xl2 border border-slate-100 object-cover shadow-card"
          />

          <div className="absolute -bottom-5 left-1/2 w-max -translate-x-1/2 rounded-xl border border-slate-100 bg-white px-5 py-3 shadow-card sm:left-auto sm:right-4 sm:translate-x-0">
            <p className="text-sm font-semibold text-ink">
              Full-Stack Developer
            </p>
            <p className="text-xs text-muted">Digital Marketing Expert</p>
          </div>
        </div>
      </div>
    </section>
  );
}
