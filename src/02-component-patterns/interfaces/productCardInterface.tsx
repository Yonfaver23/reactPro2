import { ReactElement } from "react";

export interface Product {
  id: string;
  title: string;
  img?: string;
}
export interface ProductContextProps {
  counter: number;
  incrementBy: (value: number) => void;
  product: Product;
}
