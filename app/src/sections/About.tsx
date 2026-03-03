import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Award, Users, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { clipPath: 'circle(0% at 50% 50%)', opacity: 0 },
        {
          clipPath: 'circle(100% at 50% 50%)',
          opacity: 1,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        '.about-content > *',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.utils.toArray<HTMLElement>('.stat-number').forEach((stat) => {
        const target = parseInt(stat.dataset.value || '0');
        gsap.fromTo(
          stat,
          { innerText: 0 },
          {
            innerText: target,
            duration: 2,
            ease: 'power2.out',
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: stat,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: Target,
      title: 'Notre Mission',
      description: 'Rendre la technologie médicale accessible à tous les professionnels de santé en Afrique.',
    },
    {
      icon: Award,
      title: 'Notre Engagement',
      description: 'Qualité certifiée et service d\'excellence pour tous nos produits et services.',
    },
    {
      icon: Users,
      title: 'Notre Équipe',
      description: 'Des experts passionnés dédiés à l\'innovation en biotechnologie.',
    },
    {
      icon: TrendingUp,
      title: 'Notre Vision',
      description: 'Devenir le leader africain de la biotechnologie et du diagnostic médical.',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #EE2C53 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/Gigalab-photo-2.jpg"
                alt="Équipe Gigalab"
                className="w-full h-auto object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg, rgba(238,44,83,0.2) 0%, transparent 100%)' }}
              />
            </div>

            {/* Experience Badge */}
            <div
              className="absolute -bottom-8 -right-8 text-white rounded-2xl p-6 shadow-xl"
              style={{ background: 'linear-gradient(135deg, #EE2C53 0%, #FF6B6B 100%)' }}
            >
              <div className="text-4xl font-display font-bold">10+</div>
              <div className="text-sm text-white/80">Années d'expérience</div>
            </div>

            {/* Decorative Elements */}
            <div
              className="absolute -top-4 -left-4 w-24 h-24 rounded-full blur-2xl"
              style={{ background: 'rgba(238,44,83,0.15)' }}
            />
            <div
              className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full blur-2xl"
              style={{ background: 'rgba(147,51,234,0.1)' }}
            />
          </div>

          {/* Content */}
          <div ref={contentRef} className="about-content">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: 'rgba(238,44,83,0.08)' }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: 'linear-gradient(135deg, #EE2C53 0%, #FF6B6B 100%)' }}
              />
              <span className="text-[#EE2C53] text-sm font-display font-semibold">
                À Propos de GIGALAB
              </span>
            </div>

            <h2 className="heading-lg text-gray-900 mb-6">
              Leader de la{' '}
              <span className="text-gradient">Biotechnologie</span> au Maroc
            </h2>

            <p className="body-lg text-gray-600 mb-6">
              GIGALAB est le leader marocain de la distribution d'équipements et de réactifs
              destinés à la biologie médicale. Nous sommes également la{' '}
              <span className="text-[#EE2C53] font-semibold">
                première entreprise africaine
              </span>{' '}
              à nous être lancée dans la production de tests antigéniques salivaires et de
              kits RT-PCR.
            </p>

            <p className="body-md text-gray-600 mb-8">
              Notre engagement envers l'innovation et la qualité nous permet d'offrir des
              solutions diagnostiques de pointe aux professionnels de santé à travers
              l'Afrique.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-5 bg-gray-50 rounded-xl hover:bg-[#EE2C53]/5 transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300"
                    style={{ background: 'rgba(238,44,83,0.1)' }}
                  >
                    <feature.icon
                      className="w-6 h-6 text-[#EE2C53] group-hover:text-[#EE2C53] transition-colors duration-300"
                    />
                  </div>
                  <h3 className="font-display font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {[
            { value: 500, suffix: '+', label: 'Produits distribués' },
            { value: 50, suffix: '+', label: 'Partenaires internationaux' },
            { value: 1000, suffix: '+', label: 'Clients satisfaits' },
            { value: 24, suffix: '/7', label: 'Support technique' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-gray-50 rounded-2xl hover:bg-[#EE2C53]/5 transition-all duration-300 group"
            >
              <div className="text-4xl lg:text-5xl font-display font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">
                <span className="stat-number" data-value={stat.value}>
                  0
                </span>
                {stat.suffix}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
