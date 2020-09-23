import React from "react";
import styled from 'styled-components'

import q1 from '../images/Q1/Group 1437@2x.png'
import point from '../images/common/Group 1436@2x.png'
import quiz from '../images/Q1/Rectangle 23.png'

import answerImg from '../images/Q1/Group 1383@2x.png'


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
                <div className=''>
                    <span className='first'>첫 번째 장소,</span><br/>
                    <span className='second'>야생화공원</span>
                </div>
            </div>


            <div className='Cont-main'>


                {/*question image */}
                <div className='cont-body'>
                    <div className='Answer'>
                        <span>'송악'</span>
                        <span>정답입니다</span>
                    </div>
                    <img className='' src={answerImg}>
                    </img>
                    <div className='덩굴성 식물들은 주변의 나무를 말려 죽이는 습성이 있지만, 송악은 자신이 의지한 나무를 죽이지 않고 공생합니다.'>

                    </div>
                </div>
                <div>

                </div>
            </div>

            <div className='footer'>
                <div className='input-answer'>

                    <span>숫자만 입력해주세요!</span>
                    <input type='number' pattern="\d*" className='btn-Input-img'/>
                    {/*<input type='image' src={btnInput} className='btn-result'value='정답 입력하기'/>*/}
                </div>
            </div>
        </Question1_answerStyled>
    )


}

export default Question1_answer;