import { Beaker, Facebook, Linkedin, Youtube, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    navigation: [
      { name: 'Accueil', href: '#hero' },
      { name: 'À Propos', href: '#about' },
      { name: 'Nos Activités', href: '#activities' },
      { name: 'Produits', href: '#products' },
      { name: 'Contact', href: '#contact' },
    ],
    activities: [
      { name: 'Distribution', href: '#activities' },
      { name: 'Manufacturing', href: '#activities' },
      { name: 'Tests Rapides', href: '#products' },
      { name: 'Microscopes', href: '#products' },
    ],
    support: [
      { name: 'FAQ', href: '#' },
      { name: 'Support Technique', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Formation', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/gigalab.ma', label: 'Facebook' },
    { icon: Linkedin, href: 'http://www.linkedin.com/organization/16259688', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://www.youtube.com/channel/UCpARIt9iuqeHHmj01Y6JWTA', label: 'YouTube' },
  ];

  const scrollToSection = (href: string) => {
    if (href === '#') return;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      className="relative text-white overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a0b1a 0%, #2d1b2d 25%, #1a1a2e 50%, #16213e 100%)',
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(238,44,83,0.15) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full blur-[100px]"
        style={{ background: 'radial-gradient(circle, rgba(147,51,234,0.1) 0%, transparent 70%)' }}
      />

      {/* Main Footer */}
      <div className="relative z-10 section-padding py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="flex items-center gap-3 group"
            >
              <img
                src="/images/jigajiga.png"
                alt="Gigalab Logo"
                className="h-10 w-auto object-contain transform group-hover:scale-110 transition-transform duration-300"
              />
            </a>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Leader de la biotechnologie au Maroc. Distribution d'équipements médicaux
              et production de tests diagnostiques.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#EE2C53] transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/60 hover:text-[#EE2C53] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Activities Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Activités</h4>
            <ul className="space-y-3">
              {footerLinks.activities.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/60 hover:text-[#EE2C53] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-[#EE2C53] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>Espérance 2, Rue 3, N°43</li>
              <li>Ain Sebaâ, Casablanca</li>
              <li>+212 522 34 03 15</li>
              <li>info@gigalab.ma</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="section-padding py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Gigalab. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors duration-300">
                Politique de confidentialité
              </a>
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors duration-300">
                Conditions d'utilisation
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#EE2C53] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#C41E3A] transition-all duration-300 z-50 group"
        aria-label="Retour en haut"
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
      </button>
    </footer>
  );
};

export default Footer;
