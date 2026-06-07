import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FaqItem } from '../types';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqList: FaqItem[] = [
    {
      id: 1,
      question: "Com quanto tempo de antecedência devo fazer o pedido?",
      answer: "Recomendamos fazer o pedido com pelo menos 5 a 7 dias de antecedência para garantir disponibilidade e tempo de preparo adequado. Para bolos personalizados e eventos maiores com a bike de doces, o ideal é de 15 dias antes."
    },
    {
      id: 2,
      question: "Vocês fazem entrega em toda a região do Vale do Paraíba?",
      answer: "Sim! Atendemos Taubaté, São José dos Campos, Jacareí, Pindamonhangaba, Lorena, Guaratinguetá e cidades vizinhas. Para locais mais afastados, consulte via WhatsApp sobre a disponibilidade e taxas de entrega em domicílio."
    },
    {
      id: 3,
      question: "Como funciona o pagamento?",
      answer: "Oferecemos facilidade no pagamento! Aceitamos Pix, transferências eletrônicas e cartão. Para agendamentos e pedidos de maior volume, solicitamos uma entrada de 50% no ato do pedido e o valor final no momento da entrega."
    },
    {
      id: 4,
      question: "Vocês têm opções para pessoas com restrições alimentares?",
      answer: "Sim! Trabalhamos com alternativas sob consulta. Dispomos de algumas receitas sem lactose e sem glúten. No entanto, por utilizarmos a mesma cozinha, informamos que pode haver contaminação cruzada. Fale conosco para adaptarmos."
    },
    {
      id: 5,
      question: "Como reservo a bike de doces para meu evento?",
      answer: "É muito simples! Entre em contato conosco pelo WhatsApp informando a data, horário, estimativa de convidados e o local do seu evento. Enviaremos uma proposta sob medida com as melhores opções para tornar o seu dia inesquecível."
    }
  ];

  const handleToggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="bg-creme py-24 px-6 md:px-12 select-none">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-rosa-dark font-sans text-xs md:text-sm font-bold tracking-widest uppercase mb-3 block">
            ✦ Dúvidas frequentes
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-texto mb-4 leading-tight">
            Perguntas <span className="italic text-rosa-dark">Frequentes</span>
          </h2>
          <p className="font-sans text-base md:text-lg text-texto-leve">
            Tire suas principais dúvidas sobre pedidos, prazos, formas de pagamento e opções de entrega e cardápio.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqList.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={faq.id}
                className="bg-white rounded-2xl border border-rosa/10 overflow-hidden transition-all duration-300 shadow-sm hover:shadow"
              >
                
                {/* Accordion Trigger */}
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full flex items-center justify-between text-left p-6 md:p-8 font-sans font-semibold text-texto hover:text-rosa-dark transition-colors duration-200 focus:outline-none gap-4"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-rosa-dark shrink-0" />
                    <span className="text-base md:text-lg">{faq.question}</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-rosa-dark shrink-0 transition-transform duration-300 ${
                    isOpen ? 'transform rotate-180' : ''
                  }`} />
                </button>

                {/* Accordion Content with smooth height transitions */}
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-72 border-t border-rosa/5' : 'max-h-0'
                  } overflow-hidden`}
                >
                  <p className="p-6 md:p-8 pt-4 md:pt-4 font-sans text-sm md:text-base text-texto-leve leading-relaxed">
                    {faq.answer}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
