import { Star } from 'lucide-react';

const testimonials = [
  {
    text: "Dr. Gaur is absolutely wonderful with animals. My Golden Retriever Bruno had a complex orthopaedic surgery and the care we received was exceptional. He's back on his feet now — healthier than ever!",
    name: "Priya Sharma",
    pet: "Owner of Bruno (Golden Retriever)",
    initials: "PS",
    rating: 5
  },
  {
    text: "The home grooming service is a game changer! My nervous Persian cat hates clinics, but she was perfectly calm with the DD's MaxxPet Clinic team at home. Professional, punctual, and so gentle.",
    name: "Rahul Mehta",
    pet: "Owner of Mittens (Persian Cat)",
    initials: "RM",
    rating: 5
  },
  {
    text: "We've been coming to DD's MaxxPet Clinic for years. Our family's pets have always been treated here. The trust and continuity of care is unmatched.",
    name: "Sunita Kapoor",
    pet: "Regular client",
    initials: "SK",
    rating: 5
  },
  {
    text: "Quick, professional, and so compassionate. When my Labrador had an emergency, DD's MaxxPet Clinic was available immediately. I can't thank Dr. Gaur and his team enough.",
    name: "Arjun Nair",
    pet: "Owner of Max (Labrador)",
    initials: "AN",
    rating: 5
  },
  {
    text: "The nutrition counselling completely transformed my dog's health. She lost weight, her coat improved, and she's so much more energetic now. Science-backed advice that actually works.",
    name: "Deepika Verma",
    pet: "Owner of Coco (Beagle Mix)",
    initials: "DV",
    rating: 5
  },
  {
    text: "DD's MaxxPet Clinic is the only place I trust for my two cats' vaccinations. The team is knowledgeable, the facility is clean, and they always explain everything clearly. 10/10 every time.",
    name: "Kiran Bhat",
    pet: "Owner of Luna & Oreo",
    initials: "KB",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="section-header animate-fade-in">
          <div className="section-pill">
            <span className="dot" /> What Pet Parents Say
          </div>
          <h2>Trusted by <span style={{ color: 'var(--primary-light)' }}>Thousands</span> of Pet Parents</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: '1rem' }}>
            Hear from the families who trust DD's MaxxPet Clinic with their most beloved companions.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`testimonial-card animate-fade-in delay-${(idx % 3 + 1) * 100}`}
            >
              <div className="testimonial-stars">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" />
                ))}
              </div>
              <div className="testimonial-quote-icon">"</div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar-placeholder">
                  {t.initials}
                </div>
                <div>
                  <div className="testimonial-author-name">{t.name}</div>
                  <div className="testimonial-author-pet">{t.pet}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
