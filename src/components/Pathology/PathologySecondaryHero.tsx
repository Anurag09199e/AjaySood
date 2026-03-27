import { Link } from 'react-router-dom';
import { ClipboardList, Stethoscope, BriefcaseMedical } from 'lucide-react';
import pathologyHeroImg from '../../image/OIP.webp';
import './PathologySecondaryHero.css';

const PathologySecondaryHero = () => {
  return (
    <section className="psh-section">
      <div
        className="psh-bg"
        style={{ backgroundImage: `url(${pathologyHeroImg})` }}
      >
        <div className="psh-bg-gradient"></div>
      </div>

      <div className="container psh-container">
        <div className="psh-content-wrapper animate-fade-in">

          <h2 className="psh-title">
            <span className="psh-title-green">Pets pathological laboratory in Faridabad</span>
          </h2>
          <p className='text-bold'>Advanced in-house diagnostics for fast, accurate results — helping us detect and treat health issues before they become serious</p><br />
          <Link to="/contact-us" className="btn psh-btn">
            Book Appointment
          </Link>

          <div className="psh-feature-cards">

            <div className="psh-card">
              <div className="psh-card-icon">
                <ClipboardList size={22} color="#1a1a1a" />
              </div>
              <p>Complete Blood<br />Count &amp; Analysis</p>
            </div>

            <div className="psh-card">
              <div className="psh-card-icon">
                <BriefcaseMedical size={22} color="#1a1a1a" />
              </div>
              <p>Rapid In-House<br />Testing</p>
            </div>

            <div className="psh-card">
              <div className="psh-card-icon">
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

export default PathologySecondaryHero;
