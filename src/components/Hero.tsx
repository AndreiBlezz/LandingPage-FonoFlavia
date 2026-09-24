import { Star, MessageCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';
import draFlaviaImg from '../assets/dra-flavia.png';

const WA_HERO = "https://wa.me/551129220093?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Dra.%20Fl%C3%A1via%20e%20gostaria%20de%20agendar%20uma%20consulta.";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-bordo-50 via-rose-50/20 to-white pt-8 pb-14 md:pt-12 md:pb-20 border-b border-rose-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Rating Badge */}
        <div className="inline-flex items-center space-x-2 bg-white border border-rose-200 px-3.5 py-1.5 rounded-full mb-6 text-xs sm:text-sm font-semibold text-slate-800 shadow-xs">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
            ))}
          </div>
          <span className="font-bold text-slate-900">5.0 no Google</span>
          <span className="text-slate-500">• (195+ Avaliações Reais em Guarulhos)</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Copy (Left) - 70% Focus on ICP 1 (Parents/Kids) */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
              Fonoaudiologia Infantil e Reabilitação Especializada em Guarulhos
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Ajude seu filho a desenvolver a fala, a comunicação e a mastigação com acolhimento e carinho — com suporte fonoaudiológico especializado também para adultos.
            </p>

            {/* Benefits List */}
            <ul className="space-y-2.5 text-sm sm:text-base text-slate-700 font-medium">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-bordo-700 mr-2.5 shrink-0 mt-0.5" />
                <span><strong>Desenvolvimento Infantil:</strong> Atraso na fala, gagueira infantil e estímulo TEA</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-bordo-700 mr-2.5 shrink-0 mt-0.5" />
                <span><strong>Teste da Linguinha:</strong> Avaliação do freio lingual em recém-nascidos e bebês</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-bordo-700 mr-2.5 shrink-0 mt-0.5" />
                <span><strong>Reabilitação Adulta:</strong> Cirurgia Ortognática, Paralisia Facial e Gagueira</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-bordo-700 mr-2.5 shrink-0 mt-0.5" />
                <span>Atendimento Particular com Emissão de Nota para Reembolso</span>
              </li>
            </ul>

            {/* CTA Button */}
            <div className="pt-2 space-y-3">
              <a
                href={WA_HERO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto font-bold text-base sm:text-lg px-8 py-4 rounded-2xl bg-emerald-600 text-white hover:bg-emerald-700 transition shadow-md hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-6 h-6 mr-2.5 fill-white/20" />
                Agendar Consulta pelo WhatsApp
              </a>

              <p className="text-xs text-slate-500 font-medium flex items-center">
                <ShieldCheck className="w-4 h-4 text-bordo-700 mr-1.5 inline shrink-0" />
                Resposta rápida em horário comercial • Horários exclusivos por agendamento
              </p>
            </div>
          </div>

          {/* Real Photo of Dra. Flávia (Right) - Text Outside Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative max-w-sm w-full">
              
              {/* Photo Frame Container */}
              <div className="bg-white rounded-3xl p-3 border border-rose-200/80 shadow-xl overflow-hidden">
                <div className="rounded-2xl overflow-hidden bg-rose-50 aspect-4/5">
                  <img
                    src={draFlaviaImg}
                    alt="Dra. Flávia Marques Ribeiro - Fonoaudióloga"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Name Card OUTSIDE Image Container */}
                <div className="p-3 text-center bg-white rounded-xl mt-3 border border-slate-200 shadow-xs">
                  <h3 className="font-serif text-lg font-bold text-slate-900">
                    Dra. Flávia Marques Ribeiro
                  </h3>
                  <p className="text-xs font-semibold text-bordo-700">
                    Fonoaudióloga Especialista • CRFa
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
