import React from 'react'
import Nav from '../Nav/Nav';
import Questions from '../Questions/Question';

function Form() {
  return (
    <div>
      <Nav />
      <div className='question-container'>
          <Questions /> 
      </div>
    </div>
  );
}

export default Form
