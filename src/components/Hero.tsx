import { useState, useEffect } from 'react';
import { ArrowRight, Heart, Stethoscope, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import clinicFrontImg from '../assets/clinic-front.webp';

// Slider images
const sliderImages = [
  clinicFrontImg,
  'src/assets/clinic-front.webp',
  'src/assets/clinic.jpeg',

];

const Hero = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIdx((prev) => (prev + 1) % sliderImages.length);
        setIsTransitioning(false);
      }, 500); // Wait for fade out
    }, 10000);

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
          <h1 className="hero-title">
            Your Love, <span className="hero-title-accent">Our Care</span>
          </h1>
          <p className="hero-desc">
            DD's MaxxPet Clinic — fostering compassion and{' '}
            <span className="hero-desc-accent">advanced healthcare for pets</span>{' '}
            and <span className="hero-desc-accent">happiness for pet parents</span>.
            <h4 className='font-bold'>Best pet Clinc in Faridabad</h4>
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
            <img
              src={sliderImages[currentIdx]}
              alt="DD's MaxxPet Clinic"
              className={isTransitioning ? 'fade-out' : 'fade-in'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};


export default Hero;
