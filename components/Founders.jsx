/* eslint-disable */
// Section "Quiénes diseñan FUTUROX"
// Editorial, asymmetric, NOT a CV. Two founder spreads mirrored across
// the page, with curated practice + formation, institutional affiliations
// rendered as quiet typographic marks, and a discreet LinkedIn affordance.

const aboutStyles = {
  section: {
    background: "var(--bone-50)",
    padding: "144px 96px",
    borderTop: "1px solid var(--border)",
  },
  inner: { maxWidth: 1400, margin: "0 auto" },

  /* ---------- Intro ---------- */
  intro: {
    display: "grid",
    gridTemplateColumns: "1.1fr 0.9fr",
    gap: 96,
    alignItems: "end",
    marginBottom: 128,
  },
  introLeft: { display: "flex", flexDirection: "column" },
  eyebrow: {
    fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 500,
    letterSpacing: "0.14em", textTransform: "uppercase",
    color: "var(--ink-500)", marginBottom: 28,
  },
  title: {
    fontFamily: "var(--font-display)", fontStyle: "italic",
    fontSize: "clamp(48px, 6.4vw, 104px)", lineHeight: 0.98,
    letterSpacing: "-0.025em",
    color: "var(--ink-900)", margin: 0,
    textWrap: "balance",
  },
  copy: {
    fontFamily: "var(--font-sans)", fontSize: 19, lineHeight: 1.65,
    color: "var(--ink-500)", margin: 0, maxWidth: 560,
  },
  introCompanyRow: {
    display: "flex", flexWrap: "wrap", alignItems: "center", gap: 20,
    marginTop: 28,
  },
  introCompanyLabel: {
    fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 500,
    letterSpacing: "0.12em", textTransform: "uppercase",
    color: "var(--ink-500)",
  },

  /* ---------- Founder spread ---------- */
  spread: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 96,
    alignItems: "start",
    paddingTop: 96, paddingBottom: 32,
    borderTop: "1px solid var(--border)",
  },

  /* portrait column */
  portraitCol: { display: "flex", flexDirection: "column", gap: 18 },

  /* editorial card — photo + readable overlay */
  card: {
    aspectRatio: "4 / 5",
    position: "relative", overflow: "hidden",
    display: "flex", flexDirection: "column",
    justifyContent: "flex-end",
    padding: "32px",
    background: "var(--bone-100)",
    color: "var(--bone-50)",
  },
  cardImg: {
    position: "absolute", inset: 0,
    width: "100%", height: "100%",
    objectFit: "cover",
    /* warm editorial grade: light desaturation + a touch of contrast */
    filter: "saturate(0.82) contrast(1.04)",
    zIndex: 0,
  },
  cardScrim: {
    position: "absolute", inset: 0, zIndex: 1,
    background:
      "linear-gradient(180deg, rgba(11,23,51,0) 48%, rgba(11,23,51,0.82) 100%)",
    pointerEvents: "none",
  },
  /* faint top-right arcs over the photo, brand motif */
  cardMotif: {
    position: "absolute", top: -60, right: -80,
    width: 220, height: 220,
    zIndex: 1, pointerEvents: "none",
    color: "rgba(247, 179, 145, 0.32)",
  },
  cardIndex: {
    position: "absolute", top: 20, left: 28,
    fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 500,
    letterSpacing: "0.18em", textTransform: "uppercase",
    color: "var(--coral-300)",
    zIndex: 3,
  },
  cardLabel: {
    position: "absolute", top: 20, right: 28,
    fontFamily: "var(--font-mono)", fontSize: 10,
    letterSpacing: "0.14em", textTransform: "uppercase",
    color: "rgba(246, 241, 232, 0.7)",
    zIndex: 3,
  },
  cardAccent: {
    width: 56, height: 1.5, background: "var(--coral-500)",
    marginBottom: 18,
    position: "relative", zIndex: 3,
  },
  cardName: {
    fontFamily: "var(--font-display)", fontStyle: "italic",
    fontSize: "clamp(38px, 4.6vw, 64px)", lineHeight: 0.96,
    letterSpacing: "-0.02em",
    color: "var(--bone-50)",
    margin: 0,
    position: "relative", zIndex: 3,
    textWrap: "balance",
  },
  cardRole: {
    marginTop: 18,
    fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 500,
    letterSpacing: "0.16em", textTransform: "uppercase",
    color: "rgba(246, 241, 232, 0.84)",
    position: "relative", zIndex: 3,
    maxWidth: "85%",
  },
  caption: {
    fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 500,
    letterSpacing: "0.12em", textTransform: "uppercase",
    color: "var(--ink-500)",
  },

  /* text column */
  textCol: { display: "flex", flexDirection: "column" },
  rolePill: {
    fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 500,
    letterSpacing: "0.14em", textTransform: "uppercase",
    color: "var(--coral-500)",
    marginBottom: 24,
  },
  name: {
    fontFamily: "var(--font-display)", fontStyle: "italic",
    fontSize: "clamp(56px, 6.4vw, 96px)", lineHeight: 0.98,
    letterSpacing: "-0.025em",
    color: "var(--ink-900)", margin: 0,
    textWrap: "balance",
  },
  tagline: {
    fontFamily: "var(--font-sans)", fontSize: 17, fontWeight: 500,
    color: "var(--ink-900)",
    marginTop: 20,
    letterSpacing: "0.01em",
  },
  taglineDot: { color: "var(--coral-500)", margin: "0 10px" },
  bio: {
    fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.65,
    color: "var(--ink-500)", margin: "28px 0 0",
    maxWidth: 560,
  },
  bioStrong: { color: "var(--ink-900)", fontWeight: 500 },

  /* practice + formation grid below body */
  layers: {
    marginTop: 48,
    display: "grid",
    gridTemplateColumns: "1fr 1.2fr",
    gap: 40,
    paddingTop: 32,
    borderTop: "1px solid var(--border)",
    maxWidth: 720,
  },
  layerLabel: {
    fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 500,
    letterSpacing: "0.14em", textTransform: "uppercase",
    color: "var(--ink-500)",
    marginBottom: 14,
  },
  layerList: {
    listStyle: "none", padding: 0, margin: 0,
    display: "flex", flexDirection: "column", gap: 8,
  },
  layerItem: {
    fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.45,
    color: "var(--ink-900)",
  },
  layerItemMuted: {
    color: "var(--ink-500)",
  },

  /* institutional row — wordmarks in serif italic, quiet, curated */
  instWrap: { marginTop: 40 },
  instLabel: {
    fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 500,
    letterSpacing: "0.14em", textTransform: "uppercase",
    color: "var(--ink-500)",
    marginBottom: 14,
  },
  instRow: {
    display: "flex", flexWrap: "wrap", alignItems: "center", gap: 0,
    borderTop: "1px solid var(--border)",
    borderBottom: "1px solid var(--border)",
  },
  instItem: {
    padding: "16px 22px 16px 0",
    marginRight: 22,
    borderRight: "1px solid var(--border)",
    fontFamily: "var(--font-sans)", fontWeight: 500,
    fontSize: 13, lineHeight: 1.1,
    letterSpacing: "0.08em", textTransform: "uppercase",
    color: "var(--ink-900)",
  },
  instItemLast: {
    borderRight: 0, marginRight: 0, paddingRight: 0,
  },

  /* LinkedIn affordance row */
  linkRow: {
    marginTop: 40,
    display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap",
  },
};

