import '@material/web/button/elevated-button.js';
import { Button } from '../../../../ui';
import { Icon, PlusIcon } from 'lucide-react';

export function DesignSystem() {
    
    return (
      <div className="min-h-screen bg-white p-40 ">
        
        <h1>Design System</h1>

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
        </div>
      </div>
    );
  }
  