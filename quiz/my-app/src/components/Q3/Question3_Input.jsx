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

const Question3_Input = (props) => {

    return (
        <Question3_InputStyled>
            <Question_Input
                title={props.location.state.title}
                title2={props.location.state.title2}
                titleImg={titleImg}
                history={props.history}
                urlNum={'3'}
                answerText={'새홀리기'}
                questionText={'반갑게 지저귀는 새들의 인사를 들으면서 즐겁게 산책중이신가요? 조용히 귀를 기울여보시면, 남산에 사는 다양한 새소리를 들을 수 있습니다.' +
                '남산에서 관찰되는 천연기념물 야생조류를 황조롱이와 \'____\'입니다. 빈칸에 들어갈 이름은 무엇일까요?'}
            />

        </Question3_InputStyled>
    )


}

export default Question3_Input;