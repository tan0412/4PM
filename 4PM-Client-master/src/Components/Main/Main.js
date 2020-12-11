import React, { Component } from 'react';
import "../../CSS/Main/Main.css";
import "../../CSS/Content/gallery.css"
import Home from './Content/Home';
import Gallery from './Content/Gallery';
import {
    BrowserRouter as
    // eslint-disable-next-line
    Switch,
    Route,
    // Router,
    // Link
  } from "react-router-dom";
import Footer from './Footer/Footer';
import Upload from '../Upload';
// import Upload from './Upload';
  
class Main extends Component {
    render() {
        return (
            <div className = "Main">
                <Route exact path="/Home">
                    <Home /> 
                </Route>
                <Route exact path="/OutDoor">
                    <Gallery categoryID = "B595B374-AA48-4FCB-ACAD-19628ED79F0A"/>
                </Route>
                <Route exact path="/Product">
                    <Gallery categoryID = "BB040198-04FC-4D9E-B722-53087E31DC7A"/>
                </Route>
                <Route exact path="/Food">
                    <Gallery categoryID = "57EBE306-F425-4B1D-A4A8-1CAC8A8F0834"/>
                </Route>
                <Route exact path="/Fashion">
                    <Gallery categoryID = "C81C7506-8B6D-4E21-B612-DD3662D10412"/>
                </Route>
                <Route exact path="/Beauty">
                    <Gallery categoryID= "570227CC-5A9C-40AB-9C31-0E3853733927" />
                </Route>
                <Route exact path="/Indoor">
                    <Gallery categoryID= "86BA9A3F-6FCA-476F-B901-F7BFA0FE7A30" />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/Admin/Upload">
                    <Upload/>
                </Route>
                <Footer/>
            </div>
        );
    }
}

export default Main;