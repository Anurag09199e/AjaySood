import { Link } from 'react-router-dom';
import { ClipboardList, Stethoscope, BriefcaseMedical } from 'lucide-react';
import vetWithDogImg from '../../image/vaccination-1.png';
import './VaccinationSecondaryHero.css';

const VaccinationSecondaryHero = () => {
  return (
    <section className="vsh-section">
      {/* Background Image that fades to white on the left */}
      <div
        className="vsh-bg"
        style={{ backgroundImage: `url(${vetWithDogImg})` }}
      >
        <div className="vsh-bg-gradient"></div>
      </div>

      <div className="container vsh-container">
        <div className="vsh-content-wrapper animate-fade-in">

          <h2 className="vsh-title">
            <span className="vsh-title-pink">Pets vaccination in Faridabad</span>

          </h2>
          <p className='text-bold'>As a best pets vaccination clinic in Faridabad, our goal is to provide preventive care that ensures your pets stay protected throughout their lives</p><br />
          <Link to="/contact-us" className="btn vsh-btn">
            Book Appointment
          </Link>

          <div className="vsh-feature-cards">

            <div className="vsh-card">
              <div className="vsh-card-icon">
                <ClipboardList size={22} color="#1a1a1a" />
              </div>
              <p>Comprehensive Pet<br />Vaccination</p>
            </div>

            <div className="vsh-card">
              <div className="vsh-card-icon">
                <BriefcaseMedical size={22} color="#1a1a1a" />
              </div>
              <p>Puppy & Kitten<br />Vaccine Packages</p>
            </div>

            <div className="vsh-card">
              <div className="vsh-card-icon">
                <Stethoscope size={22} color="#1a1a1a" />
              </div>
              <p>FREE Senior Vet<br />Consultation</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default VaccinationSecondaryHero;
