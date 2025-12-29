import { Button } from "@/components/ui/button";
import { ShoppingCart, Ruler } from "lucide-react";

interface ProductCardProps {
  image: string;
  name: string;
  price: number; // Mantenemos number
  description?: string; 
  sizes?: string;
  whatsappMessage?: string;
}

const WHATSAPP_NUMBER = "5493884123456";

export function ProductCard({ 
  image, 
  name, 
  price, 
  description, 
  sizes, 
  whatsappMessage 
}: ProductCardProps) {
  
  // Formateamos el mensaje de WhatsApp
  const message = whatsappMessage || `¡Hola! Me interesa la ${name} de la comparsa. ¿Tienen stock?`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <div className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-leaf-light/10 flex flex-col h-full">
      
      {/* Contenedor de Imagen con Precio Flotante */}
      <div className="relative aspect-square overflow-hidden bg-[#f9f9f9]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Etiqueta de precio: Aquí usamos .toLocaleString() para evitar errores y dar formato */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-md">
          <span className="text-secondary font-black text-lg">
            ${price.toLocaleString('es-AR')}
          </span>
        </div>
      </div>

      {/* Cuerpo de la tarjeta */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-extrabold text-secondary mb-2 leading-tight group-hover:text-leaf-mid transition-colors">
          {name}
        </h3>
        
        {/* Descripción chura */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
          {description || "Calidad de primera para vivir el carnaval con toda la alegría."}
        </p>

        {/* Talles con icono de regla */}
        <div className="flex items-center gap-2 text-leaf-mid bg-leaf-light/10 px-3 py-1.5 rounded-lg w-fit mb-6">
          <Ruler className="w-4 h-4" />
          <span className="text-xs font-bold uppercase tracking-wider">
            {sizes || "Talles disponibles"}
          </span>
        </div>

        {/* Botón final */}
        <Button 
          variant="whatsapp"
          className="w-full mt-auto rounded-full py-6 font-bold gap-2 shadow-lg hover:scale-[1.02] transition-transform"
          asChild
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <ShoppingCart className="w-5 h-5" />
            Lo quiero comprar
          </a>
        </Button>
      </div>
    </div>
  );
}