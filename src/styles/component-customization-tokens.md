# Component Customization Tokens Report

Tokens in `src/ui` that are used via `var(...)` and are:
- not defined in `src/styles/theme.css`
- not ref/system tokens (`--md-ref-*`, `--md-sys-*`)
- not local component private tokens (`--_*`)

## button

Files:
- `src/ui/button/button.scss`

Tokens:
- `--md-elevated-button-container-color`
- `--md-elevated-button-disabled-container-color`
- `--md-elevated-button-disabled-container-opacity`
- `--md-elevated-button-disabled-icon-color`
- `--md-elevated-button-disabled-icon-opacity`
- `--md-elevated-button-disabled-label-text-color`
- `--md-elevated-button-disabled-label-text-opacity`
- `--md-elevated-button-focus-icon-color`
- `--md-elevated-button-focus-label-text-color`
- `--md-elevated-button-hover-icon-color`
- `--md-elevated-button-hover-label-text-color`
- `--md-elevated-button-hover-state-layer-color`
- `--md-elevated-button-icon-color`
- `--md-elevated-button-label-text-color`
- `--md-elevated-button-pressed-icon-color`
- `--md-elevated-button-pressed-label-text-color`
- `--md-elevated-button-pressed-state-layer-color`
- `--md-filled-button-container-color`
- `--md-filled-button-disabled-container-color`
- `--md-filled-button-disabled-container-opacity`
- `--md-filled-button-disabled-icon-color`
- `--md-filled-button-disabled-icon-opacity`
- `--md-filled-button-disabled-label-text-color`
- `--md-filled-button-disabled-label-text-opacity`
- `--md-filled-button-focus-icon-color`
- `--md-filled-button-focus-label-text-color`
- `--md-filled-button-hover-icon-color`
- `--md-filled-button-hover-label-text-color`
- `--md-filled-button-hover-state-layer-color`
- `--md-filled-button-hover-state-layer-opacity`
- `--md-filled-button-icon-color`
- `--md-filled-button-label-text-color`
- `--md-filled-button-pressed-icon-color`
- `--md-filled-button-pressed-label-text-color`
- `--md-filled-button-pressed-state-layer-color`
- `--md-filled-button-pressed-state-layer-opacity`
- `--md-filled-tonal-button-container-color`
- `--md-filled-tonal-button-disabled-container-color`
- `--md-filled-tonal-button-disabled-container-opacity`
- `--md-filled-tonal-button-disabled-icon-color`
- `--md-filled-tonal-button-disabled-icon-opacity`
- `--md-filled-tonal-button-disabled-label-text-color`
- `--md-filled-tonal-button-disabled-label-text-opacity`
- `--md-filled-tonal-button-focus-icon-color`
- `--md-filled-tonal-button-focus-label-text-color`
- `--md-filled-tonal-button-hover-icon-color`
- `--md-filled-tonal-button-hover-label-text-color`
- `--md-filled-tonal-button-hover-state-layer-color`
- `--md-filled-tonal-button-icon-color`
- `--md-filled-tonal-button-label-text-color`
- `--md-filled-tonal-button-pressed-icon-color`
- `--md-filled-tonal-button-pressed-label-text-color`
- `--md-filled-tonal-button-pressed-state-layer-color`
- `--md-outlined-button-disabled-icon-color`
- `--md-outlined-button-disabled-icon-opacity`
- `--md-outlined-button-disabled-label-text-color`
- `--md-outlined-button-disabled-label-text-opacity`
- `--md-outlined-button-disabled-outline-color`
- `--md-outlined-button-disabled-outline-opacity`
- `--md-outlined-button-focus-icon-color`
- `--md-outlined-button-focus-label-text-color`
- `--md-outlined-button-hover-icon-color`
- `--md-outlined-button-hover-label-text-color`
- `--md-outlined-button-hover-state-layer-color`
- `--md-outlined-button-icon-color`
- `--md-outlined-button-label-text-color`
- `--md-outlined-button-outline-color`
- `--md-outlined-button-pressed-icon-color`
- `--md-outlined-button-pressed-label-text-color`
- `--md-outlined-button-pressed-outline-color`
- `--md-outlined-button-pressed-state-layer-color`
- `--md-text-button-disabled-icon-color`
- `--md-text-button-disabled-icon-opacity`
- `--md-text-button-disabled-label-text-color`
- `--md-text-button-disabled-label-text-opacity`
- `--md-text-button-focus-icon-color`
- `--md-text-button-focus-label-text-color`
- `--md-text-button-hover-icon-color`
- `--md-text-button-hover-label-text-color`
- `--md-text-button-hover-state-layer-color`
- `--md-text-button-icon-color`
- `--md-text-button-label-text-color`
- `--md-text-button-pressed-icon-color`
- `--md-text-button-pressed-label-text-color`
- `--md-text-button-pressed-state-layer-color`
- `--ui-button-disabled-icon-color`
- `--ui-button-disabled-text-color`
- `--ui-button-icon-color`
- `--ui-button-text-color`

