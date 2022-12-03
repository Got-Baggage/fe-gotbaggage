import React from 'react'
import { useState } from 'react'
// import Nav from '../Nav/Nav'
import { questionsData } from '../../questionsData'

function Question({ submitAnswer }) {
  let [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  let [currentResponse, setCurrentResponse] = useState("")

  // const handleClick = (e) => {
  //   e.preventDefault()
  //   submitAnswer()
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    clearInputs()
    if(currentQuestionIndex === 2) {
      //eventually go to post function
    } else {
      let questionIndexCopy = currentQuestionIndex
      questionIndexCopy++
      setCurrentQuestionIndex(questionIndexCopy)
    }
  }
  const clearInputs = () => {
    setCurrentResponse("")
  }

  const replaceQuestion = () => {
    if(currentQuestionIndex === 2) {
      return (
        <div className='question-container'>
          <h2>{questionsData[currentQuestionIndex]}</h2>
          <select className="dropdown" onChange={(e) => { setCurrentResponse(e.target.value) }}>
            <option value="">Choose one!</option>
          </select>
          <button className='submit-button' onClick={(e) => { handleSubmit(e) }}> Submit </button>
        </div>
      )
    } else {
      return (
      <div className='question-container'>
        <h2>{questionsData[currentQuestionIndex]}</h2>
        <input type="text" value={currentResponse} onChange={(e) => { setCurrentResponse(e.target.value) }}></input>
        <button className='submit-button' onClick={(e) => { handleSubmit(e) }}> Next </button>
    </div>
      )
    }
  }

  return (
    <form>{ replaceQuestion() }</form>
  )
}

export default Question
