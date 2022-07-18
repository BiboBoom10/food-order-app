import React from 'react';
import styled from 'styled-components';
import MealItemForm from './MealItemForm';

function MealItem(props) {

    const price = `$${props.price.toFixed(2)}`;

  return (
    <div>
        <li>
            <List>
                <h4>{props.name}</h4>
                <div>{props.description}</div>
                <Price>{price}</Price>
            </List>

            <div>
                <MealItemForm />
                <hr></hr>
            </div>
        </li>
    </div>
  )
}

const List = styled.div`
    margin: 0.5rem 0;
`;

const Price = styled.div`
    color: #fe724c
`;

export default MealItem;