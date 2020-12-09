import React from "react";
import "./styles.css";
import { useState } from "react";

var quizDB = [
  {
    question: `The first song ever sung in the space was "Happy Birthday." `,
    isAnswer: true
  },
  {
    question: "The first product with a bar code was chewing gum.",
    isAnswer: true
  },
  {
    question: "Mars is the largest planet in the solar system.",
    isAnswer: false
  },
  {
    question: "There are more than 24 time zones in the world.",
    isAnswer: true
  },
  {
    question:
      "Black is the most commonly used colour in all national flags around the world.",
    isAnswer: false
  }
];

export default function App() {
  var [score, setScore] = useState(0);
  var [done, setDone] = useState([]);

  function checkAnswer(answer, qIdx) {
    if (quizDB[qIdx].isAnswer === answer) {
      setScore(score + 1);
    }
    done.push(qIdx);
    setDone(done.concat(qIdx));
  }

  console.log(done);

  return (
    <div>
      <nav className="navigation">
        <h1>Fun facts</h1>
        <small>Find out if you know these random Fun Facts.</small>
      </nav>

      <div className="App">
        {quizDB.map((quizDb, idx) => {
          return (
            <div key={idx}>
              <p>{quizDB[idx].question}</p>
              <button
                className="btn"
                disabled={done.includes(idx)}
                onClick={() => checkAnswer(true, idx)}
              >
                Yes
              </button>
              <button
                className="btn"
                disabled={done.includes(idx)}
                onClick={() => checkAnswer(false, idx)}
              >
                No
              </button>
              <hr />
            </div>
          );
        })}
      </div>

      <footer className="footer">
        <h2>
          {getScoreText()}: {score}
        </h2>
      </footer>
    </div>
  );

  function getScoreText() {
    if (done.length !== quizDB.length) {
      return "Current score: ";
    } else {
      return "Final score: ";
    }
  }
}
