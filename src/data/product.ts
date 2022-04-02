import { Product } from "../02-component-patterns/interfaces/productCardInterface";
const product = {
  id: "1",
  title: "coffe mug - card",
  img: "./coffee-mug.png",
};

const product2 = {
  id: "2",
  title: "coffemug - Mug",
  img: "./coffee-mug2.png",
};

export const products: Product[] = [product, product2];
