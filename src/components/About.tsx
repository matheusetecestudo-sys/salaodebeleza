import React from 'react';
import ScrollReveal from './ScrollReveal';
import { ArrowRight } from 'lucide-react';

export default function About() {
  const stats = [
    { value: '500+', label: 'clientes atendidas' },
    { value: '5 anos', label: 'de experiência' },
    { value: '100%', label: 'satisfação garantida' },
  ];

  const whatsappUrl = "https://wa.me/5511992876219?text=Olá!%20Quero%20conhecer%20o%20estúdio.";

  return (
    <section id="sobre" className="relative min-h-screen flex items-center py-24 lg:py-32 overflow-hidden bg-white">
      {/* Editorial Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="content-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
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
              
              <div className="max-w-[600px] w-full">
                <p className="font-sans text-[16px] md:text-[18px] leading-relaxed text-gray-600 font-light italic mb-12">
                  O DUNO é um manifesto contra a pressa. Aqui, cada detalhe é tratado com a reverência que sua beleza exige. Não seguimos tendências genéricas; criamos expressões de estilo que são inteiramente suas.
                </p>
                
                    <p className="font-sans text-[14px] text-brand-muted-on-noir leading-relaxed font-light italic">Cada etapa é desenhada para ser inesquecível e única.</p>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-4 sm:gap-8 mb-10 text-center lg:text-left">
                  {stats.map((stat, idx) => (
                    <div key={idx} className="group/stat cursor-default">
                      <div className="font-serif text-[28px] sm:text-[44px] font-bold text-white mb-1 group-hover/stat:text-brand-primary transition-colors duration-500">
                        {stat.value}
                      </div>
                      <div className="font-sans text-[8px] sm:text-[10px] font-bold text-brand-primary uppercase tracking-[0.1em] sm:tracking-[0.2em] leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center lg:justify-start">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-brand-primary text-white px-6 sm:px-12 py-4 sm:py-5 rounded-full font-sans font-bold text-[13px] sm:text-[16px] hover:bg-brand-primary-dark hover:shadow-2xl hover:shadow-brand-primary/20 hover:-translate-y-2 active:scale-95 transition-all duration-700 group shadow-xl whitespace-nowrap">
                    CONVERSE COM NOSSA EQUIPE
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
