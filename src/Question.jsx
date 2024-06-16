import React from 'react';


function Question({ question, handleAnswerOptionClick }) {
  const Options = [
    ...question.incorrect_answers,
    question.correct_answer
  ];

  return (
    <div className="question-section">
      <div className="question-text">{question.question}</div>
      <div className="answer-section">
        {Options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerOptionClick(option === question.correct_answer)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
