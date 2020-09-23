import React from "react";
import styled from 'styled-components'

import q1 from '../images/Q1/Group 1437@2x.png'
import point from '../images/common/Group 1436@2x.png'
import quiz from '../images/Q1/Rectangle 23.png'

import btnInput from '../images/common/Rectangle 20@2x.png'
import {Link} from "react-router-dom";

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
                <div>
                    <span className='first'>첫 번째 장소,</span><br/>
                    <span className='second'>야생화공원</span>
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
                    <Link to='/1'>
                        <input type='img' pattern="\d*" className='btn-backQuestion-img'/>
                    </Link>
                </div>
            </div>
        </Question1_answerStyled>
    )


}

export default Question1_answer;