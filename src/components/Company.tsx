import React from 'react';
import { Award, Users, Globe, Shield, TrendingUp, CheckCircle } from 'lucide-react';

const Company: React.FC = () => {
  const achievements = [
    { icon: Award, text: '10 anos de experiência', color: 'from-amber-400 to-amber-600' },
    { icon: Users, text: '500+ famílias atendidas', color: 'from-blue-400 to-blue-600' },
    { icon: Globe, text: '25 países alcançados', color: 'from-green-400 to-green-600' },
    { icon: Shield, text: '100% segurança jurídica', color: 'from-purple-400 to-purple-600' }
  ];

  const services = [
    'Consultoria especializada para brasileiros no exterior',
    'Crédito internacional',
    'Assessoria jurídica completa',
    'Processo 100% digital',
    'Acompanhamento pós-venda',
    'Gestão de aluguel (opcional)'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Company Info */}
          <div className="space-y-8">
            <div data-aos="fade-right">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-amber-100 text-blue-900 rounded-full text-sm font-medium mb-4">
                INVEST INTERMEDIACAO DE NEGOCIOS LTDA
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Especialistas em
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-amber-600"> Investimento Imobiliário</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Somos a única empresa no Brasil especializada exclusivamente em atender brasileiros que vivem no exterior, e desejam investir no mercado imobiliário nacional.
              </p>
            </div>

            {/* Services List */}
            <div className="space-y-4" data-aos="fade-right" data-aos-delay="200">
              {services.map((service, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{service}</span>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4" data-aos="fade-right" data-aos-delay="400">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-lg">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${achievement.color}`}>
                    <achievement.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium text-sm">
                    {achievement.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative" data-aos="fade-left">
            {/* Main Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-amber-600/20 rounded-2xl transform rotate-3 scale-105" />
              <div className="relative bg-white p-4 rounded-2xl shadow-2xl">
                <img
                  src="https://obkphspftyoddbglfnrz.supabase.co/storage/v1/object/public/image/Maquinas/equipe-invest.jpg"
                  alt="Equipe Invest Intermediação"
                  className="w-full h-64 object-cover rounded-xl"
                />
                
                {/* Floating Stats */}
                <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-blue-900">500+</div>
                  <div className="text-sm text-gray-500">Clientes</div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-green-600">98%</div>
                  <div className="text-sm text-gray-500">Satisfação</div>
                </div>
              </div>
            </div>

            {/* Additional Property Images */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-2 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://obkphspftyoddbglfnrz.supabase.co/storage/v1/object/public/image/imovel/estadosUnidos.webp"
                  alt="Estados Unidos"
                  className="w-full h-24 object-cover rounded-lg"
                />
              </div>
              <div className="bg-white p-2 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://obkphspftyoddbglfnrz.supabase.co/storage/v1/object/public/image/imovel/portugal.jpg"
                  alt="Portugal"
                  className="w-full h-24 object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-8 right-8 bg-white p-3 rounded-full shadow-lg animate-pulse">
              <TrendingUp className="w-6 h-6 text-green-500" />
            </div>
            <div className="absolute bottom-32 left-8 bg-white p-3 rounded-full shadow-lg animate-bounce">
              <Globe className="w-6 h-6 text-blue-500" />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="600">
          <div className="bg-white p-8 rounded-2xl shadow-lg inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Pronto para seu próximo investimento?
            </h3>
            <p className="text-gray-600 mb-6">
              Fale conosco e descubra as melhores oportunidades do mercado brasileiro
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Falar com um Especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;