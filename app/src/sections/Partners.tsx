import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Partners = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.partners-title',
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

      let scrollVelocity = 0;
      const marquee = marqueeRef.current;
      
      if (marquee) {
        gsap.to(marquee, {
          xPercent: -50,
          ease: 'none',
          duration: 30,
          repeat: -1,
        });

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          onUpdate: (self) => {
            scrollVelocity = self.getVelocity();
            const skewAmount = Math.min(Math.max(scrollVelocity / 300, -10), 10);
            gsap.to(marquee, {
              skewX: skewAmount,
              duration: 0.3,
              ease: 'power2.out',
            });
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const partners = [
    { name: 'Apacore', country: '' },
    { name: 'Euro diagnostica', country: '' },
    { name: 'H&r', country: '' },
    { name: 'Tokyo boeki machinery ltd', country: '' },
    { name: 'Dr fooke laboratoire', country: '' },
    { name: 'Vircell', country: '' },
    { name: 'Diagon', country: '' },
    { name: 'Liteon', country: '' },
    { name: 'Ali Fax', country: '' },
    { name: 'Snibe diagnostic', country: '' },
    { name: 'Meridian bioscience inc', country: '' },
    { name: 'IDS', country: '' },
    { name: 'JOKOH', country: '' },
    { name: 'CORMAY', country: '' },
    { name: 'D-tek', country: '' },

  ];

  return (
    <section
      id="partners"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 to-transparent" />
        <div 
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'rgba(238,44,83,0.05)' }}
        />
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="partners-title text-center max-w-3xl mx-auto mb-16 section-padding">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ background: 'rgba(238,44,83,0.08)' }}
          >
            <span 
              className="w-2 h-2 rounded-full"
              style={{ background: 'linear-gradient(135deg, #EE2C53 0%, #FF6B6B 100%)' }}
            />
            <span className="text-[#EE2C53] text-sm font-display font-semibold">
              Nos Partenaires
            </span>
          </div>
          <h2 className="heading-lg text-gray-900 mb-6">
            Ils nous font <span className="text-gradient">Confiance</span>
          </h2>
          <p className="body-lg text-gray-600">
            Nous collaborons avec les plus grandes marques internationales de
            l'industrie biotechnologique pour vous offrir les meilleures solutions.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Marquee */}
          <div ref={marqueeRef} className="flex gap-8 py-8">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="group flex-shrink-0 w-64 h-32 bg-gray-50 rounded-2xl flex flex-col items-center justify-center gap-2 px-6 hover:bg-[#EE2C53]/5 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="text-2xl font-display font-bold text-gray-400 group-hover:text-[#EE2C53] transition-colors duration-300">
                  {partner.name}
                </div>
                <div className="text-xs text-gray-400 group-hover:text-[#EE2C53]/70 transition-colors duration-300">
                  {partner.country}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="section-padding mt-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: '50+', label: 'Partenaires internationaux' },
              { value: '20+', label: 'Pays représentés' },
              { value: '100%', label: 'Produits certifiés' },
              { value: '15+', label: 'Années de partenariat' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-display font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 section-padding">
          <p className="text-gray-600 mb-6">
            Vous souhaitez devenir partenaire ?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-white rounded-full font-display font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            style={{ background: 'linear-gradient(135deg, #EE2C53 0%, #FF6B6B 100%)' }}
          >
            Contactez-nous
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;
