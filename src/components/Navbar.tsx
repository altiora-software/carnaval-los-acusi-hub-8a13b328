import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "5493884123456"; 
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/productos", label: "Productos" },
  { to: "/galeria", label: "Galería" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  // Lógica para esconder/mostrar la Navbar al scrollear
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        // Si el usuario scrollea hacia abajo, escondemos. Si sube, mostramos.
        if (window.scrollY > lastScrollY && window.scrollY > 100) { 
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        // Guardamos la posición actual para la próxima comparación
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-leaf-light/20 transition-transform duration-500 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 relative">
          
          {/* Logo - Lado Izquierdo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative">
              <img
                src="/g7.svg"
                alt="Logo Los Acusi"
                className="h-12 w-12 object-contain transition-transform group-hover:scale-110"
              />
            </div>
            <span className="font-sans text-xl font-extrabold tracking-tighter text-secondary">
              LOS ACUSI
            </span>
          </Link>

          {/* Desktop Nav - CENTRADO ABSOLUTO */}
          <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2 gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-bold uppercase tracking-widest transition-all relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full ${
                  location.pathname === link.to
                    ? "text-secondary after:w-full"
                    : "text-secondary/90 hover:text-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Botón Derecha */}
          <div className="hidden md:block shrink-0">
            <Button 
              variant="default" 
              size="lg" 
              className="bg-primary/70 hover:bg-leaf-mid text-secondary rounded-full px-8 shadow-md hover:shadow-leaf-mid/20 transition-all"
              asChild
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Contactar
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-secondary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-leaf-light/90 animate-fade-in ">
            <div className="flex flex-col gap-6 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`border-b border-leaf-light/90 text-lg font-bold ${
                    location.pathname === link.to ? "text-secondary" : "text-secondary/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button className="w-full bg-primary rounded-full text-secondary" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}