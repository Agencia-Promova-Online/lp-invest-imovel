import React from 'react';
import { DollarSign, Shield, Globe, TrendingUp, Users, Clock } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Alta Rentabilidade',
      description: 'Retorno de 12% a 15% ao ano com valorização garantida do mercado brasileiro.',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Shield,
      title: 'Segurança Jurídica',
      description: 'Todo o processo é acompanhado por advogados especializados em direito imobiliário.',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Globe,
      title: 'Processo 100% Online',
      description: 'Compre do exterior sem sair de casa. Documentação e assinatura digital.',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: TrendingUp,
      title: 'Valorização Constante',
      description: 'O mercado imobiliário brasileiro tem histórico de crescimento consistente.',
      color: 'from-amber-400 to-amber-600'
    },
    {
      icon: Users,
      title: 'Assessoria Especializada',
      description: 'Equipe dedicada para brasileiros no exterior com atendimento personalizado.',
      color: 'from-rose-400 to-rose-600'
    },
    {
      icon: Clock,
      title: 'Processo Rápido',
      description: 'Da escolha à escritura em até 45 dias, com total transparência.',
      color: 'from-teal-400 to-teal-600'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-aos="fade-up">
            Por que Investir no
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-amber-600"> Brasil?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            O mercado imobiliário brasileiro oferece oportunidades únicas para quem vive no exterior
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />

              {/* Icon */}
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${benefit.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-900 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-900 to-amber-600 group-hover:w-full transition-all duration-500 rounded-b-2xl" />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="600">
          {/* Minha Casa Minha Vida Section */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-8 rounded-2xl mb-8 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-16 -translate-y-16" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-400 rounded-full transform -translate-x-12 translate-y-12" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-amber-400 text-blue-900 px-4 py-2 rounded-full text-sm font-bold">
                  NOTÍCIA OFICIAL
                </div>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold mb-3">
                Explosão no Airbnb: cidades brasileiras batem recorde de hospedagens
              </h3>
              <p className="text-xl text-blue-100 mb-6 font-semibold">
                Rio de Janeiro, São Paulo e cidades litorâneas lideram a busca por imóveis no Airbnb durante o ano todo.
              </p>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <p className="text-lg leading-relaxed mb-4">
                  Segundo dados do próprio Airbnb e do Ministério do Turismo, o número de hospedagens ativas cresceu mais de 30% nos últimos dois anos. Investidores vêm aproveitando a alta demanda para transformar imóveis em fontes de renda passiva.
                </p>
                <div className="text-sm text-blue-200 italic">
                  Fonte: Airbnb Newsroom/ Ministério do Turismo


                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400 mb-2">2M+</div>
                  <div className="text-blue-100">Maior demanda habitacional</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400 mb-2">↗️</div>
                  <div className="text-blue-100">Valorização acelerada</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400 mb-2">🏗️</div>
                  <div className="text-blue-100">Oportunidade única</div>
                </div>
              </div>
            </div>
          </div>


          <div className="relative w-full">
            {/* Mobile: card vem antes */}
            <div className="bg-gradient-to-r from-blue-50 to-amber-50 p-8 rounded-2xl inline-block max-w-sm w-full z-10 relative mb-4 lg:hidden">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Pronto para começar?
              </h3>
              <p className="text-gray-600 mb-6">
                Fale com nossos especialistas e descubra as melhores oportunidades
              </p>
              <button
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="px-8 py-4 bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Falar com Especialista
              </button>
            </div>

            {/* Imagem */}
            <img
  src="https://obkphspftyoddbglfnrz.supabase.co/storage/v1/object/public/image/imovel/faixa-casa-2.png"
  alt="Descrição"
  className="w-full h-[40vh] object-cover block lg:h-auto"
/>

            {/* Desktop: card sobreposto à direita */}
            <div className="hidden lg:block absolute top-0 right-0 bg-gradient-to-r from-blue-50 to-amber-50 p-8 rounded-2xl inline-block max-w-sm m-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Pronto para começar?
              </h3>
              <p className="text-gray-600 mb-6">
                Fale com nossos especialistas e descubra as melhores oportunidades
              </p>
              <button
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="px-8 py-4 bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Falar com Especialista
              </button>
            </div>
          </div>





        </div>
      </div>
    </section>
  );
};

export default Benefits;