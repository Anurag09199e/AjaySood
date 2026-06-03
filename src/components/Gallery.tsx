const galleryImages = [
  { src: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=900&q=80", alt: "Happy dog", label: "Dogs we love" },
  { src: "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=600&q=80", alt: "Cute cat", label: "Cats & kittens" },
  { src: "https://images.unsplash.com/photo-1583511655857-f19f0b2e3a94?auto=format&fit=crop&w=600&q=80", alt: "Puppy", label: "Puppies" },
  { src: "https://images.unsplash.com/photo-1548767797-d8c844163c4a?auto=format&fit=crop&w=900&q=80", alt: "Cat portrait", label: "Feline care" },
  { src: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=80", alt: "Dogs playing", label: "Playful pups" },
  { src: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80", alt: "Cat close-up", label: "Happy cats" },
  { src: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=900&q=80", alt: "Dog portrait", label: "Our canine friends" },
  { src: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=600&q=80", alt: "Cat in blanket", label: "Cozy pets" },
  { src: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=600&q=80", alt: "Golden retriever", label: "Trusted care" },
];

const Gallery = () => {
  return (
    <section className="section gallery-section">
      <div className="container">
        <div className="section-header animate-fade-in">
          <div className="section-pill">
            <span className="dot" /> Gallery
          </div>
          <h2>Happy Pets, <span className="gradient-text">Happy Families</span></h2>
          <p className="text-muted mt-4">A glimpse into the lives we touch every day at Dog & Cat Clinic .</p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((img, idx) => (
            <div key={idx} className={`gallery-item animate-scale delay-${(idx % 4 + 1) * 100}`}>
              <img src={img.src} alt={img.alt} />
              <div className="gallery-overlay">
                <span className="gallery-overlay-text">{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
