import ScrollReveal from './ScrollReveal';
import { ArrowRight, Clock, Phone } from 'lucide-react';

export default function Banner() {
  const whatsappUrl = "https://wa.me/5511992876219?text=Olá!%20Gostaria%20de%20agendar%20um%20horário.";

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden bg-brand-noir">
      {/* Decorative pink glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(var(--color-brand-primary) 0.5px, transparent 0.5px)', backgroundSize: '36px 36px' }}
      />

      {/* Pink top border accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-primary/60 to-transparent" />

      <div className="content-container relative z-10 text-center">
        <ScrollReveal>
          <div className="animate">
            <span className="font-sans text-[11px] font-black tracking-[0.4em] text-brand-primary uppercase mb-6 block">
              ✦ O MOMENTO É AGORA ✦
            </span>

            <h2 className="font-serif text-[40px] sm:text-[54px] md:text-[72px] leading-[1.05] font-bold text-white mb-8 max-w-[860px] mx-auto">
              Pronta para sua{' '}
              <span className="italic font-normal text-brand-primary underline decoration-brand-primary/30 underline-offset-8">
                maior
              </span>{' '}
              transformação?
            </h2>

            <p className="font-sans text-[16px] md:text-[20px] text-white/60 max-w-[620px] mx-auto mb-14 leading-relaxed font-light italic">
              O tempo que você reserva para si mesma é o investimento mais valioso do dia. Garanta sua experiência exclusiva em nossa agenda.
            </p>

            {/* CTA Button — same pattern as rest of site */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-brand-primary text-white px-10 py-5 rounded-full font-sans font-bold text-[14px] sm:text-[16px] uppercase tracking-[0.2em] hover:bg-white hover:text-brand-primary transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(var(--color-brand-primary-rgb),0.4)] active:scale-95 group shadow-2xl shadow-brand-primary/20 whitespace-nowrap"
            >
              AGENDAR MEU HORÁRIO
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-500 flex-shrink-0" />
            </a>

            {/* Info cards */}
            <div className="mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <div className="flex items-center gap-3 bg-white/5 border border-brand-primary/20 rounded-2xl px-6 py-4">
                <Clock size={18} className="text-brand-primary flex-shrink-0" />
                <div className="text-left">
                  <div className="font-sans font-bold text-white text-[13px]">Ter – Sáb: 09h – 20h</div>
                  <div className="font-sans text-[11px] text-white/40 uppercase tracking-widest">Horário de atendimento</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/5 border border-brand-primary/20 rounded-2xl px-6 py-4">
                <Phone size={18} className="text-brand-primary flex-shrink-0" />
                <div className="text-left">
                  <div className="font-sans font-bold text-white text-[13px]">(11) 99287-6219</div>
                  <div className="font-sans text-[11px] text-white/40 uppercase tracking-widest">WhatsApp direto</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Pink bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent" />
    </section>
  );
}
