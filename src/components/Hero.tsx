import ScrollReveal from './ScrollReveal';
import { ArrowRight, Star, CheckCircle, MapPin } from 'lucide-react';

export default function Hero() {
  const whatsappUrl = "https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20um%20horário.";

  return (
    <section id="inicio" className="relative pt-20 pb-12 md:pt-40 md:pb-28 overflow-hidden bg-brand-bg">
      {/* Absolute Decorative Elements */}
      <div className="absolute top-[-15%] right-[-10%] w-[600px] h-[600px] bg-brand-primary opacity-5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[450px] h-[450px] bg-brand-accent opacity-5 rounded-full blur-[110px] pointer-events-none" />
      
      {/* Luxury Dot Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-brand-primary) 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }} />

      <div className="content-container relative z-10">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 lg:gap-20 items-center">
          {/* Left Column */}
          <ScrollReveal direction="left">
            <div className="animate flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="flex items-center gap-4 mb-8">
                <span className="font-sans text-[12px] font-black tracking-[0.4em] text-brand-primary uppercase bg-brand-primary/5 px-5 py-2 rounded-full border border-brand-primary/10 shadow-sm animate-pulse">
                  ✦ EXCELÊNCIA EM BELEZA
                </span>
              </div>
              
              <h1 className="font-serif text-[48px] xs:text-[56px] sm:text-[72px] md:text-[94px] leading-[0.92] font-bold text-brand-text mb-8">
                Beleza que <br />
                <span className="italic font-normal text-brand-primary">revela</span> a sua <br />
                melhor versão.
              </h1>
              
              <p className="font-sans text-[20px] md:text-[24px] leading-relaxed text-brand-muted mb-12 max-w-[580px] font-medium italic">
                Um refúgio boutique no coração de São Paulo. Técnicas de vanguarda e atendimento que celebra sua individualidade.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-8 w-full sm:w-auto">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-4 bg-brand-whatsapp text-white px-12 py-6 rounded-2xl font-sans font-bold text-[18px] whatsapp-pulse hover:brightness-110 hover:scale-[1.03] hover:-translate-y-1 active:scale-95 transition-all duration-500 shadow-2xl hover:shadow-brand-whatsapp/40"
                >
                  RESERVAR AGORA
                  <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#servicos"
                  className="font-sans text-[15px] text-brand-text font-black uppercase tracking-[0.2em] hover:text-brand-primary transition-all duration-500 flex items-center gap-4 group"
                >
                  NOSSOS SERVIÇOS 
                  <div className="w-12 h-12 rounded-full border border-brand-section flex items-center justify-center group-hover:border-brand-primary group-hover:bg-brand-primary/5 transition-all duration-500 group-hover:scale-110">
                    <ArrowRight size={20} className="rotate-90 group-hover:translate-y-1 transition-transform" />
                  </div>
                </a>
              </div>

              <div className="mt-16 lg:mt-24 flex flex-wrap justify-center lg:justify-start gap-x-12 gap-y-8 border-t border-brand-section pt-10 w-full lg:w-fit">
                <div className="flex items-center gap-4 group cursor-default">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-xl flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                    <Star size={20} className="text-brand-star fill-brand-star" />
                  </div>
                  <div className="text-left">
                    <p className="font-serif text-[20px] font-bold text-brand-text leading-none group-hover:text-brand-primary transition-colors duration-300">4.9/5</p>
                    <p className="font-sans text-[11px] font-bold text-brand-muted uppercase tracking-widest mt-1">Google Maps</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group cursor-default">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-xl flex items-center justify-center group-hover:-rotate-12 group-hover:scale-110 transition-all duration-500">
                    <CheckCircle size={20} className="text-brand-primary" />
                  </div>
                  <div className="text-left">
                    <p className="font-serif text-[20px] font-bold text-brand-text leading-none group-hover:text-brand-primary transition-colors duration-300">100%</p>
                    <p className="font-sans text-[11px] font-bold text-brand-muted uppercase tracking-widest mt-1">Satisfeitas</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative animate mt-6 lg:mt-0 px-4 lg:px-0 group/scene">
              {/* Decorative Luxury Shapes - Reduced size on mobile */}
              <div className="absolute -top-10 -right-10 lg:-top-16 lg:-right-16 w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] bg-brand-section rounded-[40px] lg:rounded-[80px] rotate-12 -z-10 soft-glow opacity-50 group-hover/scene:rotate-45 group-hover/scene:scale-110 transition-transform duration-[3s] ease-out" />
              
              {/* Image Container with Elegant Border */}
              <div className="relative group max-w-[400px] lg:max-w-none mx-auto lg:mx-0 p-2 lg:p-3 bg-white rounded-[32px] lg:rounded-[44px] shadow-2xl border border-brand-section hover:shadow-brand-primary/10 transition-all duration-700">
                <div className="overflow-hidden rounded-[24px] lg:rounded-[36px] bg-brand-section">
                  <img 
                    src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1200" 
                    alt="Modelo com cabelo impecável"
                    fetchPriority="high"
                    className="w-full aspect-[4/5] lg:aspect-[4/5] object-cover grayscale transition-all duration-[2s] group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>
                
                {/* Floating Experience Card - Smaller and more subtle on mobile */}
                <div className="absolute -bottom-6 -left-2 sm:-bottom-10 sm:-left-12 bg-white/95 backdrop-blur-xl p-4 sm:p-8 rounded-[24px] sm:rounded-[32px] shadow-2xl border border-brand-section z-20 group-hover:scale-105 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:shadow-brand-primary/10 transition-all duration-700 max-w-[200px] sm:max-w-[280px]">
                  <div className="bg-brand-primary/10 w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center text-brand-primary mb-3 sm:mb-5 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-500">
                    <Star size={18} fill="currentColor" className="sm:hidden" />
                    <Star size={24} fill="currentColor" className="hidden sm:block" />
                  </div>
                  <p className="font-serif text-[14px] sm:text-[18px] font-bold text-brand-text leading-snug mb-2 sm:mb-3">
                    "Um cuidado que vai além da estética."
                  </p>
                  <p className="font-sans text-[11px] sm:text-[13px] text-brand-muted leading-relaxed">
                    Sinta a exclusividade de um estúdio boutique.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
