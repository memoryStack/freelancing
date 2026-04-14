import { motion } from 'motion/react';
import { TeamMember } from '../../types';
import { ANIMATIONS, COLORS } from '../../utils/constants';

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

export function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: ANIMATIONS.CARD_HOVER_ANIMATION }}
      whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
      className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
    >
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-lg mb-2" style={{ color: COLORS.primary }}>{member.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{member.qualification}</p>
        <p className="text-sm font-semibold" style={{ color: COLORS.secondary }}>{member.subject}</p>
      </div>
    </motion.div>
  );
}
