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
    fontFamily: "var(--font-sans)", fontWeight: 600,
    fontSize: 22, lineHeight: 1.15, letterSpacing: "-0.01em",
    color: "var(--ink-900)",
  },
  stageArrow: {
    position: "absolute", right: 18, top: 36,
    color: "var(--ink-300)", fontFamily: "var(--font-mono)", fontSize: 16,
  },
};

const stages = [
  { n: "01", key: "hero.stage.01", fallback: "Futuro" },
  { n: "02", key: "hero.stage.02", fallback: "Innovación" },
  { n: "03", key: "hero.stage.03", fallback: "Servicio" },
  { n: "04", key: "hero.stage.04", fallback: "Interfaz" },
];

const HeroSite = () => {
  const t = useT();
  return (
  <section id="top" style={heroSiteStyles.section} data-site="hero">
    <div style={heroSiteStyles.topMeta} data-site="hero-meta">
      <span>{t("hero.meta.left")}</span>
      <span>{t("hero.meta.right")}</span>
    </div>

    <div style={heroSiteStyles.inner} data-site="hero-inner">
      <div style={heroSiteStyles.textCol}>
        <h1 style={heroSiteStyles.title}>
          <span style={heroSiteStyles.titleLine}>{t("hero.title.1")}</span>
          <span style={heroSiteStyles.titleLine}>{t("hero.title.2")}</span>
          <span style={heroSiteStyles.titleLine}>{t("hero.title.3a")}<span style={heroSiteStyles.titleAccent}>{t("hero.title.3b")}</span></span>
        </h1>
        <p style={heroSiteStyles.subhead}>
          {t("hero.subhead")}
        </p>
        <div style={heroSiteStyles.ctas}>
          <Button variant="primary" withArrow href="#servicios">{t("hero.cta.work")}</Button>
          <Button variant="ghost" href="#contacto">{t("hero.cta.talk")}</Button>
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
          <div style={heroSiteStyles.stageLabel}>{t(s.key, s.fallback)}</div>
          {i < stages.length - 1 ? <span style={heroSiteStyles.stageArrow}>→</span> : null}
        </div>
      ))}
    </div>
  </section>
  );
};

Object.assign(window, { HeroSite });
