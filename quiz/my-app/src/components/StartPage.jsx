import React from "react";
import styled from 'styled-components'

import backgroundImg from '../images/startPage/backgroundImg.png'
import QuestStartBtn from '../images/startPage/QuestStartBtn.png'
import pangsuBtn from '../images/startPage/pangsuBtn.png'
import explanation from '../images/startPage/StartExplanation.png'
import {Link} from "react-router-dom";

const StartPageStyled = styled.div`
width: 100%;
height: 100%;
position: fixed;
overflow: scroll;

font-family: NanumSquareRound;

color: white;
font-size: 15px;
img{
top: 0;
left: 0;
right: 0; 
width: 100%;
height: auto;
//position: absolute;
position: fixed;
}

.main-text{
font-weight: bold;
position: relative;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;


  span{
  font-size: 16px;
  }

}



.btn-result{
margin: 0;
padding-bottom: -10px;
position: relative;
}

.body-cont{
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
position: relative;
}

.footer-body{
width: 100%;
display: flex;
justify-content: flex-end;
padding-bottom: 25px;

}

.input-answer{
margin-bottom: 20px;
}
`

const StartPage = () => {

    return (
        <StartPageStyled>
            <img src={backgroundImg}/>
            <div className='body-cont'>


                <div className='main-text'>

                    <span>당신은 평소에 주위를 둘러보며 걸으시나요?</span>
                    <br/>
                    <span>주변의 풀과 나무를 굽어보거나,</span>
                    <span>이 곳을 설명하는 안내판을</span>
                    <span>찬찬히 읽어보신 적 있으신가요?</span>
                    <br/>
                    <br/>
                    <span>이번 퀘스트를 통해 </span>
                    <span>남산공원을 둘러보는 시간을 가져보세요!</span>
                    <br/>
                    <span>먼저 펭수와 AR로 인사를 하고,</span>
                    <span>퀘스트를 시작해볼까요?</span>

                </div>
                <div className={'footer-body'}>
                    <div className='input-answer' style={{display: "flex", flexDirection: "column", margin: "auto", padding: 0}}>
                        <Link to={'/1'}>
                            <input style={{top: '15px'}} type='image' src={QuestStartBtn} className='btn-result'/>
                        </Link>
                        <input type='image' src={pangsuBtn} className='btn-result' onClick={() => {
                            window.open('https://uplusar.page.link/arsF', "_blank");
                        }}/>
                        <Link to={'/1'}>
                            <span style={{textDecoration: "underline", bottom: "5px", color: 'white', position: "relative", marginTop: '10px', zIndex: '9999'}}>펭수가 안보여요</span>
                        </Link>
                        <input type='image' src={explanation} className='btn-result'/>
                    </div>

                </div>
            </div>

        </StartPageStyled>
    )


}
export default StartPage