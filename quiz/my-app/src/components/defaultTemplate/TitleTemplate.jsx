import React, {useEffect, useState} from "react";
import styled from 'styled-components'
// import Modal from "../../Containers/Modal";
import Modal from "../../Containers/Modal_map";
import pointer from "../../images/common/Pointer.png";


const TitleStyled = styled.div`
//height: 100%;
width: 100%;
//margin-left: 15px;
//position: fixed;


`

const TitleTemplate = ({titleImg, title, title2, map, mapText}) => {

    const [isVisible, setIsVisible] = useState(false);

    const [usePointer, setUsePointer] = useState(true);

    useEffect(() => {
        if ({map}.map == undefined) {
            setUsePointer(false)
        }
    }, [])


    return (
        <TitleStyled>

            <div className='cont-header'>
                <div className='header-title'>
                    <img src={titleImg} style={{paddingLeft : "15px"}}/>
                    <br/>
                    <br/>
                    <hr style={{height: '0.1px'}} width="100%" color="black"/>

                </div>
            </div>

            <div className='title'>
                {
                    usePointer === true ?
                        (<div className='title-text'>
                            <span className='first'>{title}</span><br/>
                            <span className='second'>{title2}</span>
                        </div>)
                        :
                        (<div>
                                <span className='first'>{title}</span><br/>
                                <span className='second'>{title2}</span>
                            </div>
                        )
                }


                {
                    usePointer === true ? (
                        <div className='location' visible={usePointer}>
                            <Modal visible={isVisible}
                                   closable={true}
                                   onClose={() => {
                                       setIsVisible(false)
                                   }}
                                   children={
                                       <>
                                        <div style={{width: '100%', height: '100%', border: 0}}>
                                       <img style={{width: '100%'}} src={map}/>
                                           <div className={'textBox'} style={{
                                               width: '89%',
                                               // height: '100%',
                                               border: 0,
                                               margin: "auto",
                                               position: "absolute",
                                               bottom: "8%",
                                               height: "70px",
                                               display:"table",
                                               paddingLeft:"20px",
                                               paddingRight:"30px",
                                           }}>
                                               {/*<pre className={'textBox'} style={{*/}
                                               <pre  style={{
                                                   margin: 'auto',
                                                   // word-break:break-all;
                                                   whiteSpace: "pre-line",
                                                   fontSize: '16px',
                                                   lineHeight: '130%',
                                                   display: "table-cell",

                                               }}>{mapText}</pre>
                                           </div>
                                        </div>
                                       </>
                                   }
                            >

                            </Modal>
                            <img className='pointer_img' src={pointer} onClick={() => {
                                setIsVisible(true)
                            }}/>
                        </div>
                    ) : (<></>)
                }

            </div>


        </TitleStyled>
    )


}

export default TitleTemplate;