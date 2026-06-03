import SurgeryPageContent from '../components/Surgery/SurgeryPageContent';
import SEO from '../components/Shared/SEO';

const SurgeryPage = () => {
  return (
    <>
      <SEO
        title="Advanced Pet Surgery in Preet Vihar, Delhi | Modern Operation Theatre"
        description="Trusted veterinary surgeons in Preet Vihar, Delhi. Dog & Cat Clinic  provides advanced surgical care with modern operation theatres and expert post-op monitoring."
        canonical="/services/surgery"
      />
      <SurgeryPageContent />
    </>
  );
};

export default SurgeryPage;
