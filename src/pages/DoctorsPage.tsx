import { UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import DoctorProfile from '../components/DoctorProfile';
import About from '../components/About';
import CTABanner from '../components/CTABanner';
import doctorImg from "../image/pets-perent-2.png";

const DoctorsPage = () => {
  return (
    <div>
      {/* Page Hero */}
      <section className="inner-page-hero" style={{
        backgroundImage: `
          linear-gradient(135deg, rgba(129, 167, 172, 0.82) 0%, rgba(13,89,73,0.75) 50%, rgba(61, 74, 71, 0.85) 100%),
          url(${doctorImg})
        `,
      }}>
        <div className="inner-hero-pattern" />

        <div className="container inner-hero-content animate-fade-in">
          <div className="inner-hero-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Our Doctors</span>
          </div>

          <div className="inner-hero-icon-badge">
            <UserCheck size={22} />
          </div>

          <h1 className="inner-hero-title">
            Meet Our <span>Expert Doctors</span>
          </h1>
          <p className="inner-hero-subtitle">
            World-class veterinary expertise with decades of passion<br />
            and dedication to animal health and wellbeing.
          </p>

          <div className="inner-hero-stats">
            <div className="inner-hero-stat">
              <strong>15+</strong>
              <span>Years Practice</span>
            </div>
            <div className="inner-hero-stat-divider" />
            <div className="inner-hero-stat">
              <strong>BVSc &amp; AH</strong>
              <span>Qualified</span>
            </div>
            <div className="inner-hero-stat-divider" />
            <div className="inner-hero-stat">
              <strong>Expert</strong>
              <span>Surgeon</span>
            </div>
          </div>
        </div>
      </section>

      <DoctorProfile />
      <About />
      <CTABanner />
    </div>
  );
};

export default DoctorsPage;