## card

Files:
- `src/ui/card/card.scss`

Tokens:
- `--md-elevated-card-container-color`
- `--md-elevated-card-container-elevation`
- `--md-elevated-card-container-shadow-color`
- `--md-elevated-card-container-shape`
- `--md-elevated-card-disabled-container-elevation`
- `--md-elevated-card-focus-container-elevation`
- `--md-elevated-card-focus-indicator-color`
- `--md-elevated-card-focus-indicator-offset`
- `--md-elevated-card-focus-indicator-thickness`
- `--md-elevated-card-focus-state-layer-opacity`
- `--md-elevated-card-hover-container-elevation`
- `--md-elevated-card-pressed-container-elevation`
- `--md-filled-card-container-color`
- `--md-filled-card-container-elevation`
- `--md-filled-card-container-shadow-color`
- `--md-filled-card-container-shape`
- `--md-filled-card-disabled-container-color`
- `--md-filled-card-disabled-container-elevation`
- `--md-filled-card-disabled-container-opacity`
- `--md-filled-card-focus-container-elevation`
- `--md-filled-card-focus-indicator-color`
- `--md-filled-card-focus-indicator-offset`
- `--md-filled-card-focus-indicator-thickness`
- `--md-filled-card-focus-state-layer-opacity`
- `--md-filled-card-hover-container-elevation`
- `--md-filled-card-pressed-container-elevation`
- `--md-outlined-card-container-color`
- `--md-outlined-card-container-elevation`
- `--md-outlined-card-container-shadow-color`
- `--md-outlined-card-container-shape`
- `--md-outlined-card-disabled-outline-color`
- `--md-outlined-card-disabled-outline-opacity`
- `--md-outlined-card-focus-container-elevation`
- `--md-outlined-card-focus-indicator-color`
- `--md-outlined-card-focus-indicator-offset`
- `--md-outlined-card-focus-indicator-thickness`
- `--md-outlined-card-focus-outline-color`
- `--md-outlined-card-focus-state-layer-opacity`
- `--md-outlined-card-hover-container-elevation`
- `--md-outlined-card-hover-outline-color`
- `--md-outlined-card-outline-color`
- `--md-outlined-card-outline-width`
- `--md-outlined-card-pressed-container-elevation`
- `--md-outlined-card-pressed-outline-color`

## checkbox

Files:
- `src/ui/checkbox/checkbox.scss`

