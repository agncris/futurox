/* eslint-disable */
const buttonStyles = {
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    fontFamily: "var(--font-sans)",
    fontWeight: 500,
    fontSize: 15,
    letterSpacing: "0.01em",
    padding: "13px 22px",
    borderRadius: 10,
    border: "1px solid transparent",
    transition: "all 240ms cubic-bezier(0.22,0.61,0.36,1)",
    cursor: "pointer",
    textDecoration: "none",
  },
  primary:        { background: "var(--coral-500)", color: "white" },
  primaryHover:   { background: "var(--coral-600)" },
  secondary:      { background: "transparent", color: "var(--ink-900)", borderColor: "var(--ink-900)" },
  secondaryHover: { background: "var(--ink-900)", color: "var(--bone-50)" },
  ghost:          { background: "transparent", color: "var(--ink-900)" },
  ghostHover:     { color: "var(--coral-600)" },
  onInk:          { background: "var(--coral-500)", color: "white" },
  onInkHover:     { background: "var(--coral-600)" },
  onInkGhost:     { background: "transparent", color: "var(--bone-50)", borderColor: "rgba(246,241,232,0.4)" },
  onInkGhostHover:{ borderColor: "var(--bone-50)" },
};

const Button = ({ variant = "primary", withArrow = false, children, onClick, href, type, disabled = false, "aria-label": ariaLabel }) => {
  const arrow = withArrow;
  const [hover, setHover] = React.useState(false);
  const variantStyle = buttonStyles[variant];
  const hoverStyle = !disabled && hover ? (buttonStyles[variant + "Hover"] || {}) : {};
  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href}
      type={Tag === "button" ? (type || "button") : undefined}
      aria-label={ariaLabel}
      disabled={Tag === "button" ? disabled : undefined}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        ...buttonStyles.base,
        ...variantStyle,
        ...hoverStyle,
        ...(disabled ? { opacity: 0.55, cursor: "not-allowed" } : {}),
      }}
    >
      {children}
      {arrow ? (
        <span style={{ display: "inline-block", transition: "transform 240ms cubic-bezier(.22,.61,.36,1)", transform: !disabled && hover ? "translate(2px,-2px)" : "none" }}>↗</span>
      ) : null}
    </Tag>
  );
};

Object.assign(window, { Button });
