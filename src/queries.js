// import React from 'react'
import { gql, useQuery, useMutation } from '@apollo/client';

const GET_ESSENTIALS = gql`
  query {
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
//   mutation TripCreate($name: String!, $category: String!, $traveler: String!) {
//     trip(name: $name, category: $category, traveler: $traveler) {
//       name
//       category
//       image
//     }
//   }
// `;
const ADD_TRIP_MUTATION = gql`
  mutation TripCreate($name: String!, $category: String!, $traveler: String!) {
    tripCreate(
      input: { name: $name, category: $category, traveler: $traveler }
    ) {
      trip {
        name
        category
        image
      }
    }
  }
`;
// const ADD_TRIP_MUTATION = gql`
//   mutation {
//     tripCreate(input: { name: "Baggage Trip", category: "beach", traveler:"hazel" }) {
//       trip {
//         name
//         category
//         image
//       }
//     }
//   }
// `;

const DELETE_TRIP = gql`
  mutation TripDelete($input: id) {
    trip(input: $input) {
      id
    }
  }
`;

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

export { DELETE_TRIP };

export { ADD_TRIP_MUTATION };
