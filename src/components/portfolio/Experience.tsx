import { Briefcase, Trophy } from "lucide-react";

const experience = [
  {
    role: "MERN Stack Development Intern · Team Leader",
    company: "GND Solutions India Pvt. Ltd., Bengaluru",
    period: "Nov 2023 – May 2024",
    points: [
      "Led development team delivering full-stack web application features using MongoDB, Express, React, Node.",
      "Built RESTful APIs and responsive UI components shipped to production.",
      "Awarded Rising Star Award for outstanding team performance and leadership.",
    ],
  },
  {
    role: "Cybersecurity & Networking Virtual Intern",
    company: "Cisco Networking Academy",
    period: "Jun 2025 – Aug 2025",
    points: [
      "Completed hands-on labs in network security, threat detection, and cybersecurity fundamentals.",
      "Configured firewalls, VLANs, and network monitoring tools in simulated enterprise environments.",
    ],
  },
];

const honors = [
  "35th Rank — REDFOX CTF 2026 (National)",
  "Top 41 — DarkCTF 2026",
  "Qualified — NovrozCTF 2026 (International)",
  "2nd Place — SPARC 2026 Signal Processing CTF",
  "1st Prize — Cybersecurity Hackathon, MITS",
  "Winner — Supraja Tech Hackathons (Level 1–6)",
  "Rising Star Award — GND Solutions",
];

const Experience = () => (
  <section id="experience" className="py-24 md:py-32 bg-card/30 border-y border-border">
    <div className="container">
      <div className="reveal max-w-2xl mb-16">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
          04 — Experience & Honors
        </p>
        <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05]">
          A track record of <span className="italic text-gold">delivery</span>.
        </h2>
      </div>

      <div className="grid lg:grid-cols-5 gap-10">
        {/* Experience */}
        <div className="lg:col-span-3 space-y-5">
          {experience.map((e, i) => (
            <div
              key={e.role}
              className="reveal p-6 md:p-7 rounded-2xl bg-card-gradient border border-border hover:border-primary/40 transition-smooth"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="h-11 w-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <Briefcase size={18} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-xl font-semibold leading-tight">{e.role}</h3>
                  <p className="text-sm text-primary mt-1">{e.company}</p>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mt-1">
                    {e.period}
                  </p>
                </div>
              </div>
              <ul className="space-y-2 pl-2">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="text-primary mt-1.5">▸</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Honors */}
        <div className="lg:col-span-2 reveal">
          <div className="p-6 md:p-7 rounded-2xl bg-card-gradient border border-border h-full">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-11 w-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Trophy size={18} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold">Achievements</h3>
            </div>
            <ul className="space-y-3">
              {honors.map((h, i) => (
                <li key={h} className="flex gap-3 items-start text-sm">
                  <span className="font-mono text-[10px] text-primary mt-0.5">0{i + 1}</span>
                  <span className="text-muted-foreground hover:text-foreground transition-smooth">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
