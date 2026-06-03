import { Link } from 'react-router-dom';
import { ReactNode } from 'react';
import './VaccinationSubHero.css';

interface FeatureCard {
  icon: ReactNode;
  title: string;
}

interface VaccinationSubHeroProps {
  titleLine1: string;
  titleLine2: string;
  image: string;
  imageLeft: boolean;
  buttonText: string;
  features: FeatureCard[];
  description?: string;
}

const VaccinationSubHero = ({ titleLine1, titleLine2, image, imageLeft, buttonText, features, description }: VaccinationSubHeroProps) => {
  return (
    <section className="vsub-section">
      <div className={`container vsub-container ${imageLeft ? 'vsub-row' : 'vsub-row-reverse'}`}>
        
        {/* Image Column */}
        <div className="vsub-image-col">
          <img src={image} alt={titleLine2} className="vsub-image" loading="lazy" />
        </div>

        {/* Text Column */}
        <div className="vsub-text-col animate-fade-in">
          
          <h2 className="vsub-title">
            <span className="vsub-title-pink">{titleLine1}</span>
            {titleLine2 && <br />}
            {titleLine2 && <span className="vsub-title-dark">{titleLine2}</span>}
          </h2>

          {description && <p className="vsub-desc">{description}</p>}

          <Link to="/contact-us" className="btn btn-primary vsub-btn">
            {buttonText}
          </Link>

          <div className="vsub-feature-cards">
            {features.map((feat, idx) => (
              <div className="vsub-card" key={idx}>
                <div className="vsub-card-icon">
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

export default VaccinationSubHero;
