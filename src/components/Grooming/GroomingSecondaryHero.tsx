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
            <span className="grsh-title-pink">Pet Grooming in Preet Vihar, Delhi is More Than Just Styling</span>
          </h1>

          <p className='text-bold'>Pamper your furry companion with our premium grooming and spa services. From refreshing baths and stylish trims to nail care and skin treatments, we ensure your pet enjoys a safe, relaxing, and enjoyable grooming experience. 🐾✨</p><br />
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
