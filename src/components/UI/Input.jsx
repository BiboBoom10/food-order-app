import React from 'react';
import styled from 'styled-components';

function Input(props) {
  return (
    <div>
        <MyLabel htmlFor={props.input.id} >{props.label}</MyLabel>
        <MyInput {...props.input} />
    </div>
  )
}

const MyInput = styled.input`
    width: 3rem;
    border: none;
    height: 1.5rem;
    border-radius: 0.2rem;
`;

const MyLabel = styled.label`
    font-size: 0.8rem;
    margin-right: 0.5rem;
`;

export default Input;