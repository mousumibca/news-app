import "./App.css"
import React, { Component } from 'react'
import Nav from './components/Nav';
import News from "./components/News";
import { BrowserRouter as Router, Route,Routes  } from "react-router-dom"
export default class App extends Component {
  toggleMode = () => {
    if (document.body.style.backgroundColor === "white") {
      document.body.style.backgroundColor = "black";
      document.body.style.color="white";
      //setInterval(() => {
      //document.title = "TextUtils  is Amazing";
      //}, 2000);
      //setInterval(() => {
      //document.title = "Install TextUtils";
      //}, 1500);
    }
    else {
      document.body.style.backgroundColor = "white ";
      document.body.style.color="black"
    }
  }
  render() {
    return (
      <div>
        <Router>
          <Nav toggleMode={this.toggleMode}/>
          <Routes>
            <Route exact path="/" element={<News key="general" pageSize={9} country="in" category="GENERAL" />}></Route>
            <Route exact path="/business" element={<News key="business" pageSize={9} country="in" category="BUSINESS"/>}></Route>
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={9} country="in" category="ENTERTAINMENT"/>}></Route>
            <Route exact path="/health" element={<News key="health" pageSize={9} country="in" category="HEALTH"/>}></Route>
            <Route exact path="/science" element={<News key="science" pageSize={9} country="in" category="SCIENCE"/>}></Route>
            <Route exact path="/sports" element={<News key="sports" pageSize={9} country="in" category="SPORTS"/>}></Route>
            <Route exact path="/technology" element={<News key="technology" pageSize={9} country="in" category="TECHNOLOGY"/>}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}

