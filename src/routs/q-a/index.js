import React, { useState } from "react";
import "./q-a.scss";
import { FaAngleDown } from "react-icons/fa";
export default function QA() {
  const DD = ({ que, answer }) => {
    const [ansOpen, setansOpen] = useState(false);
    const handleOnQue = () => {
      setansOpen((pre) => !pre);
    };
    return (
      <div className="qa-item">
        <div onClick={handleOnQue} className="qa-question">
          <h3>
            {que}
            <span>
              <FaAngleDown className={`down-icon ${ansOpen?'rotate-0':null} `} />
            </span>
          </h3>
        </div>
        {ansOpen && (
          <div className={`qa-answer `}>
            <p>{answer}</p>
          </div>
        )}
      </div>
    );
  };
  return (
    <div>
      <div className="qa-parent">
        <div className="container">
          <div className="qa">
            <div className="qa-title">
              <h2>Frequently Asked Questions</h2>
              <p>Here’s a list of frequently asked questions</p>
            </div>
            <div className="qa-flex">
              <DD
                que={"What is JavaScript?"}
                answer={
                  "JavaScript is a high-level, interpreted programming language primarily used to make web pages interactive. It is a core technology alongside HTML and CSS."
                }
              />
              <DD
                que={"What is the difference between let, var, and const?"}
                answer={
                  <ul>
                    <li>
                      var: Function-scoped, can be redeclared and updated.
                    </li>
                    <li>
                      let: Block-scoped, cannot be redeclared but can be
                      updated.
                    </li>
                    <li>
                      const: Block-scoped, cannot be redeclared or updated{" "}
                      {"(for primitive values)"}.
                    </li>
                  </ul>
                }
              />
              <DD
                que={" What is the difference between == and ===?"}
                answer={
                  <ul>
                    <li>== Compares values after type coercion.</li>
                    <li>
                      === Compares values without type coercion (strict
                      equality).
                    </li>
                  </ul>
                }
              />
              <DD
                que={"What is the difference between null and undefined?"}
                answer={
                  <ul>
                    <li>null: An intentional absence of value.</li>
                    <li>
                      undefined: A variable that has been declared but not
                      assigned a value.
                    </li>
                  </ul>
                }
              />
              <DD
                que={"What are JavaScript data types?"}
                answer={
                  <ul>
                    <li>
                      Primitive: String, Number, Boolean, Null, Undefined,
                      Symbol, BigInt.
                    </li>
                    <li>
                      Non-Primitive: Object (includes arrays, functions, etc.).
                    </li>
                  </ul>
                }
              />
              <DD
                que={"What is the this keyword?"}
                answer={
                  <div>
                    <p>What is the this keyword?</p>
                    <ul>
                      <li>
                        In global context: Refers to the global object (window
                        in browsers).
                      </li>
                      <li>
                        In a method: Refers to the object owning the method.
                      </li>
                      <li>In strict mode: Can be undefined in functions. </li>
                    </ul>
                  </div>
                }
              />
              <DD
                que={
                  "What is the difference between synchronous and asynchronous code?"
                }
                answer={
                  <ul>
                    <li>
                      Synchronous: Executes line by line, blocking further
                      execution until the current task is complete.
                    </li>
                    <li>
                      Asynchronous: Allows execution to continue without waiting
                      for the previous task to complete (e.g., setTimeout,
                      fetch).
                    </li>
                  </ul>
                }
              />
              <DD que={"What is destructuring in JavaScript?"}
              answer={<div>
                <p>Destructuring allows you to unpack values from arrays or properties from objects into variables.<br/>
                Example:</p>
                <ul>
                    <li>{"const [a, b] = [1, 2];"}</li>
                    <li>{"const { x, y } = { x: 10, y: 20 };  "}</li>
                </ul>
              </div>} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
