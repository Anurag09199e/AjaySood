import SkinCarePageContent from '../components/SkinCare/SkinCarePageContent';
import SEO from '../components/Shared/SEO';

const SkinCarePage = () => {
  return (
    <>
      <SEO 
        title="Expert Pet Skin Clinic in Faridabad | Healthy Skin & Fur" 
        description="Address your pet's skin issues with specialized dermatology care at DD's MaxxPet Clinic, Faridabad. Expert diagnosis and treatment for all pet skin conditions."
        canonical="/skin-care"
      />
      <SkinCarePageContent />
    </>
  );
};

export default SkinCarePage;
