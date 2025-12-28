import { Button } from "@/components/ui/button";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  whatsappMessage?: string;
}

const WHATSAPP_NUMBER = "5493884123456";

export function ProductCard({ image, name, price, whatsappMessage }: ProductCardProps) {
  const message = whatsappMessage || `Hola! Quiero consultar por el producto: ${name}`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-card-foreground mb-1">{name}</h3>
        <p className="text-primary font-bold text-lg mb-3">{price}</p>
        <Button variant="whatsapp" size="sm" className="w-full" asChild>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Consultar
          </a>
        </Button>
      </div>
    </div>
  );
}
