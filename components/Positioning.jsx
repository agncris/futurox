/* eslint-disable */
const positioningStyles = {
  section: {
    background: "var(--ink-900)",
    color: "var(--bone-50)",
    padding: "128px 96px 144px",
    borderTop: "1px solid var(--ink-700)",
    borderBottom: "1px solid var(--ink-700)",
    position: "relative",
    overflow: "hidden",
  },
  inner: { maxWidth: 1400, margin: "0 auto", display: "grid", gridTemplateColumns: "0.55fr 1.45fr", gap: 96, alignItems: "start", position: "relative", zIndex: 1 },
  eyebrow: {
    fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 500,
    letterSpacing: "0.14em", textTransform: "uppercase",
    color: "var(--coral-300)",
    display: "flex", alignItems: "center", gap: 10,
  },
  eyebrowDot: { width: 6, height: 6, borderRadius: 999, background: "var(--coral-500)" },
  manifesto: {
    fontFamily: "var(--font-display)", fontStyle: "italic",
    fontSize: "clamp(36px, 4.4vw, 64px)", lineHeight: 1.1,
    letterSpacing: "-0.015em",
    color: "var(--bone-50)",
    margin: 0,
    textWrap: "balance",
  },
  manifestoMute: { color: "rgba(246, 241, 232, 0.42)" },
  manifestoAccent: { color: "var(--coral-500)" },
  bottomRow: {
    marginTop: 80,
    display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32,
    paddingTop: 32, borderTop: "1px solid var(--ink-700)",
  },
  pillar: { display: "flex", flexDirection: "column", gap: 10 },
  pillarLabel: {
    fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 500,
    letterSpacing: "0.14em", textTransform: "uppercase",
    color: "var(--coral-300)",
  },
  pillarTitle: {
    fontFamily: "var(--font-sans)", fontSize: 20, fontWeight: 500,
    color: "var(--bone-50)", margin: 0,
  },
  pillarCopy: {
    fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.55,
    color: "rgba(246, 241, 232, 0.62)", margin: 0, maxWidth: 320,
  },
  /* subtle decorative arc, top-right — quotes the brand motif without competing */
  decoArc: {
    position: "absolute",
    top: -80, right: -120,
    width: 460, height: 460,
    border: "1px solid rgba(247, 179, 145, 0.14)",
    borderRadius: 999,
    zIndex: 0,
    pointerEvents: "none",
  },
  decoArcInner: {
    position: "absolute",
    top: -40, right: -60,
    width: 380, height: 380,
    border: "1px solid rgba(246, 241, 232, 0.06)",
    borderRadius: 999,
    zIndex: 0,
    pointerEvents: "none",
  },
};

const Positioning = () => (
  <section id="posicionamiento" style={positioningStyles.section}>
    <div style={positioningStyles.decoArc} aria-hidden="true" />
    <div style={positioningStyles.decoArcInner} aria-hidden="true" />
    <div style={positioningStyles.inner} data-site="positioning-inner">
      <div style={positioningStyles.eyebrow}>
        <span style={positioningStyles.eyebrowDot} />
        <span>Cómo trabajamos</span>
      </div>
      <div>
        <p style={positioningStyles.manifesto}>
          <span style={positioningStyles.manifestoMute}>Pensamos primero la </span>
          <span style={positioningStyles.manifestoAccent}>estrategia</span>
          <span style={positioningStyles.manifestoMute}>, luego la </span>
          innovación
          <span style={positioningStyles.manifestoMute}>, después la </span>
          experiencia
          <span style={positioningStyles.manifestoMute}> — y al final, la interfaz.</span>
        </p>

        <div style={positioningStyles.bottomRow}>
          <div style={positioningStyles.pillar}>
            <span style={positioningStyles.pillarLabel}>Estratégico</span>
            <h3 style={positioningStyles.pillarTitle}>Decisiones con horizonte</h3>
            <p style={positioningStyles.pillarCopy}>Mapeamos señales emergentes y construimos escenarios plausibles antes de proponer una solución.</p>
          </div>
          <div style={positioningStyles.pillar}>
            <span style={positioningStyles.pillarLabel}>Humano</span>
            <h3 style={positioningStyles.pillarTitle}>Centrados en personas</h3>
            <p style={positioningStyles.pillarCopy}>Investigamos, conversamos, observamos. Lo que vive tu cliente — y tu equipo — manda en cada decisión.</p>
          </div>
          <div style={positioningStyles.pillar}>
            <span style={positioningStyles.pillarLabel}>Concreto</span>
            <h3 style={positioningStyles.pillarTitle}>Materializamos</h3>
            <p style={positioningStyles.pillarCopy}>Llevamos la visión al producto: servicios, journeys, prototipos e interfaces que se sostienen en el tiempo.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { Positioning });
