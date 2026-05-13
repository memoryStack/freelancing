# Sudoku Web Application

A modern Sudoku web application built following the Figma Make guidelines for the freelancing monorepo.

## Features

- **Clean Uber-Inspired Design**: Black and white color scheme following Uber's design principles
- **Responsive Layout**: Works on desktop and mobile devices
- **Game Features**:
  - 9x9 Sudoku grid with visual cell highlighting
  - Number pad for easy input (1-9)
  - Pencil mode for making notes
  - Hint system
  - Undo functionality
  - Eraser tool
  - Fast Pencil mode
  - Timer and mistake counter
  - Star rating system

- **Settings Panel**:
  - Dark mode toggle
  - Game over on mistakes configuration
  - Visual highlights customization
  - Fill numbers preferences
  - Sound controls
  - Hint reminders

- **Navigation**:
  - Blog section
  - How to Play guide
  - Settings panel
  - Android app download link

## Tech Stack

- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS 4** for styling
- **@freelancing/ui** - Custom Material Design 3 component library
- **Lucide React** for icons

## Project Structure

```
workspaces/sudoku/
├── src/
│   ├── app/
│   │   └── App.tsx              # Main application component
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx       # Top navigation with menu
│   │   │   └── Footer.tsx       # Footer with Android app link
│   │   └── shared/
│   │       └── SettingsPanel.tsx # Settings configuration panel
│   ├── pages/
│   │   └── game/
│   │       ├── index.tsx        # Main game page
│   │       └── components/
│   │           ├── SudokuGrid.tsx  # 9x9 Sudoku grid
│   │           └── NumberPad.tsx   # Number input pad
│   ├── styles/
│   │   ├── index.css            # Main style entry
│   │   ├── tailwind.css         # Tailwind configuration
│   │   ├── theme.css            # MD3 system tokens (Uber theme)
│   │   └── theme-ref-palette.css # Tonal palette (black/white)
│   └── main.tsx                 # Application entry point
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## Design System Compliance

This workspace follows the **FIGMA-MAKE-GUIDELINES.md** specifications:

1. ✅ Uses `@freelancing/ui` for all UI components
2. ✅ Follows the required style file chain:
   - `index.css` → `tailwind.css` + `theme.css`
   - `theme.css` → `theme-ref-palette.css`
3. ✅ Uses Tailwind CSS 4 with proper source configuration
4. ✅ Implements MD3 token-driven theming
5. ✅ Uber-inspired black and white color palette
6. ✅ No component duplication - all components from `@freelancing/ui`

## Development

From the monorepo root:

```bash
# Install dependencies
npm install

# Run development server
cd workspaces/sudoku
npm run dev
```

## Build

```bash
npm run build
```

## Theme Customization

The Uber-inspired theme uses a black and white palette defined in `src/styles/theme-ref-palette.css`. The theme can be customized by modifying the CSS custom properties in `src/styles/theme.css`.

### Key Theme Tokens

- **Primary**: Black (#000000) for main actions and text
- **Background**: White (#FFFFFF) for clean, minimal look
- **Surface**: Various shades of gray for depth
- **Error**: Red for mistakes
- **Success**: Green for correct numbers

## Android App

The native Android app is available at:
[Google Play Store](https://play.google.com/store/apps/details?id=com.sudokunative.release)

## Notes

- This is a UI-only implementation - game logic is not included
- All components use `@freelancing/ui` Material Design 3 components
- Follows monorepo best practices and workspace architecture
