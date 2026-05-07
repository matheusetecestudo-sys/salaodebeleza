import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Sparkles, Coffee, Camera } from 'lucide-react';

const steps = [
  {
    icon: Sparkles,
    number: "01",
    title: "Consultoria Autoral",
    description: "Iniciamos com uma análise profunda de visagismo para entender não apenas seu fio, mas sua personalidade e estilo de vida."
  },
  {
    icon: Coffee,
    number: "02",
    title: "O Ritual Noir",
    description: "Um momento de pausa com nossa curadoria de cafés e chás, enquanto seus fios recebem protocolos de alta tecnologia e massagem craniana."
  },
  {
    icon: Camera,
    number: "03",
    title: "A Assinatura Final",
    description: "A revelação da sua melhor versão, finalizada com técnicas de styling que garantem durabilidade e um brilho cinematográfico."
  }
];

export default function Experience() {
  return (
    <section id="experiencia" className="relative py-24 lg:py-32 overflow-hidden noir-section border-t border-white/5">
      {/* Luxury Dot Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(var(--color-brand-primary) 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} />
      
      <div className="content-container relative z-10">
        <ScrollReveal className="text-center mb-20">
          <div className="animate">
            <span className="font-sans text-[11px] font-black tracking-[0.4em] text-brand-primary uppercase mb-4 block">
              ✦ A JORNADA DUNO
            </span>
            <h2 className="font-serif text-[42px] md:text-[54px] leading-tight font-bold text-white mb-6">
              Muito além de um <span className="italic font-normal text-brand-primary">atendimento</span>.
            </h2>
            <p className="font-sans text-[16px] text-brand-muted-on-noir max-w-[600px] mx-auto italic font-light">
              Desenhamos cada segundo da sua estadia para ser um refúgio de sofisticação e bem-estar.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.2}>
              <div className="animate glass-card p-10 rounded-[40px] border border-white/5 hover:border-brand-primary/20 transition-all duration-700 hover:-translate-y-4 group h-full flex flex-col">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <step.icon size={32} />
                  </div>
                  <span className="font-serif text-[48px] font-bold text-white/5 group-hover:text-brand-primary/20 transition-colors duration-700">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-serif text-[24px] font-bold text-white mb-4 group-hover:text-brand-primary transition-colors duration-500">
                  {step.title}
                </h3>
                <p className="font-sans text-[15px] leading-relaxed text-brand-muted-on-noir font-light italic">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
