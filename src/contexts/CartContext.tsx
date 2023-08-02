import { ReactNode } from "react";
import { ICartItem } from "@/types/ICartItem";
import { createContext, useState, Dispatch, SetStateAction } from "react";

interface IDefaultValue {
  cart: ICartItem[];
  setCart: Dispatch<SetStateAction<ICartItem[]>>;
}
const defaultValue: IDefaultValue = {
  cart: [],
  setCart: () => {},
};
export const CartContext = createContext(defaultValue);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<ICartItem[]>([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
