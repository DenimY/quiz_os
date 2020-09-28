import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style/common.scss'


import MainComponent from "./components/MainComponent";

import {BrowserRouter, Route, Link} from "react-router-dom"

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      title: null
    }
  }

    componentDidMount() {
    fetch('http://localhost:3001/api')
      .then(res => res.json())
      .then(data => this.setState({title: data.title}));
  }

   render() {
       return (
           <div className="App Cont">

               {/*<header className="App-header">*/}
               <header>
                   {/*<img src={logo} className="App-logo" alt="logo" />*/}
               </header>
               <body>
               {/*<BrowserRouter>*/}
               {/*</BrowserRouter>*/}

               <MainComponent/>

               </body>
           </div>
       );
   }
}

export default App;
