import { CartContext } from "@/contexts";
import { ICartItem } from "@/types/ICartItem";
import { useContext } from "react";

export const UseCart = () => {
  const { cart, setCart } = useContext(CartContext);

  const addItemToCart = (newCartItem: ICartItem) => {
    setCart((cart) => {
      const updatedCart = [...cart];
      updatedCart.push(newCartItem);
      return updatedCart;
    });
  };

  const removeItemFromCart = (index: number) => {
    setCart((cart) => {
      const updatedCart = [...cart];
      const currentItemQuantity = updatedCart[index].quantity!;
      const isLastOne = currentItemQuantity === 1;

      if (!isLastOne) {
        updatedCart[index].quantity = updatedCart[index].quantity! - 1;
        return updatedCart;
      }

      updatedCart.splice(index, 1);
      return updatedCart;
    });
  };

  const updatedItemFromCart = (index: number, updatedItem: ICartItem) => {
    setCart((cart) => {
      return cart.map((currentItem, currentIndex) => {
        const isATargetItem = index === currentIndex;
        return isATargetItem ? updatedItem : currentItem;
      });
    });
  };

  const totalOfItems = cart.reduce((total, currentItem) => {
    return total + currentItem.quantity!;
  }, 0);

  return {
    cart,
    addItemToCart,
    removeItemFromCart,
    updatedItemFromCart,
    totalOfItems,
  };
};