Tokens:
- `--md-checkbox-container-shape`
- `--md-checkbox-container-size`
- `--md-checkbox-error-focus-state-layer-color`
- `--md-checkbox-error-focus-state-layer-opacity`
- `--md-checkbox-error-hover-state-layer-color`
- `--md-checkbox-error-hover-state-layer-opacity`
- `--md-checkbox-error-pressed-state-layer-color`
- `--md-checkbox-error-pressed-state-layer-opacity`
- `--md-checkbox-focus-indicator-color`
- `--md-checkbox-focus-indicator-offset`
- `--md-checkbox-focus-indicator-thickness`
- `--md-checkbox-icon-size`
- `--md-checkbox-selected-container-color`
- `--md-checkbox-selected-disabled-container-color`
- `--md-checkbox-selected-disabled-container-opacity`
- `--md-checkbox-selected-disabled-icon-color`
- `--md-checkbox-selected-disabled-outline-width`
- `--md-checkbox-selected-error-container-color`
- `--md-checkbox-selected-error-focus-container-color`
- `--md-checkbox-selected-error-focus-icon-color`
- `--md-checkbox-selected-error-hover-container-color`
- `--md-checkbox-selected-error-hover-icon-color`
- `--md-checkbox-selected-error-icon-color`
- `--md-checkbox-selected-error-pressed-container-color`
- `--md-checkbox-selected-error-pressed-icon-color`
- `--md-checkbox-selected-focus-container-color`
- `--md-checkbox-selected-focus-icon-color`
- `--md-checkbox-selected-focus-state-layer-color`
- `--md-checkbox-selected-focus-state-layer-opacity`
- `--md-checkbox-selected-hover-container-color`
- `--md-checkbox-selected-hover-icon-color`
- `--md-checkbox-selected-hover-state-layer-color`
- `--md-checkbox-selected-hover-state-layer-opacity`
- `--md-checkbox-selected-icon-color`
- `--md-checkbox-selected-outline-width`
- `--md-checkbox-selected-pressed-container-color`
- `--md-checkbox-selected-pressed-icon-color`
- `--md-checkbox-selected-pressed-state-layer-color`
- `--md-checkbox-selected-pressed-state-layer-opacity`
- `--md-checkbox-state-layer-shape`
- `--md-checkbox-state-layer-size`
- `--md-checkbox-target-size`
- `--md-checkbox-unselected-disabled-container-opacity`
- `--md-checkbox-unselected-disabled-outline-color`
- `--md-checkbox-unselected-disabled-outline-width`
- `--md-checkbox-unselected-error-focus-outline-color`
- `--md-checkbox-unselected-error-hover-outline-color`
- `--md-checkbox-unselected-error-outline-color`
- `--md-checkbox-unselected-error-pressed-outline-color`
- `--md-checkbox-unselected-focus-outline-color`
- `--md-checkbox-unselected-focus-state-layer-color`
- `--md-checkbox-unselected-focus-state-layer-opacity`
- `--md-checkbox-unselected-hover-outline-color`
- `--md-checkbox-unselected-hover-state-layer-color`
- `--md-checkbox-unselected-hover-state-layer-opacity`
- `--md-checkbox-unselected-icon-color`
- `--md-checkbox-unselected-outline-color`
- `--md-checkbox-unselected-outline-width`
- `--md-checkbox-unselected-pressed-outline-color`
- `--md-checkbox-unselected-pressed-state-layer-color`
- `--md-checkbox-unselected-pressed-state-layer-opacity`

## dialog

Files:
- `src/ui/dialog/dialog.scss`

Tokens:
- `--md-dialog-actions-gap`
- `--md-dialog-container-color`
- `--md-dialog-container-elevation`
- `--md-dialog-container-max-width`
- `--md-dialog-container-min-width`
- `--md-dialog-container-padding`
- `--md-dialog-container-shadow-color`
- `--md-dialog-container-shape`
- `--md-dialog-description-actions-padding`
- `--md-dialog-icon-color`
- `--md-dialog-icon-size`
- `--md-dialog-icon-title-padding`
- `--md-dialog-scrim-color`
- `--md-dialog-scrim-opacity`
- `--md-dialog-title-description-padding`

## divider

Files:
- `src/ui/divider/divider.scss`

Tokens:
- `--md-divider-light-color`
- `--md-divider-strong-color`
- `--md-divider-thickness`
- `--ui-divider-color`
- `--ui-divider-length`
- `--ui-divider-thickness`

## drawer

Files:
- `src/ui/drawer/drawer.scss`

