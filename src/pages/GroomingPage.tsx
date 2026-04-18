import { useEffect } from 'react';
import GroomingPageContent from '../components/Grooming/GroomingPageContent';
import SEO from '../components/Shared/SEO';

const GroomingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="grooming-page-root">
      <SEO 
        title="Best Dog Grooming in Faridabad | Professional Pet Styling" 
        description="Treat your pet to the best grooming experience in Faridabad. DD's MaxxPet Clinic offers professional styling, baths, and hygiene care for all dogs and cats."
        canonical="/services/grooming"
      />
      <GroomingPageContent />
    </div>
  );
};

export default GroomingPage;
