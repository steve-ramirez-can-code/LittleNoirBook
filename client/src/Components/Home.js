import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ContactCreate from "./ContactCreate";
import Resources from "./Resources";
import  '../App.css';


class Home extends Component {

render (){
    return(
    <div className = "Home-Div">
            Below are some of the features that you can perform with your Little Black Book
        <br/>    
        <br/>    
        <Link to="/createcontact">
                <button type="button">
                   Create Contact in your Little Black Book
                </button>
        </Link> 
        <br/>
        
        <br/>
        <Link to ="/findclinics">
            <button type = "button">
                    Find Nearby STD/HIV Clinics
            </button>
        </Link>
        <br/>

        <br/>
        <Link to ="/resources">
            <button type = "button">
                    Browse Helpful Literature
            </button>
        </Link>
        
    </div>

    )};
}

export default Home;