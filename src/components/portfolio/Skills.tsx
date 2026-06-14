import { Code2, ShieldCheck, Server, Terminal } from "lucide-react";

const groups = [
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    items: [
      "VAPT", "Ethical Hacking", "Network Security",
      "Digital Forensics", "SOC", "API Testing",
      "Mobile Testing", "AI & IoT Security",
    ],
  },
  {
    icon: Terminal,
    title: "Security Tools",
    items: ["Burp Suite", "Nmap", "Wireshark", "John the Ripper", "ExifTool", "Kali Linux"],
  },
  {
    icon: Code2,
    title: "Languages & Web",
    items: ["Python", "Java", "SQL", "JavaScript", "HTML", "CSS"],
  },
  {
    icon: Server,
    title: "Full-Stack",
    items: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "Angular", "PHP"],
  },
];

const Skills = () => (
  <section id="skills" className="py-24 md:py-32 bg-card/30 border-y border-border relative">
    <div className="container">
      <div className="reveal max-w-2xl mb-16">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
          02 — Capabilities
        </p>
        <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05]">
          A toolkit refined by <span className="italic text-gold">practice</span>.
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {groups.map((g, i) => (
          <div
            key={g.title}
            className="reveal group relative p-6 rounded-2xl bg-card-gradient border border-border hover:border-primary/50 transition-smooth"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none"
              style={{ background: "radial-gradient(400px circle at var(--mx,50%) var(--my,50%), hsl(var(--primary)/0.08), transparent 40%)" }}
            />
            <div className="flex items-center justify-between mb-5">
              <div className="h-11 w-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <g.icon size={20} className="text-primary" />
              </div>
              <span className="font-mono text-[10px] text-muted-foreground">0{i + 1}</span>
            </div>
            <h3 className="font-display text-xl font-semibold mb-4">{g.title}</h3>
            <ul className="flex flex-wrap gap-1.5">
              {g.items.map((it) => (
                <li
                  key={it}
                  className="text-xs px-2.5 py-1 rounded-md bg-background/60 border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-smooth"
                >
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
