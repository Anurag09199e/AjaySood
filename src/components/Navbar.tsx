import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location.pathname]);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Treatments & Services' },
    { to: '/doctors', label: 'Our Doctors' },
    { to: '/locations', label: 'Locations' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : 'top'}`}>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src="/logo.png" alt="Dog & Cat Clinic  Logo" style={{ height: '50px', width: 'auto' }} />
          </Link>
        </div>

        <ul className="nav-links">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`nav-link${location.pathname === to ? ' active' : ''}`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/contact-us" className="btn btn-primary nav-cta" style={{ padding: '0.6rem 1.3rem', fontSize: '0.875rem' }}>
              <Phone size={15} />
              Book Appointment
            </Link>
          </li>
        </ul>

        <button
          className="mobile-menu-btn"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(v => !v)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && createPortal(
        <div style={{
          position: 'fixed',
          top: '60px',
          left: 0,
          right: 0,
          bottom: 0,
          height: 'calc(100vh - 60px)',
          backgroundColor: 'rgba(255, 255, 255, 0.75)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          padding: '2rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          zIndex: 2147483647, /* Maximum z-index possible */
          borderTop: '1px solid rgba(255, 255, 255, 0.3)',
          overflowY: 'auto'
        }}>
          {links.map(({ to, label }) => {
            const isActive = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontSize: '1.1rem',
                  padding: '1rem',
                  color: isActive ? 'var(--primary-dark)' : 'var(--text-dark)',
                  fontWeight: isActive ? 700 : 500,
                  background: isActive ? 'var(--primary-glow)' : 'transparent',
                  borderRadius: '8px',
                  display: 'block'
                }}
              >
                {label}
              </Link>
            );
          })}
          <Link
            to="/contact-us"
            className="btn btn-primary"
            style={{ marginTop: '1rem', justifyContent: 'center' }}
            onClick={() => setMenuOpen(false)}
          >
            <Phone size={16} />
            Book Appointment
          </Link>
        </div>,
        document.body
      )}
    </nav>
  );
};

export default Navbar;
