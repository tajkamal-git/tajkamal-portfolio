import { ArrowUpRight, Code2 } from "lucide-react";

const projects = [
  {
    n: "01",
    title: "AI Luggage Detection System",
    desc: "AI-based object detection system identifying items in luggage scans using YOLO. Trained and fine-tuned models through dataset augmentation to improve accuracy.",
    tags: ["Python", "YOLO", "Computer Vision", "ML"],
    accent: "from-primary/30 to-accent/20",
  },
  {
    n: "02",
    title: "MERN Stack Blogger Application",
    desc: "Full-stack blogging platform with user authentication, role-based access control, and RESTful APIs. Responsive UI built with React.js and Express backend.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    accent: "from-accent/30 to-primary/20",
  },
  {
    n: "03",
    title: "Vulnerability Assessment Reports",
    desc: "Hands-on Web Application VAPT engagements documenting identified vulnerabilities, exploitation paths, and remediation strategies using industry-standard tools.",
    tags: ["Burp Suite", "Nmap", "VAPT", "OWASP"],
    accent: "from-primary/20 to-accent/30",
  },
];

const Projects = () => (
  <section id="projects" className="py-24 md:py-32">
    <div className="container">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <div className="reveal max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
            03 — Selected Work
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05]">
            Projects that <span className="italic text-gold">tell a story</span>.
          </h2>
        </div>
        <p className="reveal text-muted-foreground max-w-sm">
          A blend of secure engineering, applied AI, and clean full-stack delivery.
        </p>
      </div>

      <div className="space-y-4">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className="reveal group relative grid md:grid-cols-12 gap-6 p-6 md:p-8 rounded-2xl bg-card-gradient border border-border hover:border-primary/40 transition-smooth overflow-hidden"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div
              className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${p.accent} opacity-0 group-hover:opacity-100 blur-2xl transition-smooth pointer-events-none`}
            />
            <div className="md:col-span-1 flex md:flex-col items-start gap-2">
              <span className="font-mono text-xs text-muted-foreground">{p.n}</span>
              <span className="hidden md:block w-8 h-px bg-border mt-2" />
            </div>

            <div className="md:col-span-7 relative">
              <h3 className="font-display text-2xl md:text-3xl font-semibold leading-tight mb-3 group-hover:text-primary transition-smooth">
                {p.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded border border-border text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:col-span-4 flex md:justify-end items-start relative">
              <div className="aspect-video w-full md:w-44 rounded-xl bg-background/60 border border-border flex items-center justify-center group-hover:border-primary/40 transition-smooth">
                <Code2 size={28} className="text-primary/60 group-hover:text-primary group-hover:scale-110 transition-smooth" />
              </div>
              <ArrowUpRight
                size={20}
                className="absolute top-0 right-0 text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-smooth"
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
