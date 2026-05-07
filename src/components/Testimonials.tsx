import ScrollReveal from './ScrollReveal';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "A experiência no DU NO é transformadora. O cuidado com os detalhes e a precisão do corte autoral me deixaram encantada. É, sem dúvidas, o melhor de SP.",
    author: "Juliana Mendes",
    service: "Corte & Visagismo",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 2,
    quote: "Fiz minhas mechas e o resultado ficou super natural e brilhante. O atendimento boutique faz a gente se sentir única. Recomendo de olhos fechados!",
    author: "Beatriz Mello",
    service: "High-End Balayage",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 3,
    quote: "Técnica impecável e ambiente extremamente sofisticado. A equipe realmente entende de saúde capilar. Meu cabelo nunca esteve tão saudável e bonito.",
    author: "Fernanda Costa",
    service: "Tratamento Luxury",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
  }
];

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="relative min-h-screen flex items-center py-24 lg:py-32 overflow-hidden noir-section">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=1920" 
          alt="Atmosphere"
          className="w-full h-full object-cover grayscale opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-noir/95 via-brand-noir/90 to-brand-noir" />
      </div>

      {/* Luxury Dot Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-10" style={{ backgroundImage: 'radial-gradient(var(--color-brand-primary) 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} />

      <div className="content-container relative z-20">
        <ScrollReveal className="text-center mb-16 sm:mb-24">
          <div className="animate">
            <span className="font-sans text-[12px] font-black tracking-[0.4em] text-brand-primary uppercase mb-4 block">
              ✦ EXPERIÊNCIAS DUNO
            </span>
            <h2 className="font-serif text-[44px] md:text-[54px] leading-tight font-bold text-white mb-6">
              O que dizem sobre <span className="italic font-normal text-brand-primary">nós</span>
            </h2>
            <p className="font-sans text-[16px] text-brand-muted-on-noir max-w-[600px] mx-auto">
              A satisfação de nossas clientes é o reflexo de nossa dedicação absoluta à excelência.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-6 sm:gap-10 pb-8 lg:pb-0 snap-x snap-mandatory hide-scrollbar">
          {testimonials.map((entry) => (
            <div 
              key={entry.id}
              className="animate glass-card p-8 sm:p-12 rounded-[32px] border border-white/5 hover:border-brand-primary/20 hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-700 hover:-translate-y-4 group flex flex-col justify-between h-full relative min-w-[80vw] lg:min-w-0 snap-center"
            >
              <div className="relative">
                <div className="flex gap-1 mb-8">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={16} className="text-brand-star fill-brand-star" />
                  ))}
                </div>
                
                <span className="absolute -top-12 -right-4 font-serif text-[160px] leading-none text-brand-primary opacity-[0.05] pointer-events-none z-0 select-none group-hover:scale-110 transition-transform duration-1000">
                  “
                </span>

                <p className="font-serif text-[18px] sm:text-[22px] leading-relaxed text-white mb-10 relative z-10 italic font-light">
                  "{entry.quote}"
                </p>
              </div>

              <div className="flex items-center gap-5 pt-8 border-t border-white/5">
                <div className="relative">
                  <div className="absolute inset-0 bg-brand-primary blur-xl opacity-20 rounded-full" />
                  <img 
                    src={entry.avatar} 
                    alt={entry.author} 
                    className="w-16 h-16 rounded-full object-cover border-2 border-brand-primary/20 relative z-10 transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-[18px] sm:text-[20px] font-bold text-white leading-none mb-1.5">
                    {entry.author}
                  </h4>
                  <span className="font-sans text-[10px] font-black tracking-[0.2em] text-brand-primary uppercase italic">
                    {entry.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
