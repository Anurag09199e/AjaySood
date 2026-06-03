import { Instagram, Facebook, MapPin, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/logo.png" alt="Dog & Cat Clinic  Logo" style={{ height: '40px', width: 'auto' }} />
            </div>
            <p>
              Your trusted partner in pet health. We provide expert veterinary care with compassion and dedication in Preet Vihar, Delhi.
            </p>
            <div className="footer-social">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Facebook">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h5>Quick Links</h5>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/doctors">Our Doctors</Link>
              <Link to="/locations">Locations</Link>
              <Link to="/contact-us">Contact</Link>
            </div>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h5>Services</h5>
            <div className="footer-links">
              <Link to="/services/surgery">Surgery</Link>
              <Link to="/services/vaccination">Vaccination</Link>
              <Link to="/services/grooming">Pet Grooming</Link>
              <Link to="/services/dentistry">Dentistry</Link>
              <Link to="/services/pathology">Lab Diagnostics</Link>
              <Link to="/services/parenting-counselling">Pet Parenting</Link>
            </div>
          </div>

          {/* Contact */}
          <div className="footer-col footer-contact">
            <h5>Contact Us</h5>
            <a href="https://maps.google.com/?q=Maxx+Pet+Clinic+Faridabad" target="_blank" rel="noopener noreferrer">
              <MapPin size={16} />
              B/717, Aditya Complex, Preet Vihar, Delhi-110092
            </a>
            <a href="tel:+919810755225">
              <Phone size={16} />
              +919810755225
            </a>
            <a href="#" style={{ cursor: 'default', pointerEvents: 'none' }}>
              <Clock size={16} />
              Mon-Sun: 10AM–8PM
            </a>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Dog & Cat Clinic. All rights reserved.
            <span> · </span>
            <Link to="/privacy-policy" style={{ textDecoration: 'underline' }}>Privacy Policy</Link>
            <span> · </span>
            <Link to="/terms-and-conditions" style={{ textDecoration: 'underline' }}>Terms & Conditions</Link>
            <span> · </span>
            Made with ❤️ for every pet parent in Faridabad.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
