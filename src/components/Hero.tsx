import ScrollReveal from './ScrollReveal';
import { ArrowRight, MapPin } from 'lucide-react';

export default function Hero() {
  const whatsappUrl = "https://wa.me/5511992876219?text=Olá!%20Gostaria%20de%20agendar%20um%20horário.";

  return (
    <section id="inicio" className="relative h-screen sm:h-[100svh] flex items-center overflow-hidden noir-section">
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1920" 
          alt="Luxury Salon Background"
          className="w-full h-full object-cover grayscale opacity-30 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-noir/90 via-brand-noir/40 to-brand-noir" />
      </div>

      {/* Luxury Dot Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-10" style={{ backgroundImage: 'radial-gradient(var(--color-brand-primary) 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} />

      {/* Pink ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[700px] bg-brand-primary/10 rounded-full blur-[160px] -z-0 pointer-events-none" />

      <div className="content-container relative z-20 w-full pt-32 md:pt-40 pb-20">
        <div className="max-w-[1000px] mx-auto lg:mx-0">
          <ScrollReveal direction="up">
            <div className="animate flex flex-col items-center lg:items-start text-center lg:text-left">
              <h1 className="font-serif text-[42px] xs:text-[54px] sm:text-[72px] md:text-[96px] leading-[0.95] font-bold text-white mb-8 sm:mb-12 tracking-tight">
                A arquitetura do <span className="italic font-normal text-brand-primary text-shadow-glow">luxo</span> em cada fio.
              </h1>
              
              <p className="font-sans text-[16px] sm:text-[20px] md:text-[24px] leading-relaxed text-white/80 mb-12 sm:mb-16 max-w-[720px] font-light italic">
                No DUNO, transcendemos o conceito de salão. Unimos visagismo autoral e alta tecnologia para revelar a assinatura única que existe em você. Onde a arte encontra sua identidade.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 w-full sm:w-auto mb-12">
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full sm:w-auto flex items-center justify-center gap-4 bg-brand-primary text-white px-10 py-6 rounded-full font-sans font-bold text-[14px] sm:text-[18px] uppercase tracking-[0.2em] hover:bg-white hover:text-brand-primary transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(var(--color-brand-primary-rgb),0.4)] active:scale-95 group shadow-2xl shadow-brand-primary/20 whitespace-nowrap"
                >
                  RESERVAR EXPERIÊNCIA
                  <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform duration-500 flex-shrink-0" />
                </a>
              </div>

              <div className="flex items-center gap-8 border-l border-white/10 pl-8 hidden md:flex">
                <div className="flex flex-col">
                  <span className="font-serif text-[24px] font-bold text-white leading-none">4.9/5</span>
                  <span className="font-sans text-[10px] font-bold text-brand-muted-on-noir uppercase tracking-widest mt-2 italic">Avaliações</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-[24px] font-bold text-white leading-none">5k+</span>
                  <span className="font-sans text-[10px] font-bold text-brand-muted-on-noir uppercase tracking-widest mt-2 italic">Clientes</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Floating Map Info */}
      <div className="absolute bottom-10 right-10 hidden lg:block z-20">
        <div className="glass-card p-5 rounded-[24px] border border-white/10 backdrop-blur-md animate hover:-translate-y-2 transition-transform duration-500">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-white">
              <MapPin size={20} />
            </div>
            <div>
              <p className="font-sans font-bold text-white text-[13px]">Jardim Paulista, SP</p>
              <p className="font-sans text-[11px] text-brand-muted-on-noir">Localização Premium</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
