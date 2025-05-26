import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-gold-500 mr-2" />
              <div>
                <h2 className="text-lg font-bold leading-none">BIGG-BOSS</h2>
                <p className="text-xs text-gold-500 leading-none">COMMANDO SECURITY</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 text-sm">
              Professional security services tailored to your specific needs. 
              Licensed, trained, and ready to serve 24/7.
            </p>
            <p className="text-sm text-gray-400">
              GST No.: 03GUTPS0356E1ZE
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold-500 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gold-300 text-sm transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-gold-300 text-sm transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-gold-300 text-sm transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-gold-300 text-sm transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gold-500 font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">Security Guards</li>
              <li className="text-gray-300 text-sm">Bouncers</li>
              <li className="text-gray-300 text-sm">Female Security</li>
              <li className="text-gray-300 text-sm">ATM Security</li>
              <li className="text-gray-300 text-sm">Cash Van Security</li>
              <li className="text-gray-300 text-sm">Armed Security</li>
              <li className="text-gray-300 text-sm">Commercial Security</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gold-500 font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-gold-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  <a href="tel:8544959750" className="hover:text-gold-300 transition-colors duration-300">
                    8544959750
                  </a>
                </span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-gold-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  <a href="mailto:biggbosscommandos1@gmail.com" className="hover:text-gold-300 transition-colors duration-300">
                    biggbosscommandos1@gmail.com
                  </a>
                </span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-gold-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Cabin No. 214, Block 3, Oxford Street, Zirakpur - 140603
                </span>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-gold-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Open 24/7 for security requirements
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} BIGG-BOSS-COMMANDO-SECURITY-SERVICES. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;