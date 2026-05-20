/* eslint-disable */
// ==========================================================================
// Four bespoke conceptual visuals for the four services.
// All SVG, all using the brand palette, with subtle motion via SMIL.
// ==========================================================================

// 01 · Diseño de Futuros — signal field + scenario branches converging on horizons
const FuturesViz = ({ w = 600, h = 420 }) => (
  <svg viewBox="0 0 600 420" width={w} height={h} style={{ display: "block", maxWidth: "100%", height: "auto" }}>
    <defs>
      <linearGradient id="fz-fade" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#0B1733" stopOpacity="0.35"/>
        <stop offset="100%" stopColor="#0B1733" stopOpacity="0"/>
      </linearGradient>
    </defs>
    {/* horizon axis */}
    <line x1="60" y1="380" x2="560" y2="380" stroke="#0B1733" strokeWidth="0.8" opacity="0.35"/>
    {[...Array(11)].map((_, i) => {
      const x = 60 + i * 50;
      return <line key={i} x1={x} y1="376" x2={x} y2="384" stroke="#0B1733" strokeWidth="0.7" opacity="0.35"/>;
    })}
    <text x="60"  y="402" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="1.2" fill="#0B1733" opacity="0.55">HOY</text>
    <text x="556" y="402" textAnchor="end" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="1.2" fill="#0B1733" opacity="0.55">+10 AÑOS</text>

    {/* scenario branch paths */}
    <g fill="none" strokeWidth="1.2">
      <path d="M 80 320 Q 240 270 560 80"  stroke="#F08A5D" />
      <path d="M 80 320 Q 240 300 560 200" stroke="#0B1733" opacity="0.55"/>
      <path d="M 80 320 Q 240 330 560 300" stroke="#0B1733" opacity="0.55"/>
      <path d="M 80 320 Q 240 360 560 360" stroke="#0B1733" opacity="0.4"/>
    </g>
    {/* scenario labels */}
    <g fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="1.2" fill="#0B1733">
      <text x="564" y="82"  opacity="0.95">ESCENARIO A</text>
      <text x="564" y="204" opacity="0.7">ESCENARIO B</text>
      <text x="564" y="304" opacity="0.7">ESCENARIO C</text>
      <text x="564" y="364" opacity="0.55">ESCENARIO D</text>
    </g>

    {/* signals (sparse dots scattered above horizon, at various time positions) */}
    <g fill="#0B1733">
      {[
        [130, 280, 2.5, 0.3], [170, 220, 2,  1.2], [210, 290, 3,  0.6],
        [260, 180, 2.5, 1.8], [310, 250, 2,  0.9], [340, 150, 3,  2.1],
        [380, 220, 2.5, 1.5], [430, 180, 2.5, 0.4], [470, 110, 3,  1.0],
        [200, 130, 2, 2.4], [290, 90,  2.5, 1.3], [380, 60, 2, 0.7],
      ].map(([cx, cy, r, d], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r={r + 6} fill="#F08A5D" opacity="0">
            <animate attributeName="opacity" values="0;0.35;0" dur="3.6s" begin={`${d}s`} repeatCount="indefinite"/>
            <animate attributeName="r" values={`${r};${r + 10};${r + 4}`} dur="3.6s" begin={`${d}s`} repeatCount="indefinite"/>
          </circle>
          <circle cx={cx} cy={cy} r={r} />
        </g>
      ))}
    </g>

    {/* "today" pivot */}
    <g>
      <circle cx="80" cy="320" r="5" fill="#0B1733"/>
      <circle cx="80" cy="320" r="11" fill="none" stroke="#0B1733" strokeWidth="0.8"/>
    </g>

    {/* tiny eyebrow */}
    <text x="60" y="52" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="1.4" fill="#0B1733" opacity="0.55">
      SEÑALES · ESCENARIOS · DECISIONES
    </text>
  </svg>
);

