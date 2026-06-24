import { Button, IconButton, Drawer } from '@freelancing/ui';
import { Home, Search, Bell, Mail, User, Menu } from 'lucide-react';
import { useState } from 'react';

const NAV_ITEMS = [
  { label: 'Home', icon: Home },
  { label: 'Explore', icon: Search },
  { label: 'Notifications', icon: Bell },
  { label: 'Messages', icon: Mail },
  { label: 'Profile', icon: User },
] as const;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 border-b border-[var(--md-sys-color-outline-variant)] bg-white/80 backdrop-blur-md">
      <div className="max-w-2xl mx-auto flex items-center justify-between px-4 py-3">
        <h1 className="text-xl font-bold text-[var(--md-sys-color-primary)]">𝕏</h1>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map(({ label, icon: Icon }) => (
            <IconButton
              key={label}
              variant="standard"
              icon={<Icon size={22} />}
              aria-label={label}
              className="text-[var(--md-sys-color-on-surface)]"
            />
          ))}
          <Button variant="filled" size="small" className="ml-2 rounded-full">
            Post
          </Button>
        </nav>

        <div className="md:hidden">
          <IconButton
            variant="standard"
            icon={<Menu size={24} />}
            aria-label="Menu"
            onClick={() => setIsMenuOpen(true)}
          />
        </div>
      </div>

      <Drawer
        variant="SIDE"
        open={isMenuOpen}
        onOpenChange={setIsMenuOpen}
        title="Menu"
        showCloseButton
      >
        <div className="flex flex-col gap-1 p-4">
          {NAV_ITEMS.map(({ label, icon: Icon }) => (
            <Button
              key={label}
              variant="text"
              leadingIcon={<Icon size={20} />}
              className="justify-start"
            >
              {label}
            </Button>
          ))}
          <Button variant="filled" className="mt-4 rounded-full">
            Post
          </Button>
        </div>
      </Drawer>
    </header>
  );
}
