import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  ArrowRight
} from 'lucide-react';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-navy-900 text-white relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          }}
        ></div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy-900/80"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact <span className="text-gold-500">Us</span>
            </h1>
            <p className="text-xl text-gray-300">
              Get in touch with our team to discuss your security needs or request a quote.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-8">
                Get in Touch
              </h2>
              
              <p className="text-gray-600 mb-8">
                We're here to address your security concerns and provide tailored solutions for your specific needs. 
                Contact us through any of the following methods or fill out the form, and our team will respond promptly.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-navy-800 rounded-lg flex items-center justify-center mr-4 text-gold-500 flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900 mb-1">Phone</h3>
                    <p className="text-gray-600 mb-1">
                      <a href="tel:8544959750" className="hover:text-gold-600 transition-colors duration-300">
                        8544959750
                      </a>
                    </p>
                    <p className="text-sm text-gray-500">Available 24/7 for emergency requests</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-navy-800 rounded-lg flex items-center justify-center mr-4 text-gold-500 flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900 mb-1">Email</h3>
                    <p className="text-gray-600 mb-1">
                      <a href="mailto:biggbosscommandos1@gmail.com" className="hover:text-gold-600 transition-colors duration-300">
                        biggbosscommandos1@gmail.com
                      </a>
                    </p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-navy-800 rounded-lg flex items-center justify-center mr-4 text-gold-500 flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900 mb-1">Office Location</h3>
                    <p className="text-gray-600 mb-1">
                      Cabin No. 214, Block 3, Oxford Street, Zirakpur - 140603
                    </p>
                    <p className="text-sm text-gray-500">
                      <a 
                        href="https://maps.google.com/?q=Oxford+Street+Zirakpur" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center hover:text-gold-600 transition-colors duration-300"
                      >
                        View on map <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-navy-800 rounded-lg flex items-center justify-center mr-4 text-gold-500 flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900 mb-1">Working Hours</h3>
                    <p className="text-gray-600 mb-1">
                      Open 24/7 for security requirements
                    </p>
                    <p className="text-sm text-gray-500">
                      Office hours: 9:00 AM - 6:00 PM (Monday - Saturday)
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-navy-800 text-white rounded-lg">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Phone className="w-5 h-5 text-gold-500 mr-2" /> 
                  Emergency Response
                </h3>
                <p className="text-gray-300 mb-4">
                  For urgent security needs, call our 24/7 emergency hotline:
                </p>
                <a 
                  href="tel:8544959750" 
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md inline-flex items-center transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  8544959750
                </a>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">
              Our Location
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit our office to discuss your security needs in person.
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px] bg-gray-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.0376771648074!2d76.81690677618393!3d30.710987074562895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feefa6c268b13%3A0xe0a6add65f138d50!2sOxford%20Street%2C%20Zirakpur%2C%20Punjab!5e0!3m2!1sen!2sin!4v1698251625818!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="BIGG-BOSS COMMANDO SECURITY SERVICES Location"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our security services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-navy-900 mb-3">
                  How quickly can you deploy security personnel?
                </h3>
                <p className="text-gray-600">
                  For standard security requests, we can typically deploy personnel within 24-48 hours. 
                  For emergency situations, we offer rapid response services and can deploy guards much faster depending on your location.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-navy-900 mb-3">
                  Are your security guards licensed and insured?
                </h3>
                <p className="text-gray-600">
                  Yes, all our security personnel are properly licensed, insured, and have undergone 
                  thorough background checks and training as per industry regulations.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-navy-900 mb-3">
                  Do you provide security services for one-time events?
                </h3>
                <p className="text-gray-600">
                  Absolutely. We offer flexible security solutions for one-time events of all sizes, from small private 
                  gatherings to large public events. Contact us for a customized quote.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-navy-900 mb-3">
                  What types of training do your security personnel receive?
                </h3>
                <p className="text-gray-600">
                  Our security personnel undergo comprehensive training in areas such as threat assessment, 
                  conflict resolution, emergency response, first aid, customer service, and specific protocols 
                  related to their assigned duties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;