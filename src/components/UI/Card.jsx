import styled from "styled-components";

function Card(props) {
  return <Cards>{props.children}</Cards>;
}

const Cards = styled.div`
  background-color: #272d2f;
  margin: 0.5rem;
  list-style: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 0.1rem 0.1rem 0.2rem gray;
`;

export default Card;
