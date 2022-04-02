import { useState } from "react";
import { Product, productInCard } from "../interfaces/productCardInterface";
import { products } from "../../data/product";

export const useShoppingCard = () => {
  const [countCard, setcountCard] = useState<{ [key: string]: productInCard }>(
    {}
  );

  const onProductChangue = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setcountCard((oldCountCard) => {
      const productInCard: productInCard = oldCountCard[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCard.count + count, 0) > 0) {
        productInCard.count += count;
        return {
          ...oldCountCard,
          [product.id]: productInCard,
        };
      }

      const { [product.id]: toDelete, ...res } = oldCountCard;
      return res;
    });
  };

  return {
    products,
    countCard,
    onProductChangue,
  };
};
