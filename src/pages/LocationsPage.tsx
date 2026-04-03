import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Locations from '../components/Locations';
import CTABanner from '../components/CTABanner';
import SEO from '../components/Shared/SEO';

const LocationsPage = () => {
  return (
    <div>
      <SEO 
        title="Our Clinic Location | DD's MaxxPet Clinic Sector 17 Faridabad" 
        description="Visit DD's MaxxPet Clinic in the heart of Faridabad. Find our clinic location in Sector 17, check our operating hours, and get directions for your next visit."
        canonical="/locations"
      />
      {/* Page Hero */}
      <section className="inner-page-hero" style={{
        backgroundImage: `
          linear-gradient(135deg, rgba(6,44,36,0.80) 0%, rgba(13,89,73,0.70) 60%, rgba(6,50,40,0.85) 100%),
          url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1920&q=80')
        `,
      }}>
        <div className="inner-hero-pattern" />

        <div className="container inner-hero-content animate-fade-in">
          <div className="inner-hero-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Locations</span>
          </div>

          <div className="inner-hero-icon-badge">
            <MapPin size={22} />
          </div>

          <h1 className="inner-hero-title">
            Our Clinic <span>Location</span>
          </h1>
          <p className="inner-hero-subtitle">
            A conveniently located clinic in the heart of Faridabad,<br />
            ready to serve you and your beloved pet.
          </p>

          <div className="inner-hero-stats">
            <div className="inner-hero-stat">
              <strong>1</strong>
              <span>Clinic Location</span>
            </div>
            <div className="inner-hero-stat-divider" />
            <div className="inner-hero-stat">
              <strong>Sector 17</strong>
              <span>Faridabad</span>
            </div>
            <div className="inner-hero-stat-divider" />
            <div className="inner-hero-stat">
              <strong>Open</strong>
              <span>Mon - Sat</span>
            </div>
          </div>
        </div>
      </section>

      <Locations />
      <CTABanner />
    </div>
  );
};

export default LocationsPage;
