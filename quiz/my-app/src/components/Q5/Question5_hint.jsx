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
                hintText={'이 문제는 가로, 세로, 대각선의 합이 모두 똑같은 숫자의 배열, 마방진입니다. 두 번째 그림에서 b를 먼저 구하고, 첫 번째 그림에서 a를 유추하세요.\n' +
                'a=4, b=3 이므로 안내판에서 네 번째 줄 세 번째 단어인 ’떨켜층’이 정답입니다.'}
                url={'/5'}
            />

        </>
)


}

export default Question5_hint;