import VaccinationSecondaryHero from './VaccinationSecondaryHero';
import VaccinationSubHero from './VaccinationSubHero';
import PricingCard from '../Shared/PricingCard';
import CTABanner from '../CTABanner';
import { ClipboardList, Stethoscope, BriefcaseMedical } from 'lucide-react';
import vetWithDogImg from '../../image/vaccination-2.png';
import vetWithCatImg from '../../image/vaccination-3.png';
import '../../pages/GroomingPage.css';
import './Vaccination.css';

const dogPlans = [
  {
    title: 'Basic Puppy',
    description: 'Essential core vaccines.',
    features: ['Health Check', 'First DHPPi', 'Deworming', 'Health Record Book']
  },
  {
    title: 'Standard Annual',
    description: 'Yearly booster protection.',
    features: ['Adult Core Boosters', 'Anti-Rabies', 'Full Physical Exam', 'Weight Check'],
    isPopular: true
  },
  {
    title: 'Premium Protection',
    description: 'Comprehensive travel & lifestyle.',
    features: ['Standard Annual', 'Kennel Cough', 'Leptospirosis', 'Travel Certificate']
  }
];

const catPlans = [
  {
    title: 'Basic Kitten',
    description: 'Essential core vaccines.',
    features: ['Health Check', 'First Tricat', 'Deworming', 'Health Record Book']
  },
  {
    title: 'Standard Annual',
    description: 'Yearly booster protection.',
    features: ['Adult Core Boosters', 'Anti-Rabies', 'Full Physical Exam', 'Weight Check'],
    isPopular: true
  },
  {
    title: 'Premium Protection',
    description: 'Comprehensive feline lifestyle.',
    features: ['Standard Annual', 'Feline Leukemia', 'Chlamydia Scan', 'Travel Certificate']
  }
];

const VaccinationPageContent = () => {
  return (
    <div className="grooming-page-root">
      <VaccinationSecondaryHero />

      <VaccinationSubHero
        titleLine1="Dog Vaccination "
        titleLine2="in Faridabad"
        description="Dog vaccinations are the cornerstone of preventative healthcare, shielding your dog from highly contagious and potentially fatal diseases like Parvovirus and Rabies."
        image={vetWithDogImg}
        imageLeft={true}
        buttonText="Book Dog Vaccination"
        features={[
          { icon: <ClipboardList size={22} color="#1a1a1a" />, title: "Comprehensive Dog<br/>Vaccination" },
          { icon: <BriefcaseMedical size={22} color="#1a1a1a" />, title: "Puppy & Dog<br/>Vaccine Packages" },
          { icon: <Stethoscope size={22} color="#1a1a1a" />, title: "FREE Senior Vet<br/>Consultation" }
        ]}
      />

      <div className="container" style={{ paddingBottom: '5rem' }}>
        <div className="vaccination-plans-wrapper">
          {dogPlans.map((plan, idx) => (
            <PricingCard key={idx} {...plan} />
          ))}
        </div>
      </div>

      <VaccinationSubHero
        titleLine1="Cats Vaccination "
        titleLine2="in Faridabad"
        description="Cats require specialized vaccinations to prevent serious feline diseases like Panleukopenia and Feline Leukemia. Our protocols ensure your cat is fully protected throughout all life stages."
        image={vetWithCatImg}
        imageLeft={false}
        buttonText="Book Cat Vaccination"
        features={[
          { icon: <ClipboardList size={22} color="#1a1a1a" />, title: "Comprehensive Cat<br/>Vaccination" },
          { icon: <BriefcaseMedical size={22} color="#1a1a1a" />, title: "Kitten & Cat<br/>Vaccine Packages" },
          { icon: <Stethoscope size={22} color="#1a1a1a" />, title: "FREE Senior Vet<br/>Consultation" }
        ]}
      />

      <div className="container" style={{ paddingBottom: '5rem' }}>
        <div className="vaccination-plans-wrapper">
          {catPlans.map((plan, idx) => (
            <PricingCard key={idx} {...plan} />
          ))}
        </div>
      </div>

      <CTABanner />
    </div>
  );
};

export default VaccinationPageContent;
