import React from "react";
import styled from 'styled-components'

import titleImg from '../../images/Q3/Title@2x.png'
import quiz from '../../images/Q3/Quiz@2x.png'

import Question_answer from "../defaultTemplate/Question_answer";
import nextPageImg from '../../images/Q3/NextPage@2x.png'


const Question3_answerStyled = styled.div`
height: 100%;
width: 100%;

//.Cont {
//
//}

`

const Question3_2_answer = (props) => {

    return (
        <Question3_answerStyled>
            <Question_answer
                title={props.location.state.title}
                title2={props.location.state.title2}
                titleImg={titleImg}
                quizImg={quiz}
                answer={props.location.state.answerText}
                nextPageImg={nextPageImg}
                // answerImg={answerImg}
                answerText={'AR을 활용하여 다른 멸종위기 동물들은 \n' +
                '무엇이 있는지 확인해보세요. 이 중 멸종위기인 \n' +
                '조류를 확인하고, 이 조류는 어디에 서식하는지 \n' +
                '확인해보세요!\n'}
                url={'/4'}
                type={'B'}
            />
        </Question3_answerStyled>
    )


}

export default Question3_2_answer;