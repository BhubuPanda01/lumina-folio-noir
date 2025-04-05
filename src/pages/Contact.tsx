
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";
import { useEffect } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  useEffect(() => {
    // Initialize EmailJS with your user ID
    // Replace "YOUR_USER_ID" with your actual EmailJS user ID
    emailjs.init("YOUR_USER_ID");
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "bhubuu5@gmail.com",
      link: "mailto:bhubuu5@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (234) 567-890",
      link: "tel:+12345678901"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "New York, USA",
      link: "https://maps.google.com/?q=New+York"
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
              Get In <span className="text-lavender">Touch</span>
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed">
              Have a project in mind or want to discuss a potential collaboration?
              I'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Content */}
      <section className="py-20 bg-noir">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-playfair font-bold mb-8">
                Send Me a Message
              </h2>
              
              <ContactForm />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-playfair font-bold mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="glass-card p-6 hover:border-lavender/30 transition-all duration-300"
                  >
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center mr-4">
                        <info.icon size={20} className="text-lavender" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">{info.title}</h3>
                        <a 
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lavender hover:text-lavender-light transition-colors duration-200"
                        >
                          {info.details}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-10">
                <h3 className="font-playfair font-semibold mb-4">
                  Follow Me
                </h3>
                <div className="flex space-x-4">
                  {["Twitter", "LinkedIn", "Instagram", "GitHub"].map((platform, index) => (
                    <motion.a
                      key={platform}
                      href="#"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                      className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-foreground/80 hover:bg-lavender hover:text-noir-dark transition-colors duration-300"
                    >
                      {platform.charAt(0)}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map */}
      <section className="bg-noir-dark h-96 relative">
        <div className="absolute inset-0 opacity-70">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830872278!2d-74.11976352242548!3d40.69766374873451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1617734757286!5m2!1sen!2sca"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
