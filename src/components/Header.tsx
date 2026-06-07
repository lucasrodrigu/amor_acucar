import { useState, useEffect } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Perguntas', href: '#faq' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 bg-[#FBECF2] border-b border-rosa/10 shadow-sm ${
      scrolled || isOpen
        ? 'py-3 shadow-md' 
        : 'py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <Logo className="w-14 h-14 group-hover:scale-105 transition-transform duration-300 ease-out" />
          <div className="flex flex-col">
            <span className="font-serif text-xl md:text-2xl font-bold text-rosa-dark tracking-tight leading-none">
              Amor e Açúcar
            </span>
            <span className="font-sans text-xs text-azul-dark font-medium tracking-wide">
              by Thamires
            </span>
          </div>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-sans text-texto font-medium hover:text-rosa-dark transition-colors duration-200 relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rosa-dark transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* ACTIONS (WHATSAPP ICON BUTTON & MOBILE MENU) */}
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/5512981859083?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20doces%20da%20Amor%20e%20Açúcar!"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 bg-[#25D366] hover:bg-[#1ebe5b] text-white flex items-center justify-center rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
            title="Falar no WhatsApp"
            id="whatsapp-header-btn"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M12.004 2C6.51 2 2.014 6.5 2.014 12c0 2.16.7 4.15 1.89 5.8l-1.24 4.5 4.61-1.21c1.61.88 3.46 1.38 5.43 1.38 5.5 0 9.99-4.5 9.99-10S17.18 2 12.004 2zm5.73 14.15c-.24.68-1.23 1.25-1.72 1.31-.48.06-.96.09-3.08-.75-2.72-1.07-4.47-3.83-4.61-4.01-.13-.19-1.08-1.44-1.08-2.75 0-1.31.69-1.96.96-2.22.27-.27.6-.33.81-.33.21 0 .42 0 .61.01.2.01.46-.08.72.54.26.63.89 2.16.97 2.31.08.15.13.33.03.53-.1.19-.22.42-.42.66-.21.23-.44.49-.63.66-.21.19-.44.4-.19.83.25.42 1.11 1.83 2.38 2.96 1.63 1.45 3.01 1.9 3.44 2.1.43.2.69.17.95-.13.26-.3.1.1 1.13-1.12.16-.18.35-.15.58-.06.23.09 1.46.69 1.71.81.25.13.42.19.48.29.06.11.06.63-.18 1.31z"/>
            </svg>
          </a>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-rosa-dark hover:text-rosa-mid focus:outline-none"
            aria-label={isOpen ? 'Fechar Menu' : 'Abrir Menu'}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* MOBILE NAV OVERLAY */}
      {isOpen && (
        <div className="md:hidden bg-[#FBECF2] border-b border-rosa/10 absolute top-full left-0 w-full shadow-lg transition-all duration-300">
          <div className="px-6 py-5 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-sans text-texto text-lg font-medium hover:bg-rosa-light px-3 py-2 rounded-lg transition-colors"
                id={`mobilenav-${link.name.toLowerCase().replace(/\s+/g, '')}`}
              >
                {link.name}
              </a>
            ))}
            <hr className="border-rosa/10" />
            <a
              href="https://wa.me/5512981859083?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20doces%20da%20Amor%20e%20Açúcar!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white flex items-center justify-center gap-2.5 p-3.5 rounded-full font-sans font-semibold shadow-md active:scale-95 transition-all hover:bg-[#1ebe5b]"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M12.004 2C6.51 2 2.014 6.5 2.014 12c0 2.16.7 4.15 1.89 5.8l-1.24 4.5 4.61-1.21c1.61.88 3.46 1.38 5.43 1.38 5.5 0 9.99-4.5 9.99-10S17.18 2 12.004 2zm5.73 14.15c-.24.68-1.23 1.25-1.72 1.31-.48.06-.96.09-3.08-.75-2.72-1.07-4.47-3.83-4.61-4.01-.13-.19-1.08-1.44-1.08-2.75 0-1.31.69-1.96.96-2.22.27-.27.6-.33.81-.33.21 0 .42 0 .61.01.2.01.46-.08.72.54.26.63.89 2.16.97 2.31.08.15.13.33.03.53-.1.19-.22.42-.42.66-.21.23-.44.49-.63.66-.21.19-.44.4-.19.83.25.42 1.11 1.83 2.38 2.96 1.63 1.45 3.01 1.9 3.44 2.1.43.2.69.17.95-.13.26-.3.1.1 1.13-1.12.16-.18.35-.15.58-.06.23.09 1.46.69 1.71.81.25.13.42.19.48.29.06.11.06.63-.18 1.31z"/>
              </svg>
              <span>Orçamento no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
