import ScrollReveal from './ScrollReveal';
import { MessageCircle, ArrowRight } from 'lucide-react';

export default function Banner() {
  const whatsappUrl = "https://wa.me/5511992876219?text=Olá!%20Gostaria%20de%20agendar%20um%20horário.";

  return (
    <section className="relative min-h-screen flex items-center py-24 lg:py-32 overflow-hidden noir-section">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1920" 
          alt="Atmosphere"
          className="w-full h-full object-cover grayscale opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-noir via-brand-noir/80 to-brand-noir" />
      </div>

      {/* Luxury Dot Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-10" style={{ backgroundImage: 'radial-gradient(var(--color-brand-primary) 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} />
      
      <div className="content-container relative z-20 text-center">
        <ScrollReveal>
          <div className="animate">
            <span className="font-sans text-[14px] font-bold tracking-[0.2em] text-brand-accent uppercase mb-8 block">
              ✦ O MOMENTO É AGORA ✦
            </span>
            <h2 className="font-serif text-[38px] sm:text-[48px] md:text-[68px] leading-[1.1] font-semibold text-white mb-8 sm:mb-10 max-w-[900px] mx-auto">
              Pronta para sua <span className="italic font-normal text-brand-primary underline decoration-brand-primary/30 underline-offset-8">maior</span> transformação?
            </h2>
            <p className="font-sans text-[17px] md:text-[22px] text-white/80 max-w-[680px] mx-auto mb-10 sm:mb-14 leading-relaxed font-light italic">
              O tempo que você reserva para si mesma é o investimento mais valioso do dia. Garanta sua experiência exclusiva em nossa agenda.
            </p>
            
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-white text-brand-primary px-6 sm:px-14 py-4 sm:py-6 rounded-full font-sans font-black text-[14px] sm:text-[20px] uppercase tracking-widest hover:scale-105 active:scale-95 hover:bg-brand-bg transition-all duration-500 shadow-brand-hover group whitespace-nowrap"
            >
              Agendar meu horário
              <ArrowRight size={18} className="sm:size-26 group-hover:translate-x-2 transition-transform duration-500 flex-shrink-0" />
            </a>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
              <div className="flex flex-col items-center">
                 <div className="font-serif text-[24px] text-white">09h – 19h</div>
                 <div className="font-sans text-[11px] text-white/50 uppercase tracking-widest">Seg – Sex</div>
              </div>
              <div className="w-[1px] h-10 bg-white/20"></div>
              <div className="flex flex-col items-center">
                 <div className="font-serif text-[24px] text-white">08h – 17h</div>
                 <div className="font-sans text-[11px] text-white/50 uppercase tracking-widest">Sábados</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
