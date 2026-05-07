import { Instagram, Facebook, Twitter, Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-24 pb-12 noir-section border-t border-white/5">
      <div className="content-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-12 mb-20 text-center lg:text-left">
          {/* Logo & About */}
          <div className="flex flex-col items-center lg:items-start lg:col-span-1">
            <a href="#" className="flex items-center mb-8 group text-center lg:text-left">
              <span className="relative font-serif text-[36px] font-black tracking-[0.15em] text-white flex items-center transition-all duration-500 group-hover:scale-105">
                DUNO
                <span className="text-brand-primary ml-4 text-[20px] animate-pulse">✦</span>
              </span>
            </a>
            <p className="font-sans text-[16px] leading-[1.8] text-brand-muted-on-noir mb-8 max-w-[280px]">
              Especialistas em realçar sua beleza natural com técnicas modernas e atendimento exclusivo.
            </p>
            <div className="flex gap-4">
              {['Instagram', 'Facebook', 'Twitter'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-brand-muted-on-noir hover:bg-brand-primary hover:border-brand-primary hover:text-white hover:shadow-lg hover:shadow-brand-primary/20 hover:-translate-y-1 transition-all duration-500 shadow-sm"
                >
                  <span className="sr-only">{social}</span>
                  {social === 'Instagram' && <Instagram size={18} />}
                  {social === 'Facebook' && <Facebook size={18} />}
                  {social === 'Twitter' && <Twitter size={18} />}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans font-bold text-white text-[14px] uppercase tracking-[0.2em] mb-8">
              Mapa do Site
            </h4>
            <ul className="space-y-4">
              <li><a href="#sobre" className="font-sans text-[15px] text-brand-muted-on-noir hover:text-brand-primary hover:translate-x-1 inline-block transition-all duration-300">Sobre</a></li>
              <li><a href="#servicos" className="font-sans text-[15px] text-brand-muted-on-noir hover:text-brand-primary hover:translate-x-1 inline-block transition-all duration-300">Serviços</a></li>
              <li><a href="#avaliacoes" className="font-sans text-[15px] text-brand-muted-on-noir hover:text-brand-primary hover:translate-x-1 inline-block transition-all duration-300">Depoimentos</a></li>
              <li><a href="#faq" className="font-sans text-[15px] text-brand-muted-on-noir hover:text-brand-primary hover:translate-x-1 inline-block transition-all duration-300">FAQ</a></li>
              <li><a href="#contato" className="font-sans text-[15px] text-brand-muted-on-noir hover:text-brand-primary hover:translate-x-1 inline-block transition-all duration-300">Contato</a></li>
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div>
            <h4 className="font-sans font-bold text-white text-[14px] uppercase tracking-[0.2em] mb-8">
              Atendimento
            </h4>
            <div className="space-y-6">
              <div className="group cursor-pointer">
                <span className="block font-sans text-[12px] font-bold text-brand-accent uppercase tracking-widest mb-1 transition-colors duration-300 group-hover:text-brand-primary">Telefone</span>
                <span className="block font-sans text-[16px] text-brand-muted-on-noir group-hover:text-brand-primary group-hover:translate-x-1 transition-all duration-300">(11) 99287-6219</span>
              </div>
              <div className="group cursor-pointer">
                <span className="block font-sans text-[12px] font-bold text-brand-accent uppercase tracking-widest mb-1 transition-colors duration-300 group-hover:text-brand-primary">E-mail</span>
                <span className="block font-sans text-[16px] text-brand-muted-on-noir group-hover:text-brand-primary group-hover:translate-x-1 transition-all duration-300">contato@duno.com.br</span>
              </div>
              <div className="group cursor-pointer">
                <span className="block font-sans text-[12px] font-bold text-brand-accent uppercase tracking-widest mb-1 transition-colors duration-300 group-hover:text-brand-primary">Endereço</span>
                <span className="block font-sans text-[16px] text-brand-muted-on-noir group-hover:text-brand-primary group-hover:translate-x-1 transition-all duration-300">Av. Paulista, 1000 - SP</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-sans text-[13px] text-brand-muted-on-noir order-2 md:order-1">
            © {currentYear} DUNO Studio. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2 order-1 md:order-2">
            <div className="w-2 h-2 rounded-full bg-brand-whatsapp"></div>
            <span className="font-sans text-[12px] font-bold text-brand-muted-on-noir uppercase tracking-widest">Aberto agora para agendamentos</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
