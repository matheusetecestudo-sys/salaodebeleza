import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Avaliações', href: '#avaliacoes' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Contato', href: '#contato' },
  ];

  const whatsappUrl = "https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20um%20horário.";

  return (
    <nav 
      className={`fixed top-0 w-full z-[1000] transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-brand-surface/90 backdrop-blur-md py-4 border-brand-section/50 shadow-brand-sm' 
          : 'bg-transparent py-6 border-transparent'
      }`}
    >
      <div className="content-container flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-baseline group whitespace-nowrap">
          <span className="font-serif text-[32px] font-bold tracking-[-0.05em] text-brand-text group-hover:text-brand-primary transition-colors duration-500">DU</span>
          <span className="font-serif text-[32px] font-bold tracking-[-0.05em] text-brand-primary group-hover:text-brand-text transition-colors duration-500 ml-1">NO</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`font-sans text-[12px] font-bold uppercase tracking-[0.2em] transition-all relative group/link ${
                isScrolled ? 'text-brand-text' : 'text-brand-text'
              }`}
            >
              <span className="relative z-10 group-hover/link:text-brand-primary transition-colors">{link.name}</span>
              <div className="absolute bottom-[-6px] left-0 w-0 h-[1.5px] bg-brand-primary group-hover/link:w-full transition-all duration-500" />
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3 rounded-full font-sans font-bold text-[13px] uppercase tracking-[0.15em] transition-all bg-brand-primary text-white hover:bg-brand-primary-dark shadow-brand-sm group hover:scale-[1.05] active:scale-95 hover:shadow-brand-hover"
          >
            Agendar agora
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-text p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-brand-surface shadow-brand-nav transition-all duration-300 transform ${
          mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col p-8 gap-6 text-center border-t border-brand-section">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-sans text-[20px] font-medium text-brand-text py-2 active:text-brand-primary"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-brand-whatsapp text-white py-5 rounded-full font-sans font-bold text-[18px] mt-2 shadow-brand-sm"
          >
            Agendar agora
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
}
