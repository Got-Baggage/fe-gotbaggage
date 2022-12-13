import React from "react";
import Nav from "../Nav/Nav";
import Questions from "../Questions/Question";
import { useState, useEffect } from "react";
import { ADD_TRIP_MUTATION } from "../../queries";
import { useMutation } from "@apollo/client";

function Form({ addUserTrip, refetch }) {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    if (responses.length === 3) {
      submitForm();
    }
    // eslint-disable-next-line
  }, [responses]);

  const [tripCreate] = useMutation(ADD_TRIP_MUTATION, {
    onCompleted: refetch,
  });

  const readyData = () => {
    tripCreate({
      variables: {
        name: responses[0],
        category: responses[2],
        traveler: responses[1],
      },
    });
  };

  const submitForm = () => {
    refetch();
    readyData();
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

export default Form;
