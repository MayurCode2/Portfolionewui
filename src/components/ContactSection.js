import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const socialLinks = [
    { name: 'GitHub', icon: '🐱', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'Instagram', icon: '📸', url: '#' }
  ];

  return (
    <section className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-syncopate mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
                Let's Connect
              </span>
            </h2>
            <p className="text-purple-300/80 text-lg">
              Have a project in mind? Let's create something amazing together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="relative">
              <div className="glass-card rounded-2xl p-8 relative z-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-purple-900/20 rounded-lg px-6 py-4 outline-none transition-all duration-300 border border-purple-500/20 focus:border-purple-500/50 text-white placeholder-purple-300/50"
                    />
                    {focusedField === 'name' && (
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 to-indigo-500/20 animate-pulse -z-10"></div>
                    )}
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-purple-900/20 rounded-lg px-6 py-4 outline-none transition-all duration-300 border border-purple-500/20 focus:border-purple-500/50 text-white placeholder-purple-300/50"
                    />
                    {focusedField === 'email' && (
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 to-indigo-500/20 animate-pulse -z-10"></div>
                    )}
                  </div>

                  <div className="relative">
                    <textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      rows="5"
                      className="w-full bg-purple-900/20 rounded-lg px-6 py-4 outline-none transition-all duration-300 border border-purple-500/20 focus:border-purple-500/50 text-white placeholder-purple-300/50 resize-none"
                    ></textarea>
                    {focusedField === 'message' && (
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 to-indigo-500/20 animate-pulse -z-10"></div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg font-bold text-white hover:opacity-90 transition-all duration-300 relative group"
                  >
                    Send Message
                    <span className="absolute right-6 top-1/2 transform -translate-y-1/2 transition-transform duration-300 group-hover:translate-x-2">
                      →
                    </span>
                  </button>
                </form>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/30 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/30 rounded-full filter blur-3xl"></div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-2xl">
                      📧
                    </div>
                    <div>
                      <p className="text-purple-300/80">Email</p>
                      <p className="text-white">hello@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-2xl">
                      📱
                    </div>
                    <div>
                      <p className="text-purple-300/80">Phone</p>
                      <p className="text-white">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
                  Follow Me
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className="flex items-center space-x-3 p-4 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 transition-all duration-300"
                    >
                      <span className="text-2xl">{social.icon}</span>
                      <span className="text-white">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 