import React from "react";
import styled from 'styled-components'

import btn1 from '../../images/common/InputAnswer@2x.png'

import {Link} from "react-router-dom";
import TitleTemplate from "./TitleTemplate";


const Question1Styled = styled.div`
height: 100%;
width: 100%;
//position: absolute;

img{
//padding-left: 20px;
//padding-right: 20px;
}
`

const QuestionTemplate = ({title, title2, titleImg, quizImg, quizImg2, question, hint, map, mapText, hintUrl, url, BtnAR, nexturl}) => {

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
                mapText={mapText}
            />


            <div className='Cont-main'>

                {/*question image */}
                <div className='cont-body'>
                    <pre className='textBox'>
                    <span className='question'>
                            {question}
                    </span>
                    </pre>
                    {
                        quizImg2 != undefined ?
                            (<div className={'imgDiv'}>
                                <img src={quizImg}>
                                </img>
                                <div style={{width :'20px'}}></div>
                                <img src={quizImg2}>
                                </img>
                            </div>)
                            :
                            (
                                <div style={{paddingRight: '20px', paddingLeft: '20px'}}>
                                    <img src={quizImg}>
                                    </img>
                                </div>)
                    }

                    <p className='hint-text'>
                        {hint}
                    </p>
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
                        titleImg: titleImg,
                    }
                }}>
                    <input type='image' src={btn1} className='btn-result'/>
                </Link>

                {
                    {BtnAR}.BtnAR === undefined ?
                        (<></>) : (
                            <>
                                <a href={'https://bit.ly/3h7qBqy'}>
                                    <input type='image' src={BtnAR} className='btn-result'/>
                                </a>
                                <Link to={{
                                    pathname: '/2',
                                    state: {
                                        title: title,
                                        title2: title2,
                                        titleImg: titleImg,
                                    }
                                }}>
                                    <span className={'aHrefText'}>AR이 안보여요</span>
                                </Link>

                            </>
                        )
                }

                {
                    {hintUrl}.hintUrl === undefined ?
                        (<></>) : (
                            <Link to={{
                                pathname: hintUrl,
                                state: {
                                    title: title,
                                    title2: title2,
                                    titleImg: titleImg,
                                }
                            }}>
                                <span className={'aHrefText'}>힌트가 더 필요해요!</span>
                            </Link>
                        )
                }

            </div>
        </Question1Styled>
    )


}

export default QuestionTemplate;