import React from 'react'
import QuizBase from '../quiz-base'
import REACTIcon from '../quiz-assets/REACTSymbol.png';
import { REACTQuestion } from '../../../common/data';
export default function QuizReact() {
  return (
    <div>
        <QuizBase title={"React"} icon={REACTIcon} data={REACTQuestion} />
    </div>
  )
}
