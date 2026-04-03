import Hero from '../components/Hero';
import Services from '../components/Services';
import Benefits from '../components/Benefits';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import CTABanner from '../components/CTABanner';
import FAQ from '../components/FAQ';
import Locations from '../components/Locations';
import SEO from '../components/Shared/SEO';

const Home = () => {
  return (
    <>
      <SEO 
        title="DD's MaxxPet Clinic | Best Pet Clinic in Faridabad" 
        description="DD's MaxxPet Clinic provides exceptional veterinary care in Faridabad including vaccination, grooming, surgery, and pathology. Book an appointment today!"
        canonical="/"
      />
      <Hero />
      <Services />
      <Benefits />
      <About />
      <Testimonials />
      <CTABanner />

      <FAQ />
      <Locations />
    </>
  );
};

export default Home;
