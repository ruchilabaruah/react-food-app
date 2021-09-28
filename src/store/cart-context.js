import React, { useReducer } from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (item) => {},
});

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.quantity;
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[existingItemIndex];

    let updatedItems;
    if (existingItem) {
      let updatedItem;
      updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + action.item.quantity,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  } else if (action.type === "REMOVE_ITEM") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingItemIndex];
    const updatedTotalAmount =
      state.totalAmount - existingItem.price * 1;

    let updatedItems;
    if (existingItem) {
      let updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      if (updatedItem < 1) {
        return {
          items: state.items.filter((item) => item.id !== action.id),
          totalAmount: updatedTotalAmount,
        };
      } else {
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
        return { items: updatedItems, totalAmount: updatedTotalAmount };
      }
    }
  }
};

export const CartContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    console.log("Adding item");
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id: id });
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
