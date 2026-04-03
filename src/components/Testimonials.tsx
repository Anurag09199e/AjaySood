import { useState, useEffect, useRef, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonialsData = [
  {
    text: "Dr. Gaur is absolutely wonderful with animals. My Golden Retriever Bruno had a complex orthopaedic surgery and the care we received was exceptional. He's back on his feet now — healthier than ever!",
    name: "Priya Sharma",
    pet: "Bruno (Golden Retriever)",
    image: "/src/image/bruno.jpg",
    rating: 5
  },
  {
    text: "We've been coming to DD's MaxxPet Clinic for years. Our family's pets have always been treated here. The trust and continuity of care is unmatched.",
    name: "Sunita Kapoor",
    pet: "Bella (Regular Client)",
    image: "/src/image/bella.jpg",
    rating: 5
  },
  {
    text: "Quick, professional, and so compassionate. When my Labrador had an emergency, DD's MaxxPet Clinic was available immediately. I can't thank Dr. Gaur and his team enough.",
    name: "Arjun Nair",
    pet: "Max (Labrador)",
    image: "/src/image/max.jpg",
    rating: 5
  },
  {
    text: "The nutrition counselling completely transformed my dog's health. She lost weight, her coat improved, and she's so much more energetic now. Science-backed advice that actually works.",
    name: "Deepika Verma",
    pet: "Coco (Beagle Mix)",
    image: "/src/image/coco.jpg",
    rating: 5
  },
  {
    text: "DD's MaxxPet Clinic is the only place I trust for my two cats' vaccinations. The team is knowledgeable, the facility is clean, and they always explain everything clearly. 10/10 every time.",
    name: "Kiran Bhat",
    pet: "Luna & Oreo",
    image: "/src/image/cats.jpg",
    rating: 5
  }
];


const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(3); // Start at index 3 (first real item)
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timerRef = useRef<number | null>(null);

  // Clone data for infinite loop: [last 3] [real items] [first 3]
  // Using 3 as a safe buffer for all screen sizes (max visibleCards is 3)
  const extendedData = [
    ...testimonialsData.slice(-3),
    ...testimonialsData,
    ...testimonialsData.slice(0, 3)
  ];

  const updateVisibleCards = useCallback(() => {
    if (window.innerWidth < 640) {
      setVisibleCards(1);
    } else if (window.innerWidth < 1024) {
      setVisibleCards(2);
    } else {
      setVisibleCards(3);
    }
  }, []);

  useEffect(() => {
    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, [updateVisibleCards]);

  const nextSlide = useCallback(() => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev + 1);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev - 1);
  }, [isTransitioning]);

  // Handle seamless loop jumps after transition finishes
  const handleTransitionEnd = () => {
    // If we reached the end clones
    if (currentIndex >= testimonialsData.length + 3) {
      setIsTransitioning(false);
      setCurrentIndex(3);
    }

    // If we reached the start clones
    if (currentIndex <= 2) {
      setIsTransitioning(false);
      setCurrentIndex(testimonialsData.length + 2);
    }
  };

  // Re-enable transition after jump in next tick
  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = window.setInterval(nextSlide, 4000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide]);

  // Calculate real index for dots
  const realIndex = (currentIndex - 3 + testimonialsData.length) % testimonialsData.length;

  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="section-header animate-fade-in">
          <div className="section-pill">
            <span className="dot" /> What Pet Parents Say
          </div>
          <h2 style={{ color: '#2f8f83' }}>
            Trusted by <span>Thousands</span> of Pet Parents
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.65)', marginTop: '1rem' }}>
            Hear from the families who trust DD's MaxxPet Clinic with their most beloved companions.
          </p>
        </div>

        <div
          className="testimonials-carousel-viewport"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="testimonials-carousel-track"
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translateX(-${(currentIndex * 100) / extendedData.length}%)`,
              width: `${(extendedData.length * 100) / visibleCards}%`,
              transition: isTransitioning ? 'transform 0.6s ease-in-out' : 'none'
            }}
          >
            {extendedData.map((t, idx) => (
              <div
                key={idx}
                className="testimonial-slide"
                style={{ width: `${100 / extendedData.length}%` }}
              >
                <div className="testimonial-card h-full">
                  <div className="testimonial-card-header">
                    <div className="testimonial-stars">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill={i < t.rating ? "var(--accent)" : "none"}
                          stroke={i < t.rating ? "var(--accent)" : "rgba(255,255,255,0.2)"}
                        />
                      ))}
                    </div>
                    <div className="testimonial-quote-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 11L8 17H5L7 11V7H11V11H10ZM18 11L16 17H13L15 11V7H19V11H18Z" fill="var(--primary-light)" fillOpacity="0.3" />
                      </svg>
                    </div>
                  </div>

                  <p className="testimonial-text">{t.text}</p>

                  <div className="testimonial-author mt-auto">
                    <div className="testimonial-image-container">
                      <img src={t.image} alt={t.pet} className="testimonial-image" onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${t.name}&background=004d4d&color=fff`;
                      }} />
                    </div>
                    <div className="testimonial-info">
                      <h4 className="testimonial-author-name">{t.name}</h4>
                      <p className="testimonial-author-pet">{t.pet}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="testimonials-carousel-controls">
          <button
            className="carousel-nav-btn prev"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="carousel-dots">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                className={`carousel-dot ${idx === realIndex ? 'active' : ''}`}
                onClick={() => {
                  setIsTransitioning(true);
                  setCurrentIndex(idx + 3);
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            className="carousel-nav-btn next"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

      </div>
    </section>
  );
};


export default Testimonials;
