import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ScrollReveal from './ScrollReveal';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div 
      className={`mb-4 border transition-all duration-500 rounded-3xl overflow-hidden ${
        isOpen 
          ? 'border-brand-primary/30 bg-brand-section shadow-brand-sm' 
          : 'border-brand-section bg-brand-surface hover:border-brand-primary/20'
    }`}>
      <button
        onClick={onClick}
        className="w-full text-left p-6 sm:p-10 flex justify-between items-start gap-6 group cursor-pointer"
      >
        <span className={`font-serif text-[22px] md:text-[28px] font-semibold leading-tight transition-colors duration-500 ${
          isOpen ? 'text-brand-primary' : 'text-brand-text'
        }`}>
          {question}
        </span>
        <div className={`mt-2 flex-shrink-0 w-8 h-8 rounded-full border border-current flex items-center justify-center transition-all duration-500 ${
          isOpen ? 'rotate-180 bg-brand-primary text-white border-brand-primary' : 'text-brand-muted border-brand-section'
        }`}>
          <ChevronDown size={18} />
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-6 sm:px-10 pb-10 font-sans text-[16px] sm:text-[18px] leading-relaxed text-brand-muted max-w-[700px]">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

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

  return (
    <section id="faq" className="section-padding bg-brand-surface relative overflow-hidden">
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-brand-primary) 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
      
      <div className="content-container relative z-10">
        <ScrollReveal className="text-center mb-16">
          <div className="animate">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[1px] w-8 bg-brand-primary/30"></div>
              <span className="font-sans text-[12px] font-bold tracking-[0.2em] text-brand-primary uppercase">
                ✦ PERGUNTAS FREQUENTES
              </span>
              <div className="h-[1px] w-8 bg-brand-primary/30"></div>
            </div>
            
            <h2 className="font-serif text-[40px] md:text-[52px] leading-tight font-bold text-brand-text mb-4">
              Tudo o que você <span className="italic font-normal text-brand-primary">precisa saber</span>
            </h2>
            <p className="font-sans text-[16px] text-brand-muted max-w-[600px] mx-auto">
              Compilamos as principais dúvidas para que sua experiência no DU NO seja perfeita desde o primeiro contato.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-[850px] mx-auto space-y-4">
          {faqData.map((item, index) => (
            <div key={`faq-reveal-${index}`}>
              <ScrollReveal>
                <div className="animate">
                  <FAQItem
                    question={item.question}
                    answer={item.answer}
                    isOpen={openId === index}
                    onClick={() => setOpenId(openId === index ? null : index)}
                  />
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate">
          <div className="inline-flex items-center gap-3 bg-brand-section px-8 py-4 rounded-full border border-brand-primary/10">
            <span className="font-sans text-[15px] text-brand-text">
              Dúvidas específicas?
            </span>
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="font-sans text-[15px] font-bold text-brand-primary hover:text-brand-primary-dark flex items-center gap-2 group">
              Fale conosco <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
