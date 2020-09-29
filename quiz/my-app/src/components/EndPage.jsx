import React from "react";
import styled from 'styled-components'

import backgroundImg from '../images/startPage/backgroundImg.png'
import eyesOne from '../images/startPage/eyesoneBtn.png'

const EndPageStyled = styled.div`
width: 100%;
height: 100%;
position: fixed;
overflow: scroll;
line-height: 170% !important;

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
  font-size: 18px;
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

.title-span{
font-size: 44px !important;
font-family: NanumSquareRoundEB;
line-height: 130% !important;
}

`

const EndPage = () => {

    return (
        <EndPageStyled>
            <img src={backgroundImg}/>
            <div className='body-cont'>


                <div className='main-text'>

                    <span className={'title-span'}>남산공원</span>
                    <span className={'title-span'}>퀘스트 완료!</span>

                    <br/>
                    <br/>
                    <br/>

                    <span>수고하신 여러분께</span>
                    <br/>
                    <span>그랜드 하얏트 서울의 델리에서</span>
                    <span>해당 페이지를 보여드리면</span>
                    <span>고급초콜릿을 드립니다</span>
                    <br/>
                    <span>마지막으로</span>
                    <span>아이즈원의 AR응원도 보고,</span>
                    <span>맛있는 초콜릿도 즐기세요!</span>

                </div>
                <div className={'footer-body'}>
                    <div className='input-answer' style={{display: "flex", flexDirection: "column", margin: "auto", padding: 0}}>
                        <input type='image' src={eyesOne} className='btn-result' onClick={() => {
                            window.open('https://bit.ly/3kNKDIE', "_blank");
                        }}/>
                    </div>

                </div>
            </div>

        </EndPageStyled>
    )


}
export default EndPage