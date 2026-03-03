import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lightbulb, Shield, Users, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Values = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.values-title',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        '.value-card',
        { rotateX: 90, opacity: 0 },
        {
          rotateX: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.values-grid',
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description:
        'Notre cellule R&D prospecte en continu les nouvelles technologies afin de distinguer les meilleures solutions pour nos clients.',
    },
    {
      icon: Shield,
      title: 'Intégrité',
      description:
        'Les règles de l\'art du métier sont nos principales préoccupations. On les respecte et on s\'engage à maintenir les plus hauts standards.',
    },
    {
      icon: Users,
      title: 'Esprit d\'Équipe',
      description:
        'Le succès de la société repose sur le dévouement et l\'esprit collaboratif de l\'ensemble de ses employés.',
    },
    {
      icon: Heart,
      title: 'Satisfaction',
      description:
        'Les soucis de nos clients sont les nôtres et nous mobilisons toutes nos ressources pour être à la hauteur des attentes.',
    },
  ];

  return (
    <section
      id="values"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)' }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl"
          style={{ background: 'rgba(238,44,83,0.05)' }}
        />
      </div>

      <div className="relative z-10 section-padding">
        {/* Section Header */}
        <div className="values-title text-center max-w-3xl mx-auto mb-16">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ background: 'rgba(238,44,83,0.08)' }}
          >
            <span 
              className="w-2 h-2 rounded-full"
              style={{ background: 'linear-gradient(135deg, #EE2C53 0%, #FF6B6B 100%)' }}
            />
            <span className="text-[#EE2C53] text-sm font-display font-semibold">
              Nos Valeurs
            </span>
          </div>
          <h2 className="heading-lg text-gray-900 mb-6">
            Ce qui nous <span className="text-gradient">Anime</span>
          </h2>
          <p className="body-lg text-gray-600">
            Nous aimons ce que nous faisons et nous le faisons avec passion. Nos valeurs
            fondamentales guident chacune de nos actions.
          </p>
        </div>

        {/* Values Grid */}
        <div
          className="values-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          style={{ perspective: '1000px' }}
        >
          {values.map((value, index) => (
            <div
              key={index}
              className="value-card group relative"
              style={{ transformStyle: 'preserve-3d' }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`relative h-full p-8 bg-white rounded-2xl shadow-sm transition-all duration-500 ${
                  hoveredCard === index
                    ? 'shadow-xl -translate-y-2'
                    : 'hover:shadow-md'
                }`}
              >
                {/* Holographic Sheen Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl overflow-hidden transition-opacity duration-500 ${
                    hoveredCard === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/40"
                    style={{
                      transform: 'translateX(-100%) rotate(45deg)',
                      animation:
                        hoveredCard === index
                          ? 'sheen 1s ease-in-out forwards'
                          : 'none',
                    }}
                  />
                </div>

                {/* Icon */}
                <div
                  className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg"
                  style={{ background: 'rgba(238,44,83,0.1)' }}
                >
                  <value.icon className="w-8 h-8 text-[#EE2C53] transition-transform duration-500 group-hover:rotate-12" />
                  {/* Glow Effect */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"
                    style={{ background: 'linear-gradient(135deg, #EE2C53 0%, #FF6B6B 100%)' }}
                  />
                </div>

                {/* Content */}
                <h3 className="relative font-display font-bold text-xl text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="relative text-sm text-gray-600 leading-relaxed">
                  {value.description}
                </p>

                {/* Number */}
                <div
                  className={`absolute top-4 right-4 text-5xl font-display font-bold text-gray-100 transition-all duration-500 ${
                    hoveredCard === index ? 'text-gray-200 scale-110' : ''
                  }`}
                >
                  0{index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <blockquote className="relative">
            <span 
              className="absolute -top-8 -left-4 text-8xl font-display"
              style={{ color: 'rgba(238,44,83,0.1)' }}
            >
              "
            </span>
            <p className="text-xl lg:text-2xl font-display font-medium text-gray-700 italic">
              Nous aimons ce que nous faisons et nous le faisons avec{' '}
              <span className="text-gradient">passion</span>.
            </p>
          </blockquote>
        </div>
      </div>

      {/* CSS for sheen animation */}
      <style>{`
        @keyframes sheen {
          0% {
            transform: translateX(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(100%) rotate(45deg);
          }
        }
      `}</style>
    </section>
  );
};

export default Values;
