import React, {useState} from "react";
import styled from 'styled-components'

import Question_Input from "../defaultTemplate/Question_Input";
import titleImg from "../../images/Q1/Title@2x.png";



const Question4_InputStyled = styled.div`
height: 100%;
width: 100%;

//.Cont {
//
//}

`

const Question4_Input = (props) => {

    return (
        <Question4_InputStyled>
            <Question_Input
                title={props.location.state.title}
                title2={props.location.state.title2}
                titleImg={titleImg}
                history={props.history}
                urlNum= {'4'}
                answerText={'옴개구리'}
                questionText={' 남산의 연못에서 서식하고 있는 개구리는  산개구리, 참개구리 그리고 \'_____\'입니다. 빈칸에 들어갈 개구리의 이름은 무엇일까요?\n'}
            />

        </Question4_InputStyled>
    )


}

export default Question4_Input;