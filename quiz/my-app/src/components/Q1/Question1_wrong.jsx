import React from "react";
import styled from 'styled-components'

import Question_wrong from "../defaultTemplate/Question_wrong";
import titleImg from "../../images/Q1/Title@2x.png";

const Question1_answerStyled = styled.div`
height: 100%;
width: 100%;

//.Cont {
//
//}

`

const Question1_wrong = (props) => {

    return (
        <Question1_answerStyled>
            <Question_wrong
                title={props.location.state.title}
                title2={props.location.state.title2}
                titleImg={titleImg}
                wrongText={'과명 속에 정답이 있습니다.'}
                url={'/1'}
            />

        </Question1_answerStyled>
)


}

export default Question1_wrong;