import React, { useState } from "react";
import "./quiz-base.scss";
import { useNavigate } from "react-router-dom";
export default function QuizBase({ title, icon, data }) {
  const navigate = useNavigate();
  const [score, setscore] = useState(0);
  const [showScore, setshowScore] = useState(false);
  const [count, setcount] = useState(0);
  const [selectedOption, setselectedOption] = useState("");
  const [selectedAnswer, setselectedAnswer] = useState("");
  let question = data[count].question;
  let options = data[count].options;
  let answer = data[count].answer;

  const handleOptionClick = (option, ans) => {
    setselectedOption(option);
    setselectedAnswer(ans);
  };
  console.log("****", selectedAnswer);
  const handleOnSubmit = () => {
    if (count <= data.length - 2) {
      if (answer == selectedAnswer) {
        setscore((pre) => pre + 1);
      }
      setcount((pre) => pre + 1);
    }
    if (count == data.length - 1) {
      if (answer == selectedAnswer) {
        setscore((pre) => pre + 1);
      }
      setshowScore(true);
    }
    setselectedOption(false);
  };
  return (
    <div className="quizBase">
      <div className="container h-full">
        <div className="quizBase-title">
          <img src={icon} />
          <h2>{title}</h2>
        </div>
        <div className="quizBase-grid">
          <div className="quizBase-question">
            <p>
              Question {count + 1} of {data.length}
            </p>
            <h2>{question}</h2>
          </div>
          <div className="quizBase-tabs">
            <div
              onClick={() => handleOptionClick("Option A", options[0])}
              className={`quizBase-tab ${
                selectedOption === "Option A" ? "selected" : ""
              } `}
            >
              <div className="quizBase-tab-option">A</div>
              <div className="quizBase-tab-text">
                <h3>{options[0]}</h3>
              </div>
            </div>
            <div
              onClick={() => handleOptionClick("Option B", options[1])}
              className={`quizBase-tab ${
                selectedOption === "Option B" ? "selected" : ""
              } `}
            >
              <div className="quizBase-tab-option">B</div>
              <div className="quizBase-tab-text">
                <h3>{options[1]}</h3>
              </div>
            </div>
            <div
              onClick={() => handleOptionClick("Option C", options[2])}
              className={`quizBase-tab ${
                selectedOption === "Option C" ? "selected" : ""
              } `}
            >
              <div className="quizBase-tab-option">C</div>
              <div className="quizBase-tab-text">
                <h3>{options[2]}</h3>
              </div>
            </div>
            <div
              onClick={() => handleOptionClick("Option D", options[3])}
              className={`quizBase-tab ${
                selectedOption === "Option D" ? "selected" : ""
              } `}
            >
              <div className="quizBase-tab-option">D</div>
              <div className="quizBase-tab-text">
                <h3>{options[3]}</h3>
              </div>
            </div>
            <button onClick={handleOnSubmit}>Submit</button>
          </div>
        </div>
        {showScore && (
          <div className="scoreboard-bg">
            <div className="scoreboard">
              <h3>Your Score!</h3>
              <p>{score}</p>
              <button
                onClick={() => {
                  navigate("/quiz");
                }}
              >
                Home
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
