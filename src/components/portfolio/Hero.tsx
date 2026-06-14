import { useEffect, useState } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import portrait from "@/assets/tajkamal.png";

const roles = [
  "Cybersecurity Engineer",
  "Full-Stack Developer",
  "Passionate about Ethical Hacking",
  "MERN Stack Specialist",
];

const Hero = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    const speed = deleting ? 40 : 75;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1500);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setRoleIdx((i) => (i + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, roleIdx]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 md:pt-28 pb-16 overflow-hidden bg-hero"
    >
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="container grid lg:grid-cols-12 gap-10 lg:gap-16 items-center relative">
        {/* Text */}
        <div className="lg:col-span-7 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/60 backdrop-blur-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Available for opportunities
            </span>
          </div>

          <p className="font-mono text-sm text-primary mb-3">— Hello, I'm</p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] font-medium tracking-tight">
            Gagguturu
            <br />
            <span className="italic font-light text-gold">Taj Kamal.</span>
          </h1>

          <div className="mt-6 flex items-center gap-3 text-lg md:text-xl text-muted-foreground">
            <span className="font-mono text-primary">{">"}</span>
            <span className="text-foreground font-medium">{text}</span>
            <span className="w-[2px] h-5 bg-primary animate-pulse" />
          </div>

          <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Cybersecurity Engineering student crafting secure full-stack systems and
            hunting vulnerabilities. National-level CTF competitor with{" "}
            <span className="text-foreground font-medium">CGPA 8.83</span> from Kadapa,
            Andhra Pradesh.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/Taj_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-gold hover:scale-[1.02] transition-smooth"
            >
              <Download size={18} /> Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-primary/60 hover:text-primary transition-smooth"
            >
              View Projects <ArrowRight size={18} />
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <a href="https://www.linkedin.com/in/taj-kamal/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-smooth" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-smooth" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="mailto:gagguturutajkamal0@gmail.com" className="text-muted-foreground hover:text-primary transition-smooth" aria-label="Email">
              <Mail size={20} />
            </a>
            <span className="h-px flex-1 bg-border max-w-[120px]" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Kadapa · India
            </span>
          </div>
        </div>

        {/* Portrait */}
        <div className="lg:col-span-5 reveal flex justify-center lg:justify-end">
          <div className="relative w-[280px] sm:w-[340px] md:w-[400px] aspect-square">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-transparent to-accent/30 blur-3xl" />
            <div className="absolute -inset-4 rounded-full border border-primary/20 animate-[float_8s_ease-in-out_infinite]" />
            <div className="absolute -inset-8 rounded-full border border-accent/10" />
            <div className="relative h-full w-full rounded-full overflow-hidden border-2 border-primary/40 shadow-elegant grain">
              <img
                src={portrait}
                alt="Taj Kamal"
                className="h-full w-full object-cover"
                style={{ objectPosition: "center 15%" }}
                loading="eager"
              />
            </div>
            {/* Floating badges */}
            <div className="absolute -left-4 sm:-left-8 top-10 px-4 py-2.5 rounded-xl bg-card/90 backdrop-blur border border-primary/30 shadow-soft animate-[float_6s_ease-in-out_infinite]">
              <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-0.5">Name</p>
              <p className="font-display text-sm font-semibold text-foreground">G. Taj Kamal</p>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="w-px h-10 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
