import React from 'react'
import QuizBase from '../quiz-base'
import JSIcon from '../quiz-assets/JSIcon.png';
import { JSQuestions } from '../../../common/data';
export default function QuizJs() {
  return (
    <div>
        <QuizBase title={"JavaScript"} icon={JSIcon} data={JSQuestions} />
    </div>
  )
}
