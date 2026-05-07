import { motion } from 'motion/react';
import ScrollReveal from './ScrollReveal';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryItems = [
  { url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800', label: 'Balayage Premium' },
  { url: 'https://images.unsplash.com/photo-1560869713-7d0a294308a3?auto=format&fit=crop&q=80&w=800', label: 'Loiro Designer' },
  { url: 'https://images.unsplash.com/photo-1620331311520-246422ff83f9?auto=format&fit=crop&q=80&w=800', label: 'Visagismo Facial' },
  { url: 'https://images.unsplash.com/photo-1522337660859-02636904415a?auto=format&fit=crop&q=80&w=800', label: 'Tratamento S.O.S' },
];

export default function Gallery() {
  const whatsappUrl = "https://wa.me/5511992876219?text=Olá!%20Vi%20a%20galeria%20e%20gostaria%20de%20agendar%20um%20horário.";

  return (
    <section id="galeria" className="relative min-h-screen lg:h-screen flex items-center py-10 sm:py-16 overflow-hidden noir-section">
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
      
      <div className="content-container relative z-20 h-full flex flex-col justify-center gap-8 sm:gap-12">
        <ScrollReveal className="text-center">
          <div className="animate">
            <span className="font-sans text-[11px] font-black tracking-[0.4em] text-brand-primary uppercase mb-2 block">
              ✦ NOSSA ARTE
            </span>
            <h2 className="font-serif text-[38px] sm:text-[54px] leading-tight font-bold text-white mb-3">
              Assinaturas <span className="italic font-normal text-brand-primary">Exclusivas</span>
            </h2>
            <p className="font-sans text-[14px] text-brand-muted-on-noir max-w-[500px] mx-auto font-light">
              Cada transformação é única. Explore nosso portfólio.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative group/carousel px-4">
          <div 
            id="gallery-container"
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-6 scroll-smooth"
          >
            {galleryItems.map((item, idx) => (
              <div 
                key={idx}
                className="min-w-[80vw] sm:min-w-[400px] aspect-[4/5] relative group overflow-hidden rounded-[32px] border border-white/5 shadow-2xl snap-center flex-shrink-0"
              >
                <img 
                  src={item.url} 
                  alt={item.label}
                  className="w-full h-full object-cover grayscale transition-all duration-[2s] group-hover:scale-110 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-noir/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-serif text-[18px] sm:text-[22px] font-bold text-white leading-tight">
                    {item.label}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Swipe Indicator / Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {galleryItems.map((_, i) => (
              <button 
                key={i} 
                className="w-1.5 h-1.5 rounded-full bg-white/10 hover:bg-brand-primary transition-colors duration-300"
                onClick={() => {
                  const el = document.getElementById('gallery-container');
                  if (el) el.scrollTo({ left: i * 360, behavior: 'smooth' });
                }}
              />
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col items-center gap-4">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-brand-primary text-white px-10 py-4 rounded-full font-sans font-bold text-[13px] uppercase tracking-[0.2em] hover:bg-brand-primary-dark transition-all duration-500 shadow-xl"
            >
              Agendar Avaliação
              <ArrowRight size={18} />
            </a>
            <div className="flex items-center gap-3 opacity-30 animate-pulse sm:hidden">
              <ArrowRight size={12} className="rotate-180" />
              <span className="font-sans text-[9px] font-bold uppercase tracking-widest">Arraste para explorar</span>
              <ArrowRight size={12} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
