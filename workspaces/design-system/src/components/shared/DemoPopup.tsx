import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, X, Sparkles, Award, Users } from 'lucide-react';
import { COLORS } from '../../utils/constants';

interface DemoPopupProps {
  show: boolean;
  onClose: () => void;
}

export function DemoPopup({ show, onClose }: DemoPopupProps) {
  const [showBookDemoPopup, setShowBookDemoPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const handleBookDemo = () => {
    onClose();
    document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
    setShowBookDemoPopup(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setShowBookDemoPopup(false)
      }
    };

    if (showBookDemoPopup) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showBookDemoPopup]);

  return (
    <AnimatePresence>
      {
        show && (
          <button
            className="flex items-center justify-center fixed w-20 h-20 right-4 bottom-4 md:right-6 md:bottom-6 shadow-[0_0_10px_rgba(0,0,0,0.15)] rounded-full bg-white"
            onClick={() => setShowBookDemoPopup(true)}
          >
            <GraduationCap className="w-12 h-12" width={80} height={80} style={{ color: COLORS.secondary }} />
          </button>
        )
      }
      {
        showBookDemoPopup && (
          <div 
            className="w-[320px] bg-white rounded-2xl shadow-2xl fixed right-4 bottom-4 md:right-6 md:bottom-6 overflow-hidden scale-75 origin-bottom-right"
            ref={popupRef}
          >
            <div className="relative h-32 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1758270704524-596810e891b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" alt="Students" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-2 left-4">
                <div className="flex items-center gap-1 mb-1">
                  <Sparkles className="w-3 h-3 text-yellow-400" />
                </div>
                <h3 className="text-white font-bold text-sm">Shape Your Future!</h3>
              </div>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="bg-blue-50 rounded-lg p-2 text-center">
                  <Award className="w-4 h-4 mx-auto mb-1" style={{ color: COLORS.primary }} />
                  <p className="text-[10px] text-gray-600">98% Success</p>
                </div>
                <div className="bg-amber-50 rounded-lg p-2 text-center">
                  <Users className="w-4 h-4 mx-auto mb-1" style={{ color: COLORS.secondary }} />
                  <p className="text-[10px] text-gray-600">5000+ Students</p>
                </div>
              </div>
              <p className="text-gray-700 mb-3 text-xs text-center">Get a FREE demo class!</p>
              <button
                className="w-full py-2 rounded-lg font-semibold text-xs text-white flex items-center justify-center gap-1"
                style={{ backgroundColor: COLORS.secondary }}
                onClick={handleBookDemo}
              >
                <GraduationCap className="w-4 h-4" />
                Book My Free Demo
              </button>
            </div>
          </div>
        )
      }
    </AnimatePresence>
  );
}
