import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = "https://wa.me/5511992876219?text=Olá!%20Gostaria%20de%20agendar%20um%20horário.";

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-brand-noir/80 backdrop-blur-xl h-20 border-b border-white/5 shadow-2xl' : 'bg-transparent h-28'}`}>
      <div className="content-container flex items-center h-full">
        {/* Logo Side */}
        <div className="flex-1 flex justify-start">
          <a href="#" className="flex items-center group whitespace-nowrap">
            <div className="relative flex items-center">
              <div className={`absolute -inset-4 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 scale-150 bg-brand-primary/10`} />
              <span className={`relative font-serif text-[24px] sm:text-[32px] font-black tracking-[0.15em] transition-all duration-700 flex items-center text-white`}>
                DUNO
                <span className="text-brand-primary ml-3 text-[14px] sm:text-[18px] animate-pulse drop-shadow-[0_0_8px_rgba(var(--color-brand-primary-rgb),0.5)]">✦</span>
              </span>
            </div>
          </a>
        </div>

        {/* Center Navigation - Desktop */}
        <div className="hidden lg:flex items-center gap-10">
          {[
            { name: 'Sobre', href: '#sobre' },
            { name: 'Serviços', href: '#servicos' },
            { name: 'Depoimentos', href: '#avaliacoes' },
            { name: 'FAQ', href: '#faq' },
            { name: 'Contato', href: '#contato' }
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-sans text-[12px] font-bold uppercase tracking-[0.2em] text-white/70 hover:text-brand-primary hover:tracking-[0.3em] transition-all duration-500"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right Side - CTA */}
        <div className="flex-1 flex justify-end">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative hidden sm:flex items-center gap-3 bg-brand-primary hover:bg-brand-primary-dark text-white px-8 py-3.5 rounded-full font-sans font-bold text-[11px] uppercase tracking-[0.2em] transition-all duration-500 shadow-xl shadow-brand-primary/20 hover:-translate-y-1 active:scale-95"
          >
            Agendar
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white hover:text-brand-primary transition-colors duration-300 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-brand-noir/98 backdrop-blur-2xl z-[-1] flex flex-col items-center justify-center gap-10 px-8"
          >
            {[
              { name: 'Sobre', href: '#sobre' },
              { name: 'Serviços', href: '#servicos' },
              { name: 'Depoimentos', href: '#avaliacoes' },
              { name: 'FAQ', href: '#faq' },
              { name: 'Contato', href: '#contato' }
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="font-serif text-[32px] font-bold text-white hover:text-brand-primary transition-all duration-300"
              >
                {item.name}
              </a>
            ))}
            
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center gap-4 bg-brand-primary text-white px-12 py-5 rounded-full font-sans font-bold text-[16px] uppercase tracking-widest"
            >
              Agendar Agora
              <ArrowRight size={20} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
