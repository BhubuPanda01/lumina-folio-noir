
import { useState } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully!",
      description: "I'll get back to you as soon as possible.",
    });
    
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    
    setIsSubmitting(false);
  };

  return (
    <motion.form 
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-6"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-muted border border-border focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold rounded-md transition-all duration-300"
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-muted border border-border focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold rounded-md transition-all duration-300"
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-muted border border-border focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold rounded-md transition-all duration-300"
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="w-full px-4 py-3 bg-muted border border-border focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold rounded-md transition-all duration-300"
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full sm:w-auto"
        >
          {isSubmitting ? (
            "Sending..."
          ) : (
            <>
              Send Message <Send size={16} />
            </>
          )}
        </button>
      </motion.div>
    </motion.form>
  );
};

export default ContactForm;
