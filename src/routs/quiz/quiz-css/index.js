import React from 'react'
import QuizBase from '../quiz-base'
import CSSIcon from '../quiz-assets/CSSIcon.png';
import { CSSQuestions } from '../../../common/data';
export default function QuizCSS() {
  return (
    <div>
        <QuizBase title={"CSS"} icon={CSSIcon} data={CSSQuestions} />
    </div>
  )
}
