import { useState } from 'react';
import { motion } from 'motion/react';
import { GraduationCap, X, Sparkles, Award, Users } from 'lucide-react';
import { COLORS } from '../../utils/constants';

type PopupVersion = 'compact' | 'expanded' | 'chat';

interface PreviewProps {
  onSelect: (version: PopupVersion) => void;
  onSkip: () => void;
}

export function DemoPopupPreview({ onSelect, onSkip }: PreviewProps) {
  const [selectedVersion, setSelectedVersion] = useState<PopupVersion | null>(null);

  const handleSelect = (version: PopupVersion) => {
    setSelectedVersion(version);
    onSelect(version);
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-8 overflow-auto">
      <button
        onClick={onSkip}
        className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors border border-white/20"
      >
        <X className="w-6 h-6 text-white" />
      </button>
      <div className="max-w-7xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Choose Your Demo Popup Style</h2>
          <p className="text-gray-300 text-lg">Select the version you like best</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Version 1: Compact */}
          <div className="bg-gray-900 rounded-2xl p-6 border-2 border-gray-700 hover:border-amber-500 transition-all">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-bold text-lg">Version 1: Compact</h3>
              <span className="text-xs px-3 py-1 rounded-full bg-blue-600 text-white">Minimal</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">Clean and minimal design. Perfect for users who prefer subtlety.</p>

            {/* Preview */}
            <div className="bg-gray-800 rounded-xl p-4 mb-6 min-h-[400px] flex items-end justify-end">
              <div className="w-[300px] bg-white rounded-2xl shadow-2xl border-2 overflow-hidden scale-75 origin-bottom-right" style={{ borderColor: COLORS.secondary }}>
                <div className="px-4 py-3 text-white relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.secondary} 100%)` }}>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm">Ready to Excel?</h3>
                      <p className="text-xs opacity-90">Join 5000+ students</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-700 mb-3 text-xs">Book a FREE demo class 🎓</p>
                  <div className="space-y-1 mb-3">
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: COLORS.secondary }}></div>
                      Expert faculty from IIT/AIIMS
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: COLORS.secondary }}></div>
                      98% success rate in 2025
                    </div>
                  </div>
                  <button className="w-full py-2 rounded-lg font-semibold text-xs text-white" style={{ backgroundColor: COLORS.secondary }}>
                    Book Free Demo Now
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleSelect('compact')}
              className="w-full py-3 rounded-lg font-semibold transition-all"
              style={{
                backgroundColor: selectedVersion === 'compact' ? COLORS.secondary : 'transparent',
                color: selectedVersion === 'compact' ? 'white' : COLORS.secondary,
                border: `2px solid ${COLORS.secondary}`
              }}
            >
              {selectedVersion === 'compact' ? '✓ Selected' : 'Select This Version'}
            </button>
          </div>

          {/* Version 2: Expanded */}
          <div className="bg-gray-900 rounded-2xl p-6 border-2 border-gray-700 hover:border-amber-500 transition-all">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-bold text-lg">Version 2: Expanded</h3>
              <span className="text-xs px-3 py-1 rounded-full bg-purple-600 text-white">Visual</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">Eye-catching with image. Great for visual engagement and conversions.</p>

            {/* Preview */}
            <div className="bg-gray-800 rounded-xl p-4 mb-6 min-h-[400px] flex items-end justify-end">
              <div className="w-[320px] bg-white rounded-2xl shadow-2xl overflow-hidden scale-75 origin-bottom-right">
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
                  <button className="w-full py-2 rounded-lg font-semibold text-xs text-white flex items-center justify-center gap-1" style={{ backgroundColor: COLORS.secondary }}>
                    <GraduationCap className="w-4 h-4" />
                    Book My Free Demo
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleSelect('expanded')}
              className="w-full py-3 rounded-lg font-semibold transition-all"
              style={{
                backgroundColor: selectedVersion === 'expanded' ? COLORS.secondary : 'transparent',
                color: selectedVersion === 'expanded' ? 'white' : COLORS.secondary,
                border: `2px solid ${COLORS.secondary}`
              }}
            >
              {selectedVersion === 'expanded' ? '✓ Selected' : 'Select This Version'}
            </button>
          </div>

          {/* Version 3: Chat */}
          <div className="bg-gray-900 rounded-2xl p-6 border-2 border-gray-700 hover:border-amber-500 transition-all">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-bold text-lg">Version 3: Chat</h3>
              <span className="text-xs px-3 py-1 rounded-full bg-green-600 text-white">Interactive</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">Conversational style. Feels personal and friendly like live chat support.</p>

            {/* Preview */}
            <div className="bg-gray-800 rounded-xl p-4 mb-6 min-h-[400px] flex items-end justify-end">
              <div className="w-[280px] bg-white rounded-2xl shadow-2xl border-2 overflow-hidden scale-75 origin-bottom-right" style={{ borderColor: COLORS.secondary }}>
                <div className="px-4 py-3 flex items-center justify-between" style={{ backgroundColor: COLORS.secondary }}>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                        <GraduationCap className="w-5 h-5" style={{ color: COLORS.secondary }} />
                      </div>
                      <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-white"></div>
                    </div>
                    <div className="text-white">
                      <p className="font-bold text-xs">Georgia Coaching</p>
                      <p className="text-[10px] opacity-90">Online now</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 space-y-2 bg-gray-50">
                  <div className="bg-white rounded-xl rounded-tl-sm px-3 py-2 shadow-sm text-xs text-gray-700">
                    Hi! 👋 Ready to transform your journey?
                  </div>
                  <div className="bg-white rounded-xl rounded-tl-sm px-3 py-2 shadow-sm text-xs text-gray-700">
                    Book a FREE demo class! 🎯
                  </div>
                </div>
                <div className="p-3 bg-white border-t">
                  <button className="w-full py-2 rounded-lg font-semibold text-xs text-white" style={{ backgroundColor: COLORS.secondary }}>
                    Book Free Demo
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleSelect('chat')}
              className="w-full py-3 rounded-lg font-semibold transition-all"
              style={{
                backgroundColor: selectedVersion === 'chat' ? COLORS.secondary : 'transparent',
                color: selectedVersion === 'chat' ? 'white' : COLORS.secondary,
                border: `2px solid ${COLORS.secondary}`
              }}
            >
              {selectedVersion === 'chat' ? '✓ Selected' : 'Select This Version'}
            </button>
          </div>
        </div>

        {selectedVersion && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <p className="text-white text-lg mb-4">
              Great choice! You selected <strong className="text-amber-500">Version {selectedVersion === 'compact' ? '1' : selectedVersion === 'expanded' ? '2' : '3'}</strong>
            </p>
            <p className="text-gray-400 text-sm">
              Close this preview to see it in action. The popup will appear after 20 seconds of scrolling.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
