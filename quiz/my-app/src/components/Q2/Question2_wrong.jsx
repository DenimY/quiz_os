import React from "react";
import styled from 'styled-components'

import q from '../../images/Q1/Title@2x.png'
import point from '../../images/common/Pointer@2x.png'
import quiz from '../../images/Q1/Quiz@2x.png'

import btnInput from '../../images/common/Rectangle 20@2x.png'
import {Link} from "react-router-dom";
import Question_wrong from "../defaultTemplate/Question_wrong";
import titleImg from "../../images/Q1/Title@2x.png";

const Question2_answerStyled = styled.div`
height: 100%;
width: 100%;

//.Cont {
//
//}

`

const Question2_wrong = () => {

    return (
        <Question2_answerStyled>
            <Question_wrong
                title={'두 번째 장소,'}
                title2={'8도 소나무 단지'}
                titleImg={titleImg}
                wrongText={'정답은 숫자입니다!'}
                url={'/2'}
                useHint={true}
            />

        </Question2_answerStyled>
)


}

export default Question2_wrong;