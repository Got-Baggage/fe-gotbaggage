import React from 'react';
import Nav from '../Nav/Nav';
import Questions from '../Questions/Question';
import { useState, useEffect } from 'react';
// import { mockData } from '../../questionsData';
import { ADD_TRIP_MUTATION } from '../../queries';
import { useMutation, useQuery, gql } from '@apollo/client';
// import { graphql } from 'graphql';

function Form({ addUserTrip }) {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    if (responses.length === 3) {
      submitForm();
    }
  }, [responses]);

  const [tripCreate] = useMutation(ADD_TRIP_MUTATION, 
  );
  

  const readyData = () => {
    tripCreate({
      variables: {
        name: responses[0],
        category: responses[2],
        traveler: responses[1],
      },
    });
  };

  // const readyData = () => {
  //   return {
  //     variables: {
  //     name: responses[0],
  //     traveler: responses[1],
  //     category: responses[2]
  //       // name: 'Hunter',
  //       // traveler: 'hunter',
  //       // category: 'beach'
  //     }
  //   }
  // }

  // const [createTrip] = useMutation(ADD_TRIP_MUTATION, {
  //   variables: {
  //     name: responses[0],
  //     traveler: responses[1],
  //     category: responses[2]
  //   }
  // });

  const submitForm = () => {
    readyData();
    console.log(responses);
    // tripCreate()
    addUserTrip();
  };

  const submitAnswer = (response) => {
    setResponses([...responses, response]);
  };

  const removeAnswer = (index) => {
    let responsesCopy = responses;
    responsesCopy.splice(index, 1);
  };
  return (
    <div className="form-view">
      <Nav />
      <div className="question-container">
        <Questions
          submitAnswer={submitAnswer}
          removeAnswer={removeAnswer}
          responses={responses}
          submitForm={submitForm}
        />
      </div>
    </div>
  );
}

// export default graphql(createTrip)(Form)

export default Form;
