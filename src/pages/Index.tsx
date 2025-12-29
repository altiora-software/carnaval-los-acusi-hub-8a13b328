import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ProductCard } from "@/components/ProductCard";
import { Section } from "@/components/Section";
import { InfiniteCarousel } from "@/components/InfiniteCarousel";
import { products, getWhatsAppUrl, WHATSAPP_NUMBER } from "@/data/products";
import { galleryImages } from "@/data/gallery";
import { MapPin, Users, PartyPopper, ArrowRight } from "lucide-react";

import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import { Hero } from "@/components/Hero";
import { Invitation } from "@/components/Invitation";
import { About } from "@/components/About";
import { Location } from "@/components/Location";
import { ProductPreview } from "@/components/ProductPreview";

const heroImages = [hero1, hero2, hero3];

const Index = () => {
  const invitationMessage = "Hola! Quiero sumarme al carnaval con Los Acusi. Me interesa la invitación.";
  const locationMessage = "Hola! Quiero consultar la ubicación y punto de encuentro para el carnaval.";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <Hero images={heroImages} />

      {/* Quiénes Somos */}
      <About />

      {/* Dónde Estamos */}
      <Location message={locationMessage} />

      {/* Invitación al Carnaval */}
      <Invitation message={invitationMessage} />

      {/* Productos Preview */}
      <ProductPreview />

      {/* Galería Preview */}
      <Section className="bg-muted overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">
              Momentos del carnaval
            </h2>
          </div>
        </div>

        <InfiniteCarousel speed={40}>
          {galleryImages.map((img) => (
            <div
              key={img.id}
              className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </InfiniteCarousel>

        <div className="container mx-auto px-4">
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/galeria">
                Ver más fotos
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Contacto Final */}
      {/* Sección CTA: ¿Querés sumarte? */}
      <section className="relative py-24 overflow-hidden bg-black">
        {/* Fondo con el degradado de la comparsa */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-black -z-10" />

        {/* Elementos decorativos de fondo (luces sutiles) */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-leaf-mid rounded-full blur-[120px]" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            {/* Badge decorativo */}
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary border border-leaf-light/20 text-leaf-light font-bold text-xs uppercase tracking-[0.3em] mb-8 animate-fade-in">
              Viví la experiencia Acusi
            </div>

            <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none italic uppercase">
              ¿Querés <br />
              <span className="text-leaf-light not-italic">SUMARTE?</span>
            </h2>

            <p className="text-white/80 text-xl md:text-2xl mb-12 leading-relaxed font-medium max-w-xl mx-auto">
              Para saltar en el carnaval, conseguir tu indumentaria oficial o pedir info,
              estamos a un toque de distancia. <strong>¡Te esperamos!</strong>
            </p>

            {/* Botón de WhatsApp estilizado */}
            <Button
              variant="whatsapp"
              size="xl"
              className="rounded-full text-xl px-12 py-8 shadow-2xl shadow-leaf-mid/20 hover:scale-105 transition-all duration-300 animate-pulse-glow"
              asChild
            >
              <a
                href={getWhatsAppUrl("¡Hola! Quiero sumarme a la comparsa Los Acusi.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-8 h-8 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                ESCRIBIR POR WHATSAPP
              </a>
            </Button>

            {/* Frase final decorativa */}
            <p className="mt-12 text-leaf-light/40 font-black italic text-2xl md:text-3xl tracking-tighter opacity-50">
              #LosAcusi2026
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
