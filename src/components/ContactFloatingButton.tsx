import React, { useState, useEffect, useRef } from 'react';
import { Phone, MessageCircle, X, ChevronRight } from 'lucide-react';
import './ContactFloatingButton.css';

const ContactFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const phoneNumber = "+918800756268" // User to replace with actual number
  const whatsappText = "Hello I want to book service";

  return (
    <div className="contact-floating-wrapper" ref={containerRef}>
      {/* Tooltip */}
      <div className="contact-tooltip">Contact Us</div>

      {/* Main Floating Button */}
      <button
        className="contact-main-button"
        onClick={toggleMenu}
        aria-label="Contact support"
        aria-expanded={isOpen}
      >
        <div className="contact-ripple"></div>
        {isOpen ? <X size={28} /> : <Phone size={28} />}
      </button>

      {/* Popup Menu Card */}
      <div className={`contact-popup-card ${isOpen ? 'open' : ''}`}>
        <div className="contact-popup-header">
          <h3>How can we help?</h3>
          <button
            className="contact-close-btn"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className="contact-options-list">
          {/* Call Option */}
          <a href={`tel:+${phoneNumber}`} className="contact-option-item">
            <div className="contact-option-icon call">
              <Phone size={20} />
            </div>
            <div className="contact-option-text">
              <span className="contact-option-title">Call Now</span>
              <span className="contact-option-desc">Talk to our experts</span>
            </div>
            <ChevronRight size={16} style={{ marginLeft: 'auto', opacity: 0.3 }} />
          </a>

          {/* WhatsApp Option */}
          <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappText)}`}
            className="contact-option-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-option-icon whatsapp">
              <MessageCircle size={20} />
            </div>
            <div className="contact-option-text">
              <span className="contact-option-title">WhatsApp</span>
              <span className="contact-option-desc">Chat with us directly</span>
            </div>
            <ChevronRight size={16} style={{ marginLeft: 'auto', opacity: 0.3 }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactFloatingButton;
