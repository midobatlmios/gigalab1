import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Truck, Factory, ArrowRight, CheckCircle2, Package, FlaskConical, Microscope } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Activities = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<'distribution' | 'manufacturing'>('distribution');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.activities-title',
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
        '.activity-card',
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.activities-grid',
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const activities = {
    distribution: {
      icon: Truck,
      title: 'Distribution',
      subtitle: 'Équipements & Réactifs',
      description:
        'Leader marocain de la distribution des équipements et réactifs destinés à la biologie médicale. Nous importons et distribuons les meilleures marques internationales.',
      features: [
        'Immuno-analyseurs',
        'Sérologie',
        'Hématologie',
        'Biochimie',
        'Microbiologie',
        'Consommables',
      ],
      stats: [
        { value: '500+', label: 'Produits' },
        { value: '50+', label: 'Partenaires' },
        { value: '100%', label: 'Garantie' },
      ],
      image: '/images/x8.jpg',
    },
    manufacturing: {
      icon: Factory,
      title: 'Manufacturing',
      subtitle: 'Production Locale',
      description:
        'Première entreprise africaine à produire des tests antigéniques salivaires et des kits RT-PCR. Notre unité de production respecte les normes internationales les plus strictes.',
      features: [
        'Tests antigéniques salivaires',
        'Kits RT-PCR',
        'Milieux de culture',
        'Tests rapides',
        'Microscopes',
        'R&D continue',
      ],
      stats: [
        { value: '1ère', label: 'En Afrique' },
        { value: 'ISO', label: 'Certifiée' },
        { value: '100%', label: 'Made in Morocco' },
      ],
      image: '/images/Mpox.jpg',
    },
  };

  const currentActivity = activities[activeTab];

  return (
    <section
      id="activities"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)' }}
    >
      {/* Background Elements */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full"
        style={{ background: 'linear-gradient(135deg, rgba(238,44,83,0.03) 0%, transparent 100%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl"
        style={{ background: 'rgba(238,44,83,0.05)' }}
      />

      <div className="relative z-10 section-padding">
        {/* Section Header */}
        <div className="activities-title text-center max-w-3xl mx-auto mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ background: 'rgba(238,44,83,0.08)' }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: 'linear-gradient(135deg, #EE2C53 0%, #FF6B6B 100%)' }}
            />
            <span className="text-[#EE2C53] text-sm font-display font-semibold">
              Nos Activités
            </span>
          </div>
          <h2 className="heading-lg text-gray-900 mb-6">
            De la <span className="text-gradient">Distribution</span> à la{' '}
            <span className="text-gray-500">Production</span>
          </h2>
          <p className="body-lg text-gray-600">
            GIGALAB couvre l'ensemble de la chaîne de valeur en biotechnologie, de
            l'importation des meilleurs équipements à la production locale de tests
            diagnostiques.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {(Object.keys(activities) as Array<keyof typeof activities>).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-4 rounded-full font-display font-semibold flex items-center gap-3 transition-all duration-300 ${activeTab === tab
                ? 'text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              style={{
                background: activeTab === tab ? 'linear-gradient(135deg, #EE2C53 0%, #FF6B6B 100%)' : undefined,
                boxShadow: activeTab === tab ? '0 10px 30px rgba(238,44,83,0.3)' : undefined,
              }}
            >
              {tab === 'distribution' ? (
                <Truck className="w-5 h-5" />
              ) : (
                <Factory className="w-5 h-5" />
              )}
              {activities[tab].title}
            </button>
          ))}
        </div>

        {/* Content Card */}
        <div className="activities-grid max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 lg:h-auto">
                <img
                  src={currentActivity.image}
                  alt={currentActivity.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(90deg, rgba(238,44,83,0.4) 0%, transparent 100%)' }}
                />
                <div className="absolute top-6 left-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full">
                    <currentActivity.icon className="w-5 h-5 text-[#EE2C53]" />
                    <span className="font-display font-semibold text-gray-900">
                      {currentActivity.subtitle}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12">
                <h3 className="heading-md text-gray-900 mb-4">
                  {currentActivity.title}
                </h3>
                <p className="body-md text-gray-600 mb-8">
                  {currentActivity.description}
                </p>

                {/* Features */}
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {currentActivity.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#EE2C53] flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex gap-8 mb-8 pb-8 border-b border-gray-100">
                  {currentActivity.stats.map((stat, index) => (
                    <div key={index}>
                      <div className="text-2xl font-display font-bold text-gradient">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#products"
                  className="group inline-flex items-center gap-2 font-display font-semibold text-[#EE2C53] hover:gap-4 transition-all duration-300"
                >
                  En savoir plus
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid sm:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          {[
            {
              icon: Package,
              title: 'Nos Produits',
              description: 'Découvrez notre catalogue complet',
              href: '#products',
            },
            {
              icon: FlaskConical,
              title: 'R&D',
              description: 'Innovation et développement',
              href: '#',
            },
            {
              icon: Microscope,
              title: 'Services',
              description: 'Support technique et formation',
              href: '#',
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300"
                style={{ background: 'rgba(238,44,83,0.1)' }}
              >
                <item.icon className="w-6 h-6 text-[#EE2C53] group-hover:text-[#EE2C53] transition-colors duration-300" />
              </div>
              <h3 className="font-display font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
