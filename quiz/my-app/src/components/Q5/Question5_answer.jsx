import React from "react";
import styled from 'styled-components'

import titleImg from '../../images/Q3/Title@2x.png'

import Question_answer from "../defaultTemplate/Question_answer";
import nextPageImg from '../../images/Q5/NextPage@2x.png'


const Question5_answerStyled = styled.div`
height: 100%;
width: 100%;

//.Cont {
//
//}

`

const Question5_answer = (props) => {

    return (
        <Question5_answerStyled>
            <Question_answer
                title={props.location.state.title}
                title2={props.location.state.title2}
                titleImg={titleImg}
                answer={props.location.state.answerText}
                nextPageImg={nextPageImg}
                answerText={'떨켜층은 잎이 가지에서 분리되는 지점입니다. 가을이 되어 기온이 낮아지면, 떨켜층 세포벽이 녹으면서 잎이 가지에서 떨어진답니다.'}
                url={'/end'}

            />
        </Question5_answerStyled>
    )


}

export default Question5_answer;