import React, { Component } from 'react';
import  './Styling/Footer.css';
import {Route, Switch, Link, Redirect} from 'react-router-dom';
import axios from "axios";

class Footer extends Component {
 
constructor() {
    function colorTime() {
        console.log("It's color time!");
    };
    
    super()
        this.state ={
            randoR: Math.round(Math.random()*255),
            randoG: Math.round(Math.random()*255),
            randoB: Math.round(Math.random()*255),
            color:""
        }
};

componentWillMount(){
 
      console.log('this is the timeout of 5 seconds')
        setInterval( ()=> 
        this.setState({
                randoR: (Math.round(Math.random()*105))+150,
                randoG: (Math.round(Math.random()*105))+150,
                randoB: (Math.round(Math.random()*105))+150,
                color: `rgb(${this.state.randoR},${this.state.randoG},${this.state.randoB})`
            }),1000);
}

// componentWillUnmount(){ 
//     clearInterval(this.setState)
// };

    


render(){
    return(
        <footer className="App-footer">
            <span>
                Created by: Steve Ramirez 
                <br/>
                Email:<a href="mailto:steve.can.code@gmail.com" style={{"color": this.state.color}}> steve.can.code@gmail.com</a>
            </span>
        </footer>
    )}   
};

export default Footer;
