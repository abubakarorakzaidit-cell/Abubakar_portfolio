import {
  HiOutlineCode,
  HiOutlineServer,
  HiOutlineTerminal,
  HiOutlineSpeakerphone,
} from "react-icons/hi";

const skillGroups = [
  {
    title: "Frontend",
    icon: HiOutlineCode,
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend Knowledge",
    icon: HiOutlineServer,
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
  {
    title: "Tools & Deployment",
    icon: HiOutlineTerminal,
    skills: ["Git", "GitHub", "Vercel", "Netlify"],
  },
  {
    title: "Digital Marketing",
    icon: HiOutlineSpeakerphone,
    skills: ["Meta Ads", "TikTok Ads", "Google Ads"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section section-py bg-brand-50/40">
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">Skills</span>
        <h2 className="section-heading mt-4">Tools I use to ship results</h2>
        <p className="mt-4 text-base text-muted sm:text-lg">
          A focused stack for building fast, reliable web apps and running
          advertising campaigns that convert.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <div key={group.title} className="card p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-brand-200 bg-white text-brand-500">
              <group.icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-ink">
              {group.title}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-muted"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
