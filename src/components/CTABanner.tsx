import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';

const CTABanner = () => {
  return (
    <div className="cta-banner">
      <div className="container">
        <div className="cta-inner">
          <div className="cta-text animate-left">
            <p className="overline">Ready to get started?</p>
            <h2>Your Pet Deserves the <br />Best Care Available</h2>
            <p className="sub">
              Join thousands of Faridabad pet parents who trust DD's MaxxPet Clinic for expert veterinary care. Book an appointment online or call us directly.
            </p>
          </div>

          <div className="cta-actions animate-right delay-200">
            <Link to="/contact-us" className="btn btn-accent">
              Book Appointment <ArrowRight size={18} />
            </Link>
            <a href="tel:+918800756268" className="btn btn-ghost">
              <Phone size={17} /> +91 88007 56268
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTABanner;
