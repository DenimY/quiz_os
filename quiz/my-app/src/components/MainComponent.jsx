import React, {Component} from "react";
import styled from 'styled-components'

import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";


import StartPage from './StartPage';
import EndPage from './EndPage';

import Question1_main from './Q1/Question1_main'
import Question1_Input from "./Q1/Question1_Input";
import Question1_wrong from "./Q1/Question1_wrong";
import Question1_answer from "./Q1/Question1_answer";


import Question2_main from './Q2/Question2_main'
import Question2_Input from "./Q2/Question2_Input";
import Question2_wrong from "./Q2/Question2_wrong";
import Question2_answer from "./Q2/Question2_answer";
import Question2_hint from "./Q2/Question2_hint";
import Question3_main from './Q3/Question3_main'
import Question3_Input from "./Q3/Question3_Input";
import Question3_wrong from "./Q3/Question3_wrong";
import Question3_answer from "./Q3/Question3_answer";

import Question3_2_main from './Q3_2/Question3_2_main'
import Question3_2_Input from "./Q3_2/Question3_2_Input";
import Question3_2_wrong from "./Q3_2/Question3_2_wrong";
import Question3_2_answer from "./Q3_2/Question3_2_answer";


import Question4_main from './Q4/Question4_main'
import Question4_Input from "./Q4/Question4_Input";
import Question4_wrong from "./Q4/Question4_wrong";
import Question4_answer from "./Q4/Question4_answer";


import Question5_main from './Q5/Question5_main'
import Question5_Input from "./Q5/Question5_Input";
import Question5_wrong from "./Q5/Question5_wrong";
import Question5_answer from "./Q5/Question5_answer";
import Question5_hint from "./Q5/Question5_hint";

const MainComponentStyled = styled.div`
height: 100%;

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
                        <Route path='/main' component={StartPage}/>
                        <Route path='/end' component={EndPage}/>

                        <Route path='/1input' component={Question1_Input}/>
                        <Route path='/1wrong' component={Question1_wrong}/>
                        <Route path='/1correct' component={Question1_answer}/>
                        <Route path='/1' component={Question1_main}/>

                        <Route path='/2' component={Question2_main}/>
                        <Route path='/2input' component={Question2_Input}/>
                        <Route path='/2wrong' component={Question2_wrong}/>
                        <Route path='/2correct' component={Question2_answer}/>
                        <Route path='/2hint' component={Question2_hint}/>

                        <Route path='/3' component={Question3_main}/>
                        <Route path='/3input' component={Question3_Input}/>
                        <Route path='/3wrong' component={Question3_wrong}/>
                        <Route path='/3correct' component={Question3_answer}/>

                        <Route path='/3_2' component={Question3_2_main}/>
                        <Route path='/3_2input' component={Question3_2_Input}/>
                        <Route path='/3_2wrong' component={Question3_2_wrong}/>
                        <Route path='/3_2correct' component={Question3_2_answer}/>


                        <Route path='/4' component={Question4_main}/>
                        <Route path='/4input' component={Question4_Input}/>
                        <Route path='/4wrong' component={Question4_wrong}/>
                        <Route path='/4correct' component={Question4_answer}/>

                        <Route path='/5' component={Question5_main}/>
                        <Route path='/5input' component={Question5_Input}/>
                        <Route path='/5wrong' component={Question5_wrong}/>
                        <Route path='/5correct' component={Question5_answer}/>
                        <Route path='/5hint' component={Question5_hint}/>


                        <Redirect path='*' to='/main'/>
                    </Switch>
                </BrowserRouter>
            </MainComponentStyled>
        )
    }

}

export default MainComponent;