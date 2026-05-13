import { Button, IconButton, Icon, Drawer, Text } from '@freelancing/ui';
import { Menu, Settings, BookOpen, Lightbulb } from 'lucide-react';
import { useState } from 'react';
import SettingsPanel from '../shared/SettingsPanel';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <header className="bg-black text-white py-3 px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold">Sudoku</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Button
            variant="text"
            className="text-white hover:bg-white/10"
            leadingIcon={<BookOpen size={18} />}
          >
            Blog
          </Button>
          <Button
            variant="text"
            className="text-white hover:bg-white/10"
            leadingIcon={<Lightbulb size={18} />}
          >
            How to Play
          </Button>
          <IconButton
            variant="standard"
            icon={<Settings size={20} />}
            className="text-white hover:bg-white/10"
            onClick={() => setIsSettingsOpen(true)}
          />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <IconButton
            variant="standard"
            icon={<Menu size={24} />}
            className="text-white"
            onClick={() => setIsMenuOpen(true)}
          />
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <Drawer
        variant="side"
        open={isMenuOpen}
        onOpenChange={setIsMenuOpen}
        title="Menu"
        showCloseButton
      >
        <div className="flex flex-col gap-2 p-4">
          <Button
            variant="text"
            leadingIcon={<BookOpen size={18} />}
            className="justify-start"
          >
            Blog
          </Button>
          <Button
            variant="text"
            leadingIcon={<Lightbulb size={18} />}
            className="justify-start"
          >
            How to Play
          </Button>
          <Button
            variant="text"
            leadingIcon={<Settings size={18} />}
            className="justify-start"
            onClick={() => {
              setIsMenuOpen(false);
              setIsSettingsOpen(true);
            }}
          >
            Settings
          </Button>
        </div>
      </Drawer>

      {/* Settings Drawer */}
      <Drawer
        variant="side"
        open={isSettingsOpen}
        onOpenChange={setIsSettingsOpen}
        title="Settings"
        showCloseButton
      >
        <SettingsPanel />
      </Drawer>
    </header>
  );
}
