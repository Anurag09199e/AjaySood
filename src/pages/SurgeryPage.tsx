import SurgeryPageContent from '../components/Surgery/SurgeryPageContent';
import SEO from '../components/Shared/SEO';

const SurgeryPage = () => {
  return (
    <>
      <SEO 
        title="Advanced Pet Surgery in Faridabad | Modern Operation Theatre" 
        description="Trusted veterinary surgeons in Faridabad. DD's MaxxPet Clinic provides advanced surgical care with modern operation theatres and expert monitoring."
        canonical="/surgery"
      />
      <SurgeryPageContent />
    </>
  );
};

export default SurgeryPage;
