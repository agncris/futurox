/* eslint-disable */
const navSiteStyles = {
  wrap: {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
    background: "rgba(246, 241, 232, 0.78)",
    borderBottom: "1px solid rgba(228, 218, 197, 0.6)",
  },
  inner: {
    maxWidth: 1400, margin: "0 auto",
    padding: "18px 48px",
    display: "flex", alignItems: "center", justifyContent: "space-between",
    gap: 16,
  },
  brand: {
    display: "flex", alignItems: "center", gap: 12,
    color: "var(--ink-900)", textDecoration: "none",
    flexShrink: 0,
  },
  /* persistent right cluster — lang toggle + (desktop) links/CTA + (mobile) hamburger */
  right: {
    display: "flex", alignItems: "center", gap: 16,
    marginLeft: "auto",
  },
  links: { display: "flex", alignItems: "center", gap: 28 },
  link: {
    fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 500,
    color: "var(--ink-900)", textDecoration: "none",
    padding: "6px 0", borderBottom: "1px solid transparent",
    transition: "border-color 240ms var(--ease), color 240ms var(--ease)",
  },
  /* mobile hamburger trigger */
  hamburger: {
    display: "none",
    width: 40, height: 40,
    background: "transparent",
    border: "1px solid var(--bone-200)",
    borderRadius: 999,
    padding: 0,
    alignItems: "center", justifyContent: "center",
    cursor: "pointer",
    transition: "border-color 240ms var(--ease), background 240ms var(--ease)",
  },
  hamburgerIcon: {
    display: "flex", flexDirection: "column", gap: 4,
  },
  hamburgerBar: {
    width: 18, height: 1.5, background: "var(--ink-900)",
    transition: "transform 240ms var(--ease), opacity 240ms var(--ease)",
    borderRadius: 1,
  },
  /* mobile sheet */
  sheet: {
    position: "fixed", inset: 0, zIndex: 60,
    background: "var(--bone-50)",
    display: "flex", flexDirection: "column",
    padding: "20px 24px 32px",
    opacity: 1,
    transition: "opacity 240ms var(--ease)",
  },
  sheetHead: {
    display: "flex", alignItems: "center", justifyContent: "space-between",
    paddingBottom: 16, borderBottom: "1px solid var(--bone-200)",
  },
  sheetClose: {
    width: 40, height: 40,
    background: "transparent",
    border: "1px solid var(--bone-200)",
    borderRadius: 999,
    fontFamily: "var(--font-mono)", fontSize: 18,
    color: "var(--ink-900)",
    cursor: "pointer",
  },
  sheetNav: {
    display: "flex", flexDirection: "column",
    paddingTop: 24, gap: 0,
  },
  sheetLink: {
    fontFamily: "var(--font-display)", fontStyle: "italic",
    fontSize: 40, lineHeight: 1.15,
    letterSpacing: "-0.02em",
    color: "var(--ink-900)", textDecoration: "none",
    padding: "16px 0",
    borderBottom: "1px solid var(--bone-200)",
  },
  sheetFooter: {
    marginTop: "auto",
    paddingTop: 32,
    display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16,
  },
  sheetMeta: {
    fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 500,
    letterSpacing: "0.14em", textTransform: "uppercase",
    color: "var(--ink-500)",
  },
};

const NavSite = ({ current = "" }) => {
  const [hover, setHover] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const t = useT();

  const items = [
    { id: "servicios", label: t("nav.services"),  href: "#servicios" },
    { id: "nosotros",  label: t("nav.team"),      href: "#nosotros" },
    { id: "contacto",  label: t("nav.contact"),   href: "#contacto" },
  ];

  // Lock body scroll while the mobile sheet is open + close on hash navigation.
  React.useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = prev; };
    }
  }, [open]);

  const onSheetNav = () => setOpen(false);

  return (
    <React.Fragment>
      <header style={navSiteStyles.wrap}>
        <div style={navSiteStyles.inner} data-site="nav-inner">
          <a href="#top" style={navSiteStyles.brand} aria-label={t("nav.brand")}>
            <ArcMark size={22} stroke={1.8} color="var(--ink-900)" />
            <Wordmark height={16} color="var(--ink-900)" />
          </a>

          <div style={navSiteStyles.right}>
            {/* Lang toggle stays outside nav-links so it remains visible on mobile */}
            <div data-site="lang-toggle" style={{ flexShrink: 0 }}>
              <LangToggle />
            </div>

            {/* Desktop links */}
            <nav style={navSiteStyles.links} data-site="nav-links">
              {items.map(it => {
                const isCurrent = it.id === current;
                const isHover = hover === it.id;
                return (
                  <a key={it.id} href={it.href}
                     style={{
                       ...navSiteStyles.link,
                       borderBottomColor: isCurrent ? "var(--coral-500)" : "transparent",
                       color: isHover && !isCurrent ? "var(--coral-600)" : "var(--ink-900)",
                     }}
                     onMouseEnter={() => setHover(it.id)}
                     onMouseLeave={() => setHover(null)}>
                    {it.label}
                  </a>
                );
              })}
              <LinkedInGlyph href="https://www.linkedin.com/company/futurox/" />
              <Button variant="secondary" withArrow href="#contacto">{t("nav.cta")}</Button>
            </nav>

            {/* Mobile hamburger */}
            <button type="button"
                    data-site="nav-hamburger"
                    aria-label={t("nav.open")}
                    aria-expanded={open}
                    onClick={() => setOpen(true)}
                    style={navSiteStyles.hamburger}>
              <span style={navSiteStyles.hamburgerIcon} aria-hidden="true">
                <span style={navSiteStyles.hamburgerBar} />
                <span style={navSiteStyles.hamburgerBar} />
                <span style={navSiteStyles.hamburgerBar} />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile sheet */}
      {open ? (
        <div style={navSiteStyles.sheet} role="dialog" aria-modal="true" aria-label={t("nav.menu")}>
          <div style={navSiteStyles.sheetHead}>
            <a href="#top" style={navSiteStyles.brand} onClick={onSheetNav} aria-label={t("nav.brand")}>
              <ArcMark size={22} stroke={1.8} color="var(--ink-900)" />
              <Wordmark height={16} color="var(--ink-900)" />
            </a>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div data-site="lang-toggle-sheet">
                <LangToggle />
              </div>
              <button type="button" aria-label={t("nav.close")}
                      onClick={() => setOpen(false)}
                      style={navSiteStyles.sheetClose}>×</button>
            </div>
          </div>
          <nav style={navSiteStyles.sheetNav}>
            {items.map(it => (
              <a key={it.id} href={it.href} onClick={onSheetNav} style={navSiteStyles.sheetLink}>
                {it.label}
              </a>
            ))}
          </nav>
          <div style={navSiteStyles.sheetFooter}>
            <span style={navSiteStyles.sheetMeta}>{t("nav.region")}</span>
            <LinkedInGlyph href="https://www.linkedin.com/company/futurox/" />
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

Object.assign(window, { NavSite });
