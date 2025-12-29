import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { galleryImages } from "@/data/gallery";
import { X, Camera, Sparkles } from "lucide-react";

const Galeria = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header Estilo Carnaval */}
      <header className="pt-32 pb-16 bg-[#fdfaf5] border-b border-leaf-light/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-leaf-mid rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-white text-xs font-bold uppercase tracking-widest mb-6">
            <Camera className="w-3 h-3 text-leaf-light" />
            Nuestros Momentos
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-secondary tracking-tighter leading-none mb-6">
            EL ALMA DEL <br />
            <span className="text-leaf-mid">CARNAVAL</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Capturas reales de la alegría, el baile y la tradición que compartimos 
            cada año en las calles de <span className="text-secondary font-bold">Humahuaca</span>.
          </p>
        </div>
      </header>

      {/* Gallery Grid con estilo asimétrico */}
      <main className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((img, index) => (
              <div
                key={img.id}
                className={`group relative break-inside-avoid rounded-[2rem] overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 opacity-0 animate-fade-in`}
                style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
                onClick={() => setSelectedImage(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay con texto al hacer hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                   <div className="flex items-center gap-2 text-white">
                     <Sparkles className="w-5 h-5 text-leaf-light" />
                     <span className="font-bold tracking-tight">{img.alt}</span>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox Mejorado */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-secondary/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-8 right-8 text-white hover:text-leaf-light transition-colors p-2 bg-white/10 rounded-full"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          
          <img
            src={selectedImage}
            alt="Foto del carnaval ampliada"
            className="max-w-full max-h-[85vh] object-contain rounded-3xl shadow-2xl animate-in zoom-in-95 duration-300 border-4 border-white/20"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Galeria;