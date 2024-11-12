import React from 'react';

function Result({ score, total }) {
  return (
    <div  className="result">
      <h2>Quiz Completed!</h2>
      <p>Your Score: {score} out of {total}</p>
      {score / total >= 0.7 ? (
        <p>Great job! ok</p>
      ) : (
        <p>Keep practicing! ok</p>
      )}
    </div>
  );
}

export default Result;
