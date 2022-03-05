import { ProductCard } from "../components/ProductCard";
import {
  ProductButton,
  ProductImage,
  ProductTitle,
} from "../../02-component-patterns/components";
import "../styles/StylesProductCard.css";

const product = {
  id: "1",
  title: "coffe mug - card",
  img: "./coffee-mug.png",
};

export const ShoppinPages = () => {
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
        <ProductCard product={product} className="bg-dark">
          <ProductImage className="custom-img" style={{}} />
          <ProductTitle className="text-white" style={{}} />
          <ProductButton className="custom-button" style={{}} />
        </ProductCard>
        <ProductCard product={product} className="bg-dark">
          <ProductImage className="custom-img" style={{}} />
          <ProductTitle className="text-white" style={{}} />
          <ProductButton className="custom-button" style={{}} />
        </ProductCard>
        <ProductCard product={product} className="bg-dark">
          <ProductImage className="custom-img" style={{}} />
          <ProductTitle className="text-white" style={{}} />
          <ProductButton className="custom-button" style={{}} />
        </ProductCard>
        <ProductCard
          product={product}
          className="bg-dark"
          style={{
            backgroundColor: "pink",
          }}
        >
          <ProductImage className="custom-img" style={{}} />
          <ProductTitle className="text-white" style={{}} />
          <ProductButton
            className="custom-button"
            style={{ display: "flex", justifyContent: "flex-end" }}
          />
        </ProductCard>
      </div>
    </div>
  );
};
