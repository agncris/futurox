/* eslint-disable */
const pillStyles = {
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    padding: "6px 12px",
    borderRadius: 999,
    border: "1px solid var(--border)",
    background: "var(--paper)",
    color: "var(--ink-900)",
  },
  accent: { background: "var(--coral-100)", color: "var(--coral-600)", borderColor: "transparent" },
  ink:    { background: "var(--ink-900)",   color: "var(--bone-50)",   borderColor: "transparent" },
  ghost:  { background: "transparent",      color: "var(--ink-500)",   borderColor: "transparent" },
  onInk:  { background: "rgba(246,241,232,0.08)", color: "var(--bone-50)", borderColor: "rgba(246,241,232,0.18)" },
};

const Pill = ({ variant = "base", dot, children, style }) => (
  <span style={{ ...pillStyles.base, ...(pillStyles[variant] || {}), ...(style || {}) }}>
    {dot ? <span style={{ width: 6, height: 6, borderRadius: 999, background: dot }} /> : null}
    {children}
  </span>
);

Object.assign(window, { Pill });
