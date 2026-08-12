# GS Insights

Sitio institucional de GS Insights, una consultora senior de inteligencia de
mercado para México y LATAM.

## Desarrollo local

```bash
npm install
npm run dev
```

El sitio corre en `http://localhost:3000`.

## Validación

```bash
npm run lint
npm run build
```

## Producción

La rama `main` está conectada al proyecto `gs-insights` en Vercel y publica en
`https://www.gs-insights.com`.

Variable pública opcional:

```bash
NEXT_PUBLIC_SITE_URL=https://www.gs-insights.com
```
