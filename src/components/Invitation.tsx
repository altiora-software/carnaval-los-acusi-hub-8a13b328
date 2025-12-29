// src/components/home/Invitation.tsx
import { Button } from "@/components/ui/button";
import { PartyPopper, CheckCircle2 } from "lucide-react"; // Cambié a CheckCircle2 para mejor look
import { getWhatsAppUrl } from "@/data/products";

export const Invitation = ({ message }: { message: string }) => {
  return (
    <section id="invitacion" className="py-24 bg-gradient-to-br from-leaf-dark via-secondary to-black text-white relative overflow-hidden">
      {/* Decoración de fondo mejorada para evitar áreas "lavadas" */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-leaf-mid/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-leaf-light/10 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Icono con fondo que resalte */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-8 border border-leaf-light/30">
            <PartyPopper className="w-10 h-10 text-leaf-light" />
          </div>
          
          {/* Título forzado a blanco para que no tome el foreground grisáceo */}
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-primary">
            SUMATE AL CARNAVAL <br/> 
            <span className="text-leaf-light italic">CON LOS ACUSI</span>
          </h2>
          
          {/* Tarjeta con fondo oscuro sólido/semi-transparente para asegurar contraste */}
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 md:p-12 mb-10 shadow-2xl">
            <h3 className="text-2xl font-bold mb-8 text-leaf-light tracking-wide uppercase">
              Tu invitación incluye
            </h3>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-10 max-w-lg mx-auto">
              {["Participación oficial", "Tarjeta de almuerzo", "Bebida incluida", "Acompañamiento"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/90 text-lg">
                  <CheckCircle2 className="w-6 h-6 text-leaf-light shrink-0" /> 
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="py-6 border-t border-white/10">
              <span className="text-leaf-light/80 text-sm font-bold uppercase tracking-widest">Valor de la invitación</span>
              <p className="text-5xl md:text-7xl font-black text-white tracking-tighter mt-2">
                $25.000
              </p>
            </div>
          </div>

          {/* Botón con colores sólidos del logo */}
          <Button 
            size="xl" 
            className="bg-primary hover:bg-white hover:text-primary font-extrabold rounded-full px-12 text-xl shadow-xl shadow-leaf-mid/20 transition-all hover:scale-105 active:scale-95 animate-pulse-glow" 
            asChild
          >
            <a href={getWhatsAppUrl(message)} target="_blank" rel="noopener noreferrer">
              QUIERO MI LUGAR AHORA
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};