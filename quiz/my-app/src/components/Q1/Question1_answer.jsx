import React from "react";
import styled from 'styled-components'

import titleImg from '../../images/Q1/Title@2x.png'
import quiz from '../../images/Q1/Quiz@2x.png'
import answerImg from '../../images/Q1/Answer@2x.png'

import Question_answer from "../defaultTemplate/Question_answer";
import nextPageImg from '../../images/Q1/NextPage@2x.png'


const Question1_answerStyled = styled.div`
height: 100%;
width: 100%;

//.Cont {
//
//}

`

const Question1_answer = () => {

    return (
        <Question1_answerStyled>
            <Question_answer
                title={'첫 번째 장소,'}
                title2={'야생화공원'}
                titleImg={titleImg}
                quizImg={quiz}
                answer={'송악'}
                nextPageImg={nextPageImg}
                answerImg={answerImg}
                answerText={'덩굴성 식물들은 주변의 나무를 말려 죽이는\n' +
                '습성이 있지만, 송악은 자신이 의지한 나무를\n' +
                '죽이지 않고 공생합니다.'}
                url={'/2'}

            />
        </Question1_answerStyled>
    )


}

export default Question1_answer;