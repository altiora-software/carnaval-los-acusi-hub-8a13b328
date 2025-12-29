import { Link } from "react-router-dom";
import { Instagram, MapPin, MessageCircle, Heart } from "lucide-react";

const WHATSAPP_NUMBER = "5493884123456";
const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export function Footer() {
  return (
    <footer className="bg-white border-t border-leaf-light/20 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Columna 1: Identidad */}
          <div className="md:col-span-2 space-y-6">
            
            <h3 className="text-4xl font-black text-secondary tracking-tighter uppercase italic">
              LOS <span className="text-leaf-mid">ACUSI</span>
            </h3>
            <p className="text-muted-foreground text-lg font-medium max-w-sm leading-relaxed">
              Desde el corazón de <strong className="text-secondary">Humahuaca</strong>, manteniendo viva la llama del carnaval, la música y el respeto por nuestra tierra.
            </p>
            <div className="flex gap-4">
              {/* Botones de redes sociales con estilo */}
              <a href="#" className="w-10 h-10 bg-leaf-mid/10 text-leaf-mid rounded-full flex items-center justify-center hover:bg-leaf-mid hover:text-white transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href={WHATSAPP_BASE_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-leaf-mid/10 text-leaf-mid rounded-full flex items-center justify-center hover:bg-leaf-mid hover:text-white transition-all duration-300">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Columna 2: Navegación rápida */}
          <div>
            <h4 className="font-bold text-secondary uppercase tracking-widest text-sm mb-6">Navegación</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-leaf-mid font-bold transition-colors">Inicio</Link>
              </li>
              <li>
                <Link to="/productos" className="text-muted-foreground hover:text-leaf-mid font-bold transition-colors">Productos</Link>
              </li>
              <li>
                <Link to="/galeria" className="text-muted-foreground hover:text-leaf-mid font-bold transition-colors">Galería</Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Dónde encontrarnos */}
          <div className="space-y-6">
            <h4 className="font-bold text-secondary uppercase tracking-widest text-sm mb-6">Ubicación</h4>
            <div className="flex items-start gap-3 group">
              <MapPin className="text-leaf-mid shrink-0 group-hover:animate-bounce" />
              <p className="text-muted-foreground font-medium">
                Plaza Central de Humahuaca,<br />
                Jujuy, Argentina.
              </p>
            </div>
          </div>
        </div>

        {/* Barra Inferior Final */}
        <div className="pt-8 border-t border-leaf-light/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground/60 text-sm font-medium">
            © {new Date().getFullYear()} Comparsa Los Acusi. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-1.5 text-muted-foreground/60 text-sm font-medium">
            Hecho con <Heart size={14} className="fill-leaf-mid text-leaf-mid animate-pulse" /> en la Quebrada
          </div>
        </div>
      </div>
    </footer>
  );
}