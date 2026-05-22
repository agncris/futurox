/* eslint-disable */
/* ----------------------------------------------------------------------------
   FUTUROX · i18n
   - ES is default. EN is auto-selected when navigator.language is non-Spanish.
   - User can override via the ES/EN toggle in the nav; choice persists in
     localStorage("futurox.lang") and applies without reload.
   - Components read strings via `useT()` → returns `t(key, fallback)`.
   ---------------------------------------------------------------------------- */

const LangContext = React.createContext({ lang: "es", setLang: () => {} });

const STORAGE_KEY = "futurox.lang";

function detectLang() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "es" || stored === "en") return stored;
  } catch (e) { /* no-op */ }
  const nav = (navigator.language || navigator.userLanguage || "es").toLowerCase();
  return nav.startsWith("es") ? "es" : "en";
}

const LangProvider = ({ children }) => {
  const [lang, _setLang] = React.useState(() => detectLang());
  const setLang = (l) => {
    _setLang(l);
    try { window.localStorage.setItem(STORAGE_KEY, l); } catch (e) {}
    document.documentElement.setAttribute("lang", l);
  };
  React.useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};

const useLang = () => React.useContext(LangContext);

// `useT()` returns a function `t(key, fallback)`. Keys may be nested
// with dots; missing keys fall back to the provided default or the key.
const useT = () => {
  const { lang } = useLang();
  return (key, fallback) => {
    const dict = window.__FUTUROX_I18N__ || {};
    const entry = dict[key];
    if (entry && entry[lang] != null) return entry[lang];
    if (entry && entry.es != null && lang === "en") return entry.es; // soft fallback
    return fallback != null ? fallback : key;
  };
};

/* ----------------------------- Translations ----------------------------- */
/* Flat dictionary. Each key has { es, en }. Edit copy here.                 */

