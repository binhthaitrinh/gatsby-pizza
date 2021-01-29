import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import ToppingFilter from '../components/ToppingsFilter';
import PizzaList from '../components/PizzaList';

export default function ToppingPage({ data, pageContext: { topping } }) {
  console.log(data);
  const pizzas = data.pizzas.nodes;
  return (
    <>
      <ToppingFilter active={topping} />
      <PizzaList pizzas={pizzas} />
    </>
  );
}

export const query = graphql`
  query($topping: String!) {
    pizzas: allSanityPizza(
      filter: { toppings: { elemMatch: { name: { eq: $topping } } } }
    ) {
      nodes {
        name
        id
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
        slug {
          current
        }
        toppings {
          name
          id
          vegetarian
        }
      }
    }
  }
`;
