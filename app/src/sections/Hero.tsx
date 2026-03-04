import { useEffect, useRef} from 'react';
import gsap from 'gsap';
import { Truck, Factory } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.hero-title-line', { y: 100, opacity: 0 });
      gsap.set('.hero-subtitle', { y: 40, opacity: 0 });
      gsap.set('.hero-buttons', { y: 40, opacity: 0 });
      gsap.set('.hero-stats', { y: 40, opacity: 0 });
      gsap.set('.floating-icon', { scale: 0, opacity: 0 });

      const tl = gsap.timeline({ delay: 0.3 });

      tl.to('.hero-title-line', {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
      })
        .to('.hero-subtitle', {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
        }, '-=0.6')
        .to('.hero-buttons', {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
        }, '-=0.5')
        .to('.hero-stats', {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
        }, '-=0.4')
        .to('.floating-icon', {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)',
        }, '-=0.3');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  

  

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a0b1a 0%, #2d1b2d 25%, #1a1a2e 50%, #16213e 75%, #0f3460 100%)',
      }}
    >
      {/* Animated Background Elements */}
      

      <div className="relative z-10 w-full section-padding py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="hero-subtitle inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-sm rounded-full mb-10 border border-white/10">
            <span className="w-2 h-2 bg-[#EE2C53] rounded-full animate-pulse" />
            <span className="text-white/70 text-sm font-display font-medium tracking-wide">
              Leader en Biotechnologie au Maroc
            </span>
          </div>

          {/* Title */}
          <h1 className="mb-8">
            <span className="hero-title-line block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white tracking-tight">
              We Move
            </span>
            <span
              className="hero-title-line block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mt-2"
              style={{
                background: 'linear-gradient(90deg, #EE2C53 0%, #FF6B6B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Behind Science
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            Distribution d'équipements de biologie médicale & Manufacturing de tests diagnostiques de pointe.
          </p>

          {/* Buttons */}
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#activities"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#activities');
              }}
              className="group px-8 py-4 bg-white text-gray-900 rounded-full font-display font-semibold flex items-center justify-center gap-3 hover:bg-gray-100 hover:shadow-lg hover:shadow-white/10 transition-all duration-300"
            >
              <Truck className="w-5 h-5" />
              Distribution
            </a>
            <a
              href="#activities"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#activities');
              }}
              className="group px-8 py-4 text-white rounded-full font-display font-semibold flex items-center justify-center gap-3 hover:shadow-lg transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #EE2C53 0%, #FF6B6B 100%)' }}
            >
              <Factory className="w-5 h-5" />
              Manufacturing
            </a>
          </div>

          {/* Stats */}
          <div className="hero-stats flex flex-wrap justify-center gap-8 sm:gap-16">
            {[
              { value: '10+', label: 'Années d\'expérience' },
              { value: '500+', label: 'Produits' },
              { value: '24/7', label: 'Support' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div
                  className="text-3xl sm:text-4xl font-display font-bold mb-1"
                  style={{
                    background: 'linear-gradient(90deg, #EE2C53 0%, #FF6B6B 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
