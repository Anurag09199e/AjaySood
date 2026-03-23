import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesList = [
  {
    slug: "parenting-counselling",
    category: "Counselling",
    title: "Parenting Counselling",
    desc: "Expert guidance to help you build a loving bond with your new pet from day one.",
    image: "src/assets/image/perent.jpeg"
  },
  {
    slug: "vaccination",
    category: "Preventative",
    title: "Vaccination",
    desc: "Complete vaccination programs to protect your pet from dangerous and life-threatening diseases.",
    image: "src/assets/image/vaccinations.jpg"
  },
  {
    slug: "grooming",
    category: "Grooming",
    title: "Pet Grooming",
    desc: "From soothing baths to nail trimming — we make sure your pet looks and feels their best.",
    image: "src/assets/image/pet Grooming.jpeg"
  },
  {
    slug: "dentistry",
    category: "Medical",
    title: "Dentistry",
    desc: "Complete dental care to keep your pet's teeth strong, breath fresh, and gums healthy.",
    image: "src/assets/image/Dental.webp"
  },
  {
    slug: "pet-store",
    category: "Retail",
    title: "Pet Store",
    desc: "A wide range of premium pet foods, accessories, toys, and healthcare products to keep your pet happy and healthy.",
    image: "src/assets/image/store.jpeg"
  },
  {
    slug: "surgery",
    category: "Medical",
    title: "Surgery",
    desc: "Expert surgical procedures with modern facilities and gentle, stress-free recovery protocols.",
    image: "src/assets/image/surgury.jpg"
  },
  {
    slug: "pathology",
    category: "Diagnostics",
    title: "Pathological Laboratory",
    desc: "Advanced diagnostics to detect and address health concerns before they become serious.",
    image: "src/assets/image/lab.jpeg"
  },
  {
    slug: "skin-care",
    category: "Dermatology",
    title: "Skin Care",
    desc: "Advanced skin care treatments for pets including allergy treatment, grooming support, and skin health management",
    image: "src/assets/image/skincare.png"
  },
];

const Services = () => {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-header animate-fade-in">
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
