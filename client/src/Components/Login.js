import React, { Component } from 'react';
import  '../App.css';
import {Route, Switch, Link, Redirect} from 'react-router-dom';
import axios from "axios";

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
        userName:"",
        passwordConfirm:""    
        }
    }
   
    handleLoginChange = (event)=>{
    this.setState({
            [event.target.id]:event.target.value
        })
        console.log(this.state)
    }
    
    handleConfirmWithDatabase = (event)=>{
        event.preventDefault();
        axios.post("/users/login", {
            userName:this.state.userName,
            passwordConfirm:this.state.passwordConfirm,
        })
        .then(res => {
            this.props.loginUser(res.data.data.id)
            console.log("this is the response.data: ");
            console.log(res.data.data.id);
            console.log("this is the state: ");
            console.log(this.state);
            console.log(this.props);
            window.alert("Login Successful")
        })
        .catch(function(err) {
            console.log(err.messsage);
        });   
    };
    
    render(){
        if (this.props.stateUser) {
            return (
                <Redirect to="/home" />
            )
        }
        return(
            <div>
                <h2 className="App-title"> Log in below with your Little Black Book credentials</h2>
                <div className='App-intro'>
                    <form>
                        <input type="text" placeholder="username" id="userName" onChange={this.handleLoginChange}/>    
                        <input type="text" placeholder="password" id="passwordConfirm"onChange={this.handleLoginChange}/> <br/>   
                        <input type="submit" onClick={this.handleConfirmWithDatabase}/>
                    </form>
                </div>
            </div>
        )}
    }

export default Login;