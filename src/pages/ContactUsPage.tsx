import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import doctorImg from "../image/pets-perent-3.png";
import SEO from '../components/Shared/SEO';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    petName: '',
    petType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare WhatsApp message
    const whatsappNumber = '918800756268';
    const text = `*New Appointment Request*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Pet Name:* ${formData.petName || 'N/A'}%0A` +
      `*Pet Type:* ${formData.petType || 'N/A'}%0A` +
      `*Message:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    // Simulate success feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', phone: '', email: '', petName: '', petType: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-page animate-fade-in">
      <SEO 
        title="Contact Us | DD's MaxxPet Clinic Sector 17 Faridabad" 
        description="Contact DD's MaxxPet Clinic in Faridabad today. Book an appointment, ask our experts a question, or find our phone number and address for any pet emergency."
        canonical="/contact-us"
      />
      {/* Hero */}
      <section className="inner-page-hero" style={{
        backgroundImage: `
          linear-gradient(135deg, rgba(129, 167, 172, 0.82) 0%, rgba(13,89,73,0.75) 50%, rgba(61, 74, 71, 0.85) 100%),
          url(${doctorImg})
        `,
      }}>
        <div className="inner-hero-pattern" />
        <div className="container inner-hero-content animate-fade-in">
          <div className="inner-hero-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Contact Us</span>
          </div>
          <div className="inner-hero-icon-badge">
            <MessageCircle size={22} />
          </div>
          <h1 className="inner-hero-title">
            We're Here for <span>You &amp; Your Pet</span>
          </h1>
          <p className="inner-hero-subtitle">
            Book an appointment, ask a question, or find your nearest clinic.<br />
            Our expert team is always ready to help.
          </p>
          <div className="inner-hero-stats">
            <div className="inner-hero-stat">
              <strong>1</strong>
              <span>Clinic Location</span>
            </div>
            <div className="inner-hero-stat-divider" />
            <div className="inner-hero-stat">
              <strong>Professional</strong>
              <span>Expert Care</span>
            </div>
            <div className="inner-hero-stat-divider" />
            <div className="inner-hero-stat">
              <strong>Fast</strong>
              <span>Response</span>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <div className="container">
        <div className="contact-info-row">
          <div className="contact-info-card-v2">
            <div className="contact-info-icon">
              <Phone size={24} />
            </div>
            <h4>Call Us</h4>
            <p><strong>Phone:</strong> 088007 56268</p>
            <p style={{ marginTop: '0.5rem', color: 'var(--primary)', fontWeight: 600, fontSize: '0.82rem' }}>
              Available 10 AM – 8 PM
            </p>
          </div>
          <div className="contact-info-card-v2">
            <div className="contact-info-icon">
              <MapPin size={24} />
            </div>
            <h4>Visit Our Clinic</h4>
            <p><strong>DD's MaxxPet Clinic:</strong> Clinic site -3, Main market, Sector 17 Rd, near Dristi eye centre, Sector 17, Faridabad, Haryana 121002</p>
          </div>
          <div className="contact-info-card-v2">
            <div className="contact-info-icon">
              <Mail size={24} />
            </div>
            <h4>Email Us</h4>
            <p>contact@maxxpetclinic.com</p>
            <p style={{ marginTop: '0.5rem', color: 'var(--primary)', fontWeight: 600, fontSize: '0.82rem' }}>
              Usually reply within 24 hours
            </p>
          </div>
        </div>

        {/* Form + Sidebar */}
        <div className="contact-form-row">
          <div className="contact-form-wrap">
            <h3>Book an Appointment</h3>
            <p className="form-desc">Fill out the form below and our team will get back to you within 24 hours to confirm your appointment.</p>

            {submitSuccess ? (
              <div className="form-success" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1.5rem' }}>
                <CheckCircle2 size={24} style={{ flexShrink: 0 }} />
                <span>
                  <strong>Appointment request sent!</strong><br />
                  We'll call you within 24 hours to confirm. Thank you for choosing DD's MaxxPet Clinic.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-grid-2">
                  <div className="form-field">
                    <label htmlFor="name">Your Name *</label>
                    <input id="name" name="name" type="text" required placeholder="Full name" value={formData.name} onChange={handleChange} />
                  </div>
                  <div className="form-field">
                    <label htmlFor="phone">Phone Number *</label>
                    <input id="phone" name="phone" type="tel" required placeholder="+91 98765 43210" value={formData.phone} onChange={handleChange} />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="email">Email Address</label>
                  <input id="email" name="email" type="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} />
                </div>

                <div className="form-grid-2">
                  <div className="form-field">
                    <label htmlFor="petName">Pet's Name</label>
                    <input id="petName" name="petName" type="text" placeholder="e.g. Bruno" value={formData.petName} onChange={handleChange} />
                  </div>
                  <div className="form-field">
                    <label htmlFor="petType">Type of Pet</label>
                    <select id="petType" name="petType" value={formData.petType} onChange={handleChange}>
                      <option value="">Select...</option>
                      <option>Dog</option>
                      <option>Cat</option>
                      <option>Bird</option>
                      <option>Rabbit</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="message">Message / Describe the Issue</label>
                  <textarea id="message" name="message" rows={5} placeholder="How can we help your pet today?" value={formData.message} onChange={handleChange} />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1.1rem', fontSize: '1rem', marginTop: '0.5rem' }} disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : <><Send size={17} /> Send Message</>}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="contact-sidebar">
            <div className="clinic-card">
              <div className="clinic-card-header">
                <MapPin size={18} />
                <h4>DD's MaxxPet Clinic</h4>
              </div>
              <div className="clinic-card-body">
                <div className="clinic-info-row">
                  <MapPin size={16} className="clinic-info-icon" />
                  <p>Clinic site -3, Main market, Sector 17 Rd, near Dristi eye centre, Sector 17, Faridabad, Haryana 121002</p>
                </div>
                <div className="clinic-info-row">
                  <Phone size={16} className="clinic-info-icon" />
                  <p>+91 88007 56268</p>
                </div>
                <div className="clinic-info-row">
                  <Clock size={16} className="clinic-info-icon" />
                  <p><strong>Mon-Sun:</strong> 10:00 AM – 8:00 PM</p>
                </div>
              </div>
            </div>

            <div style={{ background: 'var(--primary-glow)', border: '1px solid var(--border-teal)', borderRadius: 'var(--r-lg)', padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🐾</div>
              <h5 style={{ color: 'var(--primary-dark)', marginBottom: '0.4rem', fontSize: '0.95rem' }}>Need Help? Call Us</h5>
              <a href="tel:+918800756268" style={{ display: 'block', fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)', marginTop: '0.5rem' }}>
                +91 88007 56268
              </a>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>Available during clinic hours</p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div style={{ borderRadius: 'var(--r-xl)', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: 'var(--shadow)', margin: '3rem 0', height: '420px' }}>
          <iframe
            src="https://maps.google.com/maps?q=Maxx%20Pet%20Clinic%20Sector%2017%20Faridabad&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="DD's MaxxPet Clinic Map"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
