import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { Terminal as TerminalIcon, X, Minus, Square } from "lucide-react";

const WELCOME = [
  { text: "╔══════════════════════════════════════════════════════╗", type: "border" },
  { text: "║       Welcome to Taj Kamal's Interactive Shell       ║", type: "border" },
  { text: "╚══════════════════════════════════════════════════════╝", type: "border" },
  { text: "", type: "blank" },
  { text: "  Type 'help' to see all available commands.", type: "info" },
  { text: "  Type 'clear' to reset the terminal.", type: "info" },
  { text: "", type: "blank" },
];

const COMMANDS: Record<string, { description: string; output: { text: string; type: string }[] }> = {
  help: {
    description: "Show all available commands",
    output: [
      { text: "┌─────────────────────────────────────────────────────┐", type: "border" },
      { text: "│                  AVAILABLE COMMANDS                │", type: "border" },
      { text: "└─────────────────────────────────────────────────────┘", type: "border" },
      { text: "", type: "blank" },
      { text: "  about        →  Who am I?", type: "cmd" },
      { text: "  skills       →  My technical skills", type: "cmd" },
      { text: "  education    →  My academic background", type: "cmd" },
      { text: "  experience   →  Work & internship history", type: "cmd" },
      { text: "  projects     →  Projects I've built", type: "cmd" },
      { text: "  awards       →  Achievements & recognitions", type: "cmd" },
      { text: "  ctf          →  CTF competition results", type: "cmd" },
      { text: "  contact      →  How to reach me", type: "cmd" },
      { text: "  clear        →  Clear the terminal", type: "cmd" },
      { text: "  whoami       →  Quick summary", type: "cmd" },
      { text: "", type: "blank" },
    ],
  },
  whoami: {
    description: "Quick summary",
    output: [
      { text: "", type: "blank" },
      { text: "  gagguturu-taj-kamal", type: "highlight" },
      { text: "  ├── Role     : Cybersecurity Engineering Student", type: "info" },
      { text: "  ├── Location : Kadapa, Andhra Pradesh, India", type: "info" },
      { text: "  ├── CGPA     : 8.83 / 10", type: "info" },
      { text: "  └── Status   : Available for Opportunities", type: "success" },
      { text: "", type: "blank" },
    ],
  },
  about: {
    description: "Who am I?",
    output: [
      { text: "", type: "blank" },
      { text: "  ── ABOUT TAJ KAMAL ──────────────────────────────", type: "border" },
      { text: "", type: "blank" },
      { text: "  I'm a Cybersecurity Engineering student passionate", type: "info" },
      { text: "  about Web Application VAPT, ethical hacking, and", type: "info" },
      { text: "  full-stack development.", type: "info" },
      { text: "", type: "blank" },
      { text: "  My stack spans PHP, Angular, XAMPP to the full MERN", type: "info" },
      { text: "  ecosystem — MongoDB, Express, React, Node.js.", type: "info" },
      { text: "", type: "blank" },
      { text: "  I combine a developer's mindset with a penetration", type: "info" },
      { text: "  tester's precision to build, break & fortify systems.", type: "info" },
      { text: "", type: "blank" },
    ],
  },
  skills: {
    description: "My technical skills",
    output: [
      { text: "", type: "blank" },
      { text: "  ── TECHNICAL SKILLS ────────────────────────────", type: "border" },
      { text: "", type: "blank" },
      { text: "  Security", type: "highlight" },
      { text: "  ├── Web Application VAPT", type: "info" },
      { text: "  ├── Penetration Testing", type: "info" },
      { text: "  ├── Burp Suite · Nmap · Metasploit", type: "info" },
      { text: "  └── CTF Competitions", type: "info" },
      { text: "", type: "blank" },
      { text: "  Frontend", type: "highlight" },
      { text: "  ├── React.js · Angular · HTML · CSS", type: "info" },
      { text: "  └── Tailwind CSS · JavaScript · TypeScript", type: "info" },
      { text: "", type: "blank" },
      { text: "  Backend", type: "highlight" },
      { text: "  ├── Node.js · Express.js · PHP", type: "info" },
      { text: "  └── MongoDB · MySQL · REST APIs", type: "info" },
      { text: "", type: "blank" },
      { text: "  Tools", type: "highlight" },
      { text: "  ├── Git · GitHub · VS Code", type: "info" },
      { text: "  └── Linux · Kali Linux · XAMPP", type: "info" },
      { text: "", type: "blank" },
    ],
  },
  education: {
    description: "My academic background",
    output: [
      { text: "", type: "blank" },
      { text: "  ── EDUCATION ────────────────────────────────────", type: "border" },
      { text: "", type: "blank" },
      { text: "  [CURRENT] B.Tech — Cyber Security", type: "success" },
      { text: "  Madanapalle Institute of Technology & Science", type: "info" },
      { text: "  CGPA: 8.83 · 2024 – 2027", type: "muted" },
      { text: "", type: "blank" },
      { text: "  [DONE] Diploma — Computer Engineering", type: "highlight" },
      { text: "  Loyola Polytechnic, Pulivendula", type: "info" },
      { text: "  First Division · 87.82% · 2021 – 2024", type: "muted" },
      { text: "", type: "blank" },
      { text: "  [DONE] SSC — 10th Grade", type: "highlight" },
      { text: "  ZPHS Boys High School, Yerraguntla", type: "info" },
      { text: "  CGPA: 9.3", type: "muted" },
      { text: "", type: "blank" },
    ],
  },
  experience: {
    description: "Work & internship history",
    output: [
      { text: "", type: "blank" },
      { text: "  ── EXPERIENCE ───────────────────────────────────", type: "border" },
      { text: "", type: "blank" },
      { text: "  Team Leader & MERN Stack Intern", type: "highlight" },
      { text: "  GND Solutions, Bengaluru", type: "info" },
      { text: "  ├── Led a development team during internship", type: "info" },
      { text: "  ├── Built full-stack MERN applications", type: "info" },
      { text: "  └── Awarded 🏆 Rising Star Award", type: "success" },
      { text: "", type: "blank" },
    ],
  },
  projects: {
    description: "Projects I've built",
    output: [
      { text: "", type: "blank" },
      { text: "  ── PROJECTS ─────────────────────────────────────", type: "border" },
      { text: "", type: "blank" },
      { text: "  [1] Portfolio Website", type: "highlight" },
      { text: "  React + TypeScript + Tailwind CSS", type: "muted" },
      { text: "  Personal portfolio showcasing all my work.", type: "info" },
      { text: "", type: "blank" },
      { text: "  [2] MERN Stack Applications", type: "highlight" },
      { text: "  MongoDB · Express · React · Node.js", type: "muted" },
      { text: "  Full-stack web apps built during internship.", type: "info" },
      { text: "", type: "blank" },
      { text: "  [3] Security Research & CTF Tooling", type: "highlight" },
      { text: "  Python · Bash · Kali Linux", type: "muted" },
      { text: "  Tools and scripts for CTF competitions & VAPT.", type: "info" },
      { text: "", type: "blank" },
    ],
  },
  awards: {
    description: "Achievements & recognitions",
    output: [
      { text: "", type: "blank" },
      { text: "  ── AWARDS & ACHIEVEMENTS ────────────────────────", type: "border" },
      { text: "", type: "blank" },
      { text: "  🏆  Rising Star Award", type: "success" },
      { text: "      GND Solutions, Bengaluru", type: "muted" },
      { text: "", type: "blank" },
      { text: "  🥇  1st Prize — Cybersecurity Hackathon", type: "success" },
      { text: "      MITS (Madanapalle Inst. of Tech. & Science)", type: "muted" },
      { text: "", type: "blank" },
      { text: "  🎓  First Division — Diploma", type: "highlight" },
      { text: "      Loyola Polytechnic · 87.82%", type: "muted" },
      { text: "", type: "blank" },
    ],
  },
  ctf: {
    description: "CTF competition results",
    output: [
      { text: "", type: "blank" },
      { text: "  ── CTF COMPETITIONS ─────────────────────────────", type: "border" },
      { text: "", type: "blank" },
      { text: "  REDFOX CTF", type: "highlight" },
      { text: "  ├── Rank   : #35 Nationally", type: "success" },
      { text: "  ├── Level  : National", type: "info" },
      { text: "  └── Focus  : Web Exploitation · Forensics · Crypto", type: "info" },
      { text: "", type: "blank" },
      { text: "  Passionate about CTF challenges & security research.", type: "info" },
      { text: "  Competing nationally to sharpen offensive skills.", type: "info" },
      { text: "", type: "blank" },
    ],
  },
  contact: {
    description: "How to reach me",
    output: [
      { text: "", type: "blank" },
      { text: "  ── CONTACT ──────────────────────────────────────", type: "border" },
      { text: "", type: "blank" },
      { text: "  📧  Email    : gagguturutajkamal0@gmail.com", type: "info" },
      { text: "  📞  Phone    : +91 7995119306", type: "info" },
      { text: "  💼  LinkedIn : linkedin.com/in/taj-kamal", type: "info" },
      { text: "  📍  Location : Kadapa, Andhra Pradesh, India", type: "info" },
      { text: "", type: "blank" },
      { text: "  Open to internships, freelance security audits,", type: "success" },
      { text: "  and full-stack collaborations. Reply within 24hrs.", type: "success" },
      { text: "", type: "blank" },
    ],
  },
};

