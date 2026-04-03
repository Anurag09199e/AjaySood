import VaccinationPageContent from '../components/Vaccination/VaccinationPageContent';
import SEO from '../components/Shared/SEO';

const VaccinationPage = () => {
  return (
    <>
      <SEO 
        title="Pet Vaccination in Faridabad | Best Puppy & Cat Vaccine Packages" 
        description="Ensure your pet's health with professional vaccination services at DD's MaxxPet Clinic, Faridabad. Best puppy and cat vaccine packages available."
        canonical="/vaccination"
      />
      <VaccinationPageContent />
    </>
  );
};

export default VaccinationPage;
