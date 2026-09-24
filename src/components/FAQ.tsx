import { useState } from 'react';
import { ChevronDown, HelpCircle, Receipt } from 'lucide-react';

const faqs = [
  {
    q: "Como funciona o Reembolso pelo meu Plano de Saúde?",
    a: "Trabalhamos no modelo Particular Especializado para garantir um tempo adequado em cada consulta. Nós emitimos o Recibo/Nota Fiscal Médica completo com o laudo fonoaudiológico e os códigos de procedimento. Com esse documento, você solicita o reembolso diretamente no aplicativo do seu convênio (Bradesco, SulAmérica, Amil, Porto Seguro, etc.) e recebe o valor total ou parcial de volta na sua conta.",
    highlight: true,
  },
  {
    q: "A Dra. Flávia atende bebês e crianças pequenas?",
    a: "Sim! A Dra. Flávia realiza o Teste da Linguinha em recém-nascidos para avaliar o freio lingual (importante para a amamentação), além de acompanhamento fonoaudiológico infantil para atrasos no desenvolvimento da fala.",
  },
  {
    q: "Como é feita a reabilitação para Cirurgia Ortognática?",
    a: "A terapia de Motricidade Orofacial atua no pré e pós-operatório para readequar a musculatura da face, a mastigação e a articulação dos sons, acelerando a recuperação funcional.",
  },
  {
    q: "O tratamento para Gagueira atende crianças e adultos?",
    a: "Sim. Utilizando metodologias validadas (como os protocolos da Oficina de Fluência), são aplicadas técnicas de suavização de fala, controle respiratório e redução do impacto da gagueira.",
  },
  {
    q: "Preciso de encaminhamento médico para agendar a consulta?",
    a: "Não é obrigatório para a consulta particular inicial. Caso deseje solicitar reembolso no plano de saúde, orientamos sobre os documentos necessários.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-14 md:py-20 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  faq.highlight
                    ? 'bg-bordo-50 border-bordo-200 shadow-xs'
                    : 'bg-white border-slate-200'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between font-bold text-base sm:text-lg text-slate-900 hover:text-bordo-700 transition"
                >
                  <span className="flex items-center mr-3">
                    {faq.highlight ? (
                      <Receipt className="w-5 h-5 text-bordo-700 mr-2.5 shrink-0" />
                    ) : (
                      <HelpCircle className="w-5 h-5 text-slate-500 mr-2.5 shrink-0" />
                    )}
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-bordo-700' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-slate-700 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
