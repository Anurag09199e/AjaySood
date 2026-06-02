import { useState, useEffect } from 'react';
import { ArrowRight, Heart, Stethoscope, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import clinicFrontImg from '../image/hero_section.png';
import clinic1Img from '../image/hero_section.png';
import clinic2Img from '../image/hero_section.png';

// Slider images
const sliderImages = [
  clinicFrontImg,
  clinic1Img,
  clinic2Img,
];

const Hero = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev: number) => (prev + 1) % sliderImages.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const features = [
    { icon: Heart, value: '5k+', label: 'Pets Served', color: 'teal' },
    { icon: Stethoscope, value: 'Multi-Speciality', label: 'Veterinarians', color: 'gold' },
    { icon: Sparkles, value: 'Holistic', label: 'Pet Healthcare', color: 'mint' },
  ];

  return (
    <section id="home" className="hero">
      <div className="hero-bg-shapes" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-content-col">
          <h1 className="hero-title" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', lineHeight: '1.3' }}>
            DD's MaxxPet Clinic <br/><span className="hero-title-accent" style={{ fontSize: 'clamp(1rem, 3vw, 2rem)' }}>Best Pet Clinic in Faridabad</span>
          </h1>
          <p className="hero-desc">
            <strong>DD's MaxxPet Clinic</strong> — fostering compassion and advanced healthcare for pets.<span className="hero-desc-sub">
              Looking for the <span className="hero-desc-accent">Best Pet Clinic in Faridabad</span> ? At DD's MaxxPet Clinic, we provide exceptional veterinary care with a focus on compassion, safety, and advanced treatment. From routine check-ups to specialized care, we ensure your pets stay healthy, happy, and protected at every stage of their life.
            </span>
          </p>

          <Link
            to="/contact-us"
            className="hero-cta"
          >
            Book Appointment <ArrowRight size={16} />
          </Link>
          <div className="hero-features">
            {features.map(({ icon: Icon, value, label, color }) => (
              <div key={label} className={`hero-feature-card hero-feature-card--${color}`}>
                <div className="hero-feature-icon">
                  <Icon size={20} strokeWidth={2} />
                </div>
                <div className="hero-feature-text">
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-visual-col">
          <div className="hero-img-wrap">
            {sliderImages.map((img, idx) => (
              <div
                key={idx}
                className={`hero-slide ${idx === currentIdx ? 'active' : ''}`}
                aria-hidden={idx !== currentIdx}
              >
                <img
                  src={img}
                  alt=""
                  className="hero-slide-bg"
                />
                <img
                  src={img}
                  alt="DD's MaxxPet Clinic"
                  className="hero-slide-main"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default Hero;
