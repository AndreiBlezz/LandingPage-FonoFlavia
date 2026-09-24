import { CheckCircle2 } from 'lucide-react';
import draFlaviaImg from '../assets/dra-flavia.png';

export function About() {
  return (
    <section className="py-14 md:py-20 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Photo Left */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative max-w-sm w-full">
              <div className="bg-bordo-50 p-3 rounded-3xl border border-bordo-200 shadow-md">
                <div className="rounded-2xl overflow-hidden aspect-4/5 bg-rose-100">
                  <img
                    src={draFlaviaImg}
                    alt="Dra. Flávia Marques Ribeiro"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Description Right */}
          <div className="lg:col-span-7 space-y-5">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Dra. Flávia Marques Ribeiro
            </h2>

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                Com anos de prática clínica em Guarulhos, a <strong>Dra. Flávia Marques Ribeiro</strong> fundamenta seu trabalho no atendimento acolhedor e altamente especializado.
              </p>

              <p>
                Seu consultório foi planejado para ser um ambiente tranquilo e seguro, onde famílias recebem a orientação necessária para o desenvolvimento de seus filhos e adultos encontram suporte técnico para a reabilitação funcional da face e da comunicação.
              </p>
            </div>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-slate-800">
              <div className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-bordo-700 mr-2 shrink-0" />
                <span>Consultas sem apressamento</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-bordo-700 mr-2 shrink-0" />
                <span>Avaliação completa e laudo</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-bordo-700 mr-2 shrink-0" />
                <span>Orientação familiar contínua</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-bordo-700 mr-2 shrink-0" />
                <span>Nota para reembolso de convênio</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
