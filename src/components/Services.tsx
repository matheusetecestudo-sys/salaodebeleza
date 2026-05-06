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
    <section id="servicos" className="section-padding bg-brand-bg relative overflow-hidden">
      {/* Luxury Dot Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-brand-primary) 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }} />
      
      <div className="content-container relative z-10">
        <ScrollReveal className="text-center mb-16">
          <div className="animate">
            <span className="font-sans text-[12px] font-black tracking-[0.4em] text-brand-primary uppercase mb-4 block">
              ✦ MENU DE EXPERIÊNCIAS
            </span>
            <h2 className="font-serif text-[44px] sm:text-[56px] leading-[1.1] font-bold text-brand-text mb-6">
              Assinaturas de <span className="italic font-normal text-brand-primary">Beleza</span>
            </h2>
            <p className="font-sans text-[16px] md:text-[18px] text-brand-muted max-w-[600px] mx-auto italic">
              Um menu curado com técnicas internacionais para resultados extraordinários.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-12">
          <AnimatePresence mode="popLayout">
            {visibleServices.map((service, index) => (
              <motion.div 
                layout
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-[24px] sm:rounded-[40px] shadow-sm border border-brand-section/50 hover:shadow-xl hover:shadow-brand-primary/5 hover:-translate-y-2 hover:scale-[1.01] transition-all duration-500 group overflow-hidden flex flex-col h-full animate"
              >
                  {/* Image Container - Approximately 30% of card visual weight */}
                  <div className="relative h-[160px] sm:h-[240px] overflow-hidden border-b border-brand-section">
                    <img 
                      src={service.image} 
                      alt={service.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                    />
                    {/* Subtle Overlay for context depth */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-text/40 to-transparent transition-opacity duration-700" />
                    
                    {/* Floating Category Badge */}
                    <div className="absolute top-3 left-3 sm:top-5 sm:left-5 bg-white/20 backdrop-blur-md px-2 py-1 sm:px-4 sm:py-1.5 rounded-full border border-white/20 group-hover:bg-brand-primary/20 transition-colors duration-500">
                      <span className="font-sans text-[7px] sm:text-[9px] font-black tracking-widest text-white uppercase italic">
                        PREMIUM
                      </span>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-5 sm:p-10 flex flex-col flex-grow bg-white relative transition-colors duration-500 group-hover:bg-brand-bg/50">
                    <h3 className="font-serif text-[18px] sm:text-[20px] font-bold text-brand-text tracking-tight mb-2 sm:mb-4 group-hover:text-brand-primary transition-colors duration-500">
                      {service.name}
                    </h3>
                    
                    <p className="font-sans text-[13px] sm:text-[14px] leading-relaxed text-brand-muted mb-4 sm:mb-10">
                      {service.desc}
                    </p>
                    
                    <a 
                      href={getWhatsAppLink(service.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between w-full font-sans font-bold text-[11px] sm:text-[13px] text-brand-primary uppercase tracking-[0.1em] sm:tracking-[0.2em] group/link mt-auto py-2 border-t border-brand-section pt-4 sm:pt-8"
                    >
                      <span className="hidden sm:inline">Reservar</span>
                      <span className="sm:hidden">Agendar</span>
                      <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-brand-bg border border-brand-primary/10 flex items-center justify-center group-hover/link:bg-brand-primary group-hover/link:text-white group-hover/link:border-brand-primary group-hover/link:scale-110 transition-all duration-500 shadow-md">
                        <ArrowRight size={14} className="sm:hidden" />
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
            className="group relative px-14 py-7 bg-white text-brand-text rounded-[24px] font-sans font-bold text-[12px] uppercase tracking-[0.3em] transition-all duration-500 hover:shadow-xl hover:shadow-brand-primary/10 hover:-translate-y-1 active:scale-95 flex items-center gap-12 overflow-hidden border border-brand-section shadow-sm mx-auto"
          >
            {/* Soft Overlay */}
            <div className="absolute inset-0 bg-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-1 group-hover:text-brand-primary">
              {showAll ? 'Recolher Menu' : 'Descubra mais serviços'}
            </span>
            
            <div className={`relative z-10 w-11 h-11 rounded-full bg-brand-primary text-white flex items-center justify-center transition-all duration-700 shadow-md ${showAll ? 'rotate-180 scale-90' : 'group-hover:rotate-90 group-hover:scale-110'}`}>
              {showAll ? <Minus size={20} strokeWidth={3} /> : <Plus size={20} strokeWidth={3} />}
            </div>
          </button>
        </ScrollReveal>
        </div>
      </section>
  );
}
