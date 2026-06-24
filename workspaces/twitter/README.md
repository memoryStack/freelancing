# Twitter Web Application

A Twitter/X-inspired social feed web application built following the Figma Make guidelines for the freelancing monorepo.

## Features

- **Twitter/X-Inspired Design**: Blue accent color with clean, minimal layout
- **Responsive Layout**: Desktop navigation with mobile drawer menu
- **Feed UI**:
  - Compose tweet area
  - Sample tweet cards with engagement actions
  - Sticky header and tab bar

## Tech Stack

- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS 4** for styling
- **@freelancing/ui** — Custom Material Design 3 component library
- **Lucide React** for icons

## Project Structure

```
workspaces/twitter/
├── src/
│   ├── app/
│   │   └── App.tsx              # Main application component
│   ├── components/
│   │   └── layout/
│   │       └── Header.tsx       # Top navigation with menu
│   ├── pages/
│   │   └── home/
│   │       └── index.tsx        # Home feed page
│   ├── styles/
│   │   ├── index.css            # Main style entry
│   │   ├── tailwind.css         # Tailwind configuration
│   │   ├── theme.css            # MD3 system tokens (Twitter theme)
│   │   └── theme-ref-palette.css # Tonal palette (Twitter blue)
│   └── main.tsx                 # Application entry point
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## Design System Compliance

This workspace follows the **FIGMA-MAKE-GUIDELINES.md** specifications:

1. Uses `@freelancing/ui` for all UI components
2. Follows the required style file chain:
   - `index.css` → `tailwind.css` + `theme.css`
   - `theme.css` → `theme-ref-palette.css`
3. Uses Tailwind CSS 4 with proper source configuration
4. Implements MD3 token-driven theming
5. Twitter/X-inspired blue color palette
6. No component duplication — all components from `@freelancing/ui`

## Development

From the monorepo root:

```bash
# Install dependencies
npm install

# Run development server
npm run dev:twitter
```

Or from the workspace directory:

```bash
cd workspaces/twitter
npm run dev
```

## Build

```bash
npm run build:twitter
```

## Theme Customization

The Twitter-inspired theme uses a blue palette defined in `src/styles/theme-ref-palette.css`. Customize by modifying CSS custom properties in `src/styles/theme.css`.

### Key Theme Tokens

- **Primary**: Twitter blue (#1D9BF0) for actions and brand
- **Background**: White for clean feed layout
- **On-surface**: Dark gray (#0F1419) for text
- **Error**: Red for destructive actions
- **Success**: Green for positive feedback

## Notes

- This is a UI-only scaffold — no backend or real tweet functionality
- All components use `@freelancing/ui` Material Design 3 components
- Follows monorepo best practices and workspace architecture
