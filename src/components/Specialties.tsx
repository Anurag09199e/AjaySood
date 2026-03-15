import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const specialtiesList = [
  { title: "Cancer Care",         slug: "cancer-care",         image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80" },
  { title: "Cardiology",          slug: "cardiology",          image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=600&q=80" },
  { title: "Orthopaedics",        slug: "orthopaedics",        image: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=600&q=80" },
  { title: "Minimally Invasive",  slug: "minimally-invasive",  image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=600&q=80" },
  { title: "Ophthalmology",       slug: "ophthalmology",       image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=600&q=80" },
  { title: "Neurology",           slug: "neurology",           image: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?auto=format&fit=crop&w=600&q=80" },
  { title: "Exotic Pets",         slug: "exotic-pets",         image: "https://images.unsplash.com/photo-1591160690555-5debfba71a80?auto=format&fit=crop&w=600&q=80" },
  { title: "Dental Care",         slug: "dental-care",         image: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=600&q=80" },
  { title: "Physiotherapy",       slug: "physiotherapy",       image: "https://images.unsplash.com/photo-1596710104445-b4618e478eb0?auto=format&fit=crop&w=600&q=80" },
];

const Specialties = () => {
  return (
    <section id="specialties" className="section bg-white">
      <div className="container">
        <div className="section-header animate-fade-in">
          <div className="section-pill">
            <span className="dot" /> Advanced Care
          </div>
          <h2>Our <span className="gradient-text">Specialties</span></h2>
          <p className="text-muted mt-4">
            State-of-the-art care across all disciplines of veterinary medicine.
            Click any specialty to learn more.
          </p>
        </div>

        <div className="specialties-grid">
          {specialtiesList.map((spec, idx) => (
            <Link
              to={`/specialties/${spec.slug}`}
              key={idx}
              className={`specialty-card-v2 animate-scale delay-${(idx % 4 + 1) * 100}`}
            >
              <img src={spec.image} alt={spec.title} />
              <div className="specialty-card-v2-overlay">
                <h3 className="specialty-card-v2-title">{spec.title}</h3>
                <span className="specialty-card-v2-cta">
                  Learn More <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