Tokens:
- `--drawer-snap-point-offset`
- `--drawer-swipe-movement-x`
- `--drawer-swipe-movement-y`
- `--md-bottom-drawer-container-color`
- `--md-bottom-drawer-container-elevation`
- `--md-bottom-drawer-container-shape`
- `--md-bottom-drawer-drag-handle-color`
- `--md-bottom-drawer-drag-handle-height`
- `--md-bottom-drawer-drag-handle-padding-block`
- `--md-bottom-drawer-drag-handle-width`
- `--md-bottom-drawer-minimized-container-shape`
- `--md-bottom-drawer-top-margin`
- `--md-drawer-icon-color`
- `--md-drawer-scrim-color`
- `--md-drawer-scrim-opacity`
- `--md-side-drawer-container-color`
- `--md-side-drawer-container-elevation`
- `--md-side-drawer-container-left-margin-desktop`
- `--md-side-drawer-container-left-margin-mobile`
- `--md-side-drawer-container-min-width`
- `--md-side-drawer-container-shadow-color`
- `--md-side-drawer-container-shape`
- `--md-side-drawer-full-container-max-width`
- `--md-side-drawer-headline-color`
- `--md-side-drawer-headline-line-height`
- `--md-side-drawer-headline-size`
- `--md-side-drawer-headline-weight`
- `--md-side-drawer-large-container-max-width`
- `--md-side-drawer-medium-container-max-width`
- `--md-side-drawer-small-container-max-width`

## icon-button

Files:
- `src/ui/icon-button/icon-button.scss`
- `src/ui/icon-button/icon-button2.scss`

