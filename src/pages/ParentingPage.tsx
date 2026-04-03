import ParentingPageContent from '../components/Parenting/ParentingPageContent';
import SEO from '../components/Shared/SEO';

const ParentingPage = () => {
  return (
    <>
      <SEO 
        title="Pet Parenting Counselling in Faridabad | Building Happy Bonds" 
        description="Get expert pet parenting tips and advice from DD's MaxxPet Clinic. Learn how to provide the best care, nutrition, and lifestyle for your beloved dogs and cats."
        canonical="/services/parenting-counselling"
      />
      <ParentingPageContent />
    </>
  );
};

export default ParentingPage;
