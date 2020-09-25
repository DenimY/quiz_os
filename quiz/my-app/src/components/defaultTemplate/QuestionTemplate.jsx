import React, {useState, useEffect} from "react";
import {Popconfirm, message, Button} from 'antd';
import styled from 'styled-components'
import Modal from "../../Containers/Modal";

import btn1 from '../../images/common/InputAnswer@2x.png'

import {Link} from "react-router-dom";
import TitleTemplate from "./TitleTemplate";


const Question1Styled = styled.div`
height: 100%;
width: 100%;
`
const QuestionTemplate = ({title, title2, titleImg, quizImg, question, hint, map, hintUrl, url}) => {

    /*const [inputUrl, setInputUrl] = ("");
    const [hintUrl, setHintUrl] = ("");

    useEffect(() =>{
        // let hint = url
        setInputUrl({url}.url + '/input')
        setHintUrl({url}.hint + 'hint')
    }, [])*/


    return (
        <Question1Styled>

            <TitleTemplate
                titleImg={titleImg}
                title={title}
                title2={title2}
                map={map}
            />


            <div className='Cont-main'>

                {/*question image */}
                <div className='cont-body'>
                    <pre className='question'>
                            {question}
                    </pre>
                    <img className='' src={quizImg}>
                    </img>
                    <p className='hint-text'>
                        {hint}
                    </p>
                </div>
                <div>

                </div>
            </div>

            <div className='footer'>
                <Link to={url}>
                    <input type='image' src={btn1} className='btn-result'/>
                </Link>
                {
                    {hintUrl}.hintUrl === undefined ?
                        (<></>) : (
                            <Link to={hintUrl}>
                                <span className={'aHrefText'}>힌트가 더 필요해요!</span>
                            </Link>
                        )
                }

            </div>
        </Question1Styled>
    )


}

export default QuestionTemplate;