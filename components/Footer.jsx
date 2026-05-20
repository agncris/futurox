/* eslint-disable */
const footerStyles = {
  section: { background: "var(--ink-900)", color: "var(--bone-50)", padding: "96px 96px 48px" },
  inner: { maxWidth: 1280, margin: "0 auto" },
  top: { display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 48, paddingBottom: 64, borderBottom: "1px solid var(--ink-700)" },
  brand: { display: "flex", flexDirection: "column", gap: 24 },
  brandRow: { display: "flex", alignItems: "center", gap: 14, color: "var(--bone-50)" },
  tagline: {
    fontFamily: "var(--font-display)", fontStyle: "italic",
    fontSize: 28, lineHeight: 1.2, letterSpacing: "-0.015em",
    color: "var(--bone-50)", maxWidth: 360, margin: 0,
  },
  col: { display: "flex", flexDirection: "column", gap: 12 },
  colTitle: {
    fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 500,
    letterSpacing: "0.12em", textTransform: "uppercase",
    color: "var(--coral-300)", marginBottom: 6,
  },
  link: {
    fontFamily: "var(--font-sans)", fontSize: 15,
    color: "var(--bone-50)", textDecoration: "none",
    borderBottom: "1px solid transparent",
    transition: "border-color 240ms var(--ease)",
    width: "fit-content",
  },
  bottom: {
    paddingTop: 32,
    display: "flex", justifyContent: "space-between", alignItems: "center",
    fontFamily: "var(--font-mono)", fontSize: 11,
    letterSpacing: "0.12em", textTransform: "uppercase",
    color: "var(--fg-on-ink-mut)",
  },
};

const FootLink = ({ children, href = "#" }) => {
  const [hov, setHov] = React.useState(false);
  return (
    <a href={href}
       style={{ ...footerStyles.link, borderBottomColor: hov ? "var(--coral-500)" : "transparent", color: hov ? "var(--coral-300)" : "var(--bone-50)" }}
       onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      {children}
    </a>
  );
};

const Footer = () => (
  <footer style={footerStyles.section}>
    <div style={footerStyles.inner}>
      <div style={footerStyles.top}>
        <div style={footerStyles.brand}>
          <div style={footerStyles.brandRow}>
            <ArcMark size={28} stroke={1.8} color="var(--bone-50)" />
            <Wordmark height={20} color="var(--coral-500)" />
          </div>
          <p style={footerStyles.tagline}>
            Anticipar escenarios, decidir con horizonte. Desde Viña del Mar para Latinoamérica.
          </p>
        </div>

        <div style={footerStyles.col}>
          <span style={footerStyles.colTitle}>Servicios</span>
          <FootLink href="#futuros">Diseño de Futuros</FootLink>
          <FootLink href="#innovacion">Design Thinking</FootLink>
          <FootLink href="#ux">Diseño de Servicios</FootLink>
          <FootLink href="#interfaces">Interfaces Digitales</FootLink>
        </div>

        <div style={footerStyles.col}>
          <span style={footerStyles.colTitle}>Casa</span>
          <FootLink href="#nosotros">Equipo</FootLink>
          <FootLink href="#servicios">Servicios</FootLink>
          <FootLink href="#contacto">Conversemos</FootLink>
          <FootLink href="https://www.linkedin.com/company/futurox/">Pensamiento ↗</FootLink>
        </div>

        <div style={footerStyles.col}>
          <span style={footerStyles.colTitle}>Contacto</span>
          <FootLink href="mailto:hola@futurox.cl">hola@futurox.cl</FootLink>
          <FootLink href="tel:+56951087502">+56 9 5108 7502</FootLink>
          <FootLink href="https://www.linkedin.com/company/futurox/">LinkedIn FUTUROX ↗</FootLink>
          <FootLink href="https://www.linkedin.com/in/cristian-aguilar-navarrete">Cristian Aguilar ↗</FootLink>
          <FootLink href="https://www.linkedin.com/in/cumi-fintech-danillanes">Daniela Illanes ↗</FootLink>
        </div>
      </div>

      <div style={footerStyles.bottom}>
        <span>© 2026 Futurox · Viña del Mar, Chile</span>
        <span>
          <FootLink>Política de privacidad</FootLink>
        </span>
      </div>
    </div>
  </footer>
);

Object.assign(window, { Footer });
