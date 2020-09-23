import React, {useState} from "react";
import styled from 'styled-components'

import Modal from '../Containers/Modal'

// import {history} from 'react-router-dom';

import q1 from '../images/Q1/Group 1437@2x.png'

const Question1_InputStyled = styled.div`
height: 100%;
width: 100%;

//.Cont {
//
//}

`

const Question1_Input = ({history}) => {

    const [answer, setAnswer] = useState("");
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            let url = ''
            if (answer.trim() === '송악') {
                alert("정답")
                url = '/1/correct'
            } else {
                alert('오답 : ' + answer)
                url = '/1/wrong'
            }
            history.push(url);
        }
    }

    return (
        <Question1_InputStyled>

            <div className='cont-header'>
                <div className='header-title' style={{display: "flex"}}>
                    <img src={q1}/>
                    <div>
                        <br/>
                        <br/>
                        <div>
                            ────────────────
                            <line x1="0" y1="10" x2="30" y2="10" stroke="black" stroke-width="3"/>

                        </div>
                    </div>
                </div>
            </div>

            <div className='title'>
                <div>
                    <span className='first'>첫 번째 장소,</span><br/>
                    <span className='second'>야생화공원</span>
                </div>
            </div>


            <div className='Cont-main'>


                {/*question image */}
                <div className='cont-body'>
                    <div className='question'>
                        야생화 공원에서 다음 식물의 이름을 찾아보세요.
                    </div>
                </div>
            </div>

            <div className='footer'>
                <div className='input-answer'>

                    <span>숫자만 입력해주세요!</span>
                    {/*<input type='number' pattern="\d*" className='btn-Input-img' onKeyPress={handleKeyPress}/>*/}
                    <input type='text' className='btn-Input-img' onKeyPress={handleKeyPress} onChange={(e) => setAnswer(e.target.value)}/>
                    {/*<input type='image' src={btnInput} className='btn-result'value='정답 입력하기'/>*/}
                </div>
            </div>
        </Question1_InputStyled>
    )


}

export default Question1_Input;