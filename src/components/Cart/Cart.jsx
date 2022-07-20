import React from 'react';
import Modal from '../UI/Modal';
import styled from 'styled-components';

function Cart(props) {

    const cartItems = [{id: "c1", name: "Sushi", amount: 2, price: 9.99}];

  return (
    <Modal>
        <List>
            {cartItems.map((item) => <li key={item.id}>{item.name}</li>)}
            <hr></hr>
        </List>
        
        <Cost>
            <span>Total Amount</span>
            <span>35.00</span>
        </Cost>

        <OrderingButtons>
            <Button>Order</Button>
            <Button>Close</Button>
        </OrderingButtons>
    </Modal>
  )
}

const Cost = styled.div`
    display: flex;
    justify-content: space-between;
`;

const OrderingButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 0.5rem;
`;

const Button = styled.button`
    padding: 0.25rem 0.5rem;
    background-color: #fe724c;
    border: none;
    color: #d7d7d7;
    font-size: 0.8rem;
    border-radius: 0.3rem;
    margin-left: 0.5rem;

    &:hover{
        background-color: #ffc529;
        color: black;
    }
`;

const List = styled.ul`
    list-style: none;
    color: #fe724c;
    font-weight: 600;
    margin-bottom: 0.5rem;
`;


export default Cart;