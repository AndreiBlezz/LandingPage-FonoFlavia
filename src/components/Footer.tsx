import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs py-10 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-slate-900 pb-6">
          <div className="text-center md:text-left">
            <h4 className="font-serif text-base font-bold text-slate-200">
              Consultório de Fonoaudiologia Dra. Flávia Marques Ribeiro
            </h4>
            <p className="text-slate-400 mt-1">
              Rua Três Marias, 122 - Jardim Madeirense, Guarulhos - SP, 07110-170 • Tel: (11) 2922-0093
            </p>
          </div>

          <div className="text-center md:text-right text-slate-400">
            <p>Atendimento Particular Especializado</p>
            <p className="text-slate-400 mt-0.5">Guarulhos - São Paulo</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-slate-400 space-y-3 sm:space-y-0">
          <p>© {currentYear} Dra. Flávia Marques Ribeiro. Todos os direitos reservados.</p>
          <p className="flex items-center">
            <span>Desenvolvido com excelência técnica & CRO</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