// 02 · Innovación y Design Thinking — canvas of clusters connected by insight lines
const InnovationViz = ({ w = 600, h = 420 }) => {
  // sticky-note cards laid out roughly in a clustered canvas
  const cards = [
    { x: 70,  y: 80,  w: 70, h: 46, fill: "#FCEADF", rot: -2 },
    { x: 150, y: 120, w: 70, h: 46, fill: "#EFE8D9", rot: 1 },
    { x: 90,  y: 180, w: 70, h: 46, fill: "#FCEADF", rot: 3 },
    { x: 180, y: 230, w: 70, h: 46, fill: "#EFE8D9", rot: -1 },
    { x: 270, y: 90,  w: 70, h: 46, fill: "#F08A5D", rot: 2, dark: true },
    { x: 320, y: 200, w: 70, h: 46, fill: "#EFE8D9", rot: 0 },
    { x: 410, y: 120, w: 70, h: 46, fill: "#FCEADF", rot: 4 },
    { x: 460, y: 230, w: 70, h: 46, fill: "#EFE8D9", rot: -3 },
    { x: 360, y: 320, w: 70, h: 46, fill: "#FCEADF", rot: 1 },
  ];
  return (
    <svg viewBox="0 0 600 420" width={w} height={h} style={{ display: "block", maxWidth: "100%", height: "auto" }}>
      {/* faint canvas grid */}
      <g stroke="#E4DAC5" strokeWidth="0.6">
        {[...Array(7)].map((_, i) => <line key={"h"+i} x1="20"  y1={40 + i * 56}  x2="580" y2={40 + i * 56}/>)}
        {[...Array(11)].map((_, i) => <line key={"v"+i} x1={40 + i * 52} y1="20" x2={40 + i * 52} y2="400"/>)}
      </g>
      {/* connecting lines between clusters */}
      <g stroke="#0B1733" strokeWidth="0.8" opacity="0.45" fill="none" strokeDasharray="3 5">
        <path d="M 110 126 Q 200 80 305 113"/>
        <path d="M 215 143 Q 250 170 305 113"/>
        <path d="M 305 113 Q 380 100 445 143"/>
        <path d="M 355 223 Q 400 270 395 343"/>
        <path d="M 215 253 Q 280 280 355 343"/>
      </g>
      {/* cards */}
      {cards.map((c, i) => (
        <g key={i} transform={`rotate(${c.rot} ${c.x + c.w/2} ${c.y + c.h/2})`}>
          <rect x={c.x} y={c.y} width={c.w} height={c.h} rx="3" ry="3"
                fill={c.fill}
                stroke={c.dark ? "transparent" : "#E4DAC5"} strokeWidth="0.8"
                filter="url(#card-shadow)"/>
          {/* "writing" — two stub lines */}
          <line x1={c.x + 8} y1={c.y + 16} x2={c.x + c.w - 12} y2={c.y + 16}
                stroke={c.dark ? "rgba(255,255,255,0.6)" : "#0B1733"} strokeWidth="1.2" opacity={c.dark ? 1 : 0.6}/>
          <line x1={c.x + 8} y1={c.y + 26} x2={c.x + c.w - 24} y2={c.y + 26}
                stroke={c.dark ? "rgba(255,255,255,0.45)" : "#0B1733"} strokeWidth="1.2" opacity={c.dark ? 1 : 0.4}/>
          <line x1={c.x + 8} y1={c.y + 36} x2={c.x + c.w - 30} y2={c.y + 36}
                stroke={c.dark ? "rgba(255,255,255,0.45)" : "#0B1733"} strokeWidth="1.2" opacity={c.dark ? 1 : 0.4}/>
        </g>
      ))}
      <defs>
        <filter id="card-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#0B1733" floodOpacity="0.10"/>
        </filter>
      </defs>
      {/* eyebrow */}
      <text x="20" y="20" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="1.4" fill="#0B1733" opacity="0.55">
        EMPATIZAR · DEFINIR · IDEAR · PROTOTIPAR · VALIDAR
      </text>
    </svg>
  );
};

