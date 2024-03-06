import { produce } from 'immer';
import { toast } from 'sonner';
import { CartItem } from '../contexts/CartContext';
import { ActionTypes } from './action';

interface PayloadTypes {
  id?: string;
  coffee?: CartItem;
}

interface Action {
  type: ActionTypes;
  payload?: PayloadTypes;
}

export function cartReducer(state: CartItem[], action: Action) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE: {
      return produce(state, (draft) => {
        if (!action.payload?.coffee) {
          return state;
        }

        const currentCoffee = state.findIndex(
          (item) => item.id === action.payload?.coffee?.id,
        );

        if (currentCoffee >= 0) {
          draft[currentCoffee].quantity += action.payload?.coffee?.quantity;
        } else {
          draft.push({ ...action.payload?.coffee });
        }
        toast.success('Produto adicionado ao carrinho com sucesso!');
      });
    }

    case ActionTypes.INCREASE_QUANTITY: {
      return produce(state, (draft) => {
        if (!action.payload?.id) {
          return state;
        }
        const itemToIncrement = state.findIndex(
          (item) => item.id === action.payload?.id,
        );

        if (itemToIncrement >= 0) {
          draft[itemToIncrement].quantity += 1;
        }
      });
    }

    case ActionTypes.DECREASE_QUANTITY: {
      return produce(state, (draft) => {
        if (!action.payload?.id) {
          return state;
        }
        const itemToDecrement = state.findIndex(
          (item) => item.id === action.payload?.id,
        );

        if (itemToDecrement <= 0) {
          draft[itemToDecrement].quantity -= 1;
        }
      });
    }

    case ActionTypes.REMOVE_COFFEE: {
      return produce(state, (draft) => {
        const itemToRemoveId = draft.findIndex(
          (item) => item.id === action.payload?.id,
        );
        draft.splice(itemToRemoveId, 1);
      });
    }

    case ActionTypes.CLEAR_CART: {
      return produce(state, (draft) => {
        draft.length = 0;
      });
    }

    default:
      return state;
  }
}
