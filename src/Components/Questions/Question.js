import React from 'react'
// import Nav from '../Nav/Nav'
import { questionsData } from '../../questionsData'
function Question() {
  const questionFlow = questionsData.map(question => question)
  return (
    <div className='question-container'>
      <h2>{questionFlow[0]}</h2>
      <input ></input>
      <button className='submit-button'> Submit </button>
    </div>
  )
}

export default Question
