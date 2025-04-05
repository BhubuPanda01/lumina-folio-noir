
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { Download, Briefcase, Award, GraduationCap } from "lucide-react";

const About = () => {
  const experiences = [
    {
      position: "Senior UX/UI Designer",
      company: "Digital Trends Agency",
      period: "2021 - Present",
      description:
        "Leading design projects for enterprise clients, overseeing the UX/UI process from research to final delivery."
    },
    {
      position: "Web Developer",
      company: "Creative Solutions",
      period: "2018 - 2021",
      description:
        "Developed responsive websites and interactive applications using modern technologies and frameworks."
    },
    {
      position: "Junior Designer",
      company: "Studio Graphix",
      period: "2016 - 2018",
      description:
        "Assisted in creating visual designs for digital and print media, collaborating with senior designers."
    }
  ];

  const education = [
    {
      degree: "Master of Fine Arts in Interaction Design",
      institution: "Design Institute of Technology",
      year: "2014 - 2016"
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "University of Creative Arts",
      year: "2010 - 2014"
    }
  ];

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
              About <span className="text-gold">Me</span>
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed">
              I'm a creative professional who blends design and development skills to create
              meaningful digital experiences.
            </p>
          </motion.div>
        </div>
      </div>

      {/* About Content */}
      <section className="py-20 bg-noir">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-lg border-2 border-gold/30">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000&q=80"
                  alt="Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-8 -right-8 bg-noir-dark border border-gold/30 rounded p-6 glass-card">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-3xl font-playfair text-gold">5+</p>
                    <p className="text-sm text-foreground/70">Years of Experience</p>
                  </div>
                  <div>
                    <p className="text-3xl font-playfair text-gold">50+</p>
                    <p className="text-sm text-foreground/70">Projects Completed</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl font-playfair font-bold mb-6">
                Crafting Digital Experiences with Passion
              </h2>
              
              <div className="space-y-4 text-foreground/80 mb-8">
                <p>
                  Hello! I'm Alexia Mason, a designer and developer based in New York. With over
                  5 years of experience in the industry, I've had the privilege of working with
                  a diverse range of clients, from startups to established brands.
                </p>
                <p>
                  My approach combines strategic thinking with creative execution. I believe that
                  great design is not just about aesthetics but also about solving problems and
                  creating intuitive user experiences.
                </p>
                <p>
                  When I'm not designing or coding, you can find me exploring new coffee shops,
                  taking photographs, or attending design workshops to keep my skills fresh and
                  up-to-date.
                </p>
              </div>
              
              <button className="btn-outline">
                Download CV <Download size={16} />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 bg-noir-dark">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-gold text-sm uppercase tracking-wider font-medium mb-4">
              My Journey
            </h2>
            <h3 className="text-3xl md:text-4xl font-playfair font-bold">
              Work Experience
            </h3>
          </motion.div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col md:flex-row gap-6"
              >
                <div className="md:w-1/4">
                  <div className="flex items-center mb-2">
                    <Briefcase size={18} className="text-gold mr-2" />
                    <span className="text-gold">{exp.period}</span>
                  </div>
                </div>
                <div className="md:w-3/4 glass-card p-6 hover:border-gold/30 transition-all duration-300">
                  <h4 className="text-xl font-playfair font-semibold mb-1">
                    {exp.position}
                  </h4>
                  <p className="text-foreground/80 mb-3">{exp.company}</p>
                  <p className="text-foreground/70">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 bg-noir">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-gold text-sm uppercase tracking-wider font-medium mb-4">
              Academic Background
            </h2>
            <h3 className="text-3xl md:text-4xl font-playfair font-bold">
              Education & Certifications
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 hover:border-gold/30 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center mr-4">
                    <GraduationCap size={24} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-playfair font-semibold">
                      {edu.degree}
                    </h4>
                    <p className="text-foreground/70 text-sm">{edu.year}</p>
                  </div>
                </div>
                <p className="text-foreground/80">{edu.institution}</p>
              </motion.div>
            ))}
            
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-6 md:col-span-2 hover:border-gold/30 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <Award size={24} className="text-gold mr-3" />
                <h4 className="text-xl font-playfair font-semibold">
                  Professional Certifications
                </h4>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="border border-border rounded-md p-4 hover:border-gold/30 transition-all duration-300">
                  <p className="font-medium mb-1">UX Design Professional</p>
                  <p className="text-sm text-foreground/70">Google, 2022</p>
                </div>
                <div className="border border-border rounded-md p-4 hover:border-gold/30 transition-all duration-300">
                  <p className="font-medium mb-1">Frontend Web Development</p>
                  <p className="text-sm text-foreground/70">Udacity, 2020</p>
                </div>
                <div className="border border-border rounded-md p-4 hover:border-gold/30 transition-all duration-300">
                  <p className="font-medium mb-1">Advanced UI Animation</p>
                  <p className="text-sm text-foreground/70">DesignLab, 2019</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
