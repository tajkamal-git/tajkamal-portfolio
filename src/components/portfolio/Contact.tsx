import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(`Portfolio inquiry from ${data.get("name") || ""}`);
    const body = encodeURIComponent(
      `${data.get("message") || ""}\n\n— ${data.get("name") || ""}\n${data.get("email") || ""}`
    );
    setSending(true);
    setTimeout(() => {
      window.location.href = `mailto:gagguturutajkamal0@gmail.com?subject=${subject}&body=${body}`;
      setSending(false);
      toast({ title: "Opening your email client", description: "Your message is ready to send." });
      form.reset();
    }, 400);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-card/30 border-t border-border">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left */}
          <div className="lg:col-span-5 reveal">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
              06 — Get in touch
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] mb-6">
              Let's build something{" "}
              <span className="italic text-gold">secure & beautiful</span>.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
              Open to internships, freelance security audits, and full-stack collaborations.
              I usually reply within 24 hours.
            </p>

            <div className="space-y-3">
              {[
                { icon: Mail, label: "Email", value: "gagguturutajkamal0@gmail.com", href: "mailto:gagguturutajkamal0@gmail.com" },
                { icon: Phone, label: "Phone", value: "+91 7995119306", href: "tel:+917995119306" },
                { icon: MapPin, label: "Location", value: "Kadapa, Andhra Pradesh, India", href: "https://maps.google.com/?q=Kadapa" },
                { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/taj-kamal/", href: "https://www.linkedin.com/in/taj-kamal/" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-background/60 border border-border hover:border-primary/40 transition-smooth group"
                >
                  <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-smooth">
                    <c.icon size={16} className="text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {c.label}
                    </p>
                    <p className="text-sm text-foreground truncate">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 reveal">
            <form
              onSubmit={onSubmit}
              className="p-6 md:p-8 rounded-2xl bg-card-gradient border border-border space-y-5 shadow-elegant"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Your name
                  </label>
                  <input
                    name="name"
                    required
                    className="mt-2 w-full bg-background/60 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-smooth"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full bg-background/60 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-smooth"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div>
                <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Subject
                </label>
                <input
                  name="subject"
                  className="mt-2 w-full bg-background/60 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-smooth"
                  placeholder="Project, opportunity, or just a hello"
                />
              </div>
              <div>
                <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  className="mt-2 w-full bg-background/60 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-smooth resize-none"
                  placeholder="Tell me what you're building..."
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-gold hover:scale-[1.02] transition-smooth disabled:opacity-60"
              >
                <Send size={16} />
                {sending ? "Sending..." : "Send message"}
              </button>
            </form>
          </div>
        </div>

        <footer className="mt-20 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground font-mono">
          <p>© {new Date().getFullYear()} Gagguturu Taj Kamal. Crafted with intention.</p>
          <p>Kadapa · India</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
