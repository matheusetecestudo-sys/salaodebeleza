import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight,
  Plus,
  Minus
} from 'lucide-react';

const services = [
  {
    id: 1,
    name: "Arquitetura do Corte",
    desc: "Cortes autorais desenhados através do visagismo.",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    name: "High-End Balayage",
    desc: "Iluminação estratégica que preserva a saúde dos fios.",
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    name: "Protocolos Luxury",
    desc: "Nutrição profunda com ativos de alta tecnologia.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 4,
    name: "Styling & Glow",
    desc: "Finalização premium para brilho e textura impecáveis.",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f80d77d2?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 5,
    name: "Mãos e Pés",
    desc: "Cuidado meticuloso e esmaltação de alta durabilidade.",
    image: "https://images.unsplash.com/photo-1604654894610-df4906687103?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 6,
    name: "Design Facial",
    desc: "Expressão elevada através do design de sobrancelhas.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 7,
    name: "Ritual da Barba",
    desc: "Tratamento tradicional com toalhas quentes e precisão.",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 8,
    name: "Dermo-Estética",
    desc: "Limpeza de pele profunda para renovação celular.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 9,
    name: "Selagem Orgânica",
    desc: "Alinhamento capilar com brilho e movimento natural.",
    image: "https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 10,
    name: "Extensão de Unhas",
    desc: "Alongamentos naturais com resistência e acabamento fino.",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 11,
    name: "Make Editorial",
    desc: "Maquiagem de alta definição para momentos especiais.",
    image: "https://images.unsplash.com/photo-1522337660859-02636904415a?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 12,
    name: "Penteados Arte",
    desc: "Criações exclusivas para casamentos e grandes eventos.",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=600"
  }
];

export default function Services() {
  const [showAll, setShowAll] = useState(false);

  const getWhatsAppLink = (serviceName: string) => {
    return `https://wa.me/5511992876219?text=Olá!%20Tenho%20interesse%20em%20${encodeURIComponent(serviceName)}.%20Gostaria%20de%20agendar!`;
  };

  const visibleServices = showAll ? services : services.slice(0, 6);

  return (
    <section id="servicos" className="relative min-h-screen flex items-center py-24 lg:py-32 overflow-hidden noir-section">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1920" 
          alt="Atmosphere"
          className="w-full h-full object-cover grayscale opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-noir/95 via-brand-noir/90 to-brand-noir" />
      </div>

      {/* Luxury Dot Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-10" style={{ backgroundImage: 'radial-gradient(var(--color-brand-primary) 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} />

      <div className="content-container relative z-20">
        <ScrollReveal className="text-center mb-20">
          <div className="animate">
            <span className="font-sans text-[12px] font-black tracking-[0.4em] text-brand-primary uppercase mb-4 block">
              ✦ MENU DE SERVIÇOS
            </span>
            <h2 className="font-serif text-[44px] md:text-[54px] leading-tight font-bold text-white mb-6">
              Onde o estilo encontra a <span className="italic font-normal text-brand-primary">perfeição</span>
            </h2>
            <p className="font-sans text-[16px] text-brand-muted-on-noir max-w-[600px] mx-auto">
              Técnicas exclusivas desenhadas para elevar sua autoestima e revelar sua verdadeira essência.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-10">
          <AnimatePresence mode="popLayout">
            {visibleServices.map((service, index) => (
              <motion.div 
                layout
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-[24px] sm:rounded-[32px] overflow-hidden group flex flex-col h-full transition-all duration-700 hover:-translate-y-3"
              >
                  {/* Image Container */}
                  <div className="relative h-[130px] sm:h-[260px] overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[2.5s] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-noir via-transparent to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-40" />
                  </div>

                  {/* Content Area */}
                  <div className="p-3 sm:p-8 flex flex-col flex-grow relative text-center sm:text-left">
                    <h3 className="font-serif text-[14px] sm:text-[24px] font-bold mb-1 sm:mb-3 group-hover:text-brand-primary transition-colors duration-500">
                      {service.name}
                    </h3>
                    
                    <p className="font-sans text-[10px] sm:text-[15px] leading-snug sm:leading-relaxed text-brand-muted-on-noir mb-3 sm:mb-6 font-light">
                      {service.desc}
                    </p>
                    
                    <a 
                      href={getWhatsAppLink(service.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between w-full font-sans font-bold text-[9px] sm:text-[13px] text-brand-primary uppercase tracking-[0.1em] sm:tracking-[0.2em] group/link mt-auto pt-2 sm:pt-4 border-t border-white/5"
                    >
                      <span>AGENDAR</span>
                      <div className="w-5 h-5 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover/link:bg-brand-primary group-hover/link:text-white group-hover/link:border-brand-primary group-hover/link:scale-110 transition-all duration-500">
                        <ArrowRight size={10} className="sm:hidden" />
                        <ArrowRight size={16} className="hidden sm:block" />
                      </div>
                    </a>
                  </div>
                </motion.div>
            ))}
          </AnimatePresence>
        </ScrollReveal>

        <ScrollReveal className="text-center mt-24">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="group relative px-6 py-4 sm:px-16 sm:py-8 bg-brand-primary text-white rounded-full font-sans font-bold text-[10px] sm:text-[13px] uppercase tracking-[0.2em] sm:tracking-[0.4em] transition-all duration-500 hover:bg-brand-primary-dark hover:-translate-y-2 active:scale-95 flex items-center gap-4 sm:gap-12 mx-auto overflow-hidden shadow-2xl shadow-brand-primary/20 whitespace-nowrap"
          >
            <span className="relative z-10">
              {showAll ? 'RECOLHER' : 'VER MAIS'}
            </span>
            
            <div className={`relative z-10 w-6 h-6 sm:w-12 sm:h-12 rounded-full bg-white/20 flex items-center justify-center transition-all duration-700 ${showAll ? 'rotate-180' : 'group-hover:rotate-90'} flex-shrink-0`}>
              {showAll ? <Minus size={14} strokeWidth={3} /> : <Plus size={14} strokeWidth={3} />}
            </div>
          </button>
        </ScrollReveal>
        </div>
      </section>
  );
}
