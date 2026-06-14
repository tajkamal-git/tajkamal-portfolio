import { useEffect, useState } from "react";

interface LoaderProps {
  onDone: () => void;
}

interface Alert {
  id: number;
  visible: boolean;
}

const Loader = ({ onDone }: LoaderProps) => {
  const [nameVisible, setNameVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Name types in immediately
    const t0 = setTimeout(() => setNameVisible(true), 200);
    // Subtitle fades in
    const t1 = setTimeout(() => setSubtitleVisible(true), 900);

    // Alert 1 pops in
    const t2 = setTimeout(() => {
      setAlerts([{ id: 1, visible: true }]);
    }, 1800);

    // Alert 2 pops in
    const t3 = setTimeout(() => {
      setAlerts(prev => [...prev, { id: 2, visible: true }]);
    }, 2700);

    // Alert 3 pops in (random looking)
    const t4 = setTimeout(() => {
      setAlerts(prev => [...prev, { id: 3, visible: true }]);
    }, 3400);

    // Start exit
    const t5 = setTimeout(() => setExiting(true), 4600);
    const t6 = setTimeout(() => onDone(), 5400);

    return () => { [t0,t1,t2,t3,t4,t5,t6].forEach(clearTimeout); };
  }, [onDone]);

  const alertData = [
    { title: "ACCESS GRANTED", sub: "Identity verified — Taj Kamal", icon: "✓", code: "AUTH-001" },
    { title: "ACCESS GRANTED", sub: "Security clearance confirmed", icon: "✓", code: "SEC-200" },
    { title: "ACCESS GRANTED", sub: "Portfolio unlocked. Welcome.", icon: "✓", code: "SYS-OK" },
  ];

  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "#0a0a0f",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexDirection: "column",
        opacity: exiting ? 0 : 1,
        transition: exiting ? "opacity 0.8s ease" : "none",
        pointerEvents: exiting ? "none" : "all",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid background */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }} />

      {/* Radial center glow */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(180,0,0,0.08) 0%, transparent 70%)",
      }} />

      {/* ── NAME ── */}
      <div style={{
        position: "relative", zIndex: 2, textAlign: "center",
        opacity: nameVisible ? 1 : 0,
        transform: nameVisible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}>
        <div style={{
          fontFamily: "'Segoe UI', system-ui, sans-serif",
          fontWeight: 800,
          fontSize: "clamp(3.5rem, 10vw, 7rem)",
          letterSpacing: "0.06em",
          color: "#fff",
          lineHeight: 1,
          textShadow: "0 0 60px rgba(255,255,255,0.15)",
        }}>
          TAJ KAMAL
        </div>

        {/* Underline accent */}
        <div style={{
          height: 2, marginTop: 16,
          background: "linear-gradient(90deg, transparent, #cc0000, #ff2222, #cc0000, transparent)",
          borderRadius: 2,
          opacity: nameVisible ? 1 : 0,
          transition: "opacity 0.5s ease 0.4s",
          boxShadow: "0 0 12px rgba(220,0,0,0.6)",
        }} />

        {/* Subtitle */}
        <div style={{
          marginTop: 18,
          fontFamily: "system-ui, sans-serif",
          fontWeight: 400,
          fontSize: "clamp(0.9rem, 2.5vw, 1.15rem)",
          letterSpacing: "0.3em",
          color: "rgba(255,255,255,0.45)",
          textTransform: "uppercase",
          opacity: subtitleVisible ? 1 : 0,
          transition: "opacity 0.8s ease",
        }}>
          Welcome to Taj Portfolio
        </div>
      </div>

      {/* ── TOAST ALERTS (bottom-right) ── */}
      <div style={{
        position: "fixed", bottom: 28, right: 28,
        display: "flex", flexDirection: "column", gap: 12,
        zIndex: 10, alignItems: "flex-end",
        pointerEvents: "none",
      }}>
        {alerts.map((alert, i) => {
          const data = alertData[i];
          return (
            <div
              key={alert.id}
              style={{
                width: 320,
                background: "rgba(10,0,0,0.92)",
                border: "1px solid rgba(200,0,0,0.6)",
                borderLeft: "4px solid #cc0000",
                borderRadius: 8,
                padding: "14px 16px",
                backdropFilter: "blur(12px)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.6), 0 0 0 1px rgba(200,0,0,0.1), inset 0 0 20px rgba(200,0,0,0.04)",
                opacity: alert.visible ? 1 : 0,
                transform: alert.visible ? "translateX(0)" : "translateX(80px)",
                transition: "opacity 0.4s cubic-bezier(0.16,1,0.3,1), transform 0.4s cubic-bezier(0.16,1,0.3,1)",
                display: "flex", alignItems: "flex-start", gap: 12,
              }}
            >
              {/* Icon */}
              <div style={{
                width: 32, height: 32, borderRadius: "50%",
                background: "rgba(200,0,0,0.15)",
                border: "1px solid rgba(200,0,0,0.5)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#ff3333", fontSize: 16, fontWeight: 700, flexShrink: 0,
                boxShadow: "0 0 10px rgba(200,0,0,0.3)",
              }}>
                {data.icon}
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontFamily: "system-ui, sans-serif", fontWeight: 700,
                  fontSize: "0.85rem", color: "#ff3333",
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  display: "flex", alignItems: "center", gap: 8,
                }}>
                  {data.title}
                  <span style={{
                    fontSize: "0.6rem", color: "rgba(255,50,50,0.5)",
                    fontWeight: 400, letterSpacing: "0.05em",
                    background: "rgba(200,0,0,0.1)", padding: "1px 6px",
                    borderRadius: 3, border: "1px solid rgba(200,0,0,0.2)",
                  }}>{data.code}</span>
                </div>
                <div style={{
                  marginTop: 4,
                  fontFamily: "system-ui, sans-serif", fontWeight: 400,
                  fontSize: "0.78rem", color: "rgba(255,255,255,0.5)",
                  letterSpacing: "0.02em",
                }}>
                  {data.sub}
                </div>
              </div>

              {/* Pulsing dot */}
              <div style={{
                width: 8, height: 8, borderRadius: "50%",
                background: "#cc0000", flexShrink: 0, marginTop: 4,
                animation: "pulse 1.2s ease-in-out infinite",
                boxShadow: "0 0 6px rgba(200,0,0,0.8)",
              }} />
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes pulse {
          0%,100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(0.7); }
        }
      `}</style>
    </div>
  );
};

export default Loader;
