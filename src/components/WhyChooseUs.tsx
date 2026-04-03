import { Shield, Video, Clock, Heart, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const points = [
  {
    icon: <Shield size={22} />,
    title: "Thoroughly Vetted Team",
    desc: "Every member undergoes background checks and professional verification. Only truly passionate pet-lovers join us."
  },
  {
    icon: <Video size={22} />,
    title: "Transparent Updates",
    desc: "We keep you informed with video calls, photos, and real-time updates so you always know how your pet is doing."
  },
  {
    icon: <Clock size={22} />,
    title: "Always Available",
    desc: "Your pet's needs don't follow a schedule, and neither do we. Whether it's urgent or planned, we're here."
  },
  {
    icon: <Heart size={22} />,
    title: "Relationship-Focused Care",
    desc: "Our goal is not just to treat pets but to build lasting, family-like relationships with every pet parent."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="section whychoose-section">
      <div className="container">
        <div className="whychoose-grid">

          <div className="animate-left">
            <div className="section-pill mb-6">
              <span className="dot" /> Quality Care
            </div>
            <h2 className="mb-4">Why <span className="gradient-text">Choose DD's MaxxPet Clinic?</span></h2>
            <p className="text-muted mb-8" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
              At DD's MaxxPet Clinic, we combine decades of expertise, passionate professionals, and genuine love for animals to deliver an experience that consistently exceeds expectations.
            </p>

            <div className="whychoose-points">
              {points.map((pt, idx) => (
                <div key={idx} className="whychoose-point">
                  <div className="whychoose-point-icon">
                    {pt.icon}
                  </div>
                  <div>
                    <h3>{pt.title}</h3>
                    <p>{pt.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link to="/contact-us" className="btn btn-primary">
                Book a Consultation
              </Link>
            </div>
          </div>

          <div className="whychoose-image-col animate-right delay-200">
            <div className="whychoose-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80"
                alt="Veterinarian with dog"
              />
            </div>
            <div className="whychoose-award">
              <div className="whychoose-award-icon">
                <Award size={24} />
              </div>
              <div>
                <h4>Lifetime Achievement Award</h4>
                <p>Delhi Veterinary Association, 2016</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
