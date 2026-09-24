import { Star, Quote, MessageCircle } from 'lucide-react';

const reviews = [
  {
    quote: "Excelente profissional, muito atenciosa, e o ambiente é agradável e acolhedor.",
    author: "Cleyton & Juliana",
    info: "Avaliação no Google ★★★★★",
  },
  {
    quote: "Obrigada por todas as orientações e seguimento, inclusive após a consulta. Faz toda a diferença!",
    author: "Izabela Andrade",
    info: "Avaliação no Google ★★★★★",
  },
  {
    quote: "Atendimento impecável! O cuidado e a dedicação com o tratamento do meu filho superaram as expectativas.",
    author: "Raquel Cesário",
    info: "Mãe de Paciente • Google ★★★★★",
  },
];

export function Testimonials() {
  return (
    <section className="py-14 md:py-20 bg-[#4a0f1d] text-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white drop-shadow-xs">
            O Que Dizem Nossos Pacientes
          </h2>
          <p className="text-rose-100 text-sm sm:text-base mt-2 font-medium">
            Avaliação 5.0 estrelas baseada em 195+ depoimentos reais no Google
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="bg-[#6b1428] border border-rose-300/20 rounded-3xl p-7 flex flex-col justify-between space-y-6 shadow-md"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-amber-300">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-300 stroke-amber-300" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-rose-200/40" />
                </div>

                <p className="text-white text-sm leading-relaxed font-serif italic">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-rose-300/20">
                <h4 className="font-bold text-sm text-white">{rev.author}</h4>
                <p className="text-xs text-rose-200 font-medium">{rev.info}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mid-Page CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://wa.me/551129220093?text=Ol%C3%A1!%20Li%20os%20depoimentos%20no%20site%20e%20gostaria%20de%20agendar%20uma%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-bold text-base px-8 py-4 rounded-2xl bg-emerald-600 text-white hover:bg-emerald-500 transition shadow-lg border border-emerald-400/30"
          >
            <MessageCircle className="w-5 h-5 mr-2 fill-white/20" />
            Agendar Consulta no WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
