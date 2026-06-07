import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = "w-14 h-14", size = 200 }: LogoProps) {
  return (
    <svg 
      viewBox="0 0 200 200" 
      className={`${className} shrink-0 select-none`}
      width={size} 
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      id="brand-logo-svg"
    >
      <defs>
        {/* Sombra suave para o círculo do logo */}
        <filter id="shadow-logo" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.1" />
        </filter>
        {/* Degradê para a fita de cetim azul */}
        <linearGradient id="ribbon-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#93c5fd" />
          <stop offset="50%" stopColor="#b91c1c" stopOpacity="0" /> {/* Transição suave de azul claro */}
          <stop offset="100%" stopColor="#93c5fd" />
        </linearGradient>
        {/* Degradê linear real para a fita */}
        <linearGradient id="blue-ribbon" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#bae6fd" />
          <stop offset="50%" stopColor="#7dd3fc" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
        {/* Degradê para as pontas dobradas da fita (efeito 3D atrás) */}
        <linearGradient id="blue-ribbon-dark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0369a1" />
          <stop offset="100%" stopColor="#0c4a6e" />
        </linearGradient>
      </defs>

      {/* 1. Círculo Externo Branco com Borda Rosa de Alta Definição */}
      <circle 
        cx="100" 
        cy="100" 
        r="80" 
        fill="#ffffff" 
        stroke="#fca5a5" 
        strokeWidth="3" 
        filter="url(#shadow-logo)"
      />

      {/* 2. Linha Interna Tracejada Circular Cinza Claro */}
      <circle 
        cx="100" 
        cy="100" 
        r="72" 
        fill="none" 
        stroke="#cbd5e1" 
        strokeWidth="1.2" 
        strokeDasharray="4,4" 
      />

      {/* 3. BRIGADEIRO (Parte Superior) */}
      <g transform="translate(100, 72)">
        {/* Forminha de brigadeiro rosa listrada */}
        <path 
          d="M -13 0 L -18 -15 C -18 -15 -10 -15 -10 -15 L -6 0" 
          fill="#fda4af" 
        />
        <path 
          d="M 13 0 L 18 -15 C 18 -15 10 -15 10 -15 L 6 0" 
          fill="#fda4af" 
        />
        {/* Forminha do brigadeiro inteira */}
        <path 
          d="M -15 12 L -22 -10 Q -24 -14 -20 -14 L 20 -14 Q 24 -14 22 -10 L 15 12 Z" 
          fill="#fb7185" 
        />
        
        {/* Listras brancas verticais da forminha */}
        <path d="M -12 12 L -17 -14" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M -6 12 L -9 -14" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 0 12 L 0 -14" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 6 12 L 9 -14" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 12 12 L 17 -14" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />

        {/* Corpo do Brigadeiro (Doce de Chocolate redondo) */}
        <ellipse cx="0" cy="-18" rx="20" ry="17" fill="#582f0e" />

        {/* Granulados do brigadeiro (Pequenos retângulos ou linhas curvas) */}
        <line x1="-12" y1="-22" x2="-8" y2="-25" stroke="#331a04" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="-5" y1="-27" x2="-2" y2="-23" stroke="#331a04" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="3" y1="-26" x2="8" y2="-28" stroke="#331a04" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="8" y1="-21" x2="11" y2="-25" stroke="#331a04" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="12" y1="-14" x2="15" y2="-17" stroke="#331a04" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="-14" y1="-15" x2="-10" y2="-17" stroke="#331a04" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="-8" y1="-12" x2="-5" y2="-15" stroke="#331a04" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="-2" y1="-18" x2="2" y2="-16" stroke="#331a04" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="4" y1="-14" x2="7" y2="-11" stroke="#331a04" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="-4" y1="-20" x2="0" y2="-23" stroke="#331a04" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="5" y1="-21" x2="9" y2="-23" stroke="#331a04" strokeWidth="2.5" strokeLinecap="round" />

        {/* Coraçãozinho Azul Turquesa no Topo */}
        <path 
          d="M 0 -29 Q -4 -33 -4 -30 C -4 -26 0 -24 0 -24 C 0 -24 4 -26 4 -30 Q 4 -33 0 -29 Z" 
          fill="#38bdf8" 
        />
      </g>

      {/* 4. Sombra 3D Das Dobras da Fita (Atrás do círculo) */}
      <path d="M 12 112 L 20 122 L 24 112 Z" fill="#0c4a6e" />
      <path d="M 188 112 L 180 122 L 176 112 Z" fill="#0c4a6e" />

      {/* Fitas Laterais Dobradas Dobráveis (Efeito Faixa Cetim 3D) */}
      <path d="M 10 90 L 25 90 L 25 112 L 10 112 L 15 101 Z" fill="url(#blue-ribbon-dark)" />
      <path d="M 190 90 L 175 90 L 175 112 L 190 112 L 185 101 Z" fill="url(#blue-ribbon-dark)" />

      {/* 5. FITA DE CETIM CENTRAL AZUL (Horizontal) */}
      <rect 
        x="20" 
        y="90" 
        width="160" 
        height="32" 
        fill="url(#blue-ribbon)" 
        rx="2" 
        stroke="#bae6fd" 
        strokeWidth="1"
      />

      {/* Texto "Amor & Açúcar" no centro da Fita Azul em Caligrafia Elegante */}
      <text 
        x="100" 
        y="112" 
        fill="#ffffff" 
        fontSize="17.5" 
        fontFamily="'Dancing Script', 'Pacifico', 'Brush Script MT', 'Great Vibes', 'Playfair Display', cursive"
        fontStyle="italic"
        fontWeight="bold"
        textAnchor="middle"
        letterSpacing="0.5"
      >
        Amor & Açúcar
      </text>

      {/* 6. DETALHE DA BORBOLETA/LAÇO CINZA (Abaixo da Fita) */}
      <g transform="translate(100, 134)" stroke="#94a3b8" strokeWidth="1" fill="none" opacity="0.8">
        {/* asa esquerda */}
        <path d="M 0 0 C -6 -6 -12 -3 -8 2 C -5 6 -1 2 0 0" />
        {/* asa direita */}
        <path d="M 0 0 C 6 -6 12 -3 8 2 C 5 6 1 2 0 0" />
      </g>

      {/* 7. TEXTO "By Thamires" (Parte Inferior) */}
      <text 
        x="100" 
        y="157" 
        fill="#0f172a" 
        fontSize="15" 
        fontFamily="'Dancing Script', 'Pacifico', 'Brush Script MT', 'Great Vibes', 'Playfair Display', cursive"
        fontWeight="600"
        textAnchor="middle"
      >
        By Thamires
      </text>
    </svg>
  );
}
