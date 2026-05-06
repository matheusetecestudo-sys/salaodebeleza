import ScrollReveal from './ScrollReveal';
import { MessageCircle, MapPin, Phone, Clock, ArrowRight } from 'lucide-react';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

const API_KEY =
  process.env.GOOGLE_MAPS_PLATFORM_KEY ||
  (import.meta as any).env?.VITE_GOOGLE_MAPS_PLATFORM_KEY ||
  (globalThis as any).GOOGLE_MAPS_PLATFORM_KEY ||
  '';

// Default center: Jardim Paulista, SP
const CENTER = { lat: -23.5684, lng: -46.6628 };

export default function Contact() {
  const whatsappUrl = "https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20um%20horário.";
  const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY';

  return (
    <section id="contato" className="section-padding noir-section relative overflow-hidden">
      {/* Luxury Dot Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-brand-primary) 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} />
      
      <div className="content-container relative z-10">
        <ScrollReveal className="text-center mb-16">
          <div className="animate">
            <span className="font-sans text-[12px] font-black tracking-[0.5em] text-brand-primary uppercase mb-6 block">
              ✦ ONDE A MÁGICA ACONTECE
            </span>
            <h2 className="font-serif text-[44px] md:text-[64px] leading-[1] font-bold mb-6">
              Venha vivenciar <span className="italic font-normal text-brand-primary">o DU NO</span>
            </h2>
            <p className="font-sans text-[16px] text-brand-muted-on-noir max-w-[600px] mx-auto italic font-light">
              Localização privilegiada para o seu máximo conforto.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-[60%_40%] gap-8 lg:gap-16 items-start">
          {/* Map and Info */}
          <ScrollReveal>
            <div className="animate space-y-10">
              <div className="w-full h-[400px] md:h-[520px] rounded-[32px] overflow-hidden shadow-2xl border border-white/5 relative group/map">
                <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197!2d-46.6628!3d-23.5684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c77e777777%3A0x7777777777777777!2sJardim%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20State%20of%20S%C3%A3o%20Paulo!5e0!3m2!1sen!2sbr!4v1700000000000!5m2!1sen!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa Duno Studio"
                  className="grayscale hover:grayscale-0 invert opacity-80 hover:opacity-100 transition-all duration-1000 group-hover/map:scale-105"
                ></iframe>
                
                {/* Visual Overlay for context */}
                <div className="absolute top-8 left-8 z-10 pointer-events-none group-hover/map:translate-x-2 group-hover/map:translate-y-2 transition-transform duration-700">
                  <div className="bg-brand-noir/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/10 animate">
                    <h4 className="font-sans font-black text-white text-[12px] uppercase tracking-widest mb-1 flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-brand-primary animate-pulse" />
                      Localização Premium
                    </h4>
                    <p className="font-sans text-[14px] text-brand-muted-on-noir">Jardim Paulista, SP</p>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-8">
                {[
                  { icon: MapPin, title: "Endereço", content: "Al. Jaú, 1230\nJardim Paulista, São Paulo" },
                  { icon: Phone, title: "Contato", content: "(11) 99999-9999\ncontato@duno.com.br" },
                  { icon: Clock, title: "Funcionamento", content: "Ter – Sáb: 09h às 20h\nSegunda: Fechado" }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-5 group/item cursor-default">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-brand-primary border border-white/5 group-hover/item:bg-brand-primary group-hover/item:text-white group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-500">
                      <item.icon size={28} />
                    </div>
                    <div>
                      <h5 className="font-sans font-bold text-white text-[17px] mb-2 group-hover/item:text-brand-primary transition-colors duration-300">{item.title}</h5>
                      <p className="font-sans text-[14px] sm:text-[15px] text-brand-muted-on-noir leading-relaxed whitespace-pre-line font-light">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* WhatsApp Card */}
          <ScrollReveal>
             <div className="animate h-full">
                <div className="glass-card rounded-[40px] p-10 sm:p-12 text-center h-full flex flex-col justify-center transition-all duration-700 hover:shadow-2xl hover:shadow-brand-primary/10 group/card border border-white/5">
                  <div className="w-20 h-20 bg-brand-whatsapp rounded-full flex items-center justify-center mx-auto mb-10 text-white shadow-2xl group-hover/card:scale-110 group-hover/card:rotate-12 transition-transform duration-700">
                    <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.993c-.001 5.45-4.436 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-[38px] font-bold text-white mb-6 leading-tight">
                    Agende em <span className="text-brand-primary italic">segundos</span>
                  </h3>
                  <p className="font-sans text-[16px] md:text-[18px] text-brand-muted-on-noir mb-12 leading-relaxed font-light">
                    Inicie sua transformação agora mesmo. Atendimento imediato e humano.
                  </p>
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-4 w-full bg-brand-whatsapp text-white py-6 rounded-2xl font-sans font-bold text-[18px] hover:brightness-110 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-whatsapp/30 active:scale-95 transition-all duration-500 shadow-xl group"
                  >
                    CHAMAR NO WHATSAPP
                    <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                  </a>
                  <div className="mt-10 flex items-center justify-center gap-5 text-brand-muted-on-noir">
                    <div className="flex -space-x-3">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-noir bg-brand-noir-surface flex items-center justify-center text-[11px] font-black hover:scale-110 hover:z-10 transition-transform cursor-pointer text-white">
                          {String.fromCharCode(64 + i)}
                        </div>
                      ))}
                    </div>
                    <span className="font-sans text-[14px] font-medium tracking-tight">+20 agendamentos hoje</span>
                  </div>
                </div>
             </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
