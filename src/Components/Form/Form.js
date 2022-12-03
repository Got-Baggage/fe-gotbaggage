import React from 'react'
import Nav from '../Nav/Nav';
import Questions from '../Questions/Question';
import {useState} from 'react';

function Form({ addUserTrip }) {
  const [responses, setResponses] = useState([])

  const submitAnswer = (response) => {
    setResponses([...responses, response]) 
  }

  const readyData = () => {
    return {
      id: Date.now(),
      tripName: responses[0],
      userName: responses[1],
      category: responses[2]
      //change category when we get JSON data
    }
  }

  const submitForm = () => {
    let userData = readyData()
    addUserTrip(userData)
  }

  const removeAnswer = (index) => {
    let responsesCopy = responses
    responsesCopy.splice(index, 1)
  }

  return (
    <div className="form-view">
      <Nav />
      <div className='question-container'>
          <Questions submitAnswer={submitAnswer} removeAnswer={removeAnswer} responses={responses} submitForm={submitForm} /> 
      </div>
    </div>
  );
}

export default Form
