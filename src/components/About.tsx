import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import doctorImg from '../image/about_us.png';

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <div className="about-grid-v2">

          {/* LEFT: Image & Credentials */}
          <div className="about-img-stack animate-left">
            <div className="about-img-primary" style={{ width: "500px", height: "500px", objectFit: "cover", marginLeft: "50px" }}>
              <img
                src={doctorImg}
                alt="Dr. Dheeraj Gaur"

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
              Dr. <span className="gradient-text">Dheeraj Gaur</span>
            </h2>

            <p className="about-bio">
              Founded on the principles of excellence and empathy, DD's MaxxPet Clinic has become a leading name in veterinary care in Faridabad. Dr. Dheeraj Gaur brings over 15 years of surgical and medical experience, dedicated to providing the highest standard of health and wellness for your animal companions.
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
