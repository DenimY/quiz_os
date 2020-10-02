import React from "react";

import Question_hint from "../defaultTemplate/Question_hint";
import titleImg from "../../images/Q4/Title@2x.png";
// import hintImg from '../../images/Q2/hint.png'


const Question2_hint = (props) => {

    return (
        <>
            <Question_hint
                title={props.location.state.title}
                title2={props.location.state.title2}
                titleImg={titleImg}
                // hintImg={hintImg}
                hintText={'정답이 있는 안내판을 찾아보세요.\n' +
                '연못 근처에 조그만 연못이 하나 더 있네요!\n' +
                '그쪽으로 한 번 가볼까요?\n' +
                '정답이 있네요, 옴개구리!'}
                url={'/4'}

            />

        </>
    )


}

export default Question2_hint;