/* ---------------- Founder spread component ---------------- */

// Sibling to LinkedInLink — same editorial treatment, generic outbound link.
const ExternalLink = ({ href, label }) => {
  const [hov, setHov] = React.useState(false);
  const hoverColor = "var(--coral-500)";
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
       onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
       style={{
         display: "inline-flex", alignItems: "center", gap: 10,
         fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 500,
         color: hov ? hoverColor : "var(--ink-900)",
         textDecoration: "none",
         padding: "6px 0",
         borderBottom: `1px solid ${hov ? hoverColor : "var(--bone-200)"}`,
         transition: "color 240ms var(--ease), border-color 240ms var(--ease)",
       }}>
      <span>{label}</span>
      <span style={{
        fontFamily: "var(--font-mono)", fontSize: 12,
        transform: hov ? "translate(2px,-2px)" : "translate(0,0)",
        transition: "transform 240ms var(--ease)",
      }}>↗</span>
    </a>
  );
};

// Faint top-right arc motif overlaid on the photo. Two thin coral arcs
// that quote the brand mark without competing with the portrait.
const CardMotif = () => (
  <svg viewBox="0 0 220 220" fill="none"
       style={aboutStyles.cardMotif} aria-hidden="true">
    <circle cx="100" cy="110" r="80" stroke="currentColor" strokeWidth="1.5" opacity="0.55" />
    <circle cx="160" cy="110" r="80" stroke="currentColor" strokeWidth="1.5" opacity="0.32" />
  </svg>
);

