# Figma Make Project Delivery Guidelines

This document is the source of truth for generating new projects in this monorepo using Figma Make.

## 1) Monorepo Contract (Non-Negotiable)

- Root layout:
  - `packages/` -> shared reusable packages across all projects
  - `workspaces/` -> independent app projects
- Existing shared UI package: `packages/ui`
- Existing workspace app: `workspaces/design-system`

Figma Make must preserve this architecture.

## 2) How to Create a New Project Workspace

Create every new app under `workspaces/<project-name>`.

Use `workspaces/design-system` as the exact template for project tooling:
- `package.json` (Vite + React + Tailwind plugin + Sass)
- `vite.config.ts`
- `tsconfig.json`
- `index.html`
- `src/main.tsx`
- `src/styles/index.css`
- `src/styles/tailwind.css`
- `src/styles/theme.css`
- `src/styles/theme-ref-palette.css`

### Required dependency rule

- Use `@freelancing/ui` for reusable UI components.
- Do not duplicate shared component logic inside each workspace.
- If a dependency is only needed by shared UI components, it belongs in `packages/ui`.
- If it is app-specific, keep it in that workspace package.

## 3) Style System Contract

### 3.1 Core principle

The UI package is token-driven, not hardcoded-theme driven.  
It can implement MD3-like themes, but is not limited to MD3.

### 3.2 Required style file chain in each workspace

`src/styles/index.css` must import:
- `./tailwind.css`
- `./theme.css`

`src/styles/theme.css` must import:
- `./theme-ref-palette.css`

Do not create `testThemes/*` in new workspaces.

### 3.3 Token override policy

- Theme-level overrides go in `:root {}` in `src/styles/theme.css`.
- Component styling in `packages/ui/src/ui/*/*.scss` must read CSS custom properties (tokens).
- Override behavior through tokens first.
- If a needed token does not exist:
  1. Add a new tokenized `var(--token-name, fallback)` hook in the component SCSS.
  2. Add default mapping/value in workspace `theme.css`.
  3. Keep naming consistent (`--md-*` or `--ui-*` for public tokens; `--_` for private internal tokens).

## 4) MD3 Color Guidelines for Figma Make

When generating themes, follow MD3 role-based color mapping:

- `primary`: key brand/action color
- `secondary`: supporting accent color
- `tertiary`: complementary accent for differentiation
- `error`: destructive/error feedback
- `neutral`: backgrounds/surfaces/text scaffolding
- `neutral-variant`: outlines, dividers, lower-emphasis surfaces
- `success`: not a native MD3 core role; define custom success role tokens (`--md-sys-color-success`, etc.) for product feedback states

### Tonal palette generation workflow

