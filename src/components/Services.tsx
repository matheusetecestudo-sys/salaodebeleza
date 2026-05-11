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
    image: "/images/corte_de_cabelo_full.png"
  },
  {
    id: 2,
    name: "Coloração e Luzes",
    desc: "Mudança de cor, mechas e técnicas modernas com resultado natural.",
    image: "/images/coloracao_e_luzes_full.png"
  },
  {
    id: 3,
    name: "Tratamentos Capilares",
    desc: "Hidratação, reconstrução e cuidados para saúde dos fios.",
    image: "/images/tratamentos_capilares_full.png"
  },
  {
    id: 4,
    name: "Escova e Finalização",
    desc: "Modelagem para deixar o cabelo alinhado e com brilho.",
    image: "/images/escova_e_finalizacao_full.png"
  },
  {
    id: 5,
    name: "Manicure e Pedicure",
    desc: "Cuidados completos para unhas das mãos e pés.",
    image: "/images/manicure_e_pedicure_full.png"
  },
  {
    id: 6,
    name: "Sobrancelhas e Design",
    desc: "Modelagem que valoriza o formato do rosto.",
    image: "/images/sobrancelhas_e_design_full.png"
  },
  {
    id: 7,
    name: "Barba e Acabamento Masculino",
    desc: "Aparar, desenhar e cuidar da barba com precisão.",
    image: "/images/barba_e_acabamento_masculino_full.png"
  },
  {
    id: 8,
    name: "Depilação",
    desc: "Remoção de pelos com métodos práticos e eficazes.",
    image: "/images/depilacao_full.png"
  },
  {
    id: 9,
    name: "Progressiva e Alisamentos",
    desc: "Redução de volume e alinhamento dos fios.",
    image: "/images/progressiva_e_alisamentos_full.png"
  },
  {
    id: 10,
    name: "Alongamento de Unhas",
    desc: "Unhas mais longas, resistentes e bem cuidadas.",
    image: "/images/alongamento_de_unhas_full.png"
  },
  {
    id: 11,
    name: "Maquiagem Profissional",
    desc: "Produção para eventos e ocasiões especiais.",
    image: "/images/maquiagem_profissional_full.png"
  },
  {
    id: 12,
    name: "Penteados e Produções",
    desc: "Penteados para festas, casamentos e formaturas.",
    image: "/images/penteados_e_producoes_full.png"
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
              ✦ O ÁPICE DA ESTÉTICA
            </span>
            <h2 className="font-serif text-[44px] md:text-[54px] leading-tight font-bold text-white mb-6">
              Menu de <span className="italic font-normal text-brand-primary">Assinaturas</span> de Poder.
            </h2>
            <p className="font-sans text-[16px] text-brand-muted-on-noir max-w-[600px] mx-auto italic font-light">
              Protocolos de altíssima performance desenhados para mulheres que não aceitam nada menos que a perfeição absoluta.
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

        <ScrollReveal className="text-center mt-24 relative">
          {/* Subtle Glow behind button */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none" />
          
          <button 
            onClick={() => setShowAll(!showAll)}
            className="group relative px-8 py-3.5 sm:py-4 bg-brand-primary text-white rounded-full font-sans font-bold text-[11px] sm:text-[12px] uppercase tracking-[0.2em] transition-all duration-500 hover:bg-brand-primary-dark hover:text-white hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(var(--color-brand-primary-rgb),0.3)] active:scale-95 flex items-center gap-4 mx-auto overflow-hidden shadow-2xl shadow-brand-primary/20 whitespace-nowrap z-10"
          >
            <span className="relative z-10">
              {showAll ? 'RECOLHER' : 'VER MAIS'}
            </span>
            
            <div className={`relative z-10 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-all duration-700 ${showAll ? 'rotate-180' : 'group-hover:rotate-90'} flex-shrink-0`}>
              {showAll ? <Minus size={14} strokeWidth={3} /> : <Plus size={14} strokeWidth={3} />}
            </div>
          </button>
        </ScrollReveal>
        </div>
      </section>
  );
}
