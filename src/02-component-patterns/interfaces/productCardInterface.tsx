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

export interface productInCard extends Product {
  count: number;
}

export interface onChangueArgs {
  product: Product;
  count: number;
}
