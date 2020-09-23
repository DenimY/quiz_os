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
            </MainComponentStyled>
        )
    }

}

export default MainComponent;