// 03 · Diseño de Servicios y UX — service blueprint with frontstage/backstage lanes
const UXViz = ({ w = 600, h = 420 }) => (
  <svg viewBox="0 0 600 420" width={w} height={h} style={{ display: "block", maxWidth: "100%", height: "auto" }}>
    {/* lane backgrounds */}
    <rect x="20"  y="80"  width="560" height="90" fill="#EFE8D9" rx="2"/>
    <rect x="20"  y="190" width="560" height="90" fill="#F6F1E8" rx="2" stroke="#E4DAC5" strokeWidth="0.6"/>
    <rect x="20"  y="300" width="560" height="60" fill="#FCEADF" rx="2"/>

    {/* lane labels */}
    <g fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="1.2" fill="#0B1733">
      <text x="20" y="68"  opacity="0.55">CLIENTE · TOUCHPOINTS</text>
      <text x="20" y="178" opacity="0.55">FRONTSTAGE · EXPERIENCIA</text>
      <text x="20" y="288" opacity="0.55">BACKSTAGE · PROCESOS</text>
    </g>

    {/* journey path on customer lane */}
    <path d="M 50 125 Q 130 90 200 130 T 360 125 Q 440 150 540 120"
          fill="none" stroke="#F08A5D" strokeWidth="1.6"/>

    {/* touchpoints */}
    {[
      { x: 60,  label: "AWARENESS" },
      { x: 160, label: "INTERÉS" },
      { x: 260, label: "EVALUACIÓN" },
      { x: 360, label: "COMPRA" },
      { x: 460, label: "USO" },
      { x: 540, label: "FIDELIDAD" },
    ].map((t, i) => (
      <g key={i}>
        {/* dot in customer lane */}
        <circle cx={t.x} cy="125" r="6" fill="#F08A5D"/>
        <circle cx={t.x} cy="125" r="11" fill="none" stroke="#F08A5D" strokeWidth="0.8" opacity="0.5"/>
        {/* frontstage rect */}
        <rect x={t.x - 18} y="210" width="36" height="50" fill="#FFFFFF" stroke="#E4DAC5" strokeWidth="0.7" rx="3"/>
        <line x1={t.x - 12} y1="222" x2={t.x + 12} y2="222" stroke="#0B1733" strokeWidth="1" opacity="0.6"/>
        <line x1={t.x - 12} y1="230" x2={t.x + 8}  y2="230" stroke="#0B1733" strokeWidth="1" opacity="0.4"/>
        <line x1={t.x - 12} y1="238" x2={t.x + 4}  y2="238" stroke="#0B1733" strokeWidth="1" opacity="0.4"/>
        {/* line of interaction */}
        <line x1={t.x} y1="130" x2={t.x} y2="210" stroke="#0B1733" strokeWidth="0.6" opacity="0.4" strokeDasharray="2 3"/>
        {/* line of visibility to backstage */}
        <line x1={t.x} y1="260" x2={t.x} y2="320" stroke="#0B1733" strokeWidth="0.6" opacity="0.4" strokeDasharray="2 3"/>
        {/* backstage dot */}
        {[0,2,4].includes(i) && <rect x={t.x - 10} y="320" width="20" height="20" fill="#0B1733" rx="2"/>}
        {/* label */}
        <text x={t.x} y="395" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9"
              letterSpacing="1.2" fill="#0B1733" opacity="0.65">{t.label}</text>
      </g>
    ))}

    {/* friction marker */}
    <g transform="translate(260,90)">
      <circle r="10" fill="#B33A3A" opacity="0.18"/>
      <circle r="4"  fill="#B33A3A"/>
      <text x="14" y="3" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="1.2" fill="#B33A3A">FRICCIÓN</text>
    </g>

    {/* eyebrow */}
    <text x="20" y="20" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="1.4" fill="#0B1733" opacity="0.55">
      JOURNEY · BLUEPRINT · ECOSISTEMA
    </text>
  </svg>
);

