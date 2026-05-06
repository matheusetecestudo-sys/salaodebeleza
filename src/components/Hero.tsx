import ScrollReveal from './ScrollReveal';
import { ArrowRight, Star, CheckCircle, MapPin } from 'lucide-react';

export default function Hero() {
  const whatsappUrl = "https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20um%20horário.";

  return (
    <section id="inicio" className="relative h-screen sm:h-[100svh] flex items-center overflow-hidden noir-section">
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1920" 
          alt="Luxury Salon Background"
          className="w-full h-full object-cover grayscale opacity-30 scale-105"
        />
        {/* Dark Overlays for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-noir/90 via-brand-noir/40 to-brand-noir" />
      </div>

      {/* Luxury Dot Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-10" style={{ backgroundImage: 'radial-gradient(var(--color-brand-primary) 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} />

      <div className="content-container relative z-20 w-full pt-16 md:pt-20">
        <div className="max-w-[1000px] mx-auto lg:mx-0">
          <ScrollReveal direction="up">
            <div className="animate flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="flex items-center gap-4 mb-6 sm:mb-8">
                <span className="font-sans text-[11px] sm:text-[13px] font-black tracking-[0.4em] sm:tracking-[0.6em] text-brand-primary uppercase bg-brand-primary/10 px-6 py-2 rounded-full border border-brand-primary/20 shadow-2xl">
                  ✦ EXCELÊNCIA EM BELEZA ✦
                </span>
              </div>
              
              <h1 className="font-serif text-[42px] xs:text-[54px] sm:text-[72px] md:text-[96px] leading-[0.95] font-bold text-white mb-6 sm:mb-10 tracking-tight">
                Beleza que <span className="italic font-normal text-brand-primary">revela</span> a sua essência.
              </h1>
              
              <p className="font-sans text-[16px] sm:text-[20px] md:text-[24px] leading-relaxed text-brand-muted-on-noir mb-10 sm:mb-14 max-w-[680px] font-light italic">
                Um refúgio boutique no coração de São Paulo. Técnicas de vanguarda e atendimento que celebra sua individualidade.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 w-full sm:w-auto">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-5 bg-brand-primary text-white px-10 py-5 sm:px-14 sm:py-7 rounded-2xl font-sans font-bold text-[14px] sm:text-[18px] uppercase tracking-widest hover:bg-brand-primary-dark hover:scale-[1.05] hover:-translate-y-2 active:scale-95 transition-all duration-500 shadow-2xl shadow-brand-primary/30"
                >
                  AGENDAR EXPERIÊNCIA
                  <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                </a>
                
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

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 hover:opacity-100 transition-all duration-500 cursor-pointer z-20" onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}>
         <span className="font-sans text-[9px] font-black tracking-[0.4em] text-white uppercase">Explorar</span>
         <div className="w-[1px] h-10 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
