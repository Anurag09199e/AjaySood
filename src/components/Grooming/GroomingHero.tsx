
import { Scissors, Sparkles, Heart } from 'lucide-react';
import groomingHeroImg from '../../image/grooming-1.png';

const GroomingHero = () => {
  return (
    <section className="inner-page-hero grooming-hero-wrapper" style={{
      backgroundImage: `linear-gradient(135deg, rgba(6, 44, 36, 0.85) 0%, rgba(13, 89, 73, 0.78) 50%, rgba(6, 44, 36, 0.88) 100%), url(${groomingHeroImg})`
    }}>
      <div className="inner-hero-pattern" />
      <div className="container inner-hero-content animate-fade-in">
        <div className="inner-hero-breadcrumb">
          <span>Home</span><span>/</span><span>Services</span><span>/</span><span>Pet Grooming</span>
        </div>

        <div className="inner-hero-icon-badge">
          <Scissors size={22} />
        </div>

        <h1 className="inner-hero-title">Pet <span>Grooming</span></h1>
        <p className="inner-hero-subtitle">
          Keep your pets clean, healthy, and happy with our premium grooming and spa services.
        </p>

        <div className="grooming-hero-features animate-fade-in delay-200">
          <div className="grooming-feature-card">
            <div className="icon-box icon-box-teal mb-4 mx-auto" style={{ width: '48px', height: '48px' }}>
              <Scissors size={24} />
            </div>
            <h4>Expert Styling</h4>
            <p className="text-muted" style={{ fontSize: '0.85rem' }}>Breed-specific cuts & styling</p>
          </div>
          <div className="grooming-feature-card">
            <div className="icon-box icon-box-teal mb-4 mx-auto" style={{ width: '48px', height: '48px' }}>
              <Sparkles size={24} />
            </div>
            <h4>Hygienic Baths</h4>
            <p className="text-muted" style={{ fontSize: '0.85rem' }}>Deep cleansing & flea control</p>
          </div>
          <div className="grooming-feature-card">
            <div className="icon-box icon-box-teal mb-4 mx-auto" style={{ width: '48px', height: '48px' }}>
              <Heart size={24} />
            </div>
            <h4>Gentle Care</h4>
            <p className="text-muted" style={{ fontSize: '0.85rem' }}>Stress-free handling protocols</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroomingHero;
