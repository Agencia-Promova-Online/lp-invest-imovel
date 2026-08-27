import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Maria Santos',
      location: 'Lisboa, Portugal',
      property: 'Apartamento 3 quartos - São Paulo',
      text: 'Excelente experiência! Consegui comprar meu apartamento em São Paulo morando em Lisboa. O processo foi totalmente transparente e rápido.',
      rating: 5,
      investment: 'R$ 450.000',
      return: '14% a.a.'
    },
    {
      name: 'Carlos Oliveira',
      location: 'Londres, Reino Unido',
      property: 'Casa 4 quartos - Brasília',
      text: 'A equipe da Invest Brasil me ajudou em todo o processo. Hoje tenho uma casa linda em Brasília com ótima rentabilidade.',
      rating: 5,
      investment: 'R$ 680.000',
      return: '12% a.a.'
    },
    {
      name: 'Ana Rodriguez',
      location: 'Miami, EUA',
      property: 'Apartamento 2 quartos - Rio de Janeiro',
      text: 'Investimento perfeito! Comprei do Miami e hoje tenho um apartamento na Barra da Tijuca gerando renda passiva excelente.',
      rating: 5,
      investment: 'R$ 520.000',
      return: '15% a.a.'
    },
    {
      name: 'João Silva',
      location: 'Toronto, Canadá',
      property: 'Studio - Recife',
      text: 'Processo 100% online funcionou perfeitamente. Recomendo para todos os brasileiros que vivem no exterior.',
      rating: 5,
      investment: 'R$ 280.000',
      return: '16% a.a.'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-aos="fade-up">
            O que nossos
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-amber-600"> clientes dizem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            Mais de 500 brasileiros no exterior já investiram conosco
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <div className="bg-gradient-to-br from-blue-50 to-amber-50 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
            {/* Background Quote */}
            <Quote className="absolute top-8 right-8 w-16 h-16 text-blue-100 transform rotate-12" />
            
            {/* Current Testimonial */}
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-amber-500 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Client Info */}
              <div className="space-y-4">
                <div className="text-xl font-bold text-gray-900">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-gray-600">
                  {testimonials[currentIndex].location}
                </div>
                <div className="text-blue-900 font-semibold">
                  {testimonials[currentIndex].property}
                </div>

                {/* Investment Details */}
                <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto mt-6 pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      {testimonials[currentIndex].investment}
                    </div>
                    <div className="text-sm text-gray-600">Investimento</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-600">
                      {testimonials[currentIndex].return}
                    </div>
                    <div className="text-sm text-gray-600">Rentabilidade</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-blue-900 to-amber-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16" data-aos="fade-up" data-aos-delay="400">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-900 mb-2">500+</div>
            <div className="text-gray-600">Clientes Satisfeitos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-900 mb-2">98%</div>
            <div className="text-gray-600">Taxa de Aprovação</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-900 mb-2">13.5%</div>
            <div className="text-gray-600">Rentabilidade Média</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-900 mb-2">25</div>
            <div className="text-gray-600">Países Atendidos</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;