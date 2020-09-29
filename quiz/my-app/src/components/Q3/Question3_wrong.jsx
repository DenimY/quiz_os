import React from "react";
import styled from 'styled-components'

import Question_wrong from "../defaultTemplate/Question_wrong";
import titleImg from "../../images/Q1/Title@2x.png";

const Question_answerStyled = styled.div`
height: 100%;
width: 100%;

`

const Question3_wrong = (props) => {

    return (
        <Question_answerStyled>
            <Question_wrong
                title={props.location.state.title}
                title2={props.location.state.title2}
                titleImg={titleImg}
                wrongText={'안내판은 화장실 근처에 있습니다.\n' +
                '잘 찾아보세요!'}
                url={'/1'}
            />

        </Question_answerStyled>
)


}

export default Question3_wrong;