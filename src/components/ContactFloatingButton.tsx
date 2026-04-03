import React, { useState, useEffect, useRef } from 'react';
import { Phone, MessageSquare, X } from 'lucide-react';
import './ContactFloatingButton.css';

const ContactFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

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

  // Phone and WhatsApp details
  const phoneNumber = "91XXXXXXXXXX"; // User to replace with actual number
  const whatsappMessage = "Hello!";

  return (
    <div className="contact-floating-container" ref={containerRef}>
      {/* Small Popup Menu */}
      <div className={`contact-popup-menu ${isOpen ? 'active' : ''}`}>
        <a href={`tel:+${phoneNumber}`} className="contact-option">
          <Phone />
          <span>Call Now</span>
        </a>
        <a 
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`} 
          className="contact-option"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageSquare />
          <span>WhatsApp</span>
        </a>
      </div>

      {/* Main Floating Button */}
      <button 
        className="contact-main-button" 
        onClick={toggleMenu}
        aria-label="Contact support"
      >
        {isOpen ? <X size={28} /> : <Phone size={28} />}
      </button>
    </div>
  );
};

export default ContactFloatingButton;
