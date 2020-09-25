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

const Question5_Input = ({history}) => {

    return (
        <Question5_InputStyled>
            <Question_Input
                history={history}
                urlNum= {'1'}
                answerText={'송악'}
                questionText={'야생화 공원에서 다음 식물의 이름을 찾아보세요.'}
                title={'다섯 번째 장소,'}
                title2={'야생화공원'}
            />

        </Question5_InputStyled>
    )


}

export default Question5_Input;