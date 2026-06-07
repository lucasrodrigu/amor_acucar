import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Footer from './components/Footer';
import { MessageSquare, ArrowUp } from 'lucide-react';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-creme flex flex-col scroll-smooth">
      {/* HEADER SECTION */}
      <Header />

      {/* BODY CONTENT */}
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Faq />
      </main>

      {/* FOOTER SECTION */}
      <Footer />

      {/* INTERACTIVE FLOATING ELEMENTS */}
      
      {/* 1. SCROLL TO TOP KEY */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-5 md:bottom-28 md:right-8 z-40 bg-white border border-rosa/30 text-rosa-dark p-3.5 rounded-full shadow-lg hover:bg-rosa-light active:scale-95 hover:-translate-y-1 transition-all duration-300"
          title="Voltar ao início"
          aria-label="Voltar ao topo da página"
        >
          <ArrowUp className="w-5 h-5 pointer-events-none" />
        </button>
      )}

      {/* 2. CHAT WHATSAPP BADGE WITH HEARTBEING RADIAL PULSE */}
      <div className="fixed bottom-6 right-5 md:bottom-8 md:right-8 z-40 flex items-center gap-3">
        {/* Tooltip */}
        <div className="hidden md:block bg-white text-texto font-sans text-xs font-semibold px-4 py-2.5 rounded-2xl shadow-md border border-rosa/10 max-w-xs transition-opacity duration-300 pointer-events-none hover:opacity-100">
          Olá! 👋 Gostaria de agendar as suas delícias?
        </div>
        
        {/* Pulsing Button */}
        <a
          href="https://wa.me/5512981859083?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20doces%20da%20Amor%20e%20Açúcar!"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5b] rounded-full flex items-center justify-center text-white shadow-xl hover:shadow-[0_10px_25px_rgba(37,211,102,0.4)] active:scale-95 hover:-translate-y-1 transition-all duration-300 group"
          title="Falar no WhatsApp"
        >
          {/* Pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/20 animate-ping group-hover:animate-none"></span>
          
          <MessageSquare className="w-7 h-7 fill-white relative z-10" />
        </a>
      </div>

    </div>
  );
}
