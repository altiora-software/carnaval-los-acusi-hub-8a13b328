// src/components/home/About.tsx
import { Users, Music, Heart } from "lucide-react";

export const About = () => {
  return (
    <section className="py-24 bg-background overflow-hidden relative">
      {/* Elementos decorativos "volando" (papel picado/serpentina sutil) */}
      <div className="absolute top-10 left-[10%] w-4 h-4 bg-leaf-mid rounded-full animate-bounce opacity-20" />
      <div className="absolute bottom-20 right-[5%] w-6 h-6 border-2 border-accent rounded-sm rotate-45 animate-pulse opacity-20" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* LADO IZQUIERDO: Títulos locos */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <div className="inline-block px-4 py-1 rounded-full bg-leaf-light/20 text-leaf-dark font-bold text-sm uppercase tracking-widest animate-fade-in">
              Nuestra Esencia
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-secondary leading-none">
              MÁS QUE UNA <br />
              <span className="text-leaf-mid inline-block hover:rotate-2 transition-transform cursor-default">COMPARSA,</span> <br />
              <span className="relative">
                UNA FAMILIA
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                </svg>
              </span>
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              En el corazón de <strong>Humahuaca</strong>, nacimos para celebrar la vida. No somos solo música y baile; somos el abrazo de los vecinos, el respeto por la tierra y la alegría que se hereda de generación en generación.
            </p>
          </div>

          {/* LADO DERECHO: Tarjetas asimétricas "bailando" */}
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            
            {/* Tarjeta 1 */}
            <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-leaf-dark/5 border border-leaf-light/10 transform md:-rotate-2 hover:rotate-0 transition-transform duration-500 group">
              <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Music className="text-secondary w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-2">Pulsos de la Tierra</h3>
              <p className="text-muted-foreground">El retumbar de los parches que despierta al cerro.</p>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-primary p-8 rounded-[2rem] shadow-xl text-white transform md:translate-y-12 md:rotate-3 hover:rotate-0 transition-transform duration-500 group">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Unión de Barrio</h3>
              <p className="text-white">Aquí todos son bienvenidos. La calle es nuestra pista.</p>
            </div>

            {/* Tarjeta 3 (Oculta en mobile o abajo) */}
            <div className="md:col-span-2 bg-secondary p-8 rounded-[3rem] shadow-2xl text-white flex flex-col md:flex-row items-center gap-6 mt-6 md:mt-16 transform hover:scale-[1.02] transition-transform">
              <div className="text-4xl">🌵</div>
              <div>
                <h3 className="text-white text-2xl font-bold mb-1  ">Tradición Viva</h3>
                <p className="text-white/70 italic">"Humahuaca nos vio nacer, y el carnaval nos hace renacer cada año."</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};