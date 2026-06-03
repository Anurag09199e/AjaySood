import PathologySecondaryHero from './PathologySecondaryHero';
import VaccinationSubHero from '../Vaccination/VaccinationSubHero';
import PricingCard from '../Shared/PricingCard';
import CTABanner from '../CTABanner';
import { ClipboardList, Stethoscope, BriefcaseMedical } from 'lucide-react';
import pathologyImg from '../../image/diagnostics.png';
import '../../pages/GroomingPage.css';
import './Pathology.css';

const dogPlans = [
  {
    title: 'Basic Screening',
    description: 'Essential fluid analysis.',
    features: ['Urinalysis', 'Fecal Processing', 'Basic Cytology', 'Rapid Results']
  },
  {
    title: 'Standard Profile',
    description: 'Complete blood analysis.',
    features: ['Complete Blood Count (CBC)', 'Basic Chemistry Panel', 'Liver/Kidney Check', 'Vet Review'],
    isPopular: true
  },
  {
    title: 'Premium Diagnostics',
    description: 'Advanced hormonal & organ test.',
    features: ['Standard Profile', 'Thyroid Panel', 'Full Biochemistry', 'Specialized Testing']
  }
];

const catPlans = [
  {
    title: 'Basic Screening',
    description: 'Essential feline fluid analysis.',
    features: ['Urinalysis', 'Fecal Processing', 'Basic Cytology', 'Rapid Results']
  },
  {
    title: 'Standard Profile',
    description: 'Complete feline blood analysis.',
    features: ['Complete Blood Count (CBC)', 'Basic Chemistry Panel', 'Liver/Kidney Check', 'Vet Review'],
    isPopular: true
  },
  {
    title: 'Premium Diagnostics',
    description: 'Advanced feline organ testing.',
    features: ['Standard Profile', 'Thyroid Panel', 'Full Biochemistry', 'Specialized Testing']
  }
];

const PathologyPageContent = () => {
  return (
    <div className="grooming-page-root">
      <PathologySecondaryHero />

      <VaccinationSubHero
        titleLine1="Dogs Pathology"
        titleLine2="in Preet Vihar, Delhi"
        description="In critical care, time is of the essence. Our modern in-house lab performs blood chemistry, complete blood counts (CBC), and urinalysis within minutes — giving your dog the fastest path to accurate diagnosis and treatment."
        image={pathologyImg}
        imageLeft={true}
        buttonText="Book Dog Lab Test"
        features={[
          { icon: <ClipboardList size={22} color="#1a1a1a" />, title: "Complete Blood<br/>Count &amp; Panel" },
          { icon: <BriefcaseMedical size={22} color="#1a1a1a" />, title: "Rapid In-House<br/>Diagnostics" },
          { icon: <Stethoscope size={22} color="#1a1a1a" />, title: "FREE Senior Vet<br/>Consultation" }
        ]}
      />

      <div className="container" style={{ paddingBottom: '5rem' }}>
        <div className="pathology-plans-wrapper">
          {dogPlans.map((plan, idx) => (
            <PricingCard key={idx} {...plan} />
          ))}
        </div>
      </div>

      <VaccinationSubHero
        titleLine1="Cats Pathology"
        titleLine2="in Preet Vihar, Delhi"
        description="Routine lab work helps us understand your cat's normal baseline and notice minor unhealthy shifts before symptoms appear — ensuring longevity and quality of life for your feline companion."
        image={pathologyImg}
        imageLeft={false}
        buttonText="Book Cat Lab Test"
        features={[
          { icon: <ClipboardList size={22} color="#1a1a1a" />, title: "Feline Blood<br/>Profiling" },
          { icon: <BriefcaseMedical size={22} color="#1a1a1a" />, title: "Hormonal &amp;<br/>Organ Testing" },
          { icon: <Stethoscope size={22} color="#1a1a1a" />, title: "FREE Senior Vet<br/>Consultation" }
        ]}
      />

      <div className="container" style={{ paddingBottom: '5rem' }}>
        <div className="pathology-plans-wrapper">
          {catPlans.map((plan, idx) => (
            <PricingCard key={idx} {...plan} />
          ))}
        </div>
      </div>

      <CTABanner />
    </div>
  );
};

export default PathologyPageContent;
