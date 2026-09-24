import { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, ChevronLeft, ChevronRight } from 'lucide-react';

import recepcao from '../assets/clinic/recepcao.png';
import brinquedoteca from '../assets/clinic/brinquedoteca.png';
import espera from '../assets/clinic/espera.png';
import superHerois from '../assets/clinic/super-herois.png';

const slides = [
  { img: recepcao, title: "Recepção Principial" },
  { img: brinquedoteca, title: "Sala de Fonoaudiologia Infantil com Brinquedos" },
  { img: espera, title: "Sala de Espera Acolhedora" },
  { img: superHerois, title: "Espaço Infantil Temático" },
];

export function LocationSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-14 md:py-20 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Address & Contact Info (Left) */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
              Nosso Consultório em Guarulhos
            </h2>

            <p className="text-slate-700 text-base leading-relaxed font-normal">
              Localizado no bairro Jardim Madeirense, o consultório foi especialmente preparado para oferecer conforto, privacidade e acolhimento para bebês, crianças e adultos.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-bordo-50 border border-bordo-200 flex items-center justify-center text-bordo-700 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">Endereço Completo</h4>
                  <p className="text-slate-600 text-xs sm:text-sm">
                    Rua Três Marias, 122 - Jardim Madeirense, Guarulhos - SP, 07110-170
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-bordo-50 border border-bordo-200 flex items-center justify-center text-bordo-700 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">Telefone e WhatsApp</h4>
                  <p className="text-slate-600 text-xs sm:text-sm">(11) 2922-0093</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-bordo-50 border border-bordo-200 flex items-center justify-center text-bordo-700 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">Horário de Atendimento</h4>
                  <p className="text-slate-600 text-xs sm:text-sm">
                    Segunda a Sexta: 08:00 às 17:00 (Atendimento sob Agendamento)
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://maps.google.com/?q=Rua+Tres+Marias+122+Jardim+Madeirense+Guarulhos+SP"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-bold text-bordo-700 hover:text-bordo-900 underline underline-offset-4"
              >
                <Navigation className="w-4 h-4 mr-1.5" />
                Abrir rota no Google Maps
              </a>
            </div>
          </div>

          {/* Interactive Photo Slider with 4 New High-Res Photos (Right) */}
          <div className="lg:col-span-6">
            <div className="bg-bordo-50/60 rounded-3xl p-3 sm:p-4 border border-bordo-200/80 shadow-md space-y-3">
              
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-4/3 flex items-center justify-center">
                <img
                  src={slides[currentSlide].img}
                  alt={slides[currentSlide].title}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  aria-label="Foto anterior"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white flex items-center justify-center backdrop-blur-xs transition"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={nextSlide}
                  aria-label="Próxima foto"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white flex items-center justify-center backdrop-blur-xs transition"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Dots Indicator without overlay text */}
              <div className="flex items-center justify-center space-x-2 pt-1">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2.5 rounded-full transition-all ${
                      currentSlide === idx ? 'w-7 bg-bordo-700' : 'w-2.5 bg-bordo-200'
                    }`}
                    aria-label={`Ir para slide ${idx + 1}`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
