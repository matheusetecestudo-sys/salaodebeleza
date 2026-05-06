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
      className={`fixed top-0 w-full z-[1000] transition-all duration-700 border-b ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl py-4 border-black/5 shadow-2xl' 
          : 'bg-transparent py-8 border-transparent'
      }`}
    >
      <div className="content-container flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-baseline group whitespace-nowrap">
          <span className={`font-serif text-[32px] sm:text-[38px] font-bold tracking-[-0.05em] transition-colors duration-500 ${isScrolled ? 'text-black' : 'text-white'}`}>DU</span>
          <span className="font-serif text-[32px] sm:text-[38px] font-bold tracking-[-0.05em] text-brand-primary ml-1">NO</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`font-sans text-[11px] font-black uppercase tracking-[0.3em] transition-all relative group/link ${
                isScrolled ? 'text-black/70 hover:text-brand-primary' : 'text-white/80 hover:text-white'
              }`}
            >
              <span className="relative z-10 transition-colors">{link.name}</span>
              <div className="absolute bottom-[-8px] left-0 w-0 h-[2px] bg-brand-primary group-hover/link:w-full transition-all duration-500" />
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-10 py-4 rounded-full font-sans font-bold text-[13px] uppercase tracking-[0.2em] transition-all bg-brand-primary text-white hover:bg-brand-primary-dark hover:scale-105 active:scale-95 shadow-2xl shadow-brand-primary/20 group"
          >
            AGENDAR
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 transition-colors duration-500 ${isScrolled ? 'text-black' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-500 transform ${
          mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col p-10 gap-8 text-center border-t border-black/5">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif text-[28px] font-bold text-black hover:text-brand-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 bg-brand-primary text-white py-6 rounded-full font-sans font-bold text-[16px] mt-4 shadow-xl"
          >
            AGENDAR AGORA
            <ArrowRight size={22} />
          </a>
        </div>
      </div>
    </nav>
  );
}
