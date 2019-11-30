import React, { Component } from 'react';
import  './Styling/Header.css';
import {Route, Switch, Link, Redirect} from 'react-router-dom';
import axios from "axios";

class Header extends Component {

render(){
    return(   
        <div className="App-header">
            <h1 className="App-title">Little Black Book</h1>
                <p className="App-intro">
                The way to keep track of your <br/>
                sexual and reproductive health on your own terms.
                </p>
                <div className="logo">
                    <img className = "App-logo" src="https://pbs.twimg.com/profile_images/1806599091/Logo_LBB_Square_400x400.jpg" alt="picture of little black book logo"/>
                </div>
        </div>
    )}
}

export default Header;
