import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronDown, ChevronUp, Phone } from 'lucide-react';
import { useState } from 'react';
import servicesData from '../data/servicesData';
import CTABanner from '../components/CTABanner';

const ServiceDetailsPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return <Navigate to="/services" replace />;

  const related = servicesData.filter((s) => service.relatedSlugs.includes(s.slug));

  return (
    <div>
      {/* ── SEO Meta (title set via document.title for SPA) ── */}
      {(() => { document.title = `${service.title} | DD's MaxxPet Clinic Veterinary Centre`; return null; })()}

      {/* ─────────────────── HERO ─────────────────── */}
      <section
        className="inner-page-hero specialty-hero"
        style={{ backgroundImage: `${service.heroGradient}, url('${service.heroImage}')` }}
      >
        <div className="inner-hero-pattern" />
        <div className="container inner-hero-content animate-fade-in">
          <div className="inner-hero-breadcrumb">
            <Link to="/">Home</Link><span>/</span>
            <Link to="/services">Treatments &amp; Services</Link><span>/</span>
            <span>{service.shortTitle}</span>
          </div>

          <div className="inner-hero-icon-badge specialty-hero-icon">
            <span style={{ fontSize: '1.4rem', lineHeight: 1 }}>{service.icon}</span>
          </div>

          <div className="specialty-hero-cat">{service.category}</div>

          <h1 className="inner-hero-title">{service.title}</h1>
          <p className="inner-hero-subtitle">{service.tagline}</p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1.75rem' }}>
            <Link to="/contact-us" className="btn btn-primary" style={{ background: 'white', color: 'var(--primary-dark)', fontWeight: 700 }}>
              Book Consultation <ArrowRight size={17} />
            </Link>
            <a href="tel:+918800756268" className="btn" style={{ background: 'rgba(255,255,255,0.15)', border: '1.5px solid rgba(255,255,255,0.5)', color: 'white' }}>
              <Phone size={16} /> Call Now
            </a>
          </div>

          <div className="inner-hero-stats" style={{ marginTop: '2.25rem' }}>
            {service.stats.map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                {i > 0 && <div className="inner-hero-stat-divider" key={`div-${i}`} />}
                <div className="inner-hero-stat">
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── INTRO ─────────────────── */}
      <section className="section specialty-intro-section">
        <div className="container specialty-intro-grid">
          <div className="specialty-intro-text">
            <div className="section-pill">
              <span className="dot" /> Overview
            </div>
            <h2 className="mt-4">About <span className="gradient-text">{service.shortTitle}</span></h2>
            <p className="text-muted mt-4" style={{ lineHeight: 1.85, fontSize: '1.05rem' }}>
              {service.intro}
            </p>
            <div className="specialty-intro-actions mt-6">
              <Link to="/contact-us" className="btn btn-primary">
                Book an Appointment <ArrowRight size={17} />
              </Link>
              <a href="tel:+918800756268" className="btn btn-outline">
                <Phone size={16} /> +91 88007 56268
              </a>
            </div>
          </div>

          {/* Conditions Treated */}
          <div className="specialty-conditions-box">
            <h3 className="specialty-conditions-title">Areas of Focus</h3>
            <div className="specialty-conditions-list">
              {service.conditions.map((c, i) => (
                <div className="specialty-condition-item" key={i}>
                  <div className="specialty-condition-icon"><CheckCircle2 size={18} /></div>
                  <div>
                    <strong>{c.name}</strong>
                    <p>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── PROCEDURES ─────────────────── */}
      <section className="section specialty-procedures-section">
        <div className="container">
          <div className="section-header animate-fade-in">
            <div className="section-pill">
              <span className="dot" /> What We Do
            </div>
            <h2>Process &amp; <span className="gradient-text">Treatments</span></h2>
            <p className="text-muted mt-4">A full range of {service.shortTitle.toLowerCase()} solutions under one roof in Faridabad.</p>
          </div>

          <div className="specialty-procedures-grid">
            {service.procedures.map((proc, i) => (
              <div className="specialty-procedure-card animate-fade-in" key={i}
                style={{ animationDelay: `${i * 60}ms` }}>
                <span className="specialty-procedure-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="specialty-procedure-name">{proc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── WHY CHOOSE US ─────────────────── */}
      <section className="section specialty-why-section">
        <div className="container">
          <div className="section-header animate-fade-in">
            <div className="section-pill">
              <span className="dot" /> Our Edge
            </div>
            <h2>Why Choose <span className="gradient-text">DD's MaxxPet Clinic</span></h2>
          </div>

          <div className="specialty-why-grid">
            {service.whyChooseUs.map((item, i) => (
              <div className={`specialty-why-card animate-fade-in delay-${(i % 4 + 1) * 100}`} key={i}>
                <div className="specialty-why-num">{String(i + 1).padStart(2, '0')}</div>
                <h4>{item.heading}</h4>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── FAQ ─────────────────── */}
      <section className="section specialty-faq-section">
        <div className="container specialty-faq-inner">
          <div className="section-header animate-fade-in" style={{ textAlign: 'left', alignItems: 'flex-start' }}>
            <div className="section-pill">
              <span className="dot" /> Common Questions
            </div>
            <h2 className="mt-4">Frequently Asked <span className="gradient-text">Questions</span></h2>
          </div>

          <div className="specialty-faq-list">
            {service.faqs.map((faq, i) => (
              <div
                className={`specialty-faq-item ${openFaq === i ? 'open' : ''}`}
                key={i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="specialty-faq-q">
                  <span>{faq.q}</span>
                  {openFaq === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
                {openFaq === i && (
                  <div className="specialty-faq-a">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── RELATED SPECIALTIES ─────────────────── */}
      {related.length > 0 && (
        <section className="section specialty-related-section">
          <div className="container">
            <div className="section-header animate-fade-in">
              <div className="section-pill">
                <span className="dot" /> Explore More
              </div>
              <h2>Related <span className="gradient-text">Services</span></h2>
            </div>

            <div className="specialty-related-grid">
              {related.map((rel, i) => (
                <Link
                  to={`/services/${rel.slug}`}
                  className={`specialty-related-card animate-fade-in delay-${(i + 1) * 100}`}
                  key={rel.slug}
                >
                  <div
                    className="specialty-related-img"
                    style={{ backgroundImage: `url('${rel.heroImage}')` }}
                  />
                  <div className="specialty-related-body">
                    <span className="specialty-hero-cat" style={{ marginBottom: '0.4rem' }}>{rel.category}</span>
                    <h4>{rel.shortTitle}</h4>
                    <p>{rel.tagline}</p>
                    <span className="specialty-related-link">Learn More <ArrowRight size={14} /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </div>
  );
};

export default ServiceDetailsPage;
