import { Link } from 'react-router-dom';
import { ShieldCheck, Droplets, Sparkles } from 'lucide-react';
import skincareHeroImg from '../../image/wellness_exams.png';
import './SkinCareSecondaryHero.css';

const SkinCareSecondaryHero = () => {
  return (
    <section className="scsh-section">
      {/* Background Image that fades to white on the left */}
      <div
        className="scsh-bg"
        style={{ backgroundImage: `url(${skincareHeroImg})` }}
      >
        <div className="scsh-bg-gradient"></div>
      </div>

      <div className="container scsh-container">
        <div className="scsh-content-wrapper animate-fade-in">

          <h1 className="scsh-title">
            <span className="scsh-title-pink">Pets Skin Care</span>
            <span className="scsh-title-dark"> in Preet Vihar, Delhi</span>
          </h1>
          <p className='text-bold'>Skin problems are common in pets, but they can cause significant discomfort and affect their quality of life. At Dog & Cat Clinic , we provide comprehensive dermatological care to diagnose and treat skin conditions effectively.</p><br />
          <Link to="/contact-us" className="btn btn-primary scsh-btn">
            Book Skin Care Service
          </Link>

          <div className="scsh-feature-cards">

            <div className="scsh-card">
              <div className="scsh-card-icon">
                <ShieldCheck size={22} color="#1a1a1a" />
              </div>
              <p>Allergy &amp; Infection<br />Treatment</p>
            </div>

            <div className="scsh-card">
              <div className="scsh-card-icon">
                <Droplets size={22} color="#1a1a1a" />
              </div>
              <p>Medicated<br />Baths</p>
            </div>

            <div className="scsh-card">
              <div className="scsh-card-icon">
                <Sparkles size={22} color="#1a1a1a" />
              </div>
              <p>Coat Health &amp;<br />Hygiene</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default SkinCareSecondaryHero;
