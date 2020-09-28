import React from "react";
import styled from 'styled-components'

import Question_wrong from "../defaultTemplate/Question_wrong";
import titleImg from "../../images/Q5/Title@2x.png";

const Question5_answerStyled = styled.div`
height: 100%;
width: 100%;

//.Cont {
//
//}

`

const Question5_wrong = (props) => {

    return (
        <Question5_answerStyled>
            <Question_wrong
                title={props.location.state.title}
                title2={props.location.state.title2}
                titleImg={titleImg}
                wrongText={'다리 근처의 팻말을 잘 살펴보자!'}
                url={'/5'}
            />

        </Question5_answerStyled>
)


}

export default Question5_wrong;