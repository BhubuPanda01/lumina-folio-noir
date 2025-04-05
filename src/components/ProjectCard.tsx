
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  image: string;
  index: number;
}

const ProjectCard = ({ id, title, category, image, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative rounded-lg overflow-hidden"
    >
      <Link to={`/projects/${id}`} className="block relative aspect-[4/3] overflow-hidden">
        {/* Image */}
        <div className="absolute inset-0">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-noir-dark/90 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90"></div>
        
        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-gold text-sm uppercase tracking-wider font-medium mb-2 block">
              {category}
            </span>
            <h3 className="text-xl md:text-2xl font-playfair font-semibold transition-transform duration-300 group-hover:translate-x-2">
              {title}
            </h3>
          </motion.div>
        </div>
        
        {/* View icon */}
        <div className="absolute top-4 right-4 opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <span className="h-10 w-10 bg-gold rounded-full flex items-center justify-center text-noir-dark">
            <ArrowUpRight size={18} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
