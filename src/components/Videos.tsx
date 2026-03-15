const videos = [
  "https://www.youtube.com/embed/rVuNwYaU0qM",
  "https://www.youtube.com/embed/7jlJNKMJbPU",
  "https://www.youtube.com/embed/2oAi9Ve_8HI",
  "https://www.youtube.com/embed/7oYp0LVc1UQ"
];

const Videos = () => {
  return (
    <section className="section videos-section">
      <div className="container">
        <div className="section-header animate-fade-in">
          <div className="section-pill">
            <span className="dot" /> Media
          </div>
          <h2>Learn from <span className="gradient-text">Our Experts</span></h2>
          <p className="text-muted mt-4">Watch helpful veterinary advice and pet care guides from Dr. Dheeraj Gaur and the DD's MaxxPet Clinic team.</p>
        </div>

        <div className="video-grid">
          {videos.map((vid, idx) => (
            <div
              key={idx}
              className={`video-card animate-scale delay-${(idx % 4 + 1) * 100}`}
            >
              <iframe
                src={vid}
                title={`DD's MaxxPet Clinic Tutorial ${idx + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
