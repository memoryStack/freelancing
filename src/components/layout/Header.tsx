import { GraduationCap, Video, Tag, MessageSquare } from 'lucide-react';
import { COLORS } from '../../utils/constants';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-[1200px] mx-auto px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <GraduationCap className="w-10 h-10" style={{ color: COLORS.primary }} />
          <span className="font-bold text-xl" style={{ color: COLORS.primary }}>Georgia Coaching Classes</span>
        </div>
        <nav className="flex gap-6 items-center">
          <a href="#about" className="hover:opacity-70 transition-opacity" style={{ color: COLORS.primary }}>About</a>
          <a href="#courses" className="hover:opacity-70 transition-opacity" style={{ color: COLORS.primary }}>Courses</a>
          <a href="#results" className="hover:opacity-70 transition-opacity" style={{ color: COLORS.primary }}>Results</a>
          <a href="#videos" className="hover:opacity-70 transition-opacity flex items-center gap-1" style={{ color: COLORS.primary }}>
            <Video className="w-4 h-4" />
            Class Glimpses
          </a>
          <a href="#offers" className="hover:opacity-70 transition-opacity flex items-center gap-1" style={{ color: COLORS.primary }}>
            <Tag className="w-4 h-4" />
            Offers
          </a>
          <a href="#reviews" className="hover:opacity-70 transition-opacity flex items-center gap-1" style={{ color: COLORS.primary }}>
            <MessageSquare className="w-4 h-4" />
            Reviews
          </a>
          <a href="#contact" className="hover:opacity-70 transition-opacity" style={{ color: COLORS.primary }}>Contact</a>
        </nav>
      </div>
    </header>
  );
}
