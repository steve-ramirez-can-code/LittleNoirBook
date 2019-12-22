import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import  './Styling/Landing.css';

class Landing extends Component{
    render(){
        return(
            <div className = "landing-main-div">
                <Link to = "/register">
                    <button type="button">
                        Register
                    </button>
                </Link>
                <Link to = "/login">
                    <button type="button">
                        Log In
                    </button>
                </Link>
            </div>
        )}
    }
    

export default Landing;