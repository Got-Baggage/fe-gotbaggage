import React from 'react'
import Nav from '../Nav/Nav';
import Questions from '../Questions/Question';
import {useState} from 'react';

function Form() {
  const [responses, setResponses] = useState([])

  const submitAnswer = (response) => {
    setResponses([...responses, response]) 
  }

  const removeAnswer = (index) => {
    let responsesCopy = responses
    responsesCopy.splice(index, 1)
  }

  return (
    <div className="form-view">
      <Nav />
      <div className='question-container'>
          <Questions submitAnswer={submitAnswer} removeAnswer={removeAnswer} responses={responses} /> 
      </div>
    </div>
  );
}

export default Form
