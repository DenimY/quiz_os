import React, {useState, useEffect} from "react";
import { Popconfirm, message, Button } from 'antd';
import styled from 'styled-components'

// import q1 from '../images/Q1/Group 1379.png'
import q1 from '../images/Q1/Group 1379@2x.png'
import point from '../images/common/Group 49.png'
import quiz from '../images/Q1/Rectangle 23.png'

import btn1 from '../images/common/Group 1380@2x.png'

import Question1_answer from "./Question1_answer";
import {Link} from "react-router-dom";


const Question1Styled = styled.div`
height: 100%;
width: 100%;

//.Cont {
//
//}

`
const Question1 = () => {

    function confirm() {
        message.info('Clicked on Yes.');
    }

    return (
        <Question1Styled>

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
                    <div className='location'>
                        <img className='pointer_img' src={point}/>
                        <Popconfirm
                            placement="bottomRight"
                            onConfirm={confirm}
                            title='dddddddddddddddddddfadf'
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button>위치보기</Button>
                        </Popconfirm>
                    </div>

                    {/*</div>*/}
                </div>

                <div className='second'>
                    야생화공원
                </div>
            </div>


            <div className='Cont-main'>


                {/*question image */}
                <div className='cont-body'>
                    <div className='question'>
                        야생화공원의 길을 걸으며 주변의 야생화를 둘러 보세요. 그리고 다음 식물의 이름을 찾아보세요.
                    </div>
                    <img className='' src={quiz}>
                    </img>
                    <div className='hint-text'>
                        [힌트] 공원의 안의 팻말들을 잘 찾아보세요
                    </div>
                </div>
                <div>

                </div>
            </div>

            <div className='footer'>
                {/*<input type='Button' className='btn-result' value='정답 입력하기'/>*/}
                <Link to='/answer/1'>
                    <input type='image' src={btn1} className='btn-result' value='정답 입력하기' onClick={() => {
                        return (
                            <div>
                            </div>
                        )
                    }}/>
                </Link>

            </div>
        </Question1Styled>
    )


}

export default Question1;