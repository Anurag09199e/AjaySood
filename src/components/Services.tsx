import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import all images for services
import parentingImg from '../image/pet_nutrition.png';
import vaccinationImg from '../image/vaccination.png';
import groomingImg from '../image/grooming_spa.png';
import dentalImg from '../image/dental_care.png';
import storeImg from '../image/hero_section.png';
import surgeryImg from '../image/surgery.png';
import pathologyImg from '../image/diagnostics.png';
import skinCareImg from '../image/wellness_exams.png';

const servicesList = [
  {
    slug: "parenting-counselling",
    category: "Counselling",
    title: "Pets Consultation in Faridabad",
    desc: "Expert guidance to help you build a loving bond with your new pet from day one.",
    image: parentingImg
  },
  {
    slug: "vaccination",
    category: "Preventative",
    title: "Pets Vaccination in Faridabad",
    desc: "Complete vaccination programs to protect your pet from dangerous and life-threatening diseases.",
    image: vaccinationImg
  },
  {
    slug: "grooming",
    category: "Grooming",
    title: "Pets Grooming in Faridabad",
    desc: "From soothing baths to nail trimming — we make sure your pet looks and feels their best.",
    image: groomingImg
  },
  {
    slug: "dentistry",
    category: "Medical",
    title: "Pets Dental Care in Faridabad",
    desc: "Complete dental care to keep your pet's teeth strong, breath fresh, and gums healthy.",
    image: dentalImg
  },
  {
    slug: "pet-store",
    category: "Retail",
    title: "Pets Shop in Faridabad",
    desc: "A wide range of premium pet foods, accessories, toys, and healthcare products to keep your pet happy and healthy.",
    image: storeImg
  },
  {
    slug: "surgery",
    category: "Medical",
    title: "Pets Surgery in Faridabad",
    desc: "Expert surgical procedures with modern facilities and gentle, stress-free recovery protocols.",
    image: surgeryImg
  },
  {
    slug: "pathology",
    category: "Diagnostics",
    title: "Pets Diagnostic Lab in Faridabad",
    desc: "Advanced diagnostics to detect and address health concerns before they become serious.",
    image: pathologyImg
  },
  {
    slug: "skin-care",
    category: "Dermatology",
    title: "Pets Skin Care in Faridabad",
    desc: "Advanced skin care treatments for pets including allergy treatment, grooming support, and skin health management",
    image: skinCareImg
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
