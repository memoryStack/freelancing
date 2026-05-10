import { motion } from 'motion/react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { Branch } from '../../types';
import { COLORS } from '../../utils/constants';

interface BranchCardProps {
  branch: Branch;
  index: number;
}

export function BranchCard({ branch, index }: BranchCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
    >
      <h3 className="text-xl font-bold mb-4" style={{ color: COLORS.primary }}>{branch.name}</h3>
      <div className="flex items-start gap-3 mb-3">
        <MapPin className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: COLORS.secondary }} />
        <p className="text-gray-600">{branch.address}</p>
      </div>
      <div className="flex items-center gap-3 mb-3">
        <Phone className="w-5 h-5 flex-shrink-0" style={{ color: COLORS.secondary }} />
        <p className="text-gray-600 font-semibold">{branch.phone}</p>
      </div>
      <div className="flex items-start gap-3">
        <Clock className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: COLORS.secondary }} />
        <p className="text-gray-600 text-sm">{branch.timing}</p>
      </div>
    </motion.div>
  );
}
