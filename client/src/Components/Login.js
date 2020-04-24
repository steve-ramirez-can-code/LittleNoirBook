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
        axios.post("http://localhost:3001/users/login", {
            userName:this.state.userName,
            passwordConfirm:this.state.passwordConfirm,
        })
        .then(res => {
            // this.props.loginUser(res.data.data.id)
            window.alert("Login Successful")
            window.location="home"
        })
        .catch(function(err) {
            console.log(`this is your error!: ${err.message}`)
            ;
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