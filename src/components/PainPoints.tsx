import { Baby, UserCheck, Sparkles } from 'lucide-react';

export function PainPoints() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
            Como a Fonoaudiologia Acompanha a Sua Família?
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Prioridade para a fala e desenvolvimento dos seus filhos, com atendimento especializado também para adultos.
          </p>
        </div>

        {/* 70/30 Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Focus: ICP 1 - Parents / Children (7 cols) */}
          <div className="lg:col-span-7 bg-bordo-50/70 border-2 border-bordo-200 rounded-3xl p-7 sm:p-9 space-y-5 flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-2xl bg-bordo-700 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Baby className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-slate-900">
                    Acompanhamento para Pais e Crianças
                  </h3>
                  <p className="text-xs font-semibold text-bordo-800">Do recém-nascido à primeira infância</p>
                </div>
              </div>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Sabemos o quanto o desenvolvimento da fala do seu filho é prioridade absoluta. Oferecemos um olhar atento, carinhoso e sem pressa para que cada etapa ocorra no tempo certo:
              </p>

              <ul className="space-y-3 text-sm sm:text-base text-slate-800 font-medium">
                <li className="flex items-start">
                  <span className="w-2.5 h-2.5 rounded-full bg-bordo-700 mt-1.5 mr-3 shrink-0"></span>
                  <span><strong>Atraso no Desenvolvimento da Fala:</strong> Estímulo lúdico para a criança aprender a articular palavras e formar frases com segurança.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2.5 h-2.5 rounded-full bg-bordo-700 mt-1.5 mr-3 shrink-0"></span>
                  <span><strong>Gagueira Infantil & Fluência:</strong> Métodos cientificamente validados para a criança falar com suavidade e sem ansiedade.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2.5 h-2.5 rounded-full bg-bordo-700 mt-1.5 mr-3 shrink-0"></span>
                  <span><strong>Teste da Linguinha em Bebês:</strong> Diagnóstico do freio lingual em recém-nascidos para garantir uma amamentação sem dor.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2.5 h-2.5 rounded-full bg-bordo-700 mt-1.5 mr-3 shrink-0"></span>
                  <span><strong>Transtornos do Desenvolvimento (TEA):</strong> Atendimento adaptado para autonomia de comunicação de crianças neurodivergentes.</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-bordo-200/80">
              <a
                href="https://wa.me/551129220093?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20fonoaudiol%C3%B3gica%20infantil."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-bold text-bordo-800 hover:text-bordo-900 underline underline-offset-4"
              >
                <span>Agendar Avaliação Infantil no WhatsApp →</span>
              </a>
            </div>
          </div>

          {/* Secondary Focus: ICP 2 - Adult Rehabilitation (5 cols) */}
          <div className="lg:col-span-5 bg-rose-50/40 border border-rose-200/80 rounded-3xl p-7 sm:p-8 space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center shrink-0">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-slate-900">
                    Reabilitação Adulta
                  </h3>
                  <p className="text-xs font-semibold text-slate-500">Também atendemos adultos</p>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Suporte fonoaudiológico especializado para recuperação funcional da musculatura facial e da voz:
              </p>

              <ul className="space-y-2.5 text-sm text-slate-800 font-medium">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-slate-800 mt-2 mr-2.5 shrink-0"></span>
                  <span><strong>Cirurgia Ortognática e Trauma de Face:</strong> Reabilitação de motricidade orofacial e mastigação.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-slate-800 mt-2 mr-2.5 shrink-0"></span>
                  <span><strong>Paralisia Facial Periférica:</strong> Exercícios para mímica facial e simetria do sorriso.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-slate-800 mt-2 mr-2.5 shrink-0"></span>
                  <span><strong>Gagueira Adulta e Fluência:</strong> Protocolos para segurança na comunicação profissional.</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-rose-200/60">
              <a
                href="https://wa.me/551129220093?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20atendimento%20fonoaudiol%C3%B3gico%20para%20adultos."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs sm:text-sm font-bold text-slate-900 hover:text-bordo-800 underline"
              >
                <span>Saber mais sobre atendimento para adultos →</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
