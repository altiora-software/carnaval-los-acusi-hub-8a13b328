import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ProductCard } from "@/components/ProductCard";
import { Section } from "@/components/Section";
import { InfiniteCarousel } from "@/components/InfiniteCarousel";
import { products, getWhatsAppUrl, WHATSAPP_BASE_URL } from "@/data/products";
import { galleryImages } from "@/data/gallery";
import { MapPin, Users, PartyPopper, ArrowRight } from "lucide-react";

import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const heroImages = [hero1, hero2, hero3];

const Index = () => {
  const invitationMessage = "Hola! Quiero sumarme al carnaval con Los Acusi. Me interesa la invitación.";
  const locationMessage = "Hola! Quiero consultar la ubicación y punto de encuentro para el carnaval.";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <HeroCarousel images={heroImages} />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 opacity-0 animate-fade-in">
              Comparsa Los Acusi
            </h1>
            <p className="font-display text-xl md:text-2xl text-primary-foreground/90 mb-6 opacity-0 animate-fade-in-delay-1">
              Carnaval de Humahuaca
            </p>
            <p className="text-base md:text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in-delay-2">
              Vivimos el carnaval desde Humahuaca, compartiendo música, baile y tradición junto a familias, amigos y vecinos del barrio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-delay-3">
              <Button variant="hero" size="lg" asChild>
                <a href={WHATSAPP_BASE_URL} target="_blank" rel="noopener noreferrer">
                  Contactarnos
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="#invitacion">
                  Invitación al carnaval
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary-foreground/70 rounded-full" />
          </div>
        </div>
      </section>

      {/* Quiénes Somos */}
      <Section className="bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display text-foreground mb-6">
              Quiénes Somos
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Somos la comparsa Los Acusi, nacida en Humahuaca y formada por gente del barrio que vive el carnaval con alegría, respeto y encuentro.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mt-4">
              Nos organizamos para compartir el carnaval jujeño de manera simple, sumar a quienes quieran acompañarnos y mantener viva la tradición año tras año.
            </p>
          </div>
        </div>
      </Section>

      {/* Dónde Estamos */}
      <Section className="bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display text-foreground mb-6">
              Dónde Estamos
            </h2>
            <p className="text-2xl font-semibold text-primary mb-4">
              📍 Humahuaca – Jujuy
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Nos reunimos y salimos desde nuestra zona durante los días de carnaval.
              Para conocer horarios y puntos de encuentro, podés escribirnos directamente por WhatsApp.
            </p>
            <Button variant="whatsapp" size="lg" asChild>
              <a href={getWhatsAppUrl(locationMessage)} target="_blank" rel="noopener noreferrer">
                Consultar ubicación
              </a>
            </Button>
          </div>
        </div>
      </Section>

      {/* Invitación al Carnaval */}
      <Section id="invitacion" className="bg-gradient-to-br from-primary via-carnival-red to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/20 rounded-full mb-6">
              <PartyPopper className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display text-primary-foreground mb-6">
              Sumate al carnaval con Los Acusi
            </h2>
            <p className="text-primary-foreground/90 text-lg leading-relaxed mb-8">
              Si querés participar del carnaval acompañando a nuestra comparsa, podés hacerlo a través de la invitación.
            </p>
            
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8">
              <h3 className="text-xl font-semibold text-primary-foreground mb-4">Incluye:</h3>
              <ul className="text-primary-foreground/90 space-y-2 mb-6">
                <li>✓ Participación con la comparsa</li>
                <li>✓ Tarjeta de almuerzo</li>
                <li>✓ Bebida</li>
                <li>✓ Acompañamiento durante la jornada</li>
              </ul>
              <p className="text-2xl md:text-3xl font-bold text-accent">
                Precio: $25.000
              </p>
            </div>

            <Button variant="hero" size="xl" asChild className="animate-pulse-glow">
              <a href={getWhatsAppUrl(invitationMessage)} target="_blank" rel="noopener noreferrer">
                Quiero sumarme al carnaval
              </a>
            </Button>
          </div>
        </div>
      </Section>

      {/* Productos Preview */}
      <Section className="bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">
              Productos de la comparsa
            </h2>
          </div>
          
          <div className="relative -mx-4 px-4">
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
              {products.map((product) => (
                <div key={product.id} className="flex-shrink-0 w-64 snap-start">
                  <ProductCard
                    image={product.image}
                    name={product.name}
                    price={product.price}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <Link to="/productos">
                Ver todos los productos
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

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
      <Section className="bg-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display text-background mb-6">
              ¿Querés sumarte?
            </h2>
            <p className="text-background/80 text-lg mb-8">
              Para sumarte al carnaval, consultar productos o pedir más información, escribinos por WhatsApp.
            </p>
            <Button variant="whatsapp" size="xl" asChild>
              <a href={WHATSAPP_BASE_URL} target="_blank" rel="noopener noreferrer">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Escribir por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Index;
