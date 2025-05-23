import { Badge } from "@/components/ui/badge"; 
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <div className="h-screen overflow-hidden flex items-center justify-center">
      {/* Removido 'fixed' daqui */}
      <div className="max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-8 lg:py-0 h-full">
        <div className="my-auto max-w-lg">
          <Badge className="bg-gradient-to-br from-emerald-500 via-green-400 to-emerald-600 rounded-full py-1 border-none text-white inline-block">
            Nova versão 1.0.0
          </Badge>
          <h1 className="mt-6 max-w-[20ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-extrabold leading-tight tracking-tight">
            Catalogue e Preserve seu Jardim Verde
          </h1>
          <p className="mt-6 max-w-[60ch] text-lg text-emerald-800">
            Descubra uma ferramenta intuitiva para gerenciar o inventário das suas plantas. Organize, monitore e celebre a biodiversidade do seu espaço verde, tudo em um só lugar.
          </p>
          <div className="mt-12 flex items-center gap-4">
            <Button size="lg" className="rounded-full text-base bg-gray-100 hover:bg-emerald-700">
              Comece Agora <ArrowUpRight className="!h-5 !w-5" />
            </Button>
          </div>
        </div>
        <div className="w-full flex justify-center items-center h-full">
          <div className="w-full max-w-[500px] h-[35vh] rounded-3xl overflow-hidden shadow-xl border-8 border-emerald-300">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
              alt="Floresta exuberante"
              className="object-cover w-full h-full select-none"
              loading="lazy"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
