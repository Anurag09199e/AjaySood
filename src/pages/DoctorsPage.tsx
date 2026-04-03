import DoctorProfile from '../components/DoctorProfile';
import CTABanner from '../components/CTABanner';
import doctorImg from "../image/pets-perent-2.png";


const DoctorsPage = () => {
  return (
    <div>
      {/* Page Hero */}
      <section className="inner-page-hero" style={{
        backgroundImage: `
          linear-gradient(135deg, rgba(129, 167, 172, 0.82) 0%, rgba(60, 73, 71, 0.75) 50%, rgba(61, 74, 71, 0.85) 100%),
          url(${doctorImg})
        `,
      }}>
        <div className="inner-hero-pattern" />

        <div className="container inner-hero-content animate-fade-in">

          <h1 className="inner-hero-title">
            Meet Our <span>Expert Doctors</span>
          </h1>
          <p className="inner-hero-subtitle">
            World-class veterinary expertise with decades of passion<br />
            and dedication to animal health and wellbeing.
          </p>

          <div className="inner-hero-stats">
            <div className="inner-hero-stat">
              <span>15+</span>
              <span>Years Practice</span>
            </div>
            <div className="inner-hero-stat-divider" />
            <div className="inner-hero-stat">
              <span>BVSc &amp; AH</span>
              <span>Qualified</span>
            </div>
            <div className="inner-hero-stat-divider" />
            <div className="inner-hero-stat">
              <span>Expert</span>
              <span>Surgeon</span>
            </div>
          </div>
        </div>
      </section>

      <DoctorProfile />
      <CTABanner />
    </div>
  );
};

export default DoctorsPage;
