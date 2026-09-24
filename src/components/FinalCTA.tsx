import { MessageCircle, ShieldCheck, Clock } from 'lucide-react';

const WA_FINAL = "https://wa.me/551129220093?text=Ol%C3%A1!%20Gostaria%20de%20verificar%20os%20hor%C3%A1rios%20dispon%C3%ADveis%20para%20consulta%20fonoaudiol%C3%B3gica.";

export function FinalCTA() {
  return (
    <section className="py-16 md:py-24 bg-[#4a0f1d] text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-6">
        
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white drop-shadow-xs">
          Cuide da Fala e do Desenvolvimento da Sua Família
        </h2>

        <p className="text-rose-100 text-base sm:text-lg max-w-2xl mx-auto font-medium">
          Clique no botão abaixo para conversar diretamente com nossa equipe no WhatsApp e agendar sua avaliação.
        </p>

        <div className="pt-4 space-y-4">
          <a
            href={WA_FINAL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-bold text-lg px-9 py-5 rounded-2xl bg-emerald-600 text-white hover:bg-emerald-500 transition shadow-2xl hover:shadow-emerald-600/30 transform hover:-translate-y-1 w-full sm:w-auto border border-emerald-400/30"
          >
            <MessageCircle className="w-6 h-6 mr-3 fill-white/20" />
            Falar com a Dra. Flávia no WhatsApp
          </a>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-rose-200 font-semibold pt-2">
            <span className="flex items-center bg-[#6b1428] px-3.5 py-1.5 rounded-full border border-rose-300/30">
              <ShieldCheck className="w-4 h-4 text-emerald-400 mr-1.5 shrink-0" />
              Atendimento Particular Especializado
            </span>
            <span className="flex items-center bg-[#6b1428] px-3.5 py-1.5 rounded-full border border-rose-300/30">
              <Clock className="w-4 h-4 text-emerald-400 mr-1.5 shrink-0" />
              Horários Exclusivos por Agendamento
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
