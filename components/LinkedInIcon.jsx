/* eslint-disable */
// Minimal LinkedIn glyph — 1.5px stroke, line-style, matches Lucide aesthetic.
// Two parts: a tiny 'in' wordmark inside a soft square. Designed to sit
// inline with text or as a 28–36px standalone affordance.

const LinkedInIcon = ({ size = 18, color = "currentColor", stroke = 1.5 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
       stroke={color} strokeWidth={stroke}
       strokeLinecap="round" strokeLinejoin="round"
       aria-hidden="true" focusable="false">
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M8.5 10v7" />
    <circle cx="8.5" cy="7.2" r="0.9" fill={color} stroke="none" />
    <path d="M12.5 17v-4.2c0-1.2 1-2.2 2.2-2.2s2.3 1 2.3 2.2V17" />
    <path d="M12.5 17v-7" />
  </svg>
);

// Inline editorial link variant — small icon + "LinkedIn" label, with a
// coral underline that draws in on hover. Use inside founder profiles.
const LinkedInLink = ({ href, label = "LinkedIn", size = 16, onInk = false }) => {
  const [hov, setHov] = React.useState(false);
  const base = onInk ? "var(--bone-50)" : "var(--ink-900)";
  const hoverColor = "var(--coral-500)";
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
       onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
       style={{
         display: "inline-flex", alignItems: "center", gap: 10,
         fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 500,
         letterSpacing: "0.01em",
         color: hov ? hoverColor : base,
         textDecoration: "none",
         padding: "6px 0",
         borderBottom: `1px solid ${hov ? hoverColor : (onInk ? "rgba(246,241,232,0.28)" : "var(--bone-200)")}`,
         transition: "color 240ms var(--ease), border-color 240ms var(--ease)",
       }}>
      <LinkedInIcon size={size} color={hov ? hoverColor : base} />
      <span>{label}</span>
      <span style={{
        fontFamily: "var(--font-mono)", fontSize: 12,
        transform: hov ? "translate(2px,-2px)" : "translate(0,0)",
        transition: "transform 240ms var(--ease)",
        color: "inherit",
      }}>↗</span>
    </a>
  );
};

// Icon-only affordance for nav / footer — circular hover, no label.
const LinkedInGlyph = ({ href, onInk = false, size = 18 }) => {
  const [hov, setHov] = React.useState(false);
  const base = onInk ? "var(--bone-50)" : "var(--ink-900)";
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn FUTUROX"
       onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
       style={{
         display: "inline-flex", alignItems: "center", justifyContent: "center",
         width: 36, height: 36, borderRadius: 999,
         color: hov ? "var(--coral-500)" : base,
         border: `1px solid ${hov ? "var(--coral-500)" : (onInk ? "rgba(246,241,232,0.22)" : "var(--bone-200)")}`,
         background: hov ? (onInk ? "transparent" : "var(--coral-100)") : "transparent",
         transition: "color 240ms var(--ease), border-color 240ms var(--ease), background 240ms var(--ease)",
         textDecoration: "none",
       }}>
      <LinkedInIcon size={size} color={hov ? "var(--coral-500)" : base} />
    </a>
  );
};

Object.assign(window, { LinkedInIcon, LinkedInLink, LinkedInGlyph });
