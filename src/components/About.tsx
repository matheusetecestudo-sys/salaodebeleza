import React from 'react';
import ScrollReveal from './ScrollReveal';
import { ArrowRight } from 'lucide-react';

export default function About() {
  const stats = [
    { value: '500+', label: 'clientes atendidas' },
    { value: '5 anos', label: 'de experiência' },
    { value: '100%', label: 'satisfação garantida' },
  ];

  const whatsappUrl = "https://wa.me/5511999999999?text=Olá!%20Quero%20conhecer%20o%20estúdio.";

  return (
    <section id="sobre" className="section-padding bg-brand-bg relative overflow-hidden">
      {/* Luxury Dot Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-brand-primary) 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }} />
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-primary opacity-[0.05] rounded-full -translate-x-1/2 blur-[120px] pointer-events-none" />
      
      <div className="content-container relative z-10">
        <div className="grid lg:grid-cols-[45%_55%] gap-12 lg:gap-24 items-center">
          {/* Image Column */}
          <ScrollReveal>
            <div className="relative animate group max-w-[500px] mx-auto lg:mx-0">
              <div className="absolute -inset-6 border border-brand-primary/20 asymmetric-image-2 scale-95 group-hover:scale-100 transition-all duration-[1.5s] pointer-events-none" />
                <div className="relative">
                <img 
                   src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1200" 
                  alt="Nosso espaço e equipe acolhedora"
                  loading="lazy"
                  className="w-full aspect-[4/5] asymmetric-image-2 shadow-2xl object-cover relative z-10 transition-all duration-[1.5s] group-hover:scale-[1.02]"
                />
                <div className="absolute top-10 left-10 bg-brand-primary backdrop-blur-md py-4 px-8 rounded-full shadow-2xl z-20">
                  <span className="font-sans text-[11px] sm:text-[14px] font-black text-white uppercase tracking-[0.2em]">
                    EST. 2020
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Text Column */}
          <ScrollReveal>
            <div className="animate flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] w-12 bg-brand-primary/40 hidden lg:block"></div>
                <span className="font-sans text-[12px] font-black tracking-[0.5em] text-brand-primary uppercase">
                  ✦ NOSSA ESSÊNCIA
                </span>
                <div className="h-[1px] w-12 bg-brand-primary/40 lg:hidden"></div>
              </div>
              
              <h2 className="font-serif text-[44px] sm:text-[56px] md:text-[68px] leading-[1] font-bold text-brand-text mb-10">
                Um santuário de <span className="italic text-brand-primary font-normal">sofisticação</span> e cuidado.
              </h2>
              
              <div className="space-y-10 max-w-[650px]">
                <p className="font-sans text-[18px] md:text-[20px] leading-relaxed text-brand-muted mb-14 font-light italic">
                  O DU NO Studio não é apenas um salão; é um manifesto contra a pressa. Aqui, o tempo desacelera para que cada detalhe da sua beleza receba a atenção meticulosa que merece.
                </p>
                <div className="grid sm:grid-cols-2 gap-10 text-left">
                  <div className="space-y-4">
                    <h4 className="font-serif text-[22px] font-bold text-brand-text tracking-tight">Curadoria de Estilo</h4>
                    <p className="font-sans text-[15px] text-brand-muted leading-relaxed font-light">Não replicamos tendências; adaptamos o que há de mais moderno à sua essência pessoal.</p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-serif text-[22px] font-bold text-brand-text tracking-tight">Experiência Tailor-made</h4>
                    <p className="font-sans text-[15px] text-brand-muted leading-relaxed font-light">Do café gourmet ao diagnóstico capilar, cada etapa é desenhada para ser inesquecível.</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 lg:mt-24 pt-16 border-t border-brand-section flex flex-wrap justify-center lg:justify-start gap-12 sm:gap-24">
                {stats.map((stat, idx) => (
                  <div key={idx} className="group text-center lg:text-left">
                    <div className="font-serif text-[48px] sm:text-[64px] text-brand-primary leading-none mb-3 group-hover:scale-110 transition-transform duration-500">
                      {stat.value}
                    </div>
                    <div className="font-sans text-[11px] sm:text-[13px] font-black text-brand-muted uppercase tracking-[0.3em]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 lg:mt-24">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-5 bg-brand-primary text-white px-12 py-6 rounded-full font-sans font-bold text-[16px] hover:bg-brand-primary-dark hover:shadow-2xl hover:shadow-brand-primary/20 hover:-translate-y-2 active:scale-95 transition-all duration-700 group shadow-xl">
                  CONVERSE COM NOSSA EQUIPE
                  <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform duration-500" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
