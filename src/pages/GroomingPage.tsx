import { useEffect } from 'react';
import GroomingPageContent from '../components/Grooming/GroomingPageContent';

const GroomingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="grooming-page-root">
      <GroomingPageContent />
    </div>
  );
};

export default GroomingPage;
