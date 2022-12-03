import React from 'react'
import Nav from '../Nav/Nav';
import Questions from '../Questions/Question';
import {useState} from 'react';

function Form() {
  const [responses, setResponses] = useState([])

  const submitAnswer = (response) => {
    setResponses(...responses, response) 
  }

  return (
    <div className="form-view">
      <Nav />
      <div className='question-container'>
          <Questions submitAnswer={submitAnswer} /> 
      </div>
    </div>
  );
}

export default Form
