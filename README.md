# Shopsy

A React storefront demo built with Vite, Tailwind CSS, and React Router.

## Run locally

```sh
npm ci
npm run dev
```

## Validate and build

```sh
npm run lint
npm run build
npm run preview
```

The production site is deployed to GitHub Pages by `.github/workflows/static.yml`.
The workflow builds the app, publishes the `dist` directory, and provides a
fallback for client-side routes.

This is a frontend demo: orders, payments, newsletter subscriptions, and
server-side accounts are not connected. A demo profile is stored in the current
browser only.