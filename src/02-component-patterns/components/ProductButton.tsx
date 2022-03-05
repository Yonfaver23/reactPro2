import { ProductoContext } from "./ProductCard";
import styles from "../styles/styles.module.css";
import { useContext } from "react";

interface Props {
  className?: string;
  style?: React.CSSProperties;
}
export const ProductButton = ({ className, style }: Props) => {
  const { incrementBy, counter } = useContext(ProductoContext);
  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button
        className={`${styles.buttonMinus} ${className}`}
        onClick={() => incrementBy(-1)}
      >
        -
      </button>
      <div className={`${styles.countLabel} ${className}`}> {counter} </div>
      <button
        className={`${styles.buttonAdd} ${className}`}
        onClick={() => incrementBy(+1)}
      >
        +
      </button>
    </div>
  );
};
