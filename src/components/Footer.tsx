
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-noir-dark border-t border-border/40 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and About */}
          <div>
            <Link 
              to="/"
              className="text-2xl font-playfair font-bold bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent inline-block mb-4"
            >
              Lumina
            </Link>
            <p className="text-foreground/70 mb-6">
              Creative portfolio showcasing my work in design and development.
              Always open to new opportunities and collaborations.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-secondary text-foreground/80 hover:bg-gold hover:text-noir-dark transition-colors duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-playfair font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-foreground/70 hover:text-gold transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-foreground/70 hover:text-gold transition-colors duration-200">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-foreground/70 hover:text-gold transition-colors duration-200">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/skills" className="text-foreground/70 hover:text-gold transition-colors duration-200">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-foreground/70 hover:text-gold transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-playfair font-semibold mb-4">Contact</h3>
            <ul className="space-y-4 text-foreground/70">
              <li>
                <span className="block">Email:</span>
                <a href="mailto:hello@example.com" className="text-gold hover:text-gold-light transition-colors duration-200">
                  hello@example.com
                </a>
              </li>
              <li>
                <span className="block">Phone:</span>
                <a href="tel:+1234567890" className="text-gold hover:text-gold-light transition-colors duration-200">
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <span className="block">Location:</span>
                <span>New York, USA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/40 pt-6 mt-8 text-center text-sm text-foreground/50">
          <p>&copy; {currentYear} Lumina Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
