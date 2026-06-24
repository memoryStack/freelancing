import { Button, IconButton, Drawer } from '@freelancing/ui';
import { Home, Search, Bell, Mail, User, Menu, LogOut } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../../auth/AuthContext';
import { UserAvatar, UserIdentity } from '../shared/UserIdentity';

const NAV_ITEMS = [
  { label: 'Home', icon: Home },
  { label: 'Explore', icon: Search },
  { label: 'Notifications', icon: Bell },
  { label: 'Messages', icon: Mail },
  { label: 'Profile', icon: User },
] as const;

export default function Header() {
  const { logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 border-b border-[var(--md-sys-color-outline-variant)] bg-white/80 backdrop-blur-md">
      <div className="max-w-2xl mx-auto flex items-center justify-between gap-3 px-4 py-3">
        <h1 className="text-xl font-bold text-[var(--md-sys-color-primary)] shrink-0">𝕏</h1>

        <nav className="hidden md:flex items-center gap-1 min-w-0">
          {NAV_ITEMS.map(({ label, icon: Icon }) => (
            <IconButton
              key={label}
              variant="standard"
              icon={<Icon size={22} />}
              aria-label={label}
              className="text-[var(--md-sys-color-on-surface)]"
            />
          ))}
          <Button variant="filled" size="small" className="ml-1 rounded-full shrink-0">
            Post
          </Button>

          <div className="ml-2 flex min-w-0 items-center gap-2 border-l border-[var(--md-sys-color-outline-variant)] pl-3">
            <UserAvatar size="sm" />
            <UserIdentity layout="compact" className="max-w-[10rem] lg:max-w-[12rem]" />
            <IconButton
              variant="standard"
              icon={<LogOut size={20} />}
              aria-label="Log out"
              className="shrink-0 text-[var(--md-sys-color-on-surface-variant)]"
              onClick={logout}
            />
          </div>
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
          <div className="mb-4 flex items-center gap-3 px-2">
            <UserAvatar />
            <UserIdentity />
          </div>

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
          <Button
            variant="text"
            leadingIcon={<LogOut size={20} />}
            className="mt-2 justify-start text-[var(--md-sys-color-error)]"
            onClick={() => {
              setIsMenuOpen(false);
              logout();
            }}
          >
            Log out
          </Button>
        </div>
      </Drawer>
    </header>
  );
}
