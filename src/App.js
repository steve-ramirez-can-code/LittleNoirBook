import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Landing from "./Components/Landing.js";
import Register from "./Components/Register.js";
import Home from "./Components/Home.js";
import Login from "./Components/Login.js";
import Header from "./Components/Header.js"
import Footer from "./Components/Footer.js"
import './App.css';
import ContactCreate from './Components/ContactCreate';
import FindClinics from './Components/FindClinics';
import Resources from './Components/Resources.js';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            loggedInUser: null,
        }
    }

    loginUser = (userid) =>{
        this.setState({
            loggedInUser: userid
        });
        console.log("YOU ARE IN LOGINUSER")
    }

    render(){
        return(
            <div className= "Full-App-Div">
                <Header/>
                <div className= "Component-Rendering-Div" >  
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/login" render={()=> {return <Login loginUser={this.loginUser} stateUser={this.state.loggedInUser}/>} }/>
                        <Route exact path="/createcontact" render={(props)=> {return <ContactCreate userid={this.state.loggedInUser}/>} }/> 
                        <Route exact path="/findclinics" component={FindClinics} />
                        <Route exact path="/resources" component={Resources} />
                    </Switch>
                </BrowserRouter>  
                </div>
                <Footer/>               
            </div>
        )}
    }   
export default App;
