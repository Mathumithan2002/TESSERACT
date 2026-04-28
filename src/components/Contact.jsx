import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Envelope, Phone, MapPin, MapTrifold } from '@phosphor-icons/react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert('Thank you! Your message has been sent to Tesseract.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-light">
      <div className="container">
        <div className="grid grid-2">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Get In Touch</h2>
            <p>Ready to start your next project? Contact us for a consultation and let's build the future together.</p>
            <div className="info-items">
              <div className="info-item">
                <Envelope size={24} />
                <span>hello@tesseract.tech</span>
              </div>
              <div className="info-item">
                <Phone size={24} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="info-item">
                <MapPin size={24} />
                <span>Silicon Valley, CA</span>
              </div>
            </div>
            <div className="map-placeholder glass">
              <MapTrifold size={40} />
              <span>Map View</span>
            </div>
          </motion.div>
          <motion.div 
            className="contact-form-wrapper glass"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Your Name" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="your@email.com" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  placeholder="How can we help?" 
                  required 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
