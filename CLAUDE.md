# CLAUDE.md — futurox.cl

Sitio corporativo de FUTUROX, consultora chilena de innovación estratégica y Futures Thinking. Sitio estático multipágina publicado en GitHub Pages con dominio custom (futurox.cl). Cada push a `main` publica directo a producción: **todo cambio debe verificarse antes de commitear.**

## Arquitectura
- HTML estático semántico, sin frameworks ni build step. 20 páginas con patrón `carpeta/index.html`.
- `styles.css` y `main.js` compartidos (vanilla). Traducciones EN en `i18n-en.js` (sistema `data-i18n`; el ES vive en el HTML, que es la versión canónica e indexable).
- Secciones: home, /talleres/ (+4 subpáginas), /consultoria/ (+4), /recursos/ (4 guías), /radar/ (índice + ediciones `/radar/AAAA-MM/`), /equipo/, /contacto/, 404.
- SEO/GEO: sitemap.xml, robots.txt (crawlers de IA permitidos), llms.txt, /radar/feed.xml, JSON-LD por página, canonical https://futurox.cl (sin www).

## REGLAS DE COPY — INNEGOCIABLES (verificar antes de cada commit)
1. NUNCA mencionar años de experiencia ("+15 años" ni variantes), en ningún texto ni metadato.
2. Siempre **"Futures Thinking"** (con s). Excepción: el servicio de la capa estratégica se llama "Diseño de Futuros".
3. "Foro Económico Mundial", nunca "WEF".
4. Español chileno con tuteo (tú/tienes). Jamás voseo.
5. Nada que suene a IA: prohibido "desbloquea", "potencia", "lleva tu negocio al siguiente nivel", "en un mundo cada vez más cambiante", emojis, superlativos vacíos.
6. NUNCA la palabra "gratis"/"gratuito"/"sin costo": el primer paso es siempre "una conversación inicial". Un solo CTA: "Conversemos".
7. La palabra "backcasting" no aparece en el sitio (se describe como "diseñar desde el futuro deseado hacia atrás").
8. No inventar métricas, clientes, testimonios ni resultados. Sin precios en el sitio.
9. Copy aprobado (guías, radar) es VERBATIM: no "mejorar" textos existentes sin instrucción explícita.
10. La familia de servicios se llama **Workshops** en el copy visible (nav, footer, títulos, nombres de producto "Workshop de Futures Thinking", metadatos, JSON-LD, llms.txt). Las URLs se mantienen en `/talleres/` por SEO (la búsqueda en Chile es "taller de innovación"; el sitemap ya está indexado). La palabra "taller" se conserva SOLO cuando se habla de la categoría genérica del mercado, no de los productos de FUTUROX (p. ej. la guía `/recursos/como-elegir-taller-de-innovacion/`, el FAQ "¿Es otro taller motivacional?", "otros talleres de innovación").

## Identidad visual (valores exactos)
- Colores 60/30/10: bone `#F5F1EA` (fondos), ink `#0A1230` (texto y secciones oscuras), coral `#FF6B35` (solo CTAs/acentos). Secundarios en styles.css. Cyan `#5B9DAF` solo dentro de diagramas.
- Tipografías: Fraunces (display, itálica en títulos), DM Sans (cuerpo), JetBrains Mono (labels/eyebrows).
- Estética: MIT Media Lab / McKinsey Global Institute. Prohibido: gradientes SaaS, glassmorphism, stock photos, iconos de librería, emojis. Diagramas siempre SVG inline de línea fina con `role="img"` y `aria-label`.

## Convenciones técnicas
- **URLs internas: absolutas desde raíz y limpias**, sin `index.html` visible (`/talleres/`, `/radar/2026-07/#senal-01`, `/styles.css`, `/assets/...`).
- Todo el contenido en el HTML servido; nada esencial renderizado por JS ni existente solo en imágenes/SVG.
- Un solo `<h1>` por página. Accesibilidad AA. Mobile-first; verificar 360/768/1440 sin overflow.
- JSON-LD, llms.txt y contenido visible deben decir exactamente lo mismo (nunca claims solo en la capa para máquinas). FAQPage solo con preguntas visibles.

## Ritual al agregar o modificar páginas
1. Actualizar `sitemap.xml` (con `<lastmod>` real) — el sitemap debe coincidir 1:1 con los `index.html` existentes.
2. Actualizar `llms.txt` si cambia la oferta o hay página nueva.
3. Nueva edición del radar: crear `/radar/AAAA-MM/`, actualizar índice de /radar/, `feed.xml`, sitemap y llms.txt; anclas `#senal-01..N`; jamás publicar secciones marcadas "ANEXO INTERNO" o "Checklist".
4. Fechas visibles ("Actualizado: ...") sincronizadas con `dateModified` del JSON-LD.
5. Título/meta description únicos por página; canonical absoluto sin www.

## Verificación pre-commit (ejecutar siempre)
```bash
# Reglas duras (todo debe devolver vacío):
grep -rniE "gratis|gratuit|sin costo|años de experiencia|quince años|backcasting|WEF" --include="*.html" .
grep -rn "Future Thinking" --include="*.html" --include="*.txt" . | grep -v "Futures Thinking"
# URLs limpias (debe devolver vacío en href/src):
grep -rnE '(href|src)="[^"]*index\.html' --include="*.html" .
# Sitemap vs archivos (deben coincidir en cantidad):
grep -c "<loc>" sitemap.xml && find . -name "index.html" | wc -l
```

## Pendientes conocidos (no romper al editar)
- Formspree: `TU_ID` en /contacto/ debe reemplazarse por el ID real (hasta entonces el formulario no envía).
- TODOs de URLs de LinkedIn (footer y JSON-LD) esperan las URLs reales.
- Snippet de analytics (Plausible) queda comentado hasta decisión del dueño.
