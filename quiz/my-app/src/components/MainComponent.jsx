import React, {Component} from "react";
import styled from 'styled-components'

import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";


import Question1 from './Question1'
import Question1_Input from "./Question1_Input";
import Question1_wrong from "./Question1_wrong";
import Question1_answer from "./Question1_answer";
import map from "../images/Q1/Rectangle 23@2x.png";

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
                        <Route exact path='/1' component={Question1}/>
                        <Route exact path='/1/input' component={Question1_Input}/>
                        <Route exact path='/1/wrong' component={Question1_wrong}/>
                        <Route exact path='/1/correct' component={Question1_answer}/>
                        <Redirect path='*' to='/1'/>
                    </Switch>
                </BrowserRouter>
            </MainComponentStyled>
        )
    }

}

export default MainComponent;