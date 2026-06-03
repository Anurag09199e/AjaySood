import DoctorProfile from '../components/DoctorProfile';
import CTABanner from '../components/CTABanner';
import doctorImg from '../image/about_us.png';
import SEO from '../components/Shared/SEO';


const DoctorsPage = () => {
  return (
    <div>
      <SEO
        title="Meet Our Expert Veterinarians | Dog & Cat Clinic Preet Vihar, Delhi"
        description="Meet the expert veterinary team at Dog & Cat Clinic  in Preet Vihar, Delhi. Our doctors bring decades of experience and passion to ensure your pet's best health."
        canonical="/doctors"
      />
      {/* Page Hero */}
      <section className="inner-page-hero" style={{
        backgroundImage: `
          linear-gradient(135deg, rgba(200, 155, 60, 0.82) 0%, rgba(26, 26, 26, 0.75) 50%, rgba(26, 26, 26, 0.85) 100%),
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
