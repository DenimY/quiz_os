import React from "react";
import styled from "styled-components";
import '../style/modal.scss'


const ModalWrapper = styled.div`
margin: auto;
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  overflow: auto;
  outline: 0;
  
`

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 998;
  
`

const closeButton = styled.div`
top: 210px;
right: 19px;

`
const ModalInner = styled.div`
margin: auto;
  box-sizing: border-box;
  position: relative;
  //box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  //background-color: #fff;
  //border-radius: 10px;
  //width: 360px;
  //width: 360px;
  width: 100%;
  height: auto;
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  //padding-top: 170px;
  padding-top: 45%;
  //padding: 20px 20px;
  //padding: 40px 0px;
  //background: none;
  
  
  
  div{

  //padding: 20px 20px;
  z-index: 1000;
  width:0px;
  height: 0px;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid black;
  
  }
  &:before{
  
  //padding: 20px 20px;
  z-index: 1000;
  width:0px;
  height: 0px;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid black;
  
  }
  
`

function Modal({className, onClose, visible, children, closable}) {

    const close = (e) => {

        if (onClose) {
            onClose(e)
        }
    }

    return (
        <>
            <ModalOverlay visible={visible}/>
            <ModalWrapper className={className} tabIndex="-1" visible={visible}>
                <ModalInner tabIndex="20" className="modal-inner" s>
                    {/*<div>*/}
                    {children}
                    {closable && <closeButton className='modal-close' onClick={close}></closeButton>}
                    {/*</div>*/}

                </ModalInner>
            </ModalWrapper>
        </>
    )
}

export default Modal;
