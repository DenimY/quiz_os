import React, {useState} from "react";
import styled from 'styled-components'

import titleImg from '../../images/Q1/Title@2x.png'
import TitleTemplate from "./TitleTemplate";
import {Link} from "react-router-dom";

const Question_InputStyled = styled.div`
height: 100%;
width: 100%;

`

const Question_Input = ({history, urlNum, answerText, questionText, title, title2}) => {

    const [answer, setAnswer] = useState("");
    const handleKeyPress = (e) => {
        let sUrlNum = {urlNum}.urlNum
        if (e.key === 'Enter') {
            let url = ''
            if (answer.trim() === {answerText}.answerText) {
                url = '/' + sUrlNum + '/correct'
            } else {
                url = '/' + sUrlNum + '/wrong'
            }
            history.push(url);
        }
    }

    return (
        <Question_InputStyled>

            <TitleTemplate titleImg={titleImg}
                           title={title}
                           title2={title2}/>

            <div className='Cont-main'>


                {/*question image */}
                <div className='cont-body'>
                    <div className='question'>
                        {questionText}
                    </div>
                </div>
            </div>

            <div className='footer'>
                <div className='input-answer'>
                    <input type='text' className='btn-Input-img' onKeyPress={handleKeyPress} onChange={(e) => setAnswer(e.target.value)}/>
                </div>
            </div>
        </Question_InputStyled>
    )


}

export default Question_Input;