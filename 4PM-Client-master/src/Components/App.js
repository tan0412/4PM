import React, { Component } from 'react';
import {
    BrowserRouter as Router,
  } from "react-router-dom";

import Main from './Main/Main';
import MenuLeft from './Menu/MenuLeft';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="">
                    <MenuLeft/>
                    <Main/>
                </div>
            </Router>   
        );
    }
}

export default App;