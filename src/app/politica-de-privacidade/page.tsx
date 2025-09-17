import { ShieldCheck } from "lucide-react";

const PoliticaDePrivacidade = () => {
  return (
    <div className="bg-gray-100 text-gray-800 p-6 w-[90%] md:max-w-3xl mx-auto mt-20 mb-20 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <ShieldCheck className="text-cyan-100 w-8 h-8 mr-2" />
        <h1 className="text-2xl font-bold">Política de Privacidade</h1>
      </div>
      <p className="text-sm mb-4">
        Sua privacidade é importante para nós. Esta política descreve como suas
        informações são coletadas, usadas e protegidas.
      </p>
      <ul className="list-disc list-inside space-y-2 text-sm">
        <li>
          🔒 Coletamos apenas os dados necessários para oferecer uma melhor
          experiência.
        </li>
        <li>
          🔒 Seus dados não serão compartilhados com terceiros sem
          consentimento.
        </li>
        <li>
          🔒 Utilizamos medidas de segurança para proteger suas informações.
        </li>
        <li>
          🔒 Você pode solicitar a exclusão dos seus dados a qualquer momento.
        </li>
      </ul>
      <p className="text-xs text-gray-600 mt-6">
        Última atualização: 17 de setembro de 2025
      </p>
    </div>
  );
};

export default PoliticaDePrivacidade;
