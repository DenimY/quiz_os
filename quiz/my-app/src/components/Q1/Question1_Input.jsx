import React, {useState} from "react";
import styled from 'styled-components'

import Question_Input from "../defaultTemplate/Question_Input";



const Question1_InputStyled = styled.div`
height: 100%;
width: 100%;

//.Cont {
//
//}

`

const Question1_Input = ({history}) => {

    return (
        <Question1_InputStyled>
            <Question_Input
                history={history}
                urlNum= {'1'}
                answerText={'송악'}
                questionText={'야생화 공원에서 다음 식물의 이름을 찾아보세요.'}
                title={'첫 번째 장소,'}
                title2={'야생화공원'}
            />

        </Question1_InputStyled>
    )


}

export default Question1_Input;