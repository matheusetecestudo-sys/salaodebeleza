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
    name: "Corte Feminino e Masculino",
    desc: "Mais que um corte, uma arquitetura capilar personalizada através do visagismo.",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    name: "Luzes e Mechas",
    desc: "Técnicas exclusivas de iluminado que preservam a integridade e saúde dos fios.",
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    name: "Hidratação e Nutrição",
    desc: "Diagnóstico profundo e protocolos personalizados com ativos de alta tecnologia.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 4,
    name: "Escova e Finalização",
    desc: "A finalização perfeita para eventos ou para o seu dia a dia com brilho espelhado.",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f80d77d2?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 5,
    name: "Manicure e Pedicure",
    desc: "Cuidado meticuloso e esmaltação premium em um ambiente de total relaxamento.",
    image: "https://images.unsplash.com/photo-1604654894610-df4906687103?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 6,
    name: "Design de Sobrancelhas",
    desc: "Sobrancelhas desenhadas para harmonizar e elevar sua expressão facial.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 7,
    name: "Barba e Acabamento",
    desc: "O ritual tradicional da barba com toalhas quentes e precisão artesanal.",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 8,
    name: "Limpeza de Pele",
    desc: "Tratamentos que devolvem o viço e a luminosidade natural da sua pele.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 9,
    name: "Progressiva e Selagem",
    desc: "Redução de volume com naturalidade e movimento, sem agredir a fibra.",
    image: "https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 10,
    name: "Alongamento de Unhas",
    desc: "Extensões imperceptíveis e seguras para o comprimento dos seus sonhos.",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 11,
    name: "Maquiagem Profissional",
    desc: "Maquiagem de alta durabilidade para casamentos, festas e ensaios fotográficos.",
    image: "https://images.unsplash.com/photo-1522337660859-02636904415a?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 12,
    name: "Penteados",
    desc: "Criações artísticas para momentos que exigem o máximo de elegância.",
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
    <section id="servicos" className="relative min-h-screen lg:h-screen flex items-center overflow-hidden noir-section py-20 lg:py-0">
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

        <ScrollReveal stagger className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-10">
          <AnimatePresence mode="popLayout">
            {visibleServices.map((service, index) => (
              <motion.div 
                layout
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-[32px] overflow-hidden group flex flex-col h-full transition-all duration-700 hover:-translate-y-3"
              >
                  {/* Image Container */}
                  <div className="relative h-[160px] sm:h-[280px] overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[2.5s] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-noir via-transparent to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-40" />
                    
                    <div className="absolute top-6 left-6">
                      <div className="bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
                        <span className="font-sans text-[9px] font-black tracking-widest text-white uppercase italic">
                          EXPERIENCE
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-4 sm:p-10 flex flex-col flex-grow relative">
                    <h3 className="font-serif text-[15px] sm:text-[28px] font-bold mb-2 sm:mb-4 group-hover:text-brand-primary transition-colors duration-500">
                      {service.name}
                    </h3>
                    
                    <p className="font-sans text-[11px] sm:text-[16px] leading-snug sm:leading-relaxed text-brand-muted-on-noir mb-4 sm:mb-8 font-light">
                      {service.desc}
                    </p>
                    
                    <a 
                      href={getWhatsAppLink(service.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between w-full font-sans font-bold text-[10px] sm:text-[14px] text-brand-primary uppercase tracking-[0.1em] sm:tracking-[0.2em] group/link mt-auto pt-4 border-t border-white/5"
                    >
                      <span>AGENDAR</span>
                      <div className="w-6 h-6 sm:w-12 sm:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover/link:bg-brand-primary group-hover/link:text-white group-hover/link:border-brand-primary group-hover/link:scale-110 transition-all duration-500">
                        <ArrowRight size={12} className="sm:hidden" />
                        <ArrowRight size={20} className="hidden sm:block" />
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
            className="group relative px-8 py-4 sm:px-16 sm:py-8 bg-brand-primary text-white rounded-full font-sans font-bold text-[10px] sm:text-[13px] uppercase tracking-[0.3em] sm:tracking-[0.4em] transition-all duration-500 hover:bg-brand-primary-dark hover:-translate-y-2 active:scale-95 flex items-center gap-6 sm:gap-12 mx-auto overflow-hidden shadow-2xl shadow-brand-primary/20"
          >
            <span className="relative z-10">
              {showAll ? 'RECOLHER' : 'VER MAIS'}
            </span>
            
            <div className={`relative z-10 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white/20 flex items-center justify-center transition-all duration-700 ${showAll ? 'rotate-180' : 'group-hover:rotate-90'}`}>
              {showAll ? <Minus size={16} strokeWidth={3} /> : <Plus size={16} strokeWidth={3} />}
            </div>
          </button>
        </ScrollReveal>
        </div>
      </section>
  );
}
