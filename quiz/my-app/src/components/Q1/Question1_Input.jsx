import React, {useState} from "react";
import styled from 'styled-components'

import Question_Input from "../defaultTemplate/Question_Input";

import titleImg from '../../images/Q1/Title@2x.png'


const Question1_InputStyled = styled.div`
height: 100%;
width: 100%;

//.Cont {
//
//}

`

const Question1_Input = ({props}) => {

    return (
        <>
            <Question_Input
                history={props.history}
                urlNum={'1'}
                answerText={'송악'}
                questionText={'야생화 공원에서 다음 식물의 이름을 찾아보세요1.'}
                titleImg={titleImg}
                title={props.location.state.title}
                title2={props.location.state.title2}
            />

        </>
    )


}

export default Question1_Input;