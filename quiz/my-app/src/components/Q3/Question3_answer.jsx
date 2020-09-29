import React from "react";
import styled from 'styled-components'

import titleImg from '../../images/Q3/Title@2x.png'
import quiz from '../../images/Q3/Quiz@2x.png'
import answerImg from '../../images/Q3/Answer@2x.png'

import Question_answer from "../defaultTemplate/Question_answer";
import nextPageImg from '../../images/Q3/NextPage@2x.png'


const Question3_answerStyled = styled.div`
height: 100%;
width: 100%;

//.Cont {
//
//}

`

const Question3_answer = (props) => {

    return (
        <Question3_answerStyled>
            <Question_answer
                title={props.location.state.title}
                title2={props.location.state.title2}
                titleImg={titleImg}
                quizImg={quiz}
                answer={props.location.state.answerText}
                nextPageImg={nextPageImg}
                answerImg={answerImg}
                answerText={'새홀리기는 멸종위기야생동식물\n' +
                '2급으로 지정되어 보호받는 새입니다.\n' +
                '매와 아주 비슷하게 생겼지만 크기가 조금 더 작고,\n' +
                '배에 붉은 색을 띄고 있습니다.'}
                url={'/3_2'}

            />
        </Question3_answerStyled>
    )


}

export default Question3_answer;