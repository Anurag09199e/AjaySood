import Hero from '../components/Hero';
import Services from '../components/Services';
import Benefits from '../components/Benefits';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import CTABanner from '../components/CTABanner';
import FAQ from '../components/FAQ';
import Locations from '../components/Locations';

const Home = () => {
  return (
    <>
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
