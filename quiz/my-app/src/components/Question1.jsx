import React, {useState, useEffect} from "react";
import styled from 'styled-components'

import q1 from '../images/Q1/Group 1379.png'
import q1_1 from '../images/Q1/Group 1379@2x.png'
import point from '../images/common/Group 49.png'
import quiz from '../images/Q1/Rectangle 23.png'

import btn1 from '../images/common/Group 1380@2x.png'


const Question1Styled = styled.div`
//height: 100%;

//.Cont {
//
//}

`

const Question1 = () => {

    return (
        <Question1Styled>
            <div className='Cont-main'>
                <div className='cont-header'>
                    <div className='header-title' style={{display: "flex"}}>
                        <img src={q1}/>
                        <div>
                            <br/>
                            <br/>
                            <div>-----------------------------------</div>
                        </div>
                    </div>
                </div>

                <div className='title'>
                    <div className='first'>
                        첫번 째 장소,
                        <img className='pointer_img' src={point}/>
                    </div>
                    <div className='second'>
                        야생화공원
                    </div>
                </div>

                {/*question image */}
                <div className='cont-body'>
                    야생화공원의 길을 걸으며 주변의 야생화를 둘러 보세요. 그리고 다음 식물의 이름을 차자아보세요.
                    <img className='' src={quiz}>
                    </img>
                </div>

                {/*질문*/}
                <div>

                </div>
            </div>

            <div className='footer'>
                {/*<input type='Button' className='btn-result' value='정답 입력하기'/>*/}
                <input type='image' src={btn1} className='btn-result' value='정답 입력하기'/>

            </div>
        </Question1Styled>
    )


}

export default Question1;