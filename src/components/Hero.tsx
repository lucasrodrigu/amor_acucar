import { Heart } from 'lucide-react';
import HeroPhoto from './HeroPhoto';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#fde8ef] via-[#f4f9fd] to-[#e8f4fd] px-6 py-20 md:py-32">
      
      {/* Decorative Floating Background Spheres */}
      <div className="absolute top-[8%] left-[-4%] w-44 h-44 rounded-full bg-rosa/10 animate-float pointer-events-none blur-xl"></div>
      <div className="absolute top-[55%] right-[-3%] w-28 h-28 rounded-full bg-azul/20 animate-float pointer-events-none blur-xl" style={{ animationDelay: '2.5s' }}></div>
      <div className="absolute bottom-[18%] left-[12%] w-16 h-16 rounded-full bg-rosa/15 animate-float pointer-events-none blur-lg" style={{ animationDelay: '4s' }}></div>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        
        {/* Badge */}
        <div className="inline-block bg-rosa/10 border border-rosa/30 text-rosa-dark px-5 py-2 rounded-full text-xs md:text-sm font-semibold tracking-widest uppercase mb-6 shadow-sm">
          ✦ Vale do Paraíba – São Paulo ✦
        </div>

        {/* Title */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-texto leading-none tracking-tight mb-2">
          Amor e <span className="italic text-rosa-dark relative font-serif">Açúcar</span>
        </h1>

        {/* Under Title by Thamires */}
        <p className="font-serif italic text-xl md:text-2xl lg:text-3xl text-azul-dark font-medium mb-10">
          by Thamires
        </p>

        {/* Cta Buttons */}
        <div className="flex flex-col items-center gap-4 mb-20">
          <a
            href="https://wa.me/5512981859083?text=Olá!%20Gostaria%20de%20agendar%20um%20pedido!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gradient-to-r from-rosa-mid to-rosa-dark text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95 transition-all duration-300 gap-3 group w-64"
          >
            <Heart className="w-5 h-5 fill-white group-hover:scale-110 transition-transform duration-200" />
            <span>🍫 Agendar agora</span>
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center justify-center border-2 border-rosa-dark text-rosa-dark hover:bg-rosa-light px-8 py-4 rounded-full font-semibold text-lg shadow-sm active:scale-95 transition-all duration-300 w-64"
          >
            Ver Nosso Cardápio
          </a>
        </div>

        {/* Image Grid Overlapping */}
        <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6 mt-6 select-none animate-fade-in w-full max-w-full px-2">
          {/* Sides */}
          <HeroPhoto 
            id="doces"
            alt="Gourmet Brigadeiros"
            defaultUrl="https://images.unsplash.com/photo-1587314168485-3236d6710814?w=500&auto=format&fit=crop&q=80"
            containerClassName="w-24 h-24 min-[375px]:w-28 min-[375px]:h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 border-4 border-rosa shadow-lg hover:scale-105 transition-transform duration-300 shrink-0"
          />

          {/* Big Center Image */}
          <HeroPhoto 
            id="centro"
            alt="Chef Thamires Confeitaria"
            defaultUrl="https://images.unsplash.com/photo-1556217477-d3252514d53f?w=600&auto=format&fit=crop&q=80"
            containerClassName="w-32 h-32 min-[375px]:w-40 min-[375px]:h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 -translate-y-4 border-4 border-azul shadow-xl hover:scale-105 transition-transform duration-300 shrink-0"
          />

          {/* Third */}
          <HeroPhoto 
            id="carrinho"
            alt="Bike e Carinho de Doces"
            defaultUrl="https://images.unsplash.com/photo-1510440187513-e4d070b435ff?w=500&auto=format&fit=crop&q=80"
            containerClassName="w-24 h-24 min-[375px]:w-28 min-[375px]:h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 border-4 border-rosa shadow-lg hover:scale-105 transition-transform duration-300 shrink-0"
          />
        </div>

      </div>

    </section>
  );
}
