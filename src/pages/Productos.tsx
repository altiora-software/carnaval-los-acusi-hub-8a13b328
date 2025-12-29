// src/pages/Productos.tsx
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { ShoppingBag, Sparkles } from "lucide-react";

const Productos = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Header Estilo "Banner" */}
      <header className="pt-32 pb-16 bg-[#fdfaf5] border-b border-leaf-light/10 relative overflow-hidden">
        {/* Decoración abstracta de fondo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-leaf-mid/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-secondary text-white text-xs font-bold uppercase tracking-[0.2em] mb-4">
              <Sparkles className="w-3 h-3 text-accent" />
              Store Oficial
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-secondary tracking-tighter leading-none animate-scale-in">
              EQUIPATE PARA EL <br />
              <span className="text-leaf-mid">CARNAVAL</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto font-medium">
              Llevá los colores de <span className="text-secondary font-bold">Los Acusi</span> a todos lados.
              Cada compra ayuda a mantener viva nuestra comparsa.
            </p>
          </div>
        </div>
      </header>

      {/* Grid de Productos con fondo crema suave */}
      <main className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Contador de productos y filtro visual rápido */}
          <div className="flex items-center justify-between mb-10 border-b border-leaf-light/10 pb-6">
            <div className="flex items-center gap-2 font-bold text-secondary">
              <ShoppingBag className="w-5 h-5" />
              <span>{products.length} PRODUCTOS</span>
            </div>
            <div className="text-sm text-muted-foreground italic">
              Humahuaca, Jujuy
            </div>
          </div>

          {/* El Grid - Optimizado para Mobile (1 columna) y Desktop (4 columnas) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <ProductCard
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  description={product.description} // <--- AGREGAR ESTO
                  sizes={product.sizes} />
              </div>
            ))}
          </div>

          {/* Aviso final con estilo de tarjeta */}
          <div className="mt-24 p-8 rounded-[2rem] bg-secondary text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-leaf-light font-bold uppercase tracking-widest text-sm mb-2">Información Importante</p>
              <h3 className="text-xl md:text-2xl font-bold mb-4">¿Buscás algo personalizado?</h3>
              <p className="text-white/70 max-w-2xl mx-auto">
                La disponibilidad de talles y modelos puede variar según la temporada.
                Si no encontrás lo que buscás, escribinos para reservar tu prenda de la comparsa.
              </p>
            </div>
            {/* Decoración circular de fondo para la tarjeta */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Productos;