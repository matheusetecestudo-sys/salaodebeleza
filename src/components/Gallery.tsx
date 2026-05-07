import { motion } from 'motion/react';
import ScrollReveal from './ScrollReveal';
import { ArrowRight } from 'lucide-react';

const galleryItems = [
  { url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800', label: 'Balayage Premium' },
  { url: 'https://images.unsplash.com/photo-1560869713-7d0a294308a3?auto=format&fit=crop&q=80&w=800', label: 'Loiro Designer' },
  { url: 'https://images.unsplash.com/photo-1620331311520-246422ff83f9?auto=format&fit=crop&q=80&w=800', label: 'Visagismo Facial' },
  { url: 'https://images.unsplash.com/photo-1522337660859-02636904415a?auto=format&fit=crop&q=80&w=800', label: 'Tratamento S.O.S' },
];

export default function Gallery() {
  const whatsappUrl = "https://wa.me/5511992876219?text=Olá!%20Vi%20a%20galeria%20e%20gostaria%20de%20agendar%20um%20horário.";

  return (
    <section id="galeria" className="relative min-h-screen flex items-center py-24 lg:py-32 overflow-hidden noir-section">
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

        <div className="relative">
          <motion.div 
            drag="x"
            dragConstraints={{ right: 0, left: -((galleryItems.length - 1) * 320) }}
            className="flex gap-6 cursor-grab active:cursor-grabbing px-4"
          >
            {galleryItems.map((item, idx) => (
              <motion.div 
                key={idx}
                className="min-w-[300px] sm:min-w-[450px] aspect-[4/5] relative group overflow-hidden rounded-[40px] border border-white/5 shadow-2xl"
              >
                <img 
                  src={item.url} 
                  alt={item.label}
                  className="w-full h-full object-cover grayscale transition-all duration-[2s] group-hover:scale-110 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-noir via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-10 left-10 right-10">
                  <span className="font-sans text-[10px] font-black tracking-[0.3em] text-brand-primary uppercase mb-2 block">
                    ✦ DUNO ART
                  </span>
                  <h3 className="font-serif text-[24px] sm:text-[32px] font-bold text-white leading-tight">
                    {item.label}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Swipe Indicator */}
          <div className="flex justify-center gap-2 mt-12">
            {galleryItems.map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-white/10" />
            ))}
          </div>
        </div>

        <div className="text-center mt-20">
          <div className="flex flex-col items-center gap-6">
            <p className="font-serif text-[24px] font-bold text-brand-text italic">Inspire-se no nosso portfólio</p>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-6 bg-brand-primary text-white px-12 py-5 rounded-full font-sans font-bold text-[14px] uppercase tracking-[0.2em] hover:bg-brand-primary-dark hover:shadow-2xl hover:shadow-brand-primary/20 hover:-translate-y-1 active:scale-95 transition-all duration-500 group shadow-xl"
            >
              Agendar Avaliação
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-500" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
