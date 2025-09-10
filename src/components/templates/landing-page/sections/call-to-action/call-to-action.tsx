import Link from "next/link";
import { Button } from "../../../../ui/button";
import { ArrowRight, Store } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-cyan-950/20 to-gray-700">
      <div className="absolute inset-0 hidden md:block bg-[url('/background-footer.svg')] bg-cover bg-center bg-no-repeat placeholder-opacity-90" />

      <div className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 p-4 bg-cyan-300 w-fit rounded-full">
        <Store className="text-cyan-100" />
      </div>
      <div className="container relative">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2
            className={`font-sans text-gray-100 text-balance text-heading-xl`}>
            Crie uma loja online e inicie suas vendas ainda hoje
          </h2>
          <Button className="rounded-full w-fit mt-6" asChild>
            <Link href="/criar-loja">
              Criar a loja grátis <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
