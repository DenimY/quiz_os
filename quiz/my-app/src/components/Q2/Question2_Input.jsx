import React from "react";
import styled from 'styled-components'

import Question_Input from "../defaultTemplate/Question_Input";
import titleImg from "../../images/Q1/Title@2x.png";


const Question2_InputStyled = styled.div`
height: 100%;
width: 100%;

//.Cont {
//
//}

`

const Question2_Input = (props) => {

    return (
        <Question2_InputStyled>
            <Question_Input
                title={props.location.state.title}
                title2={props.location.state.title2}
                titleImg={titleImg}
                history={props.history}
                urlNum= {'2'}
                answerText={'103'}
                questionText={'기품있는 8도 소나무 단지를 감상해보세요. 그리고 \'정이품송 맏아들나무\'를 만나게 된다면 안내판을 유심히 읽어보세요. ' +
                '이번 문제의 정답인 "■◆▲"는 정이품송의 기념비적인 의미를 나타내는 세 자리 글자 또는 숫자를 찾을 수 있습니다.'
                }
            />

        </Question2_InputStyled>
    )


}

export default Question2_Input;