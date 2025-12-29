// src/components/home/Hero.tsx
import { Button } from "@/components/ui/button";
import { HeroCarousel } from "@/components/HeroCarousel";
import { WHATSAPP_NUMBER } from "@/data/products";

export const Hero = ({ images }: { images: string[] }) => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <HeroCarousel images={images} />
      
      {/* Overlay un poco más oscuro para que el texto brille más */}
      <div className="absolute inset-0 bg-black/40 z-[5]" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-sans text-5xl md:text-8xl lg:text-9xl font-black text-white mb-6 leading-[0.8] tracking-tighter opacity-0 animate-scale-in">
            COMPARSA <br /> 
            {/* Texto con gradiente animado y sombra para legibilidad */}
            <span className="relative inline-block mt-4 bg-gradient-to-r from-leaf-light via-yellow-400 to-leaf-mid bg-[length:200%_auto] animate-text-gradient bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              LOS ACUSI
            </span>
          </h1>
          
          <p className="font-sans text-xl md:text-2xl text-white/90 mb-8 font-light tracking-wide opacity-0 animate-fade-in-delay-1 drop-shadow-md">
            Tradición y Corazón en el Carnaval de Humahuaca
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-delay-2">
            <Button size="xl" className="bg-leaf-mid hover:bg-leaf-dark text-white rounded-full px-10 text-lg shadow-xl transition-all hover:scale-105" asChild>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
                Contactarnos
              </a>
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-leaf-dark rounded-full px-10 text-lg backdrop-blur-sm transition-all shadow-lg" asChild>
              <a href="#invitacion">
                Invitación al carnaval
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-1 h-12 bg-gradient-to-b from-transparent to-leaf-light rounded-full" />
      </div>
    </section>
  );
};