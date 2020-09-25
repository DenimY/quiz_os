import React, {useState} from "react";
import styled from 'styled-components'

import q from '../../images/Q1/Title@2x.png'
import Question_Input from "../defaultTemplate/Question_Input";
import QuestionTemplate from "../defaultTemplate/QuestionTemplate";



const Question4_InputStyled = styled.div`
height: 100%;
width: 100%;

//.Cont {
//
//}

`

const Question4_Input = ({history}) => {

    return (
        <Question4_InputStyled>
            <Question_Input
                history={history}
                urlNum= {'1'}
                answerText={'송악'}
                questionText={'야생화 공원에서 다음 식물의 이름을 찾아보세요.'}
                title={'네 번째 장소,'}
                title2={'야생화공원'}
            />

        </Question4_InputStyled>
    )


}

export default Question4_Input;