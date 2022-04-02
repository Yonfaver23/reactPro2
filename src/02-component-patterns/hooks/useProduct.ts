import { useEffect, useRef, useState } from "react";
import { onChangueArgs, Product } from "../interfaces/productCardInterface";

interface useProductArgs {
  product: Product;
  onChange?: (arg: onChangueArgs) => void;
  value?: number;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
}: useProductArgs) => {
  const [counter, setCounter] = useState(value);

  const isControlled = useRef(!!onChange);

  const incrementBy = (value: number) => {
    if (isControlled.current) {
      return onChange!({ count: value, product });
    }
    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };
  useEffect(() => {
    setCounter(value);
  }, [value]);

  return {
    counter,
    incrementBy,
  };
};
