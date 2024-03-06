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

export function cartReducer(state: CartItem[] = [], action: Action) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE: {
      return produce(state, (draft) => {
        if (action.payload?.coffee) {
          const itemAlreadyAdded = draft.find(
            (item) => item.id === action.payload?.coffee?.id,
          );
          if (itemAlreadyAdded) {
            itemAlreadyAdded.quantity += action.payload?.coffee?.quantity;
          } else {
            draft.push(action.payload?.coffee);
          }
          toast.success('Produto adicionado ao carrinho com sucesso!');
        }
      });
    }

    case ActionTypes.INCREASE_QUANTITY: {
      return produce(state, (draft) => {
        const itemToIncrement = draft.find(
          (cartItems) => cartItems.id === action.payload?.id,
        );

        if (itemToIncrement?.id) {
          itemToIncrement.quantity += 1;
        }
      });
    }

    case ActionTypes.DECREASE_QUANTITY: {
      return produce(state, (draft) => {
        const itemToDecrement = draft.find(
          (cartItems) => cartItems.id === action.payload?.id,
        );

        if (itemToDecrement?.id && itemToDecrement.quantity > 1) {
          itemToDecrement.quantity -= 1;
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
