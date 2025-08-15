import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  Zap,
  Shield,
  DollarSign,
  Clock,
  Leaf,
  Star,
  Home,
  Building,
  Wrench,
  Sun,
  CheckCircle,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-sky-500" />
              <span className="font-bold text-xl text-gray-900">Electra Specs Services</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-sky-500 font-medium">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-sky-500 font-medium">About</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-sky-500 font-medium">Services</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-sky-500 font-medium">Contact</button>
              <a href="tel:0828727978" className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors font-medium">
                Call Now
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-sky-500"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block text-gray-700 hover:text-sky-500 font-medium py-2">Home</button>
              <button onClick={() => scrollToSection('about')} className="block text-gray-700 hover:text-sky-500 font-medium py-2">About</button>
              <button onClick={() => scrollToSection('services')} className="block text-gray-700 hover:text-sky-500 font-medium py-2">Services</button>
              <button onClick={() => scrollToSection('contact')} className="block text-gray-700 hover:text-sky-500 font-medium py-2">Contact</button>
              <a href="tel:0828727978" className="block bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors font-medium text-center">
                Call Now
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
            alt="Electrician working on power board" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your Trusted Partner in <span className="text-sky-400">Electrical Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Professional electrical services for residential, commercial, and industrial clients across Cape Town. 
            Safety, innovation, and excellence in every project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-sky-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-sky-600 transition-all transform hover:scale-105 shadow-lg"
            >
              Request a Free Quote
            </button>
            <a 
              href="tel:0828727978" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all transform hover:scale-105"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Electra Specs Services</h2>
            <div className="w-24 h-1 bg-sky-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Powering Your World with Excellence</h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                With over 15 years of experience in the electrical industry, Electra Specs Services has established itself 
                as Cape Town's premier electrical contractor. We specialize in delivering safe, innovative, and reliable 
                electrical solutions that meet the highest industry standards.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Our comprehensive service coverage spans across Cape Town and surrounding areas, serving residential homeowners, 
                commercial businesses, and industrial property developers with unwavering commitment to safety and quality.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-sky-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">15+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-sky-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Fully Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-sky-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">24/7 Emergency Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-sky-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Eco-Friendly Solutions</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Electrician working on electrical panel" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-sky-500 mx-auto mb-8"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive electrical solutions tailored to meet your specific needs, 
              from residential installations to large-scale commercial projects.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow group">
              <div className="mb-4">
                <Home className="h-12 w-12 text-sky-500 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Residential Electrical Installations</h3>
              <p className="text-gray-600 mb-4">
                Complete home electrical systems, rewiring, panel upgrades, lighting installations, 
                and smart home automation solutions.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• New home wiring</li>
                <li>• Panel upgrades</li>
                <li>• Lighting design</li>
                <li>• Smart home systems</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow group">
              <div className="mb-4">
                <Building className="h-12 w-12 text-sky-500 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Commercial & Industrial Solutions</h3>
              <p className="text-gray-600 mb-4">
                High-voltage systems, industrial machinery wiring, commercial lighting, 
                and power distribution for businesses and industrial facilities.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Industrial wiring</li>
                <li>• Power distribution</li>
                <li>• Motor installations</li>
                <li>• Commercial lighting</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow group">
              <div className="mb-4">
                <Wrench className="h-12 w-12 text-sky-500 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Maintenance & Repairs</h3>
              <p className="text-gray-600 mb-4">
                Emergency repairs, preventive maintenance, troubleshooting, 
                and electrical safety inspections to keep your systems running smoothly.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Emergency repairs</li>
                <li>• Safety inspections</li>
                <li>• Troubleshooting</li>
                <li>• Preventive maintenance</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow group">
              <div className="mb-4">
                <Sun className="h-12 w-12 text-sky-500 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Solar & Energy Efficiency</h3>
              <p className="text-gray-600 mb-4">
                Solar panel installations, energy-efficient lighting solutions, 
                and consultation services to reduce your carbon footprint and energy costs.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Solar installations</li>
                <li>• Energy audits</li>
                <li>• LED conversions</li>
                <li>• Battery storage</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Electra Specs Services?</h2>
            <div className="w-24 h-1 bg-sky-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center group">
              <div className="bg-sky-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Certified & Experienced</h3>
              <p className="text-gray-600 text-sm">
                Fully licensed electricians with extensive training and certifications
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-sky-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Transparent Pricing</h3>
              <p className="text-gray-600 text-sm">
                Upfront quotes with no hidden fees or surprise charges
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-sky-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Emergency Support</h3>
              <p className="text-gray-600 text-sm">
                24/7 emergency electrical services when you need them most
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-sky-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Eco-Friendly Options</h3>
              <p className="text-gray-600 text-sm">
                Sustainable electrical solutions that reduce environmental impact
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-sky-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Satisfaction Guaranteed</h3>
              <p className="text-gray-600 text-sm">
                100% satisfaction guarantee on all our electrical services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-sky-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-sky-500">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Exceptional service! They rewired our entire home and installed a smart home system. 
                Professional, punctual, and the work quality exceeded our expectations."
              </p>
              <div className="font-semibold text-gray-900">Sarah Mitchell</div>
              <div className="text-gray-500 text-sm">Residential Client, Constantia</div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-sky-500">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Reliable and efficient. Electra Specs handled our office building's electrical upgrade seamlessly. 
                Minimal disruption to our business operations."
              </p>
              <div className="font-semibold text-gray-900">David Thompson</div>
              <div className="text-gray-500 text-sm">Commercial Client, Century City</div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-sky-500">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Outstanding solar installation service. From consultation to completion, 
                they delivered exactly what was promised. Our energy bills have dropped significantly!"
              </p>
              <div className="font-semibold text-gray-900">Jennifer Adams</div>
              <div className="text-gray-500 text-sm">Residential Client, Stellenbosch</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-sky-500 mx-auto mb-8"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Ready to start your electrical project? Contact us today for a free consultation and quote.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-sky-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Service Area</h4>
                    <p className="text-gray-300">Cape Town & Surrounds</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-sky-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Phone</h4>
                    <a href="tel:0828727978" className="text-gray-300 hover:text-sky-400 transition-colors">
                      082 8727978
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MessageCircle className="h-6 w-6 text-sky-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">WhatsApp</h4>
                    <a 
                      href="https://wa.me/27828727978" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-sky-400 transition-colors"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-sky-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Email</h4>
                    <a 
                      href="mailto:info@electraspecsservices.co.za" 
                      className="text-gray-300 hover:text-sky-400 transition-colors"
                    >
                      info@electraspecsservices.co.za
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-sky-500 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">Emergency Service</h4>
                <p className="text-sky-100 mb-3">
                  Electrical emergency? We're available 24/7 for urgent repairs and safety issues.
                </p>
                <a 
                  href="tel:0828727978" 
                  className="inline-flex items-center space-x-2 bg-white text-sky-500 px-4 py-2 rounded-lg font-semibold hover:bg-sky-50 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Emergency Line</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Request a Quote</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-sky-500 text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-sky-500 text-white"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-sky-500 text-white"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-sky-500 text-white"
                  >
                    <option value="">Select a service</option>
                    <option value="residential">Residential Installation</option>
                    <option value="commercial">Commercial & Industrial</option>
                    <option value="maintenance">Maintenance & Repairs</option>
                    <option value="solar">Solar & Energy Efficiency</option>
                    <option value="emergency">Emergency Service</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please describe your electrical project or requirements..."
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-sky-500 text-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-sky-500 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-sky-600 transition-colors"
                >
                  Send Quote Request
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-400 mb-4">Or contact us instantly:</p>
                <a
                  href="https://wa.me/27828727978"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Zap className="h-6 w-6 text-sky-500" />
              <span className="font-bold text-lg text-white">Electra Specs Services</span>
            </div>
            <p className="mb-4">
              Professional electrical solutions for Cape Town and surrounding areas.
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <span>Licensed & Insured</span>
              <span>•</span>
              <span>24/7 Emergency Service</span>
              <span>•</span>
              <span>Satisfaction Guaranteed</span>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-700 text-sm">
              © 2024 Electra Specs Services. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;