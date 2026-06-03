import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import doctorImg from '../image/ajaysood.jpg';

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <div className="about-grid-v2">

          {/* LEFT: Image & Credentials */}
          <div className="about-img-stack animate-left">
            <div className="about-img-primary" style={{ width: "500px", height: "350px", objectFit: "cover", marginLeft: "50px" }}>
              <img
                src={doctorImg}
                alt="Dr. Ajay Sood"

              />
            </div>

            <div className="about-credentials">
              <h5>Professional Expertise</h5>
              <div className="credential-item">
                <div className="credential-dot" />
                <span>Senior Veterinary Surgeon</span>
              </div>
              <div className="credential-item">
                <div className="credential-dot" />
                <span>Small Animal Specialist</span>
              </div>
              <div style={{ marginTop: '0.75rem' }}>
                <Link to="/doctors" className="service-card-v2-link" style={{ fontSize: '0.85rem' }}>
                  View Full Profile <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="about-content-v2 animate-right delay-200">
            <div className="section-pill mb-6">
              <span className="dot" /> Our Founder
            </div>
            <h2 className="mb-4">
              <span className="gradient-text"> Dr. Ajay Sood</span>
            </h2>

            <p className="about-bio">
              Dog and Cat clinic was started by Dr Ajay Sood in 1993. Dr Sood holds a veterinary degree from College of veterinary science Kerala. We started with one handyman and kept on increasing the strength of staff with the increase of patients. All pet companions deserve compassionate veterinary care. We are Dog and Cat Clinic, Preet Vihar - a specialized small animal surgery and pet clinic at B/717, Aditya Complex, Preet Vihar, Delhi-110092. We are passionate about providing the best pet care to your furry friends. Apart from the veterinary services we also have a pet store. We keep all kind of pet accessories and pet food from a variety of brands.
            </p>

            <div className="about-dr-stats">
              <div className="about-dr-stat-card">
                <strong className="about-dr-stat-num">15+</strong>
                <span className="about-dr-stat-label">Years Experience</span>
              </div>
              <div className="about-dr-stat-card">
                <strong className="about-dr-stat-num">5000+</strong>
                <span className="about-dr-stat-label">Successful Cases</span>
              </div>
              <div className="about-dr-stat-card">
                <strong className="about-dr-stat-num">Trusted</strong>
                <span className="about-dr-stat-label">By Pet Parents</span>
              </div>
            </div>

            <div className="about-expertise">
              <h5>Areas of Expertise</h5>
              <div className="expertise-tags">
                <span className="expertise-tag">Surgery</span>
                <span className="expertise-tag">Diagnostics</span>
                <span className="expertise-tag">Internal Medicine</span>
                <span className="expertise-tag">Grooming</span>
              </div>
            </div>

            <div className="mt-8">
              <Link to="/contact-us" className="btn btn-primary">
                Meet Dr. Dheeraj <ArrowRight size={17} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
