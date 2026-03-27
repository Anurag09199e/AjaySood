import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const SurgeryHero = () => {
  return (
    <section className="grooming-hero-wrapper" style={{
      background: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)',
      paddingBottom: '3rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        <div className="grooming-hero-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'center'
        }}>
          <div className="grooming-hero-content animate-fade-in">
            <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.2, color: '#1a1a1a', marginBottom: '1.5rem' }}>
              Advanced Pet <span style={{ color: '#349181' }}>Surgery</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#4a4a4a', marginBottom: '2.5rem', lineHeight: 1.6 }}>
              Expert surgical procedures with modern facilities and gentle recovery protocols.
            </p>
            <Link to="/contact-us" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem', borderRadius: '50px', background: '#0a192f', color: 'white', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
              Book Appointment <ArrowRight size={18} />
            </Link>

            <div className="grooming-hero-features">
              <div className="grooming-feature-card">
                <CheckCircle2 size={30} color="#e63946" style={{ margin: '0 auto 0.5rem' }} />
                <p style={{ fontSize: '0.9rem', fontWeight: 600, color: '#333', margin: 0 }}>Modern Operation Theatre</p>
              </div>
              <div className="grooming-feature-card">
                <CheckCircle2 size={30} color="#e63946" style={{ margin: '0 auto 0.5rem' }} />
                <p style={{ fontSize: '0.9rem', fontWeight: 600, color: '#333', margin: 0 }}>Safe Anaesthesia</p>
              </div>
              <div className="grooming-feature-card">
                <CheckCircle2 size={30} color="#e63946" style={{ margin: '0 auto 0.5rem' }} />
                <p style={{ fontSize: '0.9rem', fontWeight: 600, color: '#333', margin: 0 }}>Fast Recovery</p>
              </div>
            </div>
          </div>

          <div className="grooming-hero-image-wrapper animate-fade-in delay-200" style={{ position: 'relative' }}>
            <img
              src="https://images.unsplash.com/photo-1584813470613-5b1c1cad3d69?auto=format&fit=crop&w=800&q=80"
              alt="Pet Surgery"
              style={{ width: '100%', height: 'auto', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', objectFit: 'cover', aspectRatio: '4/3' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurgeryHero;
