import React from "react";
import styled from 'styled-components'

import q from '../../images/Q1/Title@2x.png'
import point from '../../images/common/Pointer@2x.png'
import quiz from '../../images/Q1/Quiz@2x.png'

import btnInput from '../../images/common/Rectangle 20@2x.png'
import {Link} from "react-router-dom";
import Question_wrong from "../defaultTemplate/Question_wrong";
import titleImg from "../../images/Q1/Title@2x.png";

const Question5_answerStyled = styled.div`
height: 100%;
width: 100%;

//.Cont {
//
//}

`

const Question5_wrong = () => {

    return (
        <Question5_answerStyled>
            <Question_wrong
                title={'다섯 번째 장소,'}
                title2={'야생화공원'}
                titleImg={titleImg}
                wrongText={'다리 근처의 팻말을 잘 살펴보자!'}
                url={'/5'}
            />

        </Question5_answerStyled>
)


}

export default Question5_wrong;