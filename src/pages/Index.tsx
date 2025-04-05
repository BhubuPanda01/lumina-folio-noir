
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import HeroSection from "@/components/HeroSection";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";

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

const experienceData = [
  {
    position: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    duration: "2021 - Present",
    description: "Leading the frontend development team in creating responsive and accessible web applications using React, TypeScript, and modern CSS frameworks.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
  },
  {
    position: "UI/UX Developer",
    company: "Creative Solutions",
    duration: "2018 - 2021",
    description: "Designed and implemented user interfaces for various client projects, focusing on creating intuitive user experiences and visually appealing designs.",
    technologies: ["Figma", "React", "SCSS", "JavaScript"]
  },
  {
    position: "Web Developer",
    company: "Digital Agency",
    duration: "2016 - 2018",
    description: "Developed responsive websites and interactive web applications for clients across various industries, ensuring cross-browser compatibility and performance.",
    technologies: ["HTML/CSS", "JavaScript", "PHP", "WordPress"]
  }
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
              <h2 className="text-lavender text-sm uppercase tracking-wider font-medium mb-4">
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
              <div className="aspect-square border-2 border-lavender rounded-xl overflow-hidden shadow-[0_0_25px_rgba(147,112,219,0.3)]">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80" 
                  alt="Portrait" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-noir-dark border border-lavender/50 rounded-lg p-4 shadow-xl">
                <p className="text-lavender font-semibold">5+ Years</p>
                <p className="text-foreground/70 text-sm">Professional Experience</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="py-24 bg-gradient-to-b from-noir to-noir-dark">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-lavender text-sm uppercase tracking-wider font-medium mb-4">
              My Journey
            </h2>
            <h3 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              Professional Experience
            </h3>
            <p className="text-foreground/80">
              Over the years, I've had the opportunity to work with amazing teams and clients,
              building my expertise in development and design.
            </p>
          </div>
          
          <div className="space-y-6">
            {experienceData.map((experience, index) => (
              <ExperienceCard
                key={index}
                position={experience.position}
                company={experience.company}
                duration={experience.duration}
                description={experience.description}
                technologies={experience.technologies}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Projects Preview */}
      <section className="py-24 bg-gradient-to-b from-noir-dark to-noir">
        <div className="section-container">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-lavender text-sm uppercase tracking-wider font-medium mb-4">
                My Work
              </h2>
              <h3 className="text-3xl md:text-4xl font-playfair font-bold">
                Featured Projects
              </h3>
            </div>
            <Link 
              to="/projects" 
              className="hidden md:flex items-center text-lavender hover:text-lavender-light transition-colors duration-200"
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
      
      {/* Contact CTA */}
      <section className="py-24 bg-gradient-to-b from-noir to-noir-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-lavender/10 to-lavender/5"></div>
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
              Let's Work <span className="text-lavender">Together</span>
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
