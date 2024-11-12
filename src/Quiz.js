import React from 'react';

function Quiz({ question, onAnswerClick, questionNumber, totalQuestions }) {
  return (
    <div className="quiz">
      <h1>Quiz App</h1> 
      <h2>Question {questionNumber}/{totalQuestions}</h2>
      <p >{question.questionText}</p>
      <div className="options">
        {question.options.map((option, index) => (
          <button key={index} onClick={() => onAnswerClick(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Quiz;