type Line = { text: string; type: string };
type HistoryEntry = { cmd: string; output: Line[] };

const colorMap: Record<string, string> = {
  border:    "text-primary/60",
  info:      "text-muted-foreground",
  highlight: "text-yellow-400",
  success:   "text-green-400",
  muted:     "text-muted-foreground/60",
  cmd:       "text-foreground",
  blank:     "",
  error:     "text-red-400",
};

const Terminal = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [cmdIdx, setCmdIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [history]);

  const focus = () => inputRef.current?.focus();

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    setCmdHistory((h) => [cmd, ...h]);
    setCmdIdx(-1);

    if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const found = COMMANDS[cmd];
    const output: Line[] = found
      ? found.output
      : [
          { text: "", type: "blank" },
          { text: `  bash: '${cmd}' — command not found.`, type: "error" },
          { text: "  Type 'help' to see available commands.", type: "muted" },
          { text: "", type: "blank" },
        ];

    setHistory((h) => [...h, { cmd, output }]);
    setInput("");
  };

  const onKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") { run(input); return; }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = Math.min(cmdIdx + 1, cmdHistory.length - 1);
      setCmdIdx(next);
      setInput(cmdHistory[next] ?? "");
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = Math.max(cmdIdx - 1, -1);
      setCmdIdx(next);
      setInput(next === -1 ? "" : cmdHistory[next]);
    }
  };

  return (
    <section id="terminal" className="py-24 md:py-32 relative">
      <div className="container">
        {/* Header */}
        <div className="reveal max-w-2xl mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
            02 — Interactive Terminal
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight">
            Know me through{" "}
            <span className="italic text-gold">commands</span>.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Type commands below to explore my skills, experience, and background — like a real shell.
          </p>
        </div>

        {/* Terminal window */}
        <div
          className="reveal rounded-2xl overflow-hidden border border-border shadow-elegant"
          onClick={focus}
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-card border-b border-border select-none">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <span className="h-3 w-3 rounded-full bg-green-500/80" />
            <div className="flex-1 flex justify-center">
              <span className="font-mono text-[11px] text-muted-foreground flex items-center gap-1.5">
                <TerminalIcon size={11} />
                taj@portfolio ~ bash
              </span>
            </div>
          </div>

          {/* Terminal body */}
          <div
            ref={bodyRef}
            className="bg-[#0d0d14] min-h-[420px] max-h-[520px] overflow-y-auto p-5 font-mono text-sm cursor-text"
            style={{ fontFamily: "'Fira Code', 'Cascadia Code', 'Consolas', monospace" }}
          >
            {/* Welcome */}
            {WELCOME.map((line, i) => (
              <div key={i} className={`leading-6 ${colorMap[line.type] ?? ""}`}>
                {line.text || "\u00A0"}
              </div>
            ))}

            {/* Command history */}
            {history.map((entry, i) => (
              <div key={i}>
                {/* prompt line */}
                <div className="flex items-center gap-1 leading-6">
                  <span className="text-green-400">taj</span>
                  <span className="text-muted-foreground/60">@</span>
                  <span className="text-primary">portfolio</span>
                  <span className="text-muted-foreground/60"> ~ </span>
                  <span className="text-yellow-400">$</span>
                  <span className="text-foreground ml-1">{entry.cmd}</span>
                </div>
                {/* output */}
                {entry.output.map((line, j) => (
                  <div key={j} className={`leading-6 ${colorMap[line.type] ?? ""}`}>
                    {line.text || "\u00A0"}
                  </div>
                ))}
              </div>
            ))}

            {/* Active prompt */}
            <div className="flex items-center gap-1 leading-6 mt-1">
              <span className="text-green-400">taj</span>
              <span className="text-muted-foreground/60">@</span>
              <span className="text-primary">portfolio</span>
              <span className="text-muted-foreground/60"> ~ </span>
              <span className="text-yellow-400">$</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKey}
                className="flex-1 ml-1 bg-transparent outline-none border-none text-foreground caret-primary"
                autoComplete="off"
                spellCheck={false}
                aria-label="Terminal input"
              />
            </div>

          </div>

          {/* Footer hint */}
          <div className="px-5 py-2.5 bg-card/60 border-t border-border flex flex-wrap gap-x-4 gap-y-1">
            {["help","about","skills","experience","ctf","contact"].map((cmd) => (
              <button
                key={cmd}
                onClick={() => { setInput(cmd); focus(); run(cmd); }}
                className="font-mono text-[11px] text-primary/70 hover:text-primary transition-colors"
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terminal;