// 04 · Diseño de Interfaces Digitales — minimal product window
const InterfacesViz = ({ w = 600, h = 420 }) => (
  <svg viewBox="0 0 600 420" width={w} height={h} style={{ display: "block", maxWidth: "100%", height: "auto" }}>
    {/* outer browser frame */}
    <rect x="40" y="40" width="520" height="340" rx="12" fill="#FFFFFF" stroke="#E4DAC5" strokeWidth="1"/>
    {/* top bar */}
    <line x1="40" y1="74" x2="560" y2="74" stroke="#E4DAC5"/>
    <circle cx="58" cy="57" r="4" fill="#E4DAC5"/>
    <circle cx="74" cy="57" r="4" fill="#E4DAC5"/>
    <circle cx="90" cy="57" r="4" fill="#E4DAC5"/>
    <rect x="200" y="50" width="200" height="14" rx="4" fill="#F6F1E8"/>

    {/* sidebar */}
    <line x1="160" y1="74" x2="160" y2="380" stroke="#EFE8D9"/>
    {[0,1,2,3,4].map(i => (
      <g key={i}>
        <rect x="76" y={102 + i * 36} width="14" height="14" rx="3" fill={i === 1 ? "#F08A5D" : "#EFE8D9"}/>
        <rect x="96" y={106 + i * 36} width={i === 1 ? 56 : (i % 2 ? 40 : 52)} height="6" rx="2"
              fill={i === 1 ? "#0B1733" : "#E4DAC5"}/>
      </g>
    ))}

    {/* main content: hero card */}
    <rect x="184" y="98" width="356" height="80" rx="8" fill="#0B1733"/>
    <rect x="200" y="116" width="90" height="8" rx="2" fill="rgba(252,234,223,0.7)"/>
    <rect x="200" y="132" width="200" height="14" rx="3" fill="#FFFFFF"/>
    <rect x="200" y="152" width="60" height="14" rx="7" fill="#F08A5D"/>

    {/* sparkline card */}
    <rect x="184" y="190" width="170" height="100" rx="8" fill="#F6F1E8" stroke="#E4DAC5" strokeWidth="0.8"/>
    <text x="196" y="212" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="1.2" fill="#0B1733" opacity="0.5">MÉTRICA · 30D</text>
    <text x="196" y="240" fontFamily="Geist, Helvetica Neue, sans-serif" fontSize="22" fontWeight="700" fill="#0B1733">+24,8%</text>
    <path d="M 196 280 L 220 274 L 244 268 L 268 270 L 292 258 L 316 250 L 340 240"
          fill="none" stroke="#F08A5D" strokeWidth="1.6"/>

    {/* bars card */}
    <rect x="370" y="190" width="170" height="100" rx="8" fill="#F6F1E8" stroke="#E4DAC5" strokeWidth="0.8"/>
    <text x="382" y="212" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="1.2" fill="#0B1733" opacity="0.5">SEGMENTOS</text>
    {[34, 58, 22, 46, 70, 30, 52, 40].map((v, i) => (
      <rect key={i} x={382 + i * 20} y={282 - v * 0.9} width="12" height={v * 0.9} rx="2"
            fill={i === 4 ? "#F08A5D" : "#0B1733"} opacity={i === 4 ? 1 : 0.6}/>
    ))}

    {/* list rows */}
    <rect x="184" y="304" width="356" height="64" rx="8" fill="#F6F1E8" stroke="#E4DAC5" strokeWidth="0.8"/>
    {[0,1,2].map(i => (
      <g key={i}>
        <circle cx="200" cy={320 + i * 16} r="4" fill="#0B1733" opacity={0.8 - i * 0.2}/>
        <rect x="212" y={316 + i * 16} width={140 + i * 30} height="6" rx="2" fill="#0B1733" opacity={0.55 - i * 0.1}/>
        <rect x="500" y={316 + i * 16} width="30" height="6" rx="2" fill="#F08A5D" opacity={0.9 - i * 0.2}/>
      </g>
    ))}

    {/* eyebrow */}
    <text x="40" y="22" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="1.4" fill="#0B1733" opacity="0.55">
      SISTEMA · DATOS · INTERFAZ
    </text>
  </svg>
);

Object.assign(window, { FuturesViz, InnovationViz, UXViz, InterfacesViz });
