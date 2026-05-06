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
    name: "Corte de Cabelo",
    desc: "Feminino, masculino e infantil com acabamento profissional.",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    name: "Coloração e Luzes",
    desc: "Mudança de cor, mechas e técnicas modernas com resultado natural.",
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    name: "Tratamentos Capilares",
    desc: "Hidratação, reconstrução e cuidados para saúde dos fios.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 4,
    name: "Escova e Finalização",
    desc: "Modelagem para deixar o cabelo alinhado e com brilho.",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f80d77d2?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 5,
    name: "Manicure e Pedicure",
    desc: "Cuidados completos para unhas das mãos e pés.",
    image: "https://images.unsplash.com/photo-1604654894610-df4906687103?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 6,
    name: "Sobrancelhas e Design",
    desc: "Modelagem que valoriza o formato do rosto.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 7,
    name: "Barba e Acabamento Masculino",
    desc: "Aparar, desenhar e cuidar da barba com precisão.",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 8,
    name: "Depilação",
    desc: "Remoção de pelos com métodos práticos e eficazes.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 9,
    name: "Progressiva e Alisamentos",
    desc: "Redução de volume e alinhamento dos fios.",
    image: "https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 10,
    name: "Alongamento de Unhas",
    desc: "Unhas mais longas, resistentes e bem cuidadas.",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 11,
    name: "Maquiagem Profissional",
    desc: "Produção para eventos e ocasiões especiais.",
    image: "https://images.unsplash.com/photo-1522337660859-02636904415a?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 12,
    name: "Penteados e Produções",
    desc: "Penteados para festas, casamentos e formaturas.",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=600"
  }
];

export default function Services() {
  const [showAll, setShowAll] = useState(false);

  const getWhatsAppLink = (serviceName: string) => {
    return `https://wa.me/5511999999999?text=Olá!%20Tenho%20interesse%20em%20${encodeURIComponent(serviceName)}.%20Gostaria%20de%20agendar!`;
  };

  const visibleServices = showAll ? services : services.slice(0, 6);

  return (
    <section id="servicos" className="section-padding noir-section relative overflow-hidden">
      {/* Luxury Dot Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-brand-primary) 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} />
      
      {/* Glow effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary opacity-[0.03] blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-primary opacity-[0.02] blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="content-container relative z-10">
        <ScrollReveal className="text-center mb-20">
          <div className="animate">
            <span className="font-sans text-[12px] font-black tracking-[0.5em] text-brand-primary uppercase mb-6 block">
              ✦ EXPERIÊNCIAS EXCLUSIVAS
            </span>
            <h2 className="font-serif text-[44px] sm:text-[64px] leading-[1] font-bold mb-8">
              Assinaturas de <span className="italic font-normal text-brand-primary">Beleza</span>
            </h2>
            <p className="font-sans text-[16px] md:text-[20px] text-brand-muted-on-noir max-w-[700px] mx-auto italic font-light">
              Técnicas de alta performance e produtos selecionados para um resultado impecável.
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
