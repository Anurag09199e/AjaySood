const trustStats = [
  { num: '40+', label: 'Years of Excellence' },
  { num: '10,000+', label: 'Happy Pets Treated' },
  { num: '20+', label: 'Specialized Services' },
  { num: '4.9★', label: 'Average Rating' },
];

const TrustBar = () => {
  return (
    <div className="trust-bar">
      <div className="container">
        <div className="trust-bar-grid">
          {trustStats.map((stat, i) => (
            <div key={i} className="trust-stat animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <strong className="trust-stat-num">{stat.num}</strong>
              <span className="trust-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
