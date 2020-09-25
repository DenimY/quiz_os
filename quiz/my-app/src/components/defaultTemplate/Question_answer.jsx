import React from "react";
import styled from 'styled-components'

import tileImg from '../../images/Q1/Title@2x.png'
import quiz from '../../images/Q1/Quiz@2x.png'

import answerImg from '../../images/Q1/Answer@2x.png'
import TitleTemplate from "./TitleTemplate";
import titleImg from "../../images/Q1/Title@2x.png";
import {Link} from "react-router-dom";


const Question1_answerStyled = styled.div`
//height: 100%;
//width: 100%;

//.Cont {
//
//}

`

const Question_answer = ({titleImg, answer, answerImg, answerText, title, title2, nextPageImg, url}) => {

    return (
        <Question1_answerStyled>

            <TitleTemplate titleImg={titleImg}
                           title={title}
                           title2={title2}/>


            <div className='Cont-main'>
                {/*question image */}
                <div className='cont-body'>
                    <div className='answer'>
                        <span>'{answer}'</span><br/>
                        <span>정답입니다!</span>
                    </div>
                    <img className='correctImg' src={answerImg}>
                    </img>
                    {/*<div className='덩굴성 식물들은 주변의 나무를 말려 죽이는 습성이 있지만, 송악은 자신이 의지한 나무를 죽이지 않고 공생합니다.'>*/}
                    <pre className='question'>
                            {answerText}
                    </pre>
                </div>
                <div>

                </div>
            </div>

            <div className='footer'>
                <div className='input-answer'>
                    <Link to={url}>
                        <input type='image' src={nextPageImg} className='btn-result'/>
                    </Link>
                </div>
            </div>
        </Question1_answerStyled>
    )


}

export default Question_answer;