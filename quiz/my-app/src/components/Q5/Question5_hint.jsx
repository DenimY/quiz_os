import React from "react";
import styled from 'styled-components'

import Question_hint from "../defaultTemplate/Question_hint";
import titleImg from "../../images/Q5/Title@2x.png";
import hintImg from '../../images/Q5/Minesweeper.png'

const Question5_hint = (props) => {

    return (
        <>
            <Question_hint
                title={props.location.state.title}
                title2={props.location.state.title2}
                titleImg={titleImg}
                hintImg={hintImg}
                hintText={'x를 제외한 인접한 칸의 갯수를 생각해봅시다.\n지뢰찾기처럼요!'}
                url={'/5'}
            />

        </>
)


}

export default Question5_hint;