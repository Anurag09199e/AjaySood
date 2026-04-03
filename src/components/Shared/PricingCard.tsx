import { Check } from 'lucide-react';
import './PricingCard.css';

import { Link } from 'react-router-dom';

interface PricingCardProps {
  title: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const PricingCard = ({ title, description, features, isPopular = false }: PricingCardProps) => {
  return (
    <div className={`pricing-card ${isPopular ? 'popular' : ''}`}>
      {isPopular && <div className="popular-badge">Most Popular</div>}
      <h3 className="pricing-title">{title}</h3>
      <div className="pricing-divider" />

      <p className="pricing-desc">{description}</p>
      <ul className="pricing-features">
        {features.map((feature, i) => (
          <li key={i}>
            <Check size={18} className="feat-icon" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link to="/contact-us" className={`btn ${isPopular ? 'btn-primary' : 'btn-outline'} w-full mt-auto`}>
        Book Appointment
      </Link>
    </div>
  );
};

export default PricingCard;
