import SEO from '../components/Shared/SEO';

const PrivacyPolicyPage = () => {
  return (
    <div>
      <SEO 
        title="Privacy Policy | DD's MaxxPet Clinic Faridabad" 
        description="Privacy policy and data protection guidelines for DD's MaxxPet Clinic."
        canonical="/privacy-policy"
      />
      
      <section className="inner-page-hero" style={{ background: 'var(--grad-primary)', padding: '60px 0 40px 0', minHeight: 'unset' }}>
        <div className="container text-center">
          <h1 style={{ color: 'white' }}>Privacy <span>Policy</span></h1>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="mb-4">1. Introduction</h2>
          <p className="mb-6">
            Welcome to DD's MaxxPet Clinic. At our clinic, we are committed to protecting the privacy and security of our clients and their pets. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you use our website, services, and interact with us.
          </p>

          <h2 className="mb-4">2. Information We Collect</h2>
          <p className="mb-6">
            We may collect personal information such as your name, contact details (phone number, email address), and pet information (name, breed, medical history) when you book an appointment, register as a client, or communicate with us.
          </p>

          <h2 className="mb-4">3. How We Use Your Information</h2>
          <p className="mb-6">
            Your information is primarily used to provide quality veterinary care for your pets, manage appointments, send appointment reminders, process payments, and communicate important updates regarding our clinic's services.
          </p>

          <h2 className="mb-4">4. Data Protection</h2>
          <p className="mb-6">
            We employ robust security measures to ensure that your personal information is kept secure and protected against unauthorized access, alteration, or disclosure. We do not sell or share your personal data with third parties for marketing purposes.
          </p>

          <h2 className="mb-4">5. Contact Us</h2>
          <p className="mb-6">
            If you have any questions or concerns regarding this Privacy Policy or how we handle your personal data, please contact us at our clinic or via the contact methods provided on our website.
          </p>
          
          <p className="text-muted mt-8"><em>Last updated: {new Date().toLocaleDateString()}</em></p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
