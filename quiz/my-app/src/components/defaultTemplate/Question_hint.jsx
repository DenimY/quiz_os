import React, {useState, useEffect} from "react";
import styled from 'styled-components'

import btn1 from '../../images/common/backPage@2x.png'

import {Link} from "react-router-dom";
import TitleTemplate from "./TitleTemplate";


const QuestionStyled = styled.div`
//height: 100%;
//width: 100%;
`
const Question_hint = ({title, title2, titleImg, hintImg, url, hintText}) => {

    return (
        <QuestionStyled>

            <TitleTemplate
                titleImg={titleImg}
                title={title}
                title2={title2}
            />


            <div className='Cont-main'>

                {/*question image */}
                <div className='cont-body' style={{paddingLeft:"15px",
                                               paddingRight:"15px",}}>
                    <pre className='question'>
                            {hintText}
                    </pre>
                    <img className='' src={hintImg} style={{
                        // paddingLeft: "30px",
                        // paddingRight: "30px",
                    }}>
                    </img>
                </div>
                <div>

                </div>
            </div>

            <div className='footer'>
                <Link to={{
                    pathname: url,
                    state: {
                        title: title,
                        title2: title2,
                    }
                }}>
                    <input type='image' src={btn1} className='btn-result'/>
                </Link>

            </div>
        </QuestionStyled>
    )


}

export default Question_hint;