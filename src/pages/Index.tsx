
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import HeroSection from "@/components/HeroSection";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectCard from "@/components/ProjectCard";

const projectsPreview = [
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
  }
];

const skillsPreview = [
  { label: "UI/UX Design", icon: "🎨" },
  { label: "Web Development", icon: "💻" },
  { label: "Branding", icon: "✨" },
  { label: "Mobile App Design", icon: "📱" }
];

const Index = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Preview */}
      <section className="py-24 bg-gradient-to-b from-noir-dark to-noir">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-gold text-sm uppercase tracking-wider font-medium mb-4">
                About Me
              </h2>
              <h3 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
                Creative Developer with a Passion for Design
              </h3>
              <p className="text-foreground/80 mb-6">
                I'm a multidisciplinary designer and developer with over 5 years of experience
                creating digital experiences that are both beautiful and functional. My approach
                combines strategic thinking with creative execution to deliver results that
                exceed expectations.
              </p>
              <Link to="/about" className="btn-outline">
                More About Me <ArrowRight size={16} />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square border-2 border-gold rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80" 
                  alt="Portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-noir-dark border border-gold/50 rounded-lg p-4 shadow-xl">
                <p className="text-gold font-semibold">5+ Years</p>
                <p className="text-foreground/70 text-sm">Professional Experience</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Projects Preview */}
      <section className="py-24 bg-gradient-to-b from-noir to-noir-dark">
        <div className="section-container">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-gold text-sm uppercase tracking-wider font-medium mb-4">
                My Work
              </h2>
              <h3 className="text-3xl md:text-4xl font-playfair font-bold">
                Featured Projects
              </h3>
            </div>
            <Link 
              to="/projects" 
              className="hidden md:flex items-center text-gold hover:text-gold-light transition-colors duration-200"
            >
              View All Projects <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsPreview.map((project, index) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                category={project.category}
                image={project.image}
                index={index}
              />
            ))}
          </div>
          
          <div className="mt-10 text-center md:hidden">
            <Link to="/projects" className="btn-outline">
              View All Projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Skills Preview */}
      <section className="py-24 bg-gradient-to-b from-noir-dark to-noir">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-gold text-sm uppercase tracking-wider font-medium mb-4">
              My Expertise
            </h2>
            <h3 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              Skills & Services
            </h3>
            <p className="text-foreground/80">
              I offer a wide range of creative services to help businesses and individuals
              achieve their goals through thoughtful design and robust development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsPreview.map((skill, index) => (
              <motion.div 
                key={skill.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 text-center hover:border-gold/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h4 className="text-xl font-playfair font-semibold mb-2">{skill.label}</h4>
                <p className="text-sm text-foreground/70">
                  Professional expertise in {skill.label.toLowerCase()} 
                  with attention to detail and user experience.
                </p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Link to="/skills" className="btn-outline">
              Explore My Skills <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-24 bg-gradient-to-b from-noir to-noir-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-gold/5"></div>
        </div>
        
        <div className="section-container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-6">
              Let's Work <span className="text-gold">Together</span>
            </h2>
            <p className="text-xl text-foreground/80 mb-8">
              Have a project in mind? I'd love to hear about it. Let's discuss how we can collaborate
              to bring your vision to life.
            </p>
            <Link to="/contact" className="btn-primary">
              Get In Touch <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Index;
