import { produce } from 'immer';
import { ReactNode, createContext, useState } from 'react';
import { toast } from 'sonner';
import { Coffee } from '../pages/Home/components/CoffeeList';

export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextProps {
  cartItems: CartItem[];
  cartQuantity: number;
  addCoffeeToCart: (coffee: CartItem) => void;
  changeCartItemQuantity: (
    cartItemId: string,
    type: 'increase' | 'decrease',
  ) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextProps);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const cartQuantity = cartItems.length;

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (cartItems) => cartItems.id === coffee.id,
    );

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee);
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity;
      }
    });
    setCartItems(newCart);

    toast.success('Produto adicionado ao carrinho com sucesso!');
  }

  function changeCartItemQuantity(
    cartItemId: string,
    type: 'increase' | 'decrease',
  ) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      );

      if (coffeeExistsInCart >= 0) {
        const item = draft[coffeeExistsInCart];
        draft[coffeeExistsInCart].quantity =
          type === 'increase' ? item.quantity + 1 : item.quantity - 1;
      }
    });

    setCartItems(newCart);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        addCoffeeToCart,
        changeCartItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
