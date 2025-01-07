import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QA from "./routs/q-a";
import Quiz from "./routs/quiz";
import QuizHtml from "./routs/quiz/quiz-Html";
import QuizJs from "./routs/quiz/quiz-Js";
import QuizReact from "./routs/quiz/quiz-React";
import QuizCSS from "./routs/quiz/quiz-css";
import AgeCal from "./routs/ageCal";
import { useEffect, useState } from "react";
import Temp from "./routs/temp";
import ToDo from "./routs/todo";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <QA />,
    },
    {
      path: "/quiz",
      element: <Quiz />,
    },
    {
      path: "/quiz/html",
      element: <QuizHtml />,
    },
    {
      path: "/quiz/css",
      element: <QuizCSS />,
    },
    {
      path: "/quiz/js",
      element: <QuizJs />,
    },
    {
      path: "/quiz/react",
      element: <QuizReact />,
    },
    {
      path: "/age-cal",
      element: <AgeCal />,
    },
    {
      path: "/todo",
      element: <ToDo />,
    },
    {
      path: "/temp",
      element: <Temp />,
    },
  ]);

 
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