Tokens:
- `--md-filled-icon-button-container-color`
- `--md-filled-icon-button-container-height`
- `--md-filled-icon-button-container-width`
- `--md-filled-icon-button-disabled-container-color`
- `--md-filled-icon-button-disabled-container-opacity`
- `--md-filled-icon-button-disabled-icon-color`
- `--md-filled-icon-button-disabled-icon-opacity`
- `--md-filled-icon-button-focus-icon-color`
- `--md-filled-icon-button-hover-icon-color`
- `--md-filled-icon-button-hover-state-layer-color`
- `--md-filled-icon-button-hover-state-layer-opacity`
- `--md-filled-icon-button-icon-color`
- `--md-filled-icon-button-icon-size`
- `--md-filled-icon-button-pressed-icon-color`
- `--md-filled-icon-button-pressed-state-layer-color`
- `--md-filled-icon-button-pressed-state-layer-opacity`
- `--md-filled-icon-button-selected-container-color`
- `--md-filled-icon-button-toggle-selected-focus-icon-color`
- `--md-filled-icon-button-toggle-selected-hover-icon-color`
- `--md-filled-icon-button-toggle-selected-hover-state-layer-color`
- `--md-filled-icon-button-toggle-selected-icon-color`
- `--md-filled-icon-button-toggle-selected-pressed-icon-color`
- `--md-filled-icon-button-toggle-selected-pressed-state-layer-color`
- `--md-filled-icon-button-unselected-container-color`
- `--md-filled-tonal-icon-button-container-color`
- `--md-filled-tonal-icon-button-disabled-container-color`
- `--md-filled-tonal-icon-button-disabled-container-opacity`
- `--md-filled-tonal-icon-button-disabled-icon-color`
- `--md-filled-tonal-icon-button-disabled-icon-opacity`
- `--md-filled-tonal-icon-button-focus-icon-color`
- `--md-filled-tonal-icon-button-hover-icon-color`
- `--md-filled-tonal-icon-button-hover-state-layer-color`
- `--md-filled-tonal-icon-button-hover-state-layer-opacity`
- `--md-filled-tonal-icon-button-icon-color`
- `--md-filled-tonal-icon-button-pressed-icon-color`
- `--md-filled-tonal-icon-button-pressed-state-layer-color`
- `--md-filled-tonal-icon-button-selected-container-color`
- `--md-filled-tonal-icon-button-toggle-selected-focus-icon-color`
- `--md-filled-tonal-icon-button-toggle-selected-hover-icon-color`
- `--md-filled-tonal-icon-button-toggle-selected-hover-state-layer-color`
- `--md-filled-tonal-icon-button-toggle-selected-icon-color`
- `--md-filled-tonal-icon-button-toggle-selected-pressed-icon-color`
- `--md-filled-tonal-icon-button-toggle-selected-pressed-state-layer-color`
- `--md-filled-tonal-icon-button-unselected-container-color`
- `--md-icon-button-disabled-icon-color`
- `--md-icon-button-disabled-icon-opacity`
- `--md-icon-button-focus-icon-color`
- `--md-icon-button-hover-icon-color`
- `--md-icon-button-hover-state-layer-color`
- `--md-icon-button-hover-state-layer-opacity`
- `--md-icon-button-icon-color`
- `--md-icon-button-large-container-outline-width`
- `--md-icon-button-large-default-container-height`
- `--md-icon-button-large-default-container-width`
- `--md-icon-button-large-icon-size`
- `--md-icon-button-large-narrow-container-height`
- `--md-icon-button-large-narrow-container-width`
- `--md-icon-button-large-pressed-container-shape`
- `--md-icon-button-large-wide-container-height`
- `--md-icon-button-large-wide-container-width`
- `--md-icon-button-medium-container-outline-width`
- `--md-icon-button-medium-default-container-height`
- `--md-icon-button-medium-default-container-width`
- `--md-icon-button-medium-icon-size`
- `--md-icon-button-medium-narrow-container-height`
- `--md-icon-button-medium-narrow-container-width`
- `--md-icon-button-medium-pressed-container-shape`
- `--md-icon-button-medium-wide-container-height`
- `--md-icon-button-medium-wide-container-width`
- `--md-icon-button-pressed-icon-color`
- `--md-icon-button-pressed-state-layer-color`
- `--md-icon-button-pressed-state-layer-opacity`
- `--md-icon-button-selected-focus-icon-color`
- `--md-icon-button-selected-hover-icon-color`
- `--md-icon-button-selected-hover-state-layer-color`
- `--md-icon-button-selected-hover-state-layer-opacity`
- `--md-icon-button-selected-icon-color`
- `--md-icon-button-selected-pressed-icon-color`
- `--md-icon-button-selected-pressed-state-layer-color`
- `--md-icon-button-selected-pressed-state-layer-opacity`
- `--md-icon-button-small-container-outline-width`
- `--md-icon-button-small-default-container-height`
- `--md-icon-button-small-default-container-width`
- `--md-icon-button-small-icon-size`
- `--md-icon-button-small-narrow-container-height`
- `--md-icon-button-small-narrow-container-width`
- `--md-icon-button-small-pressed-container-shape`
- `--md-icon-button-small-wide-container-height`
- `--md-icon-button-small-wide-container-width`
- `--md-icon-button-xlarge-container-outline-width`
- `--md-icon-button-xlarge-default-container-height`
- `--md-icon-button-xlarge-default-container-width`
- `--md-icon-button-xlarge-icon-size`
- `--md-icon-button-xlarge-narrow-container-height`
- `--md-icon-button-xlarge-narrow-container-width`
- `--md-icon-button-xlarge-pressed-container-shape`
- `--md-icon-button-xlarge-wide-container-height`
- `--md-icon-button-xlarge-wide-container-width`
- `--md-icon-button-xsmall-container-outline-width`
- `--md-icon-button-xsmall-default-container-height`
- `--md-icon-button-xsmall-default-container-width`
- `--md-icon-button-xsmall-icon-size`
- `--md-icon-button-xsmall-narrow-container-height`
- `--md-icon-button-xsmall-narrow-container-width`
- `--md-icon-button-xsmall-pressed-container-shape`
- `--md-icon-button-xsmall-wide-container-height`
- `--md-icon-button-xsmall-wide-container-width`
- `--md-outlined-icon-button-disabled-icon-color`
- `--md-outlined-icon-button-disabled-icon-opacity`
- `--md-outlined-icon-button-disabled-outline-color`
- `--md-outlined-icon-button-disabled-outline-opacity`
- `--md-outlined-icon-button-disabled-selected-container-color`
- `--md-outlined-icon-button-disabled-selected-container-opacity`
- `--md-outlined-icon-button-focus-icon-color`
- `--md-outlined-icon-button-hover-icon-color`
- `--md-outlined-icon-button-hover-state-layer-color`
- `--md-outlined-icon-button-hover-state-layer-opacity`
- `--md-outlined-icon-button-icon-color`
- `--md-outlined-icon-button-outline-color`
- `--md-outlined-icon-button-outline-width`
- `--md-outlined-icon-button-pressed-icon-color`
- `--md-outlined-icon-button-pressed-state-layer-color`
- `--md-outlined-icon-button-pressed-state-layer-opacity`
- `--md-outlined-icon-button-selected-container-color`
- `--md-outlined-icon-button-selected-focus-icon-color`
- `--md-outlined-icon-button-selected-hover-icon-color`
- `--md-outlined-icon-button-selected-hover-state-layer-color`
- `--md-outlined-icon-button-selected-icon-color`
- `--md-outlined-icon-button-selected-pressed-icon-color`
- `--md-outlined-icon-button-selected-pressed-state-layer-color`

