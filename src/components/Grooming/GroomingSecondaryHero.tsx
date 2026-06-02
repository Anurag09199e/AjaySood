import { Link } from 'react-router-dom';
import { Scissors, Sparkles, Heart } from 'lucide-react';
import groomingHeroImg from '../../image/grooming_spa.png';
import './GroomingSecondaryHero.css';

const GroomingSecondaryHero = () => {
  return (
    <section className="grsh-section">
      {/* Background Image that fades to white on the left */}
      <div
        className="grsh-bg"
        style={{ backgroundImage: `url(${groomingHeroImg})` }}
      >
        <div className="grsh-bg-gradient"></div>
      </div>

      <div className="container grsh-container">
        <div className="grsh-content-wrapper animate-fade-in">

          <h1 className="grsh-title">
            <span className="grsh-title-pink">Pet Grooming in Faridabad is More Than Just Styling</span>
          </h1>

          <p className='text-bold'>At DD's MaxxPet Clinic, we believe that grooming is an essential part of your pet's overall health and well-being. Our professional grooming services go beyond simple haircuts — we provide comprehensive care that keeps your pet clean, comfortable, and happy.</p><br />
          <Link to="/contact-us" className="btn grsh-btn">
            Book Grooming Service
          </Link>

          <div className="grsh-feature-cards">

            <div className="grsh-card">
              <div className="grsh-card-icon">
                <Scissors size={22} color="#1a1a1a" />
              </div>
              <p>Expert Styling &<br />Haircuts</p>
            </div>

            <div className="grsh-card">
              <div className="grsh-card-icon">
                <Sparkles size={22} color="#1a1a1a" />
              </div>
              <p>Hygienic Baths &<br />Blow Dry</p>
            </div>

            <div className="grsh-card">
              <div className="grsh-card-icon">
                <Heart size={22} color="#1a1a1a" />
              </div>
              <p>Nail Trimming &<br />Ear Cleaning</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default GroomingSecondaryHero;
