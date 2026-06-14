import { Award, GraduationCap, MapPin, Phone, Mail, ShieldCheck } from "lucide-react";
import aboutPic from "@/assets/about-pic.png";

const education = [
  {
    level: "B.Tech",
    field: "Cyber Security",
    school: "Madanapalle Institute of Technology and Science",
    detail: "CGPA: 8.83 · 2024 – 2027",
    current: true,
  },
  {
    level: "Diploma",
    field: "Computer Engineering",
    school: "Loyola Polytechnic, Pulivendula",
    detail: "First Division · 87.82% · 2021 – 2024",
  },
  {
    level: "SSC",
    field: "10th Grade",
    school: "ZPHS Boys High School, Yerraguntla",
    detail: "CGPA: 9.3",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="reveal max-w-2xl mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
            01 — About
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] tracking-tight">
            Building secure systems with a{" "}
            <span className="italic text-gold">developer's mindset</span>.
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Image + info */}
          <div className="lg:col-span-5 reveal space-y-6">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border shadow-elegant grain">
              <img src={aboutPic} alt="Taj Kamal" className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">Currently</p>
                <p className="font-display text-xl text-foreground mt-1">B.Tech, Cybersecurity</p>
              </div>
            </div>

            <div className="space-y-2">
              {[
                { icon: MapPin, text: "Kadapa, Andhra Pradesh, India", href: "https://maps.google.com/?q=Kadapa,+Andhra+Pradesh" },
                { icon: Phone, text: "+91 7995119306", href: "tel:+917995119306" },
                { icon: Mail, text: "gagguturutajkamal06@gmail.com", href: "mailto:gagguturutajkamal06@gmail.com" },
              ].map(({ icon: Icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg bg-card/50 border border-border hover:border-primary/50 hover:bg-card transition-smooth group"
                >
                  <Icon size={16} className="text-primary group-hover:scale-110 transition-smooth" />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-smooth break-all">{text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-7 reveal space-y-6">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              I'm a Cybersecurity Engineering student with a passion for{" "}
              <span className="text-primary font-medium">Web Application VAPT</span>,
              ethical hacking, and full-stack development — actively competing at the
              national level and earning recognition through hackathons and CTF
              competitions.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              My journey spans both classical and modern web stacks — from PHP, Angular,
              and XAMPP environments to the MERN ecosystem (MongoDB, Express, React,
              Node). At GND Solutions Bengaluru, I led a team as Team Leader and was
              awarded the <span className="text-foreground">Rising Star Award</span> for
              outstanding performance during my MERN Stack internship.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              Today, I channel that engineering depth into security research — combining
              the mindset of a developer with the precision of a penetration tester to
              build, break, and fortify digital systems.
            </p>

            {/* Achievement cards */}
            <div className="grid sm:grid-cols-3 gap-3 pt-4">
              {[
                { icon: Award, title: "Rising Star Award", sub: "GND Solutions, Bengaluru" },
                { icon: GraduationCap, title: "First Division", sub: "Loyola Polytechnic" },
                { icon: ShieldCheck, title: "1st Prize", sub: "Cybersecurity Hackathon, MITS" },
              ].map(({ icon: Icon, title, sub }) => (
                <div
                  key={title}
                  className="p-4 rounded-xl bg-card-gradient border border-border hover:border-primary/40 transition-smooth"
                >
                  <Icon size={18} className="text-primary mb-2" />
                  <p className="font-display text-base font-semibold leading-tight">{title}</p>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mt-1">
                    {sub}
                  </p>
                </div>
              ))}
            </div>

            {/* Education timeline */}
            <div className="pt-8">
              <h3 className="font-display text-2xl font-medium mb-6">
                Academic <span className="italic text-gold">Journey</span>
              </h3>
              <div className="relative space-y-6 pl-6 border-l border-border">
                {education.map((e) => (
                  <div key={e.level} className="relative">
                    <span
                      className={`absolute -left-[31px] top-1.5 h-3 w-3 rounded-full ring-4 ring-background ${
                        e.current ? "bg-primary" : "bg-muted-foreground/40"
                      }`}
                    />
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span
                        className={`font-mono text-[10px] uppercase tracking-[0.2em] px-2 py-0.5 rounded ${
                          e.current
                            ? "bg-primary/15 text-primary border border-primary/30"
                            : "bg-secondary text-muted-foreground"
                        }`}
                      >
                        {e.level}
                      </span>
                      {e.current && (
                        <span className="font-mono text-[10px] uppercase text-primary">· Current</span>
                      )}
                    </div>
                    <p className="font-display text-lg font-semibold">{e.school}</p>
                    <p className="text-sm text-muted-foreground">
                      {e.field} — {e.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
