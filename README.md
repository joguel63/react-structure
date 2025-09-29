# React Templates

Starter scaffold that combines Vite, React 18, TypeScript, React Router, Material UI, Emotion, and opinionated module organization so you can ship new screens fast without redoing project setup every time.

## Features

- ⚡️ Vite dev server with hot reload, TypeScript type-checking, and production-ready build outputs.
- 🎨 Material UI configured with a custom theme hook, dark mode by default, and ESLint + Prettier for consistent styling.
- 🧭 Route-driven module structure with React Router and lazy-loaded feature bundles.
- 📁 Core folder conventions for components, hooks, enums, and type exports to keep imports clean.
- 🧱 “Get Started” sample module showcasing layout, reusable components, and quick links to key docs.

## Project Structure

```
├─ public/               # Static assets served as-is (e.g., vite.svg, mui.svg)
├─ src/
│  ├─ assets/            # App-specific images and icons
│  ├─ core/              # Shared building blocks (routing, theme, hooks, types)
│  │  ├─ router/         # Global route registration (RoutesProvider)
│  │  ├─ theme/          # Theme hook (useTheme) and palette overrides
│  │  └─ …               # Placeholders for shared components/enums/hooks
│  ├─ modules/           # Feature modules (lazy-loaded by the router)
│  │  └─ getStarted/     # Example feature with page, router, enums, components
│  ├─ App.tsx            # Top-level layout (ThemeProvider + Router)
│  └─ main.tsx           # React entry point with StrictMode
├─ index.html
└─ vite.config.ts
```

Use the `core` directory for cross-cutting utilities and the `modules` directory for feature-specific code. Each module exposes its own router so new areas can be added without touching global routing logic.

## Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- Yarn (preferred) or npm/pnpm

### Installation

```bash
yarn install
```

## Available Scripts

```bash
yarn dev       # Start the Vite dev server with hot module replacement
yarn build     # Type-check with tsc and create an optimized production build
yarn preview   # Preview the production build locally
yarn lint      # Run ESLint with the configured TypeScript + React rules
yarn format    # Format the codebase with Prettier
```

## Theming

`useTheme` in `src/core/theme/theme.tsx` wraps Material UI’s `createTheme`, applies dark mode, and registers global CSS resets (e.g., removing number input spinners). Extend that file to customize palette, typography, component defaults, or add localization bundles.

Global CSS variables and light/dark overrides live in `src/index.css`. Toggle `data-theme` on `body` to switch between palettes if you add a theme switcher later.

## Routing

- `src/core/router/RoutesProvider` handles the root routing configuration.
- Each feature module supplies its own router (`modules/<feature>/router`) so you can extend navigation by adding new modules and routes in isolation.
- Modules are lazy-loaded via `React.lazy` and `Suspense` for faster initial loads.

## Sample Module

`modules/getStarted` demonstrates recommended patterns:

- `pages/getStarted` renders a welcome dashboard with Material UI components.
- `components` holds reusable UI pieces (QuickLinks, Steps) that read from typed arrays.
- `types` centralizes shared interfaces (QuickLink, Step) to keep the module self-contained.

Use it as a template when bootstrapping your next feature.

## Useful Resources

The starter page already links to essential docs:

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Material UI](https://mui.com/)
- [MUI Components](https://mui.com/material-ui/react-button/)
- [MUI Theming](https://mui.com/material-ui/customization/theming/)

## Next Steps

1. Update the sample content in `modules/getStarted` to reflect your product.
2. Add new modules under `src/modules` and register them in `RoutesProvider`.
3. Extend the Material UI theme to match your design system.
4. Configure environment variables or API clients as needed.

---

Happy hacking! Feel free to adapt the structure or tooling to fit your team’s conventions.
