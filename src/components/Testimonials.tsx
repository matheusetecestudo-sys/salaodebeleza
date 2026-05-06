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
    <section id="avaliacoes" className="section-padding bg-brand-section relative overflow-hidden">
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-brand-primary) 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }} />
      
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary opacity-5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
      
      <div className="content-container relative z-10">
        <ScrollReveal className="text-center mb-20">
          <div className="animate">
            <span className="font-sans text-[12px] font-black tracking-[0.4em] text-brand-primary uppercase mb-4 block">
              ✦ VOZES DE QUEM CONFIA
            </span>
            <h2 className="font-serif text-[44px] md:text-[56px] leading-[1.1] font-bold text-brand-text mb-6">
              Experiências <span className="italic font-normal text-brand-primary">Inesquecíveis</span>
            </h2>
            <p className="font-sans text-[16px] text-brand-muted max-w-[500px] mx-auto">
              A maior gratidão é o sorriso de cada cliente ao se olhar no espelho.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {testimonials.map((entry) => (
            <div 
              key={entry.id}
              className="animate bg-white p-8 sm:p-12 rounded-[40px] shadow-xl border border-brand-section/50 hover:border-brand-primary/20 hover:shadow-2xl hover:shadow-brand-primary/5 transition-all duration-500 hover:-translate-y-3 group flex flex-col justify-between h-full"
            >
              <div className="relative">
                <div className="flex gap-1 mb-8">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={18} className="text-brand-star fill-brand-star" />
                  ))}
                </div>
                
                <span className="absolute -top-12 -right-6 font-serif text-[180px] leading-none text-brand-primary opacity-[0.05] pointer-events-none z-0 select-none group-hover:scale-110 transition-transform duration-700">
                  “
                </span>

                <p className="font-serif text-[18px] sm:text-[22px] leading-relaxed text-brand-text mb-12 relative z-10 italic">
                  "{entry.quote}"
                </p>
              </div>

              <div className="flex items-center gap-5 pt-10 border-t border-brand-section">
                <div className="relative">
                  <div className="absolute inset-0 bg-brand-primary blur-md opacity-20 rounded-full" />
                  <img 
                    src={entry.avatar} 
                    alt={entry.author} 
                    className="w-16 h-16 rounded-full object-cover border-2 border-brand-primary/20 relative z-10"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-[20px] font-bold text-brand-text leading-none mb-2">
                    {entry.author}
                  </h4>
                  <span className="font-sans text-[11px] font-black tracking-widest text-brand-primary uppercase italic">
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
