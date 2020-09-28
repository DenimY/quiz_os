import React from "react";
import styled from 'styled-components'

import titleImg from '../../images/Q3/Title@2x.png'
import quiz from '../../images/Q3/Quiz@2x.png'
import answerImg from '../../images/Q3/Answer@2x.png'

import Question_answer from "../defaultTemplate/Question_answer";
import nextPageImg from '../../images/Q3/NextPage@2x.png'
import Question_Input from "../defaultTemplate/Question_Input";


const Question3_answerStyled = styled.div`
height: 100%;
width: 100%;

//.Cont {
//
//}

`

const Question3_2_answer = (props) => {

    return (
        <Question3_answerStyled>
            <Question_answer
                title={props.location.state.title}
                title2={props.location.state.title2}
                titleImg={titleImg}
                quizImg={quiz}
                answer={props.location.state.answerText}
                nextPageImg={nextPageImg}
                // answerImg={answerImg}
                answerText={'새홀리기처럼, 스픽스 마코 앵무새는 브라질에서 서\n' +
                '식하는 멸종 위기 동물입니다. 야생동물들이 야\n' +
                '생에서 잘 살아갈 수 있도록, 환경을 파괴하지 않\n' +
                '고 보존하는 것이 중요합니다.'}
                url={'/4'}
                type={'B'}
            />
        </Question3_answerStyled>
    )


}

export default Question3_2_answer;