import React, { useState } from 'react';

const questions = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ]
  },
  {
    question: "Which is the smallest continent in the world?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Arctic", correct: false },
      { text: "Africa", correct: false },
    ]
  },
  {
    question: "Which is the largest desert in the world?",
    answers: [
      { text: "Kalahari", correct: false },
      { text: "Gobi", correct: false },
      { text: "Sahara", correct: false },
      { text: "Antarctica", correct: true },
    ]
  },
  {
    question: "Which is the smallest country in the world?",
    answers: [
      { text: "India", correct: false },
      { text: "Vatican City", correct: true },
      { text: "Pakistan", correct: false },
      { text: "China", correct: false },
    ]
  }
];

function QuizApp() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setSelectedAnswer(isCorrect);
  };

  const handleNextQuestion = () => {
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
      setSelectedAnswer(null);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
  };

  return (
    <div className="App">
      <h1>Simple Quiz</h1>
      <div className="Quiz">
        {showScore ? (
          <div>
            <h2>You scored {score} out of {questions.length}!</h2>
            <button id="next-btn" onClick={handleRestartQuiz}>
              Play Again
            </button>
          </div>
        ) : (
          <div>
            <h2>{`${currentQuestionIndex + 1}. ${questions[currentQuestionIndex].question}`}</h2>
            <div id="answer-buttons">
              {questions[currentQuestionIndex].answers.map((answer, index) => (
                <button
                  key={index}
                  className={`btn ${selectedAnswer !== null ? answer.correct ? 'correct' : 'incorrect' : ''}`}
                  onClick={() => handleAnswerClick(answer.correct)}
                  disabled={selectedAnswer !== null}
                >
                  {answer.text}
                </button>
              ))}
            </div>
            <button
              id="next-btn"
              onClick={handleNextQuestion}
              style={{ display: selectedAnswer !== null ? 'block' : 'none' }}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizApp;

// .App-header {
//   background-color: #282c34;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   font-size: calc(10px + 2vmin);
//   color: white;
// }

// .App-link {
//   color: #61dafb;
// }

// @keyframes App-logo-spin {
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// }

// * {
//   margin: 0;
//   padding: 0;
//   font-family: 'Poppins', sans-serif;
//   box-sizing: border-box;
// }

// body {
//   background: #001e4d;
// }

// .App {
//   background: #fff;
//   width: 90%;
//   max-width: 600px;
//   margin: 100px auto 0;
//   border-radius: 10px;
//   padding: 30px;
// }

// .App h1 {
//   font-size: 25px;
//   color: #001e4d;
//   font-weight: 600;
//   border-bottom: 1px solid #333;
//   padding-bottom: 10px;
// }

// .Quiz {
//   padding: 20px 0;
// }

// .Quiz h2 {
//   font-size: 18px;
//   color: #001e4d;
//   font-weight: 600;
// }

// .btn {
//   background: #fff;
//   color: #222;
//   font-weight: 500;
//   width: 100%;
//   border: 1px solid #222;
//   padding: 10px;
//   margin: 10px 0;
//   text-align: left;
//   border-radius: 4px;
//   cursor: pointer;
//   transition: all 0.3s;
// }

// .btn:hover:not([disabled]) {
//   background: #222;
//   color: #fff;
// }

// .btn:disabled {
//   cursor: not-allowed;
// }

// #next-btn {
//   background: #001e4d;
//   color: #fff;
//   font-weight: 500;
//   width: 150px;
//   border: 0;
//   padding: 10px;
//   margin: 20px auto 0;
//   border-radius: 4px;
//   cursor: pointer;
//   display: none;
// }

// .correct {
//   background: #9aeabc;
// }

// .incorrect {
//   background: #ff9393;
// }




