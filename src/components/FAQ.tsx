import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ScrollReveal from './ScrollReveal';

const faqData = [
  {
    question: "Quais serviços de mechas vocês oferecem?",
    answer: "Somos especialistas em Balayage, Mechas Criativas, Morena Iluminada e Loiro Perolado. Cada técnica é personalizada de acordo com seu tom de pele e saúde capilar, utilizando produtos premium como Wella e L'Oréal."
  },
  {
    question: "Como faço para agendar um horário?",
    answer: "O agendamento é feito de forma simples e rápida através do nosso WhatsApp. Basta clicar nos botões 'Agendar' espalhados pelo site. Atendemos de terça a sábado, das 9h às 19h."
  },
  {
    question: "Preciso pagar sinal para agendar?",
    answer: "Para procedimentos longos como Mechas e Mega Hair, solicitamos um sinal de 20% do valor estimado para garantir o bloqueio da agenda. Esse valor é abatido no dia do serviço."
  },
  {
    question: "Qual a política de atrasos e cancelamentos?",
    answer: "Toleramos atrasos de até 15 minutos. Caso exceda esse tempo, poderemos ter que adaptar o serviço ou reagendar. Pedimos aviso prévio de 24h para cancelamentos sem custo."
  },
  {
    question: "Posso levar acompanhantes?",
    answer: "Para garantir o conforto e a privacidade de todas as clientes em nosso ambiente boutique, pedimos que venha desacompanhada. Nos casos de menores de idade, a presença de um responsável é obrigatória."
  },
  {
    question: "Quais os Diferenciais do DU NO?",
    answer: "Nosso foco é o atendimento boutique: um cliente por vez, café gourmet, ambiente climatizado e as melhores técnicas do mercado internacional aplicadas à sua essência."
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(0);
  const whatsappUrl = "https://wa.me/5511999999999?text=Olá!%20Tenho%20uma%20dúvida.";

  return (
    <section id="faq" className="section-padding noir-section relative overflow-hidden">
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-brand-primary) 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }} />
      
      <div className="content-container relative z-10">
        <ScrollReveal className="text-center mb-20">
          <div className="animate">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-brand-primary/40"></div>
              <span className="font-sans text-[12px] font-black tracking-[0.4em] text-brand-primary uppercase">
                ✦ PERGUNTAS FREQUENTES ✦
              </span>
              <div className="h-[1px] w-12 bg-brand-primary/40"></div>
            </div>
            
            <h2 className="font-serif text-[44px] md:text-[64px] leading-[1] font-bold mb-8">
              Tudo o que você <span className="italic font-normal text-brand-primary">precisa saber</span>
            </h2>
            <p className="font-sans text-[16px] md:text-[20px] text-brand-muted-on-noir max-w-[700px] mx-auto font-light">
              Compilamos as principais dúvidas para que sua experiência no DU NO seja perfeita desde o primeiro contato.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-[900px] mx-auto space-y-6">
          {faqData.map((item, index) => (
            <div key={`faq-reveal-${index}`}>
              <ScrollReveal>
                <div className="animate">
                  <div 
                    className={`mb-4 border transition-all duration-700 rounded-[32px] overflow-hidden ${
                      openId === index 
                        ? 'border-brand-primary/30 bg-white/5 shadow-2xl' 
                        : 'border-white/5 bg-transparent hover:border-white/10'
                  }`}>
                    <button
                      onClick={() => setOpenId(openId === index ? null : index)}
                      className="w-full text-left p-8 sm:p-12 flex justify-between items-start gap-8 group cursor-pointer"
                    >
                      <span className={`font-serif text-[22px] md:text-[32px] font-semibold leading-tight transition-colors duration-500 ${
                        openId === index ? 'text-brand-primary' : 'text-white'
                      }`}>
                        {item.question}
                      </span>
                      <div className={`mt-2 flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-700 ${
                        openId === index ? 'rotate-180 bg-brand-primary text-white border-brand-primary' : 'text-brand-muted-on-noir border-white/10'
                      }`}>
                        <ChevronDown size={22} />
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {openId === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}
                        >
                          <div className="px-8 sm:px-12 pb-12 font-sans text-[16px] sm:text-[19px] leading-relaxed text-brand-muted-on-noir max-w-[750px] font-light">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate">
          <div className="inline-flex items-center gap-4 bg-white/5 px-10 py-5 rounded-full border border-white/10 backdrop-blur-sm">
            <span className="font-sans text-[16px] text-white/80 font-light">
              Dúvidas específicas?
            </span>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-sans text-[16px] font-bold text-brand-primary hover:text-brand-primary-dark flex items-center gap-3 group transition-all duration-300">
              Fale conosco <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
