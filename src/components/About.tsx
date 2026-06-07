import { Star } from 'lucide-react';
import ChefPhoto from './ChefPhoto';

export default function About() {
  const features = [
    'Ingredientes frescos e de alta qualidade',
    'Personalização completa para cada pedido',
    'Entrega em toda a região do Vale do Paraíba',
    'Atendimento pelo WhatsApp todos os dias'
  ];

  return (
    <section id="sobre" className="bg-gradient-to-br from-[#fde8ef] to-[#f0f7fd] py-24 px-6 md:px-12 select-none">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Images Column */}
          <div className="relative flex justify-center">
            
            {/* Main Image frame with uploaded chef photo */}
            <div className="w-full max-w-md aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-white relative z-10">
              <ChefPhoto className="w-full h-full" />
            </div>

            {/* Overlapping Badge Card */}
            <div className="absolute bottom-[-20px] right-[-10px] md:right-[20px] bg-white rounded-2xl p-5 shadow-xl flex items-center gap-4 z-20 border border-rosa/10 hover:translate-y-[-5px] transition-transform duration-300">
              <div className="w-12 h-12 bg-rosa-light rounded-xl flex items-center justify-center text-3xl">
                🏆
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-bold text-xl md:text-2xl text-rosa-dark leading-none">
                  +500
                </span>
                <span className="font-sans text-xs text-texto-leve font-medium">
                  pedidos entregues
                </span>
              </div>
            </div>

          </div>

          {/* Texts Column */}
          <div className="flex flex-col items-start text-left">
            <span className="text-rosa-dark font-sans text-xs md:text-sm font-bold tracking-widest uppercase mb-3 block">
              ✦ Nossa história
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-texto mb-6 leading-tight">
              Feito com <span className="italic text-rosa-dark">amor</span>,<br />entregue com sorriso
            </h2>
            <div className="font-sans text-base text-texto-leve space-y-4 mb-8">
              <p>
                Oi! Sou a Thamires, confeiteira apaixonada pelo Vale do Paraíba. A <strong>Amor e Açúcar</strong> nasceu do sonho de transformar momentos simples em lembranças doces e inesquecíveis.
              </p>
              <p>
                Cada doce é preparado artesanalmente, com ingredientes selecionados e a dedicação de quem acredita que a confeitaria é uma forma genuína de demonstrar afeto.
              </p>
              <p>
                Atendemos aniversários, casamentos, eventos corporativos, feiras e pedidos individuais em toda a região. Nossa charmosa <strong>bike de doces</strong> já levou encanto e doçura a centenas de comemorações especiais!
              </p>
            </div>

            {/* Features List */}
            <div className="w-full space-y-4">
              {features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white/70 hover:bg-white rounded-xl p-3.5 shadow-sm border border-rosa/5 transition-colors duration-200">
                  <div className="w-6 h-6 rounded-full bg-rosa-light flex items-center justify-center text-xxs font-bold text-rosa-dark">
                    <Star className="w-3.5 h-3.5 fill-rosa text-rosa-dark" />
                  </div>
                  <span className="font-sans text-sm md:text-base font-semibold text-texto leading-none">
                    {feat}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
