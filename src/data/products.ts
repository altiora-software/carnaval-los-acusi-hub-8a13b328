// 1. Importamos las imágenes (Vite les asignará una URL real al compilar)
import productRemeraImg from "@/assets/product-remera.jpg";
import productVasoImg from "@/assets/product-vaso.jpg";
import productChuloImg from "@/assets/product-chulo.jpg";
import productPilusoImg from "@/assets/product-piluso.jpg";

export interface Product {
  id: number; // Cambiado a number para que coincida con tus IDs
  name: string;
  price: number;
  image: string;
  description?: string;
  sizes?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Remera Oficial Los Acusi",
    price: 15000,
    image: productRemeraImg, // USAMOS LA VARIABLE, SIN COMILLAS
    description: "¡Una pinturita! Tela fresca para bailar bajo el sol de la Quebrada. El verde de la comparsa en tu piel.",
    sizes: "Talles del S al XXL"
  },
  {
    id: 2,
    name: "Gorra Carnavalera",
    price: 8000,
    image: productPilusoImg, // USAMOS LA VARIABLE
    description: "Para que el sol no te achique. Con bordado de alta calidad para aguantar toda la gira.",
    sizes: "Ajustable - Único talle"
  },
  {
    id: 3,
    name: "Vaso Térmico Acusi",
    price: 12000,
    image: productVasoImg, // USAMOS LA VARIABLE
    description: "Mantené tu bebida bien fresca mientras bajás por las calles de Humahuaca. Irrompible.",
    sizes: "Capacidad: 500ml"
  },
  {
    id: 4,
    name: "Chulo de la Comparsa",
    price: 5000,
    image: productChuloImg, // USAMOS LA VARIABLE
    description: "El toque final para tu disfraz. Tela suave, colores vivos que no destiñen con la harina.",
    sizes: "Talle único"
  }
];

export const WHATSAPP_NUMBER = "5493884123456";

export const getWhatsAppUrl = (message: string) => 
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;