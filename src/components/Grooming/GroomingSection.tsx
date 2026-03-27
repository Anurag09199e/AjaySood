
import { Check } from 'lucide-react';

interface PricingPlan {
  plan: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

interface GroomingSectionProps {
  title: string;
  description: string;
  image: string;
  plans: PricingPlan[];
  reverse?: boolean;
}

const GroomingSectionGrid = ({ title, description, image, plans, reverse }: GroomingSectionProps) => {
  return (
    <section className="grooming-section animate-fade-in">
      <div className="container">
        <div className={`grooming-split-layout ${reverse ? 'image-right' : ''}`}>
          <div className="grooming-image-wrapper animate-left">
            <img src={image} alt={title} className="grooming-section-image" />
          </div>
          <div className="grooming-content animate-right">
            <div className="section-pill">
              <span className="dot"></span> Professional Care
            </div>
            <h2 className="grooming-section-title">{title}</h2>
            <p className="grooming-section-desc">{description}</p>
          </div>
        </div>

        <div className="grooming-plans-wrapper">
          {plans?.map((plan, idx) => (
            <div 
              key={idx} 
              className={`grooming-pricing-card ${plan.isPopular ? 'popular' : ''} animate-fade-in delay-${(idx + 1) * 100}`}
            >
              {plan.isPopular && <div className="popular-badge">MOST POPULAR</div>}
              <h3 className="plan-title">{plan.plan}</h3>
              <div className="plan-price">₹{plan.price}</div>
              <ul className="plan-features">
                {plan.features?.map((feature, fIdx) => (
                  <li key={fIdx}>
                    <Check size={16} className="feature-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`btn ${plan.isPopular ? 'btn-primary' : 'btn-outline'} plan-btn`}>
                Book {plan.plan}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GroomingSectionGrid;
