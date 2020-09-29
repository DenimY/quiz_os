import React from "react";
import styled from 'styled-components'

import Question_Input from "../defaultTemplate/Question_Input";
import titleImg from "../../images/Q3/Title@2x.png";


const Question3_InputStyled = styled.div`
height: 100%;
width: 100%;

//.Cont {
//
//}

`

const Question3_2_Input = (props) => {

    return (
        <Question3_InputStyled>
            <Question_Input
                title={props.location.state.title}
                title2={props.location.state.title2}
                titleImg={titleImg}
                // quizImg={quiz}
                questionText={'지금은 천연기념물 2종만 남아있지만, 예전에는 남산에 더욱 다양한 새소리를 들을 수 있었다고 합니다. 자연을 아끼고 보호한다면, 우리의 후손들은 더욱 아름다운 남산을 볼 수 ' +
                'AR을 활용하여 다른 멸종위기 동물들은\n' +
                '무엇이 있는지 확인해보세요.\n' +
                '그리고 이 중 멸종위기인 조류를 확인하고\n' +
                '이 조류는 어디에 서식하는지 맞춰보세요!'}
                history={props.history}
                urlNum={'3_2'}
                answerText={'브라질'}
            />

        </Question3_InputStyled>
    )


}

export default Question3_2_Input;