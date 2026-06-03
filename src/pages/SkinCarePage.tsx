import SkinCarePageContent from '../components/SkinCare/SkinCarePageContent';
import SEO from '../components/Shared/SEO';

const SkinCarePage = () => {
  return (
    <>
      <SEO
        title="Expert Pet Skin Clinic in Preet Vihar, Delhi | Healthy Skin & Fur"
        description="Address your pet's skin issues with specialized dermatology care at Dog & Cat Clinic , Preet Vihar, Delhi. Expert diagnosis and treatment for all pet skin diseases."
        canonical="/services/skin-care"
      />
      <SkinCarePageContent />
    </>
  );
};

export default SkinCarePage;
