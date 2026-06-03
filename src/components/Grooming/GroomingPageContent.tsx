import GroomingSecondaryHero from './GroomingSecondaryHero';
import VaccinationSubHero from '../Vaccination/VaccinationSubHero';
import PricingCard from '../Shared/PricingCard';
import CTABanner from '../CTABanner';
import { Scissors, Sparkles, Heart } from 'lucide-react';
import dogGroomingImg from '../../image/grooming_spa.png';
import catGroomingImg from '../../image/grooming_spa.png';
import '../../pages/GroomingPage.css';
import './Grooming.css';

const dogPlans = [
  {
    title: "Basic Grooming",
    description: "Essential bathing and hygiene care.",
    features: ["Bath & Blow Dry", "Nail Trimming", "Ear Cleaning", "De-shedding"]
  },
  {
    title: "Standard Style",
    description: "Professional cleaning with expert haircut.",
    features: ["Basic + Haircut", "Hygiene Clip", "Paw Pad Care", "Flea Bath"],
    isPopular: true
  },
  {
    title: "Premium Spa",
    description: "Ultimate luxury for your dog's shine.",
    features: ["Standard + Aromatherapy", "Teeth Brushing", "Body Massage", "Aromatic Deodorant"]
  }
];

const catPlans = [
  {
    title: "Standard Feline",
    description: "Safe and gentle feline hygiene.",
    features: ["Bath & Gentle Drying", "Nail Clipping", "Ear Hygiene", "Eye Cleaning"]
  },
  {
    title: "Luxury Feline",
    description: "Professional cleaning with expert haircut.",
    features: ["Standard + Coat Styling", "Mat Removal", "Scented Cologne", "Relaxation Treatment"],
    isPopular: true
  },
  {
    title: "Ultra Cat Spa",
    description: "Complete skin and coat wellness.",
    features: ["Luxury + Deep Mask", "Paw Care", "Dental Cleaning", "Expert Skin Analysis"]
  }
];

const GroomingPageContent = () => {
  return (
    <div className="grooming-page-root">
      <GroomingSecondaryHero />

      <VaccinationSubHero
        titleLine1="Best Dogs Grooming "
        titleLine2="in Preet Vihar, Delhi"
        description="Give your dog the care they deserve with our premium grooming services. From refreshing baths and coat trimming to nail clipping and ear cleaning, our experienced groomers ensure your pet stays clean, healthy, comfortable, and happy."
        image={dogGroomingImg}
        imageLeft={true}
        buttonText="Book Dog Grooming"
        features={[
          { icon: <Scissors size={22} color="#1a1a1a" />, title: "Expert Styling &amp;<br/>Haircuts" },
          { icon: <Sparkles size={22} color="#1a1a1a" />, title: "Hygienic Baths &amp;<br/>Conditioning" },
          { icon: <Heart size={22} color="#1a1a1a" />, title: "Nail, Ear &amp;<br/>Genral Hygiene" }
        ]}
      />

      <div className="container" style={{ paddingBottom: '5rem' }}>
        <div className="grooming-plans-grid">
          {dogPlans.map((plan, idx) => (
            <PricingCard key={idx} {...plan} />
          ))}
        </div>
      </div>

      <VaccinationSubHero
        titleLine1="Best Cats Grooming"
        titleLine2="in Preet Vihar, Delhi"
        description="Keep your feline friend clean, healthy, and comfortable with our professional cat grooming services. We provide brushing, bathing, nail trimming, ear cleaning, and coat care tailored to your cat's needs."
        image={catGroomingImg}
        imageLeft={false}
        buttonText="Book Cat Grooming"
        features={[
          { icon: <Scissors size={22} color="#1a1a1a" />, title: "Gentle De-matting<br/>&amp; Styling" },
          { icon: <Sparkles size={22} color="#1a1a1a" />, title: "Sanitary Cleaning<br/>&amp; Hygiene" },
          { icon: <Heart size={22} color="#1a1a1a" />, title: "Low-Stress<br/>Handling" }
        ]}
      />

      <div className="container" style={{ paddingBottom: '5rem' }}>
        <div className="grooming-plans-grid">
          {catPlans.map((plan, idx) => (
            <PricingCard key={idx} {...plan} />
          ))}
        </div>
      </div>

      <CTABanner />
    </div>
  );
};

export default GroomingPageContent;
