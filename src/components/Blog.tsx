import { ArrowRight } from 'lucide-react';

const blogs = [
  {
    category: "Pet Nutrition",
    title: "How to Choose the Right Diet for Your Dog's Age and Breed",
    excerpt: "Nutrition is the cornerstone of your dog's health. Learn how protein, fat, and carbohydrate ratios differ by breed size and life stage.",
    image: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=600&q=80",
    date: "Feb 20, 2026"
  },
  {
    category: "Preventive Care",
    title: "The Complete Vaccination Schedule Every Pet Parent Should Know",
    excerpt: "Vaccines are your pet's first line of defence. Dr. Gaur explains the essential immunizations from puppyhood through their senior years.",
    image: "https://images.unsplash.com/photo-1583511655857-f19f0b2e3a94?auto=format&fit=crop&w=600&q=80",
    date: "Feb 10, 2026"
  },
  {
    category: "Pet Wellness",
    title: "Warning Signs Your Pet Needs an Emergency Vet Visit — Right Now",
    excerpt: "Learn to recognize the 8 most critical symptoms that require immediate veterinary attention to save your pet's life.",
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=600&q=80",
    date: "Jan 28, 2026"
  }
];

const Blog = () => {
  return (
    <section className="section blog-section">
      <div className="container">
        <div className="section-header animate-fade-in">
          <div className="section-pill">
            <span className="dot" /> Pet Care Tips
          </div>
          <h2>Expert Advice for <span className="gradient-text">Pet Parents</span></h2>
          <p className="text-muted mt-4">Resources, guidance, and expert insights straight from our veterinary team.</p>
        </div>

        <div className="blog-grid">
          {blogs.map((post, idx) => (
            <div key={idx} className={`blog-card animate-fade-in delay-${(idx + 1) * 100}`}>
              <div style={{ overflow: 'hidden', height: '200px' }}>
                <img src={post.image} alt={post.title} className="blog-card-img" />
              </div>
              <div className="blog-card-body">
                <span className="blog-card-category">{post.category}</span>
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <div className="blog-card-footer">
                  <span className="blog-card-date">{post.date}</span>
                  <a href="#" className="blog-card-link">
                    Read More <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
