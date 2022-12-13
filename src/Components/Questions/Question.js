import React from 'react';
import { useState } from 'react';
import { questionsData } from '../../questionsData';
import { Link } from 'react-router-dom';
import { GetCategories } from '../../queries';

function Question({ submitAnswer, removeAnswer, responses, submitForm }) {
  let [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  let [currentResponse, setCurrentResponse] = useState('');
  let [confirmationMsg, setConfirmationMsg] = useState('');

  let {
    data,
    // error, loading
  } = GetCategories();

  // const removeEssentials = () => {
  //   return data.shift()
  // }
  // console.log(removeEssentials())

  const displayOptions = () => {
    console.log(data);
    if (data.loading) {
      return <option disabled> loading activity options</option>;
    } else {
      let categoryData = data.categoryNames.slice(1);
      return categoryData.map((activity) => {
        return (
          <option key={activity} value={activity}>
            {activity}
          </option>
        );
      });
    }
  };

  const goBack = (e) => {
    e.preventDefault();
    let questionIndexCopy = currentQuestionIndex;
    questionIndexCopy--;
    setCurrentQuestionIndex(questionIndexCopy);
    setCurrentResponse(responses[responses.length - 1]);
    changeAnswer();
  };

  const changeAnswer = () => {
    removeAnswer(currentQuestionIndex - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearInputs();
    if (currentQuestionIndex === 2) {
      submitAnswer(currentResponse);
      setConfirmationMsg('Your trip was submitted!');
    } else {
      submitAnswer(currentResponse);
      let questionIndexCopy = currentQuestionIndex;
      questionIndexCopy++;
      setCurrentQuestionIndex(questionIndexCopy);
    }
  };
  const clearInputs = () => {
    setCurrentResponse('');
  };
  const checkIndex = () => {
    if (!currentQuestionIndex) {
      return true;
    }
  };

  const checkInput = () => {
    if (!currentResponse || !currentResponse.trim().length) {
      return true;
    }
  };

  const renderQuestions = () => {
    if (currentQuestionIndex === 2) {
      return (
        <div className="question-container">
          <h2 className="question">{questionsData[currentQuestionIndex]}</h2>
          <select
            className="dropdown"
            onChange={(e) => {
              setCurrentResponse(e.target.value);
            }}>
            <option value="">Choose one!</option>
            {displayOptions()}
          </select>
          <div className="button-container">
            <button
              className="back-button"
              onClick={(e) => {
                goBack(e);
              }}>
              {' '}
              Back{' '}
            </button>
            <button
              className="submit-button"
              disabled={checkInput()}
              onClick={(e) => {
                handleSubmit(e);
              }}>
              {' '}
              Submit{' '}
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="question-container">
          <h2 className="question">{questionsData[currentQuestionIndex]}</h2>
          <input
            type="text"
            value={currentResponse}
            onChange={(e) => {
              setCurrentResponse(e.target.value);
            }}></input>
          <div className="button-container">
            <button
              className="back-button"
              disabled={checkIndex()}
              onClick={(e) => {
                goBack(e);
              }}>
              {' '}
              Back{' '}
            </button>
            <button
              className="submit-button"
              disabled={checkInput()}
              onClick={(e) => {
                handleSubmit(e);
              }}>
              {' '}
              Next{' '}
            </button>
          </div>
        </div>
      );
    }
  };

  const renderQuestionsOrConfirmationMsg = () => {
    if (!confirmationMsg) {
      return renderQuestions();
    } else {
      return (
        <div className="successful-submit-container">
          <h3>{confirmationMsg}</h3>
          <Link to="/tripcontainer">
            <button className="view-trips-button">View My Trips</button>
          </Link>
        </div>
      );
    }
  };

  return <form>{renderQuestionsOrConfirmationMsg()}</form>;
}

export default Question;
