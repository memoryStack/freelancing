import '@material/web/button/elevated-button.js';
import { Button, IconButton } from '../../../../ui';
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
            <h1>Icon Buttons: Enabled</h1>
            <IconButton variant="filled" icon={<PlusIcon />}>With Icon Filled</IconButton>
            <IconButton variant="outlined" icon={<PlusIcon />}>With Icon Outlined</IconButton>
            <IconButton variant="tonal" icon={<PlusIcon />}>With Icon Text</IconButton>
            <IconButton variant="standard" icon={<PlusIcon />}>With Icon Elevated</IconButton>
            <p>icons from material design: enabled</p>
            <md-icon-button>
                <md-icon>
                    <PlusIcon />
                </md-icon>
            </md-icon-button>
            <md-filled-icon-button>
                <md-icon><PlusIcon /></md-icon>
            </md-filled-icon-button>
            <md-filled-tonal-icon-button>
                <md-icon><PlusIcon /></md-icon>
            </md-filled-tonal-icon-button>
            <md-outlined-icon-button>
                <md-icon><PlusIcon /></md-icon>
            </md-outlined-icon-button>
            <p>icons from material design: disabled</p>
            <md-icon-button disabled>
                <md-icon>
                    <PlusIcon />
                </md-icon>
            </md-icon-button>
            <md-filled-icon-button disabled>
                <md-icon><PlusIcon /></md-icon>
            </md-filled-icon-button>
            <md-filled-tonal-icon-button disabled>
                <md-icon><PlusIcon /></md-icon>
            </md-filled-tonal-icon-button>
            <md-outlined-icon-button disabled>
                <md-icon><PlusIcon /></md-icon>
            </md-outlined-icon-button>
            <h1>Icon Buttons: Disabled</h1>
            <IconButton variant="filled" icon={<PlusIcon />} disabled>With Icon Filled</IconButton>
            <IconButton variant="outlined" icon={<PlusIcon />} disabled>With Icon Outlined</IconButton>
            <IconButton variant="tonal" icon={<PlusIcon />} disabled>With Icon Text</IconButton>
            <IconButton variant="standard" icon={<PlusIcon />} disabled>With Icon Elevated</IconButton>
        </div>
      </div>
    );
  }
  