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
    <section id="avaliacoes" className="section-padding noir-section relative overflow-hidden">
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-brand-primary) 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} />
      
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-brand-primary opacity-[0.02] rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      
      <div className="content-container relative z-10">
        <ScrollReveal className="text-center mb-20">
          <div className="animate">
            <span className="font-sans text-[12px] font-black tracking-[0.5em] text-brand-primary uppercase mb-6 block">
              ✦ VOZES DE QUEM CONFIA
            </span>
            <h2 className="font-serif text-[44px] md:text-[64px] leading-[1] font-bold mb-8">
              Experiências <span className="italic font-normal text-brand-primary">Inesquecíveis</span>
            </h2>
            <p className="font-sans text-[16px] md:text-[20px] text-brand-muted-on-noir max-w-[600px] mx-auto font-light">
              A maior gratidão é o sorriso de cada cliente ao se olhar no espelho.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-14">
          {testimonials.map((entry) => (
            <div 
              key={entry.id}
              className="animate glass-card p-10 sm:p-14 rounded-[40px] border border-white/5 hover:border-brand-primary/20 hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-700 hover:-translate-y-4 group flex flex-col justify-between h-full relative"
            >
              <div className="relative">
                <div className="flex gap-1.5 mb-10">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={20} className="text-brand-star fill-brand-star" />
                  ))}
                </div>
                
                <span className="absolute -top-16 -right-8 font-serif text-[220px] leading-none text-brand-primary opacity-[0.05] pointer-events-none z-0 select-none group-hover:scale-110 transition-transform duration-1000">
                  “
                </span>

                <p className="font-serif text-[20px] sm:text-[26px] leading-relaxed text-white mb-12 relative z-10 italic font-light">
                  "{entry.quote}"
                </p>
              </div>

              <div className="flex items-center gap-6 pt-12 border-t border-white/5">
                <div className="relative">
                  <div className="absolute inset-0 bg-brand-primary blur-xl opacity-20 rounded-full" />
                  <img 
                    src={entry.avatar} 
                    alt={entry.author} 
                    className="w-20 h-20 rounded-full object-cover border-2 border-brand-primary/20 relative z-10 transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-[22px] font-bold text-white leading-none mb-2">
                    {entry.author}
                  </h4>
                  <span className="font-sans text-[11px] font-black tracking-[0.3em] text-brand-primary uppercase italic">
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
