import React, { useState } from 'react';
import Quiz from './Quiz';
import Result from './Result';

function App() {
  const questions = [
    {
      questionText: 'What is the capital of France?',
      options: ['Berlin', 'Madrid', 'Paris', 'Lisbon'],
      answer: 'Paris'
    },
    {
      questionText: 'Who is the CEO of Tesla?',
      options: ['Jeff Bezos', 'Elon Musk', 'Bill Gates', 'Tony Stark'],
      answer: 'Elon Musk'
    },
    {
      questionText: 'The iPhone was created by which company?',
      options: ['Apple', 'Intel', 'Amazon', 'Microsoft'],
      answer: 'Apple'
    },
    {
      questionText: 'How many Harry Potter books are there?',
      options: ['5', '6', '7', '8'],
      answer: '7'
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerOptionClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="App">
       {showResult ? (
        <Result score={score} total={questions.length} />
      ) : (
        <Quiz
          question={questions[currentQuestion]}
          onAnswerClick={handleAnswerOptionClick}
          questionNumber={currentQuestion + 1}
          totalQuestions={questions.length}
        />
      )}
    </div>
  );
}

export default App;