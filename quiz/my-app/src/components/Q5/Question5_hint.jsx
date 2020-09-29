import React from "react";

import Question_hint from "../defaultTemplate/Question_hint";
import titleImg from "../../images/Q5/Title@2x.png";
import hintImg from '../../images/Q5/hint.png'


const Question5_hint = (props) => {

    return (
        <>
            <Question_hint
                title={props.location.state.title}
                title2={props.location.state.title2}
                titleImg={titleImg}
                hintImg={hintImg}
                hintText={'이 문제는 가로, 세로, 대각선의 합이 모두 똑같은 숫자의 배열, 마방진입니다.'}
                url={'/5'}
            />

        </>
)


}

export default Question5_hint;