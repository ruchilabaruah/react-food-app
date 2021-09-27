import React, { useReducer } from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (item) => {},
});

const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + (action.item.price * action.item.quantity);
    return {items: updatedItems, totalAmount: updatedTotalAmount};
  } else if (action.type === 'REMOVE_ITEM') {

  }
}

export const CartContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
  const addItemToCartHandler = (item) => {
    console.log('Adding item');
    dispatchCartAction({type: 'ADD_ITEM', item: item});
  };

  const removeItemFromCartHandler = (item) => {
    dispatchCartAction({type: '', item: item});
  };

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: cartContext.addItem,
        removeItem: cartContext.removeItem,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
