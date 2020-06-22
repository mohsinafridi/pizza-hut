export const addPizzaToCart = (cartItems, newObj) => {
  const existingCartItem = cartItems.find(
      cartItem => cartItem.id === newObj.id
    );
  
    if (existingCartItem) {
      return cartItems.map(cartItem =>
        cartItem.id === newObj.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
    return [...cartItems, { ...newObj, quantity: 1 }];
  };

  export const removePizzaFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToRemove.id
    );
  
    if (existingCartItem.quantity === 1) {
      return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }
  
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  };