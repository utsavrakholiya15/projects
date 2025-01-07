import React from 'react'
import QuizBase from '../quiz-base'
import HTMLIcon from '../quiz-assets/HTMLIcon.png'
import { HTMLQuestions } from '../../../common/data'
export default function QuizHtml() {
  return (
    <div>
        <QuizBase title={"HTML"} icon={HTMLIcon} data={HTMLQuestions} />
    </div>
  )
}
