import { motion } from 'motion/react';
import { BookOpen, Clock, CheckCircle } from 'lucide-react';
import { Course } from '../../types';
import { ANIMATIONS, COLORS } from '../../utils/constants';

interface CourseCardProps {
  course: Course;
  index: number;
}

export function CourseCard({ course, index }: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: ANIMATIONS.CARD_HOVER_ANIMATION }}
      whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
      className="bg-white rounded-xl p-4 md:p-6 shadow-lg border-2 border-gray-100 flex flex-col"
    >
      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: COLORS.primary }}>
        <BookOpen className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold mb-3" style={{ color: COLORS.primary }}>{course.name}</h3>
      <div className="flex items-center gap-2 mb-2 text-gray-600">
        <Clock className="w-4 h-4" />
        <span className="text-sm">{course.duration}</span>
      </div>
      <div className="text-2xl font-bold mb-6" style={{ color: COLORS.secondary }}>{course.fee}</div>
      <div className="flex-1">
        {course.features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-2 mb-2">
            <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#10b981' }} />
            <span className="text-sm text-gray-600">{feature}</span>
          </div>
        ))}
      </div>
      <button
        className="mt-6 w-full py-3 rounded-lg font-semibold transition-all hover:opacity-90"
        style={{ backgroundColor: COLORS.primary, color: 'white' }}
      >
        View Details
      </button>
    </motion.div>
  );
}
