import '@material/web/button/elevated-button.js';
import { Button, IconButton, ICON_BUTTON_VARIANTS } from '../../../../ui';
import { HeartIcon, PlusIcon, Settings } from 'lucide-react';
import './custom-css.scss';

export function DesignSystem() {
    
    return (
      <div className="min-h-screen bg-white p-40 ">
        
        <h1>Design System</h1>
        <div className="flex flex-col gap-4">
            <a href="/icon-buttons" className="inline-block text-blue-600 underline">
            View all Icon Button variants
            </a>

            <a href="/dividers" className="inline-block text-blue-600 underline">
            View all Divider variants
            </a>
        <a href="/drawers" className="inline-block text-blue-600 underline">
          View all Drawer variants
        </a>

            <a href="/cards" className="inline-block text-blue-600 underline">
            View all Card variants
            </a>
            <a href="/tooltips" className="inline-block text-blue-600 underline">
            View all Tooltip variants
            </a>
            <a href="/text" className="inline-block text-blue-600 underline">
            View all Text variants
            </a>
            <a href="/snackbars" className="inline-block text-blue-600 underline">
            View all Snackbar variants
            </a>
            <a href="/dialogs" className="inline-block text-blue-600 underline">
            View all Dialog variants
            </a>
            <a href="/switches" className="inline-block text-blue-600 underline">
            View all Switch variants
            </a>
            <a href="/checkboxes" className="inline-block text-blue-600 underline">
            View all Checkbox variants
            </a>
            <a href="/radios" className="inline-block text-blue-600 underline">
            View all Radio variants
            </a>
            <a href="/loaders" className="inline-block text-blue-600 underline">
            View all Loader examples
            </a>
            <a href="/menus" className="inline-block text-blue-600 underline">
            View all Menu examples
            </a>
            <a href="/context-menus" className="inline-block text-blue-600 underline">
            View all Context Menu examples
            </a>
            <a href="/fields" className="inline-block text-blue-600 underline">
            View all Field examples
            </a>
            <a href="/textareas" className="inline-block text-blue-600 underline">
            View all TextArea examples
            </a>
            <a href="/selects" className="inline-block text-blue-600 underline">
            View all Select examples
            </a>
        </div>

        <div className="flex flex-col gap-4">
            <h1>Text Buttons: Enabled</h1>
            <Button variant="filled">Filled</Button>
            <Button variant="outlined">Outlined</Button>
            <Button variant="text">Text</Button>
            <Button variant="elevated">Elevated</Button>
            <Button variant="filled-tonal">Filled Tonal</Button>
            <h1>Text Buttons: Disabled</h1>
            <Button variant="filled" disabled>Filled</Button>
            <Button variant="outlined" disabled>Outlined</Button>
            <Button variant="text" disabled>Text</Button>
            <Button variant="elevated" disabled>Elevated</Button>
            <Button variant="filled-tonal" disabled>Filled Tonal</Button>
            <h1>Buttons with Icons</h1>
            <Button variant="filled" leadingIcon={<PlusIcon />}>With Icon Filled</Button>
            <Button variant="outlined" leadingIcon={<PlusIcon />}>With Icon Outlined</Button>
            <Button variant="text" leadingIcon={<PlusIcon />}>With Icon Text</Button>
            <Button variant="elevated" leadingIcon={<PlusIcon />}>With Icon Elevated</Button>
            <Button variant="filled-tonal" leadingIcon={<PlusIcon />}>With Icon Filled Tonal</Button>
            <h1>Buttons with Icons: Disabled</h1>
            <Button variant="filled" leadingIcon={<PlusIcon />} disabled>With Icon Filled</Button>
            <Button variant="outlined" leadingIcon={<PlusIcon />} disabled>With Icon Outlined</Button>
            <Button variant="text" leadingIcon={<PlusIcon />} disabled>With Icon Text</Button>
            <Button variant="elevated" leadingIcon={<PlusIcon />} disabled>With Icon Elevated</Button>
            <Button variant="filled-tonal" leadingIcon={<PlusIcon />} disabled>With Icon Filled Tonal</Button>
            <h1>Buttons: Loading</h1>
            <Button variant="filled" loading>Filled</Button>
            <Button variant="outlined" loading>Outlined</Button>
            <Button variant="text" loading>Text</Button>
            <Button variant="elevated" loading>Elevated</Button>
            <Button variant="filled-tonal" loading>Filled Tonal</Button>
            <h1>My Icon Buttons: Enabled</h1>
            <IconButton variant={ICON_BUTTON_VARIANTS.FILLED} icon={<HeartIcon />}>With Icon Filled</IconButton>
            <IconButton className="icon-button-custom-css" variant={ICON_BUTTON_VARIANTS.FILLED} icon={<Settings />}>With Icon Filled</IconButton>
            <IconButton variant={ICON_BUTTON_VARIANTS.OUTLINED} icon={<HeartIcon />}>With Icon Outlined</IconButton>
            <IconButton variant={ICON_BUTTON_VARIANTS.TONAL} icon={<HeartIcon />}>With Icon Text</IconButton>
            <IconButton variant={ICON_BUTTON_VARIANTS.STANDARD} icon={<HeartIcon />}>With Icon Elevated</IconButton>

            <p>icons from material design: enabled</p>
                <md-icon-button><md-icon><HeartIcon /></md-icon></md-icon-button>
                <md-filled-icon-button><md-icon><HeartIcon /></md-icon></md-filled-icon-button>
                <md-filled-tonal-icon-button><md-icon><HeartIcon /></md-icon></md-filled-tonal-icon-button>
                <md-outlined-icon-button><md-icon><HeartIcon /></md-icon></md-outlined-icon-button>
            <p>icons from material design: disabled</p>
                <md-icon-button disabled><md-icon><HeartIcon /></md-icon></md-icon-button>
                <md-filled-icon-button disabled><md-icon><HeartIcon /></md-icon></md-filled-icon-button>
                <md-filled-tonal-icon-button disabled><md-icon><HeartIcon /></md-icon></md-filled-tonal-icon-button>
                <md-outlined-icon-button disabled><md-icon><HeartIcon /></md-icon></md-outlined-icon-button>
            <h1>My Icon Buttons: Disabled</h1>
            <IconButton variant={ICON_BUTTON_VARIANTS.FILLED} icon={<HeartIcon />} disabled>With Icon Filled</IconButton>
            <IconButton variant={ICON_BUTTON_VARIANTS.OUTLINED} icon={<HeartIcon />} disabled>With Icon Outlined</IconButton>
            <IconButton variant={ICON_BUTTON_VARIANTS.TONAL} icon={<HeartIcon />} disabled>With Icon Text</IconButton>
            <IconButton variant={ICON_BUTTON_VARIANTS.STANDARD} icon={<HeartIcon />} disabled>With Icon Elevated</IconButton>

            <p>icons from material design: Selected</p>
                <md-icon-button toggle><md-icon><HeartIcon /></md-icon></md-icon-button>
                <md-icon-button toggle><md-icon><HeartIcon /></md-icon></md-icon-button>
                <md-filled-icon-button toggle><md-icon><HeartIcon /></md-icon></md-filled-icon-button>
                <md-filled-tonal-icon-button toggle><md-icon><HeartIcon /></md-icon></md-filled-tonal-icon-button>
                <md-outlined-icon-button toggle><md-icon><HeartIcon /></md-icon></md-outlined-icon-button>
                <md-outlined-icon-button toggle><md-icon><Settings /></md-icon></md-outlined-icon-button>

        </div>
      </div>
    );
  }
  