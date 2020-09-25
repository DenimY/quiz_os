import React from "react";
import styled from 'styled-components'

import Question_wrong from "../defaultTemplate/Question_wrong";
import titleImg from "../../images/Q1/Title@2x.png";

const Question4_answerStyled = styled.div`
height: 100%;
width: 100%;

//.Cont {
//
//}

`

const Question4_wrong = () => {

    return (
        <Question4_answerStyled>
            <Question_wrong
                title={'네 번째 장소,'}
                title2={'야생화공원'}
                titleImg={titleImg}
                wrongText={'다리 근처의 팻말을 잘 살펴보자!'}
                url={'/4'}
            />

        </Question4_answerStyled>
)


}

export default Question4_wrong;