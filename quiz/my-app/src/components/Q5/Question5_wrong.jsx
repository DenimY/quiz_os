import React from "react";
import styled from 'styled-components'

import Question_wrong from "../defaultTemplate/Question_wrong";
import titleImg from "../../images/Q3/Title@2x.png";

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
                wrongText={'두 번째 마방진을 먼저 계산해보세요.\n2+6+10=18'}
                url={'/3'}
            />

        </Question5_answerStyled>
)


}

export default Question5_wrong;