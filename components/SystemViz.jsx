/* eslint-disable */
// SystemViz — the abstract "signal field" visualization that sits in the hero.
// SVG-based, with subtle CSS animations (pulses + slow drift). Self-contained.

const SystemViz = ({ size = 720 }) => {
  // Nodes: x, y, r, pulse delay (s)
  const nodes = [
    { x: 120, y: 180, r: 4,  d: 0.0 },
    { x: 240, y: 110, r: 3,  d: 0.6 },
    { x: 360, y: 220, r: 5,  d: 1.2 },
    { x: 470, y: 90,  r: 3,  d: 0.3 },
    { x: 560, y: 310, r: 4,  d: 1.8 },
    { x: 640, y: 170, r: 6,  d: 0.9 },
    { x: 200, y: 360, r: 4,  d: 1.5 },
    { x: 350, y: 460, r: 3,  d: 0.4 },
    { x: 510, y: 510, r: 5,  d: 2.1 },
    { x: 660, y: 430, r: 3,  d: 1.1 },
    { x: 90,  y: 480, r: 3,  d: 2.4 },
    { x: 410, y: 60,  r: 2,  d: 1.7 },
  ];
  // Edges (sparse — only a few)
  const edges = [
    [0, 1], [1, 3], [2, 5], [3, 5], [4, 8], [5, 9],
    [2, 7], [6, 7], [7, 8], [0, 6], [3, 11], [1, 11],
  ];

  return (
    <svg viewBox="0 0 760 600" width={size} height={size * (600 / 760)}
         style={{ display: "block", overflow: "visible", maxWidth: "100%", height: "auto" }} aria-hidden="true">
      <defs>
        <radialGradient id="sv-coral-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F08A5D" stopOpacity="0.35"/>
          <stop offset="100%" stopColor="#F08A5D" stopOpacity="0"/>
        </radialGradient>
        <linearGradient id="sv-horizon" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#0B1733" stopOpacity="0.0"/>
          <stop offset="50%"  stopColor="#0B1733" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="#0B1733" stopOpacity="0.0"/>
        </linearGradient>
      </defs>

      {/* arcs motif — quiet, scaled large, off-center */}
      <g style={{ opacity: 0.18 }}>
        <circle cx="300" cy="300" r="220" stroke="#0B1733" strokeWidth="1.2" fill="none"/>
        <circle cx="460" cy="300" r="220" stroke="#0B1733" strokeWidth="1.2" fill="none"/>
      </g>

      {/* horizon lines fanning right (scenario branches) */}
      <g stroke="#0B1733" strokeWidth="0.8" fill="none" style={{ opacity: 0.32 }}>
        <path d="M 80 300 Q 380 290 720 180" />
        <path d="M 80 300 Q 380 300 720 280" />
        <path d="M 80 300 Q 380 310 720 380" />
        <path d="M 80 300 Q 380 320 720 470" />
      </g>

      {/* edges */}
      <g stroke="#0B1733" strokeWidth="0.7" style={{ opacity: 0.28 }}>
        {edges.map(([a, b], i) => (
          <line key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y} />
        ))}
      </g>

      {/* coral glow behind featured node */}
      <circle cx="640" cy="170" r="60" fill="url(#sv-coral-glow)" />

      {/* nodes */}
      <g>
        {nodes.map((n, i) => (
          <g key={i} style={{ transformOrigin: `${n.x}px ${n.y}px`, animation: `sv-pulse 3.6s ${n.d}s ease-in-out infinite` }}>
            <circle cx={n.x} cy={n.y} r={n.r + 6} fill="#F08A5D" opacity="0.0">
              <animate attributeName="opacity" values="0;0.35;0" dur="3.6s" begin={`${n.d}s`} repeatCount="indefinite" />
              <animate attributeName="r" values={`${n.r};${n.r + 14};${n.r + 6}`} dur="3.6s" begin={`${n.d}s`} repeatCount="indefinite" />
            </circle>
            <circle cx={n.x} cy={n.y} r={n.r}
                    fill={i === 5 ? "#F08A5D" : "#0B1733"} />
          </g>
        ))}
      </g>

      {/* a single sharp horizon mark on the right */}
      <g>
        <line x1="700" y1="120" x2="700" y2="500" stroke="#0B1733" strokeWidth="0.8" strokeDasharray="2 4" opacity="0.35" />
        <text x="708" y="120" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="1.4"
              fill="#0B1733" opacity="0.55">HORIZONTE</text>
        <text x="708" y="500" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="1.4"
              fill="#0B1733" opacity="0.55">2035</text>
      </g>
      <g>
        <line x1="80" y1="120" x2="80" y2="500" stroke="#0B1733" strokeWidth="0.8" strokeDasharray="2 4" opacity="0.35" />
        <text x="36" y="120" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="1.4"
              fill="#0B1733" opacity="0.55">HOY</text>
      </g>
    </svg>
  );
};

Object.assign(window, { SystemViz });
