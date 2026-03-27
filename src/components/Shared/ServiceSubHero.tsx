import { Link } from 'react-router-dom';
import { ReactNode } from 'react';
import './ServiceSubHero.css';

interface FeatureCard {
  icon: ReactNode;
  title: string;
}

interface ServiceSubHeroProps {
  titleLine1: string;
  titleLine2: string;
  image: string;
  imageLeft: boolean;
  buttonText: string;
  features: FeatureCard[];
  description?: string;
}

const ServiceSubHero = ({ titleLine1, titleLine2, image, imageLeft, buttonText, features, description }: ServiceSubHeroProps) => {
  return (
    <section className="ssub-section">
      <div className={`container ssub-container ${imageLeft ? 'ssub-row' : 'ssub-row-reverse'}`}>

        {/* Image Column */}
        <div className="ssub-image-col">
          <img src={image} alt={titleLine2} className="ssub-image" loading="lazy" />
        </div>

        {/* Text Column */}
        <div className="ssub-text-col animate-fade-in">

          <h2 className="ssub-title">
            <span className="ssub-title-pink">{titleLine1}</span><br />
            <span className="ssub-title-dark">{titleLine2}</span>
          </h2>

          {description && <p className="ssub-desc">{description}</p>}

          <Link to="/contact-us" className="btn ssub-btn">
            {buttonText}
          </Link>

          <div className="ssub-feature-cards">
            {features.map((feat, idx) => (
              <div className="ssub-card" key={idx}>
                <div className="ssub-card-icon">
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

export default ServiceSubHero;
