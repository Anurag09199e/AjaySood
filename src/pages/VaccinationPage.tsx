import VaccinationPageContent from '../components/Vaccination/VaccinationPageContent';
import SEO from '../components/Shared/SEO';

const VaccinationPage = () => {
  return (
    <>
      <SEO
        title="Pet Vaccination in Preet Vihar, Delhi| Best Puppy & Cat Vaccine Packages"
        description="Ensure your pet's long-term health with professional vaccination services at Dog & Cat Clinic , Preet Vihar, Delhi. Best puppy and cat vaccine packages are available."
        canonical="/services/vaccination"
      />
      <VaccinationPageContent />
    </>
  );
};

export default VaccinationPage;