const FounderSpread = ({
  index, role, name, tagline, bio, practice, formation,
  institutions, linkedinHref, photo, extraLinks = [], portraitOnRight = false,
}) => {
  const t = useT();
  const portrait = (
    <div style={aboutStyles.portraitCol} data-site="founder-portrait-col">
      <div style={aboutStyles.card} data-site="founder-portrait" className="grain">
        <img src={photo} alt={t("team.portrait.alt").replace("{name}", name)} style={aboutStyles.cardImg} />
        <div style={aboutStyles.cardScrim} aria-hidden="true" />
        <CardMotif />
        <div style={aboutStyles.cardAccent} />
        <h4 style={aboutStyles.cardName}>{name}</h4>
        <div style={aboutStyles.cardRole}>{role}</div>
      </div>
    </div>
  );

  const text = (
    <div style={aboutStyles.textCol}>
      <div style={aboutStyles.rolePill}>{role}</div>
      <h3 style={aboutStyles.name}>
        {name}<span style={{ color: "var(--coral-500)" }}>.</span>
      </h3>
      <div style={aboutStyles.tagline}>
        {tagline.map((t, i) => (
          <React.Fragment key={i}>
            {i > 0 ? <span style={aboutStyles.taglineDot}>·</span> : null}
            <span>{t}</span>
          </React.Fragment>
        ))}
      </div>

      <p style={aboutStyles.bio} dangerouslySetInnerHTML={{ __html: bio }} />

      <div style={aboutStyles.layers}>
        <div>
          <div style={aboutStyles.layerLabel}>{t("team.layers.practice")}</div>
          <ul style={aboutStyles.layerList}>
            {practice.map((p, i) => (
              <li key={i} style={aboutStyles.layerItem}>{p}</li>
            ))}
          </ul>
        </div>
        <div>
          <div style={aboutStyles.layerLabel}>{t("team.layers.trajectory")}</div>
          <ul style={aboutStyles.layerList}>
            {formation.map((f, i) => (
              <li key={i} style={{ ...aboutStyles.layerItem, ...aboutStyles.layerItemMuted }}>{f}</li>
            ))}
          </ul>
        </div>
      </div>

      {institutions && institutions.length > 0 ? (
        <div style={aboutStyles.instWrap}>
          <div style={aboutStyles.instLabel}>{t("team.inst.label")}</div>
          <div style={aboutStyles.instRow}>
            {institutions.map((it, i) => (
              <span key={i}
                    style={{ ...aboutStyles.instItem, ...(i === institutions.length - 1 ? aboutStyles.instItemLast : {}) }}>
                {it}
              </span>
            ))}
          </div>
        </div>
      ) : null}

      <div style={aboutStyles.linkRow}>
        <LinkedInLink href={linkedinHref} label={t("team.bio.link")} />
        {extraLinks.map((l, i) => (
          <ExternalLink key={i} href={l.href} label={l.label} />
        ))}
      </div>
    </div>
  );

  return (
    <div style={aboutStyles.spread} data-site="founder-spread">
      {portraitOnRight ? (
        <React.Fragment>{text}{portrait}</React.Fragment>
      ) : (
        <React.Fragment>{portrait}{text}</React.Fragment>
      )}
    </div>
  );
};

/* ---------------- Section ---------------- */

const Founders = () => {
  const t = useT();
  const splitList = (k) => (t(k) || "").split(",").map(s => s.trim()).filter(Boolean);
  return (
  <section id="nosotros" style={aboutStyles.section}>
    <div style={aboutStyles.inner}>

      {/* Intro */}
      <div style={aboutStyles.intro} data-site="founders-head">
        <div style={aboutStyles.introLeft}>
          <div style={aboutStyles.eyebrow}>{t("team.eyebrow")}</div>
          <h2 style={aboutStyles.title}>
            {t("team.title.1")}<span style={{ color: "var(--coral-500)" }}>{t("team.title.acc")}</span>.
          </h2>
        </div>
        <div>
          <p style={aboutStyles.copy} dangerouslySetInnerHTML={{ __html: t("team.lead") }} />
          <div style={aboutStyles.introCompanyRow}>
            <span style={aboutStyles.introCompanyLabel}>{t("team.linkedin.label")}</span>
            <LinkedInLink href="https://www.linkedin.com/company/futurox/" label={t("team.linkedin.cta")} />
          </div>
        </div>
      </div>

      {/* 01 · Cristian Aguilar */}
      <FounderSpread
        index="01"
        role={t("team.cris.role")}
        name="Cristian Aguilar"
        photo="assets/team/cristian.png"
        tagline={t("team.cris.tag").split("·").map(s => s.trim())}
        bio={t("team.cris.bio")}
        practice={splitList("team.cris.practice")}
        formation={splitList("team.cris.trajectory")}
        institutions={["Service Design", "Behavioral Sci.", "Design Thinking", "Foresight"]}
        linkedinHref="https://www.linkedin.com/in/cristian-aguilar-navarrete"
        extraLinks={[
          { href: "https://www.uai.cl/profesores/negocios/cristian-aguilar", label: t("team.cris.uai") },
        ]}
        portraitOnRight={false}
      />

      {/* 02 · Daniela Illanes — mirrored */}
      <FounderSpread
        index="02"
        role={t("team.dani.role")}
        name="Daniela Illanes"
        photo="assets/team/daniela.png"
        tagline={t("team.dani.tag").split("·").map(s => s.trim())}
        bio={t("team.dani.bio")}
        practice={splitList("team.dani.practice")}
        formation={splitList("team.dani.trajectory")}
        institutions={["Georgetown", "Harvard", "Singularity · EXO", "Draper", "Global Shapers · WEF", "Startup Chile"]}
        linkedinHref="https://www.linkedin.com/in/cumi-fintech-danillanes"
        portraitOnRight={true}
      />

    </div>
  </section>
  );
};

Object.assign(window, { Founders, FounderSpread, CardMotif, ExternalLink });
