import React from 'react';
import styled from 'styled-components';
import Input from '../UI/Input';

function MealItemForm(props) {

    const SubmitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <MyForm onSubmit={SubmitHandler}>
        <Input label="Amount" input={{
            id: 'amount',
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
        }} />
        <Button>+ Add</Button>
    </MyForm>
  )
}

const MyForm = styled.form`
    display: flex;
    justify-content: flex-end;
`;

const Button = styled.button`
    padding: 0.25rem 0.5rem;
    background-color: #fe724c;
    border: none;
    color: #d7d7d7;
    font-size: 0.8rem;
    border-radius: 0.3rem;

    svg {
        color: #d7d7d7;
    }

    &:hover{
        background-color: #ffc529;
        color: black;
    }
`;


export default MealItemForm;