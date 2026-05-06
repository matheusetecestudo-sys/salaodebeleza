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

  const whatsappUrl = "https://wa.me/5511992876219?text=Olá!%20Gostaria%20de%20agendar%20um%20horário.";

  return (
    <nav 
      className={`fixed top-0 w-full z-[1000] transition-all duration-700 border-b ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl py-3 border-black/5 shadow-2xl' 
          : 'bg-transparent py-6 border-transparent'
      }`}
    >
      <div className="content-container flex items-center h-full">
        {/* Logo Side */}
        <div className="flex-1 flex justify-start">
          <a href="#" className="flex items-baseline group whitespace-nowrap">
            <span className={`font-serif text-[26px] sm:text-[32px] font-bold tracking-[-0.05em] transition-colors duration-500 ${isScrolled ? 'text-black' : 'text-white'}`}>DUNO</span>
          </a>
        </div>

        {/* Links Side (Center) */}
        <div className="hidden lg:flex items-center justify-center gap-8 xl:gap-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`font-sans text-[10px] font-black uppercase tracking-[0.25em] transition-all relative group/link ${
                isScrolled ? 'text-black/50 hover:text-brand-primary' : 'text-white/60 hover:text-white'
              }`}
            >
              <span className="relative z-10 transition-colors">{link.name}</span>
              <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-0 h-[2px] bg-brand-primary group-hover/link:w-full transition-all duration-500" />
            </a>
          ))}
        </div>

        {/* Button Side */}
        <div className="flex-1 hidden md:flex justify-end items-center gap-6">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-7 py-3 rounded-full font-sans font-bold text-[11px] uppercase tracking-[0.15em] transition-all bg-brand-primary text-white hover:bg-brand-primary-dark hover:scale-105 active:scale-95 shadow-lg shadow-brand-primary/10 group"
          >
            AGENDAR
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
