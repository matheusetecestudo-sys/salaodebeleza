import React from 'react';
import ScrollReveal from './ScrollReveal';
import { ArrowRight } from 'lucide-react';

export default function About() {
  const stats = [
    { value: '2k+', label: 'Clientes Atendidas' },
    { value: '10+', label: 'Anos de Luxo' },
    { value: '100%', label: 'Satisfação Real' },
  ];

  const whatsappUrl = "https://wa.me/5511992876219?text=Olá!%20Quero%20conhecer%20o%20estúdio.";

  return (
    <section id="sobre" className="relative min-h-screen flex items-center py-24 lg:py-32 overflow-hidden bg-white">
      {/* Editorial Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="content-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Column */}
          <ScrollReveal direction="left">
            <div className="animate relative">
              <div className="aspect-[4/5] overflow-hidden rounded-[40px] shadow-2xl relative group">
                <img 
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1200" 
                  alt="L'Art de la Beauté"
                  className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-noir/10" />
              </div>
              
              {/* Experience Badge */}
              <div className="absolute -bottom-8 -right-8 bg-brand-noir p-8 sm:p-10 rounded-[32px] shadow-2xl border border-white/10 hidden sm:block">
                <span className="block font-serif text-[42px] font-bold text-brand-primary leading-none mb-1">10+</span>
                <span className="block font-sans text-[11px] font-black tracking-[0.2em] text-white uppercase">Anos de Excelência</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Text Column */}
          <ScrollReveal direction="right">
            <div className="animate text-left">
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="w-10 h-[1px] bg-brand-primary" />
                <span className="font-sans text-[11px] font-black tracking-[0.4em] text-brand-primary uppercase">
                  ✦ NOSSA ESSÊNCIA
                </span>
              </div>
              
              <h2 className="font-serif text-[38px] sm:text-[48px] md:text-[62px] leading-[1.05] font-bold text-brand-noir mb-8">
                Um santuário onde o tempo <span className="italic text-brand-primary font-normal">desacelera</span>.
              </h2>
              
              <div className="max-w-[600px]">
                <p className="font-sans text-[16px] md:text-[18px] leading-relaxed text-gray-600 font-light italic mb-12">
                  O DUNO é um manifesto contra a pressa. Aqui, cada detalhe é tratado com a reverência que sua beleza exige. Não seguimos tendências genéricas; criamos expressões de estilo que são inteiramente suas.
                </p>
                
                <div className="grid grid-cols-3 gap-6 sm:gap-10 text-left mb-16">
                  {stats.map((stat, i) => (
                    <div key={i} className="group">
                      <span className="block font-serif text-[28px] sm:text-[44px] font-bold text-brand-noir group-hover:text-brand-primary transition-colors duration-500">
                        {stat.value}
                      </span>
                      <span className="block font-sans text-[9px] sm:text-[11px] font-black tracking-[0.2em] text-brand-primary uppercase leading-tight">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center lg:justify-start">
                  <a 
                    href={whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full sm:w-auto flex items-center justify-center gap-4 bg-brand-primary text-white px-10 py-5 rounded-full font-sans font-bold text-[13px] sm:text-[15px] uppercase tracking-[0.2em] hover:bg-white hover:text-brand-primary transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(var(--color-brand-primary-rgb),0.4)] active:scale-95 group shadow-2xl shadow-brand-primary/20 whitespace-nowrap"
                  >
                    CONHEÇA NOSSA HISTÓRIA
                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-500 flex-shrink-0" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
