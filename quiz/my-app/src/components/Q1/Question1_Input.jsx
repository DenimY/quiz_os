import React, {useState} from "react";
import styled from 'styled-components'

import Question_Input from "../defaultTemplate/Question_Input";

import titleImg from '../../images/Q1/Title@2x.png'


const Question1_InputStyled = styled.div`
height: 100%;
width: 100%;

//.Cont {
//
//}

`

const Question1_Input = (props) => {

    return (
        <Question1_InputStyled>
            <Question_Input
                history={props.history}
                urlNum={'1'}
                answerText={'송악'}
                questionText={'우측 위에 있는 \'위치보기\'를 눌러 지도를 확인하고 야생화공원으로 가세요.' +
                ' 야생화공원에 잇는 식물들은 아름답지만 이름은 낯설 것입니다. 그 중 아래 팻말을 찾고, 아래 식물의 이름을 찾아주세요.'}
                titleImg={titleImg}
                title={props.location.state.title}
                title2={props.location.state.title2}
            />

        </Question1_InputStyled>
    )


}

export default Question1_Input;