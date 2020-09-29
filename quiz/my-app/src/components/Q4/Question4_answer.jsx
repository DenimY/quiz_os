import React from "react";
import styled from 'styled-components'

import titleImg from '../../images/Q4/Title@2x.png'
import quiz from '../../images/Q4/Quiz@2x.png'
import answerImg from '../../images/Q4/Answer@2x.png'

import Question_answer from "../defaultTemplate/Question_answer";
import nextPageImg from '../../images/Q4/NextPage@2x.png'


const Question4_answerStyled = styled.div`
height: 100%;
width: 100%;

//.Cont {
//
//}

`

const Question4_answer = (props) => {

    return (
        <Question4_answerStyled>
            <Question_answer
                title={props.location.state.title}
                title2={props.location.state.title2}
                titleImg={titleImg}
                quizImg={quiz}
                answer={props.location.state.answerText}
                nextPageImg={nextPageImg}
                answerImg={answerImg}
                answerText={'  옴개구리는 주름돌기개구리라고도 불리며 몸 길이는 4-5.5cm 가량입니다. 전국 하천에서 널리 서식하지만, 최근에는 하천의 요염으로 인해 개체수가 감소하고 있습니다.'}
                url={'/5'}

            />
        </Question4_answerStyled>
    )


}

export default Question4_answer;