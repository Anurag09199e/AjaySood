import DentistrySecondaryHero from './DentistrySecondaryHero';
import VaccinationSubHero from '../Vaccination/VaccinationSubHero';
import PricingCard from '../Shared/PricingCard';
import CTABanner from '../CTABanner';
import { ClipboardList, Stethoscope, BriefcaseMedical } from 'lucide-react';
import dentalDogImg from '../../image/dental_care.png';
import dentalCatImg from '../../image/dental_care.png';
import '../../pages/GroomingPage.css';
import './Dentistry.css';

const dogPlans = [
  {
    title: 'Basic Dental Check',
    description: 'Routine oral examination.',
    features: ['Teeth Assessment', 'Gum Health Check', 'Breath Analysis', 'Home Care Advice']
  },
  {
    title: 'Standard Cleaning',
    description: 'Deep cleaning and polishing.',
    features: ['Basic Check Included', 'Ultrasonic Scaling', 'Polishing', 'Plaque Removal'],
    isPopular: true
  },
  {
    title: 'Premium Dental Care',
    description: 'Complete anesthesia-based care.',
    features: ['Standard Cleaning', 'Full Anaesthesia', 'Minor Extractions', 'Post-Op Meds']
  }
];

const catPlans = [
  {
    title: 'Basic Dental Check',
    description: 'Routine feline oral screening.',
    features: ['Teeth Assessment', 'Gum Health Check', 'Breath Analysis', 'Home Care Advice']
  },
  {
    title: 'Standard Cleaning',
    description: 'Deep cleaning and polishing.',
    features: ['Basic Check Included', 'Ultrasonic Scaling', 'Polishing', 'Plaque Removal'],
    isPopular: true
  },
  {
    title: 'Premium Dental Care',
    description: 'Complete feline dental wellness.',
    features: ['Standard Cleaning', 'Full Anaesthesia', 'Minor Extractions', 'Post-Op Meds']
  }
];

const DentistryPageContent = () => {
  return (
    <div className="grooming-page-root">
      <DentistrySecondaryHero />

      <VaccinationSubHero
        titleLine1="Dogs Dentistry "
        titleLine2="in Preet Vihar, Delhi"
        description="Dog Dentistry Services
Keep your dog's teeth healthy and clean with professional dental care. We provide dental checkups, teeth cleaning, plaque and tartar removal, gum disease treatment, and oral health guidance to ensure a healthy smile and overall well-being."
        image={dentalDogImg}
        imageLeft={true}
        buttonText="Book Dog Dental Care"
        features={[
          { icon: <ClipboardList size={22} color="#1a1a1a" />, title: "Complete Oral<br/>Examination" },
          { icon: <BriefcaseMedical size={22} color="#1a1a1a" />, title: "Scaling &amp;<br/>Polishing" },
          { icon: <Stethoscope size={22} color="#1a1a1a" />, title: "FREE Senior Vet<br/>Consultation" }
        ]}
      />

      <div className="container" style={{ paddingBottom: '5rem' }}>
        <div className="dentistry-plans-wrapper">
          {dogPlans.map((plan, idx) => (
            <PricingCard key={idx} {...plan} />
          ))}
        </div>
      </div>

      <VaccinationSubHero
        titleLine1="Cats Dentistry"
        titleLine2="in Preet Vihar, Delhi"
        description="Good oral health is essential for your cat’s overall well-being. Our dental services include routine examinations, professional teeth cleaning, tartar removal, gum disease treatment, and preventive care to help your feline companion maintain strong teeth and healthy gums."
        image={dentalCatImg}
        imageLeft={false}
        buttonText="Book Cat Dental Care"
        features={[
          { icon: <ClipboardList size={22} color="#1a1a1a" />, title: "Feline Oral<br/>Examination" },
          { icon: <BriefcaseMedical size={22} color="#1a1a1a" />, title: "Gentle Scaling<br/>&amp; Polishing" },
          { icon: <Stethoscope size={22} color="#1a1a1a" />, title: "FREE Senior Vet<br/>Consultation" }
        ]}
      />

      <div className="container" style={{ paddingBottom: '5rem' }}>
        <div className="dentistry-plans-wrapper">
          {catPlans.map((plan, idx) => (
            <PricingCard key={idx} {...plan} />
          ))}
        </div>
      </div>

      <CTABanner />
    </div>
  );
};

export default DentistryPageContent;
