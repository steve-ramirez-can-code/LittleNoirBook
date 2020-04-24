import React, { Component } from 'react';
import  './Styling/Register.css';
import {Route, Switch, Link, Redirect} from 'react-router-dom';
import axios from "axios";

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName:"",
            lastName:"",
            userName:"",
            emailAddress:"",
            sexuality:"",
            gender:"",
            passwordDigest:"",
            passwordConfirm:"",
        }
    }
   
    handleChange = (event)=>{
    this.setState({
            [event.target.id]:event.target.value
        })
        console.log(this.state)
    }
    
    handleSubmitToDatabase = (event)=>{
        event.preventDefault();
        axios.post("http://localhost:3001/users/register", {
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            userName:this.state.userName,
            emailAddress:this.state.emailAddress,
            sexuality:this.state.sexuality,
            gender:this.state.gender,
            passwordDigest:this.state.passwordDigest,
            passwordConfirm:this.state.passwordConfirm,
        })
        .then(res => {
            window.alert("Registration Successful");
            console.log(this.props)
            console.log(this)
            this.props.history.push('./login');   
        })
        .catch(function(err) {
            console.log(err);
        });   
    };

 render(){
     return(
    
    <div className="register-container">
        <div>  
            <div className="App-intro">
                Let's make you a Little Black Book. I'll just need some information.
            </div>
            <form>
                <div className="register-text-input-div">
                    <input type="text" placeholder="First Name" id="firstName" onChange={this.handleChange}/>
                    <input type="text" placeholder="Last Name" id="lastName" onChange={this.handleChange}/><br/>
                    <input type="text" placeholder="Username" id="userName" onChange={this.handleChange}/>
                    <input type="email" placeholder="Email Address" id="emailAddress" onChange={this.handleChange}/><br/>
                    <input type="password" placeholder="Enter a password" id="passwordDigest" onChange={this.handleChange}/>
                    <input type="password" placeholder="Confirm your password"id ="passwordConfirm" onChange={this.handleChange}/>
                </div>
                <div className="select-submit-container">
                    <legend>Sexuality</legend>       
                        <select name = "sexuality" id= "sexuality" onChange={this.handleChange}>
                            <option value = "">Select</option>
                            <option value = "homosexual">Homosexual</option>
                            <option value = "heterosexual">Heterosexual</option>
                            <option value = "bisexual">Bisexual</option>
                            <option value = "pansexual">Pansexual</option>
                            <option value = "queer">Queer</option>
                        </select>                    
                    <legend>Gender</legend>       
                        <select name = "gender" id= "gender" onChange={this.handleChange}>
                            <option value = "">Select</option>
                            <option value = "Cismale">Cisgender Male</option>
                            <option value = "Cisfemale">Cisgender Female</option>
                            <option value = "Transmale">Transgender Male</option>
                            <option value = "Transfemale">Transgender Female</option>
                            <option value = "Agender">Agender</option>
                        </select> 
                    <div className="button">
                        <input type="submit" onClick={this.handleSubmitToDatabase}/>
                    </div>
                    <div>
                        {this.state.message}
                    </div>
                </div>       
            </form> 
        </div>
    </div>
    )}
}

export default Register;