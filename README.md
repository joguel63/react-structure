# React Templates Library

A React 18 + TypeScript template optimized for building reusable component libraries. It includes strict linting configuration, well-organized folder conventions, and tooling that bundles your components with dual ESM/CommonJS outputs and automatically generated type definitions.

## Highlights

- 🧱 `tsup` configuration that generates bundles in ESM and CJS formats with type definitions.
- 📦 Automatic `.d.ts` file generation with library-optimized configuration.
- 🧭 Consistent code structure (`components`, `hooks`, `contexts`, etc.) connected through a `src/index.ts` barrel file.
- 🧹 ESLint 9 + TypeScript configuration with strict but balanced rules for libraries.
- 🎯 Modular architecture designed for maximum reusability and maintainability.

## Getting Started

### Prerequisites
- Node.js 18 or newer (LTS recommended)
- npm, yarn or pnpm

### Installation
```bash
npm install
# or
yarn install
```

## Available Scripts

```bash
npm run build      # Generate ESM/CJS bundles and TypeScript declarations into dist/
npm run typecheck  # Run type checking without emitting files
npm run lint       # Run ESLint with configured TypeScript + React rules
```

## Project Layout

```
react-structure/
├─ src/
│  ├─ components/       # Reusable UI components
│  │  └─ index.ts      # Component exports
│  ├─ contexts/        # React context providers and related hooks
│  │  └─ index.ts      # Context exports
│  ├─ enums/           # String/number enums shared across modules
│  │  └─ index.ts      # Enum exports
│  ├─ hooks/           # Custom React hooks
│  │  └─ index.ts      # Hook exports
│  ├─ types/           # Shared TypeScript types and interfaces
│  │  └─ index.ts      # Type exports
│  ├─ utils/           # Cross-cutting utilities and helpers
│  │  └─ index.ts      # Utility exports
│  ├─ index.ts         # Barrel file exporting public API
│  └─ vite-env.d.ts    # Vite type definitions
├─ eslint.config.js     # ESLint 9 configuration for TS/React
├─ tsconfig.json        # TypeScript configuration for development
├─ tsconfig.build.json  # TypeScript configuration for build
├─ package.json         # Project dependencies and scripts
└─ README.md
```

Use the dedicated folders to keep imports organized; export only what you want consumers to access via `src/index.ts`.

## Build Configuration

The project uses `tsup` to generate library bundles with the following features:

- **Output formats**: ESM and CommonJS
- **Type generation**: Automatic `.d.ts` files
- **Dual configuration**: 
  - `tsconfig.json` for development with aliases and flexible configurations
  - `tsconfig.build.json` for production build without aliases to avoid resolution issues

### Build Process

```bash
npm run build
```

This command:
1. Runs `tsup` with `tsconfig.build.json` configuration
2. Generates bundles in ESM (`dist/index.js`) and CJS (`dist/index.cjs`) formats
3. Creates type definitions (`dist/index.d.ts`)
4. Automatically excludes test files and stories

## Build & Publish Checklist

1. Update metadata in `package.json` (name, description, version).
2. Ensure `src/index.ts` exports only the components/hooks you want to distribute.
3. Run `npm run lint` to validate code quality.
4. Run `npm run typecheck` to verify types.
5. Run `npm run build` to generate bundle and validate output.
6. (Optional) Add automated tests or Storybook before publishing to npm.

## Consuming the Library

After publishing, consumers can install and import your package:

```bash
npm install your-lib-name
# or
yarn add your-lib-name
```

```tsx
import { MyComponent, useMyHook } from 'your-lib-name';

export const Example = () => <MyComponent />;
```

## Code Quality

### ESLint Configuration
- Enforces React hooks rules and consistent type definitions
- Limits functions to a maximum of 300 lines
- Uses `@typescript-eslint/consistent-type-definitions` to enforce `type` over `interface`
- Requires explicit return types on functions (`@typescript-eslint/explicit-function-return-type`)

### TypeScript Configuration
- Strict configuration enabled
- JSX support with `react-jsx`
- Type checking separated from build process
- Automatic exclusion of test files and stories

### Peer Dependencies
- React 18+
- React DOM 18+
- TypeScript 5+

## License

MIT — Feel free to adapt the structure and tooling to fit your team's needs.