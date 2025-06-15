# ui-kit

Reusable, scalable UI component library using React + TypeScript, styled with Tailwind CSS and SCSS modules. Bundled with tsup and published via npm.

## Features

- Strict TypeScript
- Import aliases: `@components`, `@styles`, `@utils`
- ESLint with React, TypeScript, Tailwind, Prettier
- Tailwind CSS + optional SCSS modules
- Bundled with tsup (ESM + CJS + types)
- Next.js App Router playground in `/playground/`

## Getting Started

### Install dependencies

```bash
npm install
```

### Build the library

```bash
npm run build
```

### Run the playground (Next.js demo)

```bash
npm run playground
```

## Usage Example

```tsx
import Button from 'ui-kit/dist/components/Button';

<Button label="Click me" onClick={() => alert('clicked')} />
```

## Project Structure

```
ui-kit/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   └── Button.module.scss
│   ├── styles/
│   │   └── globals.css
│   ├── utils/
│   └── index.ts
├── playground/
│   └── app/
│       └── components/button/page.tsx
├── tsup.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── .eslintrc.js
├── package.json
└── README.md
```

## Publishing

1. Build the library: `npm run build`
2. Publish to npm: `npm publish`

---

MIT License
