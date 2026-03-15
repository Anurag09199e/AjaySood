import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesList = [
  {
    slug: "surgery",
    category: "Medical",
    title: "Surgery",
    desc: "Expert surgical procedures with modern facilities and gentle, stress-free recovery protocols.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "vaccination",
    category: "Preventative",
    title: "Vaccination",
    desc: "Complete vaccination programs to protect your pet from dangerous and life-threatening diseases.",
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcaeab6?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "pathology",
    category: "Diagnostics",
    title: "Pathological Laboratory",
    desc: "Advanced diagnostics to detect and address health concerns before they become serious.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "grooming",
    category: "Grooming",
    title: "Pet Grooming",
    desc: "From soothing baths to nail trimming — we make sure your pet looks and feels their best.",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "dentistry",
    category: "Medical",
    title: "Dentistry",
    desc: "Complete dental care to keep your pet's teeth strong, breath fresh, and gums healthy.",
    image: "https://images.unsplash.com/photo-1596710104445-b4618e478eb0?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "wellness",
    category: "Wellness",
    title: "Pet Wellness",
    desc: "Regular wellness check-ups to keep your furry friend energetic, active, and full of life.",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "parenting-counselling",
    category: "Counselling",
    title: "Parenting Counselling",
    desc: "Expert guidance to help you build a loving bond with your new pet from day one.",
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "nutrition-counselling",
    category: "Counselling",
    title: "Nutrition Counselling",
    desc: "Customized dietary plans tailored to your pet's unique breed, age, and health needs.",
    image: "https://images.unsplash.com/photo-1596710104445-b4618e478eb0?auto=format&fit=crop&w=600&q=80"
  }
];

const Services = () => {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-header animate-fade-in">
          <div className="section-pill">
            <span className="dot" /> Our Specialties
          </div>
          <h2>Treatments & <span className="gradient-text">Services</span></h2>
          <p className="text-muted mt-4">Comprehensive veterinary care tailored to your pet's unique needs — from preventative medicine to advanced surgery.</p>
        </div>

        <div className="grid-4">
          {servicesList.map((srv, idx) => (
            <div
              key={idx}
              className={`service-card-v2 animate-fade-in delay-${(idx % 4 + 1) * 100}`}
            >
              <div style={{ overflow: 'hidden', height: '190px' }}>
                <img src={srv.image} alt={srv.title} className="service-card-v2-img" />
              </div>
              <div className="service-card-v2-body">
                <span className="service-card-v2-cat">{srv.category}</span>
                <h3 className="service-card-v2-title">{srv.title}</h3>
                <p className="service-card-v2-desc">{srv.desc}</p>
                <Link to={`/services/${srv.slug}`} className="service-card-v2-link">
                  Learn More <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/services" className="btn btn-outline">
            View All Services <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
