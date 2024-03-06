import { ReactNode, createContext, useEffect, useReducer } from 'react';
import { Coffee } from '../pages/Home/components/CoffeeList';
import {
  addCoffe,
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeCoffe,
} from '../reducers/action';
import { cartReducer } from '../reducers/reducer';

export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextProps {
  cartItems: CartItem[];
  cartQuantity: number;
  cartItemsTotal: number;
  addCoffeeToCart: (coffee: CartItem) => void;
  increaseCartItemQuantity: (cartItemId: string) => void;
  decreaseCartItemQuantity: (cartItemId: string) => void;
  removeCartItem: (cartItemId: string) => void;
  clearCartItems: () => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextProps);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    { cartItems: [] },
    (cartState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return cartState;
    },
  );

  const cartQuantity = cartState.length;

  const cartItemsTotal = cartState.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity;
  }, 0);

  function addCoffeeToCart(coffee: CartItem) {
    dispatch(addCoffe(coffee));
  }

  function increaseCartItemQuantity(cartItemId: string) {
    dispatch(increaseQuantity(cartItemId));
  }

  function decreaseCartItemQuantity(cartItemId: string) {
    dispatch(decreaseQuantity(cartItemId));
  }

  function removeCartItem(cartItemId: string) {
    dispatch(removeCoffe(cartItemId));
  }

  function clearCartItems() {
    dispatch(clearCart());
  }

  useEffect(() => {
    if (cartState) {
      const stateJSON = JSON.stringify(cartState);

      localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON);
    }
  }, [cartState]);

  return (
    <CartContext.Provider
      value={{
        cartItems: cartState,
        cartQuantity,
        cartItemsTotal,
        addCoffeeToCart,
        removeCartItem,
        decreaseCartItemQuantity,
        increaseCartItemQuantity,
        clearCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
