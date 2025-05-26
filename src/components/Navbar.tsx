import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Shield, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-navy-900 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center" onClick={closeMenu}>
            <Shield className="w-8 h-8 text-gold-500 mr-2" />
            <div>
              <h1 className="text-lg font-bold text-white leading-none">BIGG-BOSS</h1>
              <p className="text-xs text-gold-500 leading-none">COMMANDO SECURITY</p>
            </div>
          </NavLink>

          {/* Emergency Contact - Visible on medium screens and up */}
          <div className="hidden md:flex items-center mr-4">
            <a 
              href="tel:8544959750" 
              className="flex items-center bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded transition-colors duration-300"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span className="font-medium">8544959750</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    `text-sm font-medium transition-colors duration-300 ${
                      isActive 
                        ? 'text-gold-500' 
                        : 'text-white hover:text-gold-300'
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/services" 
                  className={({ isActive }) => 
                    `text-sm font-medium transition-colors duration-300 ${
                      isActive 
                        ? 'text-gold-500' 
                        : 'text-white hover:text-gold-300'
                    }`
                  }
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => 
                    `text-sm font-medium transition-colors duration-300 ${
                      isActive 
                        ? 'text-gold-500' 
                        : 'text-white hover:text-gold-300'
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => 
                    `text-sm font-medium transition-colors duration-300 ${
                      isActive 
                        ? 'text-gold-500' 
                        : 'text-white hover:text-gold-300'
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-navy-800 shadow-xl">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    `block text-sm font-medium transition-colors duration-300 ${
                      isActive 
                        ? 'text-gold-500' 
                        : 'text-white hover:text-gold-300'
                    }`
                  }
                  onClick={closeMenu}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/services" 
                  className={({ isActive }) => 
                    `block text-sm font-medium transition-colors duration-300 ${
                      isActive 
                        ? 'text-gold-500' 
                        : 'text-white hover:text-gold-300'
                    }`
                  }
                  onClick={closeMenu}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => 
                    `block text-sm font-medium transition-colors duration-300 ${
                      isActive 
                        ? 'text-gold-500' 
                        : 'text-white hover:text-gold-300'
                    }`
                  }
                  onClick={closeMenu}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => 
                    `block text-sm font-medium transition-colors duration-300 ${
                      isActive 
                        ? 'text-gold-500' 
                        : 'text-white hover:text-gold-300'
                    }`
                  }
                  onClick={closeMenu}
                >
                  Contact
                </NavLink>
              </li>
              <li className="pt-2">
                <a 
                  href="tel:8544959750" 
                  className="flex items-center bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded transition-colors duration-300 w-full justify-center"
                  onClick={closeMenu}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="font-medium">Emergency: 8544959750</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;