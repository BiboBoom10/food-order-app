import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  
  if(action.type === 'ADD_ITEM'){
    const updatedItems = state.items.concat(state.item);
    const updatedTotalAmount = state.totalAmount + state.item.price * state.item.amount;

    return{
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }

  return defaultCartState;
};

function CartProvider(props) {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = item => {
      dispatchCartAction({type: 'ADD_ITEM', item:item});
    };

    const removeItemFromCartHandler = id => {
      dispatchCartAction({type: 'REMOVE_ITEM', id:id})
    };

    const CartContextHelper = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,

        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

  return (
    <CartContext.Provider value={CartContextHelper}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider;