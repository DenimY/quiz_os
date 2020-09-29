import React from "react";
import styled from 'styled-components'

import Question_wrong from "../defaultTemplate/Question_wrong";
import titleImg from "../../images/Q2/Title@2x.png";

const Question4_answerStyled = styled.div`
height: 100%;
width: 100%;

//.Cont {
//
//}

`

const Question4_wrong = (props) => {

    return (
        <Question4_answerStyled>
            <Question_wrong
                title={props.location.state.title}
                title2={props.location.state.title2}
                titleImg={titleImg}
                wrongText={'연못 근처에 조그만 연못이 하나 더 있네요! \n그쪽으로 한 번 가볼까요?'}
                url={'/2'}
            />

        </Question4_answerStyled>
)


}

export default Question4_wrong;