import GroomingSecondaryHero from './GroomingSecondaryHero';
import VaccinationSubHero from '../Vaccination/VaccinationSubHero';
import PricingCard from '../Shared/PricingCard';
import CTABanner from '../CTABanner';
import { Scissors, Sparkles, Heart } from 'lucide-react';
import dogGroomingImg from '../../image/dog_grooming_service.png';
import catGroomingImg from '../../image/cat_grooming_service.png';
import '../../pages/GroomingPage.css';
import './Grooming.css';

const dogPlans = [
  {
    title: "Basic Grooming",
    price: "₹999",
    description: "Essential bathing and hygiene care.",
    features: ["Bath & Blow Dry", "Nail Trimming", "Ear Cleaning", "De-shedding"]
  },
  {
    title: "Standard Style",
    price: "₹1,499",
    description: "Professional cleaning with expert haircut.",
    features: ["Basic + Haircut", "Hygiene Clip", "Paw Pad Care", "Flea Bath"],
    isPopular: true
  },
  {
    title: "Premium Spa",
    price: "₹2,499",
    description: "Ultimate luxury for your dog's shine.",
    features: ["Standard + Aromatherapy", "Teeth Brushing", "Body Massage", "Aromatic Deodorant"]
  }
];

const catPlans = [
  {
    title: "Standard Feline",
    price: "₹1,299",
    description: "Safe and gentle feline hygiene.",
    features: ["Bath & Gentle Drying", "Nail Clipping", "Ear Hygiene", "Eye Cleaning"]
  },
  {
    title: "Luxury Feline",
    price: "₹1,999",
    description: "Premium styling for your elegant cat.",
    features: ["Standard + Coat Styling", "Mat Removal", "Scented Cologne", "Relaxation Treatment"],
    isPopular: true
  },
  {
    title: "Ultra Cat Spa",
    price: "₹2,999",
    description: "Complete skin and coat wellness.",
    features: ["Luxury + Deep Mask", "Paw Care", "Dental Cleaning", "Expert Skin Analysis"]
  }
];

const GroomingPageContent = () => {
  return (
    <div className="grooming-page-root">
      <GroomingSecondaryHero />

      <VaccinationSubHero
        titleLine1="The Best Choice for"
        titleLine2="Dog Grooming"
        description="Our dog grooming service includes a full range of treatments to keep your pup looking and feeling great. From professional haircuts and breed-specific styling to gentle baths, we handle your pet with the utmost care."
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
        titleLine1="Safe and Stress-Free"
        titleLine2="Cat Grooming"
        description="Grooming is essential for feline health. Our cat grooming service features stress-free handling and gentle techniques, ensuring your cat leaves our salon feeling relaxed, revitalized, and perfectly clean."
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
