import productRemeraImg from "@/assets/product-remera.jpg";
import productVasoImg from "@/assets/product-vaso.jpg";
import productChuloImg from "@/assets/product-chulo.jpg";
import productPilusoImg from "@/assets/product-piluso.jpg";

export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

export const products: Product[] = [
  {
    id: "remera",
    name: "Remera oficial Los Acusi",
    price: "$18.000",
    image: productRemeraImg,
  },
  {
    id: "vaso",
    name: "Vaso carnavalero",
    price: "$6.000",
    image: productVasoImg,
  },
  {
    id: "chulo",
    name: "Chulo",
    price: "$8.000",
    image: productChuloImg,
  },
  {
    id: "piluso",
    name: "Piluso",
    price: "$10.000",
    image: productPilusoImg,
  },
];

export const WHATSAPP_NUMBER = "5493884123456";
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const getWhatsAppUrl = (message: string) => 
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
