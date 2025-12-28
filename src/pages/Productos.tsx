import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Section } from "@/components/Section";
import { products } from "@/data/products";

const Productos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-display text-foreground mb-4">
              Productos de la comparsa Los Acusi
            </h1>
            <p className="text-muted-foreground text-lg">
              Apoyá a la comparsa adquiriendo alguno de nuestros productos.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <Section className="bg-background pt-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
              />
            ))}
          </div>

          <p className="text-center text-muted-foreground text-sm mt-12">
            La disponibilidad de productos puede variar.
          </p>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Productos;
