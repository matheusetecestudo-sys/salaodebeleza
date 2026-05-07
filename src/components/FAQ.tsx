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
  const whatsappUrl = "https://wa.me/5511992876219?text=Olá!%20Tenho%20uma%20dúvida.";

  return (
    <section id="faq" className="relative min-h-screen lg:h-screen flex items-center overflow-hidden noir-section py-20 lg:py-0">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1595475243692-3b65bb2a8f61?auto=format&fit=crop&q=80&w=1920" 
          alt="Atmosphere"
          className="w-full h-full object-cover grayscale opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-noir/95 via-brand-noir/90 to-brand-noir" />
      </div>

      {/* Luxury Dot Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-10" style={{ backgroundImage: 'radial-gradient(var(--color-brand-primary) 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} />

      <div className="content-container relative z-20">
        <ScrollReveal className="text-center mb-20">
          <div className="animate">
            <span className="font-sans text-[12px] font-black tracking-[0.4em] text-brand-primary uppercase mb-4 block">
              ✦ FAQ
            </span>
            <h2 className="font-serif text-[44px] md:text-[54px] leading-tight font-bold text-white mb-6">
              Dúvidas <span className="italic font-normal text-brand-primary">Frequentes</span>
            </h2>
            <p className="font-sans text-[16px] text-brand-muted-on-noir max-w-[600px] mx-auto">
              Tudo o que você precisa saber para sua primeira experiência no DUNO Studio.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-[900px] mx-auto space-y-4">
          {faqData.map((faq, idx) => (
            <ScrollReveal key={`faq-reveal-${idx}`}>
              <div className="animate">
                <div className={`glass-card rounded-[24px] overflow-hidden border transition-all duration-500 ${openId === idx ? 'border-brand-primary/30' : 'border-white/5'}`}>
                  <button
                    onClick={() => setOpenId(openId === idx ? null : idx)}
                    className="w-full px-8 py-8 flex items-center justify-between text-left group cursor-pointer"
                  >
                    <span className={`font-serif text-[18px] sm:text-[22px] font-bold transition-colors duration-300 ${openId === idx ? 'text-brand-primary' : 'text-white'}`}>
                      {faq.question}
                    </span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 ${openId === idx ? 'bg-brand-primary border-brand-primary text-white rotate-180' : 'bg-white/5 border-white/10 text-white group-hover:border-brand-primary'}`}>
                      <ChevronDown size={20} />
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {openId === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                      >
                        <div className="px-8 pb-8 font-sans text-[16px] sm:text-[18px] leading-relaxed text-brand-muted-on-noir italic font-light">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-12 animate">
          <div className="inline-flex items-center gap-3 bg-brand-section px-8 py-4 rounded-full border border-brand-primary/10">
            <span className="font-sans text-[15px] text-brand-text font-light">
              Dúvidas específicas?
            </span>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-sans text-[15px] font-bold text-brand-primary hover:text-brand-primary-dark flex items-center gap-2 group transition-all duration-300">
              Fale conosco <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
