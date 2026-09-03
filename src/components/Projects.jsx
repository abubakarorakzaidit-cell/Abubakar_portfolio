import { HiOutlineExternalLink } from "react-icons/hi";
import WhatsAppButton from "./WhatsAppButton";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section section-py bg-brand-50/40">
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">Projects</span>
        <h2 className="section-heading mt-4">Selected work</h2>
        <p className="mt-4 text-base text-muted sm:text-lg">
          A mix of e-commerce, content and business websites. Project links
          below are placeholders and will be updated with live URLs.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.id} className="card flex flex-col overflow-hidden">
            <img
              src={project.image}
              alt={`Screenshot preview of the ${project.name} project`}
              loading="lazy"
              width="900"
              height="600"
              className="aspect-[3/2] w-full object-cover"
            />

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-semibold text-ink">{project.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-brand-600"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-1 flex-col justify-end gap-2 sm:flex-row">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full sm:w-auto"
                >
                  View Project
                  <HiOutlineExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
                <WhatsAppButton
                  message={`Hi Abubakar, I'm interested in your ${project.name} project.`}
                  label="Ask About This Project"
                  className="w-full sm:w-auto"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
