import React from 'react'
import { gql, useQuery } from "@apollo/client";

const GET_ESSENTIALS = gql`
{
    essentialItems{
      name
    }
    itemsByCategory(category: 3)
    {
        name
      }
}
`;
const GET_CATEGORIES = gql`
  query {
    categoryNames
  }
`;
const ADD_TRIP_MUTATION = gql`
  mutation tripCreate(input: {$name: String!, $category: Integer!, $traveler: String!}) {
    addBook(name: $name, category: $category,traveler : $traveler) {
      name
      id
      category 
      traveler
    }
  }
`;

// const TRIP_CREATE = gql `{
//     tripCreate(input: {name: "Baggage Trip", category: 3, traveler: "Stephen"})
//     {
//       trip: {
//         name
//         category
//         traveler
//         image
//       }
//     }
//   }
//   `;

//   export const newTrip = () => {
//     const { data, error, loading } = useQuery(TRIP_CREATE);
  
//     return { data, error, loading };
//   }

  export const GetEssentials = () => {
    const { data, error, loading } = useQuery(GET_ESSENTIALS);
  
    return { data, error, loading };
  }
  export const GetCategories = () => {
    const { data, error, loading } = useQuery(GET_CATEGORIES);
    return { data, error, loading };
  };

  export const AddTripMutation = () => {
    const { data, error, loading } = useQuery(ADD_TRIP_MUTATION);
    return { data, error, loading };
  };