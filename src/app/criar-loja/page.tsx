import { Store } from "lucide-react";
import Link from "next/link";

const CriarLoja = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 rounded-lg shadow-md bg-gray-900 text-gray-100 w-[90%] md:max-w-md mx-auto mt-20 mb-20">
      <Store className="text-cyan-100 text-5xl mb-4" />
      <h1 className="text-2xl font-bold mb-2">Criar Sua Loja</h1>
      <p className="text-center text-sm mb-4">
        Pronto para começar sua jornada? Acesse meu portfólio e solicite sua
        loja personalizada.
      </p>
      <Link
        href="https://popotomimi.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-cyan-100 text-gray-800 px-4 py-2 rounded hover:bg-cyan-200 transition-colors duration-300">
        Ir para o Portfólio
      </Link>
    </div>
  );
};

export default CriarLoja;
