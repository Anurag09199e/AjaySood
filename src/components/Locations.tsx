import { MapPin, Phone, Clock } from 'lucide-react';

const clinics = [
  {
    name: "Dog & Cat Clinic ",
    address: "B/717, Aditya Complex, Preet Vihar, Delhi-110092 ",
    phone: "088007 56268",
    hours: "10 AM – 8 PM, Mon-Sun",
    mapUrl: "https://maps.google.com/?q=Maxx+Pet+Clinic+Faridabad"
  }
];

const Locations = () => {
  return (
    <section id="locations" className="section locations-section">
      <div className="container">
        <div className="section-header animate-fade-in">
          <div className="section-pill">
            <span className="dot" /> Visit Us
          </div>
          <h2>Our Clinic <span className="gradient-text">Location</span></h2>
          <p className="text-muted mt-4">Visit our conveniently located clinic in Preet Vihar, Delhi, ready to serve you and your pet.</p>
        </div>

        <div className="locations-grid">
          {clinics.map((clinic, idx) => (
            <div key={idx} className={`location-card animate-fade-in delay-${(idx + 1) * 200}`}>
              <div className="location-card-header">
                <div className="location-card-header-icon">
                  <MapPin size={20} />
                </div>
                <h3>{clinic.name}</h3>
              </div>

              <div className="location-card-body">
                <div className="location-info-row">
                  <div className="location-info-icon"><MapPin size={16} /></div>
                  <div className="location-info-text">
                    <div className="location-info-label">Address</div>
                    <div className="location-info-value">{clinic.address}</div>
                  </div>
                </div>

                <div className="location-info-row">
                  <div className="location-info-icon"><Phone size={16} /></div>
                  <div className="location-info-text">
                    <div className="location-info-label">Phone</div>
                    <a href={`tel:${clinic.phone.replace(/\s/g, '')}`} className="location-info-value" style={{ color: 'var(--primary)', fontWeight: 600 }}>
                      {clinic.phone}
                    </a>
                  </div>
                </div>

                <div className="location-info-row">
                  <div className="location-info-icon"><Clock size={16} /></div>
                  <div className="location-info-text">
                    <div className="location-info-label">Hours</div>
                    <div className="location-info-value">{clinic.hours}</div>
                    <div className="location-info-value" style={{ color: 'var(--text-light)', fontWeight: 400 }}>Open 7 Days a week</div>
                  </div>
                </div>

                <div style={{ marginTop: '1.5rem' }}>
                  <a
                    href={clinic.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{ width: '100%', justifyContent: 'center', padding: '0.75rem' }}
                  >
                    <MapPin size={16} /> Get Directions
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Embedded map teaser */}
        <div style={{
          marginTop: '3rem',
          borderRadius: 'var(--r-xl)',
          overflow: 'hidden',
          border: '1px solid var(--border)',
          boxShadow: 'var(--shadow)',
          height: '380px'
        }}>
          <iframe
            title="Dog & Cat Clinic  Location Map"
            src="https://maps.google.com/maps?q=Maxx%20Pet%20Clinic%20Sector%2017%20Faridabad&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0, display: 'block' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Locations;
