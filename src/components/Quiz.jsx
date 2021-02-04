import React, { useState } from "react";
import WrongAnswers from "./WrongAnswers";
import "./Quiz.css";

const Quiz = () => {
  const blankWrongAnswer = { wrongAnswer: "", feedbackAnswer: "" };

  const [wrongAnswers, setWrongAnswers] = useState([{ ...blankWrongAnswer }]);

  const AddWrongAnswer = () => {
    const newWrongAnswers = [...wrongAnswers];
    setWrongAnswers([...newWrongAnswers, { ...blankWrongAnswer }]);
  };

  const RemoveWrongAnswer = (e, index) => {
    const newRemoveWrongAnswers = wrongAnswers.filter((item, idx) => {
      return idx !== index;
    });

    const updateWrongAnswer = [...newRemoveWrongAnswers];
    console.log(updateWrongAnswer);
    setWrongAnswers((wrongAnswers) => updateWrongAnswer);
    console.log(updateWrongAnswer);
  };

  const UpdateWrongAnswer = (e, index) => {
    let colName = e.currentTarget.name.substring(
      0,
      e.currentTarget.name.indexOf("-")
    );
    const updateWrongAnswer = [...wrongAnswers];
    updateWrongAnswer[index][colName] = e.currentTarget.value;
    setWrongAnswers(updateWrongAnswer);
  };

  return (
    <div className="Quiz">
      <h1>Quizzes</h1>
      {/** TODO: Question */}
      {/** TODO: Write Answer*/}
      {/** TODO: Wrong Answers*/}
      <div className="QuizWrongAnswers">
        <div className="QuizWrongAnswersButton">
          <button onClick={AddWrongAnswer}>Add Wrong Answer</button>
        </div>
        {wrongAnswers.map((wrongAnswer, index) => {
          return (
            <WrongAnswers
              index={index}
              wrongAnswer={wrongAnswer}
              key={index}
              removeWrongAnswer={RemoveWrongAnswer}
              updateWrongAnswer={UpdateWrongAnswer}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Quiz;
