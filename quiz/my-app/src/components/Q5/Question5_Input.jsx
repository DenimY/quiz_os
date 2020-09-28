import React, {useState} from "react";
import styled from 'styled-components'

import q from '../../images/Q1/Title@2x.png'
import Question_Input from "../defaultTemplate/Question_Input";
import QuestionTemplate from "../defaultTemplate/QuestionTemplate";



const Question5_InputStyled = styled.div`
height: 100%;
width: 100%;

//.Cont {
//
//}

`

const Question5_Input = (props) => {

    return (
        <Question5_InputStyled>
            <Question_Input
                title2={props.location.state.title2}
                title={props.location.state.title}
                titleImg={props.location.state.titleImg}
                history={props.history}
                urlNum= {'5'}
                answerText={'떨켜충'}
                questionText={'아래의 그림에서 a, b를 유추하고, 남산공원에서 \'단푼이 드는 이유\'라는 안내판을 찾아보세요.\n이 안내판의 a번째 줄, b번째 단어는 무엇일까요?'}
            />

        </Question5_InputStyled>
    )


}

export default Question5_Input;