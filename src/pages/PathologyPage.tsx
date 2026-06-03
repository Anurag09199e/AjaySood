import PathologyPageContent from '../components/Pathology/PathologyPageContent';
import SEO from '../components/Shared/SEO';

const PathologyPage = () => {
  return (
    <>
      <SEO
        title="Best Pet Pathological Lab in Preet Vihar, Delhi | Fast & Accurate Results"
        description="Comprehensive in-house pet diagnostic services in Preet Vihar, Delhi. Dog & Cat Clinic  offers blood tests and pathological exams with rapid and accurate results."
        canonical="/services/pathology"
      />
      <PathologyPageContent />
    </>
  );
};

export default PathologyPage;
