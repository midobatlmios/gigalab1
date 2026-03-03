import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Beaker, Microscope, FlaskConical, Truck, Factory } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      setMousePosition({
        x: (clientX / innerWidth - 0.5) * 20,
        y: (clientY / innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
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
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div
          className="absolute top-20 left-[10%] w-[500px] h-[500px] rounded-full blur-[120px] animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(238,44,83,0.25) 0%, transparent 70%)',
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          }}
        />
        <div
          className="absolute bottom-20 right-[10%] w-[400px] h-[400px] rounded-full blur-[100px] animate-float animation-delay-500"
          style={{
            background: 'radial-gradient(circle, rgba(255,107,107,0.2) 0%, transparent 70%)',
            transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px]"
          style={{
            background: 'radial-gradient(circle, rgba(147,51,234,0.15) 0%, transparent 70%)',
            transform: `translate(calc(-50% + ${mousePosition.x * 0.2}px), calc(-50% + ${mousePosition.y * 0.2}px))`,
          }}
        />

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        {/* Floating Icons */}
        <div
          className="floating-icon absolute top-[20%] left-[8%] text-white/10"
          style={{
            transform: `translate(${mousePosition.x * 1.2}px, ${mousePosition.y * 1.2}px)`,
          }}
        >
          <Beaker className="w-16 h-16" />
        </div>
        <div
          className="floating-icon absolute top-[30%] right-[12%] text-white/10 animation-delay-200"
          style={{
            transform: `translate(${mousePosition.x * -1}px, ${mousePosition.y * -1}px)`,
          }}
        >
          <Microscope className="w-20 h-20" />
        </div>
        <div
          className="floating-icon absolute bottom-[25%] left-[15%] text-white/10 animation-delay-400"
          style={{
            transform: `translate(${mousePosition.x * 0.8}px, ${mousePosition.y * 0.8}px)`,
          }}
        >
          <FlaskConical className="w-14 h-14" />
        </div>
      </div>

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
