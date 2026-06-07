import { ServiceItem } from '../types';

export default function Services() {
  const serviceList: ServiceItem[] = [
    {
      id: 'brigadeiros',
      icon: '🍫',
      title: 'Brigadeiros Gourmet',
      description: 'Variedades exclusivas com recheios sofisticados: pistache, Nutella, limão siciliano, maracujá e muito mais. Perfeitos para presentear ou servir em festas.'
    },
    {
      id: 'bolos',
      icon: '🎂',
      title: 'Bolos Personalizados',
      description: 'Bolos decorados sob encomenda para aniversários, casamentos, chás de bebê e eventos especiais. Cada detalhe pensado para o seu momento único.'
    },
    {
      id: 'bike',
      icon: '🚲',
      title: 'Bike de Doces',
      description: 'Leve a Amor & Açúcar para seu evento! Nossa carrocinha encantadora é o charme perfeito para festas ao ar livre, formaturas e feiras gastronômicas.'
    },
    {
      id: 'kits',
      icon: '🎁',
      title: 'Kits & Presentes',
      description: 'Caixas e kits montados com capricho: ideais para lembrancinha de festa, Dia dos Namorados, Natal e qualquer data especial que mereça um mimo doce.'
    }
  ];

  return (
    <section id="servicos" className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-rosa-dark font-sans text-xs md:text-sm font-bold tracking-widest uppercase mb-3 block">
            ✦ O que oferecemos
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-texto mb-4 leading-tight">
            Nossos <span className="italic text-rosa-dark">Serviços</span>
          </h2>
          <p className="font-sans text-base md:text-lg text-texto-leve">
            Do brigadeiro clássico ao bolo personalizado — tudo feito com ingredientes de alta qualidade, carinho e muito capricho.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {serviceList.map((service) => (
            <div 
              key={service.id}
              className="bg-creme rounded-2xl p-8 md:p-10 border border-rosa/10 relative overflow-hidden group hover:-translate-y-2 hover:shadow-xl hover:shadow-rosa/10 transition-all duration-300 flex flex-col items-start"
            >
              
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rosa-light to-azul/20 flex items-center justify-center text-3xl md:text-4xl mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl md:text-2xl font-bold text-texto mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-sm md:text-base text-texto-leve leading-relaxed">
                {service.description}
              </p>

              {/* Bottom Animated Border Line */}
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-rosa to-azul scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
