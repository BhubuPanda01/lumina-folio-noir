
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Contact', path: '/contact' }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when path changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Determine if a link is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-noir-dark/80 backdrop-blur-md' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="text-2xl md:text-3xl font-playfair font-bold bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent"
            >
              Lumina
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-link ${isActive(link.path) ? 'nav-link-active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gold hover:text-gold-light transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen
            ? 'translate-x-0 bg-noir-dark/95 backdrop-blur-md'
            : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xl ${isActive(link.path) ? 'text-gold' : 'text-foreground/80'} hover:text-gold transition-colors`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
