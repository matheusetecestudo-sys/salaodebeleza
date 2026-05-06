import ScrollReveal from './ScrollReveal';
import { MessageCircle, ArrowRight } from 'lucide-react';

export default function Banner() {
  const whatsappUrl = "https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20um%20horário.";

  return (
    <section className="relative overflow-hidden bg-brand-primary py-24 md:py-40">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white opacity-[0.03] rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-brand-accent opacity-5 rounded-full translate-x-1/4 translate-y-1/4 blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-pattern-dots opacity-5" />

      <div className="content-container relative z-10 text-center">
        <ScrollReveal>
          <div className="animate">
            <span className="font-sans text-[14px] font-bold tracking-[0.2em] text-brand-accent uppercase mb-8 block">
              ✦ O MOMENTO É AGORA ✦
            </span>
            <h2 className="font-serif text-[38px] sm:text-[48px] md:text-[68px] leading-[1.1] font-semibold text-white mb-8 sm:mb-10 max-w-[900px] mx-auto">
              Pronta para viver sua <span className="italic font-normal opacity-90 text-white underline decoration-brand-accent underline-offset-8">maior</span> transformação?
            </h2>
            <p className="font-sans text-[17px] md:text-[22px] text-white/80 max-w-[680px] mx-auto mb-10 sm:mb-14 leading-relaxed font-light">
              O horário que você reserva para si mesma é o investimento mais valioso do dia. Garanta sua experiência exclusiva no DU NO Studio.
            </p>
            
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-white text-brand-primary px-8 sm:px-14 py-5 sm:py-6 rounded-full font-sans font-black text-[16px] sm:text-[20px] uppercase tracking-widest hover:scale-105 active:scale-95 hover:bg-brand-bg transition-all duration-500 shadow-brand-hover group"
            >
              Agendar meu horário
              <ArrowRight size={20} className="sm:size-26 group-hover:translate-x-2 transition-transform duration-500" />
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
