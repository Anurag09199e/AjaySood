import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "How do I make an appointment at DD's MaxxPet Clinic?",
    a: "You can book an appointment by calling our clinic directly (088007 56268) or by using our Contact form online. We try to accommodate same-day appointments for urgent cases."
  },
  {
    q: "What are your clinic timings?",
    a: "Our clinic is open 10 AM – 8 PM, Monday to Saturday (closed Sundays). Home service availability may vary — please call to confirm."
  },
  {
    q: "Do you offer pet care at home?",
    a: "Yes! We provide professional at-home pet care services including grooming, vaccination, routine check-ups, and post-surgery recovery support. Home care is ideal for anxious pets or owners who prefer convenience."
  },
  {
    q: "How should I take care of a pet?",
    a: "Proper pet care involves balanced nutrition, regular exercise, routine vet check-ups, fresh water, and plenty of love and attention. Keep their environment clean, ensure social interaction, and cater to their specific breed or species needs."
  },
  {
    q: "What vaccinations does my pet need?",
    a: "Core vaccines for dogs include Distemper, Parvovirus, Hepatitis, and Rabies. Cats require vaccines against Feline Herpesvirus, Calicivirus, Panleukopenia, and Rabies. Dr. Gaur will create a tailored vaccination schedule during your first visit."
  },
  {
    q: "What should I do in a pet emergency?",
    a: "In an emergency, call our clinic immediately. For life-threatening situations, keep your pet calm and warm during transport. Do not give human medication without veterinary guidance. Our team is available to advise you over the phone."
  },
  {
    q: "What are pet sitting charges?",
    a: "Pet sitting charges vary depending on location, services, and the pet's specific needs. Generally, rates range from ₹300 to ₹1,500 per day. Please contact us for a customized quote."
  }
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="section faq-section">
      <div className="container">
        <div className="section-header animate-fade-in">
          <div className="section-pill">
            <span className="dot" /> Got Questions?
          </div>
          <h2>Frequently Asked <span className="gradient-text">Questions</span></h2>
          <p className="text-muted mt-4">Everything you need to know about pet care at DD's MaxxPet Clinic.</p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`faq-item animate-fade-in delay-${(idx % 4 + 1) * 100}${openIdx === idx ? ' open' : ''}`}
            >
              <button
                className="faq-trigger"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                aria-expanded={openIdx === idx}
              >
                <span className="faq-question">{faq.q}</span>
                <span className="faq-icon">
                  <ChevronDown size={18} />
                </span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
