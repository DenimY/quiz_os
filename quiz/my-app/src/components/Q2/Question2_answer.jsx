import React from "react";
import styled from 'styled-components'

import titleImg from '../../images/Q2/Title@2x.png'
import quiz from '../../images/Q2/Quiz@2x.png'

import Question_answer from "../defaultTemplate/Question_answer";
import nextPageImg from '../../images/Q2/NextPage@2x.png'
import Question_wrong from "../defaultTemplate/Question_wrong";
import Question_Input from "../defaultTemplate/Question_Input";


const Question2_answerStyled = styled.div`
height: 100%;
width: 100%;

//.Cont {
//
//}

`

const Question2_answer = (props) => {

    return (
        <Question2_answerStyled>
            <Question_answer
                title={props.location.state.title}
                title2={props.location.state.title2}
                titleImg={titleImg}
                quizImg={quiz}
                answer={props.location.state.answerText}
                nextPageImg={nextPageImg}
                answerText={'정이품송 맏아들나무는 천연기념물 제 103호인 정이품송의 장자목입니다. ' +
                '세조가 법주사로 행차할 때 타고 가던 가마가 이 소나무 아래를 지나게 되었는데 처진 가지에 걸리게 되어 세조가 “가마가 가지에 걸린다”라고 말하니, ' +
                '소나무가 스스로 가지를 위로 들어 올려 왕이 지나가도록 했다고 합니다. 세조는 소나무의 충정을 기리기 위해 정이품(현재 장관급)의 벼슬을 내렸고 ' +
                '이때부터 그 소나무를 ‘정이품송’이라 부르게 되었습니다. '}
                url={'/3'}
            />
        </Question2_answerStyled>
    )


}

export default Question2_answer;