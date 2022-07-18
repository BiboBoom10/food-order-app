import React from 'react';
import styled from 'styled-components';
import Meal1 from '../../assets/Header-Meal.jpg';
import { GrCart } from 'react-icons/gr';
import { MdOutlineFastfood } from 'react-icons/md';

function Header(props) {
  return (
    <HeaderContent> 

        <Heading>
            <h3><MdOutlineFastfood /> Boom Spicy</h3>
            <Button>
                <GrCart />
                <span> Cart</span>
                <Number>5</Number>
            </Button>
        </Heading>
    
        <div>
            <img src={Meal1} alt="" />
        </div>
    </HeaderContent>
  )
}

const HeaderContent = styled.div`
    width: 100%;
    text-align: center;
    background-color: black;
    color: white;

    img {
        width: 100%;
    }
`;

const Button = styled.button`
    padding: 0.5rem 0.5rem;
    background-color: #fe724c;
    border: none;
    color: #d7d7d7;
    font-size: 0.8rem;
    border-radius: 0.5rem;

    svg {
        color: #d7d7d7;
    }

    &:hover{
        background-color: #ffc529;
        color: black;
    }
`;

const Number = styled.span`
    background: #d7d7d7;
    color: black;
    margin: 0.5rem;
    padding: 0.2rem 0.4rem;
    border-radius: 0.2rem;
`;

const Heading = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
    margin: 0 1rem;
`;

export default Header;