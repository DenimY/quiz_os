import React, {useState} from "react";
import styled from 'styled-components'

import Question_Input from "../defaultTemplate/Question_Input";
import titleImg from "../../images/Q1/Title@2x.png";



const Question3_InputStyled = styled.div`
height: 100%;
width: 100%;

//.Cont {
//
//}

`

const Question3_Input = (props) => {

    return (
        <Question3_InputStyled>
            <Question_Input
                title={props.location.state.title}
                title2={props.location.state.title2}
                titleImg={titleImg}
                history={props.history}
                urlNum= {'3'}
                answerText={'새홀리기'}
                questionText={'남산에서 관찰되는 천연기념물 야생조류는\n' +
                '황조룡이와 \'____\'입니다. 빈칸에 들어갈 조류의\n' +
                '이름은 무엇일까요?'}
            />

        </Question3_InputStyled>
    )


}

export default Question3_Input;