import { UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import DoctorProfile from '../components/DoctorProfile';
import About from '../components/About';
import CTABanner from '../components/CTABanner';

const DoctorsPage = () => {
  return (
    <div>
      {/* Page Hero */}
      <section className="inner-page-hero" style={{
        backgroundImage: `
          linear-gradient(135deg, rgba(6,44,36,0.78) 0%, rgba(13,100,80,0.72) 50%, rgba(6,44,36,0.82) 100%),
          url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1920&q=80')
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
