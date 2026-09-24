import { Award, Star, Building, Receipt } from 'lucide-react';

export function TrustBar() {
  const items = [
    {
      icon: Star,
      title: "5.0 ★ no Google",
      desc: "195+ avaliações reais de pacientes",
    },
    {
      icon: Award,
      title: "Selo Amigo da Gagueira",
      desc: "Capacitada pela Oficina de Fluência",
    },
    {
      icon: Building,
      title: "Consultório Privativo",
      desc: "Ambiente acolhedor no Jardim Madeirense",
    },
    {
      icon: Receipt,
      title: "Reembolso de Convênio",
      desc: "Nota fiscal médica e orientação completa",
    },
  ];

  return (
    <div className="bg-[#4a0f1d] text-white py-6 border-y border-[#6b1428]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          {items.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-rose-200 shrink-0">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-white">{item.title}</h4>
                  <p className="text-xs text-rose-100 font-medium leading-snug">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
