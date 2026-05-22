/* eslint-disable */
const clientsStyles = {
  section: { background: "var(--ink-900)", color: "var(--bone-50)", padding: "144px 0", overflow: "hidden" },
  head: {
    maxWidth: 1400, margin: "0 auto 80px",
    padding: "0 96px",
    display: "grid", gridTemplateColumns: "0.6fr 1.4fr", gap: 96, alignItems: "end",
  },
  eyebrow: {
    fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 500,
    letterSpacing: "0.14em", textTransform: "uppercase",
    color: "var(--coral-300)",
    marginBottom: 24,
  },
  title: {
    fontFamily: "var(--font-display)", fontStyle: "italic",
    fontSize: "clamp(48px, 6vw, 88px)", lineHeight: 1.0,
    letterSpacing: "-0.025em",
    color: "var(--bone-50)", margin: 0,
  },
  copy: {
    fontFamily: "var(--font-sans)", fontSize: 19, lineHeight: 1.6,
    color: "#B6BFD8", margin: 0, maxWidth: 480,
  },
  marqueeWrap: {
    width: "100%", overflow: "hidden", position: "relative",
    maskImage: "linear-gradient(to right, transparent 0, black 80px, black calc(100% - 80px), transparent 100%)",
    WebkitMaskImage: "linear-gradient(to right, transparent 0, black 80px, black calc(100% - 80px), transparent 100%)",
    paddingTop: 16,
    borderTop: "1px solid var(--ink-700)",
  },
  track: {
    display: "flex", gap: 80,
    animation: "marquee 38s linear infinite",
    whiteSpace: "nowrap",
    padding: "48px 0",
  },
  client: {
    fontFamily: "var(--font-display)", fontStyle: "italic",
    fontSize: 56, lineHeight: 1, letterSpacing: "-0.02em",
    color: "var(--bone-50)", opacity: 0.85,
    flexShrink: 0,
  },
  bullet: {
    fontFamily: "var(--font-mono)", fontSize: 36, color: "var(--coral-500)", flexShrink: 0,
    alignSelf: "center", lineHeight: 1,
  },
  footRow: {
    maxWidth: 1400, margin: "32px auto 0", padding: "0 96px",
    display: "flex", justifyContent: "space-between",
    fontFamily: "var(--font-mono)", fontSize: 12,
    letterSpacing: "0.12em", textTransform: "uppercase",
    color: "#B6BFD8",
  },
};

const Clients = () => {
  const clients = ["Santander", "Scotiabank", "Banmédica", "Sura", "Masisa", "Oxiquim"];
  // doubled for marquee continuity
  const loop = [...clients, ...clients];
  return (
    <section id="clientes" style={clientsStyles.section}>
      <div style={clientsStyles.head} data-site="clients-head">
        <div>
          <div style={clientsStyles.eyebrow}>Trabajamos con</div>
          <h2 style={clientsStyles.title}>Equipos<br/>que deciden.</h2>
        </div>
        <p style={clientsStyles.copy}>
          Trabajamos con áreas de innovación, transformación y experiencia de cliente en banca,
          salud, retail, industria y sector público — en Chile y la región.
        </p>
      </div>

      <div style={clientsStyles.marqueeWrap}>
        <div style={clientsStyles.track}>
          {loop.map((c, i) => (
            <React.Fragment key={i}>
              <span style={clientsStyles.client}>{c}</span>
              <span style={clientsStyles.bullet}>·</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div style={clientsStyles.footRow}>
        <span>Banca · Salud · Retail · Industria · Sector público</span>
        <span>Chile · Perú · Colombia · México</span>
      </div>
    </section>
  );
};

Object.assign(window, { Clients });
