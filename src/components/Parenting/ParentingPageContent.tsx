import ParentingSecondaryHero from './ParentingSecondaryHero';
import VaccinationSubHero from '../Vaccination/VaccinationSubHero';
import PricingCard from '../Shared/PricingCard';
import CTABanner from '../CTABanner';
import { ClipboardList, Stethoscope, BriefcaseMedical } from 'lucide-react';
import parentingImg from '../../image/pets-perent-2.png';
import '../../pages/GroomingPage.css';
import './Parenting.css';

const dogPlans = [
  {
    title: 'New Puppy Setup',
    description: 'Essential first-time guidance.',
    features: ['Potty Training Plan', 'Feeding Schedule', 'Socialisation Tips', 'Home Safety Checklist']
  },
  {
    title: 'Behavioural Package',
    description: 'Targeted behaviour correction.',
    features: ['Separation Anxiety Help', 'Bite Inhibition', 'Leash Training', 'Follow-up Session'],
    isPopular: true
  },
  {
    title: 'Complete Parenting',
    description: 'Full lifecycle guidance.',
    features: ['Behavioural Package', 'Aggression Management', 'Multi-Pet Integration', 'Ongoing Support']
  }
];

const catPlans = [
  {
    title: 'New Kitten Setup',
    description: 'Essential first-time guidance.',
    features: ['Litter Training Plan', 'Feeding Schedule', 'Socialisation Tips', 'Home Safety Checklist']
  },
  {
    title: 'Behavioural Package',
    description: 'Targeted behaviour correction.',
    features: ['Anxiety Relief Plan', 'Scratching Redirection', 'Play Enrichment', 'Follow-up Session'],
    isPopular: true
  },
  {
    title: 'Complete Parenting',
    description: 'Full lifecycle guidance.',
    features: ['Behavioural Package', 'Fear & Aggression Help', 'Multi-Cat Integration', 'Ongoing Support']
  }
];

const ParentingPageContent = () => {
  return (
    <div className="grooming-page-root">
      <ParentingSecondaryHero />

      <VaccinationSubHero
        titleLine1="Dog Parenting Counselling"
        titleLine2=""
        description="Bringing a puppy home is thrilling, but behavioral problems are driven by misunderstandings between pets and owners. Our counselling covers potty training, socialisation, reading body language, separation anxiety, and aggression management."
        image={parentingImg}
        imageLeft={true}
        buttonText="Book Dog Counselling"
        features={[
          { icon: <ClipboardList size={22} color="#1a1a1a" />, title: "Puppy Setup &amp;<br/>Socialisation" },
          { icon: <BriefcaseMedical size={22} color="#1a1a1a" />, title: "Behaviour<br/>Correction" },
          { icon: <Stethoscope size={22} color="#1a1a1a" />, title: "FREE Senior Vet<br/>Consultation" }
        ]}
      />

      <div className="container" style={{ paddingBottom: '5rem' }}>
        <div className="parenting-plans-wrapper">
          {dogPlans.map((plan, idx) => (
            <PricingCard key={idx} {...plan} />
          ))}
        </div>
      </div>

      <VaccinationSubHero
        titleLine1="Cat Parenting Counselling"
        titleLine2=""
        description="Cats are notoriously independent, but they still need structured guidance. Our feline counselling covers litter training, scratching behaviour, anxiety relief, enrichment strategies, and multi-cat household harmony."
        image={parentingImg}
        imageLeft={false}
        buttonText="Book Cat Counselling"
        features={[
          { icon: <ClipboardList size={22} color="#1a1a1a" />, title: "Kitten Setup &amp;<br/>Litter Training" },
          { icon: <BriefcaseMedical size={22} color="#1a1a1a" />, title: "Anxiety &amp;<br/>Fear Relief" },
          { icon: <Stethoscope size={22} color="#1a1a1a" />, title: "FREE Senior Vet<br/>Consultation" }
        ]}
      />

      <div className="container" style={{ paddingBottom: '5rem' }}>
        <div className="parenting-plans-wrapper">
          {catPlans.map((plan, idx) => (
            <PricingCard key={idx} {...plan} />
          ))}
        </div>
      </div>

      <CTABanner />
    </div>
  );
};

export default ParentingPageContent;
