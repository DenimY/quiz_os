import React from "react";
import styled from 'styled-components'

import Question_wrong from "../defaultTemplate/Question_wrong";
import titleImg from "../../images/Q2/Title@2x.png";

const Question2_answerStyled = styled.div`
height: 100%;
width: 100%;

//.Cont {
//
//}

`

const Question2_wrong = (props) => {

    return (
        <Question2_answerStyled>
            <Question_wrong
                title={props.location.state.title}
                title2={props.location.state.title2}
                titleImg={titleImg}
                wrongText={'정답은 세 자리 숫자입니다'}
                url={'/2'}
                useHint={true}
            />

        </Question2_answerStyled>
)


}

export default Question2_wrong;