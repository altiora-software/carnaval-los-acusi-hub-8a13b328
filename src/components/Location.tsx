// src/components/home/Location.tsx
import { MapPin, Navigation, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/data/products";

export const Location = ({ message }: { message: string }) => {
  // Coordenadas de la Plaza Central de Humahuaca
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.208182281488!2d-65.35241682379366!3d-23.20815594833215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x940f9947847c210d%3A0x2a3e0f402f061f5b!2sPlaza%20Sargento%20Mariano%20Gomez!5e0!3m2!1ses-419!2sar!4v1703700000000!5m2!1ses-419!2sar";

  return (
    <section className="py-24 bg-[#fdfaf5] relative overflow-hidden">
      {/* Decoración tipo "Sol de Mayo" sutil de fondo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Información y Texto */}
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-leaf-mid/10 rounded-2xl mb-2 rotate-3">
              <MapPin className="w-8 h-8 text-leaf-mid" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-secondary tracking-tighter leading-none">
              NUESTRO PUNTO <br />
              <span className="text-leaf-dark">DE ENCUENTRO</span>
            </h2>

            <div className="space-y-4">
              <p className="text-2xl font-bold text-leaf-mid flex items-center justify-center lg:justify-start gap-2">
                <Navigation className="w-6 h-6" />
                Humahuaca, Jujuy
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0">
                Nos encontramos en el corazón del pueblo, frente a la <strong>Plaza Central</strong>. Desde aquí sale la alegría hacia todos los barrios.
              </p>
            </div>

            <div className="p-6 bg-white rounded-3xl border border-leaf-light/20 shadow-sm inline-block w-full md:w-auto">
              <p className="text-sm font-bold text-secondary/60 uppercase tracking-widest mb-4">¿No sabés cómo llegar?</p>
              <Button variant="whatsapp" size="xl" className="w-full md:w-auto rounded-full shadow-lg hover:scale-105 transition-transform" asChild>
                <a href={getWhatsAppUrl(message)} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Consultar por WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Mapa de Google Maps con Estilo Orgánico */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 w-full h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <iframe
                title="Mapa de Humahuaca"
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[0.2] contrast-[1.1]"
              />
            </div>
            
            {/* Adorno atrás del mapa para romper la simetría */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-leaf-mid/20 rounded-[2.5rem] -z-10 rotate-3" />
          </div>

        </div>
      </div>
    </section>
  );
};