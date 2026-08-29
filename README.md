# MK Metales

Sitio comercial de MK Metales: compra, recuperación y valorización de scrap industrial metálico.

Stack: React, Vite, TypeScript, React Router y styled-components.

## Desarrollo

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
npm run lint
```

## SEO

La estrategia está centralizada en `src/app/seo/`. Las páginas declaran datos, no manipulan el DOM.

### URL del sitio

Configurar `VITE_SITE_URL` con la URL productiva absoluta, sin barra final. Copiar `.env.example`.

Ejemplo: `VITE_SITE_URL=https://www.ejemplo.com`

Esa variable es la fuente única para canonical, `og:url`, JSON-LD y `sitemap.xml`.

En production no se usa `localhost` como fallback. Sin `VITE_SITE_URL`, las URLs absolutas no se inventan y el entorno no se considera indexable.

### Metadata global

`src/app/seo/site.ts` define identidad, locale (`es`), colores de theme, imagen Open Graph por defecto y resolución de URL.

Teléfono, email, dirección y redes se leen de `src/features/shell/data.ts` (`companyContact`, `footerSocialLinks`). Hoy están vacíos: no se publican en Schema.

### Metadata por página

Cada feature declara un `*PageMeta` en su `data.ts` (title, description, `canonicalPath`, breadcrumbs, `includeService` si aplica).

La página llama `useDocumentMeta(...)`. El hook actualiza title, description, robots, canonical, Open Graph, Twitter/X y un único JSON-LD (`#mk-metales-jsonld`).

El cotizador siempre canibaliza a `/cotizador`. Los query params (`?material=`, `?peso=`) no generan URLs indexables.

### Open Graph y redes

Open Graph cubre Facebook, LinkedIn y WhatsApp. No hay tags propietarios de Facebook ni LinkedIn: no existen App ID ni perfiles confirmados.

Imagen social: `/og/mk-metales-default.png` (copia pública de la fotografía industrial del Hero, 1717×916). No es el favicon. Si más adelante hay un recorte 1200×630, reemplazar ese archivo sin cambiar la ruta.

### Schema.org

JSON-LD global: `Organization` + `WebSite` (sin `SearchAction`).

Internas: `BreadcrumbList` alineado a la navegación real.

`/soluciones-industriales`: `Service` de compra y valorización de scrap industrial.

No se usa `RecyclingCenter`, `LocalBusiness` ni `FAQPage` hasta tener NAP verificable o una razón semántica real. El FAQ sigue en HTML.

### Sitemap

Las rutas indexables viven en `src/app/seo/indexableRoutes.ts`. El build escribe `dist/sitemap.xml` solo si hay `VITE_SITE_URL`.

Para una futura `/materiales/bronce`:

1. Crear la página con contenido real (no una landing vacía).
2. Registrar la ruta en `src/app/router/router.tsx`.
3. Agregar `/materiales/bronce` a `indexablePaths`.
4. Declarar `*PageMeta` propio (title, description, canonical, breadcrumbs).

### robots y entornos

`public/robots.txt` bloquea todo (desarrollo y copias locales).

En el build:

- indexable (`production` + `VITE_SITE_URL`, o `VITE_INDEXABLE=true`): `Allow: /` y `Sitemap: {SITE_URL}/sitemap.xml`
- no indexable: `Disallow: /`

`index.html` arranca con `noindex, nofollow`. El plugin de Vite lo cambia a `index, follow` cuando el build es indexable.

Preview o staging: `VITE_INDEXABLE=false` o no definir `VITE_SITE_URL`.

### Favicon y manifest

El isologo `src/assets/isoLogo.png` se copia a `public/favicon.png` y `public/apple-touch-icon.png`. El manifest (`public/site.webmanifest`) completa identidad; no es una PWA.

### Limitación SPA

La metadata por ruta se aplica en el cliente. `index.html` deja un fallback válido para `/` (title, description, OG, Twitter, JSON-LD base).

Google suele ejecutar JavaScript. Facebook, LinkedIn, WhatsApp y algunos crawlers leen el HTML inicial: un share de `/materiales` puede mostrar la metadata de home hasta que exista prerender.

No se agregó prerender ni SSR para no cambiar el hosting. Cuando el orgánico o los shares lo exijan, la opción mínima compatible con Vite es un prerender estático de las 6 rutas públicas (por ejemplo `vite-plugin-prerender` o un paso de build que emita HTML por ruta), sin migrar a Next.js.

### Datos reales que faltan

- Dominio productivo (`VITE_SITE_URL`)
- Teléfono, email, WhatsApp, dirección, horarios
- Perfiles sociales (`sameAs`, `twitter:site`)
- Facebook App ID, si se necesita
- Recorte OG 1200×630, si se prefiere el formato estándar