## radio

Files:
- `src/ui/radio/radio.scss`

Tokens:
- `--md-radio-container-size`
- `--md-radio-disabled-icon-color`
- `--md-radio-disabled-icon-opacity`
- `--md-radio-disabled-selected-icon-color`
- `--md-radio-dot-size`
- `--md-radio-focus-indicator-color`
- `--md-radio-focus-indicator-offset`
- `--md-radio-focus-indicator-thickness`
- `--md-radio-icon-size`
- `--md-radio-ring-width`
- `--md-radio-selected-focus-icon-color`
- `--md-radio-selected-focus-state-layer-color`
- `--md-radio-selected-focus-state-layer-opacity`
- `--md-radio-selected-hover-icon-color`
- `--md-radio-selected-hover-state-layer-color`
- `--md-radio-selected-hover-state-layer-opacity`
- `--md-radio-selected-icon-color`
- `--md-radio-selected-pressed-icon-color`
- `--md-radio-selected-pressed-state-layer-color`
- `--md-radio-selected-pressed-state-layer-opacity`
- `--md-radio-state-layer-shape`
- `--md-radio-state-layer-size`
- `--md-radio-touch-target-min`
- `--md-radio-unselected-focus-icon-color`
- `--md-radio-unselected-focus-state-layer-color`
- `--md-radio-unselected-focus-state-layer-opacity`
- `--md-radio-unselected-hover-icon-color`
- `--md-radio-unselected-hover-state-layer-color`
- `--md-radio-unselected-hover-state-layer-opacity`
- `--md-radio-unselected-icon-color`
- `--md-radio-unselected-pressed-icon-color`
- `--md-radio-unselected-pressed-state-layer-color`
- `--md-radio-unselected-pressed-state-layer-opacity`

## snackbar

Files:
- `src/ui/snackbar/snackbar.scss`

Tokens:
- `--gap`
- `--height`
- `--md-snackbar-action-label-text-color`
- `--md-snackbar-container-color`
- `--md-snackbar-container-elevation`
- `--md-snackbar-container-shadow-color`
- `--md-snackbar-container-shape`
- `--md-snackbar-focus-state-layer-opacity`
- `--md-snackbar-hover-state-layer-color`
- `--md-snackbar-hover-state-layer-opacity`
- `--md-snackbar-icon-color`
- `--md-snackbar-icon-focus-state-layer-color`
- `--md-snackbar-icon-focus-state-layer-opacity`
- `--md-snackbar-icon-hover-state-layer-color`
- `--md-snackbar-icon-hover-state-layer-opacity`
- `--md-snackbar-single-line-container-height`
- `--offset-y`
- `--peek`
- `--scale`
- `--shrink`
- `--toast-frontmost-height`
- `--toast-height`
- `--toast-index`
- `--toast-offset-y`
- `--toast-swipe-movement-x`
- `--toast-swipe-movement-y`

## switch

Files:
- `src/ui/switch/switch.scss`

