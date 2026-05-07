import React from 'react';
import ScrollReveal from './ScrollReveal';
import { ShieldCheck, Zap, Heart } from 'lucide-react';

export default function Manifesto() {
  const points = [
    {
      icon: ShieldCheck,
      title: "Tecnologia Orgânica",
      text: "Utilizamos apenas ativos biocompatíveis que respeitam a integridade total do seu fio."
    },
    {
      icon: Zap,
      title: "Alta Performance",
      text: "Resultados de passarela adaptados para a praticidade do seu dia a dia premium."
    },
    {
      icon: Heart,
      title: "Ética e Respeito",
      text: "Nossa paixão é revelar sua beleza real, sem imposições ou padrões genéricos."
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden noir-section bg-white/5">
      <div className="content-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <ScrollReveal direction="left">
            <div className="animate">
              <span className="font-sans text-[11px] font-black tracking-[0.4em] text-brand-primary uppercase mb-6 block">
                ✦ POR QUE O DUNO?
              </span>
              <h2 className="font-serif text-[42px] md:text-[58px] leading-[1.1] font-bold text-white mb-8">
                Onde a ciência encontra a <span className="italic font-normal text-brand-primary">alta-costura</span> capilar.
              </h2>
              <p className="font-sans text-[18px] text-brand-muted-on-noir mb-12 font-light italic leading-relaxed">
                Acreditamos que o luxo não é apenas sobre o resultado final, mas sobre o rigor técnico e a ética em cada processo. Não entregamos apenas cor e corte; entregamos saúde e identidade.
              </p>
              
              <div className="space-y-8">
                {points.map((point, idx) => (
                  <div key={idx} className="flex gap-6 items-start group">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 flex-shrink-0">
                      <point.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-serif text-[20px] font-bold text-white mb-2 group-hover:text-brand-primary transition-colors">{point.title}</h4>
                      <p className="font-sans text-[14px] text-brand-muted-on-noir font-light leading-relaxed italic">{point.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="animate relative">
              <div className="absolute -inset-4 border border-brand-primary/20 rounded-[40px] scale-95 group-hover:scale-100 transition-all duration-[1.5s]" />
              <img 
                src="https://images.unsplash.com/photo-1595476108010-b4d1f80d77d2?auto=format&fit=crop&q=80&w=1200" 
                alt="Manifesto de Beleza"
                className="w-full aspect-[4/5] object-cover rounded-[40px] shadow-2xl grayscale hover:grayscale-0 transition-all duration-[2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-noir/60 to-transparent rounded-[40px]" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
