import React, {useEffect} from "react";
import styled from 'styled-components'

import titleImg from '../../images/Q1/Title@2x.png'
import {Link} from "react-router-dom";
import TitleTemplate from "./TitleTemplate";

import backPageImg from '../../images/common/backPage@2x.png'
import btn1 from "../../images/common/InputAnswer@2x.png";

const Question1_answerStyled = styled.div`
//height: 100%;
//width: 100%;

//.Cont {
//
//}

`

const Question1_answer = ({title, title2, wrongText, url}) => {


    return (
        <Question1_answerStyled>

            <TitleTemplate titleImg={titleImg}
                           title={title}
                           title2={title2}/>


            <div className='Cont-main'>
                <div className='cont-body'>
                    <span className='wrong'>오답입니다.</span><br/><br/>
                    <span className='wrong2'>{wrongText}</span>
                </div>
            </div>

            <div className='footer'>
                {/*<div className='input-answer'>*/}
                <Link to={url}>
                    <img src={backPageImg} className='btn-result'/>
                </Link>

                {/*</div>*/}
            </div>
        </Question1_answerStyled>
    )


}

export default Question1_answer;