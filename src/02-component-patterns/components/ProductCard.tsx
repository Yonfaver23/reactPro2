import styles from "../styles/styles.module.css";

import { useProduct } from "../hooks/useProduct";
import { createContext, ReactElement } from "react";
import {
  Product,
  ProductContextProps,
} from "../interfaces/productCardInterface";

export const ProductoContext = createContext({} as ProductContextProps);

export interface ProductCardProps {
  children?: ReactElement | ReactElement[];
  product: Product;
  className?: string;
  style?: React.CSSProperties;
}

const { Provider } = ProductoContext;

export const ProductCard = ({
  children,
  product,
  className,
  style,
}: ProductCardProps) => {
  const { incrementBy, counter } = useProduct();
  return (
    <Provider
      value={{
        counter,
        incrementBy,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
        {/* <ProductImage img={product.img} />
      <ProductTitle title={product.title} />
      <ProductButton counter={counter} incrementBy={incrementBy} /> */}
      </div>
    </Provider>
  );
};
