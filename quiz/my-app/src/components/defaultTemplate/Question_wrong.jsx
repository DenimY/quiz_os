import React, {useEffect} from "react";
import styled from 'styled-components'

import {Link} from "react-router-dom";
import TitleTemplate from "./TitleTemplate";

import backPageImg from '../../images/common/backPage@2x.png'

const Question1_answerStyled = styled.div`
height: 100%;
width: 100%;

//.Cont {
//
//}

`

const Question1_wrong = ({title, title2, wrongText, url, titleImg}) => {


    return (
        <Question1_answerStyled>

            <TitleTemplate titleImg={titleImg}
                           title={title}
                           title2={title2}/>


            <div className='Cont-main'>
                <div className='cont-body' style={{width1: '100%'}}>
                    <span className='wrong'>오답입니다.</span><br/><br/>
                    {/*<div className={'textBox'}>*/}
                        <pre className='wrong2'>{wrongText}</pre>
                    {/*</div>*/}
                </div>
            </div>

            <div className='footer'>
                {/*<div className='input-answer'>*/}
                <Link to={{
                    pathname: url,
                    state: {
                        title: title,
                        title2: title2,
                    }
                }}>
                    <img src={backPageImg} className='btn-result'/>
                </Link>

                {/*</div>*/}
            </div>
        </Question1_answerStyled>
    )


}

export default Question1_wrong;