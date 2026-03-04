import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#hero' },
    { name: 'À Propos', href: '#about' },
    {
      name: 'Nos Activités',
      href: '#activities',
      dropdown: [
        { name: 'Distribution', href: '#activities' },
        { name: 'Manufacturing', href: '#activities' },
      ],
    },
    { name: 'Produits', href: '#products' },
    { name: 'Valeurs', href: '#values' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
            ? 'bg-white/95 backdrop-blur-lg shadow-lg py-3'
            : 'bg-transparent py-6'
          }`}
      >
        <div className="section-padding">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="flex items-center gap-3 group"
            >
              <img
                src={isScrolled ? '/images/jigajiga.png' : '/images/logo-fr-ar-white-f.png'}
                alt="Gigalab Logo"
                className="h-10 w-auto object-contain transform group-hover:scale-110 transition-transform duration-300"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className={`flex items-center gap-1 font-display font-medium text-sm transition-all duration-300 hover:text-[#EE2C53] ${isScrolled ? 'text-gray-700' : 'text-white/80'
                      }`}
                  >
                    {link.name}
                    {link.dropdown && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''
                          }`}
                      />
                    )}
                  </a>

                  {/* Dropdown */}
                  {link.dropdown && (
                    <div
                      className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 ${activeDropdown === link.name
                          ? 'opacity-100 translate-y-0 pointer-events-auto'
                          : 'opacity-0 -translate-y-2 pointer-events-none'
                        }`}
                    >
                      {link.dropdown.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(item.href);
                          }}
                          className="block px-4 py-3 text-sm font-display text-gray-700 hover:bg-[#EE2C53]/5 hover:text-[#EE2C53] transition-colors duration-200"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contact');
                }}
                className="px-6 py-3 rounded-full font-display font-semibold text-sm bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300"
              >
                Devis Gratuit
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'
                }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
        <div
          className={`absolute top-0 right-0 w-80 max-w-full h-full bg-white shadow-2xl transition-transform duration-500 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="p-6 pt-20">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="block py-3 text-lg font-display font-medium text-gray-800 hover:text-[#EE2C53] transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                  {link.dropdown && (
                    <div className="pl-4 mt-2 space-y-2">
                      {link.dropdown.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(item.href);
                          }}
                          className="block py-2 text-sm font-display text-gray-600 hover:text-[#EE2C53] transition-colors duration-200"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contact');
                }}
                className="mt-4 px-6 py-4 bg-[#EE2C53] text-white rounded-full font-display font-semibold text-center hover:bg-[#C41E3A] transition-all duration-300"
              >
                Devis Gratuit
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
