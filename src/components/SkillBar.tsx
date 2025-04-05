
import { motion } from "framer-motion";

interface SkillBarProps {
  skill: string;
  percentage: number;
  color?: string;
  index: number;
}

const SkillBar = ({ 
  skill, 
  percentage,
  color = "#D4AF37",
  index 
}: SkillBarProps) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium">{skill}</span>
        <span className="text-foreground/70">{percentage}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ 
            duration: 1, 
            delay: 0.3 + index * 0.1,
            ease: "easeOut" 
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
