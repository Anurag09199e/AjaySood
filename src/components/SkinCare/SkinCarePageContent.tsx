import SkinCareSecondaryHero from './SkinCareSecondaryHero';
import VaccinationSubHero from '../Vaccination/VaccinationSubHero';
import PricingCard from '../Shared/PricingCard';
import CTABanner from '../CTABanner';
import { ShieldCheck, Droplets, Sparkles } from 'lucide-react';
import skincareDogImg from '../../image/skin-2.png';
import skincareCatImg from '../../image/skin-3.png';
import '../../pages/GroomingPage.css';
import './SkinCare.css';

const dogPlans = [
  {
    title: 'Basic Skin Check',
    description: 'Essential skin health screening.',
    features: ['Skin Examination', 'Flea & Tick Check', 'Basic Medicated Bath', 'Vet Consultation']
  },
  {
    title: 'Allergy Care',
    description: 'Targeted allergy & irritation relief.',
    features: ['Allergy Diagnosis', 'Medicated Treatment', 'Coat Conditioning', 'Follow-up Visit'],
    isPopular: true
  },
  {
    title: 'Premium Skin Therapy',
    description: 'Full dermatology & coat wellness.',
    features: ['Allergy Care Package', 'Infection Prevention', 'Tick Control Program', 'Nutrition Guidance']
  }
];

const catPlans = [
  {
    title: 'Basic Skin Check',
    description: 'Essential feline skin screening.',
    features: ['Skin Examination', 'Flea & Tick Check', 'Gentle Medicated Bath', 'Vet Consultation']
  },
  {
    title: 'Allergy Care',
    description: 'Targeted cats allergy & irritation.',
    features: ['Allergy Diagnosis', 'Medicated Treatment', 'Coat Conditioning', 'Follow-up Visit'],
    isPopular: true
  },
  {
    title: 'Premium Skin Therapy',
    description: 'Full feline dermatology wellness.',
    features: ['Allergy Care Package', 'Infection Prevention', 'Flea Control Program', 'Dietary Guidance']
  }
];

const SkinCarePageContent = () => {
  return (
    <div className="grooming-page-root">
      <SkinCareSecondaryHero />

      <VaccinationSubHero
        titleLine1="Complete Protection"
        titleLine2="Dog Skin Care"
        description="Skin conditions in dogs can range from allergies and infections to tick infestations and coat deterioration. Our expert dermatology team provides targeted treatments to restore your dog's skin health and comfort."
        image={skincareDogImg}
        imageLeft={true}
        buttonText="Book Dog Skin Care"
        features={[
          { icon: <ShieldCheck size={22} color="#1a1a1a" />, title: "Allergy &amp; Infection<br/>Treatment" },
          { icon: <Droplets size={22} color="#1a1a1a" />, title: "Tick &amp; Flea<br/>Control" },
          { icon: <Sparkles size={22} color="#1a1a1a" />, title: "Medicated Bath<br/>&amp; Coat Care" }
        ]}
      />

      <div className="container" style={{ paddingBottom: '5rem' }}>
        <div className="skincare-plans-wrapper">
          {dogPlans.map((plan, idx) => (
            <PricingCard key={idx} {...plan} />
          ))}
        </div>
      </div>

      <VaccinationSubHero
        titleLine1="Cats Skin Care"
        titleLine2="in Faridabad"
        description="Cats are prone to sensitive skin, fungal infections, and stress-induced dermatitis. Our gentle, specialized feline skin care protocols ensure your cat's coat stays lustrous and irritation-free throughout all life stages."
        image={skincareCatImg}
        imageLeft={false}
        buttonText="Book Cat Skin Care"
        features={[
          { icon: <ShieldCheck size={22} color="#1a1a1a" />, title: "Skin Allergy<br/>Treatment" },
          { icon: <Droplets size={22} color="#1a1a1a" />, title: "Flea &amp; Mite<br/>Control" },
          { icon: <Sparkles size={22} color="#1a1a1a" />, title: "Coat Hygiene<br/>&amp; Shine" }
        ]}
      />

      <div className="container" style={{ paddingBottom: '5rem' }}>
        <div className="skincare-plans-wrapper">
          {catPlans.map((plan, idx) => (
            <PricingCard key={idx} {...plan} />
          ))}
        </div>
      </div>

      <CTABanner />
    </div>
  );
};

export default SkinCarePageContent;
