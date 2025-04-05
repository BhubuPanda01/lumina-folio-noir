
import { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    id: "brand-redesign",
    title: "Brand Redesign",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    id: "mobile-app",
    title: "Finance Mobile App",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    id: "web-development",
    title: "E-commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    id: "logo-design",
    title: "Modern Logo Design",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1600951683794-f8168328973e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    id: "website-redesign",
    title: "Corporate Website Redesign",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    id: "app-design",
    title: "Health App Design",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
  }
];

type Category = "All" | "UI/UX Design" | "Web Development" | "Branding";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  
  const categories: Category[] = ["All", "UI/UX Design", "Web Development", "Branding"];
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <PageTransition>
      {/* Header */}
      <div className="pt-24 bg-noir-dark">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              My <span className="text-gold">Projects</span>
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed">
              Explore my portfolio of carefully crafted design and development work
              across various industries and platforms.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Projects Content */}
      <section className="py-20 bg-noir">
        <div className="section-container">
          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gold text-noir-dark font-medium"
                    : "bg-secondary text-foreground/70 hover:bg-gold/20"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
          
          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <ProjectCard
                  id={project.id}
                  title={project.title}
                  category={project.category}
                  image={project.image}
                  index={index}
                />
              </motion.div>
            ))}
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-xl text-foreground/70">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </PageTransition>
  );
};

export default Projects;
