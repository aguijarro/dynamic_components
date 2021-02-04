import React from "react";
import "./WrongAnswers.css";

const WrongAnswers = ({
  index,
  wrongAnswer,
  removeWrongAnswer,
  updateWrongAnswer,
}) => {
  const wrongAnswerId = `wrongAnswer-${index}`;
  const feedbackAnswerId = `feedbackAnswer-${index}`;

  return (
    <div className="WrongAnswers">
      <div className="WrongAnswers-answer">
        <label htmlFor={wrongAnswerId}>{`WrongAnswer #${index + 1}`}</label>
        <input
          type="text"
          value={wrongAnswer.answer}
          data-idx={index}
          name={wrongAnswerId}
          id={wrongAnswerId}
          onChange={(e) => updateWrongAnswer(e, index)}
        />
      </div>
      <div className="WrongAnswers-feedback">
        <label htmlFor={feedbackAnswerId}>
          {`FeedbackAnswer #${index + 1}`}{" "}
        </label>
        <input
          type="text"
          name={feedbackAnswerId}
          value={wrongAnswer.feedbackAnswer}
          data-idx={index}
          id={feedbackAnswerId}
          onChange={(e) => updateWrongAnswer(e, index)}
        />
      </div>
      <div className="WrongAnswers-action">
        <button onClick={(e) => removeWrongAnswer(e, index)}>Remove</button>
      </div>
    </div>
  );
};

export default WrongAnswers;
