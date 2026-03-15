import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import DoctorsPage from './pages/DoctorsPage';
import LocationsPage from './pages/LocationsPage';
import ContactUsPage from './pages/ContactUsPage';
import SpecialtyPage from './pages/SpecialtyPage';
import ServiceDetailsPage from './pages/ServiceDetailsPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/doctors" element={<DoctorsPage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/services/:slug" element={<ServiceDetailsPage />} />
            <Route path="/specialties/:slug" element={<SpecialtyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
