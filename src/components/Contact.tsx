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
  const whatsappUrl = "https://wa.me/5511992876219?text=Olá!%20Gostaria%20de%20agendar%20um%20horário.";
  const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY';

  return (
    <section id="contato" className="relative min-h-screen flex items-center py-24 lg:py-32 overflow-hidden bg-white">
      {/* Editorial Background Element */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-brand-primary/5 skew-x-12 -translate-x-1/2 pointer-events-none" />
      
      <div className="content-container relative z-20">
        <ScrollReveal className="text-center mb-16">
          <div className="animate">
            <span className="font-sans text-[12px] font-black tracking-[0.4em] text-brand-primary uppercase mb-4 block">
              ✦ ONDE A MÁGICA ACONTECE
            </span>
            <h2 className="font-serif text-[44px] md:text-[64px] leading-[1] font-bold text-brand-noir mb-6">
              Venha vivenciar <span className="italic font-normal text-brand-primary">o DUNO</span>
            </h2>
            <p className="font-sans text-[16px] text-gray-600 max-w-[600px] mx-auto italic font-light">
              Localização privilegiada para o seu máximo conforto.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-[60%_40%] gap-8 lg:gap-16 items-start">
          {/* Map and Info */}
          <ScrollReveal>
            <div className="animate space-y-10">
              <div className="w-full h-[400px] md:h-[520px] rounded-[40px] overflow-hidden shadow-2xl border border-gray-100 relative group/map">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197!2d-46.6628!3d-23.5684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c77e777777%3A0x7777777777777777!2sJardim%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20State%20of%20S%C3%A3o%20Paulo!5e0!3m2!1sen!2sbr!4v1700000000000!5m2!1sen!2sbr" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa Duno Studio"
                    className="grayscale hover:grayscale-0 transition-all duration-[2s] group-hover/map:scale-110"
                  ></iframe>
                  
                  {/* Visual Overlay for context */}
                  <div className="absolute top-6 left-6 sm:top-10 sm:left-10 z-10 pointer-events-none group-hover/map:translate-x-2 group-hover/map:translate-y-2 transition-transform duration-[1s]">
                    <div className="bg-white/90 backdrop-blur-xl p-6 sm:p-8 rounded-[32px] shadow-2xl border border-gray-100 animate ring-1 ring-brand-primary/10">
                      <h4 className="font-sans font-black text-brand-noir text-[10px] sm:text-[12px] uppercase tracking-[0.3em] mb-2 flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-brand-primary animate-pulse shadow-[0_0_10px_rgba(var(--color-brand-primary-rgb),0.8)]" />
                        LOCALIZAÇÃO EXCLUSIVA
                      </h4>
                      <p className="font-serif text-[18px] sm:text-[22px] font-bold text-brand-noir mb-1">Jardim Paulista, SP</p>
                      <p className="font-sans text-[12px] text-gray-500 font-light italic">O coração do luxo em São Paulo</p>
                    </div>
                  </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 lg:gap-8 justify-between mt-2 border-t border-gray-100 pt-8">
                {[
                  { icon: MapPin, title: "Endereço", content: "Al. Jaú, 1230\nJardim Paulista, SP" },
                  { icon: Phone, title: "Contato", content: "(11) 99287-6219\ncontato@duno.com.br" },
                  { icon: Clock, title: "Horários", content: "Ter – Sáb: 09h às 20h\nSeg: Fechado" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 sm:gap-4 group/item cursor-default">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-primary/5 rounded-[14px] flex items-center justify-center text-brand-primary flex-shrink-0 group-hover/item:bg-brand-primary group-hover/item:text-white group-hover/item:shadow-lg group-hover/item:shadow-brand-primary/20 transition-all duration-500">
                      <item.icon size={18} className="sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h5 className="font-sans font-bold text-brand-noir text-[13px] sm:text-[14px] mb-0.5 group-hover/item:text-brand-primary transition-colors duration-300">{item.title}</h5>
                      <p className="font-sans text-[12px] sm:text-[13px] text-gray-500 leading-snug whitespace-pre-line font-light">
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
                <div className="bg-brand-noir rounded-[48px] p-10 sm:p-14 text-center h-full flex flex-col justify-center transition-all duration-700 hover:shadow-[0_40px_80px_rgba(0,0,0,0.3)] group/card relative overflow-hidden">
                  {/* Decorative Elements */}
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-primary/10 rounded-full blur-[80px]" />
                  <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-primary/5 rounded-full blur-[80px]" />

                  <div className="w-20 h-20 bg-brand-whatsapp rounded-full flex items-center justify-center mx-auto mb-10 text-white shadow-2xl group-hover/card:scale-110 group-hover/card:rotate-12 transition-transform duration-700 relative z-10">
                    <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.993c-.001 5.45-4.436 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-[38px] font-bold text-white mb-6 leading-tight relative z-10">
                    Agende em <span className="text-brand-primary italic">segundos</span>
                  </h3>
                  <p className="font-sans text-[16px] md:text-[18px] text-white/70 mb-12 leading-relaxed font-light italic relative z-10">
                    Inicie sua transformação agora mesmo. Atendimento imediato e humano.
                  </p>
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-4 w-full bg-brand-whatsapp text-white py-5 sm:py-6 rounded-2xl font-sans font-bold text-[15px] sm:text-[18px] hover:brightness-110 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-whatsapp/30 active:scale-95 transition-all duration-500 shadow-xl group whitespace-nowrap relative z-10"
                  >
                    CHAMAR NO WHATSAPP
                    <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform flex-shrink-0" />
                  </a>
                  <div className="mt-12 flex items-center justify-center gap-5 text-white/50 relative z-10">
                    <div className="flex -space-x-3">
                      {[
                        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100",
                        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
                        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100",
                        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100"
                      ].map((img, i) => (
                        <div key={i} className="w-11 h-11 rounded-full border-2 border-brand-noir overflow-hidden hover:scale-110 hover:z-10 transition-transform cursor-pointer">
                          <img src={img} alt="User" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                    <span className="font-sans text-[13px] font-medium tracking-tight text-white/90 underline decoration-brand-primary/40 underline-offset-4 font-light italic">+12 agendamentos para esta semana</span>
                  </div>
                </div>
             </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
