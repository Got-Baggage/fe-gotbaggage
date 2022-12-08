import React from 'react'
import Nav from '../Nav/Nav';
import Questions from '../Questions/Question';
import { useState, useEffect } from 'react';
import { mockData } from '../../questionsData'
import { ADD_TRIP_MUTATION } from '../../queries'
import { useMutation } from '@apollo/client'
import { graphql } from 'graphql';

function Form({ addUserTrip }) {
  const [responses, setResponses] = useState([]);

useEffect(() => {
  if (responses.length === 3) {
    submitForm();
  }
}, [responses]);

  // const readyData = () => {
  //   return {
  //     id: Date.now(),
  //     tripName: responses[0],
  //     traveler: responses[1],
  //     category: responses[2]
  //   }
  // }

  const createTrip = useMutation(ADD_TRIP_MUTATION, {
    variables: {
      name: responses[0],
      traveler: responses[1],
      category: responses[2]
    }
  });

  



  const submitForm = () => {
    createTrip()
    //addUserTrip()
  }

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

export default graphql(createTrip)(Form);


