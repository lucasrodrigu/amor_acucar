import { useState } from 'react';

interface HeroPhotoProps {
  id: 'doces' | 'centro' | 'carrinho';
  alt: string;
  defaultUrl: string;
  className?: string;
  containerClassName?: string;
}

export default function HeroPhoto({ id, alt, defaultUrl, className = "w-full h-full object-cover object-center", containerClassName = "" }: HeroPhotoProps) {
  // Try local files first, ending with the default unsplash URL as a fallback
  const sources = [
    `/${id}.jpg?v=2`,
    `/${id}.jpg.jpg?v=2`,
    `/${id}.png?v=2`,
    `/${id}.jpeg?v=2`,
    `/${id}.webp?v=2`,
    defaultUrl
  ];

  const [index, setIndex] = useState(0);

  const handleError = () => {
    if (index < sources.length - 1) {
      setIndex(prev => prev + 1);
    }
  };

  return (
    <div 
      className={`relative rounded-full overflow-hidden select-none group cursor-default ${containerClassName}`}
      id={`hero-photo-container-${id}`}
    >
      <img
        src={sources[index]}
        alt={alt}
        className={`${className} transform group-hover:scale-105 transition-transform duration-500 ease-out`}
        onError={handleError}
        referrerPolicy="no-referrer"
        id={`hero-photo-img-${id}`}
      />
      
      {/* Decorative inner light ring */}
      <div className="absolute inset-0 rounded-full border border-white/20 pointer-events-none" />
    </div>
  );
}
