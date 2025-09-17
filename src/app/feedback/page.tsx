import { MessageSquare } from "lucide-react";

const FeedbackPage = () => {
  const feedbacks = [
    {
      nome: "Amanda Ribeiro",
      mensagem:
        "A experiência de criar minha loja foi super intuitiva! Em poucos minutos já estava tudo funcionando. Recomendo demais!",
    },
    {
      nome: "Carlos Menezes",
      mensagem:
        "O suporte foi excelente e a interface é muito amigável. Consegui personalizar tudo do meu jeito.",
    },
    {
      nome: "Juliana Costa",
      mensagem:
        "Achei incrível como o site se adapta bem ao celular. Muito prático para quem está sempre em movimento.",
    },
    {
      nome: "Thiago Martins",
      mensagem:
        "A plataforma é leve, rápida e tem um visual muito profissional. Me surpreendeu positivamente!",
    },
  ];

  return (
    <div className="bg-gray-100 text-gray-800 p-6 w-[90%] md:max-w-3xl mx-auto mt-20 mb-20 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <MessageSquare className="text-cyan-100 w-8 h-8 mr-2" />
        <h1 className="text-2xl font-bold">Feedback dos Usuários</h1>
      </div>
      <p className="text-sm mb-6">
        Veja o que algumas pessoas estão dizendo sobre a plataforma:
      </p>
      <div className="space-y-4">
        {feedbacks.map((fb, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded shadow-sm border border-gray-200">
            <h2 className="font-semibold text-cyan-100">{fb.nome}</h2>
            <p className="text-sm mt-1">{fb.mensagem}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackPage;
