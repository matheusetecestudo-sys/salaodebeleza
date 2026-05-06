import ScrollReveal from './ScrollReveal';
import { MessageCircle, ArrowRight } from 'lucide-react';

const galleryItems = [
  { url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800', label: 'Balayage Premium' },
  { url: 'https://images.unsplash.com/photo-1560869713-7d0a294308a3?auto=format&fit=crop&q=80&w=800', label: 'Loiro Designer' },
  { url: 'https://images.unsplash.com/photo-1620331311520-246422ff83f9?auto=format&fit=crop&q=80&w=800', label: 'Visagismo Facial' },
  { url: 'https://images.unsplash.com/photo-1522337660859-02636904415a?auto=format&fit=crop&q=80&w=800', label: 'Tratamento S.O.S' },
];

export default function Gallery() {
  const whatsappUrl = "https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20um%20horário.";

  return (
    <section id="galeria" className="section-padding noir-section relative overflow-hidden">
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-brand-primary) 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} />
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-brand-primary opacity-[0.02] rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2" />
      
      <div className="content-container relative z-10">
        <ScrollReveal className="text-center mb-20">
          <div className="animate">
            <span className="font-sans text-[12px] font-black tracking-[0.5em] text-brand-primary uppercase mb-6 block">
              ✦ NOSSA ARTE EM FOCO
            </span>
            <h2 className="font-serif text-[44px] md:text-[64px] leading-[1] font-bold mb-8">
              Transformações <span className="italic font-normal text-brand-primary">Memoráveis</span>
            </h2>
            <p className="font-sans text-[16px] md:text-[18px] text-brand-muted-on-noir max-w-[650px] mx-auto font-light">
              Cada detalhe é uma obra de arte. Explore os resultados que definem nossa assinatura de excelência.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-4 sm:gap-10 max-w-[1100px] mx-auto">
          {galleryItems.map((item, idx) => (
            <div key={idx}>
              <ScrollReveal delay={idx * 0.1}>
                <div 
                  className="animate relative group cursor-pointer overflow-hidden rounded-[32px] sm:rounded-[56px] border border-white/5 shadow-2xl hover:-translate-y-3 transition-all duration-700 aspect-square"
                >
                <img 
                  src={item.url} 
                  alt={item.label}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale opacity-80 transition-all duration-[2s] ease-out group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-noir via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-all duration-700 flex items-end p-8 sm:p-16 z-20">
                  <div className="translate-y-12 group-hover:translate-y-0 transition-all duration-700 w-full">
                    <div className="font-sans text-[10px] sm:text-[12px] uppercase tracking-[0.4em] font-black text-brand-primary mb-3">DU NO STUDIO</div>
                    <h3 className="font-serif text-[22px] sm:text-[38px] font-bold text-white leading-tight">
                      {item.label}
                    </h3>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        ))}
      </div>

        <div className="text-center mt-20 sm:mt-32">
          <div className="flex flex-col items-center gap-8">
            <p className="font-serif text-[24px] sm:text-[32px] font-bold text-white italic">Inspire-se no nosso feed diário</p>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-6 bg-white/5 text-white border border-white/10 px-12 py-6 rounded-full font-sans font-bold text-[14px] uppercase tracking-[0.3em] hover:bg-brand-primary hover:text-white hover:border-brand-primary hover:shadow-2xl hover:shadow-brand-primary/20 hover:-translate-y-2 active:scale-95 transition-all duration-700 group backdrop-blur-sm"
            >
              <span className="relative z-10">Ver portfólio completo</span>
              <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center group-hover:bg-white group-hover:text-brand-primary group-hover:scale-110 transition-all duration-700">
                <ArrowRight size={22} />
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
