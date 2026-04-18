import DentistryPageContent from '../components/Dentistry/DentistryPageContent';
import SEO from '../components/Shared/SEO';

const DentistryPage = () => {
  return (
    <>
      <SEO 
        title="Pets Dental Clinic in Faridabad | Complete Oral Care" 
        description="Maintain your pet's oral health with professional dental cleanings and scaling at DD's MaxxPet Clinic, Faridabad. Complete dental wellness for dogs and cats."
        canonical="/services/dentistry"
      />
      <DentistryPageContent />
    </>
  );
};

export default DentistryPage;
