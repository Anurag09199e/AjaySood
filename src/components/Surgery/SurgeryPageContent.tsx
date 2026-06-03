import ServiceHero from '../Shared/ServiceHero';
import ServiceSubHero from '../Shared/ServiceSubHero';
import PricingCard from '../Shared/PricingCard';
import CTABanner from '../CTABanner';
import { Activity, Thermometer, ShieldCheck, HeartPulse, Microscope, HeartHandshake } from 'lucide-react';
import surgeryHeroImg from '../../image/surgery.png';
import surgeryAddImg from '../../image/surgery.png';
import '../../pages/GroomingPage.css';
import '../Vaccination/Vaccination.css';

const surgeryPlans = [
  {
    title: 'Pre-OP Checkup',
    description: 'Essential surgical clearance.',
    features: ['Blood Panel', 'ECG Heart Check', 'Vitals Assessment', 'Pain Med Plan']
  },
  {
    title: 'Routine Spay/Neuter',
    description: 'Standard surgical sterilization.',
    features: ['Safe Anesthesia', 'Full Monitoring', 'Day Care Recovery', 'E-Collar Included'],
    isPopular: true
  },
  {
    title: 'Advanced Procedure',
    description: 'Complex or soft-tissue surgeries.',
    features: ['Board Certified Surgeon', 'Dedicated ICU Recovery', 'Overnight Care', 'Follow-up Consults']
  }
];

const SurgeryPageContent = () => {
  return (
    <div className="grooming-page-root">

      <ServiceHero
        titleLine1="Advanced Pet Surgery Care"
        titleLine2=""
        description="We offer comprehensive surgical solutions for dogs, cats, and other pets. Our clinic follows strict safety protocols, advanced anesthesia monitoring, and compassionate post-operative care to help your pet heal quickly and comfortably."
        backgroundImage={surgeryHeroImg}
        features={[
          { icon: <Activity size={22} color="#1a1a1a" />, title: "Modern Operation<br/>Theatres" },
          { icon: <ShieldCheck size={22} color="#1a1a1a" />, title: "Safest Monitored<br/>Anesthesia" },
          { icon: <HeartPulse size={22} color="#1a1a1a" />, title: "Rapid Recovery<br/>ICU Care" }
        ]}
      />

      <ServiceSubHero
        titleLine1="Best Dog Surgery Clinic"
        titleLine2="in Preet Vihar, Delhi"
        description="Our experienced veterinary team provides safe and advanced surgical care for dogs, including soft tissue surgeries, tumor removal, wound repair, and emergency procedures. We prioritize your pet's comfort, safety, and speedy recovery."
        image={surgeryHeroImg}
        imageLeft={true}
        buttonText="Consult Our Surgeon"
        features={[
          { icon: <Microscope size={22} color="#1a1a1a" />, title: "Advanced Pre-Op<br/>In-house Labs" },
          { icon: <HeartHandshake size={22} color="#1a1a1a" />, title: "Compassionate<br/>Staff Updates" },
          { icon: <Thermometer size={22} color="#1a1a1a" />, title: "Multi-Modal Pain<br/>Management" }
        ]}
      />

      <div className="container" style={{ paddingBottom: '3rem' }}>
        <h3 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '2rem', color: '#1a1a1a' }}>Operative Care Planning</h3>
        <div className="vaccination-plans-wrapper">
          {surgeryPlans.map((plan, idx) => (
            <PricingCard key={idx} {...plan} />
          ))}
        </div>
      </div>

      <ServiceSubHero
        titleLine1="Best cats surgery"
        titleLine2="in Preet Vihar, Delhi"
        description="Professional feline surgical care including spaying, neutering, tumor removal, wound repair, and emergency procedures with a focus on safety, comfort, and recovery."
        image={surgeryAddImg}
        imageLeft={false}
        buttonText="Post-Op Emergency"
        features={[
          { icon: <Activity size={22} color="#1a1a1a" />, title: "Continuous ICU<br/>Monitoring" },
          { icon: <ShieldCheck size={22} color="#1a1a1a" />, title: "Safe Discharge<br/>Instructions" },
          { icon: <HeartPulse size={22} color="#1a1a1a" />, title: "Rapid Responding<br/>Emergency Staff" }
        ]}
      />

      <CTABanner />
    </div>
  );
};

export default SurgeryPageContent;
