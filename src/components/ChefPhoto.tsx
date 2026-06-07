import { useState } from 'react';
import { Image, Upload, Sparkles } from 'lucide-react';

const SOURCES = ['/chef.jpg?v=2', '/chef.jpg.jpg?v=2', '/chef.png?v=2', '/chef.jpeg?v=2'];

export default function ChefPhoto({ className = "w-full h-full" }: { className?: string }) {
  const [sourceIndex, setSourceIndex] = useState(0);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (sourceIndex < SOURCES.length - 1) {
      setSourceIndex(prev => prev + 1);
    } else {
      setHasError(true);
    }
  };

  if (hasError) {
    return (
      <div 
        id="chef-photo-placeholder"
        className={`${className} bg-gradient-to-tr from-rosa-light/80 via-white to-blue-50/85 flex flex-col items-center justify-center p-6 text-center border-2 border-dashed border-rosa/30 rounded-[2rem] shadow-inner select-none`}
      >
        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md mb-4 text-rosa border border-rosa/20 animate-pulse">
          <Upload className="w-6 h-6 text-rosa-dark" />
        </div>
        
        <div className="flex items-center gap-1.5 justify-center mb-1">
          <Sparkles className="w-4 h-4 text-rosa-dark animate-spin" style={{ animationDuration: '6s' }} />
          <h3 className="font-serif text-lg font-bold text-texto">Sua Foto Recortada</h3>
        </div>
        
        <p className="font-sans text-xs text-texto-leve max-w-[280px] leading-relaxed mb-4">
          Para ver o lindo desenho que você enviou no chat aqui no site:
        </p>

        <div className="bg-white/90 rounded-xl p-3 border border-rosa/10 max-w-[280px] shadow-sm text-left">
          <ol className="list-decimal list-inside font-sans text-xxs text-texto-leve space-y-1.5 font-medium">
            <li>
              Arraste a foto do seu PC/Celular para o painel de arquivos à esquerda.
            </li>
            <li>
              Pressione na pasta <strong className="text-rosa-dark">public</strong>.
            </li>
            <li>
              Renomeie o arquivo para <strong className="text-rosa-dark">chef.jpg</strong>.
            </li>
          </ol>
        </div>
      </div>
    );
  }

  return (
    <div className={`${className} relative overflow-hidden group`}>
      <img
        src={SOURCES[sourceIndex]}
        alt="Thamires, Confeiteira da Amor e Açúcar"
        className="w-full h-full object-cover select-none transform hover:scale-105 transition-transform duration-500 ease-out"
        onError={handleError}
        referrerPolicy="no-referrer"
        id="chef-photo-img"
      />
      {/* Subtle elegance overlay on hover */}
      <div className="absolute inset-0 bg-rosa-dark/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
}
