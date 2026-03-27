import { Link } from 'react-router-dom';
import { ReactNode } from 'react';
import './ServiceHero.css';

export interface FeatureCard {
  icon: ReactNode;
  title: string;
}

interface ServiceHeroProps {
  titleLine1: string;
  titleLine2: string;
  backgroundImage: string;
  features: FeatureCard[];
}

const ServiceHero = ({ titleLine1, titleLine2, backgroundImage, features }: ServiceHeroProps) => {
  return (
    <section className="service-hero-section">
      <div 
        className="service-hero-bg" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="service-hero-bg-gradient"></div>
      </div>

      <div className="container service-hero-container">
        <div className="service-hero-content-wrapper animate-fade-in">
          
          <h2 className="service-hero-title">
            <span className="service-hero-title-pink">{titleLine1}</span><br />
            <span className="service-hero-title-dark">{titleLine2}</span>
          </h2>

          <Link to="/contact-us" className="btn service-hero-btn">
            Book Appointment
          </Link>

          <div className="service-hero-feature-cards">
            {features.map((feat, idx) => (
              <div className="service-hero-card" key={idx}>
                <div className="service-hero-card-icon">
                  {feat.icon}
                </div>
                <p dangerouslySetInnerHTML={{ __html: feat.title }}></p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
