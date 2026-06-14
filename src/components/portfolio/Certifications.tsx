import { BadgeCheck } from "lucide-react";

const certs = [
  { title: "Google Cloud Security", issuer: "Google Cloud" },
  { title: "Ethical Hacker Certification", issuer: "Cisco" },
  { title: "Cybersecurity Certification", issuer: "Tech Mahindra Foundation" },
  { title: "Front End Development", issuer: "Reliance Foundation" },
  { title: "Cybersecurity Fundamentals", issuer: "IBM SkillsBuild" },
  { title: "Prompt Design in Vertex AI", issuer: "Google Cloud" },
  { title: "Database Management Essentials", issuer: "Udemy" },
  { title: "Python · Java · SQL · Problem Solving", issuer: "HackerRank" },
];

const Certifications = () => (
  <section id="certifications" className="py-24 md:py-32">
    <div className="container">
      <div className="reveal max-w-2xl mb-16">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
          05 — Certifications
        </p>
        <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05]">
          Verified by the{" "}
          <span className="italic text-gold">industry's best</span>.
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {certs.map((c, i) => (
          <div
            key={c.title}
            className="reveal group p-5 rounded-xl bg-card-gradient border border-border hover:border-primary/40 hover:-translate-y-1 transition-smooth"
            style={{ transitionDelay: `${i * 40}ms` }}
          >
            <BadgeCheck size={20} className="text-primary mb-3 group-hover:scale-110 transition-smooth" />
            <p className="font-display text-base font-semibold leading-snug">{c.title}</p>
            <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mt-2">
              {c.issuer}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
