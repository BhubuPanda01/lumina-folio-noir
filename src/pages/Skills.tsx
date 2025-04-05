
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import SkillBar from "@/components/SkillBar";
import { Code, PenTool, Monitor, Database, Film, BarChart } from "lucide-react";

const Skills = () => {
  const designSkills = [
    { skill: "UI/UX Design", percentage: 95 },
    { skill: "Branding", percentage: 85 },
    { skill: "Typography", percentage: 90 },
    { skill: "Illustration", percentage: 75 }
  ];

  const developmentSkills = [
    { skill: "HTML & CSS", percentage: 98 },
    { skill: "JavaScript/TypeScript", percentage: 90 },
    { skill: "React.js", percentage: 92 },
    { skill: "Node.js", percentage: 80 }
  ];

  const services = [
    {
      icon: PenTool,
      title: "UI/UX Design",
      description:
        "User-centered design with intuitive interfaces and seamless experiences. From wireframing to high-fidelity prototypes."
    },
    {
      icon: Code,
      title: "Web Development",
      description:
        "Responsive, performant, and accessible websites using modern frameworks and development practices."
    },
    {
      icon: Monitor,
      title: "App Design",
      description:
        "Intuitive mobile application interfaces designed for iOS and Android platforms with a focus on usability."
    },
    {
      icon: BarChart,
      title: "Digital Marketing",
      description:
        "Data-driven marketing strategies to increase visibility and drive conversions across digital channels."
    },
    {
      icon: Database,
      title: "CMS Development",
      description:
        "Custom content management systems tailored to your specific needs for easy content updates."
    },
    {
      icon: Film,
      title: "Motion Design",
      description:
        "Engaging animations and motion graphics that bring your brand and products to life."
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
              My <span className="text-gold">Skills</span>
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed">
              A comprehensive overview of my technical abilities and the services
              I offer to help bring your vision to life.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Skills Content */}
      <section className="py-20 bg-noir">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-playfair font-bold mb-8">
                Design Skills
              </h2>
              
              <div>
                {designSkills.map((skill, index) => (
                  <SkillBar
                    key={skill.skill}
                    skill={skill.skill}
                    percentage={skill.percentage}
                    color="#D4AF37"
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-playfair font-bold mb-8">
                Development Skills
              </h2>
              
              <div>
                {developmentSkills.map((skill, index) => (
                  <SkillBar
                    key={skill.skill}
                    skill={skill.skill}
                    percentage={skill.percentage}
                    color="#D4AF37"
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-playfair font-bold mb-6">
              Services I Offer
            </h2>
            <p className="text-foreground/80 max-w-3xl mx-auto">
              I provide a range of creative and technical services to help businesses
              establish their online presence and enhance their digital products.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 hover:border-gold/30 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center mb-6 mx-auto">
                  <service.icon size={24} className="text-gold" />
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-foreground/70 text-center">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20 bg-noir-dark">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-playfair font-bold mb-6">
              Tools & Technologies
            </h2>
            <p className="text-foreground/80 max-w-3xl mx-auto">
              I leverage modern tools and technologies to deliver high-quality results
              that meet the demands of today's digital landscape.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "Figma", "Adobe XD", "Photoshop", "Illustrator",
              "React", "TypeScript", "Node.js", "Next.js",
              "Tailwind CSS", "GraphQL", "Git", "AWS"
            ].map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-secondary rounded-lg p-4 text-center hover:bg-secondary/80 transition-all duration-300"
              >
                <p className="font-medium">{tool}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Skills;
