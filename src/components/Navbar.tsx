import { MessageCircle, Phone } from 'lucide-react';

const WA_URL = "https://wa.me/551129220093?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Dra.%20Fl%C3%A1via%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20agendamento.";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-rose-100 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        
        {/* Brand */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-bordo-700 text-white font-serif font-bold text-xl flex items-center justify-center shadow-xs">
            F
          </div>
          <div>
            <span className="block font-serif text-lg font-bold text-slate-900 leading-tight">
              Dra. Flávia Marques Ribeiro
            </span>
            <span className="block text-xs font-semibold text-bordo-700 tracking-wide">
              Consultório de Fonoaudiologia • Guarulhos
            </span>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="flex items-center space-x-3">
          <a
            href="tel:1129220093"
            className="hidden md:flex items-center text-xs font-semibold text-slate-700 hover:text-bordo-700 transition px-3 py-2 rounded-lg bg-bordo-50 border border-bordo-200"
          >
            <Phone className="w-3.5 h-3.5 mr-1.5 text-bordo-700" />
            (11) 2922-0093
          </a>

          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition shadow-xs"
          >
            <MessageCircle className="w-4 h-4 mr-1.5 fill-white/20" />
            <span className="hidden sm:inline">Agendar no</span> WhatsApp
          </a>
        </div>

      </div>
    </header>
  );
}
