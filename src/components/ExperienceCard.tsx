
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

interface ExperienceCardProps {
  position: string;
  company: string;
  duration: string;
  description: string;
  technologies?: string[];
  index: number;
}

const ExperienceCard = ({
  position,
  company,
  duration,
  description,
  technologies = [],
  index,
}: ExperienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass-card p-6 border border-white/10 hover:border-lavender/30 transition-all duration-500 hover:shadow-[0_0_15px_rgba(147,112,219,0.2)]"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-playfair font-semibold">{position}</h3>
          <p className="text-lavender">{company}</p>
        </div>
        <div className="flex items-center mt-2 md:mt-0 text-sm text-foreground/70">
          <Calendar size={14} className="mr-1" />
          {duration}
        </div>
      </div>
      
      <p className="text-foreground/80 mb-4">{description}</p>
      
      {technologies.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="bg-lavender/10 text-lavender text-xs px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default ExperienceCard;
