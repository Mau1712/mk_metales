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

Imagen social: `/og/mk-metales-default.jpg` (recorte 1200×630 de la fotografía industrial del Hero). No es el favicon.

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
5. Sumar un rewrite en `vercel.json` hacia `/materiales/bronce/index.html`.

### robots y entornos

`public/robots.txt` bloquea todo (desarrollo y copias locales).

En el build:

- indexable (`production` + `VITE_SITE_URL`, o `VITE_INDEXABLE=true`): `Allow: /` y `Sitemap: {SITE_URL}/sitemap.xml`
- no indexable: `Disallow: /`

`index.html` arranca con `noindex, nofollow`. El plugin de Vite lo cambia a `index, follow` cuando el build es indexable.

Preview o staging: `VITE_INDEXABLE=false` o no definir `VITE_SITE_URL`.

### Favicon y manifest

Favicon 32×32 (`/favicon.png`), Apple touch 180×180 y logo de Schema/manifest 192×192 (`/icon-192.png`), recortados desde `src/assets/isoLogo.png`. El manifest completa identidad; no es una PWA.

### Prerender

El build genera HTML estático para cada ruta de `indexablePaths`. Crawlers y shares (LinkedIn, WhatsApp, X, Facebook) reciben title, description, Open Graph y el contenido de esa página, no el esqueleto de la home.

El cliente sigue siendo una SPA: después del HTML inicial, React monta la app y la navegación interna no recarga.

### 404 y redirecciones

No hay rewrite catch-all hacia la home. Una URL que no existe sirve `dist/404.html` con **HTTP 404**, `noindex` y la página de error real. Así se evita el soft 404.

Redirecciones **301**:

- `/materiales/` → `/materiales` (cualquier ruta con barra final, salvo `/`)
- `/index.html` → `/`
- `/materiales/index.html` → `/materiales`

Al agregar una ruta pública, además del router y `indexablePaths`, sumar el rewrite en `vercel.json`.

## Referencias de mercado

El cotizador todavía no calcula precios. La integración actual solo obtiene benchmarks USD/kg.

Flujo:

```text
React
  → marketDataService.getBenchmarks()
  → GET /api/metal-prices
  → CDN (Vercel)
  → MetalsDev adapter
  → Metals.Dev /v1/latest
```

- Contrato interno: `MetalBenchmarks` en `src/app/market/types.ts`.
- Cliente frontend: `src/app/market/marketDataService.ts`. Nunca llama a `api.metals.dev`.
- Function: `api/metal-prices.ts` (Vercel). En local, Vite monta la misma ruta.
- Adapter: `api/market/metalsDevAdapter.ts`. El resto de la app no conoce el JSON del proveedor.

Caché (solo respuestas 200):

- Navegador: `Cache-Control: public, max-age=0, must-revalidate`
- CDN: `s-maxage=43200` (12 h) + `stale-while-revalidate=86400` (24 h)
- Headers: `CDN-Cache-Control` y `Vercel-CDN-Cache-Control`

Usuario A puede disparar Metals.Dev. B y C deben resolver desde el CDN mientras la respuesta sea fresh o stale-while-revalidate. Los errores van con `no-store` para no cachear fallos 12 horas.

Timeout hacia Metals.Dev: 8 segundos.

Variable privada: `METALS_DEV_API_KEY` (`.env` local, no versionado). En Vercel, la misma variable como Environment Variable. No crear `VITE_METALS_DEV_API_KEY`.

### Datos reales que faltan

- Dominio productivo (`VITE_SITE_URL`)
- Teléfono, email, WhatsApp, dirección, horarios
- Perfiles sociales (`sameAs`, `twitter:site`)
- Facebook App ID, si se necesita
- Recorte OG 1200×630, si se prefiere el formato estándar
