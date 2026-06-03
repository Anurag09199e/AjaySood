import SEO from '../components/Shared/SEO';

const TermsConditionsPage = () => {
  return (
    <div>
      <SEO
        title="Terms & Conditions | Dog & Cat Clinic  Preet Vihar, Delhi"
        description="Terms and conditions for services provided by Dog & Cat Clinic ."
        canonical="/terms-and-conditions"
        robots="noindex, nofollow"
      />

      <section className="inner-page-hero" style={{ background: 'var(--grad-primary)', padding: '60px 0 40px 0', minHeight: 'unset' }}>
        <div className="container text-center">
          <h1 style={{ color: 'white' }}>Terms & <span>Conditions</span></h1>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="mb-4">1. Acceptance of Terms</h2>
          <p className="mb-6">
            By accessing and using the services of Dog & Cat Clinic , you agree to comply with and be bound by the following terms and conditions. These terms govern your use of our website and veterinary services.
          </p>

          <h2 className="mb-4">2. Veterinary Services</h2>
          <p className="mb-6">
            We strive to provide the highest standard of veterinary care. Treatment plans, diagnoses, and medical advice are provided based on our professional expertise. We reserve the right to decline treatment if it is deemed inappropriate or beyond our clinic's capabilities.
          </p>

          <h2 className="mb-4">3. Appointments and Cancellations</h2>
          <p className="mb-6">
            Appointments can be scheduled via our website, phone, or in person. We kindly request that you provide at least 24 hours notice if you need to cancel or reschedule an appointment to allow us to offer the time slot to other patients in need.
          </p>

          <h2 className="mb-4">4. Payment Policy</h2>
          <p className="mb-6">
            Payment for services, treatments, medications, and products is due at the time the service is rendered. We accept various forms of payment as indicated at our clinic. Estimates for procedures can be provided upon request prior to treatment.
          </p>

          <h2 className="mb-4">5. Liability</h2>
          <p className="mb-6">
            While we take every precaution to ensure the safety and well-being of your pet, veterinary medicine involves inherent risks. By authorizing treatment, you acknowledge these risks and release Dog & Cat Clinic  and its staff from liability for any unforeseen complications, unless resulting from gross negligence.
          </p>

          <p className="text-muted mt-8"><em>Last updated: {new Date().toLocaleDateString()}</em></p>
        </div>
      </section>
    </div>
  );
};

export default TermsConditionsPage;
