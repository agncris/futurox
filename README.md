# FUTUROX — sitio estático multipágina

Sitio de FUTUROX (consultora de innovación estratégica, Chile). HTML estático semántico, multipágina, sin build step, sin dependencias de npm. Bilingüe ES/EN con toggle y detección de idioma del navegador.

## Estructura

```
index.html                                    Home (hub liviano)
talleres/index.html                           Panorama de talleres
talleres/futures-thinking/index.html          Taller de Futures Thinking
talleres/programa-innovacion/index.html       Programa de Innovación Estratégica
talleres/design-thinking/index.html           Taller de Design Thinking aplicado
talleres/diseno-de-servicios/index.html       Taller de Diseño de Servicios y Experiencia
consultoria/index.html                        Panorama de consultoría
consultoria/diseno-de-futuros/index.html      Diseño de Futuros
consultoria/innovacion/index.html             Innovación y Design Thinking
consultoria/servicios-y-experiencia/index.html Diseño de Servicios y Experiencia
consultoria/interfaces-digitales/index.html   Diseño de Interfaces Digitales
equipo/index.html                             Quiénes somos + FAQ general
contacto/index.html                           Conversemos (formulario)
404.html                                      Error con links de vuelta
styles.css · main.js · i18n-en.js             estilos + JS + diccionario EN
robots.txt · sitemap.xml · llms.txt           SEO / crawlers de IA
assets/                                       logos y retratos
gen1.js · gen2.js                             generador de páginas (herramienta interna, no se publica*)
```

\* `gen1.js`/`gen2.js` construyen las 13 páginas + `i18n-en.js` + `sitemap.xml` a partir de datos bilingües. Si editas contenido a mano en los HTML, mantén sincronizado el diccionario `i18n-en.js`. Puedes borrarlos del repo publicado.

**Nota sobre rutas:** los HTML usan rutas relativas (`../../styles.css`), no absolutas. Esto hace que el sitio funcione igual en `https://futurox.cl/`, en `https://USUARIO.github.io/REPO/` y en preview local — sin configuración.

## Publicar en GitHub Pages

1. Crea un repo y sube todos los archivos a la rama `main` (la raíz del repo es la raíz del sitio).
2. En **Settings → Pages**, selecciona *Deploy from a branch* → `main` → `/ (root)`.
3. Dominio propio: agrega un archivo `CNAME` en la raíz con una sola línea: `futurox.cl`; configura en el DNS un `CNAME` de `www` → `TUUSUARIO.github.io` y registros `A`/`ALIAS` del apex hacia GitHub Pages. Activa *Enforce HTTPS*.

## Antes de publicar — reemplazos pendientes

- [ ] **ID de Formspree**: en `contacto/index.html`, reemplazar `https://formspree.io/f/TU_ID` por el ID real (crear el formulario en formspree.io apuntando a hola@futurox.cl).
- [ ] **Imagen Open Graph**: crear `assets/og-image.png` (1200×630): logo FUTUROX + tagline "El futuro no llega. Se diseña." sobre navy `#0A1230`.
- [ ] **URLs de LinkedIn**: confirmar las de los fundadores y la de la empresa (buscar `TODO` y `sameAs` en los HTML y en `llms.txt`).
- [ ] **Logos de clientes**: cuando haya autorización, agregar franja de logos (hoy solo hay una línea de texto en el cierre de la home).
- [ ] **CNAME**: crear el archivo si se usa dominio propio.
- [ ] **Fecha de actualización**: al editar contenido, sincronizar: "Última actualización" en el footer, `dateModified` en el JSON-LD de la home y `lastmod` en `sitemap.xml`.

## Notas

- **Feed RSS del Radar** (`radar/feed.xml`): se actualiza a mano con cada edición — agregar un `<item>` nuevo (título, link, fecha, resumen) y actualizar `lastBuildDate`.

- **llms.txt** no es factor de ranking hoy (Google lo confirmó). Se incluye como infraestructura barata para agentes de IA que navegan el sitio — su costo es cero y su adopción crece.
- **Visibilidad en IA** también depende de fuentes externas: perfil de LinkedIn actualizado, menciones de terceros, directorios. Fuera del alcance de este repo, pero parte de la estrategia.
- Todo el contenido está en el HTML servido (nada renderizado por JS): los crawlers de IA no ejecutan JavaScript.
- El FAQ usa `<details>/<summary>` nativos: el contenido queda en el HTML fuente y es accesible sin JS.
