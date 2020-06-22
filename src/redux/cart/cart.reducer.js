import { CartActionsTypes } from "./cart-actions.types";
import { addPizzaToCart ,removePizzaFromCart} from "./cart.util";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionsTypes.TOGGLR_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case CartActionsTypes.ADD_ITEM:     
      return {
        ...state,
        cartItems: addPizzaToCart(state.cartItems, action.payload),
      };

    case CartActionsTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removePizzaFromCart(state.cartItems, action.payload),
      };
    case CartActionsTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((c) => c.id !== action.payload.id),
      };

    default:
      return state;
  }
};
export default cartReducer;
