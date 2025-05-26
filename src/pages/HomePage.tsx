import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Users, 
  Briefcase, 
  Building2, 
  Lock, 
  UserCheck, 
  ShieldAlert,
  ArrowRight,
  Clock,
  Award,
  Phone
} from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';

const HomePage: React.FC = () => {
  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Guards",
      description: "Professional security personnel for various establishments and events.",
      features: [
        "Uniformed guards for visible security presence",
        "Access control and surveillance",
        "Emergency response protocols",
        "Customized security plans"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Bouncers",
      description: "Event security specialists for crowd management and VIP protection.",
      features: [
        "Crowd control at events and venues",
        "VIP protection and escort services",
        "Conflict resolution and prevention",
        "Physical security presence"
      ]
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Female Security",
      description: "Trained female security professionals for gender-sensitive situations.",
      features: [
        "Female-specific security needs",
        "Event and personal security",
        "Corporate environments",
        "Female guest screening"
      ]
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "ATM Security",
      description: "Specialized security for ATM locations and cash handling.",
      features: [
        "24/7 monitoring of ATM sites",
        "Deterrence of criminal activity",
        "Quick response to alarms",
        "Coordination with law enforcement"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Rajiv Kumar",
      role: "Operations Manager",
      company: "Pinnacle Mall",
      testimonial: "BIGG-BOSS has transformed our security operations. Their guards are professional, vigilant, and always on time. We've seen a significant reduction in security incidents since hiring them.",
      rating: 5,
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Priya Sharma",
      role: "Event Coordinator",
      company: "Delhi Events Co.",
      testimonial: "We hired BIGG-BOSS bouncers for our high-profile corporate event. Their team was exceptionally professional and handled the crowd with ease. Will definitely use their services again!",
      rating: 4.5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Amit Singh",
      role: "Branch Manager",
      company: "PNB Bank",
      testimonial: "The ATM security services provided by BIGG-BOSS are reliable and effective. Their personnel are well-trained and follow all security protocols diligently. Highly recommended!",
      rating: 5,
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <>
      <HeroSection />
      
      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-gold-500 font-semibold mb-2 inline-block">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Comprehensive Security Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide a wide range of professional security services to meet your specific needs,
              with trained personnel available 24/7.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="inline-flex items-center text-navy-900 font-semibold hover:text-gold-600 transition-colors duration-300"
            >
              View All Services <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-navy-800 text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/5698987/pexels-photo-5698987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <span className="text-gold-500 font-semibold mb-2 inline-block">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Security You Can Trust
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              With years of experience in the security industry, we deliver unmatched protection 
              services backed by trained professionals and cutting-edge protocols.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-navy-700/50 p-6 rounded-lg border border-navy-600 backdrop-blur-sm transform transition-transform duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-gold-500/20 rounded-full flex items-center justify-center mb-4 text-gold-500">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Experienced Team</h3>
              <p className="text-gray-300">
                Our security personnel undergo rigorous training and have years of experience in the field.
              </p>
            </div>
            
            <div className="bg-navy-700/50 p-6 rounded-lg border border-navy-600 backdrop-blur-sm transform transition-transform duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-gold-500/20 rounded-full flex items-center justify-center mb-4 text-gold-500">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Availability</h3>
              <p className="text-gray-300">
                Our services are available round the clock to ensure your security needs are met at all times.
              </p>
            </div>
            
            <div className="bg-navy-700/50 p-6 rounded-lg border border-navy-600 backdrop-blur-sm transform transition-transform duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-gold-500/20 rounded-full flex items-center justify-center mb-4 text-gold-500">
                <ShieldAlert className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quick Response</h3>
              <p className="text-gray-300">
                Our rapid response team is always ready to address any security concerns immediately.
              </p>
            </div>
            
            <div className="bg-navy-700/50 p-6 rounded-lg border border-navy-600 backdrop-blur-sm transform transition-transform duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-gold-500/20 rounded-full flex items-center justify-center mb-4 text-gold-500">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Licensed & Insured</h3>
              <p className="text-gray-300">
                We are fully licensed, insured, and comply with all regulatory requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-gold-500 font-semibold mb-2 inline-block">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about our security services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                testimonial={testimonial.testimonial}
                rating={testimonial.rating}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Enhance Your Security?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Contact us today to discuss your security needs and get a tailored solution for your business or event.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-8 py-3 rounded-md transition-all duration-300"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:8544959750"
                className="bg-transparent hover:bg-white/10 text-white border border-white/30 font-semibold px-8 py-3 rounded-md transition-all duration-300 flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;