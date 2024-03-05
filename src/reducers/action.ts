import { CartItem } from '../contexts/CartContext';

export enum ActionTypes {
  ADD_COFFEE = 'ADD_COFFEE',
  INCREASE_QUANTITY = 'INCREASE_QUANTITY',
  DECREASE_QUANTITY = 'DECREASE_QUANTITY',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  CLEAR_CART = 'CLEAR_CART',
}

export function addCoffe(coffee: CartItem) {
  return {
    type: ActionTypes.ADD_COFFEE,
    payload: { coffee },
  };
}

export function increaseQuantity(id: string) {
  return {
    type: ActionTypes.INCREASE_QUANTITY,
    payload: { id },
  };
}

export function decreaseQuantity(id: string) {
  return {
    type: ActionTypes.DECREASE_QUANTITY,
    payload: { id },
  };
}

export function removeCoffe(id: string) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: { id },
  };
}

export function clearCart() {
  return {
    type: ActionTypes.CLEAR_CART,
  };
}
