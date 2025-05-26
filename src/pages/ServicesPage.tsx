import React from 'react';
import { 
  Shield, 
  Users, 
  UserCheck, 
  Building2, 
  Briefcase,
  ShieldAlert,
  Building,
  Home,
  Store,
  Factory
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Security Guards",
      description: "Our professional security guards are trained to provide a visible security presence, deter criminal activity, and respond to security incidents. They are perfect for retail establishments, office buildings, residential complexes, and events.",
      features: [
        "Uniformed guards for visible security presence",
        "Access control and visitor management",
        "Regular patrol and surveillance",
        "Incident reporting and documentation",
        "Emergency response protocols",
        "Customized security plans"
      ]
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Bouncers",
      description: "Our bouncers specialize in crowd management and VIP protection at events, clubs, and venues. They are trained to handle difficult situations professionally while maintaining a strong security presence.",
      features: [
        "Crowd control at events and venues",
        "ID verification and age checking",
        "VIP protection and escort services",
        "Conflict resolution and prevention",
        "Physical security presence",
        "Emergency evacuation assistance"
      ]
    },
    {
      icon: <UserCheck className="w-12 h-12" />,
      title: "Female Security",
      description: "Our female security personnel are trained to handle gender-sensitive security situations. They are ideal for events requiring female guest screening, VIP protection for female clients, and security in women-only establishments.",
      features: [
        "Female-specific security needs",
        "Event and personal security",
        "Corporate environments",
        "Female guest screening",
        "Women's facilities security",
        "Female VIP protection"
      ]
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "ATM Security",
      description: "Our ATM security services focus on protecting automated teller machines, their users, and cash reserves. We implement comprehensive security measures to prevent theft, fraud, and vandalism.",
      features: [
        "24/7 monitoring of ATM sites",
        "Deterrence of criminal activity",
        "Quick response to alarms",
        "Coordination with law enforcement",
        "Regular security assessments",
        "Cash replenishment security"
      ]
    },
    {
      icon: <Briefcase className="w-12 h-12" />,
      title: "Cash Van Security",
      description: "Our cash van security service ensures the safe transport of cash and valuables between locations. Our armed personnel are trained in secure transit protocols and emergency response.",
      features: [
        "Armed security personnel",
        "Secure vehicle operations",
        "Route planning and risk assessment",
        "Communication systems",
        "Emergency protocols",
        "Coordination with receiving parties"
      ]
    },
    {
      icon: <ShieldAlert className="w-12 h-12" />,
      title: "Armed Security",
      description: "Our armed security personnel provide an enhanced level of protection for high-risk environments, valuable assets, and VIP protection. All personnel are licensed and extensively trained in firearms handling and safety.",
      features: [
        "Licensed armed guards",
        "Advanced threat assessment",
        "High-value asset protection",
        "Executive protection",
        "Specialized training",
        "Risk management protocols"
      ]
    },
    {
      icon: <Building className="w-12 h-12" />,
      title: "Commercial Security",
      description: "Our commercial security services are tailored to protect businesses, offices, and commercial properties. We develop comprehensive security plans based on your specific needs and risk assessment.",
      features: [
        "Access control systems",
        "CCTV monitoring",
        "Perimeter security",
        "Employee and visitor management",
        "Asset protection",
        "Emergency response planning"
      ]
    },
    {
      icon: <Store className="w-12 h-12" />,
      title: "Retail Security",
      description: "Our retail security solutions help prevent shoplifting, employee theft, and other security incidents in retail environments. We provide both uniformed and plain-clothes security personnel.",
      features: [
        "Visible deterrence",
        "Loss prevention",
        "Shoplifter apprehension",
        "Employee theft prevention",
        "Customer service-oriented security",
        "Emergency response"
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-navy-900 text-white relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/4553035/pexels-photo-4553035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          }}
        ></div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy-900/80"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Security <span className="text-gold-500">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We provide comprehensive security solutions tailored to your specific needs.
              Our trained personnel and advanced protocols ensure the highest level of protection.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services List */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                <div className="p-8">
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 bg-navy-800 rounded-lg flex items-center justify-center mr-4 text-gold-500 flex-shrink-0">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-navy-900">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <h4 className="text-lg font-semibold text-navy-900 mb-4">Key Features:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="mt-1 mr-2 text-green-600">•</div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Industries We Serve */}
      <section className="py-16 bg-navy-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-gold-500 font-semibold mb-2 inline-block">Industries</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industries We Serve
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our security solutions are tailored to meet the unique needs of various industries.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-navy-700/50 p-6 rounded-lg border border-navy-600 text-center transform transition-transform duration-300 hover:scale-105">
              <Building className="w-12 h-12 text-gold-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Corporate Offices</h3>
            </div>
            
            <div className="bg-navy-700/50 p-6 rounded-lg border border-navy-600 text-center transform transition-transform duration-300 hover:scale-105">
              <Store className="w-12 h-12 text-gold-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Retail & Malls</h3>
            </div>
            
            <div className="bg-navy-700/50 p-6 rounded-lg border border-navy-600 text-center transform transition-transform duration-300 hover:scale-105">
              <Factory className="w-12 h-12 text-gold-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Industrial Facilities</h3>
            </div>
            
            <div className="bg-navy-700/50 p-6 rounded-lg border border-navy-600 text-center transform transition-transform duration-300 hover:scale-105">
              <Building2 className="w-12 h-12 text-gold-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Banks & ATMs</h3>
            </div>
            
            <div className="bg-navy-700/50 p-6 rounded-lg border border-navy-600 text-center transform transition-transform duration-300 hover:scale-105">
              <Home className="w-12 h-12 text-gold-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Residential Complexes</h3>
            </div>
            
            <div className="bg-navy-700/50 p-6 rounded-lg border border-navy-600 text-center transform transition-transform duration-300 hover:scale-105">
              <Users className="w-12 h-12 text-gold-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Events & Venues</h3>
            </div>
            
            <div className="bg-navy-700/50 p-6 rounded-lg border border-navy-600 text-center transform transition-transform duration-300 hover:scale-105">
              <Shield className="w-12 h-12 text-gold-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Educational Institutions</h3>
            </div>
            
            <div className="bg-navy-700/50 p-6 rounded-lg border border-navy-600 text-center transform transition-transform duration-300 hover:scale-105">
              <ShieldAlert className="w-12 h-12 text-gold-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">High-Value Transportation</h3>
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
                Need a Customized Security Solution?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact us today to discuss your specific security requirements and get a personalized quote.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-8 py-3 rounded-md transition-all duration-300"
                >
                  Contact Us
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

export default ServicesPage;