import React, {Component} from "react";
import styled from 'styled-components'

import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";


import Question1 from './Question1'
import Question1_answer from "./Question1_answer";

const MainComponentStyled = styled.div`
//height: 100%;

//.Cont {
//
//}

`

class MainComponent extends Component {
    render() {

        return (
            <MainComponentStyled>
                <div style={{
                    // position: "fixed",
                    // top: "0px",
                    // left: "0px",
                    // bottom: "0px",
                    // right: "0px",
                    // width:"100%",
                    // height:"100%",
                    // zIndex:"-1"
                }}>

                </div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/answer/1' component={Question1_answer}/>
                        <Route exact path='/' component={Question1}/>
                        <Redirect path='*' to='/'/>
                    </Switch>
                </BrowserRouter>

                {/*<Question1/>*/}


                {/*<div className='cont-header'>*/}
                {/*    AR 퀘스트(1)*/}

                {/*    <div className='title'>*/}
                {/*        <div className='first'>*/}
                {/*            첫 번째 미션,*/}
                {/*        </div>*/}
                {/*        <div className='second'>*/}
                {/*            남산의 야생조류*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*/!*question image *!/*/}
                {/*<div className='cont-body'>*/}
                {/*    <img src=''>*/}
                {/*    </img>*/}
                {/*</div>*/}

                {/*/!*질문*!/*/}
                {/*<div>*/}

                {/*</div>*/}

                {/*<div className='footer'>*/}
                {/*    <input type='Button' className='btn-result' value='정답 입력하기'/>*/}

                {/*</div>*/}
            </MainComponentStyled>
        )
    }

}

export default MainComponent;