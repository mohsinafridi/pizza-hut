import {  CartActionsTypes} from "./cart-actions.types";

export const toggleCartHidden = () => ({
type:CartActionsTypes.TOGGLR_CART_HIDDEN
});

export const addPizzaToCart = pizza =>({
    type:CartActionsTypes.ADD_ITEM,
    payload:pizza
});

export const removeItem = item => ({
    type:CartActionsTypes.REMOVE_ITEM,
    payload:item
});

export const clearItemFromCart  = item => ({
type:CartActionsTypes.CLEAR_ITEM_FROM_CART,
payload:item
});