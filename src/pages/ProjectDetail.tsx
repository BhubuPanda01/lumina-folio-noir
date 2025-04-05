
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { ArrowLeft, Globe, Calendar, Tag } from "lucide-react";
import { useEffect } from "react";

const projects = [
  {
    id: "brand-redesign",
    title: "Brand Redesign",
    client: "Fusion Tech",
    category: "Branding",
    date: "March 2023",
    image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&h=700&q=80",
    description: "A complete brand identity redesign for a tech company, including logo, color palette, typography, and brand guidelines.",
    challenge: "The client needed a modern and cohesive brand identity that would reflect their innovative approach to technology while maintaining a sense of reliability and trust.",
    solution: "After extensive research and multiple iterations, we developed a clean, dynamic visual identity that uses a bold color scheme and geometric shapes to convey innovation and precision.",
    website: "https://example.com",
    gallery: [
      "https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=550&q=80",
      "https://images.unsplash.com/photo-1634084462412-b54873c0a56d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=550&q=80",
      "https://images.unsplash.com/photo-1604359028251-e2855e111af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=550&q=80"
    ]
  },
  {
    id: "mobile-app",
    title: "Finance Mobile App",
    client: "MoneyWise",
    category: "UI/UX Design",
    date: "December 2022",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&h=700&q=80",
    description: "A comprehensive mobile app design for a personal finance management platform, focused on clarity and ease of use.",
    challenge: "Create a user-friendly interface that simplifies complex financial data and makes budgeting accessible to users of all experience levels.",
    solution: "Designed an intuitive UI with clear data visualization, customizable dashboards, and a step-by-step onboarding process to ensure users can easily navigate their finances.",
    website: "https://example.com",
    gallery: [
      "https://images.unsplash.com/photo-1621330396173-e41b1cafd17f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=550&q=80",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=550&q=80",
      "https://images.unsplash.com/photo-1551650992-0e4c43836cb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=550&q=80"
    ]
  },
  {
    id: "web-development",
    title: "E-commerce Platform",
    client: "Urban Threads",
    category: "Web Development",
    date: "August 2022",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&h=700&q=80",
    description: "A fully responsive e-commerce website with a focus on user experience, performance, and conversion optimization.",
    challenge: "Build a high-performing e-commerce platform that provides a seamless shopping experience across all devices while maintaining fast loading times.",
    solution: "Developed a custom solution using React for the frontend and a headless CMS for content management, with a focus on performance optimization and accessibility.",
    website: "https://example.com",
    gallery: [
      "https://images.unsplash.com/photo-1551650992-57ccda94576c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=550&q=80",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=550&q=80",
      "https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=550&q=80"
    ]
  }
];

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!project) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center bg-noir">
        <div className="text-center">
          <h2 className="text-2xl font-playfair mb-4">Project not found</h2>
          <Link to="/projects" className="btn-outline">
            <ArrowLeft size={16} /> Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <PageTransition>
      {/* Hero Image */}
      <div className="pt-24 relative h-[60vh] bg-noir-dark">
        <div className="absolute inset-0">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir-dark/80 to-transparent"></div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto px-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-foreground/80 mb-8">
              {project.description}
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center">
                <Tag size={18} className="text-gold mr-2" />
                <span>{project.category}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={18} className="text-gold mr-2" />
                <span>{project.date}</span>
              </div>
              <div className="flex items-center">
                <Globe size={18} className="text-gold mr-2" />
                <a 
                  href={project.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-light underline"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Project Details */}
      <section className="py-20 bg-noir">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-playfair font-bold mb-6">
                Project Overview
              </h2>
              <p className="text-foreground/80 mb-6">
                {project.description}
              </p>
              
              <h3 className="text-xl font-playfair font-bold mb-4 text-gold">
                The Challenge
              </h3>
              <p className="text-foreground/80 mb-8">
                {project.challenge}
              </p>
              
              <h3 className="text-xl font-playfair font-bold mb-4 text-gold">
                The Solution
              </h3>
              <p className="text-foreground/80">
                {project.solution}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-playfair font-semibold mb-6">
                Project Details
              </h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-foreground/70 text-sm mb-1">Client</p>
                  <p className="font-medium">{project.client}</p>
                </div>
                <div>
                  <p className="text-foreground/70 text-sm mb-1">Category</p>
                  <p className="font-medium">{project.category}</p>
                </div>
                <div>
                  <p className="text-foreground/70 text-sm mb-1">Date</p>
                  <p className="font-medium">{project.date}</p>
                </div>
                <div>
                  <p className="text-foreground/70 text-sm mb-1">Website</p>
                  <a 
                    href={project.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gold hover:text-gold-light"
                  >
                    {project.website.replace("https://", "")}
                  </a>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-border">
                <Link to="/projects" className="btn-outline w-full">
                  <ArrowLeft size={16} /> Back to Projects
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 bg-noir-dark">
        <div className="section-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-playfair font-bold mb-12 text-center"
          >
            Project Gallery
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="overflow-hidden rounded-lg bg-noir border border-border/40 hover:border-gold/30 transition-all duration-300"
              >
                <img 
                  src={image} 
                  alt={`${project.title} gallery image ${index + 1}`} 
                  className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-500 hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ProjectDetail;
