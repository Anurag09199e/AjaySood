import PathologyPageContent from '../components/Pathology/PathologyPageContent';
import SEO from '../components/Shared/SEO';

const PathologyPage = () => {
  return (
    <>
      <SEO 
        title="Best Pet Pathological Lab in Faridabad | Fast & Accurate Results" 
        description="Comprehensive in-house pet diagnostic services in Faridabad. DD's MaxxPet Clinic offers blood tests and pathological exams with rapid and accurate results."
        canonical="/services/pathology"
      />
      <PathologyPageContent />
    </>
  );
};

export default PathologyPage;
