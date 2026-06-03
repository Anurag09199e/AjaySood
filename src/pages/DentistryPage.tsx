import DentistryPageContent from '../components/Dentistry/DentistryPageContent';
import SEO from '../components/Shared/SEO';

const DentistryPage = () => {
  return (
    <>
      <SEO
        title="Pets Dental Clinic in Preet Vihar, Delhi | Complete Oral Care"
        description="Maintain your pet's oral health with professional dental cleanings and scaling at Dog & Cat Clinic , Preet Vihar, Delhi. Complete dental wellness for dogs and cats."
        canonical="/services/dentistry"
      />
      <DentistryPageContent />
    </>
  );
};

export default DentistryPage;
