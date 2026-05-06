import React from 'react';
import ScrollReveal from './ScrollReveal';
import { ArrowRight } from 'lucide-react';

export default function About() {
  const stats = [
    { value: '500+', label: 'clientes atendidas' },
    { value: '5 anos', label: 'de experiência' },
    { value: '100%', label: 'satisfação garantida' },
  ];

  return (
    <section id="sobre" className="section-padding bg-brand-section relative overflow-hidden">
      {/* Luxury Dot Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-brand-primary) 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }} />
      
      {/* Decorative Blobs */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-accent opacity-5 rounded-full -translate-x-1/2 blur-3xl pointer-events-none" />
      
      <div className="content-container relative z-10">
        <div className="grid lg:grid-cols-[45%_55%] gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <ScrollReveal>
            <div className="relative animate group max-w-[450px] mx-auto lg:mx-0">
              <div className="absolute -inset-4 border-2 border-brand-primary placeholder:opacity-10 asymmetric-image-2 scale-95 group-hover:scale-100 transition-transform duration-700 pointer-events-none" />
                <div className="relative">
                <img 
                   src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1200" 
                  alt="Nosso espaço e equipe acolhedora"
                  loading="lazy"
                  className="w-full aspect-[4/5] asymmetric-image-2 shadow-brand-hover object-cover relative z-10 transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute top-8 left-8 bg-brand-primary backdrop-blur-sm py-3 px-6 rounded-full shadow-brand-hover z-20">
                  <span className="font-sans text-[11px] sm:text-[13px] font-bold text-white uppercase tracking-widest">
                    Estabelecido em 2020
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Text Column */}
          <ScrollReveal>
            <div className="animate flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-brand-accent hidden lg:block"></div>
                <span className="font-sans text-[12px] font-semibold tracking-[0.15em] text-brand-accent uppercase">
                  ✦ NOSSA ESSÊNCIA
                </span>
                <div className="h-[1px] w-8 bg-brand-accent lg:hidden"></div>
              </div>
              
              <h2 className="font-serif text-[38px] sm:text-[44px] md:text-[52px] leading-[1.1] font-semibold text-brand-text mb-8 max-w-[500px]">
                Um refúgio para sua melhor <span className="italic text-brand-primary font-normal">versão.</span>
              </h2>
              
              <div className="space-y-8 max-w-[580px]">
                <p className="font-sans text-[17px] leading-[1.8] text-brand-muted">
                  No DU NO, acreditamos que a beleza é uma manifestação do autocuidado e da autoexpressão. Nosso espaço foi projetado para ser um santuário de tranquilidade no caos urbano, onde cada detalhe é pensado para o seu bem-estar.
                </p>
                <div className="grid sm:grid-cols-2 gap-8 text-left">
                  <div className="space-y-3">
                    <h4 className="font-sans font-bold text-brand-text text-[15px] uppercase tracking-wider">Atendimento Humanizado</h4>
                    <p className="font-sans text-[15px] text-brand-muted leading-relaxed">Ouvimos você de verdade para entregar o resultado que você sempre sonhou.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-sans font-bold text-brand-text text-[15px] uppercase tracking-wider">Técnicas Modernas</h4>
                    <p className="font-sans text-[15px] text-brand-muted leading-relaxed">Sempre atualizados com as últimas tendências globais de beleza e visagismo.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 lg:mt-16 pt-12 border-t border-brand-section flex flex-wrap justify-center lg:justify-start gap-8 sm:gap-16">
                {stats.map((stat, idx) => (
                  <div key={idx} className="group text-center lg:text-left">
                    <div className="font-serif text-[42px] sm:text-[54px] text-brand-primary leading-none mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="font-sans text-[11px] sm:text-[12px] font-bold text-brand-muted uppercase tracking-[0.15em]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 lg:mt-16">
                <a href="#agendar" className="w-full sm:w-auto flex items-center justify-center gap-4 bg-brand-primary text-white px-10 py-5 rounded-full font-sans font-bold text-[16px] hover:bg-brand-primary-dark hover:scale-[1.03] active:scale-95 transition-all shadow-brand-sm hover:shadow-brand-hover group">
                  Converse com nossa equipe
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
