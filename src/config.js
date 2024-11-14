import * as url from "url";
import dotenv from "dotenv";

dotenv.config(); // Cargar variables de entorno

console.log("MONGODB_URI en config.js:", process.env.MONGODB_URI); // Para depuración

const config = {
  PORT: process.env.PORT || 8080,
  DIRNAME: url.fileURLToPath(new URL(".", import.meta.url)),
  get UPLOADS_DIR() {
    return `${this.DIRNAME}/public/uploads`;
  },
  MONGODB_URI: process.env.MONGODB_URI, // Asegúrate de que esto esté correcto
  CART_COLLECTION: 'carts',
  PRODUCTS_COLLECTION: 'products'
};

export default config;
