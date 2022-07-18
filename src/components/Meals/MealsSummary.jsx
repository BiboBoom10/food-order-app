import React from 'react';
import styled from 'styled-components';

function MealsSummary() {
  return (
    <Description>
        <h4>Delicious Foods</h4>
        <p>Choose your favorite meal from our available selection</p>
    
    </Description>
  )
}

const Description = styled.div`
  margin-left: 1rem;
`;

export default MealsSummary;