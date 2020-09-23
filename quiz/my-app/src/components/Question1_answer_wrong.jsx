import React from "react";
import styled from 'styled-components'

import q1 from '../images/Q1/Group 1379@2x.png'
import point from '../images/common/Group 49.png'
import quiz from '../images/Q1/Rectangle 23.png'

import btnInput from '../images/common/Rectangle 20@2x.png'


const Question1_answerStyled = styled.div`
height: 100%;
width: 100%;

//.Cont {
//
//}

`

const Question1_answer = () => {

    return (
        <Question1_answerStyled>

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
                <div className='first'>
                    {/*<div>*/}
                    첫 번째 장소,
                    {/*</div>*/}
                    {/*<div >*/}
                    <img className='pointer_img' src={point}/>
                    {/*</div>*/}
                </div>

                <div className='second'>
                    야생화공원
                </div>
            </div>


            <div className='Cont-main'>

                <div className='cont-body'>
                    <div className='blue'>
                        오답입니다.
                    </div>
                </div>
            </div>

            <div className='footer'>
                <div className='input-answer'>

                    <input type='number' pattern="\d*" className='btn-backQuestion-img'/>
                </div>
            </div>
        </Question1_answerStyled>
    )


}

export default Question1_answer;