import React from 'react';
import { 
  Shield, 
  Award, 
  Target, 
  Check,
  Users
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Integrity",
      description: "We operate with unwavering honesty and ethical standards in all our interactions."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence",
      description: "We strive for the highest quality in our services and continuous improvement."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Reliability",
      description: "We are dependable and consistent in delivering our security promises."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Respect",
      description: "We treat everyone with dignity and fairness, from our clients to our staff."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-navy-900 text-white relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/4555527/pexels-photo-4555527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          }}
        ></div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy-900/80"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gold-500">BIGG-BOSS</span>
            </h1>
            <p className="text-xl text-gray-300">
              Your trusted partner in comprehensive security solutions since inception.
            </p>
          </div>
        </div>
      </section>
      
      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold-500 font-semibold mb-2 inline-block">Our Story</span>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">
                Professional Security Services You Can Trust
              </h2>
              <p className="text-gray-600 mb-6">
                BIGG-BOSS-COMMANDO-SECURITY-SERVICES was founded by Shamsher Singh with a vision to provide top-tier security solutions that address the unique challenges faced by businesses and individuals in today's complex security landscape.
              </p>
              <p className="text-gray-600 mb-6">
                Our team consists of extensively trained security professionals who bring years of experience from various backgrounds including law enforcement, military, and specialized security operations.
              </p>
              <p className="text-gray-600">
                We pride ourselves on delivering personalized security solutions that are effective, reliable, and tailored to the specific needs of each client, ensuring peace of mind and protection around the clock.
              </p>
            </div>
            
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/5698977/pexels-photo-5698977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Security professional" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-navy-900 text-white p-6 rounded-lg shadow-lg max-w-xs">
                <p className="text-lg font-semibold mb-2">Shamsher Singh</p>
                <p className="text-sm text-gray-300">Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-gold-500 font-semibold mb-2 inline-block">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              The Principles That Guide Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our core values form the foundation of everything we do, from how we interact with clients 
              to how we train our security personnel.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transform transition-transform duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-navy-800 rounded-full flex items-center justify-center mb-4 text-gold-500">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16 bg-navy-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-navy-700 p-8 rounded-lg border border-navy-600">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <div className="w-10 h-10 bg-gold-500/20 rounded-full flex items-center justify-center mr-3 text-gold-500">
                  <Target className="w-6 h-6" />
                </div>
                Our Mission
              </h3>
              <p className="text-gray-300 mb-6">
                To provide exceptional security services that protect people, property, and assets through 
                professional personnel, advanced protocols, and unwavering commitment to our clients' safety.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-gold-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Deliver reliable and effective security solutions</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-gold-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Maintain the highest standards of professionalism</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-gold-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Adapt our services to meet client-specific needs</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-navy-700 p-8 rounded-lg border border-navy-600">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <div className="w-10 h-10 bg-gold-500/20 rounded-full flex items-center justify-center mr-3 text-gold-500">
                  <Shield className="w-6 h-6" />
                </div>
                Our Vision
              </h3>
              <p className="text-gray-300 mb-6">
                To be the most trusted security service provider, recognized for excellence, integrity, 
                and innovation in creating safer environments for our clients and communities.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-gold-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Lead the industry in service quality and client satisfaction</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-gold-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Continuously evolve our security methodologies</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-gold-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Expand our reach while maintaining personalized service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-gold-500 font-semibold mb-2 inline-block">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              The BIGG-BOSS Advantage
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What sets us apart is our commitment to excellence and our personalized approach to security.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-lg p-6 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-navy-800 rounded-lg flex items-center justify-center mb-4 text-gold-500">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-3">Expert Personnel</h3>
              <p className="text-gray-600">
                Our security staff undergoes rigorous training and background checks to ensure they meet our high standards.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-navy-800 rounded-lg flex items-center justify-center mb-4 text-gold-500">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-3">Customized Solutions</h3>
              <p className="text-gray-600">
                We design security plans tailored to your specific needs rather than offering one-size-fits-all solutions.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-navy-800 rounded-lg flex items-center justify-center mb-4 text-gold-500">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-3">Reliability</h3>
              <p className="text-gray-600">
                We pride ourselves on consistency, punctuality, and professionalism in all our security operations.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-navy-900 rounded-lg shadow-xl overflow-hidden relative">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ 
                backgroundImage: "url('https://images.pexels.com/photos/5697631/pexels-photo-5697631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
              }}
            ></div>
            
            <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy-900/80"></div>
            
            <div className="relative z-10 p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Enhance Your Security?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact us today to discuss your security needs and discover how BIGG-BOSS can help protect what matters most to you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-8 py-3 rounded-md transition-all duration-300"
                >
                  Get in Touch
                </a>
                <a
                  href="tel:8544959750"
                  className="bg-transparent hover:bg-white/10 text-white border border-white/30 font-semibold px-8 py-3 rounded-md transition-all duration-300"
                >
                  Call: 8544959750
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;