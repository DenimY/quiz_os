import React, {useState} from "react";
import styled from 'styled-components'

import TitleTemplate from "./TitleTemplate";

const Question_InputStyled = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;

`

const Question_Input = ({history, urlNum, answerText, questionText, titleImg, title, title2}) => {

    const [answer, setAnswer] = useState("");
    const handleKeyPress = (e) => {
        let sUrlNum = {urlNum}.urlNum
        if (e.key === 'Enter') {
            let url = '';
            if (answer.trim() === answerText) {
                url = '/' + sUrlNum + '/correct'
            } else {
                url = '/' + sUrlNum + '/wrong'
            }

            history.push({
                pathname: url,
                state: {
                    title: title,
                    title2: title2,
                    titleImg: titleImg,
                    answerText: answerText,
                }
            })


        }

    }

    return (
        <Question_InputStyled>

            <div>
                <TitleTemplate titleImg={titleImg}
                               title={title}
                               title2={title2}/>
            </div>

            <div className='Cont-main'>


                {/*question image */}
                <div className='cont-body'>
                    <div className='textBox'>
                    <pre className='question'>
                        {questionText}
                    </pre>
                    </div>
                </div>

                <div className='footer'>
                    <div className='input-answer'>
                        <input type='text' className='btn-Input-text' onKeyPress={handleKeyPress} onChange={(e) => setAnswer(e.target.value)}/>
                        {/*<img className='btn-Input-img' src={inputImg} />*/}
                    </div>
                </div>
            </div>
            {/*<button*/}


        </Question_InputStyled>
    )

}

export default Question_Input;