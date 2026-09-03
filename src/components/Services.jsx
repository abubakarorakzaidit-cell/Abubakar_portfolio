import {
  HiOutlineCode,
  HiOutlineDesktopComputer,
  HiOutlineChartBar,
  HiOutlineShoppingCart,
} from "react-icons/hi";

const services = [
  {
    icon: HiOutlineCode,
    title: "Full-Stack Web Development",
    description:
      "Modern, responsive and scalable websites and web applications.",
  },
  {
    icon: HiOutlineDesktopComputer,
    title: "Frontend Development",
    description:
      "Clean and responsive interfaces built with React.js and modern frontend technologies.",
  },
  {
    icon: HiOutlineChartBar,
    title: "Digital Marketing",
    description:
      "Performance-focused advertising campaigns across Meta, TikTok and Google.",
  },
  {
    icon: HiOutlineShoppingCart,
    title: "E-Commerce Development",
    description:
      "Modern e-commerce websites designed to help businesses sell online.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section section-py">
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">Services</span>
        <h2 className="section-heading mt-4">How I can help your business</h2>
        <p className="mt-4 text-base text-muted sm:text-lg">
          From building your website to running the campaigns that bring
          customers to it.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {services.map((service) => (
          <article key={service.title} className="card p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-500 text-white">
              <service.icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-ink">
              {service.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
