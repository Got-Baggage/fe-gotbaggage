import React from 'react'
import { useState } from 'react'
// import Nav from '../Nav/Nav'
import { questionsData } from '../../questionsData'

function Question({ submitAnswer, removeAnswer, responses }) {
  let [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  let [currentResponse, setCurrentResponse] = useState("")

  const goBack = (e) => {
    e.preventDefault()
    let questionIndexCopy = currentQuestionIndex
    questionIndexCopy--
    setCurrentQuestionIndex(questionIndexCopy)
    changeAnswer()
  }

  const changeAnswer = () => {
    removeAnswer(currentQuestionIndex - 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    clearInputs()
    if(currentQuestionIndex === 2) {
      //eventually go to post function
      submitAnswer(currentResponse)
    } else {
      submitAnswer(currentResponse)
      let questionIndexCopy = currentQuestionIndex
      questionIndexCopy++
      setCurrentQuestionIndex(questionIndexCopy)
    }
  }
  const clearInputs = () => {
    setCurrentResponse("")
  }
  const checkIndex = () => {
    if(!currentQuestionIndex) {
      return true
    }
  }

  const replaceQuestion = () => {
    if(currentQuestionIndex === 2) {
      return (
        <div className='question-container'>
          <h2>{questionsData[currentQuestionIndex]}</h2>
          <select className="dropdown" onChange={(e) => { setCurrentResponse(e.target.value) }}>
            <option value="">Choose one!</option>
          </select>
          <button className='back-button' onClick={(e) => { goBack(e) }}> Back </button>
          <button className='submit-button' onClick={(e) => { handleSubmit(e) }}> Submit </button>
        </div>
      )
    } else {
      return (
      <div className='question-container'>
        <h2>{questionsData[currentQuestionIndex]}</h2>
        <input type="text" value={currentResponse} onChange={(e) => { setCurrentResponse(e.target.value) }}></input>
        <button className='back-button' disabled={checkIndex()} onClick={(e) => { goBack(e) }}> Back </button>
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
