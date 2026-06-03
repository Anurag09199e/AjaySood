import { Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import CTABanner from '../components/CTABanner';
import doctorImg from '../image/hero_section.png';
import SEO from '../components/Shared/SEO';

const ServicesPage = () => {
  return (
    <div>
      <SEO
        title="Professional Veterinary Services | Dog & Cat Clinic  Preet Vihar, Delhi"
        description="Explore the wide range of professional veterinary services at Dog & Cat Clinic , Preet Vihar, Delhi, from routine checkups and vaccinations to advanced surgeries."
        canonical="/services"
      />
      {/* Page Hero */}
      <section className="inner-page-hero" style={{
        backgroundImage: `
          linear-gradient(135deg, rgba(200, 155, 60, 0.82) 0%, rgba(200, 155, 60,0.75) 50%, rgba(26, 26, 26, 0.85) 100%),
          url(${doctorImg})
        `,
      }}>
        {/* Decorative pattern overlay */}
        <div className="inner-hero-pattern" />

        <div className="container inner-hero-content animate-fade-in">
          {/* Breadcrumb */}
          <div className="inner-hero-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Treatments & Services</span>
          </div>

          {/* Icon badge */}
          <div className="inner-hero-icon-badge">
            <Stethoscope size={22} />
          </div>

          <h1 className="inner-hero-title">
            Treatments &amp; <span>Services</span>
          </h1>
          <p className="inner-hero-subtitle">
            Comprehensive veterinary care across all major specialties —<br />
            from preventive medicine to complex surgery.
          </p>

          {/* Stats strip */}
          <div className="inner-hero-stats">
            <div className="inner-hero-stat">
              <strong>20+</strong>
              <span>Specialties</span>
            </div>
            <div className="inner-hero-stat-divider" />
            <div className="inner-hero-stat">
              <strong>15+</strong>
              <span>Years Experience</span>
            </div>
            <div className="inner-hero-stat-divider" />
            <div className="inner-hero-stat">
              <strong>5,000+</strong>
              <span>Pets Treated</span>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <CTABanner />
    </div>
  );
};

export default ServicesPage;
