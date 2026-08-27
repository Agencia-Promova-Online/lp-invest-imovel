import React from 'react';
import { ArrowRight, MapPin, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-100 rounded-full opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <div className="space-y-8">
          <div data-aos="fade-up" data-aos-delay="100">
            <span className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
              <TrendingUp className="w-4 h-4 mr-2" />
              Oportunidade Exclusiva
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight" data-aos="fade-up" data-aos-delay="200">
            Invista em Imóveis no
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-amber-600"> Brasil</span>
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed" data-aos="fade-up" data-aos-delay="300">
            Especialmente para brasileiros que vivem no exterior. Rentabilidade alta, assessoria completa e processo 100% online.
          </p>

          <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="400">
            <button
              onClick={scrollToContact}
              className="group flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Quero Investir Agora
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="flex items-center space-x-4 px-6 py-4">
              <MapPin className="w-5 h-5 text-blue-900" />
              <span className="text-gray-700 font-medium">Disponível em todo o Brasil</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8" data-aos="fade-up" data-aos-delay="500">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900">12%+</div>
              <div className="text-sm text-gray-600">Rentabilidade a.a.</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900">500+</div>
              <div className="text-sm text-gray-600">Imóveis Vendidos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900">98%</div>
              <div className="text-sm text-gray-600">Satisfação</div>
            </div>
          </div>
        </div>

        {/* 3D Property Image */}
        <div className="relative" data-aos="zoom-in" data-aos-delay="600">
          <div className="relative transform hover:scale-105 transition-transform duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-amber-600/20 rounded-2xl transform rotate-3 scale-105" />
            <div className="relative bg-white p-2 rounded-2xl shadow-2xl">
              <img
                src="https://obkphspftyoddbglfnrz.supabase.co/storage/v1/object/public/image/imovel/imagem%20casa%20brasil.jpg"
                alt="Imóvel de Investimento"
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-green-600">R$ 21.440</div>
                <div className="text-sm text-gray-500">Renda Passiva</div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -top-4 -left-4 bg-white p-3 rounded-full shadow-lg animate-bounce" data-aos="fade-in" data-aos-delay="800">
            <TrendingUp className="w-6 h-6 text-green-500" />
          </div>
          <div className="absolute -bottom-4 left-8 bg-white p-3 rounded-full shadow-lg animate-pulse" data-aos="fade-in" data-aos-delay="1000">
            <MapPin className="w-6 h-6 text-blue-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;