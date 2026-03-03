import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Facebook,
  Linkedin,
  Youtube,
  CheckCircle2,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-title',
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
        '.form-line',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        '.info-card',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.info-cards',
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      lines: [
        'Espérance 2, Rue 3, N°43',
        'Ain Sebaâ, Casablanca, Maroc',
      ],
    },
    {
      icon: Phone,
      title: 'Téléphone',
      lines: ['+212 522 34 03 15', '+212 522 35 29 22'],
    },
    {
      icon: Mail,
      title: 'Email',
      lines: ['info@gigalab.ma'],
    },
    {
      icon: Clock,
      title: 'Heures de travail',
      lines: ['Lun - Ven / 9:00 - 18:00'],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/gigalab.ma', label: 'Facebook' },
    { icon: Linkedin, href: 'http://www.linkedin.com/organization/16259688', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://www.youtube.com/channel/UCpARIt9iuqeHHmj01Y6JWTA', label: 'YouTube' },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)' }}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute bottom-0 right-0 w-1/2 h-full"
          style={{ background: 'linear-gradient(135deg, rgba(238,44,83,0.03) 0%, transparent 100%)' }}
        />
        <div 
          className="absolute top-20 left-20 w-64 h-64 rounded-full blur-3xl"
          style={{ background: 'rgba(238,44,83,0.05)' }}
        />
      </div>

      <div className="relative z-10 section-padding">
        {/* Section Header */}
        <div className="contact-title text-center max-w-3xl mx-auto mb-16">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ background: 'rgba(238,44,83,0.08)' }}
          >
            <span 
              className="w-2 h-2 rounded-full"
              style={{ background: 'linear-gradient(135deg, #EE2C53 0%, #FF6B6B 100%)' }}
            />
            <span className="text-[#EE2C53] text-sm font-display font-semibold">
              Contact
            </span>
          </div>
          <h2 className="heading-lg text-gray-900 mb-6">
            Parlons de vos <span className="text-gradient">Projets</span>
          </h2>
          <p className="body-lg text-gray-600">
            Besoin d'un devis ou d'informations ? Notre équipe est à votre écoute pour
            répondre à toutes vos questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="info-cards space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="info-card group flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300"
                  style={{ background: 'rgba(238,44,83,0.1)' }}
                >
                  <info.icon className="w-6 h-6 text-[#EE2C53] group-hover:text-[#EE2C53] transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-gray-900 mb-2">
                    {info.title}
                  </h3>
                  {info.lines.map((line, i) => (
                    <p key={i} className="text-gray-600">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="pt-6">
              <h3 className="font-display font-semibold text-gray-900 mb-4">
                Suivez-nous
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm hover:shadow-lg hover:bg-[#EE2C53] hover:text-white transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6 animate-scale-in"
                  style={{ background: 'rgba(238,44,83,0.1)' }}
                >
                  <CheckCircle2 className="w-10 h-10 text-[#EE2C53]" />
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                  Message envoyé !
                </h3>
                <p className="text-gray-600">
                  Nous vous répondrons dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="block text-sm font-display font-medium text-gray-700 mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      required
                      className={`w-full px-4 py-3 bg-gray-50 rounded-xl border-2 transition-all duration-300 outline-none ${
                        focusedField === 'name'
                          ? 'border-[#EE2C53] bg-white'
                          : 'border-transparent hover:border-gray-200'
                      }`}
                      placeholder="Votre nom"
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-display font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className={`w-full px-4 py-3 bg-gray-50 rounded-xl border-2 transition-all duration-300 outline-none ${
                        focusedField === 'email'
                          ? 'border-[#EE2C53] bg-white'
                          : 'border-transparent hover:border-gray-200'
                      }`}
                      placeholder="votre@email.com"
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-sm font-display font-medium text-gray-700 mb-2">
                    Sujet
                  </label>
                  <input
                    type="text"
                    required
                    className={`w-full px-4 py-3 bg-gray-50 rounded-xl border-2 transition-all duration-300 outline-none ${
                      focusedField === 'subject'
                        ? 'border-[#EE2C53] bg-white'
                        : 'border-transparent hover:border-gray-200'
                    }`}
                    placeholder="Sujet de votre message"
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                <div className="relative">
                  <label className="block text-sm font-display font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    className={`w-full px-4 py-3 bg-gray-50 rounded-xl border-2 transition-all duration-300 outline-none resize-none ${
                      focusedField === 'message'
                        ? 'border-[#EE2C53] bg-white'
                        : 'border-transparent hover:border-gray-200'
                    }`}
                    placeholder="Votre message..."
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full px-8 py-4 text-white rounded-full font-display font-semibold flex items-center justify-center gap-3 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #EE2C53 0%, #FF6B6B 100%)' }}
                >
                  <span 
                    className="absolute inset-0 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"
                    style={{ background: 'linear-gradient(135deg, #C41E3A 0%, #EE2C53 100%)' }}
                  />
                  <span className="relative flex items-center gap-3">
                    Envoyer le message
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
