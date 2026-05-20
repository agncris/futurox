/* eslint-disable */
const servSectionStyles = {
  section: {
    padding: "144px 96px",
    position: "relative",
  },
  shellBone:  { background: "var(--bone-50)" },
  shellPaper: { background: "var(--paper)",   borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" },
  shellInk:   { background: "var(--ink-900)", color: "var(--bone-50)" },
  inner: { maxWidth: 1400, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 96, alignItems: "center" },
  // alternating row direction
  reverse: { direction: "rtl" },
  reverseChild: { direction: "ltr" },

  num: {
    fontFamily: "var(--font-mono)", fontWeight: 500, fontSize: 13,
    letterSpacing: "0.14em", textTransform: "uppercase",
    color: "var(--coral-500)",
    marginBottom: 18,
  },
  kicker: {
    fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 500,
    letterSpacing: "0.12em", textTransform: "uppercase",
    color: "var(--ink-500)",
    marginBottom: 28,
    maxWidth: 480,
  },
  kickerInk: { color: "var(--coral-300)" },
  title: {
    fontFamily: "var(--font-display)", fontStyle: "italic",
    fontSize: "clamp(48px, 6.4vw, 96px)", lineHeight: 1.0,
    letterSpacing: "-0.025em",
    color: "var(--ink-900)",
    margin: 0,
    textWrap: "balance",
  },
  titleInk: { color: "var(--bone-50)" },
  body: {
    fontFamily: "var(--font-sans)", fontSize: 18, lineHeight: 1.65,
    color: "var(--ink-500)",
    maxWidth: 520, margin: "32px 0 32px",
  },
  bodyInk: { color: "#B6BFD8" },
  artifacts: {
    display: "flex", flexWrap: "wrap", gap: 8,
    paddingTop: 24, borderTop: "1px solid var(--border)",
    maxWidth: 520,
  },
  artifactsInk: { borderTopColor: "var(--ink-700)" },
  chip: {
    fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 500,
    letterSpacing: "0.1em", textTransform: "uppercase",
    color: "var(--ink-500)",
    padding: "6px 12px", border: "1px solid var(--border)", borderRadius: 999,
  },
  chipInk: { color: "var(--bone-50)", borderColor: "rgba(246,241,232,0.22)" },
  vizWrap: { display: "flex", alignItems: "center", justifyContent: "center" },
};

const ServiceSection = ({
  id, num, kicker, title, body, artifacts = [], visual, reverse = false, shell = "bone",
}) => {
  const onInk = shell === "ink";
  const shellStyle =
    shell === "ink" ? servSectionStyles.shellInk :
    shell === "paper" ? servSectionStyles.shellPaper :
    servSectionStyles.shellBone;

  const textContent = (
    <div>
      <div style={servSectionStyles.num}>{num}</div>
      <div style={{ ...servSectionStyles.kicker, ...(onInk ? servSectionStyles.kickerInk : {}) }}>{kicker}</div>
      <h2 style={{ ...servSectionStyles.title, ...(onInk ? servSectionStyles.titleInk : {}) }}
          dangerouslySetInnerHTML={{ __html: title }} />
      <p style={{ ...servSectionStyles.body, ...(onInk ? servSectionStyles.bodyInk : {}) }}>{body}</p>
      <div style={{ ...servSectionStyles.artifacts, ...(onInk ? servSectionStyles.artifactsInk : {}) }}>
        {artifacts.map((a, i) => (
          <span key={i} style={{ ...servSectionStyles.chip, ...(onInk ? servSectionStyles.chipInk : {}) }}>{a}</span>
        ))}
      </div>
    </div>
  );

  const vizContent = <div style={servSectionStyles.vizWrap}>{visual}</div>;

  return (
    <section id={id} style={{ ...servSectionStyles.section, ...shellStyle }} data-site="service-section">
      <div style={servSectionStyles.inner} data-site="service-inner">
        {reverse ? (
          <React.Fragment>{vizContent}{textContent}</React.Fragment>
        ) : (
          <React.Fragment>{textContent}{vizContent}</React.Fragment>
        )}
      </div>
    </section>
  );
};

// Wrapper that introduces the 4-service narrative + renders each
const servicesIntroStyles = {
  section: {
    background: "var(--bone-50)",
    padding: "144px 96px 88px",
    position: "relative",
    overflow: "hidden",
  },
  inner: { maxWidth: 1400, margin: "0 auto" },
  topBar: {
    display: "flex", justifyContent: "space-between", alignItems: "baseline",
    paddingBottom: 56,
  },
  kicker: {
    fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 500,
    letterSpacing: "0.14em", textTransform: "uppercase",
    color: "var(--ink-500)",
  },
  kickerRight: {
    fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 500,
    letterSpacing: "0.14em", textTransform: "uppercase",
    color: "var(--ink-300)",
  },
  title: {
    fontFamily: "var(--font-display)", fontStyle: "italic",
    fontSize: "clamp(64px, 9vw, 168px)", lineHeight: 0.94,
    letterSpacing: "-0.03em",
    color: "var(--ink-900)",
    margin: 0,
    textWrap: "balance",
  },
  titleAccent: { color: "var(--coral-500)" },
  copyRow: {
    marginTop: 72,
    display: "grid", gridTemplateColumns: "0.6fr 0.4fr",
    gap: 96,
    paddingBottom: 80,
  },
  lede: {
    fontFamily: "var(--font-sans)", fontSize: 21, lineHeight: 1.55,
    color: "var(--ink-500)", margin: 0, maxWidth: 640,
  },
  ledeStrong: { color: "var(--ink-900)", fontWeight: 500 },
  rightMeta: {
    display: "flex", flexDirection: "column", alignItems: "flex-start",
    justifyContent: "flex-end", gap: 6,
  },
  rightMetaLabel: {
    fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 500,
    letterSpacing: "0.14em", textTransform: "uppercase",
    color: "var(--ink-500)",
  },
  rightMetaValue: {
    fontFamily: "var(--font-display)", fontStyle: "italic",
    fontSize: 36, lineHeight: 1.0, letterSpacing: "-0.02em",
    color: "var(--ink-900)",
  },

  /* the architecture diagram */
  arch: {
    position: "relative",
    paddingTop: 56,
    borderTop: "1px solid var(--border)",
  },
  archGrid: {
    display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
    gap: 0,
    alignItems: "stretch",
    position: "relative",
  },
  /* horizontal hairline connecting all four dots on desktop */
  archRule: {
    position: "absolute",
    top: 28,
    left: "12.5%", right: "12.5%",
    height: 1,
    background: "linear-gradient(90deg, var(--bone-200) 0%, var(--ink-500) 60%, var(--coral-500) 100%)",
    zIndex: 0,
  },
  archStep: {
    position: "relative", zIndex: 1,
    padding: "0 24px 0 0",
    display: "flex", flexDirection: "column",
    cursor: "pointer",
    textDecoration: "none",
    transition: "color 240ms var(--ease)",
  },
  /* inline arrow between steps — absolutely positioned on the rule line */
  archArrow: {
    position: "absolute",
    top: 22,
    right: -10,
    width: 20, height: 12,
    display: "flex", alignItems: "center", justifyContent: "center",
    fontFamily: "var(--font-mono)", fontSize: 14,
    background: "var(--bone-50)",
    padding: "0 4px",
    zIndex: 2,
  },
  archDot: {
    width: 56, height: 56, borderRadius: 999,
    background: "var(--bone-50)",
    border: "1px solid var(--bone-200)",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 500,
    letterSpacing: "0.08em",
    color: "var(--ink-500)",
    marginBottom: 28,
    transition: "background 240ms var(--ease), border-color 240ms var(--ease), color 240ms var(--ease)",
  },
  archStepName: {
    fontFamily: "var(--font-display)", fontStyle: "italic",
    fontSize: 40, lineHeight: 1.0,
    letterSpacing: "-0.02em",
    color: "var(--ink-900)",
    margin: 0,
    transition: "color 240ms var(--ease), opacity 240ms var(--ease), filter 240ms var(--ease)",
  },
  archStepCopy: {
    marginTop: 18,
    fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.5,
    color: "var(--ink-500)",
    maxWidth: 220,
  },
  archStepArrow: {
    marginTop: 24,
    fontFamily: "var(--font-mono)", fontSize: 14,
    color: "var(--ink-300)",
    transition: "color 240ms var(--ease), transform 240ms var(--ease)",
  },
};

const ARCH_STEPS = [
  { n: "01", id: "futuros",    name: "Futuro",    copy: "Anticipación estratégica. Escenarios plausibles. Decisiones con horizonte." },
  { n: "02", id: "innovacion", name: "Innovación", copy: "Empatizar, definir, idear, prototipar y validar. Capacidad que se queda en el equipo." },
  { n: "03", id: "ux",         name: "Servicio",   copy: "Journeys, blueprints y rediseño de experiencia. Frontstage y backstage." },
  { n: "04", id: "interfaces", name: "Interfaz",   copy: "Producto digital. Dashboards, apps, sistemas. La capa visible de toda la cadena." },
];

/* Per-step visual tone — a calibrated ramp from "misty" (01) to "crisp" (04).
   The dot, name and copy all sharpen together so the sequence reads as
   "abstract strategy → concrete product" without any extra labels. */
const archTones = [
  { /* 01 misty */
    dotBorder: "var(--bone-200)",
    dotBg:     "var(--paper)",
    dotColor:  "var(--ink-300)",
    nameOpacity: 0.6, nameFilter: "blur(0.35px)", nameColor: "var(--ink-700)",
    copyColor: "var(--ink-300)",
  },
  { /* 02 soft */
    dotBorder: "var(--bone-200)",
    dotBg:     "var(--paper)",
    dotColor:  "var(--ink-500)",
    nameOpacity: 0.78, nameFilter: "none", nameColor: "var(--ink-700)",
    copyColor: "var(--ink-500)",
  },
  { /* 03 defined */
    dotBorder: "var(--ink-500)",
    dotBg:     "var(--paper)",
    dotColor:  "var(--ink-700)",
    nameOpacity: 0.95, nameFilter: "none", nameColor: "var(--ink-900)",
    copyColor: "var(--ink-500)",
  },
  { /* 04 crisp — coral solid */
    dotBorder: "var(--coral-500)",
    dotBg:     "var(--coral-500)",
    dotColor:  "var(--paper)",
    nameOpacity: 1, nameFilter: "none", nameColor: "var(--ink-900)",
    copyColor: "var(--ink-700)",
  },
];

const ArchStep = ({ step, idx, isLast }) => {
  const [hov, setHov] = React.useState(false);
  const tone = archTones[idx];
  return (
    <a href={`#${step.id}`}
       style={servicesIntroStyles.archStep}
       data-site="arch-step"
       onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <div style={{
        ...servicesIntroStyles.archDot,
        background: hov ? "var(--coral-100)" : tone.dotBg,
        borderColor: hov ? "var(--coral-500)" : tone.dotBorder,
        color: hov ? "var(--coral-600)" : tone.dotColor,
      }}>{step.n}</div>
      {!isLast ? (
        <span style={servicesIntroStyles.archArrow} data-site="arch-arrow" aria-hidden="true">→</span>
      ) : null}
      <h3 style={{
        ...servicesIntroStyles.archStepName,
        color: hov ? "var(--coral-600)" : tone.nameColor,
        opacity: hov ? 1 : tone.nameOpacity,
        filter: hov ? "none" : tone.nameFilter,
      }}>{step.name}</h3>
      <p style={{
        ...servicesIntroStyles.archStepCopy,
        color: hov ? "var(--ink-700)" : tone.copyColor,
      }}>{step.copy}</p>
      <span style={{
        ...servicesIntroStyles.archStepArrow,
        color: hov ? "var(--coral-500)" : "var(--ink-300)",
        transform: hov ? "translateX(2px)" : "translateX(0)",
      }}>Ver capa →</span>
    </a>
  );
};

const ServicesNarrative = () => (
  <React.Fragment>
    {/* Architectural section header — visually distinct from service rows */}
    <section id="servicios" style={servicesIntroStyles.section} data-site="services-intro-section">
      <div style={servicesIntroStyles.inner}>
        <div style={servicesIntroStyles.topBar} data-site="services-topbar">
          <span style={servicesIntroStyles.kicker}>Arquitectura · cuatro capas en secuencia</span>
          <span style={servicesIntroStyles.kickerRight}>04 capas · 01 conversación</span>
        </div>

        <h2 style={servicesIntroStyles.title}>
          De la <span style={servicesIntroStyles.titleAccent}>estrategia</span>
          {" "}al producto.
        </h2>

        <div style={servicesIntroStyles.copyRow} data-site="services-copyrow">
          <p style={servicesIntroStyles.lede}>
            <span style={servicesIntroStyles.ledeStrong}>Cuatro tipos de proyecto, en secuencia.</span>
            {" "}Puedes contratarnos para una sola capa, o acompañarte desde la visión de
            futuro hasta la interfaz final. No vendemos un "paquete": diseñamos el recorrido
            que tu organización necesita.
          </p>
          <div style={servicesIntroStyles.rightMeta}>
            <span style={servicesIntroStyles.rightMetaLabel}>Punto de entrada</span>
            <span style={servicesIntroStyles.rightMetaValue}>donde tú decidas.</span>
          </div>
        </div>

        <div style={servicesIntroStyles.arch} data-site="services-arch">
          <div style={servicesIntroStyles.archGrid} data-site="arch-grid">
            <div style={servicesIntroStyles.archRule} data-site="arch-rule" aria-hidden="true" />
            {ARCH_STEPS.map((s, i) => (
              <ArchStep key={s.n} step={s} idx={i} isLast={i === ARCH_STEPS.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>

    <ServiceSection
      id="futuros"
      num="01"
      kicker="Anticipación estratégica · escenarios · decisiones con horizonte"
      title="Diseño de <span style='color:var(--coral-500)'>Futuros</span>"
      body="Acompañamos a equipos directivos a explorar cómo está cambiando su industria y a tomar decisiones estratégicas con visión de largo plazo. Mapeamos señales emergentes, construimos escenarios plausibles y diseñamos hojas de ruta que conectan la visión de futuro con las decisiones de hoy. No se trata de predecir lo que va a pasar, sino de preparar a la organización para distintos futuros posibles."
      artifacts={["Horizon scan", "Escenarios 2035", "Stress-test", "Hoja de ruta"]}
      visual={<FuturesViz />}
      reverse={false}
      shell="bone"
    />

    <ServiceSection
      id="innovacion"
      num="02"
      kicker="Experiencia de innovación para tu equipo"
      title="Innovación y <span style='color:var(--coral-500)'>Design Thinking</span>"
      body="Acompañamos a equipos a detectar oportunidades de negocio y resolver problemas reales con metodologías centradas en las personas. Guiamos las etapas de empatizar, definir, idear, prototipar y validar, traduciendo insights en iniciativas concretas. Más que un taller motivacional, es un proceso que conecta creatividad con decisiones estratégicas y deja al equipo con capacidades que se quedan en la organización."
      artifacts={["Discovery", "Canvas", "Prototipado", "Validación"]}
      visual={<InnovationViz />}
      reverse={true}
      shell="paper"
    />

    <ServiceSection
      id="ux"
      num="03"
      kicker="Diseña experiencias memorables de principio a fin"
      title="Diseño de Servicios y <span style='color:var(--coral-500)'>Experiencia</span>"
      body="Diseñamos servicios y productos digitales pensados desde la experiencia real de quien los usa. Mapeamos journeys, identificamos fricciones, rediseñamos puntos de contacto y validamos soluciones con usuarios. Trabajamos tanto la capa visible — lo que el cliente experimenta — como la capa invisible — procesos, sistemas y equipos que la sostienen — conectando experiencia con negocio."
      artifacts={["Research", "Customer journey", "Service blueprint", "Validación con usuarios"]}
      visual={<UXViz />}
      reverse={false}
      shell="bone"
    />

    <ServiceSection
      id="interfaces"
      num="04"
      kicker="Diseño intuitivo, funcional y centrado en el usuario"
      title="Diseño de <span style='color:var(--coral-300)'>Interfaces</span> Digitales"
      body="Desarrollamos interfaces que combinan funcionalidad, estética y usabilidad. Desde dashboards hasta aplicaciones y sitios web, diseñamos cada detalle para facilitar la interacción y maximizar el impacto en el negocio. Cada interfaz parte de una comprensión clara de los usuarios y sus objetivos — no de una plantilla."
      artifacts={["Sistemas de diseño", "UI", "Prototipo high-fi", "Handoff"]}
      visual={<InterfacesViz />}
      reverse={true}
      shell="ink"
    />
  </React.Fragment>
);

Object.assign(window, { ServiceSection, ServicesNarrative });
