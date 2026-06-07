import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TestimonialItem } from '../types';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: TestimonialItem[] = [
    {
      id: 1,
      stars: 5,
      text: "Os brigadeiros da Thamires são os melhores que já comi na vida! Pedi para o aniversário da minha filha e todo mundo perguntou onde comprei. Super recomendo!",
      author: "Ana Maria Silva",
      location: "Taubaté – SP",
      avatar: "AM"
    },
    {
      id: 2,
      stars: 5,
      text: "A bike de doces foi o destaque absoluto da nossa festa corporativa! Apresentação linda, doces deliciosos e a Thamires foi super atenciosa do início ao fim. Nota 10!",
      author: "Rafael Costa",
      location: "São José dos Campos – SP",
      avatar: "RC"
    },
    {
      id: 3,
      stars: 5,
      text: "Encomendei o bolo de casamento e ficou exatamente como eu sonhava. Ela captura a essência do seu pedido com perfeição. Meu casamento ficou ainda mais especial e delicioso!",
      author: "Juliana Ferreira",
      location: "Jacareí – SP",
      avatar: "JF"
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="depoimentos" className="bg-white py-24 px-6 md:px-12 select-none overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-rosa-dark font-sans text-xs md:text-sm font-bold tracking-widest uppercase mb-3 block">
            ✦ Quem já provou, aprovou
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-texto mb-4 leading-tight">
            Nossos <span className="italic text-rosa-dark">Depoimentos</span>
          </h2>
          <p className="font-sans text-base md:text-lg text-texto-leve">
            Veja o carinho e o feedback de quem já experimentou nossas delícias e nos permitiu adoçar suas comemorações.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative bg-creme border border-rosa/10 rounded-3xl p-8 md:p-14 shadow-md max-w-3xl mx-auto">
          
          <Quote className="absolute right-8 top-8 w-16 h-16 text-rosa/10 transform rotate-180" />
          
          {/* Active reviews with fading effect */}
          <div className="relative min-h-[180px] flex flex-col justify-between">
            <div>
              {/* Stars */}
              <div className="text-[#FFB300] text-xl tracking-wider mb-6">
                {'★'.repeat(testimonials[activeIndex].stars)}
              </div>

              {/* Text */}
              <p className="font-sans italic text-base md:text-lg text-texto-leve leading-relaxed mb-8">
                "{testimonials[activeIndex].text}"
              </p>
            </div>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-rosa to-azul flex items-center justify-center text-white font-bold text-sm shadow-inner">
                {testimonials[activeIndex].avatar}
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-bold text-texto text-base leading-none mb-1">
                  {testimonials[activeIndex].author}
                </span>
                <span className="font-sans text-xs text-texto-leve font-medium">
                  {testimonials[activeIndex].location}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute bottom-6 right-6 md:right-12 flex gap-2">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-rosa/30 text-rosa-dark hover:bg-rosa-light flex items-center justify-center transition-all active:scale-90"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-5 h-5 pointer-events-none" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-gradient-to-r from-rosa-mid to-rosa-dark text-white flex items-center justify-center shadow-md hover:shadow-lg active:scale-90 transition-all"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-5 h-5 pointer-events-none" />
            </button>
          </div>

        </div>

        {/* Indicators Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === idx ? 'bg-rosa-dark w-8' : 'bg-rosa/30 w-2.5'
              }`}
              aria-label={`Ir para o depoimento ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
