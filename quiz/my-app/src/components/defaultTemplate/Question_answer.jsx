import React from "react";
import styled from 'styled-components'

import TitleTemplate from "./TitleTemplate";
import {Link} from "react-router-dom";


const Question1_answerStyled = styled.div`
height: 100%;
width: 100%;

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
                    <div className={'textBox'}>
                    <pre className='question'>
                            {answerText}
                    </pre>
                    </div>
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