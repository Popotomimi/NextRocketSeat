import { FileText } from "lucide-react";

const TermosDeUso = () => {
  return (
    <div className="bg-gray-100 text-gray-800 p-6 w-[90%] md:max-w-3xl mx-auto mt-20 mb-20 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <FileText className="text-cyan-100 w-8 h-8 mr-2" />
        <h1 className="text-2xl font-bold">Termos de Uso</h1>
      </div>
      <p className="text-sm mb-4">
        Ao utilizar esta plataforma, você concorda com os seguintes termos:
      </p>
      <ul className="list-disc list-inside space-y-2 text-sm">
        <li>
          ✅ Você é responsável pelas informações fornecidas ao criar sua loja.
        </li>
        <li>
          ✅ O uso indevido da plataforma pode resultar em suspensão da conta.
        </li>
        <li>
          ✅ Os dados coletados serão tratados conforme nossa política de
          privacidade.
        </li>
        <li>
          ✅ Reservamo-nos o direito de modificar os termos a qualquer momento.
        </li>
      </ul>
      <p className="text-xs text-gray-600 mt-6">
        Última atualização: 17 de setembro de 2025
      </p>
    </div>
  );
};

export default TermosDeUso;
