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

const Footer = () => {
  const t = useT();
  return (
  <footer style={footerStyles.section}>
    <div style={footerStyles.inner}>
      <div style={footerStyles.top}>
        <div style={footerStyles.brand}>
          <div style={footerStyles.brandRow}>
            <ArcMark size={28} stroke={1.8} color="var(--bone-50)" />
            <Wordmark height={20} color="var(--coral-500)" />
          </div>
          <p style={footerStyles.tagline}>
            {t("footer.tagline")}
          </p>
        </div>

        <div style={footerStyles.col}>
          <span style={footerStyles.colTitle}>{t("footer.col.services")}</span>
          <FootLink href="#futuros">{t("footer.svc.futures")}</FootLink>
          <FootLink href="#innovacion">{t("footer.svc.thinking")}</FootLink>
          <FootLink href="#ux">{t("footer.svc.services")}</FootLink>
          <FootLink href="#interfaces">{t("footer.svc.interfaces")}</FootLink>
        </div>

        <div style={footerStyles.col}>
          <span style={footerStyles.colTitle}>{t("footer.col.house")}</span>
          <FootLink href="#nosotros">{t("footer.link.team")}</FootLink>
          <FootLink href="#servicios">{t("footer.link.services")}</FootLink>
          <FootLink href="#contacto">{t("footer.link.talk")}</FootLink>
          <FootLink href="https://www.linkedin.com/company/futurox/">{t("footer.link.thought")}</FootLink>
        </div>

        <div style={footerStyles.col}>
          <span style={footerStyles.colTitle}>{t("footer.col.contact")}</span>
          <FootLink href="mailto:hola@futurox.cl">hola@futurox.cl</FootLink>
          <FootLink href="tel:+56951087502">+56 9 5108 7502</FootLink>
          <FootLink href="https://www.linkedin.com/company/futurox/">LinkedIn FUTUROX ↗</FootLink>
          <FootLink href="https://www.linkedin.com/in/cristian-aguilar-navarrete">Cristian Aguilar ↗</FootLink>
          <FootLink href="https://www.linkedin.com/in/cumi-fintech-danillanes">Daniela Illanes ↗</FootLink>
        </div>
      </div>

      <div style={footerStyles.bottom}>
        <span>{t("footer.colophon")}</span>
        <span>
          <FootLink>{t("footer.privacy")}</FootLink>
        </span>
      </div>
    </div>
  </footer>
  );
};

Object.assign(window, { Footer });
