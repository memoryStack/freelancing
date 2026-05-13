import { Button, Text } from '@freelancing/ui';
import { Smartphone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <Text variant="body-medium" className="text-white/80">
              © 2026 Sudoku. Play anytime, anywhere.
            </Text>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="outlined"
              leadingIcon={<Smartphone size={18} />}
              href="https://play.google.com/store/apps/details?id=com.sudokunative.release"
              target="_blank"
              rel="noopener noreferrer"
              className="border-white text-white hover:bg-white hover:text-black"
            >
              Get Android App
            </Button>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-white/20 text-center">
          <Text variant="body-small" className="text-white/60">
            Practice your logic skills with our Sudoku puzzles
          </Text>
        </div>
      </div>
    </footer>
  );
}
