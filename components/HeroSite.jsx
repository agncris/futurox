/* eslint-disable */
const heroSiteStyles = {
  section: {
    paddingTop: 144,
    paddingBottom: 96,
    background: "var(--bone-50)",
    position: "relative",
    overflow: "hidden",
  },
  topMeta: {
    maxWidth: 1400, margin: "0 auto", width: "100%",
    padding: "0 96px 56px",
    display: "flex", justifyContent: "space-between",
    fontFamily: "var(--font-mono)", fontSize: 12,
    letterSpacing: "0.12em", textTransform: "uppercase",
    color: "var(--ink-500)",
  },
  inner: {
    maxWidth: 1400, margin: "0 auto", width: "100%",
    padding: "0 96px",
    display: "grid",
    gridTemplateColumns: "1.2fr 0.9fr",
    gap: 64, alignItems: "center",
  },
  textCol: { display: "flex", flexDirection: "column" },
  title: {
    fontFamily: "var(--font-display)",
    fontStyle: "italic",
    fontSize: "clamp(56px, 9vw, 132px)",
    lineHeight: 0.96,
    letterSpacing: "-0.025em",
    color: "var(--ink-900)",
    margin: 0,
    textWrap: "balance",
  },
  titleLine: { display: "block" },
  titleAccent: { color: "var(--coral-500)" },
  subhead: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(17px, 1.4vw, 21px)",
    lineHeight: 1.55,
    color: "var(--ink-500)",
    maxWidth: 560,
    margin: "40px 0 48px",
  },
  ctas: { display: "flex", gap: 16, flexWrap: "wrap" },
  vizCol: { display: "flex", alignItems: "center", justifyContent: "center", position: "relative" },
  bottomBand: {
    maxWidth: 1400, margin: "0 auto", width: "100%",
    padding: "72px 96px 0",
    display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0,
    borderTop: "1px solid var(--border)",
    marginTop: 72,
  },
  stage: {
    padding: "32px 24px 0 0",
    borderRight: "1px solid var(--border)",
    position: "relative",
  },
  stageLast: { borderRight: 0 },
  stageNum: {
    fontFamily: "var(--font-mono)", fontWeight: 500, fontSize: 12,
    letterSpacing: "0.14em", textTransform: "uppercase",
    color: "var(--coral-500)",
  },
  stageLabel: {
    marginTop: 14,
    fontFamily: "var(--font-display)", fontStyle: "italic",
    fontSize: 28, lineHeight: 1.1, letterSpacing: "-0.015em",
    color: "var(--ink-900)",
  },
  stageArrow: {
    position: "absolute", right: 18, top: 36,
    color: "var(--ink-300)", fontFamily: "var(--font-mono)", fontSize: 16,
  },
};

const stages = [
  { n: "01", label: "Futuro" },
  { n: "02", label: "Innovación" },
  { n: "03", label: "Servicio" },
  { n: "04", label: "Interfaz" },
];

const HeroSite = () => (
  <section id="top" style={heroSiteStyles.section} data-site="hero">
    <div style={heroSiteStyles.topMeta} data-site="hero-meta">
      <span>Consultora · estrategia, futuros &amp; experiencia</span>
      <span>Viña del Mar · Latinoamérica</span>
    </div>

    <div style={heroSiteStyles.inner} data-site="hero-inner">
      <div style={heroSiteStyles.textCol}>
        <h1 style={heroSiteStyles.title}>
          <span style={heroSiteStyles.titleLine}>Innovación estratégica,</span>
          <span style={heroSiteStyles.titleLine}>experiencia</span>
          <span style={heroSiteStyles.titleLine}>y <span style={heroSiteStyles.titleAccent}>diseño.</span></span>
        </h1>
        <p style={heroSiteStyles.subhead}>
          Acompañamos a organizaciones desde la visión de futuro hasta el diseño del producto.
          Estrategia, servicios, experiencia e interfaces — con un enfoque centrado en personas.
        </p>
        <div style={heroSiteStyles.ctas}>
          <Button variant="primary" withArrow href="#servicios">Ver el trabajo</Button>
          <Button variant="ghost" href="#contacto">Conversemos</Button>
        </div>
      </div>

      <div style={heroSiteStyles.vizCol} data-site="viz-col">
        <SystemViz size={620} />
      </div>
    </div>

    <div style={heroSiteStyles.bottomBand} data-site="hero-bottom">
      {stages.map((s, i) => (
        <div key={s.n}
             style={{ ...heroSiteStyles.stage, ...(i === stages.length - 1 ? heroSiteStyles.stageLast : {}) }}>
          <div style={heroSiteStyles.stageNum}>{s.n}</div>
          <div style={heroSiteStyles.stageLabel}>{s.label}</div>
          {i < stages.length - 1 ? <span style={heroSiteStyles.stageArrow}>→</span> : null}
        </div>
      ))}
    </div>
  </section>
);

Object.assign(window, { HeroSite });
