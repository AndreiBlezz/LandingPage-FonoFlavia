import { ArrowRight, Activity, Smile, Sparkles, Stethoscope, HeartPulse, MessageCircle } from 'lucide-react';

const services = [
  {
    icon: Stethoscope,
    title: "Teste da Linguinha em Bebês",
    desc: "Avaliação precoce da anatomia do freio lingual em recém-nascidos para prevenir dificuldades na amamentação e deglutição.",
    waMsg: "https://wa.me/551129220093?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20o%20Teste%20da%20Linguinha%20para%20meu%20beb%C3%AA.",
  },
  {
    icon: HeartPulse,
    title: "Desenvolvimento Infantil & TEA",
    desc: "Estimulação de linguagem e fala adaptada para crianças com atrasos de fala, dificuldades de articulação ou neurodivergência.",
    waMsg: "https://wa.me/551129220093?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20avalia%C3%A7%C3%A3o%20de%20desenvolvimento%20infantil.",
  },
  {
    icon: Smile,
    title: "Tratamento de Gagueira & Fluência",
    desc: "Metodologia científica acolhedora para crianças e adultos ganharem segurança e fluência na comunicação oral.",
    waMsg: "https://wa.me/551129220093?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20tratamento%20para%20Gagueira%20e%20Flu%C3%AAncia.",
  },
  {
    icon: Activity,
    title: "Motricidade Orofacial & Cirurgia Ortognática",
    desc: "Reabilitação muscular da face, adequação da mastigação, deglutição e articulação da fala pré e pós-operatória.",
    waMsg: "https://wa.me/551129220093?text=Ol%C3%A1!%20Tenho%20interesse%20em%20avalia%C3%A7%C3%A3o%20de%20Motricidade%20Orofacial%20/%20Cirurgia%20Ortogn%C3%A1tica.",
  },
  {
    icon: Sparkles,
    title: "Paralisia Facial Reabilitadora",
    desc: "Protocolos neurofuncionais personalizados para estimulação da mímica facial e simetria do sorriso.",
    waMsg: "https://wa.me/551129220093?text=Ol%C3%A1!%20Preciso%20de%20avalia%C3%A7%C3%A3o%20para%20reabilita%C3%A7%C3%A3o%20de%20Paralisia%20Facial.",
  },
];

export function Services() {
  return (
    <section className="py-14 md:py-20 bg-bordo-50/50 border-t border-bordo-100/80 border-b">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
            Nossas Especialidades Clínicas
          </h2>
        </div>

        {/* 5 Clean Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-7 border border-rose-100/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-bordo-50 border border-bordo-200 flex items-center justify-center text-bordo-700 group-hover:bg-bordo-700 group-hover:text-white transition-all">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-slate-900 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6">
                  <a
                    href={service.waMsg}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-bold text-bordo-700 hover:text-bordo-900 group-hover:translate-x-1 transition-all"
                  >
                    <span>Agendar este atendimento</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Horizontal CTA Banner (Burgundy Theme) */}
        <div className="bg-bordo-900 text-white rounded-3xl p-6 sm:p-8 shadow-md flex flex-col md:flex-row items-center justify-between gap-6 border border-bordo-800">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold text-white">
              Possui alguma dúvida sobre o seu caso?
            </h3>
            <p className="text-rose-100 text-sm max-w-xl font-normal">
              Fale diretamente com a equipe do consultório no WhatsApp para entender a indicação ideal para você ou seu filho.
            </p>
          </div>

          <a
            href="https://wa.me/551129220093?text=Ol%C3%A1!%20Gostaria%20de%20esclarecer%20uma%20d%C3%BAvida%20sobre%20atendimento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-bold text-sm px-6 py-3.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 transition shrink-0 shadow-md"
          >
            <MessageCircle className="w-4 h-4 mr-2 fill-white/20" />
            Falar com a Dra. Flávia
          </a>
        </div>

      </div>
    </section>
  );
}
