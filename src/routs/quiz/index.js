import React from "react";
import "./quiz.scss";
import HTMLIcon from "./quiz-assets/HTMLIcon.png";
import CSSIcon from "./quiz-assets/CSSIcon.png";
import JSIcon from "./quiz-assets/JSIcon.png";
import REACTIcon from "./quiz-assets/REACTSymbol.png";
import { useNavigate } from "react-router-dom";
export default function Quiz() {
  const navigate = useNavigate();
  return (
    <div className="quiz">
      <div className="container">
        <div className="quiz-grid">
          <div className="quiz-title">
            <h2>
              Welcome to the
              <br />
              <span> Frontend Quiz!</span>
            </h2>
            <p>Pick a subect to get started.</p>
          </div>
          <div className="quiz-tabs">
            <div
              onClick={() => {
                navigate("/quiz/html");
              }}
              className="quiz-tab"
            >
              <div className="quiz-tab-icon">
                <img className="img-full" src={HTMLIcon} />
              </div>
              <div className="quiz-tab-text">
                <h3>HTML</h3>
              </div>
            </div>
            <div
              onClick={() => {
                navigate("/quiz/css");
              }}
              className="quiz-tab"
            >
              <div className="quiz-tab-icon">
                <img className="img-full" src={CSSIcon} />
              </div>
              <div className="quiz-tab-text">
                <h3>CSS</h3>
              </div>
            </div>
            <div
              onClick={() => {
                navigate("/quiz/js");
              }}
              className="quiz-tab"
            >
              <div className="quiz-tab-icon">
                <img className="img-full" src={JSIcon} />
              </div>
              <div className="quiz-tab-text">
                <h3>JavaScript</h3>
              </div>
            </div>
            <div
              onClick={() => {
                navigate("/quiz/react");
              }}
              className="quiz-tab"
            >
              <div className="quiz-tab-icon">
                <img className="img-full" src={REACTIcon} />
              </div>
              <div className="quiz-tab-text">
                <h3>React</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
