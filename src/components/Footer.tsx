import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageSquare, Music } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Instagram', url: '#', icon: <Instagram className="w-5 h-5" /> },
    { name: 'Facebook', url: '#', icon: <Facebook className="w-5 h-5" /> },
    { name: 'WhatsApp', url: 'https://wa.me/5512981859083', icon: <MessageSquare className="w-5 h-5" /> },
    { name: 'TikTok', url: '#', icon: <Music className="w-5 h-5" /> },
  ];

  return (
    <footer id="contato" className="bg-[#1a1a2e] text-slate-300 py-16 px-6 md:px-12 select-none border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-12">
          
          {/* Brand Col */}
          <div className="flex flex-col items-start text-left">
            <div className="font-serif text-2xl font-bold text-rosa mb-4">
              Amor e Açúcar
            </div>
            <p className="font-sans text-sm text-slate-400 leading-relaxed mb-6">
              Confeitaria artesanal no coração do Vale do Paraíba. Doces maravilhosos que transformam momentos do cotidiano em memórias afetivas deliciosas e inesquecíveis.
            </p>
            {/* Social Triggers */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-rosa-dark hover:text-white hover:-translate-y-1 hover:border-rosa-dark transition-all duration-200"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Col */}
          <div className="flex flex-col items-start text-left">
            <h4 className="font-sans font-bold text-white text-sm uppercase tracking-wider mb-6">
              Contato & Agenda
            </h4>
            <ul className="space-y-4 font-sans text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-rosa shrink-0 mt-0.5" />
                <span>Vale do Paraíba, São Paulo</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-rosa shrink-0 mt-0.5" />
                <span>(12) 98185-9083</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-rosa shrink-0 mt-0.5" />
                <span>contato@amoreacucar.com.br</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-rosa shrink-0 mt-0.5" />
                <span>Segunda a Sábado: 8h às 20h</span>
              </li>
            </ul>
          </div>

          {/* Map Column */}
          <div className="flex flex-col items-start text-left">
            <h4 className="font-sans font-bold text-white text-sm uppercase tracking-wider mb-6">
              Localização
            </h4>
            <div className="w-full h-40 rounded-2xl overflow-hidden border border-white/10 shadow-md">
              <iframe
                title="Mapa do Vale do Paraíba"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d469905.7817248!2d-45.72!3d-23.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc34978bb89fd5%3A0x38f617cf7c3a9e95!2sVale%20do%20Para%C3%ADba%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1"
                className="w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Separator / Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-slate-500">
            © {currentYear} Amor e Açúcar – By Thamires. Todos os direitos reservados.
          </p>
          <p className="font-sans text-xs text-slate-500 flex items-center gap-1.5">
            Feito com <span className="text-rosa">💕</span> no Vale do Paraíba
          </p>
        </div>

      </div>
    </footer>
  );
}
