import React from "react";
import styled from 'styled-components'

import titleImg from '../../images/Q1/Title@2x.png'
import quiz from '../../images/Q1/Quiz@2x.png'
import answerImg from '../../images/Q1/Answer@2x.png'

import Question_answer from "../defaultTemplate/Question_answer";
import QuestionTemplate from "../defaultTemplate/QuestionTemplate";
import nextPageImg from '../../images/Q1/NextPage@2x.png'


const Question5_answerStyled = styled.div`
height: 100%;
width: 100%;

//.Cont {
//
//}

`

const Question5_answer = () => {

    return (
        <Question5_answerStyled>
            <Question_answer
                title={'다섯 번째 장소,'}
                title2={'야생화공원'}
                titleImg={titleImg}
                quizImg={quiz}
                answer={'103'}
                nextPageImg={nextPageImg}
                answerImg={answerImg}
                answerText={'정이품송 맏아들나무는 천연기념물 제 103호인 정이품송의 장자목입니다. 세조가 법주사로 행차할 때 타고 가던 가마가 이 소나무 아래를 지나게 되었는데 처진 가지에 걸리게 되어 세조가 “가마가 가지에 걸린다”라고 말하니, 소나무가 스스로 가지를 위로 들어 올려 왕이 지나가도록 했다고 합니다. 세조는 소나무의 충정을 기리기 위해 정이품(현재 장관급)의 벼슬을 내렸고 이때부터 그 소나무를 ‘정이품송’이라 부르게 되었습니다. '}
                url={'/6'}

            />
        </Question5_answerStyled>
    )


}

export default Question5_answer;