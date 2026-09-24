import { MessageCircle } from 'lucide-react';

const WA_FLOAT = "https://wa.me/551129220093?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Dra.%20Fl%C3%A1via%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20agendamento.";

export function FloatingWhatsApp() {
  return (
    <a
      href={WA_FLOAT}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center p-3.5 sm:px-5 sm:py-3.5 rounded-full bg-emerald-600 text-white shadow-2xl hover:bg-emerald-500 transition-all duration-300 animate-pulse-subtle group hover:scale-105 border-2 border-white/20"
    >
      <MessageCircle className="w-7 h-7 sm:w-6 sm:h-6 sm:mr-2 fill-white/20" />
      <span className="hidden sm:inline font-bold text-sm">Falar no WhatsApp</span>
    </a>
  );
}
