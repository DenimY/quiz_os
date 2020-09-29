import React from "react";
import styled from 'styled-components'

import Question_hint from "../defaultTemplate/Question_hint";
import titleImg from "../../images/Q2/Title@2x.png";
import hintImg from '../../images/Q2/hint.png'


const Question2_hint = (props) => {

    return (
        <>
            <Question_hint
                title={props.location.state.title}
                title2={props.location.state.title2}
                titleImg={titleImg}
                hintImg={hintImg}
                hintText={'숫자로 생각해볼까요?\n영, 일, 이, 삼, ... 십까지 세어보세요.'}
                url={'/2'}

            />

        </>
)


}

export default Question2_hint;