window.__FUTUROX_I18N__ = {
  /* ===== NAV ===== */
  "nav.services":   { es: "Servicios",          en: "Services" },
  "nav.team":       { es: "Equipo",             en: "Team" },
  "nav.contact":    { es: "Contacto",           en: "Contact" },
  "nav.cta":        { es: "Conversemos",        en: "Let’s talk" },
  "nav.brand":      { es: "FUTUROX · inicio",  en: "FUTUROX · home" },
  "nav.menu":       { es: "Menú",               en: "Menu" },
  "nav.open":       { es: "Abrir menú",         en: "Open menu" },
  "nav.close":      { es: "Cerrar menú",        en: "Close menu" },
  "nav.region":     { es: "Viña del Mar · LATAM", en: "Viña del Mar · LATAM" },

  /* ===== HERO ===== */
  "hero.meta.left":  { es: "Consultora · estrategia, futuros & experiencia",
                       en: "Consultancy · strategy, futures & experience" },
  "hero.meta.right": { es: "Viña del Mar · Latinoamérica",
                       en: "Viña del Mar · Latin America" },
  "hero.title.1":    { es: "Innovación estratégica,", en: "Strategic innovation," },
  "hero.title.2":    { es: "experiencia",             en: "experience" },
  "hero.title.3a":   { es: "y ",                       en: "& " },
  "hero.title.3b":   { es: "diseño.",                  en: "design." },
  "hero.subhead":    {
    es: "Acompañamos a organizaciones desde la visión de futuro hasta el diseño del producto. Estrategia, servicios, experiencia e interfaces — con un enfoque centrado en personas.",
    en: "We work with organizations from long-horizon vision to product design. Strategy, services, experience and interfaces — with a human-centered approach.",
  },
  "hero.cta.work":   { es: "Ver el trabajo", en: "See the work" },
  "hero.cta.talk":   { es: "Conversemos",    en: "Let’s talk" },
  "hero.stage.01":   { es: "Futuro",    en: "Future" },
  "hero.stage.02":   { es: "Innovación", en: "Innovation" },
  "hero.stage.03":   { es: "Servicio",   en: "Service" },
  "hero.stage.04":   { es: "Interfaz",   en: "Interface" },

  /* ===== POSITIONING ===== */
  "pos.eyebrow":     { es: "Cómo trabajamos",                en: "How we work" },
  "pos.m.1":         { es: "Pensamos primero la ",           en: "We start with " },
  "pos.m.accent":    { es: "estrategia",                     en: "strategy" },
  "pos.m.2":         { es: ", luego la ",                    en: ", then " },
  "pos.m.innov":     { es: "innovación",                     en: "innovation" },
  "pos.m.3":         { es: ", después la ",                  en: ", then " },
  "pos.m.exp":       { es: "experiencia",                    en: "experience" },
  "pos.m.4":         { es: " — y al final, la interfaz.",    en: " — and only then, the interface." },
  "pos.p1.label":    { es: "Estratégico",                    en: "Strategic" },
  "pos.p1.title":    { es: "Decisiones con horizonte",       en: "Long-horizon decisions" },
  "pos.p1.copy":     {
    es: "Mapeamos señales emergentes y construimos escenarios plausibles antes de proponer una solución.",
    en: "We map emerging signals and build plausible scenarios before proposing a single solution.",
  },
  "pos.p2.label":    { es: "Humano",                         en: "Human" },
  "pos.p2.title":    { es: "Centrados en personas",          en: "Human-centered" },
  "pos.p2.copy":     {
    es: "Investigamos, conversamos, observamos. Lo que vive tu cliente — y tu equipo — manda en cada decisión.",
    en: "We research, listen, observe. What your customer — and your team — actually live drives every call.",
  },
  "pos.p3.label":    { es: "Concreto",                       en: "Concrete" },
  "pos.p3.title":    { es: "Materializamos",                 en: "We ship it" },
  "pos.p3.copy":     {
    es: "Llevamos la visión al producto: servicios, journeys, prototipos e interfaces que se sostienen en el tiempo.",
    en: "We take the vision to product: services, journeys, prototypes and interfaces that hold up over time.",
  },

  /* ===== SERVICES INTRO ===== */
  "svc.intro.kicker":   { es: "Arquitectura · cuatro capas en secuencia",
                          en: "Architecture · four layers in sequence" },
  "svc.intro.right":    { es: "04 capas · 01 conversación",
                          en: "04 layers · 01 conversation" },
  "svc.intro.title.1":  { es: "De la ", en: "From " },
  "svc.intro.title.acc":{ es: "estrategia", en: "strategy" },
  "svc.intro.title.2":  { es: " al producto.", en: " to product." },
  "svc.intro.lede.strong": { es: "Cuatro tipos de proyecto, en secuencia.",
                              en: "Four kinds of project, in sequence." },
  "svc.intro.lede": {
    es: " Puedes contratarnos para una sola capa, o acompañarte desde la visión de futuro hasta la interfaz final. No vendemos un \"paquete\": diseñamos el recorrido que tu organización necesita.",
    en: " You can hire us for one layer, or have us with you from long-horizon vision to the final interface. We don’t sell a “package” — we design the path your organization actually needs.",
  },
  "svc.intro.entry.label": { es: "Punto de entrada", en: "Entry point" },
  "svc.intro.entry.value": { es: "donde tú decidas.", en: "wherever you decide." },

  /* arch steps */
  "svc.arch.01.copy": { es: "Anticipación estratégica. Escenarios plausibles. Decisiones con horizonte.",
                        en: "Strategic foresight. Plausible scenarios. Long-horizon decisions." },
  "svc.arch.02.copy": { es: "Empatizar, definir, idear, prototipar y validar. Capacidad que se queda en el equipo.",
                        en: "Empathize, define, ideate, prototype, validate. Capability that stays with the team." },
  "svc.arch.03.copy": { es: "Journeys, blueprints y rediseño de experiencia. Frontstage y backstage.",
                        en: "Journeys, blueprints and experience redesign. Frontstage and backstage." },
  "svc.arch.04.copy": { es: "Producto digital. Dashboards, apps, sistemas. La capa visible de toda la cadena.",
                        en: "Digital product. Dashboards, apps, systems. The visible layer of the whole chain." },
  "svc.arch.cta":     { es: "Ver capa", en: "See layer" },

  /* service rows */
  "svc.01.kicker": { es: "Anticipación estratégica · escenarios · decisiones con horizonte",
                     en: "Strategic foresight · scenarios · long-horizon decisions" },
  "svc.01.title":  { es: "Diseño de <em>Futuros</em>",
                     en: "<em>Futures</em> Design" },
  "svc.01.body": {
    es: "Acompañamos a equipos directivos a explorar cómo está cambiando su industria y a tomar decisiones estratégicas con visión de largo plazo. Mapeamos señales emergentes, construimos escenarios plausibles y diseñamos hojas de ruta que conectan la visión de futuro con las decisiones de hoy. No se trata de predecir lo que va a pasar, sino de preparar a la organización para distintos futuros posibles.",
    en: "We work with leadership teams to explore how their industry is shifting and make strategic decisions with a long-horizon view. We map emerging signals, build plausible scenarios and design roadmaps that connect future vision to today’s choices. The point isn’t to predict what will happen — it’s to prepare the organization for several possible futures.",
  },
  "svc.01.chips": {
    es: "Horizon scan, Escenarios 2035, Stress-test, Hoja de ruta",
    en: "Horizon scan, 2035 scenarios, Stress-test, Roadmap",
  },

  "svc.02.kicker": { es: "Experiencia de innovación para tu equipo",
                     en: "Innovation experience for your team" },
  "svc.02.title":  { es: "Innovación y <em>Design Thinking</em>",
                     en: "Innovation & <em>Design Thinking</em>" },
  "svc.02.body": {
    es: "Acompañamos a equipos a detectar oportunidades de negocio y resolver problemas reales con metodologías centradas en las personas. Guiamos las etapas de empatizar, definir, idear, prototipar y validar, traduciendo insights en iniciativas concretas. Más que un taller motivacional, es un proceso que conecta creatividad con decisiones estratégicas y deja al equipo con capacidades que se quedan en la organización.",
    en: "We help teams find real business opportunities and resolve actual problems with human-centered methods. We guide the stages of empathize, define, ideate, prototype and validate, translating insights into concrete initiatives. More than a motivational workshop, it’s a process that connects creativity to strategy and leaves the team with capabilities that stay with the organization.",
  },
  "svc.02.chips": {
    es: "Discovery, Canvas, Prototipado, Validación",
    en: "Discovery, Canvas, Prototyping, Validation",
  },

  "svc.03.kicker": { es: "Diseña experiencias memorables de principio a fin",
                     en: "Design end-to-end experiences worth remembering" },
  "svc.03.title":  { es: "Diseño de Servicios y <em>Experiencia</em>",
                     en: "Service & <em>Experience</em> Design" },
  "svc.03.body": {
    es: "Diseñamos servicios y productos digitales pensados desde la experiencia real de quien los usa. Mapeamos journeys, identificamos fricciones, rediseñamos puntos de contacto y validamos soluciones con usuarios. Trabajamos tanto la capa visible — lo que el cliente experimenta — como la capa invisible — procesos, sistemas y equipos que la sostienen — conectando experiencia con negocio.",
    en: "We design services and digital products grounded in the lived experience of the people who actually use them. We map journeys, surface friction, redesign touchpoints and validate solutions with real users. We work both the visible layer — what your customer experiences — and the invisible one — processes, systems and teams that hold it up — linking experience to business.",
  },
  "svc.03.chips": {
    es: "Research, Customer journey, Service blueprint, Validación con usuarios",
    en: "Research, Customer journey, Service blueprint, User validation",
  },

  "svc.04.kicker": { es: "Diseño intuitivo, funcional y centrado en el usuario",
                     en: "Intuitive, functional, user-centered design" },
  "svc.04.title":  { es: "Diseño de <em>Interfaces</em> Digitales",
                     en: "Digital <em>Interface</em> Design" },
  "svc.04.body": {
    es: "Desarrollamos interfaces que combinan funcionalidad, estética y usabilidad. Desde dashboards hasta aplicaciones y sitios web, diseñamos cada detalle para facilitar la interacción y maximizar el impacto en el negocio. Cada interfaz parte de una comprensión clara de los usuarios y sus objetivos — no de una plantilla.",
    en: "We build interfaces that combine function, aesthetics and usability. From dashboards to apps and websites, we design every detail to ease interaction and amplify business impact. Each interface starts from a clear understanding of users and their goals — not from a template.",
  },
  "svc.04.chips": {
    es: "Sistemas de diseño, UI, Prototipo high-fi, Handoff",
    en: "Design systems, UI, High-fi prototype, Handoff",
  },

  /* ===== TEAM ===== */
  "team.eyebrow":   { es: "Equipo · liderazgo & práctica", en: "Team · leadership & practice" },
  "team.title.1":   { es: "Quiénes diseñan ",  en: "Who designs " },
  "team.title.acc": { es: "FUTUROX",           en: "FUTUROX" },
  "team.lead": {
    es: "FUTUROX combina innovación estratégica, diseño de experiencias y visión de futuro desde una mirada interdisciplinaria. La consultora es liderada por <strong>Cristian Aguilar</strong> y <strong>Daniela Illanes</strong>, con experiencia en innovación, emprendimiento, diseño, transformación organizacional y metodologías de futuro.",
    en: "FUTUROX brings together strategic innovation, experience design and futures thinking from an interdisciplinary view. The studio is led by <strong>Cristian Aguilar</strong> and <strong>Daniela Illanes</strong>, with backgrounds in innovation, entrepreneurship, design, organizational transformation and futures methods.",
  },
  "team.linkedin.label": { es: "FUTUROX en LinkedIn", en: "FUTUROX on LinkedIn" },
  "team.linkedin.cta":   { es: "Seguir perfil",       en: "Follow on LinkedIn" },
  "team.bio.link":       { es: "Ver trayectoria",     en: "View profile" },
  "team.layers.practice":   { es: "Práctica",     en: "Practice" },
  "team.layers.trajectory": { es: "Trayectoria",  en: "Trajectory" },
  "team.inst.label":        { es: "Programas & afiliaciones", en: "Programs & affiliations" },

  /* Cristian */
  "team.cris.role":     { es: "Co-fundador · diseño estratégico",
                          en: "Co-founder · strategic design" },
  "team.cris.tag":      { es: "Diseño estratégico · Innovación · UX & servicios",
                          en: "Strategic design · Innovation · UX & services" },
  "team.cris.bio": {
    es: "Trabaja en la intersección entre <strong>innovación, diseño estratégico y experiencia digital</strong>. Ha liderado proyectos de innovación y transformación para organizaciones en distintos sectores, combinando metodologías centradas en personas, diseño de servicios y pensamiento sistémico. Es Ingeniero en Diseño de Productos, Magíster en Innovación, y profesor universitario en áreas de innovación, emprendimiento y experiencia de usuario.",
    en: "Works at the intersection of <strong>innovation, strategic design and digital experience</strong>. He has led innovation and transformation projects for organizations across sectors, combining human-centered methods, service design and systems thinking. Industrial Designer, Master in Innovation, and university lecturer in innovation, entrepreneurship and user experience.",
  },
  "team.cris.practice": {
    es: "Innovación estratégica, Diseño de servicios & UX, Transformación digital, Workshops & facilitación, Behavioral science aplicada",
    en: "Strategic innovation, Service design & UX, Digital transformation, Workshops & facilitation, Applied behavioral science",
  },
  "team.cris.trajectory": {
    es: "Ingeniero en Diseño de Productos, Magíster en Innovación, Docente universitario · innovación & UX, Más de quince años en proyectos de transformación",
    en: "Industrial Designer, Master in Innovation, University lecturer · innovation & UX, Over fifteen years in transformation projects",
  },
  "team.cris.uai": { es: "Perfil académico UAI", en: "UAI faculty profile" },

  /* Daniela */
  "team.dani.role":     { es: "Co-fundadora · innovación & crecimiento",
                          en: "Co-founder · innovation & growth" },
  "team.dani.tag":      { es: "Estrategia de innovación · Crecimiento · Ecosistemas globales",
                          en: "Innovation strategy · Growth · Global ecosystems" },
  "team.dani.bio": {
    es: "Ha trabajado en <strong>innovación, emprendimiento y desarrollo de negocios</strong> en distintos ecosistemas de América Latina, integrando metodologías de crecimiento, innovación exponencial y transformación organizacional. Su trayectoria combina experiencia en levantamiento de capital, emprendimiento tecnológico, metodologías de innovación y formación internacional en negocios, competitividad y liderazgo. Ha participado en aceleradoras, ecosistemas de startups y programas internacionales de innovación con impacto.",
    en: "Works at the intersection of <strong>innovation, entrepreneurship and business development</strong> across Latin American ecosystems, weaving growth methods, exponential innovation and organizational transformation. Her path combines capital raising, tech entrepreneurship, innovation methodologies and international training in business, competitiveness and leadership. She has been part of accelerators, startup ecosystems and global impact-innovation programs.",
  },
  "team.dani.practice": {
    es: "Innovación exponencial, Crecimiento & emprendimiento, Levantamiento de capital, Programas & aceleradoras, Liderazgo en ecosistemas",
    en: "Exponential innovation, Growth & entrepreneurship, Capital raising, Programs & accelerators, Ecosystem leadership",
  },
  "team.dani.trajectory": {
    es: "Negocios, competitividad & liderazgo, Innovación tecnológica con impacto, Mentoría & formación internacional, Más de una década en innovación LATAM",
    en: "Business, competitiveness & leadership, Impact-driven tech innovation, Mentorship & global training, Over a decade in LATAM innovation",
  },

  "team.portrait.alt": { es: "{name} — retrato", en: "{name} — portrait" },

  /* ===== CONTACT ===== */
  "contact.eyebrow": { es: "Conversemos", en: "Let’s talk" },
  "contact.title.1": { es: "¿Qué decisión",  en: "What decision" },
  "contact.title.2": { es: "tienes ",         en: "is " },
  "contact.title.acc":{ es: "pendiente",      en: "on hold" },
  "contact.title.3": { es: "?",                en: "?" },
  "contact.copy": {
    es: "Cuéntanos en una línea. Te respondemos con la propuesta de un primer encuentro — sin venta, sin compromiso.",
    en: "Tell us in one line. We’ll come back with a proposed first conversation — no pitch, no commitment.",
  },
  "contact.meta.email":   { es: "Email",     en: "Email" },
  "contact.meta.phone":   { es: "Teléfono",  en: "Phone" },
  "contact.meta.address": { es: "Dirección", en: "Address" },
  "contact.meta.hours":   { es: "Horario",   en: "Hours" },
  "contact.meta.hours.value": { es: "Lun a Vie · 09:00–18:30 CLT",
                                en: "Mon–Fri · 09:00–18:30 CLT" },
  "contact.form.name":     { es: "Tú y tu organización",
                             en: "You and your organization" },
  "contact.form.name.ph":  { es: "Cristian Pérez, Banco XYZ",
                             en: "Jane Smith, Acme Bank" },
  "contact.form.email":    { es: "Email",                 en: "Email" },
  "contact.form.email.ph": { es: "tu@empresa.cl",          en: "you@company.com" },
  "contact.form.msg":      { es: "¿Qué decisión tienes pendiente?",
                             en: "What decision is on your desk?" },
  "contact.form.msg.ph":   { es: "Una o dos líneas. Lo justo para entender.",
                             en: "One or two lines. Just enough to understand." },
  "contact.form.send":     { es: "Enviar mensaje", en: "Send message" },
  "contact.form.sending":  { es: "Enviando…",       en: "Sending…" },
  "contact.done.title.1":  { es: "Gracias.",        en: "Thank you." },
  "contact.done.title.2":  { es: "Lo leeremos hoy.",en: "We’ll read it today." },
  "contact.done.copy": {
    es: "Te escribimos en las próximas 48 horas con dos o tres preguntas y una fecha tentativa para conversar.",
    en: "We’ll write back within 48 hours with two or three questions and a tentative date to talk.",
  },

  /* ===== FOOTER ===== */
  "footer.tagline": {
    es: "Anticipar escenarios, decidir con horizonte. Desde Viña del Mar para Latinoamérica.",
    en: "Anticipate scenarios, decide with horizon. From Viña del Mar, for Latin America.",
  },
  "footer.col.services": { es: "Servicios", en: "Services" },
  "footer.col.house":    { es: "Casa",      en: "Studio" },
  "footer.col.contact":  { es: "Contacto",  en: "Contact" },
  "footer.link.team":    { es: "Equipo",        en: "Team" },
  "footer.link.services":{ es: "Servicios",     en: "Services" },
  "footer.link.talk":    { es: "Conversemos",   en: "Let’s talk" },
  "footer.link.thought": { es: "Pensamiento ↗", en: "Thinking ↗" },
  "footer.colophon":     { es: "© 2026 Futurox · Viña del Mar, Chile",
                           en: "© 2026 Futurox · Viña del Mar, Chile" },
  "footer.privacy":      { es: "Política de privacidad", en: "Privacy policy" },

  /* ===== FOOTER · service shortlinks ===== */
  "footer.svc.futures":    { es: "Diseño de Futuros",     en: "Futures Design" },
  "footer.svc.thinking":   { es: "Design Thinking",        en: "Design Thinking" },
  "footer.svc.services":   { es: "Diseño de Servicios",   en: "Service Design" },
  "footer.svc.interfaces": { es: "Interfaces Digitales",   en: "Digital Interfaces" },
};

