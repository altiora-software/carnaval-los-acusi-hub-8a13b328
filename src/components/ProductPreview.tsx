// src/components/home/ProductPreview.tsx
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

export const ProductPreview = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    // Duplicamos los productos para que siempre haya contenido
    const displayProducts = [...products, ...products, ...products];

    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current) {
                const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;

                // Si llegamos al final, volvemos al inicio sin que se note (gracias a los duplicados)
                if (scrollLeft + clientWidth >= scrollWidth - 10) {
                    scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
                } else {
                    scrollRef.current.scrollBy({ left: 280, behavior: "smooth" });
                }
            }
        }, 3000); // Se mueve cada 3 segundos

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-24 bg-background overflow-hidden">
            <div className="container mx-auto px-4">

                {/* Encabezado con Estilo */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-2 text-leaf-mid font-bold uppercase tracking-widest text-sm mb-3">
                            <ShoppingBag className="w-5 h-5" />
                            Store Oficial
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-secondary tracking-tighter">
                            LLEVÁ EL <span className="text-leaf-mid">CARNAVAL</span> <br />
                            CON VOS
                        </h2>
                    </div>

                    <Button variant="outline" size="lg" className="hidden md:flex rounded-full border-leaf-light hover:bg-leaf-light/10 text-leaf-dark hover:text-secondary" asChild>
                        <Link to="/productos">
                            Ver tienda completa <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </Button>
                </div>

                {/* Carrusel de Productos */}
                <div className="relative">
                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {displayProducts.map((product, index) => (
                            <div
                                key={`${product.id}-${index}`}
                                className="flex-shrink-0 w-[280px] snap-center transform hover:-translate-y-2 transition-transform duration-300"
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

                    {/* Sombras laterales para dar profundidad al carrusel */}
                    <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
                    <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
                </div>

                {/* Botón Mobile (visible solo en celulares) */}
                <div className="text-center mt-10 md:hidden">
                    <Button variant="outline" size="xl" className="w-full rounded-full border-leaf-mid text-leaf-mid" asChild>
                        <Link to="/productos">
                            Ver todos los productos <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};