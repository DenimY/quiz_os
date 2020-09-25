import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import Modal from "../../Containers/Modal";
import pointer from "../../images/common/Pointer.png";


const TitleStyled = styled.div`
height: 100%;
width: 100%;

`

const TitleTemplate = ({titleImg, title, title2, map}) => {

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
                    <img src={titleImg}/>
                    <br/>
                    <br/>
                    <hr width="100%" color="black"/>
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
                            ><img style={{width: '100%'}} src={map}/>
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