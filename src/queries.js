// import React from 'react'
import { gql, useQuery } from '@apollo/client';

const GET_ESSENTIALS = gql`
  {
    essentialItems {
      name
    }
    itemsByCategory(category: 3) {
      name
    }
  }
`;
const GET_CATEGORIES = gql`
  query {
    categoryNames
  }
`;

// const ADD_TRIP_MUTATION = gql`
//   mutation tripCreate($name: String!, $category: String!, $traveler: String!) {
//     trip(name: $name, category: $category, traveler: $traveler) {
//       name
//       category
//       image
//     }
//   }
// `;

const GET_ALL_TRIPS = gql`
  query {
    allTrips {
      name
      category
      id
      traveler
      image
    }
  }
`;

const ADD_TRIP_MUTATION = gql`
  mutation {
    tripCreate(input: { name: "Baggage Trip", category: "beach", traveler:"hazel" }) {
      trip {
        name
        category
        image
      }
    }
  }
`;

// 'mutation tripCreate($name: String!, $category: String!)
// {
// \n  trip(name: $name, category: $category, traveler: $traveler)
//   { \n    name\n    category\n    traveler\n    __typename\n } \n
// } ';

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
};
export const GetCategories = () => {
  const { data, error, loading } = useQuery(GET_CATEGORIES);
  return { data, error, loading };
};
export const GetAllTrips = () => {
  const { data, error, loading } = useQuery(GET_ALL_TRIPS);
  return { data, error, loading };
};

export { ADD_TRIP_MUTATION };
