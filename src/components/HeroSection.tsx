import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-navy-900 min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-20"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/5699755/pexels-photo-5699755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      ></div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy-800/70 z-10"></div>
      
      <div className="container mx-auto px-4 z-20 py-16 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className="animate-fadeIn">
            <div className="flex items-center mb-6">
              <Shield className="w-12 h-12 text-gold-500 mr-4" />
              <div>
                <h1 className="text-3xl font-bold text-white leading-none">BIGG-BOSS</h1>
                <p className="text-lg text-gold-500 leading-none">COMMANDO SECURITY</p>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Your Safety <span className="text-gold-500">Our Priority</span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              Professional security services tailored to your specific needs. 
              Licensed, trained, and ready to serve 24/7 across commercial, 
              residential, and special event contexts.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-6 py-3 rounded-md transition-all duration-300 flex items-center"
              >
                Get a Quote <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <Link
                to="/services"
                className="bg-transparent hover:bg-white/10 text-white border border-white/30 font-semibold px-6 py-3 rounded-md transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
            
            <div className="mt-8 flex items-center">
              <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium mr-3 animate-pulse">
                24/7
              </div>
              <p className="text-gray-300 text-sm">
                Emergency Response Available
              </p>
            </div>
          </div>
          
          <div className="hidden md:block relative">
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]">
              <img 
                src="https://images.pexels.com/photos/6015354/pexels-photo-6015354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Security Professional" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-semibold mb-2">Shamsher Singh</p>
                <p className="text-gray-300 text-sm">Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;