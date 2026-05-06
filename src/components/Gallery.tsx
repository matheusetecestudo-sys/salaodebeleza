import ScrollReveal from './ScrollReveal';
import { MessageCircle, ArrowRight } from 'lucide-react';

const galleryItems = [
  { url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800', label: 'Balayage Premium' },
  { url: 'https://images.unsplash.com/photo-1560869713-7d0a294308a3?auto=format&fit=crop&q=80&w=800', label: 'Loiro Designer' },
  { url: 'https://images.unsplash.com/photo-1620331311520-246422ff83f9?auto=format&fit=crop&q=80&w=800', label: 'Visagismo Facial' },
  { url: 'https://images.unsplash.com/photo-1522337660859-02636904415a?auto=format&fit=crop&q=80&w=800', label: 'Tratamento S.O.S' },
];

export default function Gallery() {
  return (
    <section id="galeria" className="section-padding noir-section relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=1920" 
          alt="Atmosphere"
          className="w-full h-full object-cover grayscale opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-noir/95 via-brand-noir/80 to-brand-noir" />
      </div>

      {/* Luxury Dot Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-10" style={{ backgroundImage: 'radial-gradient(var(--color-brand-primary) 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} />
      
      <div className="content-container relative z-20">
        <ScrollReveal className="text-center mb-16">
          <div className="animate">
            <span className="font-sans text-[12px] font-black tracking-[0.4em] text-brand-primary uppercase mb-4 block">
              ✦ NOSSA ARTE
            </span>
            <h2 className="font-serif text-[44px] md:text-[54px] leading-tight font-bold text-white mb-6">
              Assinaturas <span className="italic font-normal text-brand-primary">Exclusivas</span>
            </h2>
            <p className="font-sans text-[16px] text-brand-muted-on-noir max-w-[600px] mx-auto">
              Cada transformação é única. Explore nosso portfólio de excelência.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-4 sm:gap-10 max-w-[1000px] mx-auto">
          {galleryItems.map((item, idx) => (
            <div key={idx}>
              <ScrollReveal delay={idx * 0.1}>
                <div 
                  className="animate relative group cursor-pointer overflow-hidden rounded-[24px] sm:rounded-[48px] shadow-xl border border-white/10 hover:shadow-brand-primary/10 hover:-translate-y-2 transition-all duration-700 aspect-square"
                >
                <img 
                  src={item.url} 
                  alt={item.label}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale transition-transform duration-[2s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-noir via-brand-noir/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6 sm:p-12 z-20">
                  <div className="translate-y-8 group-hover:translate-y-0 transition-all duration-700 w-full">
                    <div className="font-sans text-[10px] sm:text-[12px] uppercase tracking-[0.3em] font-black text-brand-primary mb-2">DUNO STUDIO</div>
                    <h3 className="font-serif text-[20px] sm:text-[32px] font-bold text-white leading-tight">
                      {item.label}
                    </h3>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        ))}
      </div>

        <div className="text-center mt-16 sm:mt-24">
          <div className="flex flex-col items-center gap-6">
            <p className="font-serif text-[24px] font-bold text-brand-text italic">Inspire-se no nosso feed</p>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-6 bg-white text-brand-primary border-2 border-brand-primary/10 px-10 py-5 rounded-2xl font-sans font-bold text-[14px] uppercase tracking-[0.2em] hover:bg-brand-primary hover:text-white hover:border-brand-primary hover:shadow-xl hover:shadow-brand-primary/20 hover:-translate-y-1 active:scale-95 transition-all duration-500 group shadow-sm"
            >
              <span className="relative z-10">Ver mais no Instagram</span>
              <div className="w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center group-hover:bg-white group-hover:text-brand-primary group-hover:scale-110 transition-all duration-500 shadow-md">
                <ArrowRight size={20} />
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
