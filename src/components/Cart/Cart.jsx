import React from 'react';
import Modal from '../UI/Modal';

function Cart(props) {

    const cartItems = [{id: "c1", name: "Sushi", amount: 2, price: 9.99}];

  return (
    <Modal>
        <ul>
            {cartItems.map((item) => <li key={item.id}>{item.name}</li>)}
        </ul>
        
        <div>
            <span>Total Amount</span>
            <span>35.00</span>
        </div>

        <div>
            <button>Close</button>
            <button>Order</button>
        </div>
    </Modal>
  )
}

export default Cart;