import ScrollReveal from './ScrollReveal';
import { ArrowRight, MapPin } from 'lucide-react';

export default function Hero() {
  const whatsappUrl = "https://wa.me/5511992876219?text=Olá!%20Gostaria%20de%20agendar%20um%20horário.";

  return (
    <section
      id="inicio"
      className="relative w-full flex items-center overflow-hidden noir-section"
      style={{ minHeight: '100vh', minHeight: '100svh' }}
    >
      {/* Full Background Image — covers 100% with no gap */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1920"
          alt="Luxury Salon Background"
          className="w-full h-full object-cover object-center"
          style={{ filter: 'grayscale(50%) brightness(0.60)' }}
        />
        {/* Lighter multi-layer overlay */}
        <div className="absolute inset-0 bg-brand-noir/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-noir/30 via-transparent to-brand-noir/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-noir/50 via-transparent to-transparent" />
      </div>

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-10"
        style={{ backgroundImage: 'radial-gradient(var(--color-brand-primary) 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }}
      />

      {/* Pink ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/8 rounded-full blur-[180px] pointer-events-none z-10" />

      {/* Main content */}
      <div className="content-container relative z-20 w-full py-40 md:py-48">
        <div className="max-w-[900px] mx-auto lg:mx-0">
          <ScrollReveal direction="up">
            <div className="animate flex flex-col items-center lg:items-start text-center lg:text-left">

              {/* Eyebrow tag */}
              <span className="font-sans text-[11px] font-black tracking-[0.4em] text-brand-primary uppercase mb-8 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-brand-primary hidden lg:block" />
                ✦ DUNO BEAUTY STUDIO
              </span>

              <h1 className="font-serif text-[44px] sm:text-[68px] md:text-[88px] lg:text-[96px] leading-[0.93] font-bold text-white mb-8 sm:mb-10 tracking-tight">
                A arquitetura do{' '}
                <em className="not-italic text-brand-primary" style={{ textShadow: '0 0 60px rgba(var(--color-brand-primary-rgb), 0.4)' }}>
                  luxo
                </em>{' '}
                em cada fio.
              </h1>

              <p className="font-sans text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed text-white/70 mb-10 sm:mb-14 max-w-[620px] font-light">
                No DUNO, transcendemos o conceito de salão. Unimos visagismo autoral e alta tecnologia para revelar a assinatura única que existe em você.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto mb-14">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-4 bg-brand-primary text-white px-10 py-4 sm:py-5 rounded-full font-sans font-bold text-[12px] sm:text-[14px] uppercase tracking-[0.2em] hover:bg-brand-primary-dark hover:text-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(var(--color-brand-primary-rgb),0.5)] active:scale-95 group shadow-2xl shadow-brand-primary/30 whitespace-nowrap"
                >
                  RESERVAR EXPERIÊNCIA
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500 flex-shrink-0" />
                </a>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-10 hidden md:flex">
                <div className="flex flex-col">
                  <span className="font-serif text-[28px] font-bold text-white leading-none">4.9/5</span>
                  <span className="font-sans text-[10px] font-bold text-white/40 uppercase tracking-widest mt-1 italic">Avaliações</span>
                </div>
                <div className="w-[1px] h-10 bg-white/10" />
                <div className="flex flex-col">
                  <span className="font-serif text-[28px] font-bold text-white leading-none">5k+</span>
                  <span className="font-sans text-[10px] font-bold text-white/40 uppercase tracking-widest mt-1 italic">Clientes</span>
                </div>
                <div className="w-[1px] h-10 bg-white/10" />
                <div className="flex flex-col">
                  <span className="font-serif text-[28px] font-bold text-white leading-none">10+</span>
                  <span className="font-sans text-[10px] font-bold text-white/40 uppercase tracking-widest mt-1 italic">Anos</span>
                </div>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Floating Location Badge */}
      <div className="absolute bottom-10 right-6 lg:right-10 z-20">
        <div className="glass-card p-4 sm:p-5 rounded-[20px] border border-white/10 backdrop-blur-md hover:-translate-y-2 transition-transform duration-500">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-brand-primary flex items-center justify-center text-white flex-shrink-0">
              <MapPin size={17} />
            </div>
            <div>
              <p className="font-sans font-bold text-white text-[12px]">Jardim Paulista, SP</p>
              <p className="font-sans text-[10px] text-white/50">Localização Premium</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
