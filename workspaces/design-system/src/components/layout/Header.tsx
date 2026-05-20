import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { GraduationCap, LogOut, User, Video, Tag, MessageSquare, ChevronDown } from "lucide-react";
import { Button } from "@freelancing/ui";
import { useAuth } from "../../auth/AuthContext";
import { COLORS } from "../../utils/constants";

export function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const close = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    // Capture so this runs before target handlers; avoids racing with in-menu clicks.
    document.addEventListener("click", close, true);
    return () => document.removeEventListener("click", close, true);
  }, [menuOpen]);

  const displayName = user?.name?.trim() || user?.email || "User";
  const displayEmail = user?.email ?? "";

  const handleLogout = () => {
    setMenuOpen(false);
    logout();
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-[1200px] mx-auto px-8 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <GraduationCap className="w-10 h-10 shrink-0" style={{ color: COLORS.primary }} />
          <span className="font-bold text-xl truncate" style={{ color: COLORS.primary }}>
            Georgia Coaching Classes
          </span>
        </div>
        <nav className="flex gap-6 items-center flex-wrap justify-end">
          <a href="#about" className="hover:opacity-70 transition-opacity" style={{ color: COLORS.primary }}>
            About
          </a>
          <a href="#courses" className="hover:opacity-70 transition-opacity" style={{ color: COLORS.primary }}>
            Courses
          </a>
          <a href="#results" className="hover:opacity-70 transition-opacity" style={{ color: COLORS.primary }}>
            Results
          </a>
          <a
            href="#videos"
            className="hover:opacity-70 transition-opacity flex items-center gap-1"
            style={{ color: COLORS.primary }}
          >
            <Video className="w-4 h-4" />
            Class Glimpses
          </a>
          <a
            href="#offers"
            className="hover:opacity-70 transition-opacity flex items-center gap-1"
            style={{ color: COLORS.primary }}
          >
            <Tag className="w-4 h-4" />
            Offers
          </a>
          <a
            href="#reviews"
            className="hover:opacity-70 transition-opacity flex items-center gap-1"
            style={{ color: COLORS.primary }}
          >
            <MessageSquare className="w-4 h-4" />
            Reviews
          </a>
          <a href="#contact" className="hover:opacity-70 transition-opacity" style={{ color: COLORS.primary }}>
            Contact
          </a>

          <div className="relative pl-2 border-l border-gray-200" ref={menuRef}>
            <button
              type="button"
              className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 py-1.5 pl-2 pr-3 text-left hover:bg-gray-100"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-haspopup="true"
            >
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-700 shadow-sm"
                aria-hidden
              >
                <User className="h-5 w-5" />
              </span>
              <span className="hidden sm:flex min-w-0 flex-col text-left">
                <span className="max-w-[140px] truncate text-sm font-medium text-gray-900">{displayName}</span>
                {displayEmail ? (
                  <span className="max-w-[140px] truncate text-xs text-gray-500">{displayEmail}</span>
                ) : null}
              </span>
              <ChevronDown className={`h-4 w-4 shrink-0 text-gray-500 transition ${menuOpen ? "rotate-180" : ""}`} />
            </button>

            {menuOpen ? (
              <div className="absolute right-0 top-full z-50 mt-2 w-56 rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
                <div className="border-b border-gray-100 px-3 py-2 sm:hidden">
                  <p className="truncate text-sm font-medium text-gray-900">{displayName}</p>
                  {displayEmail ? <p className="truncate text-xs text-gray-500">{displayEmail}</p> : null}
                </div>
                <div className="p-2">
                  <Button
                    type="button"
                    variant="outlined"
                    className="w-full justify-center gap-2"
                    leadingIcon={<LogOut className="h-4 w-4" />}
                    onClick={handleLogout}
                  >
                    Log out
                  </Button>
                </div>
              </div>
            ) : null}
          </div>
        </nav>
      </div>
    </header>
  );
}
