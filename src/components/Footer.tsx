import { Instagram, Facebook, MapPin, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/maxxpet-logo.JPG';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logoImg} alt="DD's MaxxPet Clinic Logo" style={{ height: '40px', width: 'auto' }} />
            </div>
            <p>
              Your trusted partner in pet health. We provide expert veterinary care with compassion and dedication in Faridabad.
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
              <a href="#">Surgery</a>
              <a href="#">Vaccination</a>
              <a href="#">Pet Grooming</a>
              <a href="#">Dentistry</a>
              <a href="#">Lab Diagnostics</a>
              <a href="#">Pet Parenting</a>
            </div>
          </div>

          {/* Contact */}
          <div className="footer-col footer-contact">
            <h5>Contact Us</h5>
            <a href="https://maps.google.com/?q=Maxx+Pet+Clinic+Faridabad" target="_blank" rel="noopener noreferrer">
              <MapPin size={16} />
              Clinic site -3, Main market, Sector 17 Rd, near Dristi eye centre, Sector 17, Faridabad, Haryana 121002
            </a>
            <a href="tel:+918800756268">
              <Phone size={16} />
              +91 88007 56268
            </a>
            <a href="#" style={{ cursor: 'default', pointerEvents: 'none' }}>
              <Clock size={16} />
              Mon-Sat: 10AM–8PM
            </a>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} DD's MaxxPet Clinic. All rights reserved.
            <span> · </span>
            Made with ❤️ for every pet parent in Faridabad.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