/* ----------------------------- Lang toggle UI ----------------------------- */

const LangToggle = ({ onInk = false }) => {
  const { lang, setLang } = useLang();
  const baseColor   = onInk ? "var(--bone-50)" : "var(--ink-900)";
  const mutedColor  = onInk ? "rgba(245,241,234,0.45)" : "rgba(10,18,48,0.42)";
  const borderColor = onInk ? "rgba(245,241,234,0.18)" : "rgba(10,18,48,0.12)";

  const langs = ["ES", "EN"];
  return (
    <div role="group" aria-label="Language"
         style={{
           display: "inline-flex", alignItems: "center",
           border: `1px solid ${borderColor}`,
           borderRadius: 999,
           padding: 2,
           fontFamily: "var(--font-sans)",
           fontSize: 11, fontWeight: 500,
           letterSpacing: "0.14em",
         }}>
      {langs.map((l, i) => {
        const code = l.toLowerCase();
        const active = lang === code;
        return (
          <button key={l}
                  type="button"
                  onClick={() => setLang(code)}
                  aria-pressed={active}
                  style={{
                    appearance: "none", border: 0, cursor: "pointer",
                    padding: "5px 10px",
                    background: active ? (onInk ? "var(--coral-500)" : "var(--ink-900)") : "transparent",
                    color: active ? (onInk ? "var(--ink-900)" : "var(--bone-50)") : (onInk ? mutedColor : mutedColor),
                    borderRadius: 999,
                    transition: "background 240ms var(--ease), color 240ms var(--ease)",
                    fontFamily: "inherit", fontSize: "inherit",
                    fontWeight: "inherit", letterSpacing: "inherit",
                  }}>
            {l}
          </button>
        );
      })}
    </div>
  );
};

Object.assign(window, { LangProvider, LangContext, useLang, useT, LangToggle });
