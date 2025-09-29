# React Structure Template

A Vite + React 18 + TypeScript starter focused on building shareable component libraries. It ships with strict linting, opinionated folder conventions, and tooling that bundles your components with dual ESM/CommonJS outputs and generated type definitions.

## Highlights

- 🧱 Library-first Vite setup that emits `dist/` bundles in ESM and CJS formats with sourcemaps.
- 📦 Automatic `.d.ts` generation via `vite-plugin-dts`, plus a post-build alias replacer to keep declaration imports valid.
- 🧭 Consistent source structure (`components`, `hooks`, `contexts`, etc.) wired through a single `src/index.ts` barrel.
- 🧹 TypeScript-aware ESLint 9 + Prettier 3 configuration with balanced strictness for libraries.
- 🎨 Optional CSS-in-JS bundling through `vite-plugin-css-injected-by-js` so your styles travel with the package.

## Getting Started

### Prerequisites
- Node.js 18 or newer (LTS recommended)
- Yarn (preferred) or npm/pnpm

### Installation
```bash
yarn install
```

## Useful Scripts

```bash
yarn dev       # Run Vite in library mode with fast HMR for local development
yarn build     # Generate ESM/CJS bundles and TypeScript declarations into dist/
yarn preview   # Serve the production build locally
yarn lint      # Run ESLint with the configured TypeScript + React rules
yarn format    # Format the repository with Prettier
```

## Project Layout

```graphql
react-structure/
├─ src/
│  ├─ components/   # Reusable UI building blocks
│  ├─ contexts/     # React context providers and hooks
│  ├─ enums/        # String/number enums shared across modules
│  ├─ hooks/        # Custom React hooks
│  ├─ types/        # Shared TypeScript types and interfaces
│  ├─ utils/        # Cross-cutting helpers
│  └─ index.ts      # Barrel file exporting public API surface
├─ replace-alias.js # Post-build script for declaration alias rewriting
├─ vite.config.ts   # Vite library build configuration
├─ eslint.config.js # ESLint 9 flat config tuned for TS/React
└─ README.md
```

Use the dedicated folders to keep imports organized; export only what you want consumers to reach via `src/index.ts`.

## Aliases & Type Declarations

Source imports can use the configured aliases (`components/`, `hooks/`, etc.) thanks to the matching Vite and TypeScript path mappings. After running `yarn build`, execute:

```bash
node replace-alias.js
```

This script rewrites the generated `.d.ts` files so declaration imports stay relative when consumers install your package.

## Build & Publish Checklist

1. Update `vite.config.ts` → `lib.name` and filename helpers with your library name.
2. Adjust `package.json` metadata (name, description, main, module, types, files).
3. Ensure `src/index.ts` exports only the components/hooks you want to ship.
4. Run `yarn lint` and `yarn build` to validate the bundle and type output.
5. (Optional) Add automated tests or Storybook before publishing to npm.

## Consuming the Library

After publishing, consumers can install and import your package:

```bash
yarn add your-lib-name
```

```tsx
import { MyComponent, useMyHook } from 'your-lib-name';

export const Example = () => <MyComponent />;
```

## Code Quality

- `yarn lint` enforces React hook rules, consistent type definitions, and keeps functions short.
- `yarn format` applies Prettier 3 across the repo.
- Type checking is handled during `yarn build` via `tsc`.

## License

MIT — feel free to adapt the structure and tooling to fit your team.