import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeProduct, setActiveProduct] = useState<number | null>(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.products-title',
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
        '.product-panel',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.products-accordion',
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const products = [
    {
      id: 1,
      title: 'Tests Rapides',
      subtitle: 'Diagnostic rapide',
      description:
        'Tests antigéniques salivaires et nasopharyngés pour la détection rapide des infections. Notre gamme inclut les tests COVID-19, grippe, et autres pathologies virales.',
      image: '/images/lab1.jpeg',
      gradient: 'from-sky-400/80 via-blue-500/80 to-indigo-600/80',
      accentColor: '#0EA5E9',
      features: ['Résultats en 15 min', 'Facilité d\'utilisation', 'Haute précision'],
    },
    {
      id: 2,
      title: 'Milieux de Culture',
      subtitle: 'Microbiologie',
      description:
        'Milieux de culture prêts à l\'emploi pour la culture bactérienne et fongique. Formulations optimisées pour une croissance microbienne optimale.',
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&h=800&fit=crop',
      gradient: 'from-emerald-400/80 via-teal-500/80 to-cyan-600/80',
      accentColor: '#10B981',
      features: ['Qualité pharmaceutique', 'Stabilité garantie', 'Large gamme'],
    },
    {
      id: 3,
      title: 'Microscopes',
      subtitle: 'Instrumentation',
      description:
        'Nouvelle gamme de microscopes GIGALAB pour la recherche et le diagnostic. Microscopes optiques, fluorescents et électroniques de haute précision.',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&h=800&fit=crop',
      gradient: 'from-violet-400/80 via-purple-500/80 to-fuchsia-600/80',
      accentColor: '#8B5CF6',
      features: ['Optique de précision', 'Design ergonomique', 'Garantie 2 ans'],
    },
    {
      id: 4,
      title: 'Immuno-Analyse',
      subtitle: 'Analyseurs',
      description:
        'Analyseurs d\'immuno-analyse de dernière génération pour le diagnostic in vitro. Automates hautement performants pour les laboratoires de toutes tailles.',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=800&fit=crop',
      gradient: 'from-rose-400/80 via-pink-500/80 to-rose-600/80',
      accentColor: '#F43F5E',
      features: ['Haut débit', 'Précision clinique', 'Interface intuitive'],
    },
  ];

  return (
    <section
      id="products"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-gray-50 to-transparent" />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-30"
          style={{ background: 'linear-gradient(135deg, #EE2C53 0%, #FF6B6B 100%)' }}
        />
      </div>

      <div className="relative z-10 section-padding">
        {/* Section Header */}
        <div className="products-title text-center max-w-3xl mx-auto mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ background: 'rgba(238,44,83,0.08)' }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: 'linear-gradient(135deg, #EE2C53 0%, #FF6B6B 100%)' }}
            />
            <span className="text-[#EE2C53] text-sm font-display font-semibold">
              Nos Produits
            </span>
          </div>
          <h2 className="heading-lg text-gray-900 mb-6">
            Solutions <span className="text-gradient">Diagnostiques</span> Complètes
          </h2>
          <p className="body-lg text-gray-600">
            Une gamme complète de produits et d'équipements pour répondre à tous vos
            besoins en biologie médicale et recherche.
          </p>
        </div>

        {/* Products Accordion */}
        <div className="products-accordion flex flex-col lg:flex-row gap-4 max-w-7xl mx-auto h-auto lg:h-[600px]">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`product-panel relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-out ${activeProduct === index
                  ? 'lg:flex-[4] flex-auto h-[400px] lg:h-auto'
                  : 'lg:flex-1 flex-auto h-[100px] lg:h-auto'
                }`}
              onClick={() => setActiveProduct(index)}
              onMouseEnter={() => setActiveProduct(index)}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={product.image}
                  alt={product.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${activeProduct === index ? 'scale-100' : 'scale-110'
                    }`}
                />
                {/* Gradient Overlay - couleur douce par catégorie */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${product.gradient}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full p-6 lg:p-8 flex flex-col justify-end">
                {/* Collapsed State */}
                <div
                  className={`transition-all duration-500 ${activeProduct === index
                      ? 'opacity-0 translate-y-4 pointer-events-none'
                      : 'opacity-100 translate-y-0'
                    }`}
                >
                  <h3 className="text-white font-display font-bold text-lg lg:text-xl whitespace-nowrap lg:-rotate-90 lg:origin-bottom-left lg:translate-x-8">
                    {product.title}
                  </h3>
                </div>

                {/* Expanded State */}
                <div
                  className={`transition-all duration-500 ${activeProduct === index
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8 pointer-events-none absolute'
                    }`}
                >
                  <span
                    className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm mb-4"
                    style={{ borderLeft: `3px solid ${product.accentColor}` }}
                  >
                    {product.subtitle}
                  </span>
                  <h3 className="text-white font-display font-bold text-2xl lg:text-3xl mb-4">
                    {product.title}
                  </h3>
                  <p className="text-white/80 text-sm lg:text-base mb-6 max-w-md">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-display font-semibold text-sm hover:shadow-lg transition-all duration-300"
                  >
                    Demander un devis
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>

              {/* Index Number */}
              <div
                className={`absolute top-6 right-6 text-6xl font-display font-bold text-white/10 transition-all duration-500 ${activeProduct === index ? 'opacity-100' : 'opacity-0'
                  }`}
              >
                0{product.id}
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-[#EE2C53] text-[#EE2C53] rounded-full font-display font-semibold hover:bg-[#EE2C53] hover:text-white transition-all duration-300"
          >
            Voir tous nos produits
            <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
