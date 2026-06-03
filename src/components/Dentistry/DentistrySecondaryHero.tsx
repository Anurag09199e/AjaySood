import { Link } from 'react-router-dom';
import { ClipboardList, Stethoscope, BriefcaseMedical } from 'lucide-react';
import dentalHeroImg from '../../image/dental_care.png';
import './DentistrySecondaryHero.css';

const DentistrySecondaryHero = () => {
  return (
    <section className="dsh-section">
      {/* Background Image that fades to white on the left */}
      <div
        className="dsh-bg"
        style={{ backgroundImage: `url(${dentalHeroImg})` }}
      >
        <div className="dsh-bg-gradient"></div>
      </div>

      <div className="container dsh-container">
        <div className="dsh-content-wrapper animate-fade-in">

          <h1 className="dsh-title">
            <span className="dsh-title-green">Pets dental clinic in Faridabad</span>
          </h1>
          <p className='text-bold'>Keep your pet's teeth healthy and breath fresh with professional dental care. We provide dental checkups, teeth cleaning, plaque removal, and oral health treatments to prevent dental diseases and ensure your pet's overall well-being.</p><br />
          <Link to="/contact-us" className="btn btn-primary dsh-btn">
            Book Appointment
          </Link>

          <div className="dsh-feature-cards">

            <div className="dsh-card">
              <div className="dsh-card-icon">
                <ClipboardList size={22} color="#1a1a1a" />
              </div>
              <p>Comprehensive Oral<br />Examination</p>
            </div>

            <div className="dsh-card">
              <div className="dsh-card-icon">
                <BriefcaseMedical size={22} color="#1a1a1a" />
              </div>
              <p>Scaling &amp; Polishing<br />Packages</p>
            </div>

            <div className="dsh-card">
              <div className="dsh-card-icon">
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

export default DentistrySecondaryHero;
