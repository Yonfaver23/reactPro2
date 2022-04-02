import { ProductCard } from "../components/ProductCard";
import {
  ProductButton,
  ProductImage,
  ProductTitle,
} from "../../02-component-patterns/components";

import "../styles/StylesProductCard.css";
import { useShoppingCard } from "../hooks/useShoppinCard";

export const ShoppinPages = () => {
  const { countCard, products, onProductChangue } = useShoppingCard();

  return (
    <div>
      <h1>ShoppinPages store</h1>

      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((producto) => (
          <ProductCard
            product={producto}
            key={producto.id}
            className="bg-dark"
            onChange={onProductChangue}
            value={countCard[producto.id]?.count || 0}
          >
            <ProductImage className="custom-img" style={{}} />
            <ProductTitle className="text-white" style={{}} />
            <ProductButton className="custom-button" style={{}} />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-card">
        {Object.entries(countCard).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className="bg-dark"
            style={{ width: "100px" }}
            onChange={onProductChangue}
            value={product.count}
          >
            <ProductImage className="custom-img" style={{}} />
            <ProductButton className="custom-button" style={{}} />
          </ProductCard>
        ))}
      </div>
      <div className="div">
        <code>{JSON.stringify(countCard, null, 5)}</code>
      </div>
    </div>
  );
};
