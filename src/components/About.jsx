import { HiOutlineDownload } from "react-icons/hi";
import { siteConfig } from "../data/siteConfig";

const stats = [
  { value: "5+", label: "Projects" },
  { value: "3+", label: "Marketing Platforms" },
  { value: "100%", label: "Responsive Design" },
];

export default function About() {
  return (
    <section id="about" className="section section-py">
      <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-3">
          <span className="eyebrow">About Me</span>
          <h2 className="section-heading mt-4">
            Building products and campaigns that perform
          </h2>

          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            I&apos;m a Full-Stack Web Developer and Digital Marketing Expert
            focused on creating modern digital experiences and helping
            businesses grow online.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            I work with modern web technologies to build responsive websites
            and web applications. Alongside development, I can manage
            digital advertising campaigns across Meta, TikTok and Google to
            help businesses reach the right audience and generate results.
          </p>

          <a
            href={siteConfig.cvPath}
            download
            className="btn-primary mt-8 w-full sm:w-auto"
          >
            <HiOutlineDownload className="h-4 w-4" aria-hidden="true" />
            Download CV
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-span-2 lg:grid-cols-1">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="card flex flex-col items-center justify-center gap-1 px-6 py-8 text-center lg:items-start lg:text-left"
            >
              <span className="font-display text-3xl font-extrabold text-brand-500 sm:text-4xl">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-muted">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
