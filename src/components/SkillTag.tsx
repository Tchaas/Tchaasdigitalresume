import { motion } from "framer-motion";

interface SkillTagProps {
  skill: string;
  isSelected: boolean;
  onClick: () => void;
}

export function SkillTag({ skill, isSelected, onClick }: SkillTagProps) {
  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        inline-flex items-center justify-center min-h-[44px] px-4 py-2 rounded-lg text-sm cursor-pointer
        transition-all duration-300 border
        ${isSelected 
          ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/50 border-emerald-400' 
          : 'bg-gray-800/50 text-gray-300 border-emerald-500/30 hover:border-emerald-500/50 hover:bg-emerald-500/10'
        }
      `}
    >
      {skill}
    </motion.button>
  );
}
