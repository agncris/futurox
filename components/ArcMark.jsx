/* eslint-disable */
// ArcMark — the FUTUROX two-circles motif, parameterized.
const ArcMark = ({ size = 56, stroke = 1.5, color = "currentColor", filled = false }) => {
  const w = size * (200 / 120);
  return (
    <svg viewBox="0 0 200 120" width={w} height={size} fill="none" aria-hidden="true">
      <circle cx="76" cy="60" r="52" stroke={color} strokeWidth={stroke} />
      <circle cx="124" cy="60" r="52" stroke={color} strokeWidth={stroke} />
      {filled ? (
        <path
          d="M 100 19.2 A 52 52 0 0 1 100 100.8 A 52 52 0 0 1 100 19.2 Z"
          fill={color}
          fillOpacity="0.12"
        />
      ) : null}
    </svg>
  );
};

// Wordmark — pure SVG so the page never depends on a font that hasn't loaded.
const Wordmark = ({ height = 22, color = "var(--coral-500)" }) => (
  <svg viewBox="0 0 480 120" height={height} aria-label="FUTUROX">
    <text
      x="240" y="86" textAnchor="middle"
      fontFamily="Geist, Helvetica Neue, Arial, sans-serif"
      fontWeight="800" fontSize="92" letterSpacing="2"
      fill={color}
    >FUTUROX</text>
  </svg>
);

Object.assign(window, { ArcMark, Wordmark });
