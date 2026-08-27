import React from 'react';
import { Search, FileText, CreditCard, Key, CheckCircle } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: Search,
      title: 'Análise de Perfil',
      description: 'Identificamos o imóvel ideal baseado no seu perfil de investimento e objetivos.',
      duration: '1-3 dias'
    },
    {
      icon: FileText,
      title: 'Documentação',
      description: 'Preparamos toda documentação necessária e fazemos a validação jurídica.',
      duration: '5-7 dias'
    },
    {
      icon: CreditCard,
      title: 'Financiamento',
      description: 'Estruturamos as melhores condições de pagamento.',
      duration: '10-15 dias'
    },
    {
      icon: Key,
      title: 'Escritura Digital',
      description: 'Assinatura digital da escritura com total segurança jurídica.',
      duration: '3-5 dias'
    },
    {
      icon: CheckCircle,
      title: 'Imóvel Seu',
      description: 'Receba as chaves e documentos. Seu investimento está completo!',
      duration: 'Finalizado'
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-aos="fade-up">
            Como
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-amber-600"> Funciona?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            Processo simples e transparente em 5 etapas. Do primeiro contato até as chaves na mão.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-900 to-amber-600" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
                data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}
                data-aos-delay={index * 100}
              >
                {/* Content Card */}
                <div className="flex-1 max-w-md">
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${
                        index === 0 ? 'from-blue-400 to-blue-600' :
                        index === 1 ? 'from-purple-400 to-purple-600' :
                        index === 2 ? 'from-green-400 to-green-600' :
                        index === 3 ? 'from-amber-400 to-amber-600' :
                        'from-rose-400 to-rose-600'
                      }`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Step Number */}
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="lg:hidden w-0.5 h-12 bg-gradient-to-b from-blue-900 to-amber-600 mx-auto mt-4" />
                  )}
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 max-w-md hidden lg:block" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="600">
          <div className="bg-white p-8 rounded-2xl shadow-lg inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Todo o processo em até 45 dias
            </h3>
            <p className="text-gray-600 mb-6">
              Com acompanhamento completo e transparência total
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Começar Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;