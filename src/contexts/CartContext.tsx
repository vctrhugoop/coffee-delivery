import { ReactNode, createContext, useState } from 'react';
import { Coffee } from '../pages/Home/components/CoffeeList';

export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextProps {
  cartItems: CartItem[];
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextProps);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  return (
    <CartContext.Provider value={{ cartItems }}>
      {children}
    </CartContext.Provider>
  );
}
