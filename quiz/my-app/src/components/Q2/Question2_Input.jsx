import React, {useState} from "react";
import styled from 'styled-components'

import Question_Input from "../defaultTemplate/Question_Input";



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
                titleImg={props.location.state.titleImg}
                history={props.history}
                urlNum= {'2'}
                answerText={'103'}
                questionText={'아래의 물음표에 들어가는 글자를\n' +
                '유추해보세요. 그리고 \'' +
                '정이품송 맏아들나무\' \n' +
                '안내판을 찬은 후, 안내판에 물음표가 들어가는\n' +
                '단어를 찾아 입력하세요.(세글자) '}
            />

        </Question2_InputStyled>
    )


}

export default Question2_Input;