import React from 'react';
import Card from '../UI/Card';
import styled from 'styled-components';
import MealItem from './MealItem';

const DummyMeals = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'finest fish and vegetables',
        price: 25.0
    },
    {
        id: 'm2',
        name: 'Burger',
        description: 'American Meaty',
        price: 15.0
    },
    {
        id: 'm3',
        name: 'Schnitzel',
        description: 'German special',
        price: 20.0
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy & Green',
        price: 10.0
    }
];

function AvailableMeals() {

  return (
    <div>
        <Card>
            <List>
                {DummyMeals.map((meal) => (
                    <MealItem key={meal.id} name={meal.name} description = {meal.description} price = {meal.price}/>
                ))}
            </List>
        </Card>
    </div>
  )
}

const List = styled.ul`
    color: #d7d7d7;
    list-style: none;
    margin-left: 0.2rem;
`;


export default AvailableMeals;