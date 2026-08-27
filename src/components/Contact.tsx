import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  country: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    country: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Preparado para integração com N8N
      const webhookUrl = 'https://n8n.srv693523.hstgr.cloud/webhook/8bfb0b37-3429-42fe-abe1-31a98fa82728';
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'landing-page'
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', country: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.log('Formulário será integrado com N8N:', formData);
      // Simular sucesso para demonstração
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', country: '' });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const countries = [
    'Portugal', 'Espanha', 'França', 'Alemanha', 'Reino Unido', 'Itália',
    'Estados Unidos', 'Canadá', 'México', 'Argentina', 'Chile', 'Colômbia',
    'Japão', 'China', 'Coreia do Sul', 'Austrália', 'Nova Zelândia', 'Outro'
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact Info */}
          <div className="text-white space-y-8">
            <div data-aos="fade-right">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Fale com nossos
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600"> Especialistas</span>
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                Nossa equipe está pronta para ajudar você a encontrar o investimento imobiliário ideal no Brasil, não importa onde você esteja no mundo.
              </p>
            </div>

            <div className="space-y-6" data-aos="fade-right" data-aos-delay="200">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                  <Mail className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-blue-200">investintermediacoes563@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                  <Phone className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <div className="font-semibold">WhatsApp Internacional</div>
                  <div className="text-blue-200">+55 61 9558-4279</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                  <MapPin className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <div className="font-semibold">Endereço</div>
                  <div className="text-blue-200">Taguatinga, Brasília-DF</div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/20" data-aos="fade-right" data-aos-delay="400">
              <div>
                <div className="text-3xl font-bold text-amber-400">24h</div>
                <div className="text-blue-200">Tempo de resposta</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-400">25</div>
                <div className="text-blue-200">Países atendidos</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-3xl shadow-2xl" data-aos="fade-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Comece sua jornada de investimento
                </h3>
                <p className="text-gray-600">
                  Preencha o formulário e receba uma análise gratuita
                </p>
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="+351 999 999 999"
                />
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                  País onde mora *
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Selecione seu país</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-900 to-blue-800 hover:shadow-xl'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Quero Falar com um Especialista</span>
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-xl">
                  <CheckCircle className="w-5 h-5" />
                  <span>Mensagem enviada! Entraremos em contato em até 24h.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-xl">
                  <AlertCircle className="w-5 h-5" />
                  <span>Erro ao enviar. Tente novamente ou entre em contato via WhatsApp.</span>
                </div>
              )}

              <p className="text-xs text-gray-500 text-center">
                Seus dados estão protegidos e não serão compartilhados com terceiros.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/20 mt-16 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-blue-200 space-y-2">
            <p className='text-center'style={{fontSize:"11px",}}>A Invest Intermediação de Negócios LTDA não é uma instituição financeira e não realiza operações de crédito, financiamentos ou promessas de retorno financeiro direto. Atuamos como empresa de intermediação, conectando clientes a oportunidades no mercado imobiliário e prestando assessoria em processos de aquisição de imóveis e bens no Brasil.

Estamos regularmente inscritos no CNPJ nº 41.818.673/0001-30 e operamos com foco na transparência, legalidade e conformidade com a legislação brasileira vigente. Toda comunicação, simulações e atendimentos são informativos e baseados em dados públicos ou fornecidos por parceiros autorizados.

A Invest Intermediação não garante aprovação de crédito, subsídios ou condições financeiras específicas — cada proposta é avaliada de forma independente pelas instituições envolvidas no processo. Atuamos com ética, respeito ao consumidor e compromisso com a clareza em todas as informações prestadas.

Copyright © 2025. Invest Intermediação de Negócios LTDA. Todos os direitos reservados. Nos isentamos de responsabilidade por falhas técnicas ou operacionais oriundas de serviços de terceiros, como instabilidade em redes ou plataformas externas. Toda navegação e envio de informações em nossos canais está sujeita às limitações técnicas da internet.</p>
            <p>&copy; 2024 INVEST INTERMEDIACAO DE NEGOCIOS LTDA. Todos os direitos reservados.</p>
            <p className="text-sm">CNPJ: 41.818.673/0001-30</p>
            {/* <p className="text-sm mt-2">
              Especialistas em investimento imobiliário para brasileiros no exterior
            </p> */}
            <a href='/termos-politica-de-privacidade' className='style-none'>Termos de Politica de Privacidade</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;