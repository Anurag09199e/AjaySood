import { ShieldCheck, HeartPulse, UserCheck, Clock, Activity, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const benefitsList = [
  {
    icon: <ShieldCheck size={26} />,
    title: "Safety & Comfort",
    desc: "Your pet stays in their safe space, surrounded by familiar sights and sounds — far less stressful than a clinic visit."
  },
  {
    icon: <HeartPulse size={26} />,
    title: "Less Stressful",
    desc: "No car rides, no waiting rooms. Home care removes anxiety so your pet stays calm and comfortable."
  },
  {
    icon: <UserCheck size={26} />,
    title: "Personal Attention",
    desc: "Each pet receives undivided, one-on-one care tailored to their unique personality and routine."
  },
  {
    icon: <Clock size={26} />,
    title: "Maximum Convenience",
    desc: "Skip the queues and scheduling hassles. We come to you at a time that works for you."
  },
  {
    icon: <Activity size={26} />,
    title: "Faster Recovery",
    desc: "Pets recover better at home — familiar surroundings combined with expert care accelerate healing."
  },
  {
    icon: <Heart size={26} />,
    title: "Stronger Bonding",
    desc: "Being part of your pet's care deepens your bond and ensures they always feel safe and loved."
  }
];

const Benefits = () => {
  return (
    <section className="section benefits-section">
      <div className="container">
        <div className="section-header animate-fade-in">
          <div className="section-pill">
            <span className="dot" /> Why Choose Us
          </div>
          <h2>Benefits of <span className="gradient-text">Our Care</span></h2>
          <p className="text-muted mt-4">Expert veterinary care with a focus on safety, comfort, and your pet's wellbeing.</p>
        </div>

        <div className="grid-3">
          {benefitsList.map((bnf, idx) => (
            <div
              key={idx}
              className={`benefit-card-v2 animate-fade-in delay-${(idx % 3 + 1) * 100}`}
            >
              <div className="benefit-icon-v2">
                {bnf.icon}
              </div>
              <h4 className="benefit-title-v2">{bnf.title}</h4>
              <p className="benefit-desc-v2">{bnf.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 animate-fade-in delay-400">
          <Link to="/services" className="btn btn-primary">
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
