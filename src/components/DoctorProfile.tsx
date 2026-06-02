import { Award, ShieldCheck, Microscope, HeartPulse } from 'lucide-react';
import doctorImg from '../image/about_us.png';

const capacities = [
  "Senior Veterinary Consultant & Surgeon",
  "Member - Small Animal Veterinary Association",
  "Expert in Surgical & Medical Management",
  "Consultant for Critical Care & Emergencies",
  "Active Member of Veterinary Practitioners Association"
];

const forums = [
  "Advanced Surgical Techniques in Companion Animals",
  "Modern Diagnostics & Pathological Excellence",
  "Veterinary Internal Medicine & Geriatric Care"
];

const problems = [
  "Orthopaedic Issues & Surgeries",
  "Critical Care & Life-threatening Emergencies",
  "Renal Failure & Chronic Kidney Disease",
  "Complex Pathological Diagnoses",
  "Geriatric Pet Wellness & Aging Issues",
  "Advanced Dental Diseases"
];

const DoctorProfile = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="section-header animate-fade-in">
          <span className="section-subtitle">Lead Veterinarian</span>
          <h2>Dr. <span className="gradient-text">Dheeraj Gaur</span></h2>
        </div>

        <div className="grid-2" style={{ gap: '4rem', alignItems: 'start' }}>
          {/* Left Column - Image & Quick Stats */}
          <div className="animate-fade-in">
            <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow)', marginBottom: '3rem' }}>
              <img
                src={doctorImg}
                alt="Dr. Dheeraj Gaur"
                style={{ width: '100%', height: '500px', display: 'block' }}
              />
            </div>

            <div className="glass-panel" style={{ padding: '2rem' }}>
              <h3 style={{ color: 'var(--secondary)', marginBottom: '1.5rem' }}>Doctor's Benefits & Expertise</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <Award size={24} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>15+ Years</strong> of surgical & medical experience. Expert in small animal medicine.</span>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <Microscope size={24} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Advanced Diagnostics:</strong> Expert in complex pathological cases and imaging.</span>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <ShieldCheck size={24} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Trusted Care:</strong> Dedicated to providing the highest standard of veterinary ethics.</span>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <HeartPulse size={24} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Compassionate:</strong> Known for a gentle approach with nervous pets and concerned parents.</span>
                </li>
                <h4 style={{ color: 'var(--secondary)', marginBottom: '1.2rem' }}>Prominent Contributions</h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', paddingLeft: '1.5rem', borderLeft: '4px solid var(--accent)' }}>
                  {forums.map((forum, idx) => (
                    <li key={idx} className="text-muted" style={{ fontSize: '1rem' }}>{forum}</li>
                  ))}
                </ul>
              </ul>
            </div>
          </div>

          {/* Right Column - Detailed Profile */}
          <div className="animate-fade-in delay-200">
            <h3 style={{ color: 'var(--secondary)', marginBottom: '1rem', fontSize: '1.8rem' }}>About Dr. Dheeraj Gaur</h3>
            <p className="mb-4 text-muted" style={{ fontSize: '1.05rem' }}>
              Dr. Dhiraj Gaur (BVSc & AH) graduated from HAU, Hisar (HR) in the year 2012. He worked with Friendicoes-SECA (Delhi) for about 6m where got basic small animal experience.
              Dr. Dhiraj worked with Max Petz (formerly MaxVets) Hospital-Delhi for about 9.5 yrs where he expertized in different diagnostics skill, procedures and critical care. During this tenure, he did advance training in derma, gastrointestinal diseases and soft tissue surgery from Madras-Vet. University, Chennai.
              Now his experience, skill & dedication benefiting pet lovers & owners of Faridabad for last 5 yrs.
            </p>

            <h4 style={{ color: 'var(--secondary)', marginTop: '2.5rem', marginBottom: '1.2rem' }}>Problems & Medical Cases Expertly Handled</h4>
            <div className="grid-2" style={{ gap: '1rem', marginBottom: '2.5rem' }}>
              {problems.map((prob, idx) => (
                <div key={idx} style={{ background: 'white', padding: '1.2rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--card-border)', display: 'flex', alignItems: 'center', gap: '0.8rem', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--primary)', flexShrink: 0 }}></div>
                  <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-color)' }}>{prob}</span>
                </div>
              ))}
            </div>

            <h4 style={{ color: 'var(--secondary)', marginBottom: '1.2rem' }}>Consulting Capacities & Memberships</h4>
            <ul className="mb-8" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', paddingLeft: '1.5rem', borderLeft: '4px solid var(--primary)' }}>
              {capacities.map((cap, idx) => (
                <li key={idx} className="text-muted" style={{ fontSize: '1rem' }}>{cap}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorProfile;