Use Material Theme Builder: [Material Theme Builder](https://material-foundation.github.io/material-theme-builder/)

1. Input seed colors (at least primary, secondary, tertiary, neutral, neutral-variant, error).
2. Generate/export tonal palette values (0..100 scale roles).
3. Copy palette variables into `src/styles/theme-ref-palette.css` (workspace-local).
4. Map palette tokens to system tokens in `src/styles/theme.css`:
   - e.g. `--md-sys-color-primary: var(--md-ref-palette-primary40);`
5. Keep mappings for both readable text contrast and state-layer usage.

## 5) Tailwind Contract

Each workspace must keep the same Tailwind setup as `design-system`:

`src/styles/tailwind.css`
- `@import 'tailwindcss' source(none);`
- `@source '../**/*.{js,ts,jsx,tsx}';`
- `@import 'tw-animate-css';`

Rules:
- Keep `@source` aligned with workspace `src` structure.
- Do not remove Tailwind plugin from Vite config when project uses this setup.
- Use Tailwind for layout/composition utilities; use tokenized SCSS for component primitives.

## 6) UI Package Consumption Rules

Import all shared components from:
- `@freelancing/ui`

Reference implementation pages:
- `workspaces/design-system/src/pages/*`
- `workspaces/design-system/src/pages/home/components/DesignSystem/index.tsx`

These pages are the behavior baseline for all variants and states.

## 7) Component Usage Guide (Props, Behavior, Customization)

Note: `className` + dedicated `*ClassName` props are the first-level customization hooks.  
Second-level customization is via CSS tokens in workspace `theme.css`.

### 7.1 Button
- What: Primary action trigger (supports link behavior).
- Key props: `variant`, `size`, `leadingIcon`, `trailingIcon`, `loading`, `disabled`, `href`, `target`, `rel`.
- Behavior:
  - `loading` replaces label with spinner and sets busy semantics.
  - `href` renders anchor behavior.
- Override:
  - Token overrides in theme (`--md-filled-button-*`, `--md-outlined-button-*`, etc.).
  - Add `className` for local scope tweaks.

### 7.2 IconButton
- What: Compact icon-only action, including toggle states.
- Key props: `variant`, `size`, `widthVariant`, `icon`, `selected`, `isToggle`, `nonInteractive`, `disabled`.
- Behavior:
  - Toggle visual states via `isToggle + selected`.
- Override:
  - Icon button token set (`--md-*-icon-button-*`) in theme.

### 7.3 Icon
- What: Visual icon container with shape, size, scheme variants.
- Key props: `variant`, `colorScheme`, `size`, `shape`, `iconSize`, `containerSize`.
- Behavior:
  - Supports explicit icon/container dimensions.
- Override:
  - Icon tokens + class-based styling.

### 7.4 Card
- What: Surface container for grouped content.
- Key props: `variant`, `disabled`, `nonInteractive`, `stateLayer`, `shadow`.
- Behavior:
  - Variant controls filled/elevated/outlined treatment.
- Override:
  - Card tokens (`--md-*-card-*`).

### 7.5 Divider
- What: Horizontal/vertical separators.
- Key props: `orientation`, `thickness`, `length`, `color`, `strength`.
- Behavior:
  - Inline style variables can override thickness/length/color per instance.
- Override:
  - `--ui-divider-*`, `--md-divider-*`.

### 7.6 Drawer
- What: Side or bottom sheet container with optional header/actions.
- Key props: `variant`, `sideSize`, `trigger`, `title`, `actions`, `showBackButton`, `showCloseButton`, `showDivider`, `showActions`, `open/defaultOpen`, `onOpenChange`, `onClose`.
- Behavior:
  - Controlled/uncontrolled open patterns.
  - Side vs bottom interaction differences.
- Override:
  - Drawer tokens (`--md-side-drawer-*`, `--md-bottom-drawer-*`, scrim/shape/elevation).

### 7.7 Tooltip
- What: Context help (plain/rich), auto chooses tooltip/popover behavior by device unless overridden.
- Key props: `trigger`, `variant`, `behavior`, `content`, `subhead`, `action`, `showArrow`, `side`, `open/defaultOpen`, `onOpenChange`.
- Behavior:
  - `behavior="auto"` picks hover tooltip on pointer devices, popover fallback on touch.
- Override:
  - Tooltip tokens (`--md-plain-tooltip-*`, `--md-rich-tooltip-*`).

### 7.8 Popover
- What: Popover variant wrapper over Tooltip behavior.
- Key props: same as Tooltip except `behavior` is fixed to popover.
- Override:
  - Same token family as Tooltip.

### 7.9 Text
- What: Typography abstraction for MD-like type scale.
- Key props: `variant`, `colorVariant`, `inline`, `as`.
- Behavior:
  - Auto semantic heading mapping for headline variants if `as` not provided.
- Override:
  - Typography/system tokens in `theme.css`.

### 7.10 Snackbar
- What: Toast notification system with optional action/close button.
- API: `SnackbarProvider`, `useSnackbar()`.
- `showSnackbar` options: `title`, `description`, `timeout`, `onClose`, `onRemove`, `actionProps`, `data.showCloseIcon`, `data.closeOnActionClick`.
- Override:
  - Snackbar tokens (`--md-snackbar-*`).

### 7.11 Dialog
- What: Modal decision/confirmation dialog.
- Key props: `trigger`, `icon`, `title`, `description`, `showDivider`, `cancelLabel`, `onCancel`, `primaryAction`, `open/defaultOpen`, `onOpenChange`.
- Behavior:
  - Controlled/uncontrolled open management.
- Override:
  - Dialog tokens (`--md-dialog-*`).

### 7.12 Switch
- What: Binary toggle control.
- Key props: `checked/defaultChecked`, `disabled`, `readOnly`, `required`, `name/value`, `uncheckedValue`, `onCheckedChange`, `label`.
- Override:
  - Switch tokens (`--md-switch-*`).

### 7.13 Checkbox
- What: Multi-select/boolean selection control.
- Key props: `checked/defaultChecked`, `disabled`, `readOnly`, `required`, `indeterminate`, `name/value`, `uncheckedValue`, `parent`, `error`, `onCheckedChange`, `label`.
- Override:
  - Checkbox tokens (`--md-checkbox-*`).

### 7.14 CheckboxGroup
- What: Shared-value container for multiple checkboxes.
- Key props: Base group props + `label`, `description`, `error`, `required`, className hooks.
- Override:
  - Group wrapper styles + child checkbox tokens.

### 7.15 RadioGroup / RadioItem
- What: Single-select option set.
- Group key props: `value/defaultValue`, `onValueChange`, `required`, `disabled`, `readOnly`, `label`, `description`, `error`.
- Item key props: `value`, `label`, `disabled`, `readOnly`, `required`, `nativeButton`.
- Override:
  - Radio tokens (`--md-radio-*`).

### 7.16 Loader
- What: Spinner/loading indicator.
- Key props: `color`, `className`, `style`.
- Override:
  - Via `color` or theme token mapping.

### 7.17 Menu
- What: Triggered action list menu.
- Key props: `trigger`, `items`, `open/defaultOpen`, `onOpenChange`, `openOnHover`, delays, `showBackdrop`, `showDividers`, `modal`.
- Item structure: `id`, `label`, `leadingIcon`, `trailingIcon`, `trailingText`, `selected`, `active`, `disabled`, `onSelect`.
- Override:
  - List shared tokens and menu/container class hooks.

### 7.18 ContextMenu
- What: Right-click/long-press menu.
- Key props: `trigger`, `items`, `open/defaultOpen`, `onOpenChange`, `showBackdrop`.
- Override:
  - Same shared list token family as Menu.

### 7.19 Field
- What: Text-like input field with label/help/error and optional icons.
- Key props: `type`, `value/defaultValue`, `onValueChange`, `invalid`, `required`, `readOnly`, `leadingIcon`, `trailingIcon`, `clearOnTrailingIconClick`, `onTrailingIconClick`, `label`, `description`, `error`.
- Behavior:
  - Supports controlled/uncontrolled value flow.
  - Optional custom `children` to replace default control.
- Override:
  - Field tokens/classes in `field.scss` plus typography/system tokens.

### 7.20 TextArea
- What: Multiline text entry control.
- Key props: `rows`, `value/defaultValue`, `onValueChange`, `invalid`, `readOnly`, `required`, `label`, `description`, `error`.
- Behavior:
  - Controlled/uncontrolled value support.
- Override:
  - TextArea tokens/classes in `textarea.scss`.

### 7.21 Select
- What: Single-select dropdown from structured item list.
- Key props: `items`, `value/defaultValue`, `onValueChange`, `placeholder`, `invalid`, `disabled`, `readOnly`, `required`, `label`, `description`, `error`, className hooks.
- Behavior:
  - Item supports icons, trailing text/icon, disabled states.
- Override:
  - Select tokens + shared list popup/item tokens.

### 7.22 Combobox
- What: Filterable select/input hybrid.
- Key props: `items`, `value/defaultValue`, `onValueChange`, `inputValue`, `onInputValueChange`, `placeholder`, `invalid`, `disabled`, `readOnly`, `required`, className hooks.
- Behavior:
  - Supports controlled/uncontrolled selected value and input text independently.
- Override:
  - Combobox tokens + shared list popup/item tokens.

## 8) Component Token Inventory Reference

For token names used by component SCSS, use:
- `workspaces/design-system/src/styles/component-customization-tokens.md`

Note: this report contains token names that remain useful for overrides.  
If file paths in that report differ from current monorepo layout, treat token names as authoritative and paths as historical.

## 9) Rules for Customization Requests

When Figma Make gets a design request:

1. Implement using existing `@freelancing/ui` components first.
2. Configure visual style via workspace tokens in `theme.css`.
3. Use per-instance className props only for local/feature-level overrides.
4. If design cannot be achieved:
   - Extend the shared component in `packages/ui` (not workspace-local duplicate).
   - Introduce new reusable token hooks.
   - Keep API backward-compatible when possible.

## 10) Quality Gates Before Completion

For every generated workspace project:
- Must compile with root `npm run build` (or workspace-specific build).
- Must import `src/styles/index.css` from app entry.
- Must consume `@freelancing/ui` rather than copying shared components.
- Must keep theme token overrides centralized in workspace `theme.css`.
- Must avoid ad hoc style drift that bypasses tokens unless explicitly required.

