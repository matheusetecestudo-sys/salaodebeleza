import ScrollReveal from './ScrollReveal';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "O DUNO não é apenas um salão, é um santuário. A forma como interpretaram meu estilo e traduziram em um corte autoral foi algo que nunca experimentei antes em São Paulo. Absolutamente impecável.",
    author: "Juliana Mendes",
    service: "Visagismo de Luxo",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    quote: "Finalmente encontrei o loiro dos meus sonhos. A técnica de Balayage deles é artística e preservou totalmente a saúde do meu cabelo. O atendimento boutique é o diferencial que eu buscava.",
    author: "Beatriz Mello",
    service: "Signature Balayage",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    quote: "A precisão técnica da equipe é impressionante. Cada etapa do tratamento luxury é pensada para o máximo conforto e resultado. Meu cabelo recuperou um brilho que eu achei que tinha perdido.",
    author: "Fernanda Costa",
    service: "Protocolo de Alta Performance",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400"
  }
];

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="relative min-h-screen flex items-center py-24 lg:py-32 overflow-hidden bg-white">
      {/* Premium Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="content-container relative z-20">
        <ScrollReveal className="text-center mb-16 sm:mb-24">
          <div className="animate">
            <span className="font-sans text-[12px] font-black tracking-[0.4em] text-brand-primary uppercase mb-4 block">
              ✦ EXPERIÊNCIAS DUNO
            </span>
            <h2 className="font-serif text-[44px] md:text-[54px] leading-tight font-bold text-brand-noir mb-6">
              Relatos de <span className="italic font-normal text-brand-primary underline decoration-brand-primary/20 underline-offset-8">Transformação</span>
            </h2>
            <p className="font-sans text-[16px] text-gray-600 max-w-[600px] mx-auto italic font-light">
              A satisfação de nossas clientes é o reflexo de nossa dedicação absoluta à excelência e ao cuidado personalizado.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-6 sm:gap-10 pb-8 lg:pb-0 snap-x snap-mandatory hide-scrollbar">
          {testimonials.map((entry) => (
            <div 
              key={entry.id}
              className="animate bg-white p-8 sm:p-12 rounded-[48px] shadow-[0_30px_60px_rgba(var(--color-brand-primary-rgb),0.08)] border border-brand-primary/10 hover:border-brand-primary/30 hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-700 hover:-translate-y-4 group flex flex-col justify-between h-full relative min-w-[85vw] lg:min-w-0 snap-center"
            >
              <div className="relative">
                <div className="flex gap-1.5 mb-10">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={18} className="text-brand-primary fill-brand-primary" />
                  ))}
                </div>
                
                <span className="absolute -top-14 -right-2 font-serif text-[180px] leading-none text-brand-primary opacity-[0.15] pointer-events-none z-0 select-none group-hover:scale-110 transition-transform duration-1000">
                  “
                </span>

                <p className="font-serif text-[19px] sm:text-[23px] leading-relaxed text-brand-noir mb-12 relative z-10 italic font-light">
                  "{entry.quote}"
                </p>
              </div>

              <div className="flex items-center gap-6 pt-10 border-t border-brand-primary/5">
                <div className="relative">
                  <div className="absolute inset-0 bg-brand-primary blur-2xl opacity-20 rounded-full group-hover:opacity-40 transition-opacity duration-700" />
                  <img 
                    src={entry.avatar} 
                    alt={entry.author} 
                    className="w-16 h-16 rounded-full object-cover border-2 border-brand-primary/20 relative z-10 transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-[18px] sm:text-[21px] font-bold text-brand-noir leading-none mb-2">
                    {entry.author}
                  </h4>
                  <div className="flex flex-col gap-1">
                    <span className="font-sans text-[10px] font-black tracking-[0.2em] text-brand-primary uppercase italic">
                      {entry.service}
                    </span>
                    <div className="w-6 h-[2px] bg-brand-primary/40 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
