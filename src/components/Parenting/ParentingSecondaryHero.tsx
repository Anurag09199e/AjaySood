import { Link } from 'react-router-dom';
import { ClipboardList, Stethoscope, BriefcaseMedical } from 'lucide-react';
import parentingHeroImg from '../../image/pets-perent-3.png';
import './ParentingSecondaryHero.css';

const ParentingSecondaryHero = () => {
  return (
    <section className="prsh-section">
      <div
        className="prsh-bg"
        style={{ backgroundImage: `url(${parentingHeroImg})` }}
      >
        <div className="prsh-bg-gradient"></div>
      </div>

      <div className="container prsh-container">
        <div className="prsh-content-wrapper animate-fade-in">

          <h2 className="prsh-title">
            <span className="prsh-title-green">Pets parenting counselling in Faridabad</span>
          </h2>
          <p className='text-bold'>Expert guidance to help you build a loving, structured bond with your pet — from potty training to behavioral counselling and socialization</p><br />
          <Link to="/contact-us" className="btn prsh-btn">
            Book Appointment
          </Link>

          <div className="prsh-feature-cards">

            <div className="prsh-card">
              <div className="prsh-card-icon">
                <ClipboardList size={22} color="#1a1a1a" />
              </div>
              <p>Behavioural<br />Analysis</p>
            </div>

            <div className="prsh-card">
              <div className="prsh-card-icon">
                <BriefcaseMedical size={22} color="#1a1a1a" />
              </div>
              <p>Puppy<br />Socialisation</p>
            </div>

            <div className="prsh-card">
              <div className="prsh-card-icon">
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

export default ParentingSecondaryHero;