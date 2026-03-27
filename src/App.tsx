import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import DoctorsPage from './pages/DoctorsPage';
import LocationsPage from './pages/LocationsPage';
import ContactUsPage from './pages/ContactUsPage';
import ServiceDetailsPage from './pages/ServiceDetailsPage';
import DentistryPage from './pages/DentistryPage';
import SkinCarePage from './pages/SkinCarePage';
import SurgeryPage from './pages/SurgeryPage';
import VaccinationPage from './pages/VaccinationPage';
import PathologyPage from './pages/PathologyPage';
import ParentingPage from './pages/ParentingPage';
import GroomingPage from './pages/GroomingPage';
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
            <Route path="/services/dentistry" element={<DentistryPage />} />
            <Route path="/services/skin-care" element={<SkinCarePage />} />
            <Route path="/services/surgery" element={<SurgeryPage />} />
            <Route path="/services/vaccination" element={<VaccinationPage />} />
            <Route path="/services/pathology" element={<PathologyPage />} />
            <Route path="/services/parenting-counselling" element={<ParentingPage />} />
            <Route path="/services/grooming" element={<GroomingPage />} />
            <Route path="/services/:slug" element={<ServiceDetailsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
