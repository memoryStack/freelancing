import { GraduationCap, Facebook, Instagram, Mail, Phone, ArrowUp } from 'lucide-react';
import { COLORS, CONTACT_INFO } from '../../utils/constants';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-10 h-10" style={{ color: COLORS.secondary }} />
              <span className="font-bold text-xl">Georgia Coaching</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Empowering students to achieve their academic dreams through quality education and personalized guidance.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <div className="space-y-3">
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors">About Us</a>
              <a href="#courses" className="block text-gray-400 hover:text-white transition-colors">Our Courses</a>
              <a href="#results" className="block text-gray-400 hover:text-white transition-colors">Results</a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-6">Connect With Us</h3>
            <div className="flex gap-4 mb-6">
              <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors" style={{ backgroundColor: COLORS.primary }}>
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors" style={{ backgroundColor: COLORS.secondary }}>
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5" />
                <span>{CONTACT_INFO.email}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5" />
                <span>{CONTACT_INFO.phone}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-center md:text-left">
            © 2026 Georgia Coaching Classes. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
