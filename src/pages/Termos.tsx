export default function Termos() {
  return (
    <div className="relative min-h-screen bg-gray-50 text-gray-800 px-6 py-16 overflow-hidden">
      {/* Luzes decorativas */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 opacity-30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-100 opacity-20 rounded-full blur-3xl animate-pulse" />

      <div className="max-w-3xl mx-auto relative z-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Termo de Uso e Política de Privacidade</h1>
        <p className="mb-6 text-lg text-gray-600">
          Ao fornecer seus dados, você concorda com nossa Política de Privacidade e os Termos de Uso, autorizando o tratamento de seus dados pessoais conforme a Lei Geral de Proteção de Dados Pessoais (LGPD), Lei nº 13.709/2018.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-800">📌 Finalidade do Tratamento dos Dados</h2>
            <p className="text-gray-600">
              Os dados coletados serão utilizados exclusivamente para o envio de comunicações de marketing, ofertas, promoções e informações sobre nossos produtos e serviços, conforme o artigo 7º, inciso IX da LGPD.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800">🧾 Direitos do Titular dos Dados</h2>
            <p className="text-gray-600">
              Você pode, a qualquer momento, solicitar a confirmação da existência, acesso, correção, atualização, portabilidade ou exclusão de seus dados pessoais, além de retirar seu consentimento para o envio de comunicações de marketing, conforme os artigos 18 e 19 da LGPD.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800">🔒 Segurança e Armazenamento de Dados</h2>
            <p className="text-gray-600">
              Adotamos medidas de segurança adequadas, conforme o artigo 46 da LGPD, para proteger seus dados pessoais contra acesso não autorizado, uso indevido, alteração e destruição.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800">📂 Acesso e Correção de Dados</h2>
            <p className="text-gray-600">
              Você tem o direito de solicitar acesso aos seus dados pessoais armazenados por nós, incluindo o tipo de dado, a finalidade do tratamento e o tempo de armazenamento. Caso estejam incorretos ou desatualizados, poderá solicitar correção imediata.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800">🗑️ Exclusão dos Dados Pessoais</h2>
            <p className="text-gray-600">
              Você pode solicitar a exclusão dos seus dados pessoais dos nossos registros, desde que não haja uma obrigação legal para mantê-los.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800">📬 Contato para Solicitações</h2>
            <p className="text-gray-600">
              Para exercer seus direitos ou obter mais informações sobre nossa Política de Privacidade, entre em contato com a equipe responsável pelos canais abaixo:
            </p>
            <ul className="mt-2 text-gray-700 list-disc list-inside">
              <li><strong>Email:</strong> investintermediacoes563@gmail.com</li>
              <li><strong>Telefone:</strong> (61) 9558-4279</li>
              <li><strong>Endereço:</strong> Taguatinga Shopping, Torre B, Andar 11, Sala 1125, Taguatinga, Brasília-DF</li>
            </ul>
          </section>
        </div>

        <footer className="mt-12 pt-6 border-t text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Invest Intermediação de Negócios LTDA · CNPJ: 41.818.673/0001-30. Todos os direitos reservados.
        </footer>
      </div>
    </div>
  );
}
