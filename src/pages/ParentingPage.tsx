import ParentingPageContent from '../components/Parenting/ParentingPageContent';
import SEO from '../components/Shared/SEO';

const ParentingPage = () => {
  return (
    <>
      <SEO 
        title="Pet Parenting Counselling in Faridabad | Building Happy Bonds" 
        description="Get expert guidance on pet parenting and behavioral counselling at DD's MaxxPet Clinic, Faridabad. Build a loving and structured bond with your pet."
        canonical="/parenting"
      />
      <ParentingPageContent />
    </>
  );
};

export default ParentingPage;
