🎨 Comparsa Los Acusi - Landing Page
Esta es una aplicación web moderna, rápida y optimizada para la Comparsa Los Acusi de Humahuaca, Jujuy. El objetivo es mostrar la tradición, la galería de fotos del carnaval y facilitar la venta de indumentaria oficial a través de WhatsApp.

🚀 Tecnologías utilizadas
React + Vite: Para una experiencia de usuario ultra rápida.

Tailwind CSS: Estilizado moderno y responsivo con animaciones personalizadas.

Lucide React: Iconografía elegante y minimalista.

Shadcn/UI: Componentes de interfaz de alta calidad.

Framer Motion / Tailwind Animate: Para transiciones suaves y efectos de carnaval.

🛠️ Estructura del Proyecto
Para modificar el contenido, solo necesitas tocar archivos específicos:

/src/data/products.ts: Contiene todos los productos de la tienda (nombres, precios, fotos).

/src/data/gallery.ts: Aquí se gestionan las fotos de la galería.

/src/components/: Aquí residen las piezas visuales como la Navbar, el Hero y el Footer.

/src/assets/: Carpeta para guardar las fotos y el logo oficial.

🎭 Cómo adaptarlo para OTRA comparsa
Si querés usar esta base para otra agrupación, seguí estos 3 pasos:

1. Cambiar la Identidad Visual (Colores)
Andá al archivo tailwind.config.ts y modificá las variables dentro de leaf. Si tu comparsa es roja y amarilla, cambiá los valores HSL:

TypeScript

// tailwind.config.ts
leaf: {
  light: "hsl(var(--tu-color-claro))",
  mid: "hsl(var(--tu-color-principal))",
  dark: "hsl(var(--tu-color-oscuro))",
},
2. Actualizar el Número de WhatsApp
Es vital para recibir los pedidos. Buscá en src/data/products.ts:

TypeScript

export const WHATSAPP_NUMBER = "5493884XXXXXX"; // Tu número con código de país
3. Reemplazar Imágenes y Logo
Subí tu logo en formato .svg o .png a la carpeta public/ o src/assets/.

En Navbar.tsx y Footer.tsx, actualizá la ruta de la imagen: <img src="/tu-nuevo-logo.svg" alt="Logo" />

📈 Funcionalidades Clave
Navbar Inteligente: Se esconde al bajar para dar más espacio y aparece al subir.

Hero Animado: Título con gradiente de colores que fluye automáticamente.

Tienda Integrada: Botones de consulta que abren WhatsApp con un mensaje automático personalizado con el nombre del producto.

Galería Masonry: Estilo tipo Pinterest que organiza las fotos de forma artística.

💻 Instalación y Desarrollo
Clonar el repositorio:

Bash

git clone https://github.com/tu-usuario/nombre-del-repo.git
Instalar dependencias:

Bash

npm install
Correr en modo desarrollo:

Bash

npm run dev
Compilar para producción:

Bash

npm run build
📜 Licencia
Desarrollado con ❤️ para la cultura de la Quebrada. ¡Que viva el Carnaval!
