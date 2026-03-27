import { Link } from 'react-router-dom';
import { Scissors, Sparkles, Heart } from 'lucide-react';
import groomingHeroImg from '../../image/grooming-1.png';
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

          <h2 className="grsh-title">
            <span className="grsh-title-pink">Professional Grooming for</span><br />
            <span className="grsh-title-dark">Happy & Healthy Pets in Faridabad</span>
          </h2>
          <p className='text-bold'>Our expert groomers provide a gentle and stress-free experience, ensuring your pet looks and feels their absolute best.</p><br />
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
