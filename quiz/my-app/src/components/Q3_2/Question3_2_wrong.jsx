import React from "react";
import styled from 'styled-components'

import Question_wrong from "../defaultTemplate/Question_wrong";
import titleImg from "../../images/Q3/Title@2x.png";

const Question1_answerStyled = styled.div`
height: 100%;
width: 100%;

`

const Question3_2_wrong = (props) => {

    return (
        <Question1_answerStyled>
            <Question_wrong
                title={props.location.state.title}
                title2={props.location.state.title2}
                titleImg={titleImg}
                wrongText={'(문제설명)볼륨을 키고 나레이션을 들어봅시다!'}
                url={'/3_2'}
            />

        </Question1_answerStyled>
)


}

export default Question3_2_wrong;