Tokens:
- `--md-switch-disabled-handle-elevation`
- `--md-switch-disabled-selected-handle-color`
- `--md-switch-disabled-selected-handle-opacity`
- `--md-switch-disabled-selected-icon-color`
- `--md-switch-disabled-selected-icon-opacity`
- `--md-switch-disabled-selected-track-color`
- `--md-switch-disabled-track-opacity`
- `--md-switch-disabled-unselected-handle-color`
- `--md-switch-disabled-unselected-handle-opacity`
- `--md-switch-disabled-unselected-icon-color`
- `--md-switch-disabled-unselected-icon-opacity`
- `--md-switch-disabled-unselected-track-color`
- `--md-switch-disabled-unselected-track-outline-color`
- `--md-switch-focus-indicator-color`
- `--md-switch-focus-indicator-offset`
- `--md-switch-focus-indicator-thickness`
- `--md-switch-handle-elevation`
- `--md-switch-handle-shadow-color`
- `--md-switch-handle-shape`
- `--md-switch-pressed-handle-width`
- `--md-switch-selected-focus-handle-color`
- `--md-switch-selected-focus-state-layer-color`
- `--md-switch-selected-focus-state-layer-opacity`
- `--md-switch-selected-handle-color`
- `--md-switch-selected-handle-width`
- `--md-switch-selected-hover-handle-color`
- `--md-switch-selected-hover-state-layer-color`
- `--md-switch-selected-hover-state-layer-opacity`
- `--md-switch-selected-icon-color`
- `--md-switch-selected-icon-size`
- `--md-switch-selected-pressed-handle-color`
- `--md-switch-selected-pressed-state-layer-color`
- `--md-switch-selected-pressed-state-layer-opacity`
- `--md-switch-selected-track-color`
- `--md-switch-state-layer-size`
- `--md-switch-track-height`
- `--md-switch-track-outline-color`
- `--md-switch-track-outline-width`
- `--md-switch-track-shape`
- `--md-switch-track-width`
- `--md-switch-unselected-focus-handle-color`
- `--md-switch-unselected-focus-state-layer-color`
- `--md-switch-unselected-focus-state-layer-opacity`
- `--md-switch-unselected-handle-color`
- `--md-switch-unselected-handle-width`
- `--md-switch-unselected-hover-handle-color`
- `--md-switch-unselected-hover-state-layer-color`
- `--md-switch-unselected-hover-state-layer-opacity`
- `--md-switch-unselected-icon-color`
- `--md-switch-unselected-icon-size`
- `--md-switch-unselected-pressed-handle-color`
- `--md-switch-unselected-pressed-state-layer-color`
- `--md-switch-unselected-pressed-state-layer-opacity`
- `--md-switch-unselected-track-color`

## tooltip

Files:
- `src/ui/tooltip/tooltip.scss`

Tokens:
- `--md-plain-tooltip-container-color`
- `--md-plain-tooltip-container-elevation`
- `--md-plain-tooltip-container-padding`
- `--md-plain-tooltip-container-shadow-color`
- `--md-plain-tooltip-container-shape`
- `--md-plain-tooltip-label-text-color`
- `--md-plain-tooltip-label-text-line-height`
- `--md-plain-tooltip-label-text-size`
- `--md-plain-tooltip-label-text-weight`
- `--md-rich-tooltip-container-color`
- `--md-rich-tooltip-container-elevation`
- `--md-rich-tooltip-container-padding-bottom`
- `--md-rich-tooltip-container-padding-inline`
- `--md-rich-tooltip-container-padding-top`
- `--md-rich-tooltip-container-shadow-color`
- `--md-rich-tooltip-container-shape`
- `--md-rich-tooltip-subhead-color`
- `--md-rich-tooltip-subhead-line-height`
- `--md-rich-tooltip-subhead-size`
- `--md-rich-tooltip-subhead-supporting-gap`
- `--md-rich-tooltip-subhead-weight`
- `--md-rich-tooltip-supporting-action-gap`
- `--md-rich-tooltip-supporting-text-color`
- `--md-rich-tooltip-supporting-text-line-height`
- `--md-rich-tooltip-supporting-text-size`
- `--md-rich-tooltip-supporting-text-